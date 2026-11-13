import { ambilDb } from "./db/client";
import { events } from "./db/schema";

/** Semua jenis event yang dicatat (bagian 7 panduan). Disimpan di tabel sendiri, tanpa analitik pihak ketiga. */
export const JENIS_EVENT = [
  "mulai_main",
  "selesai_kuis",
  "klik_bagikan",
  "salin_link",
  "teman_buka_link",
  "teman_kirim",
  "hasil_terbuka",
  "unduh_kartu",
  "klik_varian",
  "klik_toko",
  "klik_waitlist",
  "teman_jadi_pemain",
] as const;

export type JenisEvent = (typeof JENIS_EVENT)[number];

/** Event yang boleh dikirim dari browser. Sisanya hanya dicatat oleh server. */
export const EVENT_DARI_KLIEN: readonly JenisEvent[] = [
  "mulai_main",
  "klik_bagikan",
  "salin_link",
  "teman_buka_link",
  "unduh_kartu",
  "klik_varian",
];

/**
 * Mencatat satu event. Tidak pernah melempar galat: pencatatan yang gagal
 * tidak boleh menggagalkan alur pemain.
 */
export async function catatEvent(
  jenis: JenisEvent,
  { playerId = null, data = null }: { playerId?: string | null; data?: Record<string, unknown> | null } = {},
): Promise<void> {
  try {
    const db = await ambilDb();
    await db.insert(events).values({ jenis, playerId, data });
  } catch (galat) {
    console.error(`[event] gagal mencatat ${jenis}`, galat);
  }
}

const POLA_SRC = /^[a-z0-9][a-z0-9_-]{0,23}$/;

/** Merapikan nilai ?src= (tiktok, ig, qr-box, booth, teman). Nilai yang aneh dibuang. */
export function rapikanSrc(mentah: unknown): string | null {
  if (typeof mentah !== "string") return null;
  const nilai = mentah.trim().toLowerCase();
  return POLA_SRC.test(nilai) ? nilai : null;
}
