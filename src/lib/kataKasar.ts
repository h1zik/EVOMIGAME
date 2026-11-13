import { KATA_KASAR_POTONGAN, KATA_KASAR_UTUH } from "@content/kata-kasar";

// Angka dan simbol yang sering dipakai untuk menyamarkan huruf.
const SAMARAN: Record<string, string> = {
  "0": "o",
  "1": "i",
  "3": "e",
  "4": "a",
  "5": "s",
  "7": "t",
  "8": "b",
  "@": "a",
  $: "s",
  "!": "i",
};

/** Huruf berulang dijadikan satu: "anjiiing" menjadi "anjing". */
const rapatkan = (teks: string) => teks.replace(/(.)\1+/g, "$1");

const POTONGAN = KATA_KASAR_POTONGAN.map(rapatkan);
const UTUH = new Set(KATA_KASAR_UTUH.map(rapatkan));

function sederhanakan(teks: string): string {
  return teks
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[0134578@$!]/g, (c) => SAMARAN[c] ?? c);
}

/** true kalau nama mengandung kata kasar dari content/kata-kasar.ts. */
export function mengandungKataKasar(nama: string): boolean {
  const sederhana = sederhanakan(nama);
  const kata = sederhana
    .split(/[^a-z]+/)
    .filter(Boolean)
    .map(rapatkan);
  // Semua huruf digabung, untuk menangkap kata yang dipisah spasi atau tanda baca.
  const gabungan = rapatkan(sederhana.replace(/[^a-z]/g, ""));

  if (POTONGAN.some((k) => gabungan.includes(k))) return true;
  if (kata.some((k) => UTUH.has(k))) return true;
  return UTUH.has(gabungan);
}
