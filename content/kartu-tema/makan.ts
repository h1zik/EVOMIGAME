import type { KartuSituasi } from "../kartu";

/** Tema: makan dan jajan. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_MAKAN: KartuSituasi[] = [
  {
    id: "K121",
    situasi: "Diajak makan di tempat baru, menunya asing semua. Kamu...",
    pilihan: {
      PP: "Nanya ke pelayan, menu andalannya apa",
      PC: "Pilih yang bahannya paling familiar",
      RB: "Pesan yang namanya paling aneh",
      SS: "Samain aja kayak pesanan teman",
    },
  },
  {
    id: "K122",
    situasi: "Jam makan siang, antrean tempat incaranmu panjang banget. Kamu...",
    pilihan: {
      PP: "Nyari tempat makan lain yang lebih sepi",
      PC: "Ikut antre santai sambil main HP",
      RB: "Dibungkus aja, makannya di tempat lain",
      SS: "Nanya teman dulu, mau lanjut antre atau pindah",
    },
  },
  {
    id: "K123",
    situasi: "Lagi masak di rumah, ternyata garamnya habis. Kamu...",
    pilihan: {
      PP: "Pakai bumbu lain yang ada di dapur",
      PC: "Lanjut tanpa garam, tetap enak kok",
      RB: "Lari ke warung sebelah beli garam",
      SS: "Minta tolong orang rumah beliin sebentar",
    },
  },
  {
    id: "K124",
    situasi: "Makanan pesananmu ternyata pedasnya kelewatan. Kamu...",
    pilihan: {
      PP: "Pesan tambahan nasi dan minuman dingin",
      PC: "Makan pelan-pelan sambil kipas-kipas",
      RB: "Dihabisin sampai suapan terakhir, pantang kalah",
      SS: "Dibagi ke teman yang lebih kuat pedas",
    },
  },
  {
    id: "K125",
    situasi: "Lagi nraktir teman, ternyata totalnya lumayan besar. Kamu...",
    pilihan: {
      PP: "Bayar sesuai rencana, nanti atur ulang anggaran",
      PC: "Santai, anggap aja bagi-bagi rezeki",
      RB: "Bayar tanpa lihat struk biar nggak kaget",
      SS: "Tetap senyum, yang penting teman-teman senang",
    },
  },
  {
    id: "K126",
    situasi: "Porsi makanan yang datang jauh lebih besar dari bayangan. Kamu...",
    pilihan: {
      PP: "Makan secukupnya, sisanya minta dibungkus",
      PC: "Makan pelan-pelan aja sampai kenyang",
      RB: "Nantang diri sendiri habisin semuanya",
      SS: "Nawarin ke teman-teman dulu sebelum mulai",
    },
  },
  {
    id: "K127",
    situasi: "Malam-malam pengin ngemil, tapi malas keluar. Kamu...",
    pilihan: {
      PP: "Bikin camilan dari bahan yang ada di dapur",
      PC: "Minum air hangat aja, nanti juga lupa",
      RB: "Pesan makanan online, nggak pakai mikir",
      SS: "Bikin roti bakar, sekalian buat orang rumah",
    },
  },
  {
    id: "K128",
    situasi: "Teman nawarin makanan khas daerahnya yang belum pernah kamu coba. Kamu...",
    pilihan: {
      PP: "Nanya dulu bahan utamanya apa",
      PC: "Nyicip dikit buat ngehargain",
      RB: "Satu suap penuh, semangat",
      SS: "Bilang makasih, nyicipnya pelan-pelan",
    },
  },
  {
    id: "K129",
    situasi: "Makan bareng teman, tinggal satu potong terakhir. Kamu...",
    pilihan: {
      PP: "Potong kecil-kecil biar semua kebagian",
      PC: "Biarin aja, siapa pun yang mau ambil",
      RB: 'Ambil, "buat aku ya"',
      SS: "Nawarin ke yang lain dulu, siapa tahu ada yang mau",
    },
  },
  {
    id: "K130",
    situasi: "Minuman yang kamu beli ternyata hambar. Kamu...",
    pilihan: {
      PP: "Minta tambahan gula cair ke pelayannya",
      PC: "Diminum aja, lebih sehat juga",
      RB: "Minta dibikinin ulang ke kasirnya",
      SS: "Diminum pelan-pelan, nggak enak komplain",
    },
  },
  {
    id: "K131",
    situasi: "Perut udah keroncongan, tapi bingung mau makan apa. Kamu...",
    pilihan: {
      PP: "Pilih yang bergizi dan cepat jadinya",
      PC: "Apa aja yang paling dekat",
      RB: "Nyobain tempat makan yang baru buka",
      SS: "Nanya teman lagi pengin apa, biar bareng",
    },
  },
  {
    id: "K132",
    situasi: "Nyobain resep baru, hasilnya agak gosong. Kamu...",
    pilihan: {
      PP: "Bagian gosongnya dipisahin, sisanya dimakan",
      PC: "Ketawa aja, namanya juga baru belajar",
      RB: "Masak ulang sampai hasilnya benar",
      SS: "Difoto, dikirim ke teman sambil bercanda",
    },
  },
  {
    id: "K133",
    situasi: "Pelayan lupa nganterin salah satu pesanan minumanmu. Kamu...",
    pilihan: {
      PP: "Ngingetin baik-baik pas pelayannya lewat",
      PC: "Tungguin sebentar lagi, mungkin lagi dibuat",
      RB: "Samperin ke meja kasir buat nanya",
      SS: "Minta tolong teman yang manggil pelayannya",
    },
  },
  {
    id: "K134",
    situasi: "Diajak patungan beli jajanan ramai-ramai. Kamu...",
    pilihan: {
      PP: "Ngitung bagian tiap orang biar jelas",
      PC: "Ikut aja, berapa pun nominalnya",
      RB: "Bayarin dulu biar cepat dipesan",
      SS: "Nitip uang pas ke yang ngumpulin",
    },
  },
  {
    id: "K135",
    situasi: "Menu favoritmu di warung langganan ternyata habis. Kamu...",
    pilihan: {
      PP: "Pilih menu lain yang paling mirip",
      PC: "Nanya penjualnya, yang masih ada apa",
      RB: "Pindah ke warung sebelah",
      SS: "Pesan minum aja, nemenin teman makan",
    },
  },
  {
    id: "K136",
    situasi: "Lagi makan, sausnya netes ke baju putihmu. Kamu...",
    pilihan: {
      PP: "Ke wastafel, bersihin pakai air dan sabun",
      PC: "Lap pakai tisu basah, lanjut makan",
      RB: "Ngetawain diri sendiri, nodanya dipamerin",
      SS: "Ditutupin pakai jaket biar nggak kelihatan",
    },
  },
  {
    id: "K137",
    situasi: "Teman yang lagi diet ngajak nongkrong di tempat makan enak. Kamu...",
    pilihan: {
      PP: "Milihin tempat yang juga punya menu sehat",
      PC: "Ikut aja ke mana pun dia nyaman",
      RB: "Tetap pesan menu favoritmu di depan dia",
      SS: "Ikut pesan yang ringan biar dia nggak tergoda",
    },
  },
  {
    id: "K138",
    situasi: "Dapat kupon diskon makanan yang cuma berlaku hari ini. Kamu...",
    pilihan: {
      PP: "Baca syarat dan ketentuannya dulu",
      PC: "Dipakai buat makan siang hari ini aja",
      RB: "Ngajak teman, traktir pakai kupon itu",
      SS: "Kuponnya dikasih ke teman yang lebih butuh",
    },
  },
  {
    id: "K139",
    situasi: "Makan bareng keluarga besar, lauknya banyak banget. Kamu...",
    pilihan: {
      PP: "Ambil secukupnya biar nggak mubazir",
      PC: "Nyobain semua lauk, dikit-dikit",
      RB: "Lauk favorit diambil paling banyak",
      SS: "Ngambilin buat orang tua atau adik dulu",
    },
  },
  {
    id: "K140",
    situasi: "Sore-sore ada pedagang keliling lewat depan rumah. Kamu...",
    pilihan: {
      PP: "Beli secukupnya buat camilan sore",
      PC: "Manggil, beli sekalian ngobrol sebentar",
      RB: "Borong buat dibagi ke orang rumah",
      SS: "Beliin sekalian buat tetangga sebelah",
    },
  },
];
