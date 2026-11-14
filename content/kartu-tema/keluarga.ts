import type { KartuSituasi } from "../kartu";

/** Tema: keluarga dan orang rumah. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_KELUARGA: KartuSituasi[] = [
  {
    id: "kl01",
    situasi: "Orang rumah minta tolong pas kamu lagi sibuk. Kamu...",
    pilihan: {
      PP: "Bilang selesainya jam berapa, baru bantu",
      PC: "Tinggalin sebentar, bantuin dulu",
      RB: "Bilang lagi nggak bisa, nanti aja",
      SS: "Langsung bantuin, nggak tega",
    },
  },
  {
    id: "kl02",
    situasi: "Adik atau sepupu kecil minta ditemenin main. Kamu...",
    pilihan: {
      PP: "Main setengah jam, terus lanjut urusan sendiri",
      PC: "Temenin sampai dia capek sendiri",
      RB: "Ngajarin permainan baru yang lebih seru",
      SS: "Ikut main boneka, serius banget",
    },
  },
  {
    id: "kl03",
    situasi: "Keluarga besar kumpul, mulai nanya macam-macam. Kamu...",
    pilihan: {
      PP: "Jawab singkat dan jelas",
      PC: "Senyum, jawab seperlunya aja",
      RB: "Balik nanya, biar gantian",
      SS: "Kabur ke dapur, bantuin nyiapin makanan",
    },
  },
  {
    id: "kl04",
    situasi: "Orang tua nggak setuju sama pilihanmu. Kamu...",
    pilihan: {
      PP: "Jelasin rencananya pelan-pelan, satu-satu",
      PC: "Dengerin dulu, cari waktu yang pas buat ngobrol",
      RB: "Terus terang, tetap sama pilihanmu",
      SS: "Sedih, takut bikin mereka kecewa",
    },
  },
  {
    id: "kl05",
    situasi: "Giliran kamu yang masak buat orang rumah. Kamu...",
    pilihan: {
      PP: "Ikutin resep, takarannya harus pas",
      PC: "Masak yang biasa aja, yang penting hangat",
      RB: "Nyobain resep aneh dari internet",
      SS: "Masakin kesukaan tiap orang",
    },
  },
  {
    id: "kl06",
    situasi: "Ada saudara datang mendadak ke rumah. Kamu...",
    pilihan: {
      PP: "Beresin ruang tamu, siapin minum",
      PC: "Disambut hangat, diajak ngobrol santai",
      RB: "Yang paling ramai ngajak ngobrol",
      SS: "Senyum malu-malu, bantu bawain minum",
    },
  },
  {
    id: "kl07",
    situasi: "Kakak atau adik pakai barangmu tanpa izin. Kamu...",
    pilihan: {
      PP: "Bikin aturan pinjam yang jelas",
      PC: "Ya udah, asal dibalikin",
      RB: "Langsung ditegur saat itu juga",
      SS: "Kesal, tapi diam aja",
    },
  },
  {
    id: "kl08",
    situasi: "Hari Ibu atau Hari Ayah tiba. Kamu...",
    pilihan: {
      PP: "Udah nyiapin hadiah yang bakal kepakai",
      PC: "Nemenin beliau seharian",
      RB: "Ngajak jalan ke tempat baru",
      SS: "Nulis surat panjang",
    },
  },
  {
    id: "kl09",
    situasi: "Rumah lagi berantakan banget. Kamu...",
    pilihan: {
      PP: "Mulai dari satu ruangan, beresin berurutan",
      PC: "Beres-beres santai sambil puter lagu",
      RB: "Sekalian ngerombak susunan perabot",
      SS: "Beres-beres, eh malah nemu barang kenangan",
    },
  },
  {
    id: "kl10",
    situasi: "Orang tua minta diajarin pakai aplikasi. Kamu...",
    pilihan: {
      PP: "Ajarin langkah demi langkah, sekalian dicatat",
      PC: "Sabar, diulang terus sampai bisa",
      RB: "Dikerjain aja sekalian biar cepat",
      SS: "Ajarin sambil ketawa-ketawa bareng",
    },
  },
  {
    id: "kl11",
    situasi: "Acara keluarga bentrok sama rencanamu. Kamu...",
    pilihan: {
      PP: "Atur ulang jadwal biar dua-duanya dapat",
      PC: "Ikut acara keluarga, rencana bisa lain kali",
      RB: "Bilang terus terang kalau udah ada rencana",
      SS: "Ikut keluarga, nggak enak mau nolak",
    },
  },
  {
    id: "kl12",
    situasi: "Akhirnya punya kamar sendiri untuk pertama kalinya. Kamu...",
    pilihan: {
      PP: "Ditata biar semuanya gampang dijangkau",
      PC: "Dibikin senyaman mungkin buat istirahat",
      RB: "Ngecat dindingnya pakai warna yang berani",
      SS: "Nempelin foto-foto sama lampu kecil",
    },
  },
  {
    id: "kl13",
    situasi: "Nenek atau kakek cerita hal yang sama lagi. Kamu...",
    pilihan: {
      PP: "Dengerin, sesekali nanya detailnya",
      PC: "Dengerin kayak baru pertama kali dengar",
      RB: "Minta cerita lain yang belum pernah diceritain",
      SS: "Megangin tangannya sambil dengerin",
    },
  },
  {
    id: "kl14",
    situasi: "Keluarga mau foto bareng. Kamu...",
    pilihan: {
      PP: "Ngatur barisan biar semua kelihatan",
      PC: "Berdiri di mana aja, bebas",
      RB: "Usul gaya yang nggak biasa",
      SS: "Berdiri di dekat orang yang paling disayang",
    },
  },
  {
    id: "kl15",
    situasi: "Pulang telat dan belum sempat ngabarin rumah. Kamu...",
    pilihan: {
      PP: "Telepon dulu, jelasin lagi di mana",
      PC: "Kirim pesan singkat, tenang aja",
      RB: "Pulang aja dulu, jelasinnya di rumah",
      SS: "Ngerasa bersalah sepanjang jalan",
    },
  },
  {
    id: "kl16",
    situasi: "Orang rumah lagi sakit. Kamu...",
    pilihan: {
      PP: "Ngatur obat sama jadwal makannya",
      PC: "Nemenin, bikin suasananya tenang",
      RB: "Langsung antar periksa ke dokter",
      SS: "Bikinin bubur, ditengok tiap jam",
    },
  },
  {
    id: "kl17",
    situasi: "Liburan keluarga, kamu yang disuruh pilih tujuannya. Kamu...",
    pilihan: {
      PP: "Pilih yang cocok buat semua umur",
      PC: "Tempat tenang yang banyak tempat duduknya",
      RB: "Yang belum pernah didatangi siapa pun",
      SS: "Balik ke tempat yang banyak kenangannya",
    },
  },
  {
    id: "kl18",
    situasi: "Saudaramu dipuji-puji terus sama keluarga. Kamu...",
    pilihan: {
      PP: "Fokus aja ke jalan sendiri",
      PC: "Ikut senang, tiap orang kan beda",
      RB: 'Bercanda, "aku juga hebat lho"',
      SS: "Agak iri, tapi tetap bangga",
    },
  },
  {
    id: "kl19",
    situasi: "Harus jaga rumah sendirian semalaman. Kamu...",
    pilihan: {
      PP: "Ngecek semua pintu, kunci rapat-rapat",
      PC: "Malah enak, nikmatin sepinya",
      RB: "Ngundang teman buat nginep",
      SS: "Nyalain semua lampu, teleponan sama teman",
    },
  },
  {
    id: "kl20",
    situasi: "Orang tua lagi cerita masa muda mereka. Kamu...",
    pilihan: {
      PP: "Nanya gimana dulu mereka ambil keputusan",
      PC: "Dengerin sambil ngeteh",
      RB: "Nanya kenakalan mereka waktu itu",
      SS: "Minta dilihatin foto-foto lamanya",
    },
  },
  {
    id: "kl21",
    situasi: "Ada kabar baik buat keluarga. Kamu...",
    pilihan: {
      PP: "Bantu ngurus apa aja yang perlu disiapin",
      PC: "Bersyukur, peluk semuanya",
      RB: "Usul dirayain besar-besaran",
      SS: "Nangis haru duluan",
    },
  },
  {
    id: "kl22",
    situasi: "Tugas beres-beres rumah lagi dibagi-bagi. Kamu...",
    pilihan: {
      PP: "Ambil bagian yang paling butuh ketelitian",
      PC: "Terima aja bagian yang tersisa",
      RB: "Minta tukeran bagian biar nggak bosan",
      SS: "Pilih bagian yang paling nggak disukai orang",
    },
  },
  {
    id: "kl23",
    situasi: "Mau izin pergi jauh sama teman-teman. Kamu...",
    pilihan: {
      PP: "Jelasin rencananya lengkap biar mereka tenang",
      PC: "Izinnya pelan-pelan, nunggu waktu yang pas",
      RB: "Bilang langsung, yakin bakal diizinin",
      SS: "Izin sambil janji bakal sering ngabarin",
    },
  },
];
