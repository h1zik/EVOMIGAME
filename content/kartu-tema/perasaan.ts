import type { KartuSituasi } from "../kartu";

/** Tema: orang yang disuka dan pasangan. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_PERASAAN: KartuSituasi[] = [
  {
    id: "gb01",
    situasi: "Kamu mulai suka sama seseorang. Kamu...",
    pilihan: {
      PP: "Kenali dulu, baru putuskan",
      PC: "Nikmatin rasanya, nggak buru-buru",
      RB: "Bilang langsung",
      SS: "Simpan sendiri, senyum tiap ingat",
    },
  },
  {
    id: "gb02",
    situasi: "Orang yang kamu suka balas chat singkat banget. Kamu...",
    pilihan: {
      PP: "Lihat polanya dulu, jangan langsung simpulkan",
      PC: "Mungkin dia lagi sibuk",
      RB: 'Tanya langsung, "lagi sibuk ya?"',
      SS: "Baca ulang chatmu, cari yang salah",
    },
  },
  {
    id: "gb03",
    situasi: "Kencan pertama. Kamu...",
    pilihan: {
      PP: "Pilih tempat yang enak buat ngobrol",
      PC: "Jalan santai, lihat ke mana arahnya",
      RB: "Ajak ke tempat yang seru dan beda",
      SS: "Deg-degan milih baju dari pagi",
    },
  },
  {
    id: "gb04",
    situasi: "Orang yang kamu suka lagi sedih. Kamu...",
    pilihan: {
      PP: "Tanya apa yang bisa kamu bantu",
      PC: "Temenin tanpa banyak kata",
      RB: "Ajak keluar biar terhibur",
      SS: "Kirim pesan manis dan makanan",
    },
  },
  {
    id: "gb05",
    situasi: "Kamu dikasih bunga atau hadiah kecil. Kamu...",
    pilihan: {
      PP: "Simpan rapi, balas dengan yang berguna",
      PC: "Senang, bilang makasih dengan tulus",
      RB: "Pamerin ke teman-teman",
      SS: "Malu, tapi difoto dari semua sisi",
    },
  },
  {
    id: "gb06",
    situasi: "Ada yang bilang suka sama kamu. Kamu...",
    pilihan: {
      PP: "Minta waktu buat mikir",
      PC: "Hargai, jawab pelan-pelan",
      RB: "Jawab jujur saat itu juga",
      SS: "Salah tingkah, nggak bisa ngomong",
    },
  },
  {
    id: "gb07",
    situasi: "Rencana jalan berdua batal karena dia sibuk. Kamu...",
    pilihan: {
      PP: "Jadwal ulang, tentukan harinya",
      PC: "Nggak apa-apa, lain waktu",
      RB: "Bilang kalau kamu kecewa",
      SS: "Maklum, tapi nunggu dia ngajak lagi",
    },
  },
  {
    id: "gb08",
    situasi: "Hari jadi kalian sebentar lagi. Kamu...",
    pilihan: {
      PP: "Udah pesan tempat",
      PC: "Masak dan nonton di rumah",
      RB: "Bikin kejutan yang nggak disangka",
      SS: "Bikin album kenangan",
    },
  },
  {
    id: "gb09",
    situasi: "Kalian beda pendapat soal hal kecil. Kamu...",
    pilihan: {
      PP: "Bahas sampai jelas",
      PC: "Ngalah, bukan hal besar",
      RB: "Sampaikan pendapatmu apa adanya",
      SS: "Diam dulu, takut jadi panjang",
    },
  },
  {
    id: "gb10",
    situasi: "Dia cerita soal hobinya yang kamu nggak paham. Kamu...",
    pilihan: {
      PP: "Tanya hal-hal dasarnya",
      PC: "Dengerin, senang lihat dia semangat",
      RB: "Minta diajak nyoba langsung",
      SS: "Diam-diam cari tahu biar nyambung",
    },
  },
  {
    id: "gb11",
    situasi: "Kamu lihat dia ngobrol akrab sama orang lain. Kamu...",
    pilihan: {
      PP: "Nggak langsung berprasangka",
      PC: "Biasa aja, percaya",
      RB: "Tanya langsung nanti",
      SS: "Cemburu sedikit, dipendam",
    },
  },
  {
    id: "gb12",
    situasi: "Dia lupa hal yang penting buat kamu. Kamu...",
    pilihan: {
      PP: "Sampaikan dengan tenang",
      PC: "Maklum, semua bisa lupa",
      RB: "Bilang kalau kamu kesal",
      SS: "Diam, berharap dia sadar",
    },
  },
  {
    id: "gb13",
    situasi: "Kalian mau pilih film buat ditonton. Kamu...",
    pilihan: {
      PP: "Udah cek ulasan, ada dua pilihan",
      PC: "Ikut pilihan dia",
      RB: "Pilih yang paling nggak biasa",
      SS: "Pilih yang romantis",
    },
  },
  {
    id: "gb14",
    situasi: "Kamu mau kasih kado buat dia. Kamu...",
    pilihan: {
      PP: "Barang yang memang dia butuh",
      PC: "Sesuatu yang bikin dia nyaman",
      RB: "Kejutan yang nggak dia sangka",
      SS: "Buatan tangan sendiri",
    },
  },
  {
    id: "gb15",
    situasi: "Dia ngajak ketemu keluarganya. Kamu...",
    pilihan: {
      PP: "Siapin diri, tanya apa yang perlu dibawa",
      PC: "Datang apa adanya, sopan",
      RB: "Siap, sekalian kenalan",
      SS: "Minta waktu, belum siap",
    },
  },
  {
    id: "gb16",
    situasi: "Chat darinya masuk pas kamu lagi sibuk. Kamu...",
    pilihan: {
      PP: "Balas nanti di jam istirahat",
      PC: "Balas singkat, lanjut nanti",
      RB: "Telepon aja biar cepat",
      SS: "Langsung balas, senyum sendiri",
    },
  },
  {
    id: "gb17",
    situasi: "Kalian nyasar waktu jalan berdua. Kamu...",
    pilihan: {
      PP: "Buka peta, cari jalur",
      PC: "Nikmatin, sekalian lihat-lihat",
      RB: "Tanya orang sekitar",
      SS: "Pegangan, percaya sama dia",
    },
  },
  {
    id: "gb18",
    situasi: "Dia lagi butuh waktu sendiri. Kamu...",
    pilihan: {
      PP: "Sepakati kapan ngobrol lagi",
      PC: "Kasih ruang dengan tenang",
      RB: "Tanya dulu ada apa",
      SS: "Kasih ruang, tapi kangen",
    },
  },
  {
    id: "gb19",
    situasi: "Kamu mau ngungkapin perasaan. Kamu...",
    pilihan: {
      PP: "Cari waktu dan tempat yang pas",
      PC: "Bilang pelan, apa adanya",
      RB: "Bilang sekarang juga",
      SS: "Tulis surat",
    },
  },
  {
    id: "gb20",
    situasi: "Dia cerita tentang kamu ke teman-temannya. Kamu...",
    pilihan: {
      PP: "Senang, tanya dia cerita apa",
      PC: "Senang dalam hati",
      RB: "Ikut nimbrung, tambah ceritanya",
      SS: "Nunduk sambil senyum-senyum",
    },
  },
  {
    id: "gb21",
    situasi: "Kalian masak bareng dan gagal. Kamu...",
    pilihan: {
      PP: "Cari salahnya di langkah mana",
      PC: "Ketawa, pesan makanan aja",
      RB: "Coba lagi dengan cara sendiri",
      SS: "Tetap dimakan, kan buatan berdua",
    },
  },
  {
    id: "gb22",
    situasi: "Kalian harus berjauhan untuk sementara. Kamu...",
    pilihan: {
      PP: "Bikin jadwal telepon",
      PC: "Jalani, percaya aja",
      RB: "Rencanain kunjungan dadakan",
      SS: "Kirim pesan tiap pagi dan malam",
    },
  },
  {
    id: "gb23",
    situasi: "Mantan tiba-tiba nyapa. Kamu...",
    pilihan: {
      PP: "Balas sopan, seperlunya",
      PC: "Balas biasa, udah nggak ada apa-apa",
      RB: "Tanya langsung maunya apa",
      SS: "Kaget, cerita ke teman dulu",
    },
  },
];
