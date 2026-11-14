import type { KartuSituasi } from "../kartu";

/** Tema: teman dan tongkrongan. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_TEMAN: KartuSituasi[] = [
  {
    id: "K001",
    situasi: "Baru sampai rumah, eh teman ngajak pergi lagi. Kamu...",
    pilihan: {
      PP: "Lihat jadwal besok dulu, baru jawab",
      PC: "Lain kali aja ya, mau rebahan dulu",
      RB: "Berangkat lagi, capeknya urusan nanti",
      SS: "Nggak enak nolak, akhirnya ikut sebentar",
    },
  },
  {
    id: "K002",
    situasi: "Grup chat ramai nentuin tempat nongkrong, nggak kelar-kelar. Kamu...",
    pilihan: {
      PP: "Kasih tiga pilihan tempat, minta voting",
      PC: '"Aku ikut aja, yang penting bareng"',
      RB: '"Udah, di sini aja," sambil kirim lokasinya',
      SS: "Nunggu yang lain sepakat, baru bilang setuju",
    },
  },
  {
    id: "K003",
    situasi: "Temanmu telat setengah jam dari jam janjian. Kamu...",
    pilihan: {
      PP: "Nanya posisinya, ngitung kira-kira kapan sampai",
      PC: "Nungguin sambil santai lihat-lihat sekitar",
      RB: 'Telepon, "udah di mana nih?"',
      SS: 'Pas dia datang, "nggak apa-apa kok"',
    },
  },
  {
    id: "K004",
    situasi: "Teman lama tiba-tiba chat, ngajak ketemuan minggu ini. Kamu...",
    pilihan: {
      PP: "Buka kalender, cari hari yang kosong",
      PC: '"Boleh banget, kabarin aja kapan"',
      RB: '"Hari ini aja gimana?"',
      SS: "Senang banget, balasnya panjang nanya kabar",
    },
  },
  {
    id: "K005",
    situasi: "Temanmu minta pendapat soal baju yang lagi dia coba. Kamu...",
    pilihan: {
      PP: "Kasih saran model yang lebih cocok buat dia",
      PC: '"Yang bikin kamu nyaman aja"',
      RB: "Jujur aja kalau modelnya kurang pas",
      SS: "Muji dulu biar dia makin pede",
    },
  },
  {
    id: "K006",
    situasi: "Lagi nongkrong, tiba-tiba obrolan jadi hening. Kamu...",
    pilihan: {
      PP: "Buka topik soal rencana minggu depan",
      PC: "Nikmatin heningnya sambil minum",
      RB: "Nyeletuk hal random biar ramai lagi",
      SS: "Senyum-senyum sambil nunggu ada yang mulai",
    },
  },
  {
    id: "K007",
    situasi: "Udah di kasir, temanmu baru sadar lupa bawa dompet. Kamu...",
    pilihan: {
      PP: "Talangin dulu, dicatat biar nanti diganti",
      PC: '"Pakai punyaku dulu aja, santai"',
      RB: "Bayarin sekalian, nggak usah diganti",
      SS: "Nawarin bayarin, pelan biar dia nggak malu",
    },
  },
  {
    id: "K008",
    situasi: "Diajak main game yang belum pernah kamu coba. Kamu...",
    pilihan: {
      PP: "Baca aturan mainnya dulu sebelum mulai",
      PC: "Ikut main aja, kalah menang belakangan",
      RB: "Gas, belajarnya sambil jalan",
      SS: "Minta diajarin pelan-pelan sama teman",
    },
  },
  {
    id: "K009",
    situasi: "Satu geng beda pendapat soal film yang mau ditonton. Kamu...",
    pilihan: {
      PP: "Ngajak voting biar adil",
      PC: "Film mana aja nggak masalah",
      RB: "Usul film yang paling beda dari biasanya",
      SS: "Ngikut suara terbanyak biar damai",
    },
  },
  {
    id: "K010",
    situasi: "Temanmu cerita dia baru diterima magang. Kamu...",
    pilihan: {
      PP: "Kasih selamat, nanya mulai kapan",
      PC: "Ikut senang, ngajak makan buat ngerayain",
      RB: "Teriak heboh, ikut bangga",
      SS: "Peluk dia sambil bilang selamat",
    },
  },
  {
    id: "K011",
    situasi: "Ada orang baru gabung ke tongkrongan kalian. Kamu...",
    pilihan: {
      PP: "Ngenalin dia ke yang lain satu-satu",
      PC: "Ngobrol santai biar dia nyaman",
      RB: "Ajak bercanda biar cepat akrab",
      SS: "Senyum, nyapa duluan pelan-pelan",
    },
  },
  {
    id: "K012",
    situasi: "Temanmu mau pinjam barang kesayanganmu buat besok. Kamu...",
    pilihan: {
      PP: "Pinjamin, sambil ngingetin cara ngerawatnya",
      PC: "Boleh, asal balik kalau udah selesai",
      RB: '"Pakai aja sepuasnya"',
      SS: "Pinjamin, walau dalam hati agak khawatir",
    },
  },
  {
    id: "K013",
    situasi: "Nggak sengaja dengar temanmu lagi diomongin orang. Kamu...",
    pilihan: {
      PP: "Cari tahu dulu benar nggaknya",
      PC: "Nggak diambil pusing, bukan urusanmu",
      RB: "Belain temanmu saat itu juga",
      SS: "Cerita ke temanmu pelan-pelan biar hati-hati",
    },
  },
  {
    id: "K014",
    situasi: "Diajak olahraga pagi di hari Minggu. Kamu...",
    pilihan: {
      PP: "Nyiapin baju olahraga dari malamnya",
      PC: "Iyain dulu, lihat nanti bangunnya jam berapa",
      RB: '"Ayo," sekalian nyari sarapan baru',
      SS: "Ikut, biar bisa sekalian ngobrol",
    },
  },
  {
    id: "K015",
    situasi: "Lagi kumpul, salah satu teman kelihatan murung. Kamu...",
    pilihan: {
      PP: "Ngajak dia ngobrol berdua agak jauhan",
      PC: "Duduk di sebelahnya, nemenin tanpa maksa",
      RB: '"Kamu kenapa? Cerita dong"',
      SS: "Bawain minuman biar mood-nya naik",
    },
  },
  {
    id: "K016",
    situasi: "Teman mendadak minta dianterin ke suatu tempat. Kamu...",
    pilihan: {
      PP: "Ngecek rute tercepat biar nggak telat",
      PC: "Boleh, sekalian jalan-jalan sore",
      RB: "Ambil kunci motor, berangkat",
      SS: "Iyain, padahal tadinya mau di rumah aja",
    },
  },
  {
    id: "K017",
    situasi: "Foto bareng, hasilnya kurang bagus. Kamu...",
    pilihan: {
      PP: "Ngatur ulang posisi biar hasilnya rapi",
      PC: "Ketawa aja, foto apa adanya juga lucu",
      RB: "Minta ulang terus sampai dapat yang bagus",
      SS: '"Udah bagus kok," biar nggak ngerepotin',
    },
  },
  {
    id: "K018",
    situasi: "Teman ngajak nyobain hobi yang asing buatmu. Kamu...",
    pilihan: {
      PP: "Cari info dasarnya dulu di internet",
      PC: "Ikut nyoba, hitung-hitung pengalaman",
      RB: "Daftar hari itu juga, nggak pakai mikir",
      SS: "Mau, asal bareng dia terus",
    },
  },
  {
    id: "K019",
    situasi: "Mau bahas liburan, tapi grup chat sepi banget. Kamu...",
    pilihan: {
      PP: "Bikin daftar yang perlu dibahas biar gampang",
      PC: "Kirim stiker lucu buat mancing obrolan",
      RB: "Telepon satu-satu biar cepat kelar",
      SS: "Nanya kabar dulu, baru pelan-pelan bahas",
    },
  },
  {
    id: "K020",
    situasi: "Temanmu salah paham sama isi chatmu kemarin. Kamu...",
    pilihan: {
      PP: "Jelasin ulang pakai kalimat yang lebih jelas",
      PC: "Telepon sebentar biar ngobrolnya lebih enak",
      RB: "Samperin biar nggak berlarut-larut",
      SS: "Minta maaf duluan biar nggak canggung",
    },
  },
];
