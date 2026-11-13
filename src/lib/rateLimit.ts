import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { PENGATURAN, type NamaBatas } from "@content/pengaturan";

/**
 * Pembatas permintaan sederhana di memori (jendela waktu tetap per pengunjung).
 * Cukup untuk satu server. Kalau nanti aplikasi dijalankan di beberapa server sekaligus,
 * hitungannya perlu dipindah ke penyimpanan bersama.
 *
 * Pengunjung dikenali dari alamat IP yang diteruskan reverse proxy (X-Forwarded-For).
 * Alamat IP hanya dipakai sebagai hash di memori dan tidak pernah disimpan ke database.
 */
type Catatan = { jumlah: number; habis: number };

const penyimpan = globalThis as unknown as { __vkkBatas?: Map<string, Catatan> };
const peta = (penyimpan.__vkkBatas ??= new Map<string, Catatan>());

/** Fungsi inti, dipisah supaya bisa dites tanpa permintaan HTTP. */
export function bolehLewat(kunci: string, maks: number, jendelaMs: number, kini = Date.now()): boolean {
  const catatan = peta.get(kunci);
  if (!catatan || catatan.habis <= kini) {
    if (peta.size > 20000) {
      for (const [k, c] of peta) if (c.habis <= kini) peta.delete(k);
    }
    peta.set(kunci, { jumlah: 1, habis: kini + jendelaMs });
    return true;
  }
  if (catatan.jumlah >= maks) return false;
  catatan.jumlah += 1;
  return true;
}

export function kosongkanBatas() {
  peta.clear();
}

async function kunciPengunjung(): Promise<string> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "tanpa-alamat";
  const garam = process.env.SIDIK_SALT || "garam-lokal-ganti-di-produksi";
  return createHash("sha256").update(`${garam}:ip:${ip}`).digest("hex").slice(0, 24);
}

/** true kalau pengunjung ini masih di bawah batas untuk tindakan tersebut. */
export async function dalamBatas(nama: NamaBatas): Promise<boolean> {
  const { maks, menit } = PENGATURAN.batas[nama];
  return bolehLewat(`${nama}:${await kunciPengunjung()}`, maks, menit * 60_000);
}
