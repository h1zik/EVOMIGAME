import { describe, expect, it } from "vitest";
import { mengandungKataKasar } from "./kataKasar";
import { bolehLewat, kosongkanBatas } from "./rateLimit";

describe("mengandungKataKasar", () => {
  it("meloloskan nama biasa", () => {
    for (const nama of ["Dita", "Bagas", "Raka", "Sari", "Tania", "Kasih", "Bima Sakti", "Putri Ayu", "Mas Yoga", "Kak Nadia"]) {
      expect(mengandungKataKasar(nama), nama).toBe(false);
    }
  });

  it("tidak salah tangkap kata pendek di dalam nama biasa", () => {
    for (const nama of ["Asuka", "Babila", "Taila", "Begonia", "Setiawan", "Colin", "Kasur", "Essex", "Dickson"]) {
      expect(mengandungKataKasar(nama), nama).toBe(false);
    }
  });

  it("menolak kata kasar", () => {
    for (const nama of ["anjing", "Si Goblok", "kontol", "bangsat kau", "asu", "si babi", "fuck"]) {
      expect(mengandungKataKasar(nama), nama).toBe(true);
    }
  });

  it("menolak kata kasar yang disamarkan", () => {
    for (const nama of ["ANJ1NG", "4njing", "anjiiiing", "a.n.j.i.n.g", "k0nt0l", "g o b l o k", "b4ngs4t", "a s u", "AnJiNg99"]) {
      expect(mengandungKataKasar(nama), nama).toBe(true);
    }
  });
});

describe("bolehLewat (pembatas permintaan)", () => {
  it("meloloskan sampai batas, lalu menolak", () => {
    kosongkanBatas();
    for (let i = 0; i < 3; i++) expect(bolehLewat("uji:a", 3, 1000, 0)).toBe(true);
    expect(bolehLewat("uji:a", 3, 1000, 500)).toBe(false);
  });

  it("menghitung tiap pengunjung secara terpisah", () => {
    kosongkanBatas();
    expect(bolehLewat("uji:a", 1, 1000, 0)).toBe(true);
    expect(bolehLewat("uji:a", 1, 1000, 1)).toBe(false);
    expect(bolehLewat("uji:b", 1, 1000, 1)).toBe(true);
  });

  it("membuka lagi setelah jendela waktunya habis", () => {
    kosongkanBatas();
    expect(bolehLewat("uji:a", 1, 1000, 0)).toBe(true);
    expect(bolehLewat("uji:a", 1, 1000, 999)).toBe(false);
    expect(bolehLewat("uji:a", 1, 1000, 1000)).toBe(true);
  });
});
