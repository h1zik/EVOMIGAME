import type { KartuSituasi } from "../kartu";

/** Tema: uang dan belanja. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_BELANJA: KartuSituasi[] = [
  {
    id: "bl01",
    situasi: "Ada diskon besar tengah malam. Kamu...",
    pilihan: {
      PP: "Beli yang udah ada di daftar",
      PC: "Lewatin, tidur lebih penting",
      RB: "Begadang, borong",
      SS: "Beliin buat orang lain juga",
    },
  },
  {
    id: "bl02",
    situasi: "Barang incaranmu mendadak jadi lebih mahal. Kamu...",
    pilihan: {
      PP: "Tunggu, pantau dulu",
      PC: "Ya sudah, belum waktunya",
      RB: "Beli sekarang sebelum naik lagi",
      SS: "Sedih, lihat-lihat fotonya aja",
    },
  },
  {
    id: "bl03",
    situasi: "Kasir kasih kembalian kelebihan. Kamu...",
    pilihan: {
      PP: "Balikin, hitung ulang bareng",
      PC: "Balikin sambil senyum",
      RB: '"Kak, ini kelebihan"',
      SS: "Balikin, takut dia kena tegur",
    },
  },
  {
    id: "bl04",
    situasi: "Waktunya belanja bulanan. Kamu...",
    pilihan: {
      PP: "Pakai daftar, sesuai anggaran",
      PC: "Keliling santai, ambil yang perlu",
      RB: "Coba merek yang belum pernah",
      SS: "Selipin camilan buat orang rumah",
    },
  },
  {
    id: "bl05",
    situasi: "Teman ngajak patungan beli kado. Kamu...",
    pilihan: {
      PP: "Catat siapa bayar berapa",
      PC: "Ikut berapa pun",
      RB: "Usul kado yang lebih niat",
      SS: "Yang bungkus dan tulis kartunya",
    },
  },
  {
    id: "bl06",
    situasi: "Kamu pengin sesuatu yang mahal. Kamu...",
    pilihan: {
      PP: "Nabung tiap minggu sampai cukup",
      PC: "Kalau belum bisa, nggak apa-apa",
      RB: "Cari cara dapat uang tambahan",
      SS: "Simpan fotonya jadi penyemangat",
    },
  },
  {
    id: "bl07",
    situasi: "Penjual nawarin barang yang nggak kamu butuh. Kamu...",
    pilihan: {
      PP: "Tolak sopan, lanjut jalan",
      PC: "Dengerin dulu, baru bilang nggak",
      RB: '"Nggak, makasih"',
      SS: "Nggak enak, akhirnya beli satu",
    },
  },
  {
    id: "bl08",
    situasi: "Tawar-menawar di pasar. Kamu...",
    pilihan: {
      PP: "Udah tahu harga wajarnya",
      PC: "Bayar sesuai yang diminta",
      RB: "Tawar setengahnya dulu",
      SS: "Nggak tega nawar",
    },
  },
  {
    id: "bl09",
    situasi: "Dompetmu ketinggalan pas mau bayar. Kamu...",
    pilihan: {
      PP: "Bayar pakai HP",
      PC: "Tenang, minta waktu sebentar",
      RB: "Titip barang, lari ambil",
      SS: "Panik, minta maaf ke kasir",
    },
  },
  {
    id: "bl10",
    situasi: "Kamu nemu uang di jalan. Kamu...",
    pilihan: {
      PP: "Titip ke petugas terdekat",
      PC: "Tanya orang sekitar",
      RB: 'Umumkan, "ada yang kehilangan?"',
      SS: "Kasih ke yang lebih butuh",
    },
  },
  {
    id: "bl11",
    situasi: "Kamu mau beli HP baru. Kamu...",
    pilihan: {
      PP: "Bandingkan dulu beberapa pilihan",
      PC: "Yang lama masih bisa, nanti aja",
      RB: "Ambil keluaran terbaru",
      SS: "Pilih warna paling lucu",
    },
  },
  {
    id: "bl12",
    situasi: "Temanmu jualan dan nawarin ke kamu. Kamu...",
    pilihan: {
      PP: "Beli kalau memang perlu",
      PC: "Beli satu buat dukung",
      RB: "Beli, sekalian promosiin",
      SS: "Beli banyak, nggak enak nolak",
    },
  },
  {
    id: "bl13",
    situasi: "Ada tantangan nabung selama sebulan. Kamu...",
    pilihan: {
      PP: "Bikin tabel, isi tiap hari",
      PC: "Ikut semampunya",
      RB: "Pasang target dua kali lipat",
      SS: "Ikut bareng teman biar semangat",
    },
  },
  {
    id: "bl14",
    situasi: "Belanja baju, pilihannya tinggal dua. Kamu...",
    pilihan: {
      PP: "Pilih yang paling sering bisa dipakai",
      PC: "Pilih yang paling nyaman",
      RB: "Pilih yang paling mencolok",
      SS: "Pilih yang dibilang bagus sama teman",
    },
  },
  {
    id: "bl15",
    situasi: "Paket yang kamu tunggu belum datang. Kamu...",
    pilihan: {
      PP: "Lacak, hubungi kurirnya",
      PC: "Nanti juga sampai",
      RB: "Telepon terus sampai jelas",
      SS: "Bolak-balik lihat ke depan rumah",
    },
  },
  {
    id: "bl16",
    situasi: "Uangmu menipis di akhir bulan. Kamu...",
    pilihan: {
      PP: "Udah diatur, masih cukup",
      PC: "Makan seadanya, tenang",
      RB: "Cari kerjaan sampingan",
      SS: "Masak bareng teman biar hemat",
    },
  },
  {
    id: "bl17",
    situasi: "Ada barang lucu tapi nggak berguna. Kamu...",
    pilihan: {
      PP: "Lewatin",
      PC: "Lihat aja udah senang",
      RB: "Beli, kapan lagi",
      SS: "Beli, terlalu lucu buat ditinggal",
    },
  },
  {
    id: "bl18",
    situasi: "Kamu terus-terusan ditraktir teman. Kamu...",
    pilihan: {
      PP: "Catat, gantian minggu depan",
      PC: "Terima, balas dengan cara lain",
      RB: '"Hari ini aku yang bayar"',
      SS: "Nggak enak, bawain dia sesuatu",
    },
  },
  {
    id: "bl19",
    situasi: "Toko favoritmu mau tutup selamanya. Kamu...",
    pilihan: {
      PP: "Beli stok barang andalan",
      PC: "Mampir terakhir kali",
      RB: "Borong selagi bisa",
      SS: "Sedih, foto tokonya",
    },
  },
  {
    id: "bl20",
    situasi: "Kamu terima gaji pertama. Kamu...",
    pilihan: {
      PP: "Bagi untuk tabungan dan kebutuhan",
      PC: "Simpan dulu, pikir pelan-pelan",
      RB: "Rayakan",
      SS: "Beliin sesuatu buat orang tua",
    },
  },
  {
    id: "bl21",
    situasi: "Teman minta ditemani belanja seharian. Kamu...",
    pilihan: {
      PP: "Tanya daftarnya, atur urutan toko",
      PC: "Temenin, duduk kalau capek",
      RB: "Ikut milih yang berani-berani",
      SS: "Bawain tasnya, kasih pendapat",
    },
  },
  {
    id: "bl22",
    situasi: "Ada undian berhadiah. Kamu...",
    pilihan: {
      PP: "Ikut kalau syaratnya jelas",
      PC: "Ikut, nggak berharap",
      RB: "Ikut semuanya",
      SS: "Ikut, udah bayangin menangnya",
    },
  },
  {
    id: "bl23",
    situasi: "Barang lamamu masih bagus, tapi kamu bosan. Kamu...",
    pilihan: {
      PP: "Jual, hasilnya buat yang baru",
      PC: "Pakai terus, masih enak",
      RB: "Ubah sendiri jadi beda",
      SS: "Kasih ke orang yang suka",
    },
  },
];
