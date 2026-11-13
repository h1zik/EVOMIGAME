import { asc, count, eq } from "drizzle-orm";
import { ambilDb } from "./db/client";
import { PENGATURAN } from "@content/pengaturan";
import { friendResponses, players, type Jawaban, type Pemain, type ResponsTeman } from "./db/schema";
import { buatKodePublik, buatTokenRahasia, POLA_KODE_PUBLIK, POLA_TOKEN } from "./id";

type PemainBaru = {
  namaPanggilan: string;
  jawaban: Jawaban[];
  skorSendiri: Record<string, number>;
  sidikPembuat: string;
  src?: string | null;
  kodePengajak?: string | null;
};

export function bentrokUnik(galat: unknown): boolean {
  // Kode galat PostgreSQL untuk pelanggaran indeks unik. Bisa ada di galat atau penyebabnya.
  const g = galat as { code?: string; cause?: { code?: string } } | null;
  return g?.code === "23505" || g?.cause?.code === "23505";
}

/** Menyimpan pemain baru. Kode publik dan token dibuat terpisah, keduanya acak. */
export async function simpanPemainBaru(data: PemainBaru): Promise<{ id: string; token: string; kode: string }> {
  const db = await ambilDb();
  for (let percobaan = 0; ; percobaan++) {
    const kode = buatKodePublik();
    const token = buatTokenRahasia();
    try {
      const [baris] = await db
        .insert(players)
        .values({
        kodePublik: kode,
        tokenRahasia: token,
        namaPanggilan: data.namaPanggilan,
        jawaban: data.jawaban,
        skorSendiri: data.skorSendiri,
        sidikPembuat: data.sidikPembuat,
        src: data.src ?? null,
        kodePengajak: data.kodePengajak ?? null,
        })
        .returning({ id: players.id });
      return { id: baris.id, token, kode };
    } catch (galat) {
      // Kode publik kebetulan sama dengan yang sudah ada: buat ulang, maksimal beberapa kali.
      if (bentrokUnik(galat) && percobaan < 4) continue;
      throw galat;
    }
  }
}

export async function ambilPemainDariToken(token: string): Promise<Pemain | null> {
  if (!POLA_TOKEN.test(token)) return null;
  const db = await ambilDb();
  const [pemain] = await db.select().from(players).where(eq(players.tokenRahasia, token)).limit(1);
  return pemain ?? null;
}

export async function jumlahResponsTeman(playerId: string): Promise<number> {
  const db = await ambilDb();
  const [baris] = await db
    .select({ jumlah: count() })
    .from(friendResponses)
    .where(eq(friendResponses.playerId, playerId));
  return baris?.jumlah ?? 0;
}

export async function ambilPemainDariKode(kode: string): Promise<Pemain | null> {
  if (!POLA_KODE_PUBLIK.test(kode)) return null;
  const db = await ambilDb();
  const [pemain] = await db.select().from(players).where(eq(players.kodePublik, kode)).limit(1);
  return pemain ?? null;
}

/**
 * Respons teman untuk satu pemain, dari yang paling awal.
 * Dibatasi sesuai batas maksimal, jadi respons yang lolos karena dua kiriman
 * masuk bersamaan di batas terakhir tidak ikut dihitung.
 */
export async function ambilResponsTeman(playerId: string): Promise<ResponsTeman[]> {
  const db = await ambilDb();
  return db
    .select()
    .from(friendResponses)
    .where(eq(friendResponses.playerId, playerId))
    .orderBy(asc(friendResponses.dibuatPada))
    .limit(PENGATURAN.maksRespons);
}

type ResponsBaru = {
  playerId: string;
  pilihanVarian: string[];
  idKalimat: string;
  namaTeman: string | null;
  sidikPerangkat: string;
};

/** Menyimpan respons teman. Mengembalikan false kalau perangkat ini sudah pernah mengisi. */
export async function simpanResponsTeman(data: ResponsBaru): Promise<boolean> {
  const db = await ambilDb();
  try {
    await db.insert(friendResponses).values(data);
    return true;
  } catch (galat) {
    if (bentrokUnik(galat)) return false;
    throw galat;
  }
}
