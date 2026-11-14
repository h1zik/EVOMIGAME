import type { KartuSituasi } from "../kartu";

/** Tema: sekolah dan kuliah. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_BELAJAR: KartuSituasi[] = [
  {
    id: "K041",
    situasi: "Dikasih tugas dadakan, besok harus dikumpul. Kamu...",
    pilihan: {
      PP: "Bikin kerangkanya dulu biar cepat kelar",
      PC: "Tarik napas dulu, baru mulai ngerjain",
      RB: "Dikebut malam ini juga",
      SS: "Nanya teman dulu, mastiin formatnya",
    },
  },
  {
    id: "K042",
    situasi: "Ditunjuk jadi moderator presentasi kelompok. Kamu...",
    pilihan: {
      PP: "Nyiapin alur pembuka sampai penutup",
      PC: "Bawain santai biar nggak ada yang tegang",
      RB: "Buka presentasinya dengan gaya yang beda",
      SS: "Latihan ngomong pelan-pelan sebelum maju",
    },
  },
  {
    id: "K043",
    situasi: "Menjelang ujian, teman sekelas mau pinjam catatanmu. Kamu...",
    pilihan: {
      PP: "Difoto dulu buat cadangan, baru dipinjamin",
      PC: "Boleh, pakai aja sampai ujian selesai",
      RB: '"Nih, semoga paham tulisanku"',
      SS: "Senang catatannya kepakai, langsung kasih",
    },
  },
  {
    id: "K044",
    situasi: "Materinya baru dijelasin, tapi belum nyantol sama sekali. Kamu...",
    pilihan: {
      PP: "Catat bagian yang bingung buat ditanyain",
      PC: "Nanti dipelajarin pelan-pelan lewat video",
      RB: "Angkat tangan, nanya saat itu juga",
      SS: "Nanya ke teman sebangku pas kelas bubar",
    },
  },
  {
    id: "K045",
    situasi: "Kelas hari ini tiba-tiba dibatalin. Kamu...",
    pilihan: {
      PP: "Waktu kosongnya dipakai nyicil tugas",
      PC: "Pulang, istirahat di kasur",
      RB: "Ngajak teman nongkrong dadakan",
      SS: "Nemenin teman yang masih nunggu jemputan",
    },
  },
  {
    id: "K046",
    situasi: "Nilai kuis hariannya kurang memuaskan. Kamu...",
    pilihan: {
      PP: "Ngecek jawaban yang salah buat bahan belajar",
      PC: "Nggak apa-apa, masih ada ujian berikutnya",
      RB: "Nanya ke dosennya, bisa perbaikan atau nggak",
      SS: "Sedih sebentar, terus nyemangatin diri sendiri",
    },
  },
  {
    id: "K047",
    situasi: "Lagi belajar di perpustakaan, sekitarnya berisik. Kamu...",
    pilihan: {
      PP: "Pindah nyari sudut yang lebih tenang",
      PC: "Pasang earphone, dengerin musik santai",
      RB: "Tegur orangnya biar pelanin suara",
      SS: "Coba fokus lagi, nggak enak negur",
    },
  },
  {
    id: "K048",
    situasi: "Sebentar lagi presentasi, slide-nya belum selesai. Kamu...",
    pilihan: {
      PP: "Bagi sisa slide ke tiap anggota biar cepat",
      PC: "Nenangin kelompok biar nggak panik bareng",
      RB: "Maju aja, sisanya improvisasi di depan",
      SS: "Bantuin bagian teman yang paling keteteran",
    },
  },
  {
    id: "K049",
    situasi: "Ada lomba yang pas banget sama minatmu. Kamu...",
    pilihan: {
      PP: "Nyiapin berkas dan latihan dari jauh hari",
      PC: "Ikut buat nambah pengalaman aja",
      RB: "Daftar dulu, menang kalah urusan nanti",
      SS: "Ngajak teman dekat daftar bareng",
    },
  },
  {
    id: "K050",
    situasi: "Lagi belajar buat ujian besok, eh ketiduran. Kamu...",
    pilihan: {
      PP: "Pasang alarm subuh buat lanjut belajar",
      PC: "Lanjut tidur aja biar besok otaknya segar",
      RB: "Cuci muka, lanjut belajar sampai pagi",
      SS: "Panik, chat teman nanya dia udah sampai mana",
    },
  },
  {
    id: "K051",
    situasi: "Guru lagi nerangin, teman sebangku ngajak ngobrol. Kamu...",
    pilihan: {
      PP: "Kasih kode, bahasnya nanti pas istirahat",
      PC: "Senyum aja sambil tetap nyimak ke depan",
      RB: "Ladenin, bisik-bisik asal nggak ketahuan",
      SS: "Jawab pelan banget, nggak enak nyuekin",
    },
  },
  {
    id: "K052",
    situasi: "Ada kelas, tapi buku paketnya ketinggalan. Kamu...",
    pilihan: {
      PP: "Buka versi digitalnya di HP",
      PC: "Nyimak aja, nyatat seperlunya",
      RB: "Bilang terus terang kalau bukunya ketinggalan",
      SS: "Minta izin numpang lihat punya teman",
    },
  },
  {
    id: "K053",
    situasi: "Sesi tanya jawab dibuka, tapi belum ada yang nanya. Kamu...",
    pilihan: {
      PP: "Nanya hal yang udah dicatat dari tadi",
      PC: "Nunggu aja, siapa tahu ada yang mau",
      RB: "Angkat tangan, kasih pertanyaan yang kritis",
      SS: "Nanya hal ringan biar presenternya lega",
    },
  },
  {
    id: "K054",
    situasi: "Lagi presentasi, salah nyebut istilah penting. Kamu...",
    pilihan: {
      PP: "Ralat dengan tenang, lanjut jelasin",
      PC: "Ketawa kecil sebentar, terus lanjut",
      RB: "Dijadiin bahan bercanda biar nggak kaku",
      SS: "Minta maaf singkat sambil benerin ucapannya",
    },
  },
  {
    id: "K055",
    situasi: "Jadwal ujian dimajuin dari rencana awal. Kamu...",
    pilihan: {
      PP: "Nyusun ulang jadwal belajar",
      PC: "Tetap santai, fokus ke poin utamanya aja",
      RB: "Sistem kebut semalam, siapa takut",
      SS: "Ngajak teman belajar bareng biar tenang",
    },
  },
  {
    id: "K056",
    situasi: "Ada anggota kelompok yang kurang aktif ngerjain tugas. Kamu...",
    pilihan: {
      PP: "Bagi tugas yang jelas, lengkap sama deadline",
      PC: "Ajak ngobrol santai, nanya kendalanya apa",
      RB: "Tegur di grup biar dia cepat gerak",
      SS: "Kerjain sebagian bagiannya biar tetap kelar",
    },
  },
  {
    id: "K057",
    situasi: "Giliranmu presentasi, proyektornya tiba-tiba mati. Kamu...",
    pilihan: {
      PP: "Lanjut pakai catatan yang udah disiapin",
      PC: "Nunggu teknisi sambil ngobrol ringan",
      RB: "Tetap presentasi tanpa slide, suara lantang",
      SS: "Nanya dulu ke dosen, enaknya gimana",
    },
  },
  {
    id: "K058",
    situasi: "Diminta ngewakilin kelas di rapat organisasi. Kamu...",
    pilihan: {
      PP: "Nyatet semua poin buat dilaporin ke kelas",
      PC: "Dengerin jalannya rapat dengan santai",
      RB: "Nyampaiin usul yang beda dari yang lain",
      SS: "Nyimak baik-baik, ngomong kalau ditanya",
    },
  },
  {
    id: "K059",
    situasi: "Ada materi pelajaran yang bertentangan sama pendapatmu. Kamu...",
    pilihan: {
      PP: "Nyari referensi lain buat ngebandingin",
      PC: "Diterima dulu sebagai wawasan baru",
      RB: "Ngajak yang ngajar diskusi terbuka",
      SS: "Bahas pelan-pelan sama teman habis kelas",
    },
  },
  {
    id: "K060",
    situasi: "Bel istirahat bunyi, catatan di papan belum selesai disalin. Kamu...",
    pilihan: {
      PP: "Foto papannya, dicatat rapi nanti",
      PC: "Nanti aja minta catatan teman",
      RB: "Keluar duluan, jajan lebih penting",
      SS: "Nyelesaiin catatan dulu, baru nyusul keluar",
    },
  },
];
