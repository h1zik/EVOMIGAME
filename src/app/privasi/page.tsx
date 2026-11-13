import type { Metadata } from "next";
import Link from "next/link";
import { PENGATURAN } from "@content/pengaturan";
import { PRIVASI } from "@content/privasi";
import { TEKS } from "@content/teks";
import { Kartu } from "@/components/Kartu";
import { Logo } from "@/components/Logo";
import { TautanHasilku } from "@/components/TautanHasilku";
import { TombolTautan } from "@/components/Tombol";

export const metadata: Metadata = { title: PRIVASI.judul, description: PRIVASI.pembuka };

/** Butir yang memuat {kontak} ditampilkan dengan link ke kontak di content/pengaturan.ts. */
function Butir({ teks }: { teks: string }) {
  const [awal, akhir] = teks.split("{kontak}");
  if (akhir === undefined) return <>{teks}</>;
  return (
    <>
      {awal}
      <a
        href={PENGATURAN.kontakPrivasi.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-biru underline underline-offset-4"
      >
        {PENGATURAN.kontakPrivasi.nama}
      </a>
      {akhir}
    </>
  );
}

export default function HalamanPrivasi() {
  return (
    <main className="flex flex-1 flex-col gap-5 px-5 pt-6 pb-10">
      <header className="flex justify-center">
        <Link href="/" aria-label="EVOMI, ke halaman awal" className="rounded-md">
          <Logo putih tinggi={24} />
        </Link>
      </header>

      <h1 className="mt-2 text-center text-[2rem] leading-[1.1] font-bold">{PRIVASI.judul}</h1>
      <p className="mx-auto max-w-[22rem] text-center text-pretty">{PRIVASI.pembuka}</p>

      <Kartu>
        <div className="grid gap-6">
          {PRIVASI.bagian.map((b) => (
            <section key={b.judul}>
              <h2 className="text-lg leading-tight font-bold">{b.judul}</h2>
              <ul className="mt-2 grid list-disc gap-2 pl-5 leading-snug marker:text-biru">
                {b.butir.map((teks) => (
                  <li key={teks}>
                    <Butir teks={teks} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Kartu>

      <div>
        <TombolTautan href="/" gaya="putih">
          {TEKS.namaGame}
        </TombolTautan>
        <TautanHasilku />
      </div>
    </main>
  );
}
