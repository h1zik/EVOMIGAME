import { describe, expect, it } from "vitest";
import { bersihkanNama, periksaPanjangNama } from "./nama";

describe("bersihkanNama", () => {
  it("membuang tag HTML", () => {
    expect(bersihkanNama("<b>Dita</b>")).toBe("Dita");
    expect(bersihkanNama('<script>alert("x")</script>Rani')).toBe('alert("x")Rani');
    expect(bersihkanNama("a < b > c")).toBe("a c");
  });

  it("merapikan spasi dan karakter tak terlihat", () => {
    expect(bersihkanNama("  Dita   Ayu \n")).toBe("Dita Ayu");
    expect(bersihkanNama("Di​ta\u0000")).toBe("Dita");
  });

  it("masukan bukan teks menjadi kosong", () => {
    expect(bersihkanNama(undefined)).toBe("");
    expect(bersihkanNama(42)).toBe("");
  });
});

describe("periksaPanjangNama", () => {
  it("menerima 2 sampai 20 karakter", () => {
    expect(periksaPanjangNama("Di")).toBeNull();
    expect(periksaPanjangNama("a".repeat(20))).toBeNull();
  });

  it("menolak yang terlalu pendek atau terlalu panjang", () => {
    expect(periksaPanjangNama("")).toBe("pendek");
    expect(periksaPanjangNama("A")).toBe("pendek");
    expect(periksaPanjangNama("a".repeat(21))).toBe("panjang");
  });

  it("menghitung per karakter, bukan per byte", () => {
    expect(periksaPanjangNama("😀😀")).toBeNull();
  });
});
