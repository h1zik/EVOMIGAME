import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { TEKS } from "@content/teks";
import { cariVarian, DAFTAR_VARIAN } from "@content/varian";
import { DeretVarian } from "@/components/DeretVarian";
import { Kartu } from "@/components/Kartu";
import { Logo } from "@/components/Logo";
import { Maskot } from "@/components/Maskot";
import { TautanHasilku } from "@/components/TautanHasilku";
import { TombolTautan } from "@/components/Tombol";
import { TombolKeluar } from "@/components/TombolKeluar";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return DAFTAR_VARIAN.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const varian = cariVarian(id);
  if (!varian) return { title: TEKS.namaGame };
  return { title: varian.namaTampil, description: varian.deskripsiAroma };
}

/** Halaman singkat satu varian: maskot, kesan aroma, dan tombol ke toko atau waitlist. */
export default async function HalamanVersi({ params }: Props) {
  const { id } = await params;
  const varian = cariVarian(id);

  if (!varian) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <Logo putih tinggi={24} />
        <h1 className="mt-8 text-2xl font-bold">{TEKS.versi.tidakDitemukan}</h1>
        <TombolTautan href="/" gaya="putih" className="mt-8">
          {TEKS.namaGame}
        </TombolTautan>
      </main>
    );
  }

  const warna = {
    "--v": `var(--v-${varian.id})`,
    "--v-muda": `var(--v-${varian.id}-muda)`,
  } as CSSProperties;

  return (
    <main className="langit flex flex-1 flex-col gap-5 px-5 pt-6 pb-10">
      <header className="flex justify-center">
        <Link href="/" aria-label="EVOMI, ke halaman awal" className="rounded-md">
          <Logo putih tinggi={24} />
        </Link>
      </header>

      <Kartu>
        <div style={warna}>
          <div className="grid place-items-center rounded-[20px] bg-v-muda px-6 py-7">
            <Maskot varian={varian} ukuran={168} />
          </div>
          <h1 className="mt-5 text-[2rem] leading-[1.05] font-bold">{varian.namaTampil}</h1>
          <p className="mt-2 text-lg leading-snug text-pretty">{varian.deskripsiAroma}</p>

          {varian.teksPenawaran ? (
            <p className="mt-4 rounded-[16px] bg-v-muda px-4 py-3 font-semibold text-pretty">{varian.teksPenawaran}</p>
          ) : null}
          {!varian.tersedia ? <p className="mt-4 text-teks-redup">{TEKS.versi.belumTersedia}</p> : null}

          <div className="mt-5">
            <TombolKeluar idVarian={varian.id} tersedia={varian.tersedia} />
          </div>
        </div>
      </Kartu>

      <Kartu>
        <h2 className="text-lg font-bold">{TEKS.hasil.semuaVersi}</h2>
        <div className="mt-3">
          <DeretVarian idAktif={varian.id} />
        </div>
      </Kartu>

      <div>
        <TombolTautan href="/main" gaya="putih">
          {TEKS.versi.tombolMain}
        </TombolTautan>
        <TautanHasilku />
      </div>
    </main>
  );
}
