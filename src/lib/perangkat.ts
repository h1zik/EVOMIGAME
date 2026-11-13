import { createHash } from "node:crypto";

/**
 * Sidik perangkat di sisi server.
 * Browser menyimpan id acak di localStorage (lihat perangkat-klien.ts) dan mengirimkannya.
 * Server hanya menyimpan hash-nya, digabung dengan garam rahasia, jadi id aslinya tidak tersimpan.
 */
export const POLA_ID_PERANGKAT = /^[A-Za-z0-9-]{16,64}$/;

export function hashPerangkat(idPerangkat: string): string {
  const garam = process.env.SIDIK_SALT || "garam-lokal-ganti-di-produksi";
  return createHash("sha256").update(`${garam}:${idPerangkat}`).digest("hex");
}
