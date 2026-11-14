/**
 * Kartu situasi. Tiap sesi mengambil beberapa kartu secara acak dari semua kartu
 * (jumlahnya diatur di content/pengaturan.ts, jumlahKartu).
 *
 * Kartu dibagi dua tempat:
 * - File ini: k1 sampai k8 dari panduan (bagian 8.1), dan k9 sampai k40 sebagai tambahan umum.
 * - Folder content/kartu-tema/: kartu tambahan per tema, satu file per tema.
 *
 * Tiap pilihan ditulis di bawah kode variannya (PP, PC, RB, SS). Kode ini hanya
 * untuk data dan tidak pernah ditampilkan ke pemain. Urutan pilihan diacak saat tampil.
 *
 * Menambah kartu: tambahkan entri di file tema yang cocok, dengan id baru yang belum dipakai.
 * Menambah tema: buat file baru di content/kartu-tema/, lalu daftarkan di KARTU_TEMA di bawah.
 * Menambah varian baru: tambahkan satu baris pilihan dengan kode varian itu di tiap kartu.
 * Jalankan npm test setelah mengedit. Tesnya memeriksa bentuk dan aturan penulisan tiap kartu.
 */
import { KARTU_SEKOLAH } from "./kartu-tema/sekolah";
import { KARTU_KERJA } from "./kartu-tema/kerja";
import { KARTU_PERTEMANAN } from "./kartu-tema/pertemanan";
import { KARTU_KELUARGA } from "./kartu-tema/keluarga";
import { KARTU_PERASAAN } from "./kartu-tema/perasaan";
import { KARTU_MEDIA_SOSIAL } from "./kartu-tema/media-sosial";
import { KARTU_MAKAN } from "./kartu-tema/makan";
import { KARTU_JALAN_JALAN } from "./kartu-tema/jalan-jalan";
import { KARTU_BELANJA } from "./kartu-tema/belanja";
import { KARTU_HOBI } from "./kartu-tema/hobi";
import { KARTU_OLAHRAGA } from "./kartu-tema/olahraga";
import { KARTU_DI_JALAN } from "./kartu-tema/di-jalan";
import { KARTU_ACARA } from "./kartu-tema/acara";
import { KARTU_RUMAH } from "./kartu-tema/rumah";
import { KARTU_TEKNOLOGI } from "./kartu-tema/teknologi";
import { KARTU_ALAM } from "./kartu-tema/alam";
import { KARTU_GAYA } from "./kartu-tema/gaya";
import { KARTU_DIRI } from "./kartu-tema/diri";
import { KARTU_TAK_TERDUGA } from "./kartu-tema/tak-terduga";
import { KARTU_RENCANA } from "./kartu-tema/rencana";


export type KartuSituasi = {
  id: string;
  situasi: string;
  /** kode varian -> teks pilihan */
  pilihan: Record<string, string>;
};

const KARTU_DASAR: KartuSituasi[] = [
  {
    id: "k1",
    situasi: "Teman batalin janji mendadak. Kamu...",
    pilihan: {
      PP: "Ya udah, lanjut ngerjain rencanaku sendiri",
      RB: "Tetap berangkat, sendirian juga jadi",
      PC: "Malah lega, bisa rebahan",
      SS: 'Bilang "gapapa kok", padahal agak sedih',
    },
  },
  {
    id: "k2",
    situasi: "Ada tugas kelompok, belum ada yang mulai. Kamu...",
    pilihan: {
      PP: "Bikin pembagian tugas, kirim ke grup",
      RB: 'Langsung nanya di grup, "ini siapa yang mulai?"',
      PC: "Kerjain bagianku dulu pelan-pelan",
      SS: "Nunggu ada yang mulai, baru bantu sebisanya",
    },
  },
  {
    id: "k3",
    situasi: "Masuk ruangan yang isinya orang baru semua. Kamu...",
    pilihan: {
      PP: "Kenalan seperlunya, cari tahu siapa ngapain",
      RB: "Nyapa duluan, ngobrol sama siapa aja",
      PC: "Duduk tenang, senyum kalau ada yang nengok",
      SS: "Cari satu orang yang kelihatan ramah, nempel di situ",
    },
  },
  {
    id: "k4",
    situasi: "Pesanan makananmu datang salah. Kamu...",
    pilihan: {
      PP: "Bilang baik-baik, minta ditukar",
      RB: 'Langsung panggil, "Mas, ini bukan pesananku"',
      PC: "Ya udah dimakan aja, ternyata enak juga",
      SS: "Mau bilang tapi nggak enak, akhirnya dimakan",
    },
  },
  {
    id: "k5",
    situasi: "Hari libur tanpa rencana. Kamu...",
    pilihan: {
      PP: "Beresin hal yang ketunda dari minggu lalu",
      RB: "Ajak teman pergi dadakan",
      PC: "Di rumah aja, nonton atau tidur siang",
      SS: "Bikin sesuatu yang lucu, masak atau dekor kamar",
    },
  },
  {
    id: "k6",
    situasi: "Kamu dipuji di depan banyak orang. Kamu...",
    pilihan: {
      PP: "Bilang makasih, lanjut seperti biasa",
      RB: '"Iya dong," sambil ketawa',
      PC: "Senyum, bilang ini hasil bareng-bareng",
      SS: "Salah tingkah, muka panas",
    },
  },
  {
    id: "k7",
    situasi: "Temanmu lagi sedih dan cerita ke kamu. Kamu...",
    pilihan: {
      PP: "Bantu cari jalan keluarnya",
      RB: 'Ikut kesal buat dia, "siapa orangnya?"',
      PC: "Dengerin sampai selesai, nggak motong",
      SS: "Bawain jajan kesukaannya",
    },
  },
  {
    id: "k8",
    situasi: "Besok ada hal penting. Malam ini kamu...",
    pilihan: {
      PP: "Siapin semuanya sampai rapi, baru tidur",
      RB: "Santai aja, besok dihadapi",
      PC: "Tidur cepat biar besok tenang",
      SS: "Kepikiran terus, chat teman minta disemangatin",
    },
  },

  // ---- Kartu tambahan (k9 dan seterusnya), ditulis mengikuti gaya 8 kartu di atas. ----
  {
    id: "k9",
    situasi: 'Lagi kumpul, ada yang nanya "mau makan apa?". Kamu...',
    pilihan: {
      PP: "Udah kepikiran dari tadi, langsung sebut tempatnya",
      RB: "Usul tempat baru yang belum pernah dicoba",
      PC: '"Aku ikut aja, yang penting bareng"',
      SS: "Nunggu yang lain jawab dulu, baru bilang setuju",
    },
  },
  {
    id: "k10",
    situasi: "Tengah malam, teman kirim chat panjang lagi curhat. Kamu...",
    pilihan: {
      PP: "Baca pelan-pelan, balas satu per satu",
      RB: 'Langsung telepon, "cerita sini"',
      PC: "Temenin ngobrol sampai dia tenang",
      SS: "Kirim stiker peluk dulu, baru balas panjang",
    },
  },
  {
    id: "k11",
    situasi: "Ada yang nyerobot antrean di depanmu. Kamu...",
    pilihan: {
      PP: "Kasih tahu baik-baik, antreannya di belakang",
      RB: 'Langsung tegur, "antre dong"',
      PC: "Biarin aja, mungkin dia lagi buru-buru",
      SS: "Lirik-lirik, berharap dia sadar sendiri",
    },
  },
  {
    id: "k12",
    situasi: "Chat yang harusnya buat satu orang malah kekirim ke grup. Kamu...",
    pilihan: {
      PP: "Hapus, jelasin singkat, selesai",
      RB: "Ketawain diri sendiri di grup",
      PC: "Ya udah, namanya juga manusia",
      SS: "Hapus cepat-cepat, malunya sampai besok",
    },
  },
  {
    id: "k13",
    situasi: "Diajak karaoke padahal suaramu biasa aja. Kamu...",
    pilihan: {
      PP: "Pilih lagu yang aman, yang penting ikut",
      RB: "Ambil mik duluan, pilih lagu paling heboh",
      PC: "Jadi penonton setia sambil tepuk tangan",
      SS: "Mau nyanyi asal bareng-bareng, jangan sendirian",
    },
  },
  {
    id: "k14",
    situasi: "Ulang tahunmu sebentar lagi. Kamu...",
    pilihan: {
      PP: "Udah punya rencana mau ngapain dan sama siapa",
      RB: "Pengin coba hal yang belum pernah",
      PC: "Makan bareng orang terdekat udah cukup",
      SS: "Diam-diam berharap ada yang ingat",
    },
  },
  {
    id: "k15",
    situasi: "Teman minta pendapat soal bajunya, menurutmu kurang cocok. Kamu...",
    pilihan: {
      PP: "Kasih saran yang jelas, bagian mana yang bisa diganti",
      RB: 'Jujur aja, "kurang, mending yang tadi"',
      PC: '"Yang penting kamu nyaman pakainya"',
      SS: "Cari kata paling halus biar dia nggak tersinggung",
    },
  },
  {
    id: "k16",
    situasi: "Hujan deras padahal kamu udah siap berangkat. Kamu...",
    pilihan: {
      PP: "Cek jalan lain, atur ulang jam berangkat",
      RB: "Terobos aja, basah dikit nggak apa-apa",
      PC: "Nunggu reda sambil bikin minuman hangat",
      SS: "Kabarin yang nunggu, minta maaf berkali-kali",
    },
  },
  {
    id: "k17",
    situasi: "Giliranmu presentasi di depan banyak orang. Kamu...",
    pilihan: {
      PP: "Latihan dulu, catat poin pentingnya",
      RB: "Maju pertama biar cepat beres",
      PC: "Bawain pelan dan santai, kayak lagi ngobrol",
      SS: "Deg-degan dari semalam, tapi tetap maju",
    },
  },
  {
    id: "k18",
    situasi: "Ada orang baru gabung ke tongkronganmu. Kamu...",
    pilihan: {
      PP: "Kenalin dia ke yang lain satu per satu",
      RB: "Langsung ajak bercanda biar cepat cair",
      PC: "Ajak duduk di sebelahmu biar nggak canggung",
      SS: "Senyum dulu, nanya hal kecil pelan-pelan",
    },
  },
  {
    id: "k19",
    situasi: "Uang bulan ini ternyata masih sisa. Kamu...",
    pilihan: {
      PP: "Masukin tabungan, udah ada tujuannya",
      RB: "Beli hal yang udah lama dipengin",
      PC: "Jajan enak sambil santai, udah senang",
      SS: "Beliin sesuatu buat orang yang kamu sayang",
    },
  },
  {
    id: "k20",
    situasi: "Rencana liburan bareng teman mulai dibahas. Kamu...",
    pilihan: {
      PP: "Bikin daftar tempat dan hitung biayanya",
      RB: "Usul tujuan yang nggak biasa",
      PC: "Ikut ke mana aja, asal nggak buru-buru",
      SS: "Bagian cari tempat foto dan jajanan lucu",
    },
  },
  {
    id: "k21",
    situasi: "Temanmu ditegur keras di depan orang lain. Kamu...",
    pilihan: {
      PP: "Nengahin, ajak bahas baik-baik",
      RB: "Bela dia saat itu juga",
      PC: "Samperin dia setelahnya, temenin",
      SS: 'Kirim chat diam-diam, "kamu nggak apa-apa?"',
    },
  },
  {
    id: "k22",
    situasi: "HP-mu mati seharian. Kamu...",
    pilihan: {
      PP: "Kerjain hal lain yang udah direncanain",
      RB: "Jalan keluar, cari hal seru tanpa HP",
      PC: "Nikmatin aja, jarang-jarang setenang ini",
      SS: "Kepikiran, takut ada yang nyariin",
    },
  },
  {
    id: "k23",
    situasi: "Ada acara yang butuh sukarelawan. Kamu...",
    pilihan: {
      PP: "Daftar kalau jadwalnya masuk",
      RB: "Angkat tangan duluan",
      PC: "Nggak daftar, datang aja sebagai penonton",
      SS: "Mau ikut kalau ada teman yang bareng",
    },
  },
  {
    id: "k24",
    situasi: "Temanmu dapat hal yang juga kamu incar. Kamu...",
    pilihan: {
      PP: "Kasih selamat, lalu tanya caranya",
      RB: '"Keren, habis ini giliranku"',
      PC: "Ikut senang, jalan tiap orang beda",
      SS: "Kasih selamat, diam-diam ikut bangga",
    },
  },
  {
    id: "k25",
    situasi: "Nemu kafe baru yang sepi dan enak. Kamu...",
    pilihan: {
      PP: "Simpan buat tempat kerja atau belajar",
      RB: "Besok langsung ajak teman ke sana",
      PC: "Jadiin tempat menyendiri",
      SS: "Foto dulu, kirim ke orang terdekat",
    },
  },
  {
    id: "k26",
    situasi: "Ada yang nanya pendapatmu soal hal yang lagi ramai dibahas. Kamu...",
    pilihan: {
      PP: "Jawab setelah tahu duduk perkaranya",
      RB: "Bilang apa yang kamu pikir, apa adanya",
      PC: "Dengerin dua sisinya dulu",
      SS: "Jawab pelan, takut ada yang tersinggung",
    },
  },
  {
    id: "k27",
    situasi: "Bangun kesiangan di hari penting. Kamu...",
    pilihan: {
      PP: "Lewatin yang nggak perlu, tetap berangkat rapi",
      RB: "Gas, sarapan di jalan",
      PC: "Tarik napas dulu, panik nggak bikin cepat",
      SS: "Minta maaf ke semua orang begitu sampai",
    },
  },
  {
    id: "k28",
    situasi: "Dapat hadiah yang sebenarnya kurang kamu suka. Kamu...",
    pilihan: {
      PP: "Simpan, cari cara biar tetap kepakai",
      RB: "Jujur kalau ditanya, kurang cocok",
      PC: "Senang aja, yang penting niatnya",
      SS: "Bilang suka banget biar dia senang",
    },
  },
  {
    id: "k29",
    situasi: "Grup chat mendadak sepi setelah kamu kirim pesan. Kamu...",
    pilihan: {
      PP: "Biarin, nanti juga dibalas",
      RB: 'Kirim lagi, "halo, ada orang?"',
      PC: "Lanjut aktivitas, nggak dipikirin",
      SS: "Baca ulang pesanmu, takut ada yang salah",
    },
  },
  {
    id: "k30",
    situasi: "Datang ke acara, tempat duduknya bebas pilih. Kamu...",
    pilihan: {
      PP: "Tengah, yang paling jelas kelihatan",
      RB: "Paling depan",
      PC: "Pinggir, yang gampang keluar masuk",
      SS: "Di sebelah orang yang kamu kenal",
    },
  },
  {
    id: "k31",
    situasi: "Teman minta ditemani ke acara yang kurang kamu suka. Kamu...",
    pilihan: {
      PP: "Bilang nggak bisa, tawarin ketemu lain waktu",
      RB: '"Nggak deh, itu bukan acaraku"',
      PC: "Ikut aja, cari pojok yang enak",
      SS: "Nggak tega nolak, akhirnya ikut",
    },
  },
  {
    id: "k32",
    situasi: "Punya ide, tapi beda sendiri dari yang lain. Kamu...",
    pilihan: {
      PP: "Siapin alasannya dulu, baru ngomong",
      RB: "Langsung bilang, beda juga nggak apa-apa",
      PC: "Cari waktu yang pas buat ngomonginnya",
      SS: "Bisikin ke satu teman dulu",
    },
  },
  {
    id: "k33",
    situasi: "Sore-sore listrik padam. Kamu...",
    pilihan: {
      PP: "Cari tahu kenapa dan kapan nyalanya",
      RB: "Keluar rumah, cari angin",
      PC: "Rebahan, nikmatin sepinya",
      SS: "Nyalain lilin, malah jadi suasana",
    },
  },
  {
    id: "k34",
    situasi: "Tiba-tiba ditunjuk jadi ketua, nggak ditanya dulu. Kamu...",
    pilihan: {
      PP: "Terima, langsung susun langkahnya",
      RB: "Protes dulu, kok nggak ditanya",
      PC: "Usul ketuanya orang lain, kamu bantu aja",
      SS: "Kaget, terima sambil minta dibantu",
    },
  },
  {
    id: "k35",
    situasi: "Tinggal satu potong makanan di piring bersama. Kamu...",
    pilihan: {
      PP: "Tawarin dulu, kalau nggak ada yang mau baru ambil",
      RB: 'Ambil, "aku ya"',
      PC: "Biarin buat yang lain",
      SS: "Pengin, tapi nunggu ada yang nyuruh",
    },
  },
  {
    id: "k36",
    situasi: "Ketemu langsung sama orang yang kamu kagumi. Kamu...",
    pilihan: {
      PP: "Sapa sopan, bilang apa yang kamu suka dari karyanya",
      RB: "Samperin, minta foto",
      PC: "Senyum dari jauh, itu udah cukup",
      SS: "Grogi, akhirnya cuma berani lihat",
    },
  },
  {
    id: "k37",
    situasi: "Ada waktu kosong 30 menit sebelum janji. Kamu...",
    pilihan: {
      PP: "Cicil kerjaan kecil",
      RB: "Keliling, lihat-lihat sekitar",
      PC: "Duduk, minum, lihat orang lalu-lalang",
      SS: "Chat orang terdekat, cerita hal kecil",
    },
  },
  {
    id: "k38",
    situasi: "Temanmu lupa ulang tahunmu. Kamu...",
    pilihan: {
      PP: "Nggak diambil pusing, lanjut seperti biasa",
      RB: 'Ledekin dia, "eh, lupa ya?"',
      PC: "Santai, ucapan telat juga tetap ucapan",
      SS: "Diam, tapi sedikit kepikiran",
    },
  },
  {
    id: "k39",
    situasi: "Barang yang baru kamu beli ternyata ada yang rusak. Kamu...",
    pilihan: {
      PP: "Foto, hubungi penjual, minta tukar",
      RB: "Balik ke tokonya hari itu juga",
      PC: "Kalau masih bisa dipakai, ya udah",
      SS: "Bingung mau bilang, minta tolong teman",
    },
  },
  {
    id: "k40",
    situasi: "Malam minggu tanpa acara. Kamu...",
    pilihan: {
      PP: "Beresin kamar, siapin buat minggu depan",
      RB: "Cari acara dadakan",
      PC: "Film, selimut, selesai",
      SS: "Video call sama orang yang dikangenin",
    },
  },
];

/** Kartu tambahan per tema. Urutannya tidak berpengaruh, karena kartu diambil acak. */
const KARTU_TEMA: KartuSituasi[][] = [
  KARTU_SEKOLAH,
  KARTU_KERJA,
  KARTU_PERTEMANAN,
  KARTU_KELUARGA,
  KARTU_PERASAAN,
  KARTU_MEDIA_SOSIAL,
  KARTU_MAKAN,
  KARTU_JALAN_JALAN,
  KARTU_BELANJA,
  KARTU_HOBI,
  KARTU_OLAHRAGA,
  KARTU_DI_JALAN,
  KARTU_ACARA,
  KARTU_RUMAH,
  KARTU_TEKNOLOGI,
  KARTU_ALAM,
  KARTU_GAYA,
  KARTU_DIRI,
  KARTU_TAK_TERDUGA,
  KARTU_RENCANA,
];

export const DAFTAR_KARTU: KartuSituasi[] = [...KARTU_DASAR, ...KARTU_TEMA.flat()];

const PETA_KARTU = new Map(DAFTAR_KARTU.map((k) => [k.id, k]));

export function cariKartu(id: string): KartuSituasi | undefined {
  return PETA_KARTU.get(id);
}
