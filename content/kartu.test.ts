import { describe, expect, it } from "vitest";
import { DAFTAR_GAYA, DAFTAR_KALIMAT, kalimatUntukKode } from "./kalimat";
import { DAFTAR_KARTU } from "./kartu";
import { PENGATURAN } from "./pengaturan";
import { DAFTAR_VARIAN } from "./varian";

/**
 * Penjaga konten: dijalankan lewat `npm test`, supaya kartu atau kalimat yang
 * ditambahkan belakangan tetap mengikuti aturan game.
 */
const KODE = DAFTAR_VARIAN.map((v) => v.kode).sort();
const NAMA_VARIAN = DAFTAR_VARIAN.map((v) => v.namaTampil.toLowerCase());

/** Kata pertama sebuah pilihan, tanpa tanda kutip pembuka dan tanda baca. */
const kataAwal = (teks: string) =>
  teks
    .toLowerCase()
    .replace(/^["']+/, "")
    .split(/[\s,.!?"]+/)
    .filter(Boolean)[0] ?? "";

describe("kartu situasi", () => {
  it("jumlah kartu cukup untuk satu sesi", () => {
    expect(DAFTAR_KARTU.length).toBeGreaterThanOrEqual(PENGATURAN.jumlahKartu);
  });

  it("id kartu tidak ada yang kembar", () => {
    expect(new Set(DAFTAR_KARTU.map((k) => k.id)).size).toBe(DAFTAR_KARTU.length);
  });

  it("situasi tidak ada yang kembar, walau beda huruf besar atau tanda baca", () => {
    const rapi = (teks: string) => teks.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    const terlihat = new Map<string, string>();
    for (const k of DAFTAR_KARTU) {
      const kunci = rapi(k.situasi);
      expect(terlihat.get(kunci), `${k.id} kembar dengan ${terlihat.get(kunci)}`).toBeUndefined();
      terlihat.set(kunci, k.id);
    }
  });

  it("tiap situasi diakhiri ajakan menjawab yang sama", () => {
    // Boleh "Kamu..." atau "kamu..." (huruf kecil kalau situasinya satu kalimat yang menyambung).
    for (const k of DAFTAR_KARTU) expect(/kamu\.\.\.$/i.test(k.situasi), k.id).toBe(true);
  });

  it('situasi tidak dibuka dengan "Kamu", supaya tidak dobel dengan "Kamu..." di akhir', () => {
    for (const k of DAFTAR_KARTU) expect(/^kamu\b/i.test(k.situasi), k.id).toBe(false);
  });

  it("tiap kartu punya tepat satu pilihan untuk tiap varian", () => {
    for (const k of DAFTAR_KARTU) {
      expect(Object.keys(k.pilihan).sort(), k.id).toEqual(KODE);
    }
  });

  it("pilihan dalam satu kartu tidak ada yang kembar atau kosong", () => {
    for (const k of DAFTAR_KARTU) {
      const teks = Object.values(k.pilihan).map((t) => t.trim());
      expect(teks.every((t) => t.length > 0), k.id).toBe(true);
      expect(new Set(teks).size, k.id).toBe(teks.length);
    }
  });

  it("paling banyak dua pilihan dalam satu kartu diawali kata yang sama", () => {
    // Kalau tiga atau empat jawaban diawali kata yang sama ("Ikut...", "Beli...", "Datang..."),
    // biasanya tindakannya sama dan cuma alasannya yang beda, jadi pemain tidak benar-benar memilih.
    // Untuk kartu berisi ajakan atau permintaan, pastikan juga ada pilihan untuk yang mau menolak.
    for (const k of DAFTAR_KARTU) {
      const hitung = new Map<string, number>();
      for (const teks of Object.values(k.pilihan)) hitung.set(kataAwal(teks), (hitung.get(kataAwal(teks)) ?? 0) + 1);
      const terbanyak = [...hitung.entries()].sort((a, b) => b[1] - a[1])[0];
      expect(terbanyak[1], `${k.id}: "${terbanyak[0]}" dipakai ${terbanyak[1]} kali`).toBeLessThanOrEqual(2);
    }
  });

  it("jawaban satu varian tidak punya kata pembuka khas yang bisa ditebak", () => {
    // Kalau jawaban satu varian hampir selalu diawali kata yang sama (misalnya "Langsung..."),
    // pemain bisa mengenali variannya tanpa membaca isinya. Batasnya 12% dari semua kartu.
    const batas = Math.ceil(DAFTAR_KARTU.length * 0.12);
    for (const kode of KODE) {
      const hitung = new Map<string, number>();
      for (const k of DAFTAR_KARTU) {
        const kata = kataAwal(k.pilihan[kode] ?? "");
        hitung.set(kata, (hitung.get(kata) ?? 0) + 1);
      }
      const terbanyak = [...hitung.entries()].sort((a, b) => b[1] - a[1])[0];
      expect(terbanyak[1], `${kode}: "${terbanyak[0]}" membuka ${terbanyak[1]} jawaban`).toBeLessThanOrEqual(batas);
    }
  });

  it("teks kartu tidak menyebut nama varian, supaya labelnya tidak bocor ke pemain", () => {
    for (const k of DAFTAR_KARTU) {
      const semua = [k.situasi, ...Object.values(k.pilihan)].join(" ").toLowerCase();
      for (const nama of NAMA_VARIAN) expect(semua.includes(nama), `${k.id}: ${nama}`).toBe(false);
    }
  });

  it("pilihan cukup pendek untuk tombol di layar HP", () => {
    for (const k of DAFTAR_KARTU) {
      for (const [kode, teks] of Object.entries(k.pilihan)) {
        expect(teks.length, `${k.id} ${kode}`).toBeLessThanOrEqual(60);
      }
      expect(k.situasi.length, k.id).toBeLessThanOrEqual(80);
    }
  });
});

describe("aturan penulisan", () => {
  const semuaTeks = [
    ...DAFTAR_KARTU.flatMap((k) => [k.situasi, ...Object.values(k.pilihan)]),
    ...DAFTAR_KALIMAT.map((k) => k.teks),
  ];

  it("tidak memakai em dash", () => {
    for (const teks of semuaTeks) expect(/[—–]/.test(teks), teks).toBe(false);
  });

  it('tidak memakai kata "tipe" atau "kepribadian"', () => {
    for (const teks of semuaTeks) expect(/\btipe\b|kepribadian/i.test(teks), teks).toBe(false);
  });

  it("tiap varian punya 3 kalimat validasi untuk tiap gaya", () => {
    // Halaman teman menampilkan kalimat dari 2 versi, jadi 3 per versi berarti 6 pilihan.
    for (const kode of KODE) {
      for (const gaya of DAFTAR_GAYA) {
        expect(kalimatUntukKode(kode, gaya).length, `${kode} ${gaya}`).toBe(3);
      }
    }
  });

  it("id dan teks kalimat validasi tidak ada yang kembar", () => {
    expect(new Set(DAFTAR_KALIMAT.map((k) => k.id)).size).toBe(DAFTAR_KALIMAT.length);
    expect(new Set(DAFTAR_KALIMAT.map((k) => k.teks)).size).toBe(DAFTAR_KALIMAT.length);
  });

  it("id kalimat dari panduan tetap ada, karena sudah tersimpan di database", () => {
    const id = new Set(DAFTAR_KALIMAT.map((k) => k.id));
    for (const lama of ["PP1", "PP2", "PP3", "PC1", "PC2", "PC3", "RB1", "RB2", "RB3", "SS1", "SS2", "SS3"]) {
      expect(id.has(lama), lama).toBe(true);
    }
  });

  it("kalimat validasi cukup pendek untuk balon obrolan", () => {
    for (const k of DAFTAR_KALIMAT) expect(k.teks.length, k.id).toBeLessThanOrEqual(60);
  });
});
