import type { KartuSituasi } from "../kartu";

/** Tema: perjalanan sehari-hari dan kendaraan. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_DI_JALAN: KartuSituasi[] = [
  {
    id: "tr01",
    situasi: "Kendaraan umum penuh banget. Kamu...",
    pilihan: {
      PP: "Tunggu berikutnya, kan berangkat awal",
      PC: "Berdiri, sabar",
      RB: "Masuk, cari celah",
      SS: "Kasih tempat buat yang lebih butuh",
    },
  },
  {
    id: "tr02",
    situasi: "Ada orang tua berdiri di dekat kursimu. Kamu...",
    pilihan: {
      PP: "Berdiri, persilakan duduk",
      PC: "Tawarin sambil senyum",
      RB: "Panggil, tawarin kursimu",
      SS: "Berdiri pelan, malu ngomong",
    },
  },
  {
    id: "tr03",
    situasi: "Pengemudi ojek salah ambil jalan. Kamu...",
    pilihan: {
      PP: "Tunjukin jalurnya di peta",
      PC: "Biarin, sampai juga",
      RB: '"Maaf, bukan lewat sini"',
      SS: "Nggak enak bilang",
    },
  },
  {
    id: "tr04",
    situasi: "Ban bocor di tengah jalan. Kamu...",
    pilihan: {
      PP: "Cari bengkel terdekat di peta",
      PC: "Tuntun pelan sambil cari",
      RB: "Coba tambal sendiri",
      SS: "Telepon minta dijemput",
    },
  },
  {
    id: "tr05",
    situasi: "Lampu merahnya lama banget. Kamu...",
    pilihan: {
      PP: "Hitung mundur",
      PC: "Lihat-lihat sekitar",
      RB: "Gelisah, pengin cepat jalan",
      SS: "Senyum ke anak kecil di sebelah",
    },
  },
  {
    id: "tr06",
    situasi: "Kamu ketiduran dan kelewatan halte. Kamu...",
    pilihan: {
      PP: "Turun, cari jalur balik",
      PC: "Ya sudah, turun di halte berikutnya",
      RB: "Jalan kaki dari situ",
      SS: "Malu, pura-pura memang mau turun situ",
    },
  },
  {
    id: "tr07",
    situasi: "Ada pengamen naik ke kendaraan. Kamu...",
    pilihan: {
      PP: "Siapin uang kecil",
      PC: "Dengerin lagunya",
      RB: "Ikut nyanyi",
      SS: "Kasih sambil senyum",
    },
  },
  {
    id: "tr08",
    situasi: "Temanmu nebeng tiap hari. Kamu...",
    pilihan: {
      PP: "Sepakati jam berangkat bareng",
      PC: "Nggak apa-apa, searah",
      RB: "Minta gantian sesekali",
      SS: "Senang ada teman ngobrol",
    },
  },
  {
    id: "tr09",
    situasi: "Ada kendaraan mogok yang butuh didorong. Kamu...",
    pilihan: {
      PP: "Bantu, kasih aba-aba",
      PC: "Bantu dorong pelan",
      RB: "Turun paling dulu",
      SS: "Bantu, lalu tawarin minum",
    },
  },
  {
    id: "tr10",
    situasi: "Belajar nyetir untuk pertama kali. Kamu...",
    pilihan: {
      PP: "Hafalin urutannya sebelum jalan",
      PC: "Pelan, nggak buru-buru",
      RB: "Pengin langsung ke jalan raya",
      SS: "Tegang, pegang setir erat-erat",
    },
  },
  {
    id: "tr11",
    situasi: "Parkirannya penuh. Kamu...",
    pilihan: {
      PP: "Udah tahu tempat cadangan",
      PC: "Muter santai sampai dapat",
      RB: "Parkir agak jauh, jalan kaki",
      SS: "Minta teman turun cari tempat",
    },
  },
  {
    id: "tr12",
    situasi: "Pengemudi kendaraanmu ngajak ngobrol. Kamu...",
    pilihan: {
      PP: "Jawab sopan, seperlunya",
      PC: "Dengerin ceritanya",
      RB: "Ngobrol seru sampai tujuan",
      SS: "Jawab pendek sambil senyum",
    },
  },
  {
    id: "tr13",
    situasi: "Naik pesawat untuk pertama kali. Kamu...",
    pilihan: {
      PP: "Datang awal, cek semua dokumen",
      PC: "Duduk tenang, lihat awan",
      RB: "Minta kursi dekat jendela",
      SS: "Pegang tangan teman waktu lepas landas",
    },
  },
  {
    id: "tr14",
    situasi: "Jalan pintas yang gelap atau jalan ramai yang jauh. Kamu...",
    pilihan: {
      PP: "Jalan ramai, lebih aman",
      PC: "Jalan ramai, santai aja",
      RB: "Jalan pintas",
      SS: "Jalan ramai, sambil teleponan",
    },
  },
  {
    id: "tr15",
    situasi: "Ada kucing duduk di tengah jalan. Kamu...",
    pilihan: {
      PP: "Berhenti, pindahin ke pinggir",
      PC: "Tunggu dia lewat",
      RB: "Turun, gendong",
      SS: "Elus dulu, kasih nama",
    },
  },
  {
    id: "tr16",
    situasi: "Kendaraanmu kotor banget. Kamu...",
    pilihan: {
      PP: "Cuci tiap minggu, udah terjadwal",
      PC: "Nanti aja kalau sempat",
      RB: "Cuci sendiri sekarang juga",
      SS: "Cuci sambil nyanyi",
    },
  },
  {
    id: "tr17",
    situasi: "Orang asing nanya arah ke kamu. Kamu...",
    pilihan: {
      PP: "Jelaskan urut, sebut patokannya",
      PC: "Jelaskan pelan",
      RB: "Antar sampai dekat",
      SS: "Jelaskan, cek lagi dia udah paham",
    },
  },
  {
    id: "tr18",
    situasi: "Pilih rute pulang hari ini. Kamu...",
    pilihan: {
      PP: "Rute tercepat",
      PC: "Rute paling teduh",
      RB: "Rute yang belum pernah dilewati",
      SS: "Rute yang lewat rumah teman",
    },
  },
  {
    id: "tr19",
    situasi: "Tiketmu nggak ketemu pas mau naik. Kamu...",
    pilihan: {
      PP: "Tunjukkan bukti pesan di HP",
      PC: "Cari pelan-pelan",
      RB: "Ngomong ke petugas",
      SS: "Panik, bongkar isi tas",
    },
  },
  {
    id: "tr20",
    situasi: "Kursi sebelahmu kosong di perjalanan jauh. Kamu...",
    pilihan: {
      PP: "Taruh tas, atur barang",
      PC: "Selonjoran",
      RB: "Berharap ada teman ngobrol",
      SS: "Berharap tetap kosong",
    },
  },
  {
    id: "tr21",
    situasi: "Ada kendaraan menyalip sembarangan. Kamu...",
    pilihan: {
      PP: "Jaga jarak",
      PC: "Biarin, yang penting selamat",
      RB: "Bunyikan klakson",
      SS: "Kaget, pelankan laju",
    },
  },
  {
    id: "tr22",
    situasi: "Mau ke tempat yang dekat. Kamu...",
    pilihan: {
      PP: "Naik sepeda, lebih cepat",
      PC: "Jalan kaki, santai",
      RB: "Lari sekalian",
      SS: "Jalan kaki, ajak teman",
    },
  },
  {
    id: "tr23",
    situasi: "Kamu sampai terlalu cepat di tempat janjian. Kamu...",
    pilihan: {
      PP: "Memang selalu datang awal",
      PC: "Duduk, nikmatin suasana",
      RB: "Keliling dulu",
      SS: 'Kabarin, "aku udah sampai, santai aja"',
    },
  },
];
