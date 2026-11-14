import type { KartuSituasi } from "../kartu";

/** Tema: sekolah dan kampus. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_SEKOLAH: KartuSituasi[] = [
  {
    id: "sk01",
    situasi: "Besok ujian, materinya masih numpuk. Kamu...",
    pilihan: {
      PP: "Bagi materi per jam, kerjain satu-satu",
      PC: "Belajar semampunya, sisanya pasrah dengan tenang",
      RB: "Kebut semalam, pasti bisa",
      SS: "Ngajak teman belajar bareng biar nggak sendirian",
    },
  },
  {
    id: "sk02",
    situasi: 'Di kelas ditanya, "ada pertanyaan?". Kamu...',
    pilihan: {
      PP: "Nanya hal yang emang udah dicatat dari tadi",
      PC: "Dengerin pertanyaan yang lain aja",
      RB: "Angkat tangan, nanya apa aja yang kepikiran",
      SS: "Pengin nanya, tapi nunggu kelas bubar",
    },
  },
  {
    id: "sk03",
    situasi: "Nilai keluar, ternyata lebih jelek dari perkiraan. Kamu...",
    pilihan: {
      PP: "Ngecek salahnya di mana buat perbaikan nanti",
      PC: "Ya udah, satu nilai bukan segalanya",
      RB: "Nanya langsung ke yang ngajar, kok bisa segini",
      SS: "Sedih dulu sebentar, cerita ke teman dekat",
    },
  },
  {
    id: "sk04",
    situasi: "Kelompokmu butuh satu orang buat maju presentasi. Kamu...",
    pilihan: {
      PP: "Maju kalau emang paling paham materinya",
      PC: "Bantu dari samping aja, pegang slide",
      RB: '"Aku aja," langsung berdiri',
      SS: "Berharap bukan kamu, tapi siap kalau diminta",
    },
  },
  {
    id: "sk05",
    situasi: "Ada teman sekelas yang selalu duduk sendirian. Kamu...",
    pilihan: {
      PP: "Ajak dia masuk kelompokmu pas ada tugas",
      PC: "Duduk di dekatnya, ngobrol ringan",
      RB: "Samperin, ajak makan siang bareng",
      SS: "Senyum tiap ketemu, pelan-pelan mulai nyapa",
    },
  },
  {
    id: "sk06",
    situasi: "Tiba-tiba jam kosong dua jam. Kamu...",
    pilihan: {
      PP: "Nyicil tugas yang deadline-nya paling dekat",
      PC: "Cari tempat adem, dengerin lagu",
      RB: "Ngajak teman keluar cari jajan",
      SS: "Ngobrol sama teman dekat sampai lupa waktu",
    },
  },
  {
    id: "sk07",
    situasi: "Tugas yang harus dikumpul hari ini ketinggalan di rumah. Kamu...",
    pilihan: {
      PP: "Ngaku duluan, nawarin kirim hari ini juga",
      PC: "Tenang dulu, pasti ada jalan keluarnya",
      RB: "Jujur aja, tugasnya ketinggalan",
      SS: "Panik, minta ditemenin teman buat ngomong",
    },
  },
  {
    id: "sk08",
    situasi: "Ada pemilihan ketua kelas atau ketua angkatan. Kamu...",
    pilihan: {
      PP: "Maju kalau emang udah punya rencana",
      PC: "Dukung aja siapa pun yang kepilih",
      RB: "Nyalonin diri, kenapa nggak",
      SS: "Jadi tim sukses teman yang kamu percaya",
    },
  },
  {
    id: "sk09",
    situasi: "Catatanmu dipinjam teman, belum balik padahal mau ujian. Kamu...",
    pilihan: {
      PP: "Tagih baik-baik, kasih batas waktu",
      PC: "Belajar dari sumber lain dulu",
      RB: 'Chat langsung, "catatanku mana?"',
      SS: "Nggak enak nagih, nunggu dia ingat sendiri",
    },
  },
  {
    id: "sk10",
    situasi: "Kebagian tempat duduk paling depan. Kamu...",
    pilihan: {
      PP: "Bagus, jadi lebih gampang fokus",
      PC: "Di mana aja sama, yang penting duduk",
      RB: "Sekalian aja banyak nanya",
      SS: "Agak tegang, takut ditunjuk",
    },
  },
  {
    id: "sk11",
    situasi: "Tugas kelompok kelar, tapi ada satu orang yang nggak ikut kerja. Kamu...",
    pilihan: {
      PP: "Catat siapa ngerjain apa, bahas baik-baik",
      PC: "Biarin kali ini, yang penting beres",
      RB: "Ngomong langsung ke orangnya",
      SS: "Kesal, tapi namanya tetap kamu tulis",
    },
  },
  {
    id: "sk12",
    situasi: "Lagi ada lomba antarkelas. Kamu...",
    pilihan: {
      PP: "Pilih lomba yang paling dikuasai",
      PC: "Jadi suporter yang selalu datang",
      RB: "Ikut yang paling menantang",
      SS: "Bikinin poster sama yel-yel buat tim",
    },
  },
  {
    id: "sk13",
    situasi: "Materinya baru dijelasin, tapi nggak ada yang nyantol. Kamu...",
    pilihan: {
      PP: "Catat bagian yang bingung, cari tahu pas pulang",
      PC: "Santai, nanti juga pelan-pelan nyambung",
      RB: "Nanya saat itu juga",
      SS: "Bisik-bisik nanya ke teman sebelah",
    },
  },
  {
    id: "sk14",
    situasi: "Perpustakaan lagi sepi banget. Kamu...",
    pilihan: {
      PP: "Nyelesaiin bacaan yang ketunda",
      PC: "Betah lama-lama, suasananya enak",
      RB: "Bosan, pindah cari tempat yang ramai",
      SS: "Pilih pojok dekat jendela, sambil melamun",
    },
  },
  {
    id: "sk15",
    situasi: "Yang ngajar salah tulis di papan. Kamu...",
    pilihan: {
      PP: "Kasih tahu sopan pas beliau selesai nulis",
      PC: "Biarin, nanti juga ada yang bilang",
      RB: 'Angkat tangan, "maaf, itu kebalik"',
      SS: "Tahu, tapi malu bilangnya",
    },
  },
  {
    id: "sk16",
    situasi: "Nilaimu ternyata paling tinggi di kelas. Kamu...",
    pilihan: {
      PP: "Senang, terus lanjut ke target berikutnya",
      PC: "Bersyukur, nggak perlu diumumin",
      RB: "Teman minta traktiran, langsung diiyain",
      SS: "Senyum-senyum sendiri sepanjang jalan pulang",
    },
  },
  {
    id: "sk17",
    situasi: "Waktu istirahat tinggal 10 menit. Kamu...",
    pilihan: {
      PP: "Makan cepat, sisanya nyiapin pelajaran berikutnya",
      PC: "Duduk aja, minum, tarik napas",
      RB: "Masih sempat lah jajan ke kantin",
      SS: "Bagi bekal sama teman sebelah",
    },
  },
  {
    id: "sk18",
    situasi: "Sehari sebelum ujian, ada teman minta diajarin. Kamu...",
    pilihan: {
      PP: "Bikin ringkasan, ajarin yang penting dulu",
      PC: "Ajarin pelan-pelan sampai dia paham",
      RB: "Bilang jujur, kamu juga belum belajar",
      SS: "Mau banget, sekalian bawain camilan",
    },
  },
  {
    id: "sk19",
    situasi: "Telat masuk kelas, pelajaran udah mulai. Kamu...",
    pilihan: {
      PP: "Masuk tenang, minta maaf singkat, duduk",
      PC: "Pelan-pelan, cari kursi yang paling dekat",
      RB: "Masuk aja kayak nggak ada apa-apa",
      SS: "Ragu di depan pintu, nunggu momen yang pas",
    },
  },
  {
    id: "sk20",
    situasi: "Ada acara perpisahan kelas. Kamu...",
    pilihan: {
      PP: "Bantu nyusun acaranya biar lancar",
      PC: "Nikmatin tiap momennya",
      RB: "Jadi yang paling heboh di panggung",
      SS: "Nulis surat kecil buat teman-teman",
    },
  },
  {
    id: "sk21",
    situasi: "Waktunya milih jurusan atau mata kuliah. Kamu...",
    pilihan: {
      PP: "Pilih yang sesuai sama rencana ke depan",
      PC: "Ambil yang kira-kira bikin betah",
      RB: "Yang paling bikin penasaran",
      SS: "Nanya dulu ke orang yang kamu percaya",
    },
  },
  {
    id: "sk22",
    situasi: "Temanmu lagi presentasi dan kelihatan gugup. Kamu...",
    pilihan: {
      PP: "Kasih pertanyaan gampang biar dia lancar",
      PC: "Ngangguk-ngangguk sambil senyum",
      RB: "Tepuk tangan paling kencang di akhir",
      SS: "Ikut deg-degan, doain dalam hati",
    },
  },
  {
    id: "sk23",
    situasi: "Liburan semester baru aja mulai. Kamu...",
    pilihan: {
      PP: "Udah punya daftar hal yang mau dikejar",
      PC: "Tidur yang cukup dulu, sisanya nanti",
      RB: "Langsung cari kegiatan baru",
      SS: "Pulang, kangen orang rumah",
    },
  },
];
