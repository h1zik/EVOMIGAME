import { randomBytes, randomInt } from "node:crypto";

// Tanpa huruf dan angka yang mudah tertukar (0/o, 1/l/i).
const ABJAD_KODE = "abcdefghjkmnpqrstuvwxyz23456789";

/** Kode pendek untuk link teman. Publik, jadi tidak boleh bisa dipakai menebak token. */
export function buatKodePublik(panjang = 8): string {
  let kode = "";
  for (let i = 0; i < panjang; i++) kode += ABJAD_KODE[randomInt(ABJAD_KODE.length)];
  return kode;
}

/** Token rahasia untuk link hasil: 32 byte acak (256 bit), dibuat terpisah dari kode publik. */
export function buatTokenRahasia(): string {
  return randomBytes(32).toString("base64url");
}

export const POLA_KODE_PUBLIK = /^[a-z0-9]{6,12}$/;
export const POLA_TOKEN = /^[A-Za-z0-9_-]{40,64}$/;
