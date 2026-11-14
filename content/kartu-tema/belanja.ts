import type { KartuSituasi } from "../kartu";

/** Tema: uang dan belanja. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_BELANJA: KartuSituasi[] = [
  {
    id: "bl01",
    situasi: "Ada diskon besar-besaran pas tengah malam. Kamu...",
    pilihan: {
      PP: "Beli yang memang udah ada di daftar",
      PC: "Lewatin aja, tidur lebih penting",
      RB: "Begadang, borong selagi murah",
      SS: "Sekalian beliin buat orang lain",
    },
  },
  {
    id: "bl02",
    situasi: "Barang incaranmu mendadak naik harga. Kamu...",
    pilihan: {
      PP: "Tahan dulu, pantau harganya",
      PC: "Ya udah, berarti belum waktunya",
      RB: "Beli sekarang sebelum naik lagi",
      SS: "Sedih, lihatin fotonya aja dulu",
    },
  },
  {
    id: "bl03",
    situasi: "Kembalian dari kasir ternyata kelebihan. Kamu...",
    pilihan: {
      PP: "Hitung ulang di depan kasirnya",
      PC: "Balikin sambil senyum",
      RB: '"Kak, ini kembaliannya kelebihan"',
      SS: "Balik lagi walau udah jauh, kasihan kasirnya",
    },
  },
  {
    id: "bl04",
    situasi: "Waktunya belanja bulanan. Kamu...",
    pilihan: {
      PP: "Bawa daftar, belanja sesuai anggaran",
      PC: "Keliling santai, ambil yang perlu aja",
      RB: "Nyobain merek yang belum pernah dibeli",
      SS: "Nyelipin camilan buat orang rumah",
    },
  },
  {
    id: "bl05",
    situasi: "Teman ngajak patungan beli kado. Kamu...",
    pilihan: {
      PP: "Nyatet siapa bayar berapa",
      PC: "Ikut aja, berapa pun patungannya",
      RB: "Usul kado yang lebih niat",
      SS: "Bagian ngebungkus dan nulis kartunya",
    },
  },
  {
    id: "bl06",
    situasi: "Lagi pengin banget barang yang mahal. Kamu...",
    pilihan: {
      PP: "Nabung tiap minggu sampai cukup",
      PC: "Kalau belum kebeli ya nggak apa-apa",
      RB: "Cari cara buat dapat uang tambahan",
      SS: "Fotonya disimpan, jadi penyemangat",
    },
  },
  {
    id: "bl07",
    situasi: "Penjual nawarin barang yang nggak kamu butuh. Kamu...",
    pilihan: {
      PP: "Nolak sopan, lanjut jalan",
      PC: "Dengerin dulu, baru bilang nggak",
      RB: '"Nggak dulu, makasih"',
      SS: "Nggak enak nolak, akhirnya beli satu",
    },
  },
  {
    id: "bl08",
    situasi: "Lagi tawar-menawar di pasar. Kamu...",
    pilihan: {
      PP: "Udah tahu dulu harga wajarnya berapa",
      PC: "Bayar sesuai yang diminta, nggak ribet",
      RB: "Nawar setengahnya dulu",
      SS: "Nggak tega nawar, kasihan penjualnya",
    },
  },
  {
    id: "bl09",
    situasi: "Pas mau bayar, baru sadar dompet ketinggalan. Kamu...",
    pilihan: {
      PP: "Tenang, bayar pakai HP",
      PC: "Santai, minta waktu sebentar ke kasir",
      RB: "Titip barangnya, lari pulang ambil dompet",
      SS: "Panik, minta maaf terus ke kasirnya",
    },
  },
  {
    id: "bl10",
    situasi: "Nemu uang jatuh di jalan. Kamu...",
    pilihan: {
      PP: "Titipin ke petugas terdekat",
      PC: "Nanya ke orang-orang di sekitar situ",
      RB: 'Teriak, "ada yang kehilangan uang?"',
      SS: "Kasih ke orang yang lebih butuh",
    },
  },
  {
    id: "bl11",
    situasi: "Udah waktunya beli HP baru. Kamu...",
    pilihan: {
      PP: "Bandingin dulu beberapa pilihan",
      PC: "Yang lama masih bisa dipakai, nanti aja",
      RB: "Ambil yang keluaran paling baru",
      SS: "Pilih yang warnanya paling lucu",
    },
  },
  {
    id: "bl12",
    situasi: "Temanmu jualan, terus nawarin ke kamu. Kamu...",
    pilihan: {
      PP: "Beli kalau memang perlu, kalau nggak ya nggak",
      PC: "Beli satu, itung-itung dukung teman",
      RB: "Jujur lagi nggak butuh, tapi bantu promosiin",
      SS: "Nggak enak nolak, akhirnya beli juga",
    },
  },
  {
    id: "bl13",
    situasi: "Ada tantangan nabung selama sebulan. Kamu...",
    pilihan: {
      PP: "Bikin tabel, diisi tiap hari",
      PC: "Ikut semampunya aja",
      RB: "Nggak ikut, uangnya mending buat pengalaman",
      SS: "Ikut bareng teman biar semangat",
    },
  },
  {
    id: "bl14",
    situasi: "Belanja baju, pilihannya tinggal dua. Kamu...",
    pilihan: {
      PP: "Pilih yang bakal paling sering kepakai",
      PC: "Ambil yang paling nyaman di badan",
      RB: "Dua-duanya dibeli, urusan nanti",
      SS: 'Nanya teman, "bagusan yang mana?"',
    },
  },
  {
    id: "bl15",
    situasi: "Paket yang kamu tunggu-tunggu belum datang juga. Kamu...",
    pilihan: {
      PP: "Lacak resinya, hubungin kurirnya",
      PC: "Santai, nanti juga sampai",
      RB: "Telepon terus sampai jelas di mana",
      SS: "Bolak-balik ngintip ke depan rumah",
    },
  },
  {
    id: "bl16",
    situasi: "Akhir bulan, uang mulai menipis. Kamu...",
    pilihan: {
      PP: "Aman, udah diatur dari awal bulan",
      PC: "Makan seadanya, tetap tenang",
      RB: "Cari kerjaan sampingan",
      SS: "Masak bareng teman biar hemat",
    },
  },
  {
    id: "bl17",
    situasi: "Ada barang lucu banget, tapi nggak ada gunanya. Kamu...",
    pilihan: {
      PP: "Lewatin, nggak ada di daftar",
      PC: "Lihat-lihat aja udah senang",
      RB: "Beli, kapan lagi nemu yang begini",
      SS: "Beli, terlalu lucu buat ditinggal",
    },
  },
  {
    id: "bl18",
    situasi: "Belakangan ini kamu ditraktir teman terus. Kamu...",
    pilihan: {
      PP: "Dicatat, minggu depan gantian",
      PC: "Terima aja, balasnya lewat cara lain",
      RB: '"Hari ini aku yang bayar, titik"',
      SS: "Nggak enak, besoknya bawain dia sesuatu",
    },
  },
  {
    id: "bl19",
    situasi: "Toko favoritmu mau tutup selamanya. Kamu...",
    pilihan: {
      PP: "Nyetok barang andalan dari sana",
      PC: "Mampir sekali lagi buat terakhir kalinya",
      RB: "Borong selagi masih bisa",
      SS: "Sedih, foto tokonya buat kenang-kenangan",
    },
  },
  {
    id: "bl20",
    situasi: "Gaji pertama akhirnya masuk. Kamu...",
    pilihan: {
      PP: "Langsung dibagi buat tabungan dan kebutuhan",
      PC: "Disimpan dulu, dipikirin pelan-pelan",
      RB: "Rayain, makan enak hari itu juga",
      SS: "Beliin sesuatu buat orang tua",
    },
  },
  {
    id: "bl21",
    situasi: "Teman minta ditemenin belanja seharian. Kamu...",
    pilihan: {
      PP: "Tanya mau beli apa, atur urutan tokonya",
      PC: "Temenin aja, duduk kalau capek",
      RB: "Jujur dari awal, kuatnya cuma dua jam",
      SS: "Bawain tasnya, kasih pendapat tiap ditanya",
    },
  },
  {
    id: "bl22",
    situasi: "Lagi ada undian berhadiah di sebuah acara. Kamu...",
    pilihan: {
      PP: "Nggak ikut, peluang menangnya kecil",
      PC: "Ikut aja, nggak ngarep apa-apa",
      RB: "Borong kuponnya biar peluangnya gede",
      SS: "Ikut, udah ngebayangin kalau menang",
    },
  },
  {
    id: "bl23",
    situasi: "Barang lamamu masih bagus, tapi udah bosan. Kamu...",
    pilihan: {
      PP: "Jual, uangnya buat beli yang baru",
      PC: "Dipakai terus, masih enak kok",
      RB: "Diubah sendiri biar kelihatan beda",
      SS: "Dikasih ke orang yang bakal suka",
    },
  },
];
