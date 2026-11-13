import { describe, expect, it } from "vitest";
import { DAFTAR_VARIAN } from "@content/varian";
import { tambahUtm } from "./utm";

describe("tambahUtm", () => {
  it("menambah tiga parameter UTM", () => {
    const hasil = new URL(tambahUtm("https://shopee.co.id/produk-i.1.2", "rebel"));
    expect(hasil.searchParams.get("utm_source")).toBe("versiku");
    expect(hasil.searchParams.get("utm_medium")).toBe("game");
    expect(hasil.searchParams.get("utm_campaign")).toBe("rebel");
    expect(hasil.origin + hasil.pathname).toBe("https://shopee.co.id/produk-i.1.2");
  });

  it("mempertahankan parameter lain, misalnya teks WhatsApp", () => {
    const hasil = new URL(tambahUtm("https://wa.me/628123?text=Halo%20EVOMI", "sweet"));
    expect(hasil.searchParams.get("text")).toBe("Halo EVOMI");
    expect(hasil.searchParams.get("utm_campaign")).toBe("sweet");
  });

  it("menimpa UTM bawaan supaya tidak dobel", () => {
    const hasil = tambahUtm("https://shopee.co.id/x?utm_source=meta&utm_medium=cpc&utm_campaign=lp", "purpose");
    expect(hasil.match(/utm_source=/g)).toHaveLength(1);
    expect(new URL(hasil).searchParams.get("utm_source")).toBe("versiku");
  });

  it("link yang tidak sah dikembalikan apa adanya", () => {
    expect(tambahUtm("bukan-link", "rebel")).toBe("bukan-link");
  });
});

describe("pengaturan varian", () => {
  it("link toko di config tidak membawa UTM bawaan", () => {
    for (const v of DAFTAR_VARIAN) expect(v.urlToko).not.toMatch(/utm_/);
  });

  it("tiap varian punya id, kode, dan maskot yang berbeda", () => {
    for (const kunci of ["id", "kode", "maskot"] as const) {
      expect(new Set(DAFTAR_VARIAN.map((v) => v[kunci])).size).toBe(DAFTAR_VARIAN.length);
    }
  });
});
