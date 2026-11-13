import type { KartuSituasi } from "../kartu";

/** Tema: keluarga dan orang rumah. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_KELUARGA: KartuSituasi[] = [
  {
    id: "kl01",
    situasi: "Orang rumah minta tolong pas kamu lagi sibuk. Kamu...",
    pilihan: {
      PP: "Bilang selesai jam berapa, lalu bantu",
      PC: "Tinggalin sebentar, bantu dulu",
      RB: "Bilang lagi nggak bisa, nanti aja",
      SS: "Bantu sekarang, nggak tega",
    },
  },
  {
    id: "kl02",
    situasi: "Adik atau sepupu kecil minta ditemani main. Kamu...",
    pilihan: {
      PP: "Main setengah jam, lalu lanjut urusanmu",
      PC: "Temenin sampai dia capek",
      RB: "Ajarin permainan baru yang seru",
      SS: "Ikut main boneka dengan serius",
    },
  },
  {
    id: "kl03",
    situasi: "Keluarga besar kumpul dan mulai nanya macam-macam. Kamu...",
    pilihan: {
      PP: "Jawab singkat dan jelas",
      PC: "Senyum, jawab seperlunya",
      RB: "Balik nanya biar seimbang",
      SS: "Kabur ke dapur, bantu siapin makanan",
    },
  },
  {
    id: "kl04",
    situasi: "Orang tua beda pendapat sama pilihanmu. Kamu...",
    pilihan: {
      PP: "Jelaskan rencanamu dengan runtut",
      PC: "Dengerin dulu, cari waktu yang pas",
      RB: "Tetap pada pilihanmu, terus terang",
      SS: "Sedih, takut bikin mereka kecewa",
    },
  },
  {
    id: "kl05",
    situasi: "Giliranmu masak buat orang rumah. Kamu...",
    pilihan: {
      PP: "Ikuti resep, takarannya pas",
      PC: "Masak yang biasa, yang penting hangat",
      RB: "Coba resep aneh dari internet",
      SS: "Masak kesukaan tiap orang",
    },
  },
  {
    id: "kl06",
    situasi: "Ada kerabat datang mendadak. Kamu...",
    pilihan: {
      PP: "Rapikan ruang tamu, siapin minum",
      PC: "Sambut hangat, ngobrol santai",
      RB: "Yang paling ramai ngajak ngobrol",
      SS: "Senyum malu-malu, bantu bawa minuman",
    },
  },
  {
    id: "kl07",
    situasi: "Kakak atau adik pakai barangmu tanpa izin. Kamu...",
    pilihan: {
      PP: "Bikin aturan pinjam yang jelas",
      PC: "Ya sudah, asal dibalikin",
      RB: "Tegur saat itu juga",
      SS: "Kesal, tapi diam aja",
    },
  },
  {
    id: "kl08",
    situasi: "Hari ibu atau hari ayah. Kamu...",
    pilihan: {
      PP: "Udah siapin hadiah yang berguna",
      PC: "Temenin seharian",
      RB: "Ajak jalan ke tempat baru",
      SS: "Tulis surat panjang",
    },
  },
  {
    id: "kl09",
    situasi: "Rumah lagi berantakan banget. Kamu...",
    pilihan: {
      PP: "Mulai dari satu ruangan, beresin berurutan",
      PC: "Beres-beres sambil putar lagu",
      RB: "Sekalian rombak susunan perabot",
      SS: "Rapikan sambil nemu barang kenangan",
    },
  },
  {
    id: "kl10",
    situasi: "Orang tua minta diajarin pakai aplikasi. Kamu...",
    pilihan: {
      PP: "Ajarin langkah demi langkah, tulis catatannya",
      PC: "Sabar, ulang sampai bisa",
      RB: "Kerjain aja sekalian biar cepat",
      SS: "Ajarin sambil ketawa bareng",
    },
  },
  {
    id: "kl11",
    situasi: "Acara keluarga bentrok sama rencanamu. Kamu...",
    pilihan: {
      PP: "Atur ulang jadwal biar dua-duanya dapat",
      PC: "Ikut acara keluarga, rencana bisa lain kali",
      RB: "Bilang terus terang kamu ada rencana",
      SS: "Ikut keluarga, nggak enak nolak",
    },
  },
  {
    id: "kl12",
    situasi: "Kamu dapat kamar sendiri untuk pertama kalinya. Kamu...",
    pilihan: {
      PP: "Atur semuanya biar gampang dipakai",
      PC: "Bikin senyaman mungkin buat istirahat",
      RB: "Cat dinding dengan warna berani",
      SS: "Tempel foto dan lampu kecil",
    },
  },
  {
    id: "kl13",
    situasi: "Nenek atau kakek cerita hal yang sama lagi. Kamu...",
    pilihan: {
      PP: "Dengerin, sesekali tanya detailnya",
      PC: "Dengerin seperti baru pertama dengar",
      RB: "Minta cerita yang belum pernah diceritakan",
      SS: "Pegang tangannya sambil dengerin",
    },
  },
  {
    id: "kl14",
    situasi: "Keluarga mau foto bersama. Kamu...",
    pilihan: {
      PP: "Atur barisan biar semua kelihatan",
      PC: "Berdiri di mana aja",
      RB: "Usul gaya yang nggak biasa",
      SS: "Berdiri dekat orang yang paling disayang",
    },
  },
  {
    id: "kl15",
    situasi: "Kamu pulang telat dan belum kasih kabar. Kamu...",
    pilihan: {
      PP: "Telepon dulu, jelasin posisimu",
      PC: "Kirim pesan singkat, tenang",
      RB: "Pulang aja, jelasin di rumah",
      SS: "Merasa bersalah sepanjang jalan",
    },
  },
  {
    id: "kl16",
    situasi: "Orang rumah lagi sakit. Kamu...",
    pilihan: {
      PP: "Atur obat dan jadwal makannya",
      PC: "Temenin, bikin suasana tenang",
      RB: "Langsung antar periksa",
      SS: "Buatin bubur, tengok tiap jam",
    },
  },
  {
    id: "kl17",
    situasi: "Liburan keluarga, kamu yang pilih tujuannya. Kamu...",
    pilihan: {
      PP: "Pilih yang cocok buat semua umur",
      PC: "Tempat tenang, banyak tempat duduknya",
      RB: "Yang belum pernah didatangi siapa pun",
      SS: "Balik ke tempat yang banyak kenangannya",
    },
  },
  {
    id: "kl18",
    situasi: "Saudaramu terus dipuji keluarga. Kamu...",
    pilihan: {
      PP: "Fokus ke jalanmu sendiri",
      PC: "Ikut senang, tiap orang beda",
      RB: 'Bercanda, "aku juga hebat lho"',
      SS: "Agak iri, tapi tetap bangga",
    },
  },
  {
    id: "kl19",
    situasi: "Kamu harus jaga rumah sendirian semalam. Kamu...",
    pilihan: {
      PP: "Cek semua pintu, pasang alarm",
      PC: "Nikmatin sepinya",
      RB: "Undang teman buat nginep",
      SS: "Nyalain semua lampu, telepon teman",
    },
  },
  {
    id: "kl20",
    situasi: "Orang tua cerita masa muda mereka. Kamu...",
    pilihan: {
      PP: "Tanya gimana mereka ambil keputusan dulu",
      PC: "Dengerin sambil ngeteh",
      RB: "Tanya kenakalan mereka dulu",
      SS: "Minta lihat foto lamanya",
    },
  },
  {
    id: "kl21",
    situasi: "Ada kabar baik buat keluarga. Kamu...",
    pilihan: {
      PP: "Bantu urus yang perlu disiapkan",
      PC: "Bersyukur, peluk semua",
      RB: "Usul dirayakan besar-besaran",
      SS: "Nangis haru duluan",
    },
  },
  {
    id: "kl22",
    situasi: "Jatah beres-beres rumah dibagi. Kamu...",
    pilihan: {
      PP: "Ambil bagian yang paling butuh rapi",
      PC: "Terima yang tersisa",
      RB: "Tukar bagian biar nggak bosan",
      SS: "Pilih yang paling nggak disukai orang",
    },
  },
  {
    id: "kl23",
    situasi: "Kamu mau izin pergi jauh sama teman. Kamu...",
    pilihan: {
      PP: "Jelaskan rencana lengkap biar mereka tenang",
      PC: "Minta izin pelan-pelan, cari waktu yang pas",
      RB: "Bilang langsung, yakin diizinkan",
      SS: "Minta izin sambil janji sering kasih kabar",
    },
  },
];
