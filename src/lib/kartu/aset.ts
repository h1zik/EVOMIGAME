import { readFile } from "node:fs/promises";
import path from "node:path";
import { DAFTAR_VARIAN } from "@content/varian";

/**
 * Aset untuk gambar yang dibuat di server (kartu hasil dan pratinjau link).
 * Pembuat gambar tidak membaca CSS variables, jadi warna brand ditulis ulang di sini.
 * Nilainya harus sama dengan token di src/app/globals.css.
 */
export const WARNA = {
  biru: "#1172BA",
  biruTua: "#08324F",
  biruLangit: "#3E97D6",
  biruMuda: "#E8F3FB",
  biruGaris: "#CFE3F3",
  putih: "#FFFFFF",
  teks: "#0F172A",
  teksRedup: "#3D5A70",
} as const;

const publik = (...bagian: string[]) => path.join(process.cwd(), "public", ...bagian);

export type GambarAset = { src: string; lebar: number; tinggi: number };

type Fon = { name: string; data: ArrayBuffer; weight: 400 | 600 | 700; style: "normal" };

let janjiFon: Promise<Fon[]> | null = null;
const janjiGambar = new Map<string, Promise<GambarAset>>();

async function bacaFon(file: string, weight: Fon["weight"]): Promise<Fon> {
  const isi = await readFile(publik("fonts", file));
  return {
    name: "Nohemi",
    data: isi.buffer.slice(isi.byteOffset, isi.byteOffset + isi.byteLength) as ArrayBuffer,
    weight,
    style: "normal",
  };
}

/** Font Nohemi untuk gambar. Dibaca sekali lalu disimpan di memori. */
export function ambilFon(): Promise<Fon[]> {
  janjiFon ??= Promise.all([
    bacaFon("Nohemi-Regular.otf", 400),
    bacaFon("Nohemi-SemiBold.otf", 600),
    bacaFon("Nohemi-Bold.otf", 700),
  ]).catch((galat) => {
    janjiFon = null;
    throw galat;
  });
  return janjiFon;
}

/** Membaca PNG dari /public sebagai data URI, beserta ukuran aslinya (dari kepala file PNG). */
export function ambilGambar(jalurPublik: string): Promise<GambarAset> {
  let janji = janjiGambar.get(jalurPublik);
  if (!janji) {
    janji = readFile(publik(...jalurPublik.split("/").filter(Boolean))).then((isi) => {
      const png = isi.subarray(1, 4).toString("latin1") === "PNG";
      if (!png) throw new Error(`Gambar untuk kartu harus PNG: ${jalurPublik}`);
      return {
        src: `data:image/png;base64,${isi.toString("base64")}`,
        lebar: isi.readUInt32BE(16),
        tinggi: isi.readUInt32BE(20),
      };
    });
    janji.catch(() => janjiGambar.delete(jalurPublik));
    janjiGambar.set(jalurPublik, janji);
  }
  return janji;
}

export type AsetKartu = {
  fon: Fon[];
  logoPutih: GambarAset;
  maskot: Record<string, GambarAset>;
};

export async function ambilAsetKartu(): Promise<AsetKartu> {
  const [fon, logoPutih, daftarMaskot] = await Promise.all([
    ambilFon(),
    ambilGambar("/logo/evomi-logo-putih.png"),
    Promise.all(DAFTAR_VARIAN.map((v) => ambilGambar(v.maskot))),
  ]);
  const maskot: Record<string, GambarAset> = {};
  DAFTAR_VARIAN.forEach((v, i) => (maskot[v.id] = daftarMaskot[i]));
  return { fon, logoPutih, maskot };
}
