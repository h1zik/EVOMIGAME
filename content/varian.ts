/**
 * Pengaturan varian EVOMI.
 *
 * Urutan di daftar ini adalah urutan tampil di seluruh game.
 * Menambah varian baru: tambahkan satu entri di sini, taruh file maskotnya
 * di /public/maskot/, lalu tambahkan pilihan jawaban dan kalimat validasinya
 * di content/kartu.ts dan content/kalimat.ts.
 */

export type Varian = {
  /** Dipakai di URL dan database. Jangan diubah setelah game berjalan. */
  id: string;
  /** Kode pendek untuk data konten. Tidak pernah ditampilkan ke pemain. */
  kode: string;
  namaTampil: string;
  /** Warna utama varian (hex). Otomatis dijadikan CSS variable --v-{id}. */
  warna: string;
  /** Turunan terang dari warna utama, untuk latar dan alur batang persen. */
  warnaMuda: string;
  /** Nama bentuk maskot. Dipakai sebagai keterangan untuk pembaca layar. */
  bentuk: string;
  /** Lokasi file maskot resmi (PNG transparan). Ganti filenya di /public/maskot/ kalau ada versi baru. */
  maskot: string;
  /** Satu baris di halaman teman (bagian 8.2 panduan). */
  deskripsiSingkat: string;
  /** Kesan aroma satu sampai dua kalimat di halaman /versi. */
  deskripsiAroma: string;
  /** Link Shopee varian ini, tanpa parameter UTM. */
  urlToko: string;
  /** true: tombol utama ke Shopee. false: tombol utama ke waitlist. */
  tersedia: boolean;
  /** Teks bebas, boleh dikosongkan. Jangan menulis harga di sini. */
  teksPenawaran: string;
  /** Link WhatsApp untuk waitlist. */
  urlWaitlist: string;
};

// GANTI sebelum deploy: nomor WhatsApp waitlist yang asli (format wa.me/62...).
const WAITLIST_SEMENTARA = "https://wa.me/6280000000000";

function waitlist(namaVarian: string) {
  const teks = `Halo EVOMI, kabari aku kalau ${namaVarian} sudah ada ya.`;
  return `${WAITLIST_SEMENTARA}?text=${encodeURIComponent(teks)}`;
}

export const DAFTAR_VARIAN: Varian[] = [
  {
    id: "purpose",
    kode: "PP",
    namaTampil: "Purpose Prestige",
    warna: "#1172BA",
    warnaMuda: "#DCEBF7",
    bentuk: "bintang",
    maskot: "/maskot/purpose.png",
    deskripsiSingkat: "Tenang, tahu maunya apa, bisa diandalkan",
    deskripsiAroma: "Aroma yang merefleksikan ketenangan dan kejelasan tujuan.",
    urlToko:
      "https://shopee.co.id/EVOMI-Purpose-Prestige-Eau-De-Parfum-50ml-i.1790723799.58065852279",
    tersedia: true,
    teksPenawaran: "",
    urlWaitlist: waitlist("Purpose Prestige"),
  },
  {
    id: "peaceful",
    kode: "PC",
    namaTampil: "Peaceful Calm",
    warna: "#438A37",
    warnaMuda: "#E1F0DE",
    bentuk: "lingkaran",
    maskot: "/maskot/peaceful.png",
    deskripsiSingkat: "Adem, bikin suasana jadi nyaman",
    deskripsiAroma: "Aroma menenangkan yang menyatu dengan diri.",
    urlToko:
      "https://shopee.co.id/EVOMI-Peaceful-Calm-Eau-De-Parfum-50ml-i.1790723799.45215872382",
    tersedia: true,
    teksPenawaran: "",
    urlWaitlist: waitlist("Peaceful Calm"),
  },
  {
    id: "rebel",
    kode: "RB",
    namaTampil: "Rebel Brave",
    warna: "#C62D20",
    warnaMuda: "#F9DFDC",
    bentuk: "segitiga",
    maskot: "/maskot/rebel.png",
    deskripsiSingkat: "Berani ngomong apa adanya, nggak takut beda",
    deskripsiAroma: "Keberanian dan semangat untuk mengekspresikan diri.",
    urlToko:
      "https://shopee.co.id/EVOMI-Rebel-Brave-Eau-De-Parfum-50ml-i.1790723799.56215852499",
    tersedia: true,
    teksPenawaran: "",
    urlWaitlist: waitlist("Rebel Brave"),
  },
  {
    id: "sweet",
    kode: "SS",
    namaTampil: "Sweet Shy",
    warna: "#C4588F",
    warnaMuda: "#F8E2EE",
    bentuk: "hati",
    maskot: "/maskot/sweet.png",
    deskripsiSingkat: "Manis, perhatian, kadang malu-malu",
    // SEMENTARA: di evomi.id kalimat Sweet Shy sama dengan Peaceful Calm,
    // jadi dipakai deskripsi bagian 8.2 sampai ada kalimat yang benar.
    deskripsiAroma: "Manis, perhatian, kadang malu-malu.",
    urlToko:
      "https://shopee.co.id/EVOMI-Sweet-Shy-Eau-De-Parfum-50ml-i.1790723799.51465860719",
    tersedia: true,
    teksPenawaran: "",
    urlWaitlist: waitlist("Sweet Shy"),
  },
];

export const ID_VARIAN = DAFTAR_VARIAN.map((v) => v.id);

export function cariVarian(id: string): Varian | undefined {
  return DAFTAR_VARIAN.find((v) => v.id === id);
}

export function cariVarianDariKode(kode: string): Varian | undefined {
  return DAFTAR_VARIAN.find((v) => v.kode === kode);
}

/** CSS variables warna varian, disisipkan sekali di layout. */
export function cssWarnaVarian(): string {
  const baris = DAFTAR_VARIAN.map(
    (v) => `--v-${v.id}:${v.warna};--v-${v.id}-muda:${v.warnaMuda};`,
  ).join("");
  return `:root{${baris}}`;
}
