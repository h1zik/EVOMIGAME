import type { Metadata } from "next";
import { DAFTAR_KARTU } from "@content/kartu";
import { PENGATURAN } from "@content/pengaturan";
import { cariVarianDariKode } from "@content/varian";
import { AlurMain, type KartuTampil } from "./AlurMain";

export const metadata: Metadata = { title: "Main" };

// Kartu diacak tiap kali halaman dibuka, jadi tidak boleh disimpan sebagai halaman statis.
export const dynamic = "force-dynamic";

function acak<T>(daftar: readonly T[]): T[] {
  const hasil = [...daftar];
  for (let i = hasil.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [hasil[i], hasil[j]] = [hasil[j], hasil[i]];
  }
  return hasil;
}

export default function HalamanMain() {
  // Ambil beberapa kartu secara acak, lalu acak juga urutan pilihannya.
  // Yang dikirim ke layar hanya teks pilihan dan id varian. Nama varian tidak ikut.
  const kartu: KartuTampil[] = acak(DAFTAR_KARTU)
    .slice(0, PENGATURAN.jumlahKartu)
    .map((k) => ({
      id: k.id,
      situasi: k.situasi,
      pilihan: acak(
        Object.entries(k.pilihan).flatMap(([kode, teks]) => {
          const varian = cariVarianDariKode(kode);
          return varian ? [{ idVarian: varian.id, teks }] : [];
        }),
      ),
    }));

  return <AlurMain kartu={kartu} />;
}
