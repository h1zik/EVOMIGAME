import type { KartuSituasi } from "../kartu";

/** Tema: perjalanan sehari-hari dan kendaraan. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_DI_JALAN: KartuSituasi[] = [
  {
    id: "tr01",
    situasi: "Bus yang kamu tunggu datang, tapi penuh banget. Kamu...",
    pilihan: {
      PP: "Nunggu yang berikutnya, kan berangkatnya awal",
      PC: "Naik aja, berdiri juga nggak apa-apa",
      RB: "Masuk, nyelip cari celah",
      SS: "Ngalah, kasih tempat buat yang lebih butuh",
    },
  },
  {
    id: "tr02",
    situasi: "Ada orang tua berdiri di dekat kursimu. Kamu...",
    pilihan: {
      PP: "Langsung berdiri, kursinya dikasih",
      PC: "Nawarin kursi sambil senyum",
      RB: 'Manggil, "silakan duduk di sini aja"',
      SS: "Berdiri pelan-pelan, malu mau ngomong",
    },
  },
  {
    id: "tr03",
    situasi: "Ojek yang kamu naikin salah ambil jalan. Kamu...",
    pilihan: {
      PP: "Nunjukin jalurnya di peta",
      PC: "Biarin, toh nanti sampai juga",
      RB: '"Maaf, harusnya bukan lewat sini"',
      SS: "Nggak enak mau bilang, diam aja",
    },
  },
  {
    id: "tr04",
    situasi: "Ban bocor di tengah jalan. Kamu...",
    pilihan: {
      PP: "Cari bengkel terdekat di peta",
      PC: "Dituntun pelan-pelan sambil nyari tambal ban",
      RB: "Nyoba nambal sendiri",
      SS: "Telepon orang rumah, minta dijemput",
    },
  },
  {
    id: "tr05",
    situasi: "Lampu merahnya lama banget. Kamu...",
    pilihan: {
      PP: "Ngitung mundur detiknya",
      PC: "Lihat-lihat sekitar, santai",
      RB: "Gelisah, pengin cepat-cepat jalan",
      SS: "Senyum ke anak kecil di sebelah",
    },
  },
  {
    id: "tr06",
    situasi: "Ketiduran di bus, haltenya kelewatan. Kamu...",
    pilihan: {
      PP: "Turun, langsung cari jalur balik",
      PC: "Ya udah, turun di halte berikutnya",
      RB: "Turun di situ, lanjut jalan kaki",
      SS: "Malu, pura-pura memang mau turun di situ",
    },
  },
  {
    id: "tr07",
    situasi: "Ada pengamen naik ke bus yang kamu tumpangi. Kamu...",
    pilihan: {
      PP: "Udah nyiapin uang kecil",
      PC: "Dengerin lagunya sampai habis",
      RB: "Ikut nyanyi",
      SS: "Ngasih sambil senyum",
    },
  },
  {
    id: "tr08",
    situasi: "Temanmu nebeng tiap hari. Kamu...",
    pilihan: {
      PP: "Sepakatin jam berangkatnya biar nggak telat",
      PC: "Nggak apa-apa, toh searah",
      RB: "Minta gantian sesekali",
      SS: "Malah senang, ada teman ngobrol di jalan",
    },
  },
  {
    id: "tr09",
    situasi: "Ada mobil mogok di jalan, butuh didorong. Kamu...",
    pilihan: {
      PP: "Ikut bantu, sekalian kasih aba-aba",
      PC: "Lihat dulu, bantu kalau masih kurang orang",
      RB: "Turun paling duluan",
      SS: "Nggak kuat dorong, beliin mereka minum",
    },
  },
  {
    id: "tr10",
    situasi: "Pertama kali belajar nyetir. Kamu...",
    pilihan: {
      PP: "Hafalin dulu urutannya sebelum jalan",
      PC: "Pelan-pelan aja, nggak usah buru-buru",
      RB: "Pengin langsung nyoba ke jalan raya",
      SS: "Tegang, megang setirnya erat banget",
    },
  },
  {
    id: "tr11",
    situasi: "Sampai tujuan, parkirannya penuh. Kamu...",
    pilihan: {
      PP: "Udah tahu tempat parkir cadangan",
      PC: "Muter santai sampai dapat",
      RB: "Parkir agak jauh, lanjut jalan kaki",
      SS: "Minta teman turun duluan nyariin tempat",
    },
  },
  {
    id: "tr12",
    situasi: "Sopir taksi online-nya ngajak ngobrol. Kamu...",
    pilihan: {
      PP: "Jawab sopan, seperlunya aja",
      PC: "Dengerin ceritanya sambil ngangguk",
      RB: "Ngobrol seru sampai tujuan",
      SS: "Jawab pendek-pendek sambil senyum",
    },
  },
  {
    id: "tr13",
    situasi: "Pertama kali naik pesawat. Kamu...",
    pilihan: {
      PP: "Datang awal, ngecek semua dokumen",
      PC: "Duduk tenang, lihatin awan",
      RB: "Minta kursi dekat jendela",
      SS: "Megang tangan teman pas lepas landas",
    },
  },
  {
    id: "tr14",
    situasi: "Pulang malam: ada jalan pintas gelap, ada jalan ramai tapi jauh. Kamu...",
    pilihan: {
      PP: "Pilih jalan ramai, lebih aman",
      PC: "Nunggu ada teman buat jalan bareng",
      RB: "Lewat jalan pintas, biar cepat",
      SS: "Minta dijemput aja",
    },
  },
  {
    id: "tr15",
    situasi: "Ada kucing duduk santai di tengah jalan. Kamu...",
    pilihan: {
      PP: "Berhenti, pindahin dia ke pinggir",
      PC: "Tungguin sampai dia minggir sendiri",
      RB: "Turun, langsung digendong",
      SS: "Dielus dulu, sekalian dikasih nama",
    },
  },
  {
    id: "tr16",
    situasi: "Motor atau mobilmu udah kotor banget. Kamu...",
    pilihan: {
      PP: "Dicuci tiap minggu, udah ada jadwalnya",
      PC: "Nanti aja kalau sempat",
      RB: "Sekarang juga, dicuci sendiri",
      SS: "Nyucinya sambil nyanyi-nyanyi",
    },
  },
  {
    id: "tr17",
    situasi: "Ada orang nggak dikenal nanya arah ke kamu. Kamu...",
    pilihan: {
      PP: "Jelasin urut, sebutin patokannya",
      PC: "Bukain peta di HP, tunjukin jalannya",
      RB: "Sekalian dianterin sampai dekat",
      SS: "Kalau nggak tahu, bantu nanya ke orang lain",
    },
  },
  {
    id: "tr18",
    situasi: "Pulang hari ini bebas mau lewat mana. Kamu...",
    pilihan: {
      PP: "Pilih rute yang paling cepat",
      PC: "Lewat jalan yang teduh",
      RB: "Nyoba rute yang belum pernah dilewatin",
      SS: "Sengaja lewat depan rumah teman",
    },
  },
  {
    id: "tr19",
    situasi: "Pas mau naik, tiketmu nggak ketemu. Kamu...",
    pilihan: {
      PP: "Tunjukin bukti pesanan di HP",
      PC: "Cari pelan-pelan, pasti ada",
      RB: "Langsung ngomong ke petugasnya",
      SS: "Panik, isi tas dibongkar semua",
    },
  },
  {
    id: "tr20",
    situasi: "Perjalanan jauh, kursi sebelahmu kosong. Kamu...",
    pilihan: {
      PP: "Naruh tas di situ, barang jadi rapi",
      PC: "Selonjoran, lumayan lega",
      RB: "Berharap ada yang duduk biar bisa ngobrol",
      SS: "Berharap tetap kosong sampai tujuan",
    },
  },
  {
    id: "tr21",
    situasi: "Ada kendaraan nyalip sembarangan di depanmu. Kamu...",
    pilihan: {
      PP: "Jaga jarak, tetap fokus",
      PC: "Biarin, yang penting selamat",
      RB: "Klakson panjang",
      SS: "Kaget, langsung pelan-pelan",
    },
  },
  {
    id: "tr22",
    situasi: "Mau ke tempat yang dekat dari rumah. Kamu...",
    pilihan: {
      PP: "Naik sepeda, lebih cepat sampai",
      PC: "Jalan kaki santai",
      RB: "Lari aja, sekalian olahraga",
      SS: "Jalan kaki, tapi ngajak teman",
    },
  },
  {
    id: "tr23",
    situasi: "Sampai di tempat janjian jauh sebelum waktunya. Kamu...",
    pilihan: {
      PP: "Memang selalu datang lebih awal",
      PC: "Duduk dulu, nikmatin suasananya",
      RB: "Keliling dulu lihat-lihat sekitar",
      SS: 'Ngabarin, "aku udah sampai, santai aja ya"',
    },
  },
];
