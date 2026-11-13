import type { KartuSituasi } from "../kartu";

/** Tema: sekolah dan kampus. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_SEKOLAH: KartuSituasi[] = [
  {
    id: "sk01",
    situasi: "Besok ujian dan materinya banyak. Kamu...",
    pilihan: {
      PP: "Bagi materi per jam, kerjain satu-satu",
      PC: "Belajar semampunya, sisanya dijalani dengan tenang",
      RB: "Kebut semalam, pasti bisa",
      SS: "Ajak teman belajar bareng biar nggak sendirian",
    },
  },
  {
    id: "sk02",
    situasi: 'Pengajar tiba-tiba nanya, "ada pertanyaan?". Kamu...',
    pilihan: {
      PP: "Tanya hal yang memang udah kamu catat",
      PC: "Dengerin pertanyaan yang lain aja",
      RB: "Angkat tangan, tanya apa yang kepikiran",
      SS: "Pengin nanya, tapi nunggu kelas bubar",
    },
  },
  {
    id: "sk03",
    situasi: "Nilaimu ternyata lebih jelek dari perkiraan. Kamu...",
    pilihan: {
      PP: "Cek salahnya di mana, perbaiki untuk berikutnya",
      PC: "Ya sudah, satu nilai bukan segalanya",
      RB: "Tanya langsung ke pengajarnya, kok bisa segini",
      SS: "Sedih dulu sebentar, cerita ke teman dekat",
    },
  },
  {
    id: "sk04",
    situasi: "Kelompokmu butuh satu orang buat maju bicara. Kamu...",
    pilihan: {
      PP: "Maju kalau memang paling paham materinya",
      PC: "Siap bantu dari samping, pegang slide",
      RB: '"Aku aja," langsung berdiri',
      SS: "Berharap bukan kamu, tapi siap kalau diminta",
    },
  },
  {
    id: "sk05",
    situasi: "Ada teman sekelas yang selalu duduk sendirian. Kamu...",
    pilihan: {
      PP: "Ajak dia masuk kelompokmu waktu ada tugas",
      PC: "Duduk di dekatnya, ngobrol ringan",
      RB: "Samperin, ajak gabung makan siang",
      SS: "Senyum tiap ketemu, pelan-pelan nyapa",
    },
  },
  {
    id: "sk06",
    situasi: "Jam kosong mendadak dua jam. Kamu...",
    pilihan: {
      PP: "Kerjain tugas yang tenggatnya paling dekat",
      PC: "Cari tempat teduh, dengerin lagu",
      RB: "Ajak teman keluar cari jajan",
      SS: "Ngobrol sama teman dekat sampai lupa waktu",
    },
  },
  {
    id: "sk07",
    situasi: "Kamu lupa bawa tugas yang harus dikumpul hari ini. Kamu...",
    pilihan: {
      PP: "Bilang ke pengajar, tawarin kirim hari ini juga",
      PC: "Tenang dulu, cari jalan keluarnya",
      RB: "Jujur aja, tugasnya ketinggalan",
      SS: "Panik, minta teman temenin ngomong",
    },
  },
  {
    id: "sk08",
    situasi: "Ada pemilihan ketua kelas atau ketua angkatan. Kamu...",
    pilihan: {
      PP: "Maju kalau memang punya rencana",
      PC: "Dukung siapa pun yang terpilih",
      RB: "Calonkan diri, kenapa nggak",
      SS: "Jadi tim sukses teman yang kamu percaya",
    },
  },
  {
    id: "sk09",
    situasi: "Catatanmu dipinjam teman dan belum balik menjelang ujian. Kamu...",
    pilihan: {
      PP: "Tagih baik-baik, kasih batas waktu",
      PC: "Belajar dari sumber lain dulu",
      RB: 'Chat langsung, "catatanku mana?"',
      SS: "Nggak enak nagih, nunggu dia ingat",
    },
  },
  {
    id: "sk10",
    situasi: "Kamu kebagian tempat duduk paling depan. Kamu...",
    pilihan: {
      PP: "Bagus, jadi lebih gampang fokus",
      PC: "Di mana aja sama, duduk dengan tenang",
      RB: "Sekalian aja banyak nanya",
      SS: "Agak tegang, takut ditunjuk",
    },
  },
  {
    id: "sk11",
    situasi: "Tugas kelompok selesai, tapi satu orang nggak ikut kerja. Kamu...",
    pilihan: {
      PP: "Catat pembagiannya, bahas baik-baik",
      PC: "Biarin kali ini, yang penting beres",
      RB: "Bilang langsung ke orangnya",
      SS: "Kesal, tapi namanya tetap kamu tulis",
    },
  },
  {
    id: "sk12",
    situasi: "Ada lomba antarkelas. Kamu...",
    pilihan: {
      PP: "Pilih lomba yang paling kamu kuasai",
      PC: "Jadi suporter yang selalu datang",
      RB: "Ikut yang paling menantang",
      SS: "Bikinin poster dan yel-yel buat tim",
    },
  },
  {
    id: "sk13",
    situasi: "Kamu nggak paham materi yang baru dijelaskan. Kamu...",
    pilihan: {
      PP: "Catat bagian yang bingung, cari tahu sepulangnya",
      PC: "Santai, nanti juga pelan-pelan nyambung",
      RB: "Tanya saat itu juga",
      SS: "Bisik-bisik nanya ke teman sebelah",
    },
  },
  {
    id: "sk14",
    situasi: "Perpustakaan lagi sepi banget. Kamu...",
    pilihan: {
      PP: "Selesaikan bacaan yang tertunda",
      PC: "Betah lama-lama, suasananya enak",
      RB: "Bosan, pindah cari tempat ramai",
      SS: "Pilih pojok dekat jendela, sambil melamun",
    },
  },
  {
    id: "sk15",
    situasi: "Pengajar salah tulis di papan. Kamu...",
    pilihan: {
      PP: "Kasih tahu sopan setelah beliau selesai",
      PC: "Biarin, nanti juga ada yang bilang",
      RB: 'Angkat tangan, "maaf, itu kebalik"',
      SS: "Tahu, tapi malu bilangnya",
    },
  },
  {
    id: "sk16",
    situasi: "Kamu dapat nilai paling tinggi di kelas. Kamu...",
    pilihan: {
      PP: "Senang, lalu lanjut ke target berikutnya",
      PC: "Bersyukur, nggak perlu diumumkan",
      RB: "Teman minta traktiran, kamu iyain",
      SS: "Senyum-senyum sendiri sepanjang jalan pulang",
    },
  },
  {
    id: "sk17",
    situasi: "Waktu istirahat tinggal 10 menit. Kamu...",
    pilihan: {
      PP: "Makan cepat, sisanya siapin pelajaran berikut",
      PC: "Duduk aja, minum, tarik napas",
      RB: "Masih sempat jajan ke kantin",
      SS: "Bagi bekal sama teman sebelah",
    },
  },
  {
    id: "sk18",
    situasi: "Ada teman minta diajarin sehari sebelum ujian. Kamu...",
    pilihan: {
      PP: "Bikin ringkasan, ajarin yang penting dulu",
      PC: "Ajarin pelan-pelan sampai dia paham",
      RB: "Bilang jujur, kamu juga belum belajar",
      SS: "Mau banget, sekalian bawain camilan",
    },
  },
  {
    id: "sk19",
    situasi: "Kamu telat masuk kelas. Kamu...",
    pilihan: {
      PP: "Masuk tenang, minta maaf singkat, duduk",
      PC: "Pelan-pelan, cari kursi terdekat",
      RB: "Masuk aja seperti biasa",
      SS: "Ragu di depan pintu, nunggu momen yang pas",
    },
  },
  {
    id: "sk20",
    situasi: "Ada acara perpisahan kelas. Kamu...",
    pilihan: {
      PP: "Bantu susun acaranya biar lancar",
      PC: "Nikmatin tiap momennya",
      RB: "Jadi yang paling heboh di panggung",
      SS: "Nulis surat kecil buat teman-teman",
    },
  },
  {
    id: "sk21",
    situasi: "Disuruh pilih jurusan atau mata kuliah. Kamu...",
    pilihan: {
      PP: "Pilih yang sesuai rencana ke depan",
      PC: "Ambil yang bikin betah",
      RB: "Yang paling bikin penasaran",
      SS: "Tanya dulu ke orang yang kamu percaya",
    },
  },
  {
    id: "sk22",
    situasi: "Temanmu lagi presentasi dan kelihatan gugup. Kamu...",
    pilihan: {
      PP: "Kasih pertanyaan yang gampang biar dia lancar",
      PC: "Angguk-angguk, kasih senyum",
      RB: "Tepuk tangan paling keras di akhir",
      SS: "Ikut deg-degan, doain dalam hati",
    },
  },
  {
    id: "sk23",
    situasi: "Liburan semester baru mulai. Kamu...",
    pilihan: {
      PP: "Udah ada daftar hal yang mau dikejar",
      PC: "Tidur cukup dulu, sisanya nanti",
      RB: "Langsung cari kegiatan baru",
      SS: "Pulang, kangen orang rumah",
    },
  },
];
