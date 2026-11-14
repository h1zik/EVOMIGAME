import type { KartuSituasi } from "../kartu";

/** Tema: kos, rumah, dan tetangga. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_RUMAH: KartuSituasi[] = [
  {
    id: "ks01",
    situasi: "Tengah malam, tetangga berisik banget. Kamu...",
    pilihan: {
      PP: "Ketuk pintunya, minta dikecilin baik-baik",
      PC: "Pakai penutup telinga, lanjut tidur",
      RB: "Langsung negur saat itu juga",
      SS: "Ditahan aja, nggak enak mau negur",
    },
  },
  {
    id: "ks02",
    situasi: "Baru bangun, kasur masih berantakan. Kamu...",
    pilihan: {
      PP: "Langsung diberesin sebelum ngapa-ngapain",
      PC: "Nanti aja, pelan-pelan",
      RB: "Biarin, toh nanti malam dipakai lagi",
      SS: "Beresin, bantal sama boneka ditata rapi",
    },
  },
  {
    id: "ks03",
    situasi: "Cucian udah numpuk. Kamu...",
    pilihan: {
      PP: "Nyuci di hari yang udah dijadwalin",
      PC: "Besok aja, bajunya masih ada",
      RB: "Hajar semua sekaligus hari ini",
      SS: "Dititip ke laundry langganan aja",
    },
  },
  {
    id: "ks04",
    situasi: "Kebiasaan teman sekamarmu beda banget sama kamu. Kamu...",
    pilihan: {
      PP: "Ngajak bikin aturan bareng",
      PC: "Nyesuaiin aja, lama-lama juga biasa",
      RB: "Bilang terus terang apa yang ganggu",
      SS: "Ngalah, nggak enak mau protes",
    },
  },
  {
    id: "ks05",
    situasi: "Keran kamar mandi bocor. Kamu...",
    pilihan: {
      PP: "Lapor ke pemilik kos atau panggil tukang",
      PC: "Taruh ember dulu, urusan nanti",
      RB: "Coba benerin sendiri",
      SS: "Minta tolong tetangga",
    },
  },
  {
    id: "ks06",
    situasi: "Ada tetangga baru pindah ke sebelah. Kamu...",
    pilihan: {
      PP: "Kenalan, kasih tahu info penting di sekitar",
      PC: "Senyum kalau pas papasan",
      RB: "Ngetuk pintunya duluan",
      SS: "Bawain kue",
    },
  },
  {
    id: "ks07",
    situasi: "Ada serangga gede masuk kamar. Kamu...",
    pilihan: {
      PP: "Ambil sapu, giring keluar",
      PC: "Bukain jendela, tungguin dia keluar sendiri",
      RB: "Tangkap pakai tangan",
      SS: "Teriak, manggil siapa aja yang ada",
    },
  },
  {
    id: "ks08",
    situasi: "Barang lama udah numpuk di lemari. Kamu...",
    pilihan: {
      PP: "Dipilah: disimpan, dijual, dibuang",
      PC: "Biarin dulu, belum ganggu",
      RB: "Keluarin semua, beresin sekali jalan",
      SS: "Susah ngelepas, semua ada kenangannya",
    },
  },
  {
    id: "ks09",
    situasi: "Makananmu di kulkas bersama tiba-tiba hilang. Kamu...",
    pilihan: {
      PP: "Mulai sekarang semua dikasih nama",
      PC: "Ikhlasin aja, mungkin dia lapar",
      RB: 'Nanya di grup, "siapa yang makan?"',
      SS: "Sedih, tapi nggak bilang siapa-siapa",
    },
  },
  {
    id: "ks10",
    situasi: "Pagi-pagi kamar mandi antre. Kamu...",
    pilihan: {
      PP: "Udah mandi dari tadi, sebelum ramai",
      PC: "Nunggu aja sambil main HP",
      RB: 'Ketuk pintunya, "masih lama?"',
      SS: "Ngasih duluan ke yang lagi buru-buru",
    },
  },
  {
    id: "ks11",
    situasi: "Wifi mati pas lagi butuh-butuhnya. Kamu...",
    pilihan: {
      PP: "Pindah ke paket data cadangan",
      PC: "Ya udah, istirahat dulu",
      RB: "Langsung telepon layanan pelanggannya",
      SS: "Numpang ke kamar teman",
    },
  },
  {
    id: "ks12",
    situasi: "Paket punya tetangga dititipin ke kamu. Kamu...",
    pilihan: {
      PP: "Simpan dulu, kabarin orangnya",
      PC: "Taruh di depan pintunya",
      RB: "Langsung dianterin ke orangnya",
      SS: "Anterin, sekalian selipin catatan kecil",
    },
  },
  {
    id: "ks13",
    situasi: "Pagi-pagi air mati. Kamu...",
    pilihan: {
      PP: "Aman, udah nyimpan air cadangan",
      PC: "Nunggu nyala aja",
      RB: "Mandi di tempat teman",
      SS: "Bagi air yang ada ke tetangga",
    },
  },
  {
    id: "ks14",
    situasi: "Lagi masak, baunya ke mana-mana. Kamu...",
    pilihan: {
      PP: "Buka jendela biar nggak ganggu",
      PC: "Santai, namanya juga masak",
      RB: "Sekalian masak yang banyak",
      SS: "Dibagi ke tetangga",
    },
  },
  {
    id: "ks15",
    situasi: "Udah tanggalnya bayar sewa. Kamu...",
    pilihan: {
      PP: "Udah bayar dari sebelum jatuh tempo",
      PC: "Bayar pas harinya, santai",
      RB: "Bayar, sekalian minta kamar dibenerin",
      SS: "Hampir lupa, untung diingetin teman",
    },
  },
  {
    id: "ks16",
    situasi: "Ada rapat penghuni kos atau warga. Kamu...",
    pilihan: {
      PP: "Datang bawa catatan",
      PC: "Nggak datang, baca hasilnya di grup aja",
      RB: "Usul perubahan di depan semua orang",
      SS: "Datang bawa camilan",
    },
  },
  {
    id: "ks17",
    situasi: "Mau beli perabot baru buat kamar. Kamu...",
    pilihan: {
      PP: "Ngukur ruangannya dulu",
      PC: "Cari yang empuk, enak buat rebahan",
      RB: "Pilih yang warnanya paling mencolok",
      SS: "Ambil yang bentuknya lucu",
    },
  },
  {
    id: "ks18",
    situasi: "Kunci kamarmu hilang. Kamu...",
    pilihan: {
      PP: "Pakai kunci cadangan yang udah disiapin",
      PC: "Cari pelan-pelan, pasti ada",
      RB: "Langsung manggil tukang kunci",
      SS: "Panik, telepon teman",
    },
  },
  {
    id: "ks19",
    situasi: "Tetangga minta tolong jagain hewan peliharaannya. Kamu...",
    pilihan: {
      PP: "Nolak kalau lagi padat, daripada nggak keurus",
      PC: "Mau, nemenin dia seharian di rumah",
      RB: "Mau, diajak main terus sampai capek",
      SS: "Disayang-sayang sampai nggak mau balikin",
    },
  },
  {
    id: "ks20",
    situasi: "Hari pindahan tiba. Kamu...",
    pilihan: {
      PP: "Semua kardus udah dikasih label",
      PC: "Pelan-pelan aja, nggak dikejar siapa-siapa",
      RB: "Pokoknya harus beres dalam sehari",
      SS: "Lama, keasyikan baca surat-surat lama",
    },
  },
  {
    id: "ks21",
    situasi: "Tengah malam kedengaran suara aneh. Kamu...",
    pilihan: {
      PP: "Ngecek suaranya dari mana",
      PC: '"Paling cuma kucing," lanjut tidur',
      RB: "Keluar bawa senter",
      SS: "Nutup kepala pakai selimut",
    },
  },
  {
    id: "ks22",
    situasi: "Sejam lagi ada tamu mau datang. Kamu...",
    pilihan: {
      PP: "Udah beres dari tadi, tinggal nunggu",
      PC: "Beresin seperlunya aja",
      RB: "Masukin semua barang ke lemari, beres",
      SS: "Sibuk nyiapin camilan",
    },
  },
  {
    id: "ks23",
    situasi: "Lagi nata meja belajar atau meja kerja. Kamu...",
    pilihan: {
      PP: "Tiap barang ada tempatnya sendiri",
      PC: "Dikosongin, biar lega",
      RB: "Penuh tempelan macam-macam",
      SS: "Pajang foto sama tanaman kecil",
    },
  },
];
