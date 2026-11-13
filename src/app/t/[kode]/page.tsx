import type { Metadata } from "next";
import { PENGATURAN } from "@content/pengaturan";
import { isi, TEKS } from "@content/teks";
import { Logo } from "@/components/Logo";
import { TombolTautan } from "@/components/Tombol";
import { ambilPemainDariKode, jumlahResponsTeman } from "@/lib/pemain";
import { alamatDasar } from "@/lib/url";
import { AlurTeman } from "./AlurTeman";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ kode: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kode } = await params;
  const pemain = await ambilPemainDariKode(kode);
  if (!pemain) return { title: TEKS.namaGame, robots: { index: false } };
  const judul = isi(TEKS.teman.judulPratinjau, { nama: pemain.namaPanggilan });
  const keterangan = TEKS.teman.keteranganPratinjau;
  return {
    // Alamat gambar pratinjau harus lengkap, jadi dasarnya diambil dari alamat game yang sebenarnya.
    metadataBase: new URL(await alamatDasar()),
    title: { absolute: judul },
    description: keterangan,
    robots: { index: false },
    openGraph: { title: judul, description: keterangan, siteName: TEKS.namaGame, type: "website", locale: "id_ID" },
    twitter: { card: "summary_large_image", title: judul, description: keterangan },
  };
}

/** Layar pesan sederhana untuk link yang tidak ditemukan atau sudah penuh. */
function Pesan({ teks }: { teks: string }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
      <Logo putih tinggi={24} />
      <h1 className="mt-8 max-w-[20rem] text-2xl leading-snug font-bold text-balance">{teks}</h1>
      <TombolTautan href="/main?src=teman" gaya="putih" className="mt-8">
        {TEKS.teman.ajakan}
      </TombolTautan>
    </main>
  );
}

export default async function HalamanTeman({ params }: Props) {
  const { kode } = await params;
  const pemain = await ambilPemainDariKode(kode);
  if (!pemain) return <Pesan teks={TEKS.teman.tidakDitemukan} />;

  if ((await jumlahResponsTeman(pemain.id)) >= PENGATURAN.maksRespons) {
    return <Pesan teks={isi(TEKS.teman.penuh, { nama: pemain.namaPanggilan })} />;
  }

  // Yang dikirim ke layar hanya kode publik dan nama panggilan. Token hasil tidak pernah ikut.
  return <AlurTeman kode={pemain.kodePublik} nama={pemain.namaPanggilan} />;
}
