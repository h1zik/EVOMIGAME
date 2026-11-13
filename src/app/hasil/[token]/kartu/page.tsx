import type { Metadata } from "next";
import { isi, TEKS } from "@content/teks";
import { Logo } from "@/components/Logo";
import { TombolTautan } from "@/components/Tombol";
import { ambilPemainDariToken } from "@/lib/pemain";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: TEKS.kartu.judulHalaman,
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

/**
 * Halaman gambar kartu hasil. Cadangan untuk browser dalam aplikasi yang menolak unduhan:
 * di sini gambar tampil utuh dan bisa ditekan lama untuk disimpan.
 */
export default async function HalamanKartu({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const pemain = await ambilPemainDariToken(token);

  if (!pemain) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <Logo putih tinggi={24} />
        <h1 className="mt-8 max-w-[20rem] text-2xl leading-snug font-bold text-balance">{TEKS.hasil.tidakDitemukan}</h1>
        <TombolTautan href="/main" gaya="putih" className="mt-8">
          {TEKS.hasil.mainDariAwal}
        </TombolTautan>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-5 px-5 pt-6 pb-10">
      <h1 className="text-center text-2xl leading-tight font-bold">{TEKS.kartu.judulHalaman}</h1>
      <p className="mx-auto max-w-[21rem] text-center text-pretty">{TEKS.kartu.petunjukSimpan}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/api/kartu/${pemain.tokenRahasia}`}
        alt={isi(TEKS.kartu.altGambar, { nama: pemain.namaPanggilan })}
        width={1080}
        height={1920}
        className="mx-auto h-auto w-full max-w-[360px] rounded-[28px] border-2 border-putih/40"
      />
      <TombolTautan href={`/hasil/${pemain.tokenRahasia}`} gaya="garis" ukuran="ringkas">
        {TEKS.kartu.kembali}
      </TombolTautan>
    </main>
  );
}
