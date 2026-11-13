"use server";

import { cariKalimat } from "@content/kalimat";
import { PENGATURAN } from "@content/pengaturan";
import { cariVarian } from "@content/varian";
import { catatEvent } from "@/lib/event";
import { mengandungKataKasar } from "@/lib/kataKasar";
import { bersihkanNama } from "@/lib/nama";
import { ambilPemainDariKode, jumlahResponsTeman, simpanResponsTeman } from "@/lib/pemain";
import { hashPerangkat, POLA_ID_PERANGKAT } from "@/lib/perangkat";
import { dalamBatas } from "@/lib/rateLimit";

/**
 * sudah: perangkat ini sudah mengisi untuk pemain itu.
 * sendiri: ini link milik pemain itu sendiri.
 * penuh: batas respons sudah tercapai.
 * tidak-ada: pemain tidak ditemukan.
 * nama: nama panggilan teman tidak lolos filter.
 * sering: terlalu banyak percobaan dari pengunjung ini.
 * galat: masukan tidak sah atau penyimpanan gagal.
 */
export type HasilKirimRespons =
  | { ok: true }
  | { ok: false; alasan: "sudah" | "sendiri" | "penuh" | "tidak-ada" | "nama" | "sering" | "galat" };

type Masukan = {
  kode: string;
  pilihan: string[];
  idKalimat: string;
  namaTeman: string;
  idPerangkat: string;
};

export async function kirimRespons(masukan: Masukan): Promise<HasilKirimRespons> {
  const gagal = { ok: false, alasan: "galat" } as const;
  if (!masukan || typeof masukan.kode !== "string") return gagal;
  if (!(await dalamBatas("kirimRespons"))) return { ok: false, alasan: "sering" };

  // Tepat dua versi yang berbeda dan memang ada.
  const pilihan = Array.isArray(masukan.pilihan) ? masukan.pilihan : [];
  if (
    pilihan.length !== PENGATURAN.jumlahPilihanTeman ||
    new Set(pilihan).size !== pilihan.length ||
    !pilihan.every((id) => typeof id === "string" && cariVarian(id))
  ) {
    return gagal;
  }

  // Kalimat harus dari daftar, dan harus milik salah satu versi yang dipilih.
  const kalimat = typeof masukan.idKalimat === "string" ? cariKalimat(masukan.idKalimat) : undefined;
  if (!kalimat || !pilihan.some((id) => cariVarian(id)?.kode === kalimat.kode)) return gagal;

  if (typeof masukan.idPerangkat !== "string" || !POLA_ID_PERANGKAT.test(masukan.idPerangkat)) return gagal;

  // Nama teman opsional. Kalau terlalu panjang, dipotong sesuai batas. Kata kasar ditolak.
  const namaBersih = [...bersihkanNama(masukan.namaTeman)].slice(0, PENGATURAN.namaMaks).join("").trim();
  if (namaBersih && mengandungKataKasar(namaBersih)) return { ok: false, alasan: "nama" };

  try {
    const pemain = await ambilPemainDariKode(masukan.kode);
    if (!pemain) return { ok: false, alasan: "tidak-ada" };

    const sidik = hashPerangkat(masukan.idPerangkat);
    if (pemain.sidikPembuat && pemain.sidikPembuat === sidik) return { ok: false, alasan: "sendiri" };

    const sebelum = await jumlahResponsTeman(pemain.id);
    if (sebelum >= PENGATURAN.maksRespons) return { ok: false, alasan: "penuh" };

    const tersimpan = await simpanResponsTeman({
      playerId: pemain.id,
      pilihanVarian: pilihan,
      idKalimat: kalimat.id,
      namaTeman: namaBersih || null,
      sidikPerangkat: sidik,
    });
    if (!tersimpan) return { ok: false, alasan: "sudah" };

    await catatEvent("teman_kirim", { playerId: pemain.id });
    // Dicatat sekali saja, tepat saat respons ini membuat hasilnya terbuka.
    if (sebelum + 1 === PENGATURAN.ambangBuka) await catatEvent("hasil_terbuka", { playerId: pemain.id });
    return { ok: true };
  } catch (galat) {
    console.error("[kirimRespons] gagal menyimpan", galat);
    return gagal;
  }
}
