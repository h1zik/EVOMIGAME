/**
 * Mengirim event dari browser ke /api/event.
 * Memakai sendBeacon supaya tetap terkirim walau halaman langsung berpindah
 * (misalnya saat menekan link ke halaman varian). Tidak pernah melempar galat:
 * kalau pencatatan gagal, game tetap jalan seperti biasa.
 */
export type JenisEventKlien =
  | "mulai_main"
  | "klik_bagikan"
  | "salin_link"
  | "teman_buka_link"
  | "unduh_kartu"
  | "klik_varian";

export function catatEvent(jenis: JenisEventKlien, data: Record<string, string> = {}) {
  try {
    const isi = JSON.stringify({ jenis, ...data });
    if (typeof navigator.sendBeacon === "function") {
      if (navigator.sendBeacon("/api/event", new Blob([isi], { type: "application/json" }))) return;
    }
    void fetch("/api/event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: isi,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Diabaikan dengan sengaja.
  }
}
