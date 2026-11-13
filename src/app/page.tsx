import { DAFTAR_VARIAN } from "@content/varian";
import { TEKS } from "@content/teks";
import { Logo } from "@/components/Logo";
import { Maskot } from "@/components/Maskot";
import { TautanHasilku } from "@/components/TautanHasilku";
import Link from "next/link";
import { TombolTautan } from "@/components/Tombol";

export default function HalamanAwal() {
  return (
    <main className="langit flex flex-1 flex-col px-5 pt-6 pb-8">
      <header className="flex justify-center">
        <Logo putih tinggi={26} />
      </header>

      <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
        {/* Keempat versi sejajar dan sama besar: belum ada yang lebih menonjol. */}
        {/* Alas terang supaya maskot biru tetap terbaca di atas latar biru. */}
        <div
          className="flex w-full max-w-[340px] items-center justify-center rounded-[28px] bg-biru-muda px-3 py-5"
          aria-hidden="true"
        >
          {DAFTAR_VARIAN.map((v) => (
            <Maskot key={v.id} varian={v} hias berdiri className="h-auto w-1/4 px-1.5" />
          ))}
        </div>

        <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-bold tracking-[-0.01em] text-balance">
          {TEKS.awal.judul}
        </h1>
        <p className="mt-4 max-w-[19rem] text-lg leading-snug font-semibold text-pretty">
          {TEKS.awal.penjelasan}
        </p>
      </div>

      <div>
        <TombolTautan href="/main" gaya="putih">
          {TEKS.awal.tombolMulai}
        </TombolTautan>
        <TautanHasilku />
        <p className="mt-4 text-center">{TEKS.awal.catatan}</p>
        <p className="text-center">
          <Link href="/privasi" className="inline-block min-h-11 px-3 py-2.5 font-semibold underline underline-offset-4">
            {TEKS.kaki.privasi}
          </Link>
        </p>
      </div>
    </main>
  );
}
