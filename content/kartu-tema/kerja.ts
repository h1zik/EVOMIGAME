import type { KartuSituasi } from "../kartu";

/** Tema: kerja, magang, dan organisasi. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_KERJA: KartuSituasi[] = [
  {
    id: "kj01",
    situasi: "Ada tugas mendadak yang datang sore-sore. Kamu...",
    pilihan: {
      PP: "Tanya tenggatnya, atur ulang prioritas",
      PC: "Terima, kerjain pelan tapi beres",
      RB: "Bilang terus terang kalau waktunya nggak cukup",
      SS: "Iyain dulu, baru bingung sendiri",
    },
  },
  {
    id: "kj02",
    situasi: "Rapat udah satu jam dan belum ada keputusan. Kamu...",
    pilihan: {
      PP: "Rangkum pilihannya, ajak ambil keputusan",
      PC: "Sabar, biar semua selesai bicara",
      RB: '"Jadi kita pilih yang mana?"',
      SS: "Diam, berharap cepat selesai",
    },
  },
  {
    id: "kj03",
    situasi: "Idemu dipakai, tapi orang lain yang dipuji. Kamu...",
    pilihan: {
      PP: "Luruskan dengan tenang di kesempatan berikutnya",
      PC: "Nggak apa-apa, yang penting idenya jalan",
      RB: 'Bilang saat itu juga, "itu ideku"',
      SS: "Diam, cerita ke teman dekat sepulangnya",
    },
  },
  {
    id: "kj04",
    situasi: "Hari pertama magang atau kerja. Kamu...",
    pilihan: {
      PP: "Catat semua yang dijelaskan",
      PC: "Amati dulu suasananya",
      RB: "Langsung nanya boleh bantu apa",
      SS: "Senyum ke semua orang, hafalin nama pelan-pelan",
    },
  },
  {
    id: "kj05",
    situasi: "Kesalahan rekan satu tim ikut kena ke kamu. Kamu...",
    pilihan: {
      PP: "Bereskan dulu, baru bahas penyebabnya",
      PC: "Maklum, semua orang pernah salah",
      RB: "Ngomong langsung biar nggak terulang",
      SS: 'Bilang "nggak apa-apa", bantu diam-diam',
    },
  },
  {
    id: "kj06",
    situasi: "Kamu ditawari memimpin proyek baru. Kamu...",
    pilihan: {
      PP: "Pelajari dulu, terima kalau sanggup",
      PC: "Terima kalau timnya enak diajak kerja",
      RB: "Ambil, belajar sambil jalan",
      SS: "Tolak halus, belum yakin sama diri sendiri",
    },
  },
  {
    id: "kj07",
    situasi: "Jam pulang tiba, kerjaan belum selesai. Kamu...",
    pilihan: {
      PP: "Tulis sisa kerjaan, lanjut besok pagi",
      PC: "Pulang, besok masih ada hari",
      RB: "Lembur sebentar, hajar sampai beres",
      SS: "Nunggu yang lain pulang dulu, nggak enak duluan",
    },
  },
  {
    id: "kj08",
    situasi: "Kamu diminta kasih masukan ke teman kerja. Kamu...",
    pilihan: {
      PP: "Sampaikan jelas, lengkap dengan contohnya",
      PC: "Mulai dari hal yang udah bagus",
      RB: "Apa adanya, biar cepat diperbaiki",
      SS: "Pilih kata hati-hati, takut dia kepikiran",
    },
  },
  {
    id: "kj09",
    situasi: "Makan siang bareng satu tim. Kamu...",
    pilihan: {
      PP: "Udah pesan tempat dari pagi",
      PC: "Ikut ke mana aja, yang penting kenyang",
      RB: "Ajak coba warung yang baru buka",
      SS: "Hafal pesanan tiap orang",
    },
  },
  {
    id: "kj10",
    situasi: "Presentasimu dipotong di tengah jalan. Kamu...",
    pilihan: {
      PP: "Catat pertanyaannya, lanjutkan dengan runtut",
      PC: "Dengerin dulu, baru lanjut pelan",
      RB: '"Sebentar, saya selesaikan dulu ya"',
      SS: "Kehilangan kata sebentar, lalu lanjut",
    },
  },
  {
    id: "kj11",
    situasi: "Ada pelatihan di luar kota akhir pekan ini. Kamu...",
    pilihan: {
      PP: "Ikut kalau materinya berguna",
      PC: "Ikut, sekalian ganti suasana",
      RB: "Daftar paling awal",
      SS: "Nggak ikut, udah janji sama keluarga",
    },
  },
  {
    id: "kj12",
    situasi: "Atasanmu kirim pesan berisi pujian. Kamu...",
    pilihan: {
      PP: "Balas terima kasih, simpan sebagai catatan",
      PC: "Senyum, lanjut kerja",
      RB: "Sekalian tanya soal kesempatan berikutnya",
      SS: "Baca berulang-ulang",
    },
  },
  {
    id: "kj13",
    situasi: "Dua tenggat jatuh di hari yang sama. Kamu...",
    pilihan: {
      PP: "Urutkan dari yang paling berdampak",
      PC: "Kerjain satu-satu, jangan panik",
      RB: "Minta salah satunya diundur",
      SS: "Curhat dulu, baru mulai kerja",
    },
  },
  {
    id: "kj14",
    situasi: "Ada rekan yang belakangan kelihatan murung. Kamu...",
    pilihan: {
      PP: "Tawarin bantuan untuk kerjaannya",
      PC: "Ajak ngopi, dengerin aja",
      RB: 'Tanya langsung, "lagi kenapa?"',
      SS: "Taruh camilan di mejanya",
    },
  },
  {
    id: "kj15",
    situasi: "Kamu belum paham arahan yang diberikan. Kamu...",
    pilihan: {
      PP: "Ulangi dengan kata sendiri, minta dikoreksi",
      PC: "Coba dulu, nanti kelihatan",
      RB: "Tanya lagi sampai jelas",
      SS: "Tanya ke rekan yang paling ramah",
    },
  },
  {
    id: "kj16",
    situasi: "Organisasimu butuh orang buat cari dana. Kamu...",
    pilihan: {
      PP: "Bikin daftar siapa saja yang bisa dihubungi",
      PC: "Bantu bagian yang kekurangan orang",
      RB: "Maju, datangi satu per satu",
      SS: "Bikin proposal yang cantik",
    },
  },
  {
    id: "kj17",
    situasi: "Ada acara kantor yang wajib pakai kostum. Kamu...",
    pilihan: {
      PP: "Kostum simpel tapi niat",
      PC: "Pakai yang nyaman aja",
      RB: "Total, paling niat satu ruangan",
      SS: "Kostum lucu, kembaran sama teman",
    },
  },
  {
    id: "kj18",
    situasi: "Kamu ditawari pindah ke tim lain. Kamu...",
    pilihan: {
      PP: "Timbang untung ruginya",
      PC: "Tanya dulu suasana timnya",
      RB: "Coba aja, pengalaman baru",
      SS: "Berat ninggalin teman lama",
    },
  },
  {
    id: "kj19",
    situasi: "Hasil kerjamu diminta revisi besar. Kamu...",
    pilihan: {
      PP: "Tanya poinnya, kerjakan ulang dengan rapi",
      PC: "Terima, namanya juga proses",
      RB: "Jelaskan dulu alasan di balik pilihanmu",
      SS: "Sedih sebentar, lalu kerjakan",
    },
  },
  {
    id: "kj20",
    situasi: "Grup obrolan kantor ramai banget. Kamu...",
    pilihan: {
      PP: "Baca yang penting, bisukan sisanya",
      PC: "Nyimak aja",
      RB: "Ikut nimbrung, lempar candaan",
      SS: "Balas pakai stiker lucu",
    },
  },
  {
    id: "kj21",
    situasi: "Rekan dekatmu mengundurkan diri. Kamu...",
    pilihan: {
      PP: "Minta serah terima yang rapi",
      PC: "Doain yang terbaik",
      RB: "Ajak makan-makan perpisahan",
      SS: "Siapin kartu ucapan dari semua orang",
    },
  },
  {
    id: "kj22",
    situasi: "Kerjaanmu selesai lebih cepat dari jadwal. Kamu...",
    pilihan: {
      PP: "Periksa ulang, lalu ambil tugas berikut",
      PC: "Istirahat sebentar, nikmatin",
      RB: "Tawarin diri ke proyek yang lebih seru",
      SS: "Bantu teman yang masih kewalahan",
    },
  },
  {
    id: "kj23",
    situasi: "Wawancara kerja sebentar lagi. Kamu...",
    pilihan: {
      PP: "Udah riset dan latihan jawab",
      PC: "Atur napas, jadi diri sendiri",
      RB: "Masuk dengan percaya diri",
      SS: "Deg-degan, minta doa orang terdekat",
    },
  },
];
