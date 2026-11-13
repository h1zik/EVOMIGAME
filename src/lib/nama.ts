import { PENGATURAN } from "@content/pengaturan";

/**
 * Membersihkan nama panggilan: buang tag HTML, karakter kendali, dan spasi berlebih.
 * Nama tetap ditampilkan lewat React (otomatis di-escape), ini lapisan tambahan.
 */
export function bersihkanNama(mentah: unknown): string {
  if (typeof mentah !== "string") return "";
  return mentah
    .normalize("NFKC")
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F​-‏‪-‮⁠-⁯﻿]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export type GalatNama = "pendek" | "panjang" | null;

/** Memeriksa panjang nama (dihitung per karakter yang terlihat, bukan per byte). */
export function periksaPanjangNama(nama: string): GalatNama {
  const panjang = [...nama].length;
  if (panjang < PENGATURAN.namaMin) return "pendek";
  if (panjang > PENGATURAN.namaMaks) return "panjang";
  return null;
}
