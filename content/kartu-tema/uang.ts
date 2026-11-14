import type { KartuSituasi } from "../kartu";

/** Tema: uang dan belanja. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_UANG: KartuSituasi[] = [
  {
    id: "K161",
    situasi: "Barang impianmu lagi diskon besar, tapi gajian masih lama. Kamu...",
    pilihan: {
      PP: "Ngecek anggaran bulan ini sebelum mutusin",
      PC: "Tahan dulu, kalau jodoh nanti diskon lagi",
      RB: "Checkout sekarang, mumpung lagi murah",
      SS: "Nanya teman, barangnya beneran bagus nggak",
    },
  },
  {
    id: "K162",
    situasi: "Nemu uang terselip di saku celana lama. Kamu...",
    pilihan: {
      PP: "Masukin ke dompet atau celengan",
      PC: "Rezeki nomplok, buat beli camilan",
      RB: "Ngajak teman jajan es kopi saat itu juga",
      SS: "Dibeliin sesuatu buat orang rumah",
    },
  },
  {
    id: "K163",
    situasi: "Teman pinjam uang, udah lewat dari janji bayarnya. Kamu...",
    pilihan: {
      PP: "Ngingetin baik-baik lewat chat",
      PC: "Biarin beberapa hari, siapa tahu dia lupa",
      RB: "Tagih terus terang, kamu juga lagi butuh",
      SS: "Nunggu waktu yang pas buat ngomong pelan-pelan",
    },
  },
  {
    id: "K164",
    situasi: "Diajak patungan kado ulang tahun teman, nominalnya lumayan. Kamu...",
    pilihan: {
      PP: "Minta rinciannya dulu, cocokin sama budget",
      PC: "Ikut aja biar urusannya lancar",
      RB: "Usul kado lain yang unik tapi terjangkau",
      SS: "Setuju, demi nyenengin yang ulang tahun",
    },
  },
  {
    id: "K165",
    situasi: "Pengeluaran bulan ini ternyata lebih besar dari rencana. Kamu...",
    pilihan: {
      PP: "Lihat pos mana yang bisa dikurangin",
      PC: "Santai, bulan depan tinggal lebih hemat",
      RB: "Nyari kerjaan sampingan buat nambah pemasukan",
      SS: "Ngurangin jajan, tapi kado buat orang tetap",
    },
  },
  {
    id: "K166",
    situasi: "Kasir ngasih uang kembalian kelebihan. Kamu...",
    pilihan: {
      PP: "Hitung ulang di depan kasir, balikin lebihnya",
      PC: "Balikin sambil senyum, santai aja",
      RB: '"Kak, kembaliannya kelebihan nih"',
      SS: "Balikin pelan-pelan biar kasirnya nggak malu",
    },
  },
  {
    id: "K167",
    situasi: "Niatnya nabung, tapi uangnya kepakai jajan terus. Kamu...",
    pilihan: {
      PP: "Bikin rekening terpisah khusus tabungan",
      PC: "Sisihin recehan tiap hari, pelan-pelan",
      RB: "Pasang target besar sekalian biar kepacu",
      SS: "Titip uangnya ke orang tua biar aman",
    },
  },
  {
    id: "K168",
    situasi: "Teman nawarin ikut bisnis yang belum jelas. Kamu...",
    pilihan: {
      PP: "Pelajarin dulu legalitas dan risikonya",
      PC: "Nolak halus, bilang lagi fokus hal lain",
      RB: "Nanya blak-blakan, cara kerjanya gimana",
      SS: "Minta waktu buat ngobrol sama keluarga dulu",
    },
  },
  {
    id: "K169",
    situasi: "Belanja bulanan, ada promo beli dua gratis satu. Kamu...",
    pilihan: {
      PP: "Ngitung dulu, butuh sebanyak itu atau nggak",
      PC: "Ambil aja, lumayan buat stok",
      RB: "Ngajak orang sebelah patungan ambil promonya",
      SS: "Ambil, yang gratis buat orang rumah",
    },
  },
  {
    id: "K170",
    situasi: "Saldo menipis, padahal gajian masih beberapa hari lagi. Kamu...",
    pilihan: {
      PP: "Bikin daftar menu hemat sampai gajian",
      PC: "Di rumah aja, cari kegiatan yang gratis",
      RB: "Jual barang preloved yang udah nggak kepakai",
      SS: "Bawa bekal dari rumah, nggak cerita ke siapa-siapa",
    },
  },
  {
    id: "K171",
    situasi: "Salah transfer ke rekening teman, nominalnya kelebihan. Kamu...",
    pilihan: {
      PP: "Kirim bukti transfer, minta dibalikin lebihnya",
      PC: 'Chat santai, "tadi kelebihan nolnya"',
      RB: "Telepon dia biar cepat ditransfer balik",
      SS: "Minta maaf dulu karena ceroboh, baru jelasin",
    },
  },
  {
    id: "K172",
    situasi: "Teman minta saran biar uang jajannya nggak boros. Kamu...",
    pilihan: {
      PP: "Bagiin cara ngatur pos pengeluaran yang kamu pakai",
      PC: "Nyaranin catat yang penting-penting aja",
      RB: "Nantang dia nggak jajan seminggu, bareng kamu",
      SS: "Dengerin ceritanya dulu, baru kasih tips",
    },
  },
  {
    id: "K173",
    situasi: "Belanja online, ongkirnya lebih mahal dari barangnya. Kamu...",
    pilihan: {
      PP: "Nyari toko lain yang satu kota biar hemat",
      PC: "Nunggu tanggal kembar aja biar gratis ongkir",
      RB: "Tetap beli, udah butuh banget",
      SS: "Ngajak teman nitip sekalian biar bagi ongkir",
    },
  },
  {
    id: "K174",
    situasi: "Dapat bonus atau hadiah lomba yang lumayan. Kamu...",
    pilihan: {
      PP: "Dibagi: tabungan, kebutuhan, dan hiburan",
      PC: "Disimpan dulu sampai tahu mau buat apa",
      RB: "Beli barang yang udah lama diincar",
      SS: "Beliin makanan enak buat orang rumah",
    },
  },
  {
    id: "K175",
    situasi: "Makan bareng teman, tagihannya jadi satu struk. Kamu...",
    pilihan: {
      PP: "Foto struknya, hitung bagian masing-masing",
      PC: "Bagi rata aja biar nggak ribet",
      RB: "Bayarin dulu semuanya, hitungnya belakangan",
      SS: "Bayar bagianmu, dilebihin dikit",
    },
  },
  {
    id: "K176",
    situasi: "Barang di rumah rusak, biaya servisnya hampir seharga baru. Kamu...",
    pilihan: {
      PP: "Bandingin dulu garansi dan spesifikasi yang baru",
      PC: "Coba benerin sendiri lewat tutorial",
      RB: "Beli baru sekalian, lebih awet",
      SS: "Nanya orang rumah, enaknya yang mana",
    },
  },
  {
    id: "K177",
    situasi: "Hampir tiap hari tergoda beli kopi kekinian. Kamu...",
    pilihan: {
      PP: "Batasin, maksimal dua kali seminggu",
      PC: "Ganti bikin kopi sendiri di rumah",
      RB: "Stop total sebulan penuh, sekalian",
      SS: "Belinya pas bareng teman aja, biar ada alasan",
    },
  },
  {
    id: "K178",
    situasi: "Mau beli tiket konser yang lumayan mahal. Kamu...",
    pilihan: {
      PP: "Nyisihin uang dari jauh hari khusus buat tiket",
      PC: "Beli kategori yang paling pas di kantong",
      RB: "Ikut war tiket begitu dibuka, tanpa ragu",
      SS: "Nabung bareng teman biar nontonnya juga bareng",
    },
  },
  {
    id: "K179",
    situasi: "Ada penggalangan dana lewat di beranda medsosmu. Kamu...",
    pilihan: {
      PP: "Ngecek dulu lembaganya bisa dipercaya atau nggak",
      PC: "Donasi semampunya, nggak usah diumumin",
      RB: "Donasi, terus ikut nyebarin infonya",
      SS: "Nyisihin sedikit sambil ikut doain",
    },
  },
  {
    id: "K180",
    situasi: "Tempat makannya cuma terima tunai, dompetmu kosong. Kamu...",
    pilihan: {
      PP: "Nanya ke penjualnya, ATM terdekat di mana",
      PC: "Ngecek tas, siapa tahu ada uang nyelip",
      RB: "Pinjam dulu ke teman sebelah",
      SS: "Minta izin ke penjualnya buat ambil uang dulu",
    },
  },
];
