import type { KartuSituasi } from "../kartu";

/** Tema: olahraga dan kesehatan. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_OLAHRAGA: KartuSituasi[] = [
  {
    id: "or01",
    situasi: "Alarm olahraga pagi berbunyi. Kamu...",
    pilihan: {
      PP: "Bangun, sepatunya udah disiapin semalam",
      PC: "Peregangan pelan dulu",
      RB: "Langsung lari",
      SS: "Lima menit lagi, ya",
    },
  },
  {
    id: "or02",
    situasi: "Diajak lari bareng padahal kamu jarang olahraga. Kamu...",
    pilihan: {
      PP: "Ikut, atur tempo sendiri",
      PC: "Nolak dulu, janji ikut lain kali",
      RB: "Lari kencang dari awal",
      SS: "Ikut, ngobrol di barisan belakang",
    },
  },
  {
    id: "or03",
    situasi: "Tim kekurangan satu pemain. Kamu...",
    pilihan: {
      PP: "Masuk, tanya posisinya di mana",
      PC: "Bantu jadi cadangan",
      RB: '"Aku main"',
      SS: "Mau, asal jangan ditegur kalau salah",
    },
  },
  {
    id: "or04",
    situasi: "Timmu kalah di pertandingan penting. Kamu...",
    pilihan: {
      PP: "Evaluasi, lalu latihan lagi",
      PC: "Udah usaha, itu cukup",
      RB: "Minta tanding ulang",
      SS: "Nangis sebentar, peluk teman satu tim",
    },
  },
  {
    id: "or05",
    situasi: "Badanmu pegal semua. Kamu...",
    pilihan: {
      PP: "Istirahat sesuai jadwal pemulihan",
      PC: "Mandi air hangat, tidur",
      RB: "Tetap gerak biar cepat hilang",
      SS: "Minta dipijat",
    },
  },
  {
    id: "or06",
    situasi: "Kamu mau mulai hidup lebih sehat. Kamu...",
    pilihan: {
      PP: "Bikin jadwal makan dan tidur",
      PC: "Mulai dari minum air lebih banyak",
      RB: "Ubah semuanya mulai besok",
      SS: "Ajak teman biar ada yang nemenin",
    },
  },
  {
    id: "or07",
    situasi: "Ikut kelas senam untuk pertama kali. Kamu...",
    pilihan: {
      PP: "Ikuti gerakan dengan teliti",
      PC: "Ikut semampunya, napas pelan",
      RB: "Ambil barisan depan",
      SS: "Barisan belakang, dekat teman",
    },
  },
  {
    id: "or08",
    situasi: "Kamu lagi nggak enak badan. Kamu...",
    pilihan: {
      PP: "Minum obat, tidur cukup",
      PC: "Istirahat, nanti juga pulih",
      RB: "Tetap beraktivitas seperti biasa",
      SS: "Pengin ditemani",
    },
  },
  {
    id: "or09",
    situasi: "Ikut lomba lari santai. Kamu...",
    pilihan: {
      PP: "Pasang target waktu",
      PC: "Jalan, nikmatin pemandangan",
      RB: "Kejar posisi depan",
      SS: "Lari sambil foto-foto",
    },
  },
  {
    id: "or10",
    situasi: "Mau renang, airnya dingin. Kamu...",
    pilihan: {
      PP: "Masuk pelan biar badan terbiasa",
      PC: "Duduk di tepi dulu",
      RB: "Loncat",
      SS: "Masuk kalau udah ada yang duluan",
    },
  },
  {
    id: "or11",
    situasi: "Pelatih kasih latihan tambahan. Kamu...",
    pilihan: {
      PP: "Kerjain sesuai hitungan",
      PC: "Kerjain semampunya, sisanya besok",
      RB: "Minta ditambah lagi",
      SS: "Ngeluh dulu, lalu dikerjain bareng teman",
    },
  },
  {
    id: "or12",
    situasi: "Temanmu cedera saat main. Kamu...",
    pilihan: {
      PP: "Ambil kotak obat",
      PC: "Tenangkan dia",
      RB: "Lari panggil bantuan",
      SS: "Temenin sampai dia baikan",
    },
  },
  {
    id: "or13",
    situasi: "Kamu nggak bisa tidur. Kamu...",
    pilihan: {
      PP: "Matikan layar, atur napas",
      PC: "Rebahan aja, nanti juga ngantuk",
      RB: "Bangun, kerjain sesuatu",
      SS: 'Chat teman, "udah tidur?"',
    },
  },
  {
    id: "or14",
    situasi: "Naik sepeda di jalan menanjak. Kamu...",
    pilihan: {
      PP: "Atur gigi, kayuh stabil",
      PC: "Turun, tuntun santai",
      RB: "Kebut sampai puncak",
      SS: "Berhenti, foto pemandangan",
    },
  },
  {
    id: "or15",
    situasi: "Timmu menang. Kamu...",
    pilihan: {
      PP: "Salami tim lawan",
      PC: "Senyum lega",
      RB: "Selebrasi paling heboh",
      SS: "Peluk semua orang",
    },
  },
  {
    id: "or16",
    situasi: "Waktunya cek kesehatan rutin. Kamu...",
    pilihan: {
      PP: "Udah terjadwal tiap tahun",
      PC: "Datang dengan tenang",
      RB: "Baru ingat, langsung berangkat",
      SS: "Takut jarum, minta ditemani",
    },
  },
  {
    id: "or17",
    situasi: "Ada tantangan jalan 10 ribu langkah sehari. Kamu...",
    pilihan: {
      PP: "Pantau lewat aplikasi",
      PC: "Nggak ikut tantangan, jalan ya jalan aja",
      RB: "Targetnya dua kali lipat",
      SS: "Jalan sambil teleponan",
    },
  },
  {
    id: "or18",
    situasi: "Teman ngajak coba olahraga yang belum pernah kamu coba. Kamu...",
    pilihan: {
      PP: "Pelajari dulu dasarnya",
      PC: "Nonton dulu dari pinggir",
      RB: "Langsung turun ke lapangan",
      SS: "Coba, ketawa lihat diri sendiri jatuh bangun",
    },
  },
  {
    id: "or19",
    situasi: "Jam tidurmu berantakan minggu ini. Kamu...",
    pilihan: {
      PP: "Atur ulang jam tidur mulai malam ini",
      PC: "Tidur siang kalau sempat",
      RB: "Sekalian begadang, perbaiki nanti",
      SS: "Minta diingatkan tidur",
    },
  },
  {
    id: "or20",
    situasi: "Kamu mau pilih satu olahraga buat rutin. Kamu...",
    pilihan: {
      PP: "Yang kemajuannya bisa diukur",
      PC: "Olahraga yang tenang",
      RB: "Apa pun yang memacu adrenalin",
      SS: "Yang bisa bareng teman",
    },
  },
  {
    id: "or21",
    situasi: "Kamu capek banget hari ini. Kamu...",
    pilihan: {
      PP: "Selesaikan yang wajib, lalu tidur",
      PC: "Berhenti, istirahat",
      RB: "Paksa sedikit lagi",
      SS: "Cari pelukan",
    },
  },
  {
    id: "or22",
    situasi: "Coba duduk diam lima menit tanpa ngapa-ngapain. Kamu...",
    pilihan: {
      PP: "Pasang pengatur waktu",
      PC: "Betah, malah nambah",
      RB: "Susah diam, pengin gerak",
      SS: "Malah kepikiran banyak hal",
    },
  },
  {
    id: "or23",
    situasi: "Naik tangga atau naik lift. Kamu...",
    pilihan: {
      PP: "Tangga, hitung-hitung olahraga",
      PC: "Mana yang sepi",
      RB: "Tangga, dua anak tangga sekaligus",
      SS: "Ikut pilihan teman",
    },
  },
];
