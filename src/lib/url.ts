import { headers } from "next/headers";

/**
 * Alamat dasar game, tanpa garis miring di akhir.
 * Memakai BASE_URL kalau diisi. Kalau kosong, diambil dari permintaan
 * yang masuk, supaya link tetap benar saat dibuka dari HP lewat alamat jaringan lokal.
 */
export async function alamatDasar(): Promise<string> {
  const dariEnv = process.env.BASE_URL?.trim().replace(/\/+$/, "");
  if (dariEnv) return dariEnv;

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const lokal = /^(localhost|127\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host);
  const protokol = h.get("x-forwarded-proto") ?? (lokal ? "http" : "https");
  return `${protokol}://${host}`;
}
