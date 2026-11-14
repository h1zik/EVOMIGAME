import type { KartuSituasi } from "../kartu";

/** Tema: kerja, magang, dan organisasi. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_KERJA: KartuSituasi[] = [
  {
    id: "kj01",
    situasi: "Sore-sore, tiba-tiba ada tugas mendadak. Kamu...",
    pilihan: {
      PP: "Nanya deadline-nya, atur ulang prioritas",
      PC: "Terima, kerjain pelan-pelan tapi beres",
      RB: "Bilang terus terang kalau waktunya nggak cukup",
      SS: "Iyain dulu, baru bingung sendiri",
    },
  },
  {
    id: "kj02",
    situasi: "Rapat udah sejam, belum ada keputusan juga. Kamu...",
    pilihan: {
      PP: "Rangkum pilihannya, ajak mutusin sekarang",
      PC: "Sabar, biar semua selesai ngomong dulu",
      RB: '"Jadi kita pilih yang mana?"',
      SS: "Diam, berharap cepat selesai",
    },
  },
  {
    id: "kj03",
    situasi: "Idemu dipakai, tapi yang dipuji malah orang lain. Kamu...",
    pilihan: {
      PP: "Jelasin dengan tenang di kesempatan berikutnya",
      PC: "Nggak apa-apa, yang penting idenya jalan",
      RB: 'Bilang saat itu juga, "itu ideku"',
      SS: "Diam, cerita ke teman dekat pas pulang",
    },
  },
  {
    id: "kj04",
    situasi: "Hari pertama magang atau kerja. Kamu...",
    pilihan: {
      PP: "Nyatet semua yang dijelasin",
      PC: "Lihat-lihat dulu suasananya gimana",
      RB: "Langsung nanya, ada yang bisa dibantu nggak",
      SS: "Senyum ke semua orang, ngafalin nama pelan-pelan",
    },
  },
  {
    id: "kj05",
    situasi: "Teman satu tim bikin salah, kamu ikut kena getahnya. Kamu...",
    pilihan: {
      PP: "Beresin dulu, baru bahas penyebabnya",
      PC: "Maklum, semua orang pernah salah",
      RB: "Ngomong langsung biar nggak keulang",
      SS: 'Bilang "nggak apa-apa", bantuin diam-diam',
    },
  },
  {
    id: "kj06",
    situasi: "Ditawarin mimpin proyek baru. Kamu...",
    pilihan: {
      PP: "Pelajari dulu, terima kalau emang sanggup",
      PC: "Terima kalau timnya enak diajak kerja",
      RB: "Ambil aja, belajarnya sambil jalan",
      SS: "Nolak halus, belum yakin sama diri sendiri",
    },
  },
  {
    id: "kj07",
    situasi: "Udah jam pulang, kerjaan belum kelar. Kamu...",
    pilihan: {
      PP: "Catat sisa kerjaan, lanjut besok pagi",
      PC: "Pulang, besok masih ada hari",
      RB: "Lembur dikit, hajar sampai beres",
      SS: "Nunggu yang lain pulang dulu, nggak enak duluan",
    },
  },
  {
    id: "kj08",
    situasi: "Diminta kasih masukan buat teman kerja. Kamu...",
    pilihan: {
      PP: "Ngomong jelas, lengkap sama contohnya",
      PC: "Mulai dari hal yang udah bagus dulu",
      RB: "Apa adanya aja, biar cepat diperbaiki",
      SS: "Milih kata hati-hati, takut dia kepikiran",
    },
  },
  {
    id: "kj09",
    situasi: "Mau makan siang bareng satu tim. Kamu...",
    pilihan: {
      PP: "Udah booking tempat dari pagi",
      PC: "Ikut ke mana aja, yang penting kenyang",
      RB: "Ngajak nyobain warung yang baru buka",
      SS: "Hafal pesanan tiap orang",
    },
  },
  {
    id: "kj10",
    situasi: "Lagi presentasi, tiba-tiba dipotong di tengah. Kamu...",
    pilihan: {
      PP: "Catat pertanyaannya, lanjut lagi yang runtut",
      PC: "Dengerin dulu, baru lanjut pelan-pelan",
      RB: '"Sebentar, saya selesaiin dulu ya"',
      SS: "Sempat blank sebentar, terus lanjut",
    },
  },
  {
    id: "kj11",
    situasi: "Ada pelatihan di luar kota akhir pekan ini. Kamu...",
    pilihan: {
      PP: "Ikut kalau materinya emang berguna",
      PC: "Ikut, sekalian ganti suasana",
      RB: "Daftar paling pertama",
      SS: "Nggak ikut, udah janji sama keluarga",
    },
  },
  {
    id: "kj12",
    situasi: "Atasan kirim chat, isinya muji kerjaanmu. Kamu...",
    pilihan: {
      PP: "Balas makasih, simpan buat catatan",
      PC: "Senyum, lanjut kerja lagi",
      RB: "Sekalian nanya soal kesempatan berikutnya",
      SS: "Dibaca berulang-ulang sambil senyum",
    },
  },
  {
    id: "kj13",
    situasi: "Dua deadline jatuh di hari yang sama. Kamu...",
    pilihan: {
      PP: "Urutin dari yang paling penting",
      PC: "Kerjain satu-satu, nggak usah panik",
      RB: "Minta salah satunya diundur",
      SS: "Curhat dulu, baru mulai kerja",
    },
  },
  {
    id: "kj14",
    situasi: "Ada teman kantor yang belakangan kelihatan murung. Kamu...",
    pilihan: {
      PP: "Nawarin bantuan buat kerjaannya",
      PC: "Ajak ngopi, dengerin aja",
      RB: 'Nanya langsung, "lagi kenapa?"',
      SS: "Naruh camilan di mejanya diam-diam",
    },
  },
  {
    id: "kj15",
    situasi: "Dikasih arahan, tapi belum nangkap maksudnya. Kamu...",
    pilihan: {
      PP: "Ulang pakai kata sendiri, minta dikoreksi",
      PC: "Coba dulu aja, nanti juga kelihatan",
      RB: "Nanya lagi sampai benar-benar jelas",
      SS: "Nanya ke teman kantor yang paling ramah",
    },
  },
  {
    id: "kj16",
    situasi: "Organisasimu butuh orang buat cari dana. Kamu...",
    pilihan: {
      PP: "Bikin daftar siapa aja yang bisa dihubungi",
      PC: "Bantu bagian yang lagi kekurangan orang",
      RB: "Maju, datangin satu per satu",
      SS: "Bikin proposal yang cantik",
    },
  },
  {
    id: "kj17",
    situasi: "Ada acara kantor yang wajib pakai kostum. Kamu...",
    pilihan: {
      PP: "Kostum simpel tapi niat",
      PC: "Pakai yang nyaman aja",
      RB: "Totalitas, paling niat satu ruangan",
      SS: "Kostum lucu, kembaran sama teman",
    },
  },
  {
    id: "kj18",
    situasi: "Ditawarin pindah ke tim lain. Kamu...",
    pilihan: {
      PP: "Nimbang untung ruginya dulu",
      PC: "Nanya dulu suasana timnya kayak apa",
      RB: "Coba aja, pengalaman baru",
      SS: "Berat ninggalin teman-teman lama",
    },
  },
  {
    id: "kj19",
    situasi: "Hasil kerjamu diminta revisi besar-besaran. Kamu...",
    pilihan: {
      PP: "Nanya poinnya apa aja, kerjain ulang yang rapi",
      PC: "Terima, namanya juga proses",
      RB: "Jelasin dulu alasan di balik pilihanmu",
      SS: "Sedih sebentar, terus dikerjain",
    },
  },
  {
    id: "kj20",
    situasi: "Grup chat kantor lagi ramai banget. Kamu...",
    pilihan: {
      PP: "Baca yang penting, sisanya di-mute",
      PC: "Nyimak aja, nggak ikut komentar",
      RB: "Ikut nimbrung, lempar candaan",
      SS: "Balas pakai stiker lucu",
    },
  },
  {
    id: "kj21",
    situasi: "Teman kantor paling dekat ternyata mau resign. Kamu...",
    pilihan: {
      PP: "Minta serah terima kerjaannya yang rapi",
      PC: "Doain yang terbaik buat dia",
      RB: "Ngajak makan-makan perpisahan",
      SS: "Nyiapin kartu ucapan dari semua orang",
    },
  },
  {
    id: "kj22",
    situasi: "Kerjaan kelar lebih cepat dari jadwal. Kamu...",
    pilihan: {
      PP: "Cek ulang, terus ambil tugas berikutnya",
      PC: "Istirahat sebentar, nikmatin",
      RB: "Nawarin diri ke proyek yang lebih seru",
      SS: "Bantuin teman yang masih kewalahan",
    },
  },
  {
    id: "kj23",
    situasi: "Sebentar lagi wawancara kerja. Kamu...",
    pilihan: {
      PP: "Udah riset dan latihan jawab",
      PC: "Atur napas, jadi diri sendiri aja",
      RB: "Masuk dengan percaya diri",
      SS: "Deg-degan, minta doa orang terdekat",
    },
  },
];
