import type { KartuSituasi } from "../kartu";

/** Tema: makan dan jajan. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_MAKAN: KartuSituasi[] = [
  {
    id: "mk01",
    situasi: "Daftar menunya panjang banget. Kamu...",
    pilihan: {
      PP: "Udah tahu mau pesan apa dari rumah",
      PC: "Pesan yang biasa aja",
      RB: "Pesan yang namanya paling aneh",
      SS: 'Nanya dulu, "kamu pesan apa?"',
    },
  },
  {
    id: "mk02",
    situasi: "Makanan yang kamu pesan ternyata pedas banget. Kamu...",
    pilihan: {
      PP: "Pesan minum, makannya pelan-pelan",
      PC: "Nikmatin aja, keringetan dikit nggak apa-apa",
      RB: "Dihabisin, malah nambah sambal",
      SS: "Nyerah, tukeran sama teman",
    },
  },
  {
    id: "mk03",
    situasi: "Ada jajanan baru yang lagi ramai dibahas. Kamu...",
    pilihan: {
      PP: "Nunggu antreannya sepi dulu",
      PC: "Kalau kebetulan lewat, ya beli",
      RB: "Ikut antre di hari pertama",
      SS: "Beli dua, satunya buat teman",
    },
  },
  {
    id: "mk04",
    situasi: "Tengah malam lapar, akhirnya masak mi. Kamu...",
    pilihan: {
      PP: "Masaknya sesuai petunjuk di bungkus",
      PC: "Mi kuah hangat, dimakan pelan-pelan",
      RB: "Dicampur semua yang ada di kulkas",
      SS: "Bikin dua, bangunin orang rumah",
    },
  },
  {
    id: "mk05",
    situasi: "Habis makan bareng, tagihannya datang. Kamu...",
    pilihan: {
      PP: "Dihitung pas, dibagi rata",
      PC: "Bayar bagian sendiri, dilebihin dikit",
      RB: '"Aku yang bayar, lain kali kamu"',
      SS: "Diam-diam udah bayarin duluan",
    },
  },
  {
    id: "mk06",
    situasi: "Pesananmu lama banget nggak datang-datang. Kamu...",
    pilihan: {
      PP: "Nanya ke pelayan, kira-kira berapa lama lagi",
      PC: "Ngobrol aja dulu, nanti juga datang",
      RB: "Nyamperin kasirnya langsung",
      SS: "Nunggu aja, nggak enak mau nanya",
    },
  },
  {
    id: "mk07",
    situasi: "Teman minta nyicip makananmu. Kamu...",
    pilihan: {
      PP: "Potongin bagian yang masih rapi",
      PC: "Langsung sodorin piringnya",
      RB: '"Tukeran aja sekalian"',
      SS: "Kasih suapan yang paling enak",
    },
  },
  {
    id: "mk08",
    situasi: "Lagi jaga makan, eh ada kue enak di meja. Kamu...",
    pilihan: {
      PP: "Ambil sepotong aja, sesuai jatah",
      PC: "Makan dikit nggak apa-apa lah",
      RB: "Jaga makannya lanjut besok aja",
      SS: "Bilang nggak, tapi dilirik terus",
    },
  },
  {
    id: "mk09",
    situasi: "Warung langgananmu ternyata tutup. Kamu...",
    pilihan: {
      PP: "Tenang, udah punya warung cadangan",
      PC: "Makan apa aja yang ada",
      RB: "Nyobain tempat yang belum pernah",
      SS: "Sedih, langsung ngabarin teman",
    },
  },
  {
    id: "mk10",
    situasi: "Sarapan di hari libur, biasanya kamu...",
    pilihan: {
      PP: "Sarapan lengkap di jam yang sama kayak biasa",
      PC: "Bangun siang, sarapannya jadi makan siang",
      RB: "Keluar nyari bubur atau nasi uduk",
      SS: "Bikin roti yang cantik, difoto dulu",
    },
  },
  {
    id: "mk11",
    situasi: "Diajak makan sesuatu yang belum pernah kamu coba. Kamu...",
    pilihan: {
      PP: "Nanya dulu isinya apa",
      PC: "Nyicip dikit dulu",
      RB: "Langsung suap besar",
      SS: "Belum berani, lihat yang lain dulu",
    },
  },
  {
    id: "mk12",
    situasi: "Habis acara, makanannya masih sisa banyak. Kamu...",
    pilihan: {
      PP: "Dibungkus rapi, dibagi-bagi",
      PC: "Disimpan buat besok",
      RB: "Ngajak tetangga buat ngabisin",
      SS: "Nganterin ke yang belum kebagian",
    },
  },
  {
    id: "mk13",
    situasi: "Es krim kesukaanmu ngeluarin rasa baru. Kamu...",
    pilihan: {
      PP: "Baca dulu rasanya apa",
      PC: "Tetap pilih rasa yang lama",
      RB: "Nyobain semua rasa barunya",
      SS: "Beli satu, dimakan berdua",
    },
  },
  {
    id: "mk14",
    situasi: "Hari ini giliran kamu yang traktir teman-teman. Kamu...",
    pilihan: {
      PP: "Tentuin tempat sama anggarannya dulu",
      PC: "Makan sederhana aja, ngobrolnya yang lama",
      RB: '"Pesan apa aja, bebas"',
      SS: "Pesenin kesukaan tiap orang",
    },
  },
  {
    id: "mk15",
    situasi: "Soal kopi atau teh di pagi hari, kamu...",
    pilihan: {
      PP: "Takarannya sama persis tiap hari",
      PC: "Diminum pelan-pelan sambil diam",
      RB: "Nyobain racikan baru terus",
      SS: "Harus pakai gelas kesayangan",
    },
  },
  {
    id: "mk16",
    situasi: "Lapar, tapi di rumah nggak ada makanan. Kamu...",
    pilihan: {
      PP: "Pesan antar, sekalian buat stok",
      PC: "Minum dulu, makannya nanti aja",
      RB: "Keluar nyari yang masih buka",
      SS: 'Chat teman, "temenin makan yuk"',
    },
  },
  {
    id: "mk17",
    situasi: "Ada lomba makan pedas. Kamu...",
    pilihan: {
      PP: "Lihat dulu aturannya gimana",
      PC: "Nonton aja sambil minum es",
      RB: "Daftar, nggak pakai mikir",
      SS: "Jadi yang megangin minum buat teman",
    },
  },
  {
    id: "mk18",
    situasi: "Bekal yang kamu bawa jatuh ke lantai. Kamu...",
    pilihan: {
      PP: "Bersihin dulu, terus beli gantinya",
      PC: "Ya udah, beli yang lain aja",
      RB: "Ketawa, lumayan jadi bahan cerita",
      SS: "Sedih, itu kan buatan orang rumah",
    },
  },
  {
    id: "mk19",
    situasi: "Teman masakin kamu, tapi rasanya kurang pas. Kamu...",
    pilihan: {
      PP: "Kasih saran kecil biar besok lebih enak",
      PC: "Dimakan aja sampai habis",
      RB: "Bilang jujur, kurang garam",
      SS: "Bilang enak, malah minta nambah",
    },
  },
  {
    id: "mk20",
    situasi: "Lagi di pasar malam, uangnya pas-pasan. Kamu...",
    pilihan: {
      PP: "Tentuin dulu mau beli apa aja",
      PC: "Jalan-jalan doang juga udah senang",
      RB: "Dihabisin buat jajanan yang paling unik",
      SS: "Beli satu, dibagi sama teman",
    },
  },
  {
    id: "mk21",
    situasi: "Nemu resep yang kelihatannya susah. Kamu...",
    pilihan: {
      PP: "Siapin semua bahan dulu, ikutin urutannya",
      PC: "Coba santai aja, gagal juga nggak apa-apa",
      RB: "Coba, bahannya diganti sesuka hati",
      SS: "Ngajak teman masak bareng",
    },
  },
  {
    id: "mk22",
    situasi: "Kue ulang tahun mulai dipotong. Kamu...",
    pilihan: {
      PP: "Bantu bagiin biar semua kebagian",
      PC: "Nunggu giliran aja",
      RB: "Nyolekin krim ke yang ulang tahun",
      SS: "Ambil paling akhir, biar yang lain dulu",
    },
  },
  {
    id: "mk23",
    situasi: "Makan sendirian di tempat yang ramai. Kamu...",
    pilihan: {
      PP: "Makan sambil baca atau kerja",
      PC: "Nikmatin aja, nggak masalah",
      RB: "Ngajak ngobrol orang di meja sebelah",
      SS: "Agak canggung, jadinya main HP",
    },
  },
];
