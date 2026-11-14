import type { KartuSituasi } from "../kartu";

/** Tema: media sosial dan chat. Urutan pilihan: PP, PC, RB, SS (lihat content/varian.ts). */
export const KARTU_MEDSOS: KartuSituasi[] = [
  {
    id: "K101",
    situasi: "Mau upload foto, tapi bingung pilih yang mana. Kamu...",
    pilihan: {
      PP: "Pilih yang cahaya dan sudutnya paling rapi",
      PC: "Yang paling natural aja, tanpa banyak edit",
      RB: "Upload semuanya sekaligus, biar nggak pusing",
      SS: "Nanya teman dekat dulu, bagusan yang mana",
    },
  },
  {
    id: "K102",
    situasi: "Setelah sekian lama, teman lama nge-reply story-mu. Kamu...",
    pilihan: {
      PP: "Balas ramah, nanya sekarang sibuk apa",
      PC: "Balas santai pakai stiker senyum",
      RB: "Ngajak video call biar ngobrolnya puas",
      SS: "Senang banget, balasnya panjang lebar",
    },
  },
  {
    id: "K103",
    situasi: "Grup chat lagi bahas topik yang kurang kamu paham. Kamu...",
    pilihan: {
      PP: "Scroll ke atas dulu biar ngerti konteksnya",
      PC: "Nyimak aja, sesekali kasih reaksi",
      RB: '"Ini lagi bahas apa sih?"',
      SS: "Nanya lewat chat pribadi ke satu teman",
    },
  },
  {
    id: "K104",
    situasi: "Dapat pesan berantai yang belum jelas benar nggaknya. Kamu...",
    pilihan: {
      PP: "Ngecek faktanya ke sumber yang terpercaya",
      PC: "Diabaikan aja, nggak usah diterusin",
      RB: "Bilang di grup kalau itu hoaks",
      SS: "Ngasih tahu keluarga pelan-pelan biar nggak ketipu",
    },
  },
  {
    id: "K105",
    situasi: "Ada komentar nyinyir di postingan temanmu. Kamu...",
    pilihan: {
      PP: "Laporin komentarnya biar ditindak",
      PC: "Kasih komentar positif biar yang nyinyir tenggelam",
      RB: "Balas komennya, belain temanmu",
      SS: "Chat temanmu, kasih semangat",
    },
  },
  {
    id: "K106",
    situasi: "Teman video call mendadak, kamu belum siap. Kamu...",
    pilihan: {
      PP: "Minta lima menit buat rapi-rapi dulu",
      PC: "Baju rumah juga nggak apa-apa, angkat aja",
      RB: "Angkat, muka baru bangun bodo amat",
      SS: "Kameranya ditutupin dulu sambil senyum-senyum",
    },
  },
  {
    id: "K107",
    situasi: "Nggak sengaja kepencet like di foto lama gebetan. Kamu...",
    pilihan: {
      PP: "Biarin, di-unlike malah makin kelihatan panik",
      PC: "Santai, anggap aja lagi lihat-lihat",
      RB: 'Chat dia, "eh, kepencet pas lagi kepo"',
      SS: "Buru-buru unlike sambil deg-degan",
    },
  },
  {
    id: "K108",
    situasi: "Akun medsosmu penuh notifikasi yang nggak penting. Kamu...",
    pilihan: {
      PP: "Atur ulang pengaturan notifikasinya",
      PC: "Di-mute aja dulu semuanya",
      RB: "Unfollow semua akun yang nyepam",
      SS: "Bikin akun kedua khusus teman dekat",
    },
  },
  {
    id: "K109",
    situasi: "Mau nulis caption buat foto liburan. Kamu...",
    pilihan: {
      PP: "Cerita singkat soal tempat dan momennya",
      PC: "Satu dua kata aja, simpel",
      RB: "Pakai kutipan lucu yang lagi ramai",
      SS: "Ucapan makasih buat yang udah nemenin",
    },
  },
  {
    id: "K110",
    situasi: "Di-tag di foto yang mukamu lagi nggak siap. Kamu...",
    pilihan: {
      PP: "Minta dihapus baik-baik lewat chat pribadi",
      PC: "Ketawa aja lihat ekspresi sendiri",
      RB: "Komen ngakak di postingannya",
      SS: "Disembunyiin dari profil, tag-nya dibiarin",
    },
  },
  {
    id: "K111",
    situasi: "Ada tren baru yang lagi viral di medsos. Kamu...",
    pilihan: {
      PP: "Pelajarin dulu konsepnya sebelum ikutan",
      PC: "Nontonin karya orang lain aja, buat hiburan",
      RB: "Bikin versimu sendiri hari itu juga",
      SS: "Ngajak teman dekat bikin videonya bareng",
    },
  },
  {
    id: "K112",
    situasi: "Chat penting cuma dibaca doang sama teman. Kamu...",
    pilihan: {
      PP: "Kirim pengingat singkat yang sopan",
      PC: "Tungguin aja, mungkin dia lagi sibuk",
      RB: "Telepon biar dapat jawaban cepat",
      SS: "Nunggu beberapa jam, baru chat lagi pelan-pelan",
    },
  },
  {
    id: "K113",
    situasi: "Pengin istirahat dari medsos selama akhir pekan. Kamu...",
    pilihan: {
      PP: "Ngabarin teman dekat kalau mau off sebentar",
      PC: "Aplikasinya disingkirin dari layar utama",
      RB: "Matiin paket data sampai Senin pagi",
      SS: "Ganti bio jadi lagi istirahat dulu",
    },
  },
  {
    id: "K114",
    situasi: "Ada teman curhat panjang lebar di story-nya. Kamu...",
    pilihan: {
      PP: "Chat pribadi, nawarin bantuan kalau butuh",
      PC: "Kasih reaksi biar dia tahu ada yang peduli",
      RB: "Telepon, nanya dia lagi di mana",
      SS: "Kirim pesan penyemangat yang hangat",
    },
  },
  {
    id: "K115",
    situasi: "Nemu akun kreator yang kontennya bermanfaat banget. Kamu...",
    pilihan: {
      PP: "Simpan postingannya ke folder buat dipelajarin",
      PC: "Follow aja biar muncul terus di beranda",
      RB: "Bagiin ke story biar teman lain tahu",
      SS: "Ninggalin komentar makasih di postingannya",
    },
  },
  {
    id: "K116",
    situasi: "Gebetan baru aja posting foto baru. Kamu...",
    pilihan: {
      PP: "Kasih like, sewajarnya aja",
      PC: "Dilihat aja, nggak buru-buru kasih reaksi",
      RB: "Reply pakai candaan ringan",
      SS: "Bolak-balik lihat profilnya sambil senyum",
    },
  },
  {
    id: "K117",
    situasi: "Lagi asyik video call, koneksinya lemot. Kamu...",
    pilihan: {
      PP: "Matiin kamera biar suaranya tetap lancar",
      PC: "Ketawa bareng lihat muka yang nge-freeze",
      RB: "Tutup, pindah ke telepon biasa",
      SS: "Chat dulu, ngabarin kalau sinyalnya jelek",
    },
  },
  {
    id: "K118",
    situasi: "Mau ganti foto profil setelah sekian lama. Kamu...",
    pilihan: {
      PP: "Pilih foto yang paling rapi dan jelas",
      PC: "Pakai foto pemandangan atau hal yang disuka",
      RB: "Pasang yang paling nyeleneh, biar dikomentarin",
      SS: "Gantinya tengah malam, pas lagi sepi",
    },
  },
  {
    id: "K119",
    situasi: "Teman minta tolong promosiin usahanya di story-mu. Kamu...",
    pilihan: {
      PP: "Repost, ditambah info cara pesannya",
      PC: "Repost aja apa adanya",
      RB: "Beli dulu produknya, terus bikin review jujur",
      SS: "Nulis kata-kata dukungan yang manis buat dia",
    },
  },
  {
    id: "K120",
    situasi: "Lagi pengin beres-beres daftar following. Kamu...",
    pilihan: {
      PP: "Milah akun mana yang masih sesuai minat",
      PC: "Biarin aja, malas milih satu-satu",
      RB: "Unfollow massal akun yang udah nggak aktif",
      SS: "Unfollow pelan-pelan, takut ada yang tersinggung",
    },
  },
];
