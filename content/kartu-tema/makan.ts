import type { KartuSituasi } from "../kartu";

/** Tema: makan dan jajan. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_MAKAN: KartuSituasi[] = [
  {
    id: "mk01",
    situasi: "Daftar menunya panjang banget. Kamu...",
    pilihan: {
      PP: "Udah tahu mau pesan apa",
      PC: "Pesan yang biasa",
      RB: "Pesan yang namanya paling aneh",
      SS: 'Tanya, "kamu pesan apa?"',
    },
  },
  {
    id: "mk02",
    situasi: "Makananmu ternyata pedas banget. Kamu...",
    pilihan: {
      PP: "Pesan minum, makan pelan",
      PC: "Nikmatin, keringat nggak apa-apa",
      RB: "Habiskan, malah nambah sambal",
      SS: "Nyerah, tukar sama teman",
    },
  },
  {
    id: "mk03",
    situasi: "Ada jajanan baru yang lagi ramai. Kamu...",
    pilihan: {
      PP: "Tunggu antreannya sepi",
      PC: "Kalau lewat ya beli",
      RB: "Antre di hari pertama",
      SS: "Beli dua, satu buat teman",
    },
  },
  {
    id: "mk04",
    situasi: "Kamu masak mi tengah malam. Kamu...",
    pilihan: {
      PP: "Sesuai petunjuk di bungkus",
      PC: "Mi kuah hangat, dimakan pelan-pelan",
      RB: "Campur semua yang ada di kulkas",
      SS: "Bikin dua, bangunin orang rumah",
    },
  },
  {
    id: "mk05",
    situasi: "Tagihan makan bareng datang. Kamu...",
    pilihan: {
      PP: "Hitung pas, bagi rata",
      PC: "Bayar bagianmu, lebihin dikit",
      RB: '"Aku yang bayar, lain kali kamu"',
      SS: "Diam-diam udah bayarin",
    },
  },
  {
    id: "mk06",
    situasi: "Makananmu lama banget datangnya. Kamu...",
    pilihan: {
      PP: "Tanya ke pelayan, minta kepastian",
      PC: "Ngobrol aja dulu",
      RB: "Samperin kasirnya",
      SS: "Nunggu, nggak enak nanya",
    },
  },
  {
    id: "mk07",
    situasi: "Teman minta icip makananmu. Kamu...",
    pilihan: {
      PP: "Potongin bagian yang rapi",
      PC: "Sodorin piringnya",
      RB: '"Tukeran aja sekalian"',
      SS: "Kasih suapan yang paling enak",
    },
  },
  {
    id: "mk08",
    situasi: "Lagi jaga makan, ada kue enak di meja. Kamu...",
    pilihan: {
      PP: "Ambil satu potong, sesuai jatah",
      PC: "Makan dikit nggak apa-apa",
      RB: "Jaga makannya besok lagi",
      SS: "Bilang nggak, tapi dilirik terus",
    },
  },
  {
    id: "mk09",
    situasi: "Warung langgananmu tutup. Kamu...",
    pilihan: {
      PP: "Udah punya pilihan kedua",
      PC: "Makan apa aja yang ada",
      RB: "Coba tempat yang belum pernah",
      SS: "Sedih, kirim kabar ke teman",
    },
  },
  {
    id: "mk10",
    situasi: "Sarapan di hari libur. Kamu...",
    pilihan: {
      PP: "Sarapan lengkap di jam yang sama",
      PC: "Bangun siang, sarapan jadi makan siang",
      RB: "Cari bubur atau nasi di luar",
      SS: "Bikin roti cantik, difoto dulu",
    },
  },
  {
    id: "mk11",
    situasi: "Kamu diajak makan sesuatu yang belum pernah kamu coba. Kamu...",
    pilihan: {
      PP: "Tanya dulu isinya apa",
      PC: "Coba dikit dulu",
      RB: "Langsung suap besar",
      SS: "Coba kalau ada yang nemenin",
    },
  },
  {
    id: "mk12",
    situasi: "Ada sisa makanan banyak setelah acara. Kamu...",
    pilihan: {
      PP: "Bungkus rapi, bagi-bagi",
      PC: "Simpan buat besok",
      RB: "Ajak tetangga habisin",
      SS: "Antar ke yang belum kebagian",
    },
  },
  {
    id: "mk13",
    situasi: "Es krim kesukaanmu keluar rasa baru. Kamu...",
    pilihan: {
      PP: "Baca dulu rasanya apa",
      PC: "Tetap pilih rasa yang lama",
      RB: "Coba semua rasa barunya",
      SS: "Beli satu, makan berdua",
    },
  },
  {
    id: "mk14",
    situasi: "Hari ini kamu yang traktir teman-teman. Kamu...",
    pilihan: {
      PP: "Tentukan tempat dan anggarannya",
      PC: "Makan sederhana, ngobrol lama",
      RB: '"Pesan apa aja, bebas"',
      SS: "Pesanin kesukaan tiap orang",
    },
  },
  {
    id: "mk15",
    situasi: "Kopi atau teh di pagi hari. Kamu...",
    pilihan: {
      PP: "Takarannya sama tiap hari",
      PC: "Diminum pelan sambil diam",
      RB: "Coba racikan baru",
      SS: "Pakai gelas kesayangan",
    },
  },
  {
    id: "mk16",
    situasi: "Kamu lapar, di rumah nggak ada makanan. Kamu...",
    pilihan: {
      PP: "Pesan antar, sekalian buat stok",
      PC: "Minum dulu, nanti aja",
      RB: "Keluar cari yang masih buka",
      SS: 'Chat teman, "temenin makan yuk"',
    },
  },
  {
    id: "mk17",
    situasi: "Ada lomba makan pedas. Kamu...",
    pilihan: {
      PP: "Lihat dulu aturannya",
      PC: "Nonton sambil minum es",
      RB: "Daftar",
      SS: "Jadi yang megangin minum",
    },
  },
  {
    id: "mk18",
    situasi: "Bekalmu jatuh ke lantai. Kamu...",
    pilihan: {
      PP: "Bersihkan, beli pengganti",
      PC: "Ya sudah, beli yang lain",
      RB: "Ketawa, jadi cerita",
      SS: "Sedih, itu buatan orang rumah",
    },
  },
  {
    id: "mk19",
    situasi: "Temanmu masakin kamu, rasanya kurang pas. Kamu...",
    pilihan: {
      PP: "Kasih saran kecil yang membantu",
      PC: "Makan sampai habis",
      RB: "Bilang jujur, kurang garam",
      SS: "Bilang enak, minta tambah",
    },
  },
  {
    id: "mk20",
    situasi: "Di pasar malam, uangmu terbatas. Kamu...",
    pilihan: {
      PP: "Tentukan dulu mau beli apa aja",
      PC: "Jalan-jalan aja udah senang",
      RB: "Habiskan di jajanan paling unik",
      SS: "Beli satu, bagi sama teman",
    },
  },
  {
    id: "mk21",
    situasi: "Kamu nemu resep yang kelihatannya susah. Kamu...",
    pilihan: {
      PP: "Siapin semua bahan dulu, ikuti urutannya",
      PC: "Coba santai, gagal nggak apa-apa",
      RB: "Coba, ganti bahan sesuka hati",
      SS: "Ajak teman masak bareng",
    },
  },
  {
    id: "mk22",
    situasi: "Kue ulang tahun mulai dipotong. Kamu...",
    pilihan: {
      PP: "Bantu bagi biar semua kebagian",
      PC: "Nunggu giliran",
      RB: "Colek krim ke yang ulang tahun",
      SS: "Ambil paling akhir, yang lain dulu",
    },
  },
  {
    id: "mk23",
    situasi: "Makan sendirian di tempat ramai. Kamu...",
    pilihan: {
      PP: "Sambil baca atau kerja",
      PC: "Nikmatin, nggak masalah",
      RB: "Ajak ngobrol orang di meja sebelah",
      SS: "Agak canggung, main HP",
    },
  },
];
