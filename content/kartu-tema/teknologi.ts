import type { KartuSituasi } from "../kartu";

/** Tema: HP, laptop, dan teknologi. Urutan pilihan: PP, PC, RB, SS. */
export const KARTU_TEKNOLOGI: KartuSituasi[] = [
  {
    id: "tk01",
    situasi: "HP-mu mulai lemot. Kamu...",
    pilihan: {
      PP: "Hapus yang nggak perlu",
      PC: "Sabar, masih jalan",
      RB: "Kembalikan ke setelan awal",
      SS: "Minta tolong teman",
    },
  },
  {
    id: "tk02",
    situasi: "Laptop mati mendadak, kerjaan belum disimpan. Kamu...",
    pilihan: {
      PP: "Tenang, ada cadangan otomatis",
      PC: "Tarik napas, ulang pelan-pelan",
      RB: "Kerjain ulang, kali ini lebih cepat",
      SS: "Hampir nangis",
    },
  },
  {
    id: "tk03",
    situasi: "Kamu lupa kata sandi. Kamu...",
    pilihan: {
      PP: "Buka catatan yang disimpan aman",
      PC: "Atur ulang aja",
      RB: "Coba semua kemungkinan",
      SS: "Tanya orang rumah",
    },
  },
  {
    id: "tk04",
    situasi: "Baterai HP tinggal 5%. Kamu...",
    pilihan: {
      PP: "Keluarin pengisi daya dari tas",
      PC: "Biarin mati, nggak apa-apa",
      RB: "Pakai sampai habis",
      SS: "Kabarin orang terdekat dulu",
    },
  },
  {
    id: "tk05",
    situasi: "Ada pembaruan sistem besar di HP-mu. Kamu...",
    pilihan: {
      PP: "Baca dulu apa yang berubah",
      PC: "Nanti aja",
      RB: "Pasang langsung",
      SS: "Takut ada yang hilang",
    },
  },
  {
    id: "tk06",
    situasi: "Foto penting terhapus. Kamu...",
    pilihan: {
      PP: "Pulihkan dari cadangan",
      PC: "Ya sudah, kenangannya masih ada",
      RB: "Cari cara balikin sampai ketemu",
      SS: "Sedih seharian",
    },
  },
  {
    id: "tk07",
    situasi: "Game yang kamu tunggu akhirnya rilis. Kamu...",
    pilihan: {
      PP: "Tunggu ulasannya dulu",
      PC: "Main kalau lagi senggang",
      RB: "Main malam ini juga",
      SS: "Main bareng teman",
    },
  },
  {
    id: "tk08",
    situasi: "Layar HP-mu retak. Kamu...",
    pilihan: {
      PP: "Bawa ke tempat servis minggu ini",
      PC: "Masih bisa dipakai",
      RB: "Ganti sendiri",
      SS: "Tutupin pakai stiker",
    },
  },
  {
    id: "tk09",
    situasi: "Asisten suara salah paham sama perintahmu. Kamu...",
    pilihan: {
      PP: "Ulangi dengan lebih jelas",
      PC: "Ketawa",
      RB: "Ketik aja, lebih cepat",
      SS: "Minta maaf ke asistennya",
    },
  },
  {
    id: "tk10",
    situasi: "Kamu pilih pelindung HP baru. Kamu...",
    pilihan: {
      PP: "Polos dan kuat",
      PC: "Bening",
      RB: "Yang gambarnya paling ramai",
      SS: "Yang lucu, ada gantungannya",
    },
  },
  {
    id: "tk11",
    situasi: "Jam tanganmu ngingetin buat gerak. Kamu...",
    pilihan: {
      PP: "Berdiri, jalan sebentar",
      PC: "Peregangan di tempat",
      RB: "Lari di tempat",
      SS: '"Nanti ya"',
    },
  },
  {
    id: "tk12",
    situasi: "Internet lambat pas rapat daring. Kamu...",
    pilihan: {
      PP: "Pindah ke jaringan lain",
      PC: "Matikan kamera",
      RB: "Bilang, lanjut lewat telepon",
      SS: "Minta maaf berkali-kali",
    },
  },
  {
    id: "tk13",
    situasi: "Kamu mau belajar hal teknis yang baru. Kamu...",
    pilihan: {
      PP: "Ikut kursus yang berurutan",
      PC: "Pelan-pelan, sedikit tiap hari",
      RB: "Langsung bikin proyek",
      SS: "Belajar bareng teman",
    },
  },
  {
    id: "tk14",
    situasi: "Ada tautan mencurigakan masuk ke HP-mu. Kamu...",
    pilihan: {
      PP: "Jangan dibuka, laporkan",
      PC: "Abaikan",
      RB: "Peringatkan semua kontak",
      SS: "Tanya dulu ke yang lebih paham",
    },
  },
  {
    id: "tk15",
    situasi: "Memori HP penuh. Kamu...",
    pilihan: {
      PP: "Pindahkan ke penyimpanan lain",
      PC: "Hapus sedikit",
      RB: "Hapus banyak sekaligus",
      SS: "Sayang semua, bingung mulai dari mana",
    },
  },
  {
    id: "tk16",
    situasi: "Earphone-mu tinggal sebelah yang nyala. Kamu...",
    pilihan: {
      PP: "Beli pengganti",
      PC: "Satu juga cukup",
      RB: "Bongkar, coba benerin",
      SS: "Dipakai berdua sama teman",
    },
  },
  {
    id: "tk17",
    situasi: "Kamu dapat HP bekas dari kakak. Kamu...",
    pilihan: {
      PP: "Atur ulang dari awal",
      PC: "Langsung pakai",
      RB: "Utak-atik tampilannya",
      SS: "Senang, masih ada foto lamanya",
    },
  },
  {
    id: "tk18",
    situasi: "Orang di sebelahmu mau pinjam pengisi daya. Kamu...",
    pilihan: {
      PP: "Pinjamin, bilang butuh lagi jam berapa",
      PC: "Silakan",
      RB: "Pinjamin, sekalian ngobrol",
      SS: "Pinjamin walau baterai sendiri tipis",
    },
  },
  {
    id: "tk19",
    situasi: "Kamu pakai AI buat bantu tugas. Kamu...",
    pilihan: {
      PP: "Pakai, lalu periksa hasilnya",
      PC: "Pakai seperlunya",
      RB: "Coba sampai mana batasnya",
      SS: "Bilang makasih ke AI-nya",
    },
  },
  {
    id: "tk20",
    situasi: "Kamu mengatur layar utama HP. Kamu...",
    pilihan: {
      PP: "Semua masuk folder",
      PC: "Satu halaman aja",
      RB: "Acak, yang penting hafal",
      SS: "Senada, pakai foto kesayangan",
    },
  },
  {
    id: "tk21",
    situasi: "Nonton video tutorial. Kamu...",
    pilihan: {
      PP: "Catat langkahnya",
      PC: "Nonton sampai habis",
      RB: "Lompat ke praktik",
      SS: "Simpan, bagikan ke teman",
    },
  },
  {
    id: "tk22",
    situasi: "Alat baru datang, buku petunjuknya tebal. Kamu...",
    pilihan: {
      PP: "Baca dulu",
      PC: "Lihat gambarnya aja",
      RB: "Langsung coba",
      SS: "Minta ditemani nyoba",
    },
  },
  {
    id: "tk23",
    situasi: "Kamu bikin nama pengguna baru. Kamu...",
    pilihan: {
      PP: "Nama sendiri, rapi",
      PC: "Yang sederhana",
      RB: "Yang nyeleneh",
      SS: "Yang imut",
    },
  },
];
