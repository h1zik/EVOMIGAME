import type { KartuSituasi } from "../kartu";

/** Tema: HP, laptop, dan teknologi. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_TEKNOLOGI: KartuSituasi[] = [
  {
    id: "tk01",
    situasi: "HP-mu mulai lemot. Kamu...",
    pilihan: {
      PP: "Hapusin yang udah nggak kepakai",
      PC: "Sabar aja, toh masih jalan",
      RB: "Sekalian reset ke setelan awal",
      SS: "Minta tolong teman yang lebih ngerti",
    },
  },
  {
    id: "tk02",
    situasi: "Laptop mati mendadak, kerjaan belum di-save. Kamu...",
    pilihan: {
      PP: "Tenang, kan ada simpan otomatis",
      PC: "Tarik napas, ulang pelan-pelan",
      RB: "Kerjain ulang, kali ini pasti lebih cepat",
      SS: "Hampir nangis di depan layar",
    },
  },
  {
    id: "tk03",
    situasi: "Lupa kata sandi akun sendiri. Kamu...",
    pilihan: {
      PP: "Buka catatan sandi yang disimpan rapi",
      PC: "Reset aja, gampang",
      RB: "Nyobain semua kemungkinan",
      SS: "Nanya orang rumah, siapa tahu ingat",
    },
  },
  {
    id: "tk04",
    situasi: "Baterai HP tinggal 5%. Kamu...",
    pilihan: {
      PP: "Ngeluarin charger dari tas",
      PC: "Biarin mati, nggak apa-apa",
      RB: "Dipakai terus sampai habis",
      SS: "Ngabarin orang terdekat dulu",
    },
  },
  {
    id: "tk05",
    situasi: "Ada update sistem besar di HP-mu. Kamu...",
    pilihan: {
      PP: "Baca dulu apa aja yang berubah",
      PC: "Nanti aja kalau udah sempat",
      RB: "Langsung install",
      SS: "Takut ada yang hilang, tunda dulu",
    },
  },
  {
    id: "tk06",
    situasi: "Foto penting nggak sengaja kehapus. Kamu...",
    pilihan: {
      PP: "Balikin dari backup",
      PC: "Ya udah, kenangannya kan masih ada",
      RB: "Cari cara balikin sampai ketemu",
      SS: "Sedih seharian",
    },
  },
  {
    id: "tk07",
    situasi: "Game yang kamu tunggu-tunggu akhirnya rilis. Kamu...",
    pilihan: {
      PP: "Nunggu ulasannya dulu",
      PC: "Main kalau lagi senggang aja",
      RB: "Malam ini juga, siap begadang",
      SS: "Ngajak teman main bareng",
    },
  },
  {
    id: "tk08",
    situasi: "Layar HP-mu retak. Kamu...",
    pilihan: {
      PP: "Minggu ini juga dibawa ke tempat servis",
      PC: "Masih bisa dipakai kok",
      RB: "Coba ganti sendiri",
      SS: "Ditutupin pakai stiker lucu",
    },
  },
  {
    id: "tk09",
    situasi: "Asisten suara di HP salah nangkep omonganmu. Kamu...",
    pilihan: {
      PP: "Ngulang lagi, kali ini lebih jelas",
      PC: "Ketawa aja, lucu juga",
      RB: "Ketik aja, lebih cepat",
      SS: "Malah minta maaf ke asistennya",
    },
  },
  {
    id: "tk10",
    situasi: "Lagi milih casing HP baru. Kamu...",
    pilihan: {
      PP: "Ambil yang polos tapi kuat",
      PC: "Yang bening aja",
      RB: "Pilih yang gambarnya paling ramai",
      SS: "Yang lucu, ada gantungannya",
    },
  },
  {
    id: "tk11",
    situasi: "Jam tanganmu ngingetin buat gerak. Kamu...",
    pilihan: {
      PP: "Berdiri, jalan sebentar",
      PC: "Peregangan di tempat aja",
      RB: "Sekalian lari di tempat",
      SS: '"Nanti ya," terus lanjut duduk',
    },
  },
  {
    id: "tk12",
    situasi: "Internet lemot pas lagi rapat online. Kamu...",
    pilihan: {
      PP: "Pindah ke jaringan lain",
      PC: "Matiin kamera, beres",
      RB: 'Bilang, "lanjut lewat telepon aja"',
      SS: "Minta maaf berkali-kali",
    },
  },
  {
    id: "tk13",
    situasi: "Mau belajar hal teknis yang baru. Kamu...",
    pilihan: {
      PP: "Ikut kursus yang materinya urut",
      PC: "Pelan-pelan, sedikit tiap hari",
      RB: "Langsung bikin proyek, belajar sambil jalan",
      SS: "Belajar bareng teman",
    },
  },
  {
    id: "tk14",
    situasi: "Ada link mencurigakan masuk ke HP-mu. Kamu...",
    pilihan: {
      PP: "Nggak dibuka, langsung dilaporin",
      PC: "Cuekin aja",
      RB: "Ngingetin semua kontak biar nggak kena",
      SS: "Nanya dulu ke yang lebih paham",
    },
  },
  {
    id: "tk15",
    situasi: "Memori HP penuh. Kamu...",
    pilihan: {
      PP: "Pindahin ke penyimpanan lain",
      PC: "Hapus dikit-dikit, secukupnya",
      RB: "Hapus banyak sekaligus, nggak pakai mikir",
      SS: "Sayang semua, bingung mulai dari mana",
    },
  },
  {
    id: "tk16",
    situasi: "Earphone-mu tinggal sebelah yang nyala. Kamu...",
    pilihan: {
      PP: "Beli gantinya",
      PC: "Satu juga cukup kok",
      RB: "Dibongkar, coba benerin sendiri",
      SS: "Dipakai berdua sama teman",
    },
  },
  {
    id: "tk17",
    situasi: "Dapat HP bekas dari kakak. Kamu...",
    pilihan: {
      PP: "Di-reset dulu, atur dari awal",
      PC: "Langsung pakai apa adanya",
      RB: "Utak-atik tampilannya sampai beda",
      SS: "Senang, masih ada foto-foto lamanya",
    },
  },
  {
    id: "tk18",
    situasi: "Orang di sebelahmu mau pinjam charger. Kamu...",
    pilihan: {
      PP: "Pinjamin, bilang butuh lagi jam berapa",
      PC: '"Pakai aja, santai"',
      RB: "Jujur aja, baterai sendiri juga tipis",
      SS: "Pinjamin walau baterai sendiri tipis",
    },
  },
  {
    id: "tk19",
    situasi: "Lagi pakai AI buat bantu ngerjain tugas. Kamu...",
    pilihan: {
      PP: "Pakai, terus hasilnya dicek lagi",
      PC: "Pakai seperlunya aja",
      RB: "Ngetes sampai mana batasnya",
      SS: "Bilang makasih ke AI-nya",
    },
  },
  {
    id: "tk20",
    situasi: "Lagi ngatur layar utama HP. Kamu...",
    pilihan: {
      PP: "Semua aplikasi masuk folder",
      PC: "Cukup satu halaman aja",
      RB: "Acak-acakan, yang penting hafal",
      SS: "Warnanya senada, pakai foto kesayangan",
    },
  },
  {
    id: "tk21",
    situasi: "Lagi nonton video tutorial. Kamu...",
    pilihan: {
      PP: "Nyatet langkah-langkahnya",
      PC: "Nonton sampai habis dulu",
      RB: "Lompat, langsung praktik",
      SS: "Disimpan, terus dikirim ke teman",
    },
  },
  {
    id: "tk22",
    situasi: "Alat baru datang, buku petunjuknya tebal. Kamu...",
    pilihan: {
      PP: "Baca dulu sampai paham",
      PC: "Lihat gambarnya aja",
      RB: "Langsung dicoba, petunjuknya belakangan",
      SS: "Minta ditemenin nyobanya",
    },
  },
  {
    id: "tk23",
    situasi: "Bikin username buat akun baru. Kamu...",
    pilihan: {
      PP: "Nama sendiri, rapi",
      PC: "Yang simpel aja, gampang diingat",
      RB: "Yang nyeleneh, biar diingat orang",
      SS: "Cari yang imut",
    },
  },
];
