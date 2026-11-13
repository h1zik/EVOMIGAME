import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Akses halaman /admin.
 * Kuncinya diambil dari environment variable ADMIN_KEY. Setelah kunci dimasukkan dengan benar,
 * browser diberi cookie berisi turunan (hash) dari kunci itu, bukan kuncinya sendiri.
 */
export const NAMA_KUKI_ADMIN = "vkk_admin";

const sidik = (teks: string) => createHash("sha256").update(teks).digest();

export function kunciAdminTerpasang(): boolean {
  return Boolean(process.env.ADMIN_KEY && process.env.ADMIN_KEY.length >= 8);
}

function tandaSesi(): string {
  return sidik(`sesi-admin:${process.env.ADMIN_KEY}:${process.env.SIDIK_SALT ?? ""}`).toString("hex");
}

/** Membandingkan kunci tanpa membocorkan letak perbedaannya lewat lama waktu. */
export function kunciCocok(masukan: string): boolean {
  if (!kunciAdminTerpasang()) return false;
  return timingSafeEqual(sidik(masukan), sidik(process.env.ADMIN_KEY as string));
}

export async function sudahMasukAdmin(): Promise<boolean> {
  if (!kunciAdminTerpasang()) return false;
  const nilai = (await cookies()).get(NAMA_KUKI_ADMIN)?.value ?? "";
  return timingSafeEqual(sidik(nilai), sidik(tandaSesi()));
}

export async function bukaSesiAdmin() {
  (await cookies()).set(NAMA_KUKI_ADMIN, tandaSesi(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: 60 * 60 * 12,
  });
}

export async function tutupSesiAdmin() {
  (await cookies()).delete({ name: NAMA_KUKI_ADMIN, path: "/admin" });
}
