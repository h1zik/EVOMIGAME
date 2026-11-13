"use server";

import { cariKartu } from "@content/kartu";
import { PENGATURAN } from "@content/pengaturan";
import { TEKS } from "@content/teks";
import { cariVarianDariKode, ID_VARIAN } from "@content/varian";
import type { Jawaban } from "@/lib/db/schema";
import { catatEvent, rapikanSrc } from "@/lib/event";
import { POLA_KODE_PUBLIK } from "@/lib/id";
import { mengandungKataKasar } from "@/lib/kataKasar";
import { bersihkanNama, periksaPanjangNama } from "@/lib/nama";
import { simpanPemainBaru } from "@/lib/pemain";
import { hashPerangkat, POLA_ID_PERANGKAT } from "@/lib/perangkat";
import { dalamBatas } from "@/lib/rateLimit";
import { hitungPoin } from "@/lib/skor";

export type HasilBuatPemain = { ok: true; token: string; kode: string } | { ok: false; pesan: string };

type Masukan = {
  nama: string;
  jawaban: Jawaban[];
  idPerangkat: string;
  /** Sumber kedatangan dari ?src= (tiktok, ig, qr-box, booth, teman). */
  src?: string | null;
  /** Kode publik pemain yang mengajak, kalau datang dari halaman teman. */
  kodePengajak?: string | null;
};

/** Memeriksa jawaban: jumlahnya pas, kartunya ada dan berbeda, pilihannya memang ada di kartu itu. */
function jawabanSah(jawaban: unknown): jawaban is Jawaban[] {
  if (!Array.isArray(jawaban) || jawaban.length !== PENGATURAN.jumlahKartu) return false;
  const terpakai = new Set<string>();
  for (const j of jawaban) {
    if (!j || typeof j.idKartu !== "string" || typeof j.idVarian !== "string") return false;
    const kartu = cariKartu(j.idKartu);
    if (!kartu || terpakai.has(kartu.id)) return false;
    const adaDiKartu = Object.keys(kartu.pilihan).some((kode) => cariVarianDariKode(kode)?.id === j.idVarian);
    if (!adaDiKartu) return false;
    terpakai.add(kartu.id);
  }
  return true;
}

/** Memeriksa nama di awal, supaya pemain tidak baru tahu namanya ditolak setelah menjawab semua kartu. */
export async function periksaNama(mentah: string): Promise<{ ok: true; nama: string } | { ok: false; pesan: string }> {
  if (!(await dalamBatas("event"))) return { ok: false, pesan: TEKS.galat.terlaluSering };
  const nama = bersihkanNama(mentah);
  const galatNama = periksaPanjangNama(nama);
  if (galatNama === "pendek") return { ok: false, pesan: TEKS.galat.namaPendek };
  if (galatNama === "panjang") return { ok: false, pesan: TEKS.galat.namaPanjang };
  if (mengandungKataKasar(nama)) return { ok: false, pesan: TEKS.galat.namaKasar };
  return { ok: true, nama };
}

export async function buatPemain(masukan: Masukan): Promise<HasilBuatPemain> {
  if (!(await dalamBatas("buatPemain"))) return { ok: false, pesan: TEKS.galat.terlaluSering };

  const nama = bersihkanNama(masukan?.nama);
  const galatNama = periksaPanjangNama(nama);
  if (galatNama === "pendek") return { ok: false, pesan: TEKS.galat.namaPendek };
  if (galatNama === "panjang") return { ok: false, pesan: TEKS.galat.namaPanjang };
  if (mengandungKataKasar(nama)) return { ok: false, pesan: TEKS.galat.namaKasar };

  if (!jawabanSah(masukan?.jawaban)) return { ok: false, pesan: TEKS.galat.umum };
  if (typeof masukan.idPerangkat !== "string" || !POLA_ID_PERANGKAT.test(masukan.idPerangkat)) {
    return { ok: false, pesan: TEKS.galat.umum };
  }

  const jawaban = masukan.jawaban.map((j) => ({ idKartu: j.idKartu, idVarian: j.idVarian }));
  const skorSendiri = hitungPoin(
    jawaban.map((j) => j.idVarian),
    ID_VARIAN,
    PENGATURAN.poinDasar,
  );
  const src = rapikanSrc(masukan.src);
  const kodePengajak =
    typeof masukan.kodePengajak === "string" && POLA_KODE_PUBLIK.test(masukan.kodePengajak)
      ? masukan.kodePengajak
      : null;

  try {
    const { id, token, kode } = await simpanPemainBaru({
      namaPanggilan: nama,
      jawaban,
      skorSendiri,
      sidikPembuat: hashPerangkat(masukan.idPerangkat),
      src,
      kodePengajak,
    });
    await catatEvent("selesai_kuis", { playerId: id, data: src ? { src } : null });
    if (src === "teman") {
      await catatEvent("teman_jadi_pemain", { playerId: id, data: kodePengajak ? { kodePengajak } : null });
    }
    return { ok: true, token, kode };
  } catch (galat) {
    console.error("[buatPemain] gagal menyimpan", galat);
    return { ok: false, pesan: TEKS.galat.umum };
  }
}
