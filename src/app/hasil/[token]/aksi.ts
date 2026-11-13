"use server";

import { eq } from "drizzle-orm";
import { TEKS } from "@content/teks";
import { ambilDb } from "@/lib/db/client";
import { players } from "@/lib/db/schema";
import { ambilPemainDariToken } from "@/lib/pemain";
import { dalamBatas } from "@/lib/rateLimit";

export type HasilAksi = { ok: true } | { ok: false; pesan: string };

/**
 * Merapikan nomor WhatsApp Indonesia menjadi bentuk 62xxxxxxxxxx.
 * Hanya angka yang disimpan. Mengembalikan null kalau bentuknya tidak masuk akal.
 */
function rapikanNomor(mentah: unknown): string | null {
  if (typeof mentah !== "string") return null;
  let angka = mentah.replace(/[^\d]/g, "");
  if (angka.startsWith("0")) angka = `62${angka.slice(1)}`;
  else if (angka.startsWith("8")) angka = `62${angka}`;
  return /^62\d{8,13}$/.test(angka) ? angka : null;
}

/** Menyimpan nomor WhatsApp. Hanya disimpan kalau persetujuannya dicentang. */
export async function simpanWhatsapp(token: string, nomor: string, setuju: boolean): Promise<HasilAksi> {
  if (!(await dalamBatas("whatsapp"))) return { ok: false, pesan: TEKS.galat.terlaluSering };
  if (setuju !== true) return { ok: false, pesan: TEKS.whatsapp.galatSetuju };
  const rapi = rapikanNomor(nomor);
  if (!rapi) return { ok: false, pesan: TEKS.whatsapp.galatNomor };

  try {
    const pemain = await ambilPemainDariToken(token);
    if (!pemain) return { ok: false, pesan: TEKS.galat.umum };
    const db = await ambilDb();
    await db.update(players).set({ noWhatsapp: rapi, setujuDihubungi: true }).where(eq(players.id, pemain.id));
    return { ok: true };
  } catch (galat) {
    console.error("[simpanWhatsapp] gagal", galat);
    return { ok: false, pesan: TEKS.galat.umum };
  }
}

/** Menghapus nomor WhatsApp dan mencabut persetujuan. */
export async function hapusWhatsapp(token: string): Promise<HasilAksi> {
  if (!(await dalamBatas("whatsapp"))) return { ok: false, pesan: TEKS.galat.terlaluSering };
  try {
    const pemain = await ambilPemainDariToken(token);
    if (!pemain) return { ok: false, pesan: TEKS.galat.umum };
    const db = await ambilDb();
    await db.update(players).set({ noWhatsapp: null, setujuDihubungi: false }).where(eq(players.id, pemain.id));
    return { ok: true };
  } catch (galat) {
    console.error("[hapusWhatsapp] gagal", galat);
    return { ok: false, pesan: TEKS.galat.umum };
  }
}

/**
 * Menghapus semua data milik pemain ini: datanya sendiri dan semua isian teman untuknya.
 * Catatan event tetap ada sebagai angka statistik, tapi tidak lagi terhubung ke pemain mana pun.
 */
export async function hapusData(token: string): Promise<HasilAksi> {
  if (!(await dalamBatas("hapus"))) return { ok: false, pesan: TEKS.galat.terlaluSering };
  try {
    const pemain = await ambilPemainDariToken(token);
    if (!pemain) return { ok: false, pesan: TEKS.galat.umum };
    const db = await ambilDb();
    await db.delete(players).where(eq(players.id, pemain.id));
    return { ok: true };
  } catch (galat) {
    console.error("[hapusData] gagal", galat);
    return { ok: false, pesan: TEKS.galat.umum };
  }
}
