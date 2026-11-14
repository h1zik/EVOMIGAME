import type { KartuSituasi } from "../kartu";

/** Tema: di jalan dan bepergian. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_JALAN: KartuSituasi[] = [
  {
    id: "K141",
    situasi: "Lagi ngejar janji, jalanan macet total. Kamu...",
    pilihan: {
      PP: "Buka peta, cari jalur alternatif",
      PC: "Pasang musik, nikmatin aja perjalanannya",
      RB: "Turun, lanjut pakai ojek biar tembus",
      SS: "Chat minta maaf ke yang nunggu",
    },
  },
  {
    id: "K142",
    situasi: "Lagi buru-buru, eh salah naik jurusan bus. Kamu...",
    pilihan: {
      PP: "Turun di halte terdekat, cek rute baliknya",
      PC: "Santai, sekalian lihat-lihat rute baru",
      RB: "Nanya ke sopirnya, arah balik lewat mana",
      SS: "Deg-degan, minta dipanduin teman lewat chat",
    },
  },
  {
    id: "K143",
    situasi: "Lagi naik motor, tiba-tiba hujan turun. Kamu...",
    pilihan: {
      PP: "Minggir, pakai jas hujan, lanjut jalan",
      PC: "Neduh di warung sambil minum yang hangat",
      RB: "Terobos aja, basah dikit nggak apa-apa",
      SS: "Neduh bareng pengendara lain, saling senyum",
    },
  },
  {
    id: "K144",
    situasi: "Liburan bareng teman, jadwalnya meleset jauh. Kamu...",
    pilihan: {
      PP: "Nyusun ulang tempat mana yang diutamain",
      PC: "Nikmatin aja tempat yang lagi didatangi",
      RB: "Nyari spot seru terdekat, tanpa rencana",
      SS: "Mastiin semua teman nyaman dan nggak capek",
    },
  },
  {
    id: "K145",
    situasi: "Lagi nyari alamat pakai peta, baterai HP tinggal sedikit. Kamu...",
    pilihan: {
      PP: "Ngafalin rutenya sekarang sebelum HP mati",
      PC: "Nanya arah ke warga sekitar aja",
      RB: "Mampir ke minimarket, numpang ngecas",
      SS: "Ngabarin orang rumah dulu, jaga-jaga",
    },
  },
  {
    id: "K146",
    situasi: "Dapat tempat duduk di kendaraan umum yang penuh sesak. Kamu...",
    pilihan: {
      PP: "Duduk rapi, tas dipangku biar nggak makan tempat",
      PC: "Pasang earphone, istirahat sepanjang jalan",
      RB: "Berdiri lagi, kursinya buat yang lebih butuh",
      SS: "Geser dikit biar orang sebelah lebih lega",
    },
  },
  {
    id: "K147",
    situasi: "Di perjalanan jauh, teman seperjalananmu mabuk darat. Kamu...",
    pilihan: {
      PP: "Nyiapin minyak angin dan kantong plastik",
      PC: "Ngajak ngobrol ringan biar dia teralihkan",
      RB: "Minta sopir berhenti di rest area terdekat",
      SS: "Ngusap punggungnya pelan, kasih air minum",
    },
  },
  {
    id: "K148",
    situasi: "Lagi jalan kaki, ketemu persimpangan yang bikin bingung. Kamu...",
    pilihan: {
      PP: "Buka aplikasi peta sambil minggir dulu",
      PC: "Ikutin arah orang banyak aja dulu",
      RB: "Pilih satu arah, nyasar ya tinggal balik",
      SS: "Nanya pedagang di pinggir jalan, sopan",
    },
  },
  {
    id: "K149",
    situasi: "Mau naik tangga stasiun, bawaanmu berat banget. Kamu...",
    pilihan: {
      PP: "Atur ulang pegangan biar bebannya seimbang",
      PC: "Naik pelan-pelan, satu anak tangga sekali",
      RB: "Angkat sekaligus biar cepat sampai atas",
      SS: "Minta tolong petugas bawain sebagian",
    },
  },
  {
    id: "K150",
    situasi: "Sampai di penginapan sebelum jam check-in. Kamu...",
    pilihan: {
      PP: "Titip tas di resepsionis, keliling sekitar",
      PC: "Duduk santai di lobi, nikmatin suasana",
      RB: "Nyari tempat sarapan terkenal di dekat situ",
      SS: "Ngabarin orang rumah kalau udah sampai",
    },
  },
  {
    id: "K151",
    situasi: "Ban motor kempes di jalan yang agak sepi. Kamu...",
    pilihan: {
      PP: "Nyari tambal ban terdekat lewat peta",
      PC: "Dorong pelan-pelan, nanti juga ketemu",
      RB: "Telepon teman, minta dijemput",
      SS: "Nanya warga sekitar, tambal ban di mana",
    },
  },
  {
    id: "K152",
    situasi: "Kereta atau pesawatmu telat sejam. Kamu...",
    pilihan: {
      PP: "Waktunya dipakai beresin email atau catatan",
      PC: "Nyari kursi nyaman, dengerin musik",
      RB: "Keliling stasiun atau bandara",
      SS: "Chat yang jemput biar nggak khawatir",
    },
  },
  {
    id: "K153",
    situasi: "Lagi di kendaraan, pemandangan di luar bagus banget. Kamu...",
    pilihan: {
      PP: "Foto dari sudut yang pas buat kenang-kenangan",
      PC: "Disimpan di ingatan aja sambil nikmatin angin",
      RB: "Buka jendela lebar-lebar biar makin kerasa",
      SS: "Kirim fotonya ke orang terdekat biar ikut lihat",
    },
  },
  {
    id: "K154",
    situasi: "Naik motor, nyasar masuk gang buntu. Kamu...",
    pilihan: {
      PP: "Putar balik pelan-pelan, cek ulang rutenya",
      PC: "Ketawa sendiri, balik arah dengan santai",
      RB: "Nanya warga yang lagi duduk di depan rumah",
      SS: "Permisi-permisi ke warga sambil putar balik",
    },
  },
  {
    id: "K155",
    situasi: "Pesan ojek online, titik jemputnya susah ditemuin. Kamu...",
    pilihan: {
      PP: "Kirim patokan yang jelas lewat chat",
      PC: "Nunggu di tempat yang gampang kelihatan",
      RB: "Telepon drivernya, arahin jalannya",
      SS: "Jalan kaki nyamperin biar dia nggak repot",
    },
  },
  {
    id: "K156",
    situasi: "Di tengah perjalanan, resleting ranselmu rusak. Kamu...",
    pilihan: {
      PP: "Atur isi tas biar nggak ada yang jatuh",
      PC: "Dipegangin aja bagian depannya sepanjang jalan",
      RB: "Mampir beli tas darurat",
      SS: "Minta tolong teman jagain dari belakang",
    },
  },
  {
    id: "K157",
    situasi: "Orang di sebelahmu ngajak ngobrol terus sepanjang perjalanan. Kamu...",
    pilihan: {
      PP: "Nanggepin seperlunya, sopan, terus istirahat",
      PC: "Dengerin ceritanya sambil santai",
      RB: "Ikut cerita yang lebih seru lagi",
      SS: "Ngangguk-ngangguk, nggak enak motong",
    },
  },
  {
    id: "K158",
    situasi: "Di luar mendung gelap, payung ketinggalan. Kamu...",
    pilihan: {
      PP: "Jalan lebih cepat biar sampai sebelum hujan",
      PC: "Jalan santai, kalau hujan tinggal neduh",
      RB: "Hujan-hujanan juga nggak apa-apa, lanjut",
      SS: "Nebeng payung teman yang jalannya searah",
    },
  },
  {
    id: "K159",
    situasi: "Tempat wisata yang kamu datangi ternyata penuh sesak. Kamu...",
    pilihan: {
      PP: "Nyari sudut lain yang lebih sepi buat foto",
      PC: "Duduk santai, nikmatin jajanan sekitar",
      RB: "Terobos keramaian demi lihat spot utamanya",
      SS: "Antre tertib sambil ngobrol sama teman",
    },
  },
  {
    id: "K160",
    situasi: "Mau nyeberang, jalan rayanya lagi ramai banget. Kamu...",
    pilihan: {
      PP: "Jalan ke zebra cross atau jembatan penyeberangan",
      PC: "Nunggu sampai jalanannya agak sepi",
      RB: "Angkat tangan, kasih kode ke pengendara",
      SS: "Nyeberang bareng orang lain yang juga mau lewat",
    },
  },
];
