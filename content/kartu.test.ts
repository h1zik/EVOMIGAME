import { describe, expect, it } from "vitest";
import { DAFTAR_KALIMAT } from "./kalimat";
import { DAFTAR_KARTU } from "./kartu";
import { PENGATURAN } from "./pengaturan";
import { DAFTAR_VARIAN } from "./varian";

/**
 * Penjaga konten: dijalankan lewat `npm test`, supaya kartu atau kalimat yang
 * ditambahkan belakangan tetap mengikuti aturan game.
 */
const KODE = DAFTAR_VARIAN.map((v) => v.kode).sort();
const NAMA_VARIAN = DAFTAR_VARIAN.map((v) => v.namaTampil.toLowerCase());

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
    // Boleh "Kamu..." atau "kamu..." (kartu k8 dari panduan memakai huruf kecil).
    for (const k of DAFTAR_KARTU) expect(/kamu\.\.\.$/i.test(k.situasi), k.id).toBe(true);
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

  it("tiap varian punya kalimat validasi", () => {
    for (const kode of KODE) {
      expect(DAFTAR_KALIMAT.filter((k) => k.kode === kode).length, kode).toBeGreaterThanOrEqual(1);
    }
  });
});
