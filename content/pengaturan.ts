/** Angka-angka aturan game. Ubah di sini, tidak perlu menyentuh komponen. */
export const PENGATURAN = {
  /** Jumlah kartu situasi yang dijawab pemain tiap sesi. */
  jumlahKartu: 5,
  /**
   * Berapa kali pemain boleh menukar kartu yang jawabannya tidak ada yang cocok.
   * Isi 0 untuk mematikan tombol "Ganti kartu".
   */
  maksGantiKartu: 3,
  /** Jumlah respons teman sebelum "versi kata teman" terbuka. */
  ambangBuka: 3,
  /** Batas respons teman per pemain. */
  maksRespons: 30,
  /** Jumlah versi yang dipilih teman. */
  jumlahPilihanTeman: 2,
  /** Selisih minimal (poin persen) supaya satu versi jadi sorotan. */
  ambangSorotan: 10,
  /** Poin awal tiap versi, supaya tidak ada versi yang 0%. */
  poinDasar: 1,
  /** Panjang nama panggilan. */
  namaMin: 2,
  namaMaks: 20,
  /**
   * Batas permintaan per pengunjung (per alamat IP). Dibuat longgar karena satu alamat
   * bisa dipakai banyak orang sekaligus, misalnya wifi kampus atau booth acara.
   */
  batas: {
    buatPemain: { maks: 30, menit: 10 },
    kirimRespons: { maks: 60, menit: 10 },
    event: { maks: 300, menit: 5 },
    kartu: { maks: 60, menit: 5 },
    whatsapp: { maks: 10, menit: 10 },
    hapus: { maks: 10, menit: 10 },
    admin: { maks: 8, menit: 10 },
  },
  /** Ke mana orang bisa meminta datanya dihapus. GANTI kalau ada kontak resmi lain. */
  kontakPrivasi: { nama: "Instagram @evomi.id", url: "https://instagram.com/evomi.id" },
} as const;

export type NamaBatas = keyof typeof PENGATURAN.batas;
