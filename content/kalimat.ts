/**
 * Kalimat validasi yang bisa dipilih teman.
 * Teman hanya bisa memilih dari daftar ini. Tidak ada kolom teks bebas,
 * supaya game tidak bisa dipakai untuk menyakiti orang.
 *
 * Tiap versi punya dua gaya:
 * - santai: seperti ngomong ke teman main atau teman tongkrongan. Memuji lewat hal
 *   yang dia lakukan. Ini gaya bawaan.
 * - hangat: untuk sahabat dekat atau orang tersayang. Ini kalimat dari panduan (bagian 8.3).
 *
 * Teman memilih gayanya sendiri di layar. Game tidak menanyakan jenis kelamin.
 *
 * `kode` adalah kode varian (lihat content/varian.ts). `id` disimpan di database,
 * jadi jangan diubah atau dipakai ulang setelah game berjalan. Teksnya boleh diperbaiki kapan saja.
 */

export type GayaKalimat = "santai" | "hangat";

export type KalimatValidasi = { id: string; kode: string; gaya: GayaKalimat; teks: string };

/** Urutan tampil pilihan gaya. Yang pertama adalah gaya bawaan. */
export const DAFTAR_GAYA: GayaKalimat[] = ["santai", "hangat"];

export const DAFTAR_KALIMAT: KalimatValidasi[] = [
  // ---- Purpose Prestige ----
  { id: "PPS1", kode: "PP", gaya: "santai", teks: "Kalau ada kamu, kerjaan pasti kelar." },
  { id: "PPS2", kode: "PP", gaya: "santai", teks: "Kamu tuh bisa diandalkan, serius." },
  { id: "PPS3", kode: "PP", gaya: "santai", teks: "Salut, kamu tetap tenang pas yang lain panik." },
  { id: "PP1", kode: "PP", gaya: "hangat", teks: "Kalau ada kamu, rasanya semua bakal beres." },
  { id: "PP2", kode: "PP", gaya: "hangat", teks: "Kamu lebih bisa diandalkan dari yang kamu kira." },
  { id: "PP3", kode: "PP", gaya: "hangat", teks: "Aku suka cara kamu tetap tenang waktu yang lain panik." },

  // ---- Peaceful Calm ----
  { id: "PCS1", kode: "PC", gaya: "santai", teks: "Nongkrong sama kamu tuh nggak pernah ribet." },
  { id: "PCS2", kode: "PC", gaya: "santai", teks: "Kamu orangnya santai, enak diajak apa aja." },
  { id: "PCS3", kode: "PC", gaya: "santai", teks: "Kalau lagi pusing, ngobrol sama kamu enak." },
  { id: "PC1", kode: "PC", gaya: "hangat", teks: "Dekat kamu tuh rasanya adem." },
  { id: "PC2", kode: "PC", gaya: "hangat", teks: "Kamu nggak perlu banyak ngomong buat bikin orang nyaman." },
  { id: "PC3", kode: "PC", gaya: "hangat", teks: "Makasih udah sering jadi tempat istirahat." },

  // ---- Rebel Brave ----
  { id: "RBS1", kode: "RB", gaya: "santai", teks: "Salut, kamu berani beda." },
  { id: "RBS2", kode: "RB", gaya: "santai", teks: "Respect, kamu nggak pernah takut ngomong." },
  { id: "RBS3", kode: "RB", gaya: "santai", teks: "Kamu jadi diri sendiri terus, keren." },
  { id: "RB1", kode: "RB", gaya: "hangat", teks: "Kamu lebih berani dari yang kamu kira." },
  { id: "RB2", kode: "RB", gaya: "hangat", teks: "Aku salut kamu berani jadi diri sendiri." },
  { id: "RB3", kode: "RB", gaya: "hangat", teks: "Kadang aku pengin seberani kamu." },

  // ---- Sweet Shy ----
  { id: "SSS1", kode: "SS", gaya: "santai", teks: "Kamu diam-diam perhatian, ingat hal kecil." },
  { id: "SSS2", kode: "SS", gaya: "santai", teks: "Kamu orangnya baik, nggak dibuat-buat." },
  { id: "SSS3", kode: "SS", gaya: "santai", teks: "Kamu pemalu, tapi sekali kenal asyik banget." },
  { id: "SS1", kode: "SS", gaya: "hangat", teks: "Hal kecil yang kamu lakuin itu kerasa, lho." },
  { id: "SS2", kode: "SS", gaya: "hangat", teks: "Kamu manis tanpa dibuat-buat." },
  { id: "SS3", kode: "SS", gaya: "hangat", teks: "Malu-malumu itu justru bikin orang sayang." },
];

export function cariKalimat(id: string): KalimatValidasi | undefined {
  return DAFTAR_KALIMAT.find((k) => k.id === id);
}

/** Kalimat milik satu varian. Kalau gaya diisi, hanya kalimat dengan gaya itu. */
export function kalimatUntukKode(kode: string, gaya?: GayaKalimat): KalimatValidasi[] {
  return DAFTAR_KALIMAT.filter((k) => k.kode === kode && (!gaya || k.gaya === gaya));
}
