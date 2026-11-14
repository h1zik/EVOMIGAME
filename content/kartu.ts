/**
 * Kartu situasi. Tiap sesi mengambil beberapa kartu secara acak dari semua kartu
 * (jumlahnya diatur di content/pengaturan.ts, jumlahKartu).
 *
 * Ada 200 kartu, K001 sampai K200, dibagi 10 tema dengan 20 kartu tiap tema.
 * Isinya ada di folder content/kartu-tema/, satu file per tema.
 *
 * Tiap pilihan ditulis di bawah kode variannya (PP, PC, RB, SS). Kode ini hanya
 * untuk data dan tidak pernah ditampilkan ke pemain. Urutan pilihan diacak saat tampil.
 *
 * Menambah kartu: tambahkan entri di file tema yang cocok, dengan id baru yang belum dipakai.
 * Menambah tema: buat file baru di content/kartu-tema/, lalu daftarkan di KARTU_TEMA di bawah.
 * Menambah varian baru: tambahkan satu baris pilihan dengan kode varian itu di tiap kartu.
 * Jalankan npm test setelah mengedit. Tesnya memeriksa bentuk dan aturan penulisan tiap kartu.
 *
 * Id kartu ikut tersimpan bersama jawaban pemain, jadi jangan dipakai ulang untuk kartu lain.
 */
import { KARTU_TEMAN } from "./kartu-tema/teman";
import { KARTU_KELUARGA } from "./kartu-tema/keluarga";
import { KARTU_BELAJAR } from "./kartu-tema/belajar";
import { KARTU_KERJA } from "./kartu-tema/kerja";
import { KARTU_SENDIRI } from "./kartu-tema/sendiri";
import { KARTU_MEDSOS } from "./kartu-tema/medsos";
import { KARTU_MAKAN } from "./kartu-tema/makan";
import { KARTU_JALAN } from "./kartu-tema/jalan";
import { KARTU_UANG } from "./kartu-tema/uang";
import { KARTU_CANGGUNG } from "./kartu-tema/canggung";

export type KartuSituasi = {
  id: string;
  situasi: string;
  /** kode varian -> teks pilihan */
  pilihan: Record<string, string>;
};

/** Urutannya tidak berpengaruh, karena kartu diambil acak. */
const KARTU_TEMA: KartuSituasi[][] = [
  KARTU_TEMAN,
  KARTU_KELUARGA,
  KARTU_BELAJAR,
  KARTU_KERJA,
  KARTU_SENDIRI,
  KARTU_MEDSOS,
  KARTU_MAKAN,
  KARTU_JALAN,
  KARTU_UANG,
  KARTU_CANGGUNG,
];

export const DAFTAR_KARTU: KartuSituasi[] = KARTU_TEMA.flat();

const PETA_KARTU = new Map(DAFTAR_KARTU.map((k) => [k.id, k]));

export function cariKartu(id: string): KartuSituasi | undefined {
  return PETA_KARTU.get(id);
}
