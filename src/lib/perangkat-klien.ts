/**
 * Penyimpanan di browser. Semua akses localStorage dibungkus try/catch karena
 * browser dalam aplikasi (TikTok, Instagram, WhatsApp) dan mode privat bisa menolaknya.
 */

const KUNCI_PERANGKAT = "vkk_perangkat";
const KUNCI_HASIL = "vkk_hasil";

function baca(kunci: string): string | null {
  try {
    return window.localStorage.getItem(kunci);
  } catch {
    return null;
  }
}

function tulis(kunci: string, nilai: string) {
  try {
    window.localStorage.setItem(kunci, nilai);
  } catch {
    // Tidak bisa menyimpan: game tetap jalan, hanya tidak diingat di perangkat ini.
  }
}

function idAcak(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const byte = new Uint8Array(16);
  crypto.getRandomValues(byte);
  return Array.from(byte, (b) => b.toString(16).padStart(2, "0")).join("");
}

/** Id acak perangkat ini. Dibuat sekali, lalu dipakai terus. */
export function ambilIdPerangkat(): string {
  const lama = baca(KUNCI_PERANGKAT);
  if (lama && /^[A-Za-z0-9-]{16,64}$/.test(lama)) return lama;
  const baru = idAcak();
  tulis(KUNCI_PERANGKAT, baru);
  return baru;
}

export type HasilTersimpan = { token: string; kode: string; nama: string };

/** Hasil milik pemain di perangkat ini, supaya bisa dibuka lagi tanpa link. */
export function ambilHasilTersimpan(): HasilTersimpan | null {
  try {
    const mentah = baca(KUNCI_HASIL);
    if (!mentah) return null;
    const data = JSON.parse(mentah) as Partial<HasilTersimpan>;
    if (typeof data.token === "string" && typeof data.kode === "string" && typeof data.nama === "string") {
      return { token: data.token, kode: data.kode, nama: data.nama };
    }
  } catch {
    // Data rusak dianggap tidak ada.
  }
  return null;
}

export function simpanHasil(hasil: HasilTersimpan) {
  tulis(KUNCI_HASIL, JSON.stringify(hasil));
}

/** Menghapus hasil tersimpan dari perangkat ini, dipakai setelah pemain menghapus datanya. */
export function lupakanHasil(token: string) {
  try {
    if (ambilHasilTersimpan()?.token === token) window.localStorage.removeItem(KUNCI_HASIL);
  } catch {
    // Tidak ada yang perlu dihapus.
  }
}

/**
 * Menandai bahwa pemain baru saja selesai menjawab kartu, supaya halaman hasil
 * memutar perayaan satu kali (lihat src/components/Perayaan.tsx).
 */
export function tandaiRayakan(token: string) {
  try {
    window.sessionStorage.setItem("vkk_rayakan", token);
  } catch {
    // Tanpa penanda, halaman hasil tetap tampil, hanya tanpa perayaan.
  }
}

const AWALAN_ISI = "vkk_isi_";

/** Menandai bahwa perangkat ini sudah mengisi untuk pemain dengan kode tersebut. */
export function tandaiSudahIsi(kode: string) {
  tulis(AWALAN_ISI + kode, "1");
}

export function sudahIsi(kode: string): boolean {
  return baca(AWALAN_ISI + kode) === "1";
}
