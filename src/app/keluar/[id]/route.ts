import { NextResponse } from "next/server";
import { cariVarian } from "@content/varian";
import { catatEvent } from "@/lib/event";
import { POLA_KODE_PUBLIK } from "@/lib/id";
import { ambilPemainDariKode } from "@/lib/pemain";
import { dalamBatas } from "@/lib/rateLimit";
import { tambahUtm } from "@/lib/utm";

export const dynamic = "force-dynamic";

/**
 * Pintu keluar ke toko atau waitlist untuk satu varian.
 * Tujuannya selalu diambil dari content/varian.ts (tidak pernah dari alamat yang diminta),
 * ditambah UTM, lalu klik dicatat sebagai klik_toko atau klik_waitlist.
 *
 * tersedia = true  -> urlToko (Shopee)
 * tersedia = false -> urlWaitlist (WhatsApp)
 */
export async function GET(permintaan: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const varian = cariVarian(id);
  if (!varian) return new Response("Versi ini tidak ditemukan.", { status: 404 });

  const keToko = varian.tersedia;
  const tujuan = tambahUtm(keToko ? varian.urlToko : varian.urlWaitlist, varian.id);

  if (await dalamBatas("event")) {
    const kode = new URL(permintaan.url).searchParams.get("p") ?? "";
    const playerId = POLA_KODE_PUBLIK.test(kode) ? ((await ambilPemainDariKode(kode))?.id ?? null) : null;
    await catatEvent(keToko ? "klik_toko" : "klik_waitlist", { playerId, data: { idVarian: varian.id } });
  }

  return NextResponse.redirect(tujuan, {
    status: 302,
    headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" },
  });
}
