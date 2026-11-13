import { ImageResponse } from "next/og";
import { TEKS } from "@content/teks";
import { ringkasHasil } from "@/lib/hasil";
import { ambilAsetKartu } from "@/lib/kartu/aset";
import { KartuHasil, UKURAN_KARTU } from "@/lib/kartu/KartuHasil";
import { ambilPemainDariToken, ambilResponsTeman } from "@/lib/pemain";
import { dalamBatas } from "@/lib/rateLimit";
import { alamatDasar } from "@/lib/url";

export const dynamic = "force-dynamic";

/**
 * Kartu hasil 1080 x 1920 (PNG) milik pemain dengan token ini.
 * Sebelum terbuka: "versi menurutku" dan ajakan mengisi.
 * Sesudah terbuka: perbandingan lengkap dan kalimat sorotan.
 * Tidak pernah memakai foto pengguna, hanya logo, maskot, nama panggilan, dan angka.
 */
export async function GET(_permintaan: Request, { params }: { params: Promise<{ token: string }> }) {
  if (!(await dalamBatas("kartu"))) return new Response("Terlalu banyak permintaan. Coba lagi sebentar lagi.", { status: 429 });
  const { token } = await params;
  const pemain = await ambilPemainDariToken(token);
  if (!pemain) return new Response("Kartu tidak ditemukan.", { status: 404 });

  try {
    const [respons, aset, dasar] = await Promise.all([ambilResponsTeman(pemain.id), ambilAsetKartu(), alamatDasar()]);
    const ringkasan = ringkasHasil(pemain, respons);

    return new ImageResponse(
      (
        <KartuHasil
          aset={aset}
          data={{
            nama: pemain.namaPanggilan,
            persenSendiri: ringkasan.persenSendiri,
            persenTeman: ringkasan.persenTeman,
            kalimat: ringkasan.kalimatSorotan ?? TEKS.kartu.ajakan,
            alamat: dasar.replace(/^https?:\/\//, ""),
          }}
        />
      ),
      {
        ...UKURAN_KARTU,
        fonts: aset.fon,
        headers: {
          // Isinya berubah tiap ada teman baru, dan alamatnya rahasia: jangan disimpan di cache bersama.
          "Cache-Control": "private, no-store",
          "Content-Disposition": 'inline; filename="versiku-kata-kamu.png"',
        },
      },
    );
  } catch (galat) {
    console.error("[kartu] gagal membuat gambar", galat);
    return new Response("Kartu belum bisa dibuat. Coba lagi sebentar lagi.", { status: 500 });
  }
}
