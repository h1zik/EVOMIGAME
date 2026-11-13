import { describe, expect, it } from "vitest";
import { cariSorotan, hitungPoin, kePersen, varianAjakan } from "./skor";

const URUTAN = ["purpose", "peaceful", "rebel", "sweet"];
const jumlah = (p: Record<string, number>) => Object.values(p).reduce((a, b) => a + b, 0);

describe("hitungPoin", () => {
  it("memberi 1 poin dasar ke tiap versi", () => {
    expect(hitungPoin([], URUTAN)).toEqual({ purpose: 1, peaceful: 1, rebel: 1, sweet: 1 });
  });

  it("menambah 1 poin per jawaban, total 9 untuk 5 jawaban", () => {
    const poin = hitungPoin(["rebel", "rebel", "purpose", "sweet", "rebel"], URUTAN);
    expect(poin).toEqual({ purpose: 2, peaceful: 1, rebel: 4, sweet: 2 });
    expect(jumlah(poin)).toBe(9);
  });

  it("mengabaikan id varian yang tidak dikenal", () => {
    expect(jumlah(hitungPoin(["entah", "rebel"], URUTAN))).toBe(5);
  });

  it("skor teman: tiap teman memberi 2 poin", () => {
    const poin = hitungPoin(["purpose", "rebel", "purpose", "sweet", "peaceful", "purpose"], URUTAN);
    expect(jumlah(poin)).toBe(4 + 3 * 2);
    expect(poin.purpose).toBe(4);
  });
});

describe("kePersen (largest remainder)", () => {
  it("contoh pemain: 2,1,4,2 dari 9 menjadi 22,11,45,22", () => {
    // 22,22 / 11,11 / 44,44 / 22,22. Sisa 1 poin persen jatuh ke pecahan terbesar (rebel).
    expect(kePersen({ purpose: 2, peaceful: 1, rebel: 4, sweet: 2 }, URUTAN)).toEqual({
      purpose: 22,
      peaceful: 11,
      rebel: 45,
      sweet: 22,
    });
  });

  it("pecahan sama: versi yang tampil lebih dulu didahulukan", () => {
    // 3,2,2,2 dari 9 = 33,33 / 22,22 / 22,22 / 22,22. Sisa 1 jatuh ke purpose (pecahan 0,33).
    expect(kePersen({ purpose: 3, peaceful: 2, rebel: 2, sweet: 2 }, URUTAN)).toEqual({
      purpose: 34,
      peaceful: 22,
      rebel: 22,
      sweet: 22,
    });
  });

  it("semua jawaban ke satu versi: versi lain tetap tidak 0%", () => {
    const persen = kePersen(hitungPoin(Array(5).fill("sweet"), URUTAN), URUTAN);
    expect(persen).toEqual({ purpose: 11, peaceful: 11, rebel: 11, sweet: 67 });
  });

  it("jumlah selalu 100 dan tidak ada 0% untuk semua kemungkinan jawaban pemain", () => {
    // Semua cara membagi 5 jawaban ke 4 versi.
    for (let a = 0; a <= 5; a++)
      for (let b = 0; a + b <= 5; b++)
        for (let c = 0; a + b + c <= 5; c++) {
          const d = 5 - a - b - c;
          const persen = kePersen({ purpose: 1 + a, peaceful: 1 + b, rebel: 1 + c, sweet: 1 + d }, URUTAN);
          expect(jumlah(persen)).toBe(100);
          expect(Math.min(...Object.values(persen))).toBeGreaterThan(0);
        }
  });

  it("jumlah selalu 100 dan tidak ada 0% untuk skor teman sampai 30 respons", () => {
    // Kasus paling timpang: 30 teman memilih dua versi yang sama.
    for (let n = 0; n <= 30; n++) {
      const persen = kePersen({ purpose: 1 + n, peaceful: 1 + n, rebel: 1, sweet: 1 }, URUTAN);
      expect(jumlah(persen)).toBe(100);
      expect(Math.min(...Object.values(persen))).toBeGreaterThan(0);
    }
  });

  it("tetap benar kalau varian bertambah", () => {
    const lima = [...URUTAN, "baru"];
    const persen = kePersen(hitungPoin(["baru", "baru", "rebel"], lima), lima);
    expect(jumlah(persen)).toBe(100);
    expect(Object.keys(persen)).toHaveLength(5);
  });
});

describe("cariSorotan", () => {
  const sendiri = { purpose: 22, peaceful: 11, rebel: 45, sweet: 22 };

  it("memilih versi dengan selisih terbesar kalau 10 atau lebih", () => {
    const teman = { purpose: 20, peaceful: 40, rebel: 20, sweet: 20 };
    expect(cariSorotan(sendiri, teman, URUTAN, 10)).toEqual({ idVarian: "peaceful", selisih: 29 });
  });

  it("selisih tepat 10 tetap jadi sorotan", () => {
    const teman = { purpose: 32, peaceful: 11, rebel: 40, sweet: 17 };
    expect(cariSorotan(sendiri, teman, URUTAN, 10)).toEqual({ idVarian: "purpose", selisih: 10 });
  });

  it("selisih 9 tidak jadi sorotan", () => {
    const teman = { purpose: 31, peaceful: 11, rebel: 41, sweet: 17 };
    expect(cariSorotan(sendiri, teman, URUTAN, 10)).toBeNull();
  });

  it("hanya melihat versi yang naik di mata teman, bukan yang turun", () => {
    // rebel turun 30, tapi tidak ada yang naik sampai 10.
    const teman = { purpose: 30, peaceful: 20, rebel: 15, sweet: 31 };
    expect(cariSorotan({ purpose: 22, peaceful: 11, rebel: 45, sweet: 22 }, teman, URUTAN, 10)).toBeNull();
  });

  it("selisih sama: versi yang tampil lebih dulu dipilih", () => {
    const teman = { purpose: 37, peaceful: 26, rebel: 15, sweet: 22 };
    expect(cariSorotan(sendiri, teman, URUTAN, 10)).toEqual({ idVarian: "purpose", selisih: 15 });
  });
});

describe("varianAjakan", () => {
  it("memakai versi sorotan kalau ada", () => {
    expect(varianAjakan({ idVarian: "sweet", selisih: 12 }, { purpose: 40, peaceful: 20, rebel: 20, sweet: 20 }, URUTAN)).toBe(
      "sweet",
    );
  });

  it("tanpa sorotan: versi dengan persen kata teman tertinggi", () => {
    expect(varianAjakan(null, { purpose: 20, peaceful: 20, rebel: 38, sweet: 22 }, URUTAN)).toBe("rebel");
  });

  it("tanpa sorotan dan seri: versi yang tampil lebih dulu", () => {
    expect(varianAjakan(null, { purpose: 20, peaceful: 30, rebel: 30, sweet: 20 }, URUTAN)).toBe("peaceful");
  });
});
