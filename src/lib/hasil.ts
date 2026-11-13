import { PENGATURAN } from "@content/pengaturan";
import { isi, TEKS } from "@content/teks";
import { cariVarian, ID_VARIAN } from "@content/varian";
import type { Pemain, ResponsTeman } from "./db/schema";
import { cariSorotan, hitungPoin, kePersen, varianAjakan, type Persen, type Sorotan } from "./skor";

/**
 * Ringkasan hasil seorang pemain, dipakai bersama oleh halaman hasil dan kartu gambar
 * supaya angka dan kalimat sorotannya selalu sama di kedua tempat.
 */
export type RingkasanHasil = {
  terbuka: boolean;
  persenSendiri: Persen;
  /** null selama belum terbuka. */
  persenTeman: Persen | null;
  sorotan: Sorotan | null;
  /** Kalimat sorotan, atau null selama belum terbuka. */
  kalimatSorotan: string | null;
  /** Versi untuk kartu ajakan "Kenalan sama versi ini", atau null selama belum terbuka. */
  idVarianAjakan: string | null;
};

export function ringkasHasil(pemain: Pemain, respons: ResponsTeman[]): RingkasanHasil {
  const persenSendiri = kePersen(pemain.skorSendiri, ID_VARIAN);
  if (respons.length < PENGATURAN.ambangBuka) {
    return { terbuka: false, persenSendiri, persenTeman: null, sorotan: null, kalimatSorotan: null, idVarianAjakan: null };
  }

  const semuaPilihan = respons.flatMap((r) => r.pilihanVarian);
  const persenTeman = kePersen(hitungPoin(semuaPilihan, ID_VARIAN, PENGATURAN.poinDasar), ID_VARIAN);
  const sorotan = cariSorotan(persenSendiri, persenTeman, ID_VARIAN, PENGATURAN.ambangSorotan);
  const varianSorotan = sorotan ? cariVarian(sorotan.idVarian) : undefined;
  const kalimatSorotan = varianSorotan
    ? isi(TEKS.hasil.sorotanBeda, { varian: varianSorotan.namaTampil })
    : TEKS.hasil.sorotanMirip;

  return {
    terbuka: true,
    persenSendiri,
    persenTeman,
    sorotan,
    kalimatSorotan,
    idVarianAjakan: varianAjakan(sorotan, persenTeman, ID_VARIAN),
  };
}
