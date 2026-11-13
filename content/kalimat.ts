/**
 * Kalimat validasi (bagian 8.3 panduan), 3 per versi.
 * Teman hanya bisa memilih dari daftar ini. Tidak ada kolom teks bebas,
 * supaya game tidak bisa dipakai untuk menyakiti orang.
 *
 * `kode` adalah kode varian (lihat content/varian.ts). `id` disimpan di database,
 * jadi jangan diubah setelah game berjalan. Teksnya boleh diperbaiki kapan saja.
 */

export type KalimatValidasi = { id: string; kode: string; teks: string };

export const DAFTAR_KALIMAT: KalimatValidasi[] = [
  { id: "PP1", kode: "PP", teks: "Kalau ada kamu, rasanya semua bakal beres." },
  { id: "PP2", kode: "PP", teks: "Kamu lebih bisa diandalkan dari yang kamu kira." },
  { id: "PP3", kode: "PP", teks: "Aku suka cara kamu tetap tenang waktu yang lain panik." },

  { id: "PC1", kode: "PC", teks: "Dekat kamu tuh rasanya adem." },
  { id: "PC2", kode: "PC", teks: "Kamu nggak perlu banyak ngomong buat bikin orang nyaman." },
  { id: "PC3", kode: "PC", teks: "Makasih udah sering jadi tempat istirahat." },

  { id: "RB1", kode: "RB", teks: "Kamu lebih berani dari yang kamu kira." },
  { id: "RB2", kode: "RB", teks: "Aku salut kamu berani jadi diri sendiri." },
  { id: "RB3", kode: "RB", teks: "Kadang aku pengin seberani kamu." },

  { id: "SS1", kode: "SS", teks: "Hal kecil yang kamu lakuin itu kerasa, lho." },
  { id: "SS2", kode: "SS", teks: "Kamu manis tanpa dibuat-buat." },
  { id: "SS3", kode: "SS", teks: "Malu-malumu itu justru bikin orang sayang." },
];

export function cariKalimat(id: string): KalimatValidasi | undefined {
  return DAFTAR_KALIMAT.find((k) => k.id === id);
}

export function kalimatUntukKode(kode: string): KalimatValidasi[] {
  return DAFTAR_KALIMAT.filter((k) => k.kode === kode);
}
