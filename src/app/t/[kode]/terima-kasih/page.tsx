import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { isi, TEKS } from "@content/teks";
import { DAFTAR_VARIAN } from "@content/varian";
import { Logo } from "@/components/Logo";
import { Maskot } from "@/components/Maskot";
import { TombolTautan } from "@/components/Tombol";
import { ambilPemainDariKode } from "@/lib/pemain";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Terkirim", robots: { index: false } };

export default async function HalamanTerimaKasih({ params }: { params: Promise<{ kode: string }> }) {
  const { kode } = await params;
  const pemain = await ambilPemainDariKode(kode);
  const nama = pemain?.namaPanggilan ?? "Temanmu";
  // Pemain baru dari sini dicatat datang dari ajakan teman, beserta kode pengajaknya.
  const tautanMain = pemain ? `/main?src=teman&dari=${pemain.kodePublik}` : "/main?src=teman";

  return (
    <main className="langit flex flex-1 flex-col px-5 pt-6 pb-8">
      <header className="flex justify-center">
        <Link href="/" aria-label="EVOMI, ke halaman awal" className="rounded-md">
          <Logo putih tinggi={24} />
        </Link>
      </header>

      <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
        <div
          className="flex w-full max-w-[340px] items-center justify-center rounded-[28px] bg-biru-muda px-3 py-5"
          aria-hidden="true"
        >
          {DAFTAR_VARIAN.map((v, i) => (
            <Maskot
              key={v.id}
              varian={v}
              hias
              berdiri
              className="anim-lompat-dua h-auto w-1/4 px-1.5"
              style={{ "--tunda": `${200 + i * 140}ms` } as CSSProperties}
            />
          ))}
        </div>
        <h1
          className="anim-muncul mt-6 max-w-[21rem] text-[2rem] leading-[1.1] font-bold text-balance break-words"
          style={{ "--tunda": "150ms" } as CSSProperties}
        >
          {isi(TEKS.teman.terimaKasih, { nama })}
        </h1>
      </div>

      <TombolTautan href={tautanMain} gaya="putih">
        {TEKS.teman.ajakan}
      </TombolTautan>
    </main>
  );
}
