import type { Metadata } from "next";
import Link from "next/link";
import { isi, TEKS } from "@content/teks";
import { HapusData } from "@/components/HapusData";
import { HasilTerbuka } from "@/components/HasilTerbuka";
import { Kartu } from "@/components/Kartu";
import { Komposisi } from "@/components/Komposisi";
import { LinkHasil } from "@/components/LinkHasil";
import { Logo } from "@/components/Logo";
import { SegarkanOtomatis } from "@/components/SegarkanOtomatis";
import { TawaranWhatsapp } from "@/components/TawaranWhatsapp";
import { TemanTerkunci } from "@/components/TemanTerkunci";
import { TombolTautan } from "@/components/Tombol";
import { TombolUnduh } from "@/components/TombolUnduh";
import { ringkasHasil } from "@/lib/hasil";
import { ambilPemainDariToken, ambilResponsTeman } from "@/lib/pemain";
import { alamatDasar } from "@/lib/url";

export const dynamic = "force-dynamic";

// Halaman ini rahasia: tidak boleh diindeks, dan alamatnya tidak boleh ikut terkirim ke situs lain.
export const metadata: Metadata = {
  title: "Hasilmu",
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function HalamanHasil({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const pemain = await ambilPemainDariToken(token);

  if (!pemain) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <Logo putih tinggi={24} />
        <h1 className="mt-8 max-w-[20rem] text-2xl leading-snug font-bold text-balance">
          {TEKS.hasil.tidakDitemukan}
        </h1>
        <TombolTautan href="/main" gaya="putih" className="mt-8">
          {TEKS.hasil.mainDariAwal}
        </TombolTautan>
      </main>
    );
  }

  const [respons, dasar] = await Promise.all([ambilResponsTeman(pemain.id), alamatDasar()]);
  const ringkasan = ringkasHasil(pemain, respons);
  const linkTeman = `${dasar}/t/${pemain.kodePublik}`;
  const linkHasil = `${dasar}/hasil/${pemain.tokenRahasia}`;

  return (
    <main className="langit flex flex-1 flex-col gap-5 px-5 pt-6 pb-10">
      <header className="flex justify-center">
        <Link href="/" aria-label="EVOMI, ke halaman awal" className="rounded-md">
          <Logo putih tinggi={24} />
        </Link>
      </header>

      <h1 className="mt-2 text-center text-[2.25rem] leading-[1.05] font-bold text-balance break-words">
        {isi(ringkasan.terbuka ? TEKS.hasil.judulTeman : TEKS.hasil.judulSendiri, { nama: pemain.namaPanggilan })}
      </h1>

      {ringkasan.terbuka ? (
        <HasilTerbuka
          nama={pemain.namaPanggilan}
          kode={pemain.kodePublik}
          ringkasan={ringkasan}
          respons={respons}
          linkTeman={linkTeman}
        />
      ) : (
        <>
          <Kartu>
            <Komposisi persen={ringkasan.persenSendiri} />
          </Kartu>
          <TemanTerkunci jumlahTeman={respons.length} linkTeman={linkTeman} kode={pemain.kodePublik} />
        </>
      )}

      <SegarkanOtomatis />

      <div className="mt-2">
        <TombolUnduh token={pemain.tokenRahasia} kode={pemain.kodePublik} />
      </div>

      <TawaranWhatsapp token={pemain.tokenRahasia} sudahTersimpan={Boolean(pemain.noWhatsapp)} />

      <div className="mt-3">
        <LinkHasil
          linkHasil={linkHasil}
          token={pemain.tokenRahasia}
          kode={pemain.kodePublik}
          nama={pemain.namaPanggilan}
        />
      </div>

      <p className="mx-auto mt-3 max-w-[20rem] text-center text-pretty">{TEKS.hasil.catatan}</p>

      <div className="mt-6 border-t border-putih/30 pt-6">
        <HapusData token={pemain.tokenRahasia} />
        <p className="mt-6 text-center">
          <Link href="/privasi" className="inline-block min-h-11 px-3 py-2.5 font-semibold underline underline-offset-4">
            {TEKS.kaki.privasi}
          </Link>
        </p>
      </div>
    </main>
  );
}
