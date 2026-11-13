/**
 * Isi halaman /privasi. Ditulis sesuai apa yang benar-benar disimpan oleh game ini.
 * Kalau cara kerja game berubah (misalnya ada data baru yang disimpan), perbarui juga di sini.
 * {kontak} diganti dengan kontak di content/pengaturan.ts.
 */
export const PRIVASI = {
  judul: "Kebijakan privasi",
  pembuka:
    "Versiku Kata Kamu dibuat EVOMI. Game ini bisa dimainkan tanpa daftar dan tanpa login, dan kami menyimpan data sesedikit mungkin.",
  bagian: [
    {
      judul: "Yang kami simpan",
      butir: [
        "Nama panggilan yang kamu tulis.",
        "Jawabanmu di kartu situasi dan komposisi versi yang dihasilkan.",
        "Isian dari teman: dua versi yang mereka pilih, satu kalimat dari daftar, dan nama panggilan mereka kalau diisi.",
        "Sidik perangkat berupa kode acak yang sudah diacak ulang (hash), supaya satu perangkat hanya mengisi satu kali. Kode ini tidak bisa dipakai untuk mengenali kamu.",
        "Dari mana kamu datang, kalau link yang kamu buka membawa keterangan sumber.",
        "Catatan pemakaian tanpa nama, misalnya berapa kali tombol bagikan ditekan.",
        "Nomor WhatsApp, hanya kalau kamu mengisinya sendiri dan mencentang persetujuan.",
      ],
    },
    {
      judul: "Yang tidak kami simpan",
      butir: [
        "Email, foto, alamat, atau akun media sosial.",
        "Alamat IP. Alamat ini hanya dipakai sesaat untuk membatasi percobaan berlebihan, lalu tidak disimpan.",
        "Pesan bebas. Teman hanya bisa memilih kalimat dari daftar.",
      ],
    },
    {
      judul: "Yang tersimpan di perangkatmu",
      butir: [
        "Kode acak perangkat, link hasilmu, dan penanda kalau kamu sudah mengisi untuk seorang teman. Semuanya ada di penyimpanan browser dan bisa kamu hapus lewat pengaturan browser.",
      ],
    },
    {
      judul: "Pihak lain",
      butir: [
        "Kami tidak memakai layanan analitik pihak ketiga.",
        "Tombol ke Shopee dan WhatsApp membawamu ke layanan mereka, yang punya kebijakan privasi sendiri.",
      ],
    },
    {
      judul: "Cara menghapus datamu",
      butir: [
        "Buka halaman hasilmu, lalu tekan Hapus dataku di bagian bawah. Nama panggilan, jawaban, nomor WhatsApp, dan semua isian teman untuk hasil itu langsung terhapus.",
        "Nomor WhatsApp bisa dihapus sendiri kapan saja dari halaman hasil.",
        "Kalau kamu kehilangan link hasil, atau ingin menghapus isianmu sebagai teman, hubungi kami lewat {kontak}.",
      ],
    },
    {
      judul: "Berapa lama disimpan",
      butir: ["Data disimpan selama game ini berjalan, atau sampai kamu menghapusnya."],
    },
  ],
} as const;
