import { mkdirSync } from "node:fs";
import path from "node:path";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

/**
 * Koneksi database.
 *
 * - Ada DATABASE_URL: PostgreSQL asli lewat driver pg (dipakai di produksi).
 * - Tidak ada: PGlite, PostgreSQL tertanam yang menyimpan data di .data/pglite.
 *   Cocok untuk lokal dan tes karena tidak perlu memasang apa pun.
 *
 * Skema dan file migrasinya sama untuk keduanya. Migrasi dijalankan otomatis
 * saat koneksi pertama dibuat.
 */
export type Db = NodePgDatabase<typeof schema>;

const penyimpan = globalThis as unknown as { __vkkDb?: Promise<Db> };

async function buatDb(): Promise<Db> {
  const folderMigrasi = path.join(process.cwd(), "drizzle");
  const url = process.env.DATABASE_URL;

  if (url) {
    const { Pool } = await import("pg");
    const { drizzle } = await import("drizzle-orm/node-postgres");
    const { migrate } = await import("drizzle-orm/node-postgres/migrator");
    const db = drizzle(new Pool({ connectionString: url, max: 10 }), { schema });
    await migrate(db, { migrationsFolder: folderMigrasi });
    return db;
  }

  if (process.env.NODE_ENV === "production") {
    console.warn(
      "[db] DATABASE_URL kosong, memakai PGlite di .data/pglite. Untuk produksi, isi DATABASE_URL dengan PostgreSQL.",
    );
  }
  const { PGlite } = await import("@electric-sql/pglite");
  const { drizzle } = await import("drizzle-orm/pglite");
  const { migrate } = await import("drizzle-orm/pglite/migrator");
  const folderData = process.env.PGLITE_DIR ?? path.join(process.cwd(), ".data", "pglite");
  mkdirSync(folderData, { recursive: true });
  const db = drizzle(new PGlite(folderData), { schema });
  await migrate(db, { migrationsFolder: folderMigrasi });
  // API kueri drizzle untuk PGlite dan pg sama, jadi satu tipe dipakai untuk keduanya.
  return db as unknown as Db;
}

export function ambilDb(): Promise<Db> {
  if (!penyimpan.__vkkDb) {
    penyimpan.__vkkDb = buatDb().catch((galat) => {
      // Jangan simpan kegagalan, supaya permintaan berikutnya mencoba lagi.
      penyimpan.__vkkDb = undefined;
      throw galat;
    });
  }
  return penyimpan.__vkkDb;
}

export { schema };
