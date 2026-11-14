import type { KartuSituasi } from "../kartu";

/** Tema: momen canggung dan tak terduga. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_TAK_TERDUGA: KartuSituasi[] = [
  {
    id: "cg01",
    situasi: "Udah balas lambaian orang, ternyata bukan buat kamu. Kamu...",
    pilihan: {
      PP: "Turunin tangan, lanjut jalan kayak biasa",
      PC: "Senyum aja, namanya juga salah lihat",
      RB: "Ketawa, sekalian lambai ke semua orang",
      SS: "Pura-pura garuk kepala, malunya minta ampun",
    },
  },
  {
    id: "cg02",
    situasi: "Manggil orang, ternyata namanya salah. Kamu...",
    pilihan: {
      PP: "Langsung ralat, minta maaf singkat",
      PC: "Senyum, ulang lagi pakai nama yang benar",
      RB: 'Ketawa, "maaf, ketukar sama yang lain"',
      SS: "Malu banget, jadi takut nyapa dia lagi",
    },
  },
  {
    id: "cg03",
    situasi: "Perut bunyi kencang banget di ruangan yang lagi hening. Kamu...",
    pilihan: {
      PP: "Tetap tenang, pura-pura nggak ada apa-apa",
      PC: "Senyum dikit, ya namanya juga lapar",
      RB: '"Iya, itu perutku," ngaku duluan',
      SS: "Muka langsung merah, pengin ngilang",
    },
  },
  {
    id: "cg04",
    situasi: "Kepeleset di depan banyak orang, kamu...",
    pilihan: {
      PP: "Bangun, ngecek ada yang luka atau nggak",
      PC: 'Berdiri pelan-pelan, "nggak apa-apa kok"',
      RB: "Langsung berdiri sambil angkat tangan, gaya",
      SS: "Buru-buru kabur, malunya kebawa sampai rumah",
    },
  },
  {
    id: "cg05",
    situasi: "Lift tiba-tiba macet, isinya kamu dan orang nggak dikenal. Kamu...",
    pilihan: {
      PP: "Langsung pencet tombol darurat",
      PC: "Tenang aja, nunggu sampai jalan lagi",
      RB: "Ngajak ngobrol biar nggak tegang",
      SS: "Takut, diam di pojok sambil pegang HP",
    },
  },
  {
    id: "cg06",
    situasi: "Buka pintu, ternyata salah masuk ruangan. Kamu...",
    pilihan: {
      PP: "Minta maaf singkat, langsung keluar",
      PC: "Keluar pelan-pelan, nggak usah heboh",
      RB: '"Wah, salah ruangan," sambil ketawa',
      SS: "Jalan cepat keluar, mukanya udah panas",
    },
  },
  {
    id: "cg07",
    situasi: "Baru sadar kancing baju kebuka dari tadi. Kamu...",
    pilihan: {
      PP: "Benerin, terus lanjut kayak biasa",
      PC: "Santai, paling juga nggak ada yang merhatiin",
      RB: '"Kok nggak ada yang bilang sih?"',
      SS: "Ingat-ingat siapa aja yang udah lihat",
    },
  },
  {
    id: "cg08",
    situasi: "Lihat HP, tiba-tiba ketawa sendiri di tempat umum. Kamu...",
    pilihan: {
      PP: "Ditahan, pasang muka biasa lagi",
      PC: "Senyum-senyum aja, nggak ganggu siapa-siapa",
      RB: "Ketawa lepas, bodo amat dilihatin",
      SS: "Nutup mulut pakai tangan, lirik kiri kanan",
    },
  },
  {
    id: "cg09",
    situasi: "Lagi melamun, tiba-tiba ditanya pendapat. Kamu...",
    pilihan: {
      PP: "Minta pertanyaannya diulang dulu",
      PC: '"Maaf, tadi gimana?" dengan santai',
      RB: "Jawab asal, tapi nadanya yakin",
      SS: "Bengong, terus minta maaf berkali-kali",
    },
  },
  {
    id: "cg10",
    situasi: "Mau lewat, malah kiri-kanan bareng sama orang di depan. Kamu...",
    pilihan: {
      PP: "Berhenti, kasih dia jalan duluan",
      PC: "Senyum, geser pelan ke pinggir",
      RB: 'Ketawa, "kita malah dansa ya"',
      SS: "Nunduk, cepat-cepat geser",
    },
  },
  {
    id: "cg11",
    situasi: "Lagi ngomong sendiri, ternyata ada yang dengar. Kamu...",
    pilihan: {
      PP: '"Lagi mikir," terus lanjut',
      PC: "Senyum aja, nggak perlu dijelasin",
      RB: "Sekalian ajak dia ikut ngobrol",
      SS: "Langsung diam, pura-pura sibuk",
    },
  },
  {
    id: "cg12",
    situasi: "Disapa akrab banget, padahal dia salah orang. Kamu...",
    pilihan: {
      PP: "Kasih tahu baik-baik kalau dia salah orang",
      PC: 'Senyum, "kayaknya salah orang deh"',
      RB: "Ikutin dulu sebentar, seru juga",
      SS: "Bingung, cuma bisa ngangguk-ngangguk",
    },
  },
  {
    id: "cg13",
    situasi: "Barang bawaanmu jatuh berserakan di jalan. Kamu...",
    pilihan: {
      PP: "Kumpulin satu-satu, cek ada yang kurang",
      PC: "Pungutin pelan-pelan, nggak usah panik",
      RB: "Ketawa dulu, baru dipungutin",
      SS: "Bilang makasih terus ke yang bantuin",
    },
  },
  {
    id: "cg14",
    situasi: "Tiba-tiba dipanggil maju, padahal nggak ada persiapan. Kamu...",
    pilihan: {
      PP: "Minta waktu semenit buat siap-siap",
      PC: "Maju aja dengan tenang, sebisanya",
      RB: "Maju, ngarang sambil jalan",
      SS: "Minta ditemenin teman ke depan",
    },
  },
  {
    id: "cg15",
    situasi: "Lagi ngomong di depan orang, suara tiba-tiba serak. Kamu...",
    pilihan: {
      PP: "Minum dulu, terus lanjut",
      PC: "Berhenti sebentar, senyum, baru lanjut",
      RB: "Ketawa, lanjut dengan suara lebih kencang",
      SS: "Malah makin gugup",
    },
  },
  {
    id: "cg16",
    situasi: "Salah dengar, jawabanmu jadi nggak nyambung. Kamu...",
    pilihan: {
      PP: "Nanya ulang, terus jawab yang benar",
      PC: "Ketawa kecil, benerin jawabannya",
      RB: "Jadi yang ketawa paling kencang",
      SS: "Minta maaf, malunya nggak hilang-hilang",
    },
  },
  {
    id: "cg17",
    situasi: "Baru sadar ada cabai nyangkut di gigi dari tadi. Kamu...",
    pilihan: {
      PP: "Ke kamar mandi, bersihin sampai beres",
      PC: "Ya udah, udah lewat juga",
      RB: 'Nanya teman, "kok diam aja dari tadi?"',
      SS: "Ingat-ingat udah senyum ke siapa aja",
    },
  },
  {
    id: "cg18",
    situasi: "Orang di sebelahmu ketiduran, kepalanya nyender ke bahumu. Kamu...",
    pilihan: {
      PP: "Geser pelan-pelan biar dia kebangun sendiri",
      PC: "Biarin aja, kasihan kayaknya capek",
      RB: "Bangunin, bahunya pegal",
      SS: "Nggak berani gerak sama sekali",
    },
  },
  {
    id: "cg19",
    situasi: "Udah sampai di acara, ternyata salah hari. Kamu...",
    pilihan: {
      PP: "Cek ulang jadwalnya, catat yang benar",
      PC: "Ya udah, sekalian jalan-jalan aja",
      RB: "Ketawa, cari kegiatan lain di sekitar situ",
      SS: "Pulang diam-diam, nggak cerita ke siapa-siapa",
    },
  },
  {
    id: "cg20",
    situasi: "Ketemu guru atau atasan di mal pas lagi santai. Kamu...",
    pilihan: {
      PP: "Nyapa sopan, singkat aja",
      PC: "Ngangguk sambil senyum dari jauh",
      RB: "Samperin, ngobrol kayak biasa",
      SS: "Pura-pura nggak lihat, belok ke toko sebelah",
    },
  },
  {
    id: "cg21",
    situasi: "Nyanyi ramai-ramai, eh lupa liriknya. Kamu...",
    pilihan: {
      PP: "Diam sebentar, masuk lagi pas reff",
      PC: "Gumam-gumam aja ngikutin nadanya",
      RB: "Ngarang lirik sendiri, yang penting pede",
      SS: "Ketawa malu sambil nutup muka",
    },
  },
  {
    id: "cg22",
    situasi: "Nggak sengaja dengar namamu lagi diomongin orang. Kamu...",
    pilihan: {
      PP: "Dengerin isinya, ambil yang berguna",
      PC: "Lewat aja, nggak usah diambil hati",
      RB: 'Nongol, "lagi ngomongin aku ya?"',
      SS: "Kepikiran terus sampai malam",
    },
  },
  {
    id: "cg23",
    situasi: "Lagi ngomong di depan, mikrofonnya tiba-tiba mati. Kamu...",
    pilihan: {
      PP: "Nunggu sampai mikrofonnya dibenerin",
      PC: "Senyum, santai aja nunggunya",
      RB: "Lanjut aja, suaranya dikencangin",
      SS: "Bingung, lirik-lirik ke panitia",
    },
  },
];
