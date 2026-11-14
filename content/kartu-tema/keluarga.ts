import type { KartuSituasi } from "../kartu";

/** Tema: keluarga dan orang rumah. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_KELUARGA: KartuSituasi[] = [
  {
    id: "K021",
    situasi: "Orang tua minta tolong beresin gudang akhir pekan ini. Kamu...",
    pilihan: {
      PP: "Bagi tugas biar beresnya lebih cepat",
      PC: "Dikerjain pelan-pelan sambil dengerin lagu",
      RB: "Bongkar semuanya sekalian, biar tuntas",
      SS: "Bantuin, sambil nyimpenin barang kenangan",
    },
  },
  {
    id: "K022",
    situasi: "Adikmu minta diajarin PR yang lumayan susah. Kamu...",
    pilihan: {
      PP: "Jelasin langkahnya dari yang paling dasar",
      PC: "Nemenin ngerjain sambil nyemil bareng",
      RB: "Nyari cara cepatnya bareng di internet",
      SS: "Dengerin keluhannya dulu, baru bantu",
    },
  },
  {
    id: "K023",
    situasi: "Keluarga besar lagi kumpul di rumah. Kamu...",
    pilihan: {
      PP: "Bantu nyiapin keperluan tamu",
      PC: "Ngobrol santai sama saudara seumuran",
      RB: "Jadi yang paling ramai, nyairin suasana",
      SS: "Salim ke semua orang sambil senyum",
    },
  },
  {
    id: "K024",
    situasi: "Lagi makan malam, orang tua nanya rencana masa depanmu. Kamu...",
    pilihan: {
      PP: "Ceritain target dan langkah yang udah disusun",
      PC: '"Lagi dijalanin pelan-pelan kok"',
      RB: "Cerita semangat soal ide-ide barumu",
      SS: "Minta doa biar semuanya lancar",
    },
  },
  {
    id: "K025",
    situasi: "Kakak mau pinjam charger, padahal bateraimu juga tipis. Kamu...",
    pilihan: {
      PP: "Gantian, tiap setengah jam tukar",
      PC: "Kasih ke kakak dulu, kamu nanti aja",
      RB: '"Nanti dulu, punyaku juga mau habis"',
      SS: "Pinjamin, nggak tega bilang bateraimu tipis",
    },
  },
  {
    id: "K026",
    situasi: "Malam-malam, di rumah mati lampu. Kamu...",
    pilihan: {
      PP: "Nyari senter, mastiin semua aman",
      PC: "Rebahan, nikmatin gelapnya",
      RB: "Ngajak orang rumah main tebak-tebakan",
      SS: "Nyalain lilin, ngajak duduk kumpul bareng",
    },
  },
  {
    id: "K027",
    situasi: "Orang tua minta pendapat soal warna cat ruang tamu. Kamu...",
    pilihan: {
      PP: "Usul warna netral yang gampang dipadu",
      PC: "Pilih warna adem yang bikin betah",
      RB: "Nyaranin warna cerah yang beda dari biasanya",
      SS: "Ngikut pilihan orang tua aja",
    },
  },
  {
    id: "K028",
    situasi: "Bakal pulang lebih malam dari yang kamu bilang ke rumah. Kamu...",
    pilihan: {
      PP: "Ngabarin posisi dan jam sampai dari awal",
      PC: 'Chat santai, "masih di jalan ya"',
      RB: "Pulang aja, jelasinnya nanti di rumah",
      SS: "Minta maaf begitu sampai di rumah",
    },
  },
  {
    id: "K029",
    situasi: "Saudara jauh nitip oleh-oleh khas kotamu. Kamu...",
    pilihan: {
      PP: "Catat pesanannya, cari toko yang paling bagus",
      PC: "Beliin yang paling gampang dicari",
      RB: "Nyariin oleh-oleh yang paling unik",
      SS: "Milihin yang paling enak, dibungkus rapi",
    },
  },
  {
    id: "K030",
    situasi: "Adik atau kakakmu lagi bad mood di rumah. Kamu...",
    pilihan: {
      PP: "Kasih ruang dulu, nanti baru ajak ngobrol",
      PC: "Biarin dulu sampai tenang sendiri",
      RB: "Ajak keluar beli jajan biar senang",
      SS: "Diam-diam beliin makanan kesukaannya",
    },
  },
  {
    id: "K031",
    situasi: "Orang tua bingung pakai fitur baru di HP-nya. Kamu...",
    pilihan: {
      PP: "Tulisin langkah-langkahnya biar gampang diingat",
      PC: "Duduk di sebelahnya, ajarin pelan-pelan",
      RB: "Setting-in sekalian biar tinggal pakai",
      SS: "Ngajarin sambil muji tiap beliau berhasil",
    },
  },
  {
    id: "K032",
    situasi: "Keluarga ngajak liburan ke tempat yang kurang kamu suka. Kamu...",
    pilihan: {
      PP: "Nyari kegiatan seru yang ada di sana",
      PC: "Ikut aja, yang penting kumpul",
      RB: "Usul tempat lain yang lebih menantang",
      SS: "Setuju aja biar semuanya senang",
    },
  },
  {
    id: "K033",
    situasi: "Nemu foto masa kecilmu yang lucu di album keluarga. Kamu...",
    pilihan: {
      PP: "Ngerapiin albumnya sekalian biar awet",
      PC: "Ketawa sendiri lihat gaya jadulmu",
      RB: "Kirim ke grup keluarga biar ramai",
      SS: "Dilihatin lama-lama, jadi kangen masa itu",
    },
  },
  {
    id: "K034",
    situasi: "Orang tua nitip beli bahan masakan ke pasar. Kamu...",
    pilihan: {
      PP: "Bikin daftar belanja biar nggak ada yang lupa",
      PC: "Jalan santai sambil lihat-lihat yang lain",
      RB: "Berangkat tanpa catatan, ingat kok",
      SS: "Telepon dulu buat mastiin mereknya",
    },
  },
  {
    id: "K035",
    situasi: "Di rumah nggak ada makanan, semua mager masak. Kamu...",
    pilihan: {
      PP: "Pesan makanan online yang porsinya pas",
      PC: "Masak mi instan aja, praktis",
      RB: "Ngajak semua keluar nyari tempat makan baru",
      SS: "Nawarin masakin telur buat semuanya",
    },
  },
  {
    id: "K036",
    situasi: "Dapat gaji pertama dari hasil kerjamu sendiri. Kamu...",
    pilihan: {
      PP: "Sisihin buat tabungan dan orang tua dulu",
      PC: "Ngajak keluarga makan bareng di rumah",
      RB: "Traktir sekeluarga makan di luar",
      SS: "Beliin kado kecil buat orang tua",
    },
  },
  {
    id: "K037",
    situasi: "Kucing di rumah bikin barang-barang berantakan. Kamu...",
    pilihan: {
      PP: "Beresin lagi semuanya ke tempatnya",
      PC: "Ketawa aja lihat tingkahnya",
      RB: "Gendong, ajak main sekalian",
      SS: "Elus-elus dia sambil mungutin yang jatuh",
    },
  },
  {
    id: "K038",
    situasi: "Orang tua ngajak ngobrol serius soal pengeluaranmu. Kamu...",
    pilihan: {
      PP: "Nunjukin catatan keuangan yang udah dibuat",
      PC: "Dengerin nasihatnya dengan kepala dingin",
      RB: "Jujur aja kalau bulan ini agak boros",
      SS: "Iyain semua sarannya",
    },
  },
  {
    id: "K039",
    situasi: "Ada paket datang ke rumah, tapi bukan buat kamu. Kamu...",
    pilihan: {
      PP: "Taruh di meja depan, kabarin orangnya",
      PC: "Biarin di ruang tamu dulu",
      RB: "Teriak manggil yang punya paket",
      SS: "Simpenin di tempat aman biar nggak hilang",
    },
  },
  {
    id: "K040",
    situasi: "Nonton TV bareng keluarga, tapi acaranya kurang seru. Kamu...",
    pilihan: {
      PP: "Nyari rekomendasi tontonan lain yang bagus",
      PC: "Ikut nonton aja sambil main HP",
      RB: "Ambil remote, ganti ke yang lebih seru",
      SS: "Nemenin nonton sambil ngobrol ringan",
    },
  },
];
