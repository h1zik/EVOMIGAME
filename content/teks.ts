/**
 * Semua teks antarmuka game.
 *
 * Aturan menulis: bahasa sehari-hari, tidak lebay, tanpa em dash, tanpa harga,
 * tanpa klaim ketahanan atau kemasan. Pakai kata "versi", bukan "tipe" atau "kepribadian".
 * {nama} diganti nama panggilan pemain, {link} diganti link teman.
 */

export const TEKS = {
  namaGame: "Versiku Kata Kamu",

  awal: {
    judul: "Versiku Kata Kamu",
    penjelasan: "Lihat versi dirimu menurut kamu, lalu menurut teman-temanmu.",
    tombolMulai: "Mulai",
    catatan: "5 kartu situasi. Tanpa daftar, tanpa login.",
    tombolHasil: "Buka hasilku",
  },

  main: {
    tanyaNama: "Nama panggilanmu siapa?",
    labelNama: "Nama panggilan",
    bantuanNama: "2 sampai 20 karakter. Nama ini yang dilihat temanmu.",
    tombolLanjut: "Lanjut",
    progres: "Kartu {ke} dari {total}",
    menyimpan: "Lagi nyusun versi-versimu",
    kembali: "Kembali",
    gantiKartu: "Ganti kartu",
    sisaGanti: "sisa {sisa}",
    gantiHabis: "Jatah ganti kartu habis",
    cobaLagi: "Coba kirim lagi",
  },

  hasil: {
    judulSendiri: "Versi menurut {nama}",
    judulTeman: "Versi {nama} kata teman",
    terkunci: "Terbuka setelah {ambang} teman mengisi",
    penghitung: "{jumlah} dari {ambang}",
    penjelasanTerkunci:
      "Kirim link ini ke teman. Mereka cukup pilih dua versi dan satu kalimat buat kamu.",
    judulLinkHasil: "Link hasilmu",
    tidakDitemukan: "Hasil ini tidak ditemukan. Cek lagi link hasilmu, atau main dari awal.",
    mainDariAwal: "Main dari awal",
    gagalSalin: "Belum bisa menyalin otomatis. Tekan lama link di bawah untuk menyalin.",
    tombolBagikan: "Kirim ke teman",
    tombolSalinLinkTeman: "Salin link",
    tombolWhatsapp: "Kirim lewat WhatsApp",
    tombolSalinLinkHasil: "Salin link hasil",
    bantuanLinkHasil:
      "Buat buka di HP lain. Jangan dibagikan.",
    tombolSalinRingkas: "Salin",
    labelLainnya: "Simpan hasil dan atur datamu",
    tombolUnduh: "Unduh kartu hasil",
    tersalin: "Tersalin",
    kolomMenurut: "Menurut {nama}",
    kolomTeman: "Kata teman",
    sorotanBeda: "Ada versi kamu yang lebih kelihatan di mata teman: {varian}.",
    sorotanMirip: "Kamu dan temanmu melihat versi yang mirip.",
    judulKalimat: "Kata mereka",
    temanAnonim: "Seorang teman",
    ajakanVarian: "Kenalan sama versi ini",
    semuaVersi: "Semua versi",
    jumlahTeman: "{jumlah} teman sudah mengisi",
    ajakLagi: "Masih bisa bertambah. Tiap ada teman baru yang mengisi, hasil ini ikut berubah.",
    penuh: "Sudah {maks} teman yang mengisi. Itu batasnya, makasih sudah mengajak mereka.",
    labelPerbandingan: "Perbandingan tiap versi",
    catatan:
      "Ini bukan tes kepribadian. Cuma cara seru buat lihat versi-versi dirimu.",
  },

  kartu: {
    ajakan: "Menurut kamu, aku paling sering jadi versi yang mana?",
    bantuanUnduh: "Kalau tidak tersimpan, buka gambarnya lalu tekan lama untuk menyimpan.",
    bukaGambar: "Buka gambar",
    menyiapkan: "Menyiapkan kartu",
    gagal: "Kartu belum bisa dibuat. Coba lagi sebentar lagi.",
    judulHalaman: "Kartu hasilmu",
    petunjukSimpan: "Tekan lama gambar ini untuk menyimpan, lalu bagikan ke story.",
    kembali: "Kembali ke hasil",
    altGambar: "Kartu hasil {nama}",
  },

  bagikan: {
    teks: "Menurut kamu, aku paling sering jadi versi yang mana? Isi bentar ya: {link}",
    judul: "Versiku Kata Kamu",
  },

  teman: {
    tanya1:
      "Menurut kamu, {nama} paling sering kelihatan kayak yang mana? Pilih dua ya.",
    tanya2: "Pilih satu kalimat buat {nama}.",
    labelNama: "Nama panggilanmu (boleh dikosongkan)",
    tombolLanjut: "Lanjut",
    tombolKirim: "Kirim",
    mengirim: "Mengirim",
    dipilih: "{jumlah} dari {total} dipilih",
    petunjukGanti: "Lepas satu pilihan dulu kalau mau ganti.",
    tombolUbah: "Ubah pilihan versi",
    gaya: {
      label: "Gaya kalimat",
      santai: "Santai",
      hangat: "Hangat",
      ketSantai: "Buat teman main dan teman tongkrongan.",
      ketHangat: "Buat sahabat dekat atau orang tersayang.",
    },
    langkah: "Langkah {ke} dari 2",
    bantuanNama: "Kalau kosong, kamu tampil sebagai Seorang teman.",
    bukaHasilku: "Buka hasilku",
    judulPratinjau: "Menurut kamu, {nama} versi yang mana?",
    keteranganPratinjau: "Pilih dua versi dan satu kalimat. Cuma sebentar.",
    namaKasar: "Coba pakai nama panggilan lain ya.",
    terimaKasih: "Terkirim. {nama} bakal senang bacanya.",
    ajakan: "Mau tahu versi kamu juga?",
    sudahMengisi: "Kamu sudah mengisi buat {nama}. Makasih ya.",
    linkSendiri:
      "Ini link buat temanmu. Kirim ke mereka, nanti hasilnya muncul di halaman hasilmu.",
    penuh: "Sudah banyak teman yang mengisi buat {nama}. Makasih sudah mampir.",
    tidakDitemukan: "Link ini tidak ditemukan. Coba minta link yang baru ke temanmu.",
  },

  versi: {
    tombolToko: "Lihat di Shopee",
    tombolWaitlist: "Kabari aku kalau sudah ada",
    tombolMain: "Lihat versi dirimu",
    belumTersedia: "Belum tersedia. Mau dikabari kalau sudah ada?",
    tidakDitemukan: "Versi ini tidak ditemukan.",
    varianIni: "sedang dibuka",
  },

  whatsapp: {
    judul: "Dapat kabar dari EVOMI",
    keterangan: "Opsional, lewat WhatsApp",
    label: "Nomor WhatsApp",
    contoh: "Contoh: 081234567890",
    setuju:
      "Aku setuju EVOMI menyimpan nomor ini dan menghubungiku lewat WhatsApp. Aku bisa minta dihapus kapan saja.",
    tombolSimpan: "Simpan nomor",
    menyimpan: "Menyimpan",
    tersimpan: "Nomormu tersimpan. Makasih ya.",
    tombolHapus: "Hapus nomorku",
    terhapus: "Nomormu sudah dihapus.",
    galatNomor: "Cek lagi nomornya. Contoh: 081234567890.",
    galatSetuju: "Centang persetujuannya dulu kalau mau menyimpan nomor.",
  },

  hapus: {
    judul: "Hapus dataku",
    keterangan: "Nama, jawaban, isian teman",
    penjelasan:
      "Menghapus nama panggilan, jawaban, nomor WhatsApp, dan semua isian teman untuk hasil ini. Tidak bisa dibatalkan.",
    yakin: "Yakin mau menghapus semuanya?",
    konfirmasi: "Ya, hapus semuanya",
    batal: "Batal",
    menghapus: "Menghapus",
  },

  kaki: {
    privasi: "Kebijakan privasi",
  },

  galat: {
    namaPendek: "Nama panggilan minimal 2 karakter.",
    namaPanjang: "Nama panggilan maksimal 20 karakter.",
    namaKasar: "Coba pakai nama panggilan lain ya.",
    terlaluSering: "Terlalu banyak percobaan. Coba lagi beberapa menit lagi.",
    umum: "Ada yang belum beres di sisi kami. Coba lagi sebentar lagi.",
  },
} as const;

/** Mengganti {kunci} di dalam teks dengan nilainya. */
export function isi(
  templat: string,
  nilai: Record<string, string | number>,
): string {
  return templat.replace(/\{(\w+)\}/g, (_, kunci: string) =>
    kunci in nilai ? String(nilai[kunci]) : `{${kunci}}`,
  );
}
