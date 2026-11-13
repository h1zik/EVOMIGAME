/**
 * Pelacakan sumber di browser.
 * Parameter ?src= (tiktok, ig, qr-box, booth, teman) dan ?dari= (kode pemain pengajak)
 * dibaca saat halaman pertama dibuka, lalu disimpan selama sesi ini supaya tetap ada
 * ketika pemain pindah dari halaman awal ke /main.
 */
const KUNCI = "vkk_sumber";

export type Sumber = { src: string | null; dari: string | null };

let diMemori: Sumber = { src: null, dari: null };

function bersih(nilai: string | null, pola: RegExp): string | null {
  if (!nilai) return null;
  const rapi = nilai.trim().toLowerCase();
  return pola.test(rapi) ? rapi : null;
}

/** Dipanggil sekali tiap halaman dibuka. Sumber yang baru menimpa yang lama. */
export function tangkapSumber() {
  try {
    const q = new URLSearchParams(window.location.search);
    const src = bersih(q.get("src"), /^[a-z0-9][a-z0-9_-]{0,23}$/);
    if (!src) return;
    diMemori = { src, dari: bersih(q.get("dari"), /^[a-z0-9]{6,12}$/) };
    window.sessionStorage.setItem(KUNCI, JSON.stringify(diMemori));
  } catch {
    // sessionStorage ditolak: nilai tetap ada di memori selama halaman ini terbuka.
  }
}

export function ambilSumber(): Sumber {
  if (diMemori.src) return diMemori;
  try {
    const mentah = window.sessionStorage.getItem(KUNCI);
    if (mentah) {
      const data = JSON.parse(mentah) as Partial<Sumber>;
      return { src: typeof data.src === "string" ? data.src : null, dari: typeof data.dari === "string" ? data.dari : null };
    }
  } catch {
    // Dianggap tidak ada.
  }
  return { src: null, dari: null };
}
