/**
 * Kartu situasi (bagian 8.1 panduan).
 *
 * Tiap pilihan ditulis di bawah kode variannya (PP, PC, RB, SS). Kode ini hanya
 * untuk data dan tidak pernah ditampilkan ke pemain. Urutan pilihan diacak saat tampil.
 * Menambah varian baru: tambahkan satu baris pilihan dengan kode varian itu di tiap kartu.
 */

export type KartuSituasi = {
  id: string;
  situasi: string;
  /** kode varian -> teks pilihan */
  pilihan: Record<string, string>;
};

export const DAFTAR_KARTU: KartuSituasi[] = [
  {
    id: "k1",
    situasi: "Teman batalin janji mendadak. Kamu...",
    pilihan: {
      PP: "Ya udah, lanjut ngerjain rencanaku sendiri",
      RB: "Tetap berangkat, sendirian juga jadi",
      PC: "Malah lega, bisa rebahan",
      SS: 'Bilang "gapapa kok", padahal agak sedih',
    },
  },
  {
    id: "k2",
    situasi: "Ada tugas kelompok, belum ada yang mulai. Kamu...",
    pilihan: {
      PP: "Bikin pembagian tugas, kirim ke grup",
      RB: 'Langsung nanya di grup, "ini siapa yang mulai?"',
      PC: "Kerjain bagianku dulu pelan-pelan",
      SS: "Nunggu ada yang mulai, baru bantu sebisanya",
    },
  },
  {
    id: "k3",
    situasi: "Masuk ruangan yang isinya orang baru semua. Kamu...",
    pilihan: {
      PP: "Kenalan seperlunya, cari tahu siapa ngapain",
      RB: "Nyapa duluan, ngobrol sama siapa aja",
      PC: "Duduk tenang, senyum kalau ada yang nengok",
      SS: "Cari satu orang yang kelihatan ramah, nempel di situ",
    },
  },
  {
    id: "k4",
    situasi: "Pesanan makananmu datang salah. Kamu...",
    pilihan: {
      PP: "Bilang baik-baik, minta ditukar",
      RB: 'Langsung panggil, "Mas, ini bukan pesananku"',
      PC: "Ya udah dimakan aja, ternyata enak juga",
      SS: "Mau bilang tapi nggak enak, akhirnya dimakan",
    },
  },
  {
    id: "k5",
    situasi: "Hari libur tanpa rencana. Kamu...",
    pilihan: {
      PP: "Beresin hal yang ketunda dari minggu lalu",
      RB: "Ajak teman pergi dadakan",
      PC: "Di rumah aja, nonton atau tidur siang",
      SS: "Bikin sesuatu yang lucu, masak atau dekor kamar",
    },
  },
  {
    id: "k6",
    situasi: "Kamu dipuji di depan banyak orang. Kamu...",
    pilihan: {
      PP: "Bilang makasih, lanjut seperti biasa",
      RB: '"Iya dong," sambil ketawa',
      PC: "Senyum, bilang ini hasil bareng-bareng",
      SS: "Salah tingkah, muka panas",
    },
  },
  {
    id: "k7",
    situasi: "Temanmu lagi sedih dan cerita ke kamu. Kamu...",
    pilihan: {
      PP: "Bantu cari jalan keluarnya",
      RB: 'Ikut kesal buat dia, "siapa orangnya?"',
      PC: "Dengerin sampai selesai, nggak motong",
      SS: "Bawain jajan kesukaannya",
    },
  },
  {
    id: "k8",
    situasi: "Besok ada hal penting. Malam ini kamu...",
    pilihan: {
      PP: "Siapin semuanya sampai rapi, baru tidur",
      RB: "Santai aja, besok dihadapi",
      PC: "Tidur cepat biar besok tenang",
      SS: "Kepikiran terus, chat teman minta disemangatin",
    },
  },
];

export function cariKartu(id: string): KartuSituasi | undefined {
  return DAFTAR_KARTU.find((k) => k.id === id);
}
