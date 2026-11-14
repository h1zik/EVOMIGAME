import type { KartuSituasi } from "../kartu";

/** Tema: kerja, magang, dan organisasi. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_KERJA: KartuSituasi[] = [
  {
    id: "K061",
    situasi: "Kerjaan lama belum kelar, atasan udah ngasih tugas baru. Kamu...",
    pilihan: {
      PP: "Nanya mana yang harus diduluin",
      PC: "Tarik napas, kerjain satu per satu",
      RB: '"Siap, aku kerjain sekarang"',
      SS: "Iyain dulu, walau deg-degan ngejarnya",
    },
  },
  {
    id: "K062",
    situasi: "Laporan udah dikirim, baru sadar ada yang salah. Kamu...",
    pilihan: {
      PP: "Kirim revisinya segera, kasih catatan singkat",
      PC: "Tetap kalem, dibenerin pas ada kesempatan",
      RB: "Nemuin atasan, ngaku, terus benerin",
      SS: "Minta maaf lewat chat, berkali-kali",
    },
  },
  {
    id: "K063",
    situasi: "Rapat tim lagi tegang gara-gara beda pendapat. Kamu...",
    pilihan: {
      PP: "Ngerangkum inti masalahnya biar fokus ke solusi",
      PC: "Nyairin suasana biar semua lebih santai",
      RB: "Motong debatnya pakai ide baru",
      SS: "Dengerin semua pihak, nggak ikut panas",
    },
  },
  {
    id: "K064",
    situasi: "Hari pertama masuk magang atau kerja. Kamu...",
    pilihan: {
      PP: "Nyatet alur kerja dan aturan kantornya",
      PC: "Lihat-lihat dulu biar cepat nyaman",
      RB: "Keliling kenalan sama semua orang",
      SS: "Senyum ke tiap orang yang lewat",
    },
  },
  {
    id: "K065",
    situasi: "Jam pulang udah dekat, teman kerja minta bantuan. Kamu...",
    pilihan: {
      PP: "Lihat seberapa mendesak, bantu yang bisa",
      PC: "Bantu sebentar, terus beres-beres pulang",
      RB: '"Besok pagi aja ya, aku udah mau pulang"',
      SS: "Nggak tega nolak, bantuin sampai selesai",
    },
  },
  {
    id: "K066",
    situasi: "Idemu ditolak pas diskusi bareng tim. Kamu...",
    pilihan: {
      PP: "Nanya bagian mana yang perlu diperbaiki",
      PC: "Terima aja, mungkin belum waktunya",
      RB: "Ngajuin ide cadangan yang lebih berani",
      SS: "Ikut dukung ide teman yang kepilih",
    },
  },
  {
    id: "K067",
    situasi: "Mendadak ditunjuk mimpin rapat mingguan. Kamu...",
    pilihan: {
      PP: "Nulis poin bahasan singkat sebelum mulai",
      PC: "Rapatnya dibawa kayak ngobrol biasa",
      RB: "Buka rapat dengan penuh semangat",
      SS: "Minta tolong teman buat nyatet hasilnya",
    },
  },
  {
    id: "K068",
    situasi: "Proyek besar selesai, meja kerjamu berantakan banget. Kamu...",
    pilihan: {
      PP: "Dokumennya dipilah sesuai kategori",
      PC: "Beresin pelan-pelan sambil dengerin lagu",
      RB: "Masukin semua ke laci, beres",
      SS: "Dirapiin sambil nyimpen catatan kecil dari tim",
    },
  },
  {
    id: "K069",
    situasi: "Ada teman kerja yang kelihatan kewalahan. Kamu...",
    pilihan: {
      PP: "Nawarin bagi dua beban kerjanya",
      PC: "Ngajak istirahat sebentar, ngopi dulu",
      RB: "Ambil alih sebagian tugasnya",
      SS: "Kasih semangat, taruh camilan di mejanya",
    },
  },
  {
    id: "K070",
    situasi: "Atasan muji kamu di grup chat kantor. Kamu...",
    pilihan: {
      PP: "Bilang makasih, sebut juga kontribusi tim",
      PC: "Balas santai pakai stiker sopan",
      RB: "Sekalian nawarin diri buat proyek berikutnya",
      SS: "Balasnya singkat, senyumnya yang lama",
    },
  },
  {
    id: "K071",
    situasi: "Lagi dikejar deadline, Wi-Fi kantor tiba-tiba mati. Kamu...",
    pilihan: {
      PP: "Ngerjain dulu bagian yang nggak butuh internet",
      PC: "Istirahat sebentar sambil nunggu nyala lagi",
      RB: "Pakai tethering HP, lanjut terus",
      SS: "Nanya teman sebelah, punya mereka mati juga?",
    },
  },
  {
    id: "K072",
    situasi: "Diajak makan siang sama teman kerja yang belum akrab. Kamu...",
    pilihan: {
      PP: "Ikut, nyari topik obrolan yang umum",
      PC: "Ikut aja, nikmatin makan siangnya",
      RB: "Buka obrolan seru biar cepat dekat",
      SS: "Dengerin cerita mereka sambil sesekali senyum",
    },
  },
  {
    id: "K073",
    situasi: "Rapat diundur satu jam. Kamu...",
    pilihan: {
      PP: "Jam kosongnya dipakai nyicil kerjaan lain",
      PC: "Santai dulu sambil ngerapiin meja",
      RB: "Keluar nyari camilan di luar kantor",
      SS: "Ngecek ulang bahan rapat, takut ada yang kurang",
    },
  },
  {
    id: "K074",
    situasi: "Nggak setuju sama keputusan ketua panitia. Kamu...",
    pilihan: {
      PP: "Jelasin alasannya, kasih alternatif lain",
      PC: "Ikut keputusan bareng biar acaranya jalan",
      RB: "Bilang nggak setuju di depan forum",
      SS: "Ngajak ketuanya ngobrol berdua habis rapat",
    },
  },
  {
    id: "K075",
    situasi: "Acara yang kamu pegang mau mulai, tamunya belum datang. Kamu...",
    pilihan: {
      PP: "Hubungin tamunya, mastiin posisi dan jamnya",
      PC: "Tetap kalem, geser susunan acaranya dikit",
      RB: "Isi dulu pakai sesi interaksi dadakan",
      SS: "Nenangin panitia lain yang mulai panik",
    },
  },
  {
    id: "K076",
    situasi: "Diminta lembur, padahal malam ini udah ada janji. Kamu...",
    pilihan: {
      PP: "Nawar, sisanya dikerjain besok pagi",
      PC: "Jelasin baik-baik kalau malam ini ada perlu",
      RB: "Bilang terus terang nggak bisa lembur",
      SS: "Nggak enak nolak, janjinya yang digeser",
    },
  },
  {
    id: "K077",
    situasi: "Laptop mati, file kerjaan belum sempat disimpan. Kamu...",
    pilihan: {
      PP: "Ngecek folder pemulihan otomatisnya",
      PC: "Tarik napas dalam, ketik ulang pelan-pelan",
      RB: "Ketik ulang ngebut, mumpung masih ingat",
      SS: "Cerita ke teman sebelah biar agak lega",
    },
  },
  {
    id: "K078",
    situasi: "Ada anggota baru di tim kerjamu. Kamu...",
    pilihan: {
      PP: "Jelasin pembagian tugas dan alur kerjanya",
      PC: "Ngobrol santai biar dia nggak canggung",
      RB: "Ajak dia ikut proyek yang lagi jalan",
      SS: "Sambut ramah, nawarin bantuan kalau bingung",
    },
  },
  {
    id: "K079",
    situasi: "Diminta kasih evaluasi soal kinerja tim bulan ini. Kamu...",
    pilihan: {
      PP: "Bawa data capaian dan apa yang perlu dibenahi",
      PC: "Kasih masukan yang adem biar tim tetap nyaman",
      RB: "Blak-blakan soal masalah yang ngehambat",
      SS: "Mulai dari apresiasi, sarannya pelan-pelan",
    },
  },
  {
    id: "K080",
    situasi: "Ditawarin tugas di luar bidang yang kamu kuasai. Kamu...",
    pilihan: {
      PP: "Pelajarin dulu dasarnya sebelum nerima",
      PC: "Terima, anggap aja belajar hal baru",
      RB: '"Siap, cobain aja dulu"',
      SS: "Mau, asal ada yang ngebimbing di awal",
    },
  },
];
