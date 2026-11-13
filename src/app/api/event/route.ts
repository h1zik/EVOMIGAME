import { cariVarian } from "@content/varian";
import { catatEvent, EVENT_DARI_KLIEN, rapikanSrc, type JenisEvent } from "@/lib/event";
import { POLA_KODE_PUBLIK } from "@/lib/id";
import { ambilPemainDariKode } from "@/lib/pemain";
import { dalamBatas } from "@/lib/rateLimit";

export const dynamic = "force-dynamic";

/**
 * Menerima event dari browser (lihat src/lib/event-klien.ts).
 * Hanya jenis event tertentu yang diterima, dan isinya dibatasi ke beberapa kolom yang dikenal,
 * jadi tidak ada teks bebas dari pengguna yang ikut tersimpan.
 */
export async function POST(permintaan: Request) {
  if (!(await dalamBatas("event"))) return new Response(null, { status: 429 });

  let isi: Record<string, unknown>;
  try {
    const teks = await permintaan.text();
    if (teks.length > 600) return new Response(null, { status: 413 });
    isi = JSON.parse(teks) as Record<string, unknown>;
  } catch {
    return new Response(null, { status: 400 });
  }

  const jenis = isi?.jenis;
  if (typeof jenis !== "string" || !EVENT_DARI_KLIEN.includes(jenis as JenisEvent)) {
    return new Response(null, { status: 400 });
  }

  const data: Record<string, unknown> = {};
  const src = rapikanSrc(isi.src);
  if (src) data.src = src;
  if (typeof isi.idVarian === "string" && cariVarian(isi.idVarian)) data.idVarian = isi.idVarian;
  if (typeof isi.cara === "string" && /^[a-z-]{1,16}$/.test(isi.cara)) data.cara = isi.cara;

  let playerId: string | null = null;
  if (typeof isi.kode === "string" && POLA_KODE_PUBLIK.test(isi.kode)) {
    playerId = (await ambilPemainDariKode(isi.kode))?.id ?? null;
  }

  await catatEvent(jenis as JenisEvent, { playerId, data: Object.keys(data).length ? data : null });
  return new Response(null, { status: 204 });
}
