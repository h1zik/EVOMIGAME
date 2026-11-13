import type { Metadata } from "next";
import { DAFTAR_VARIAN } from "@content/varian";
import { BalonObrolan } from "@/components/BalonObrolan";
import { Kartu } from "@/components/Kartu";
import { Komposisi } from "@/components/Komposisi";
import { Logo } from "@/components/Logo";
import { Maskot } from "@/components/Maskot";
import { Tombol, TombolTautan } from "@/components/Tombol";

export const metadata: Metadata = {
  title: "Contoh komponen",
  robots: { index: false },
};

/** Halaman contoh komponen dasar. Hanya untuk pengecekan, tidak ditautkan dari game. */
export default function HalamanContoh() {
  const contohPersen = { purpose: 33, peaceful: 22, rebel: 34, sweet: 11 };

  return (
    <main className="flex flex-1 flex-col gap-6 px-5 py-6">
      <header className="flex items-center justify-between">
        <Logo putih tinggi={24} />
        <span className="label-kecil">Contoh komponen</span>
      </header>

      <h1 className="text-center text-4xl leading-tight font-bold">Judul tebal di atas biru</h1>

      <div className="grid gap-3">
        <Tombol gaya="putih">Tombol utama</Tombol>
        <Tombol gaya="garis">Tombol kedua</Tombol>
      </div>

      <Kartu>
        <p className="label-kecil text-teks-redup">Maskot</p>
        <ul className="mt-3 grid grid-cols-2 gap-3">
          {DAFTAR_VARIAN.map((v) => (
            <li key={v.id} className="rounded-[20px] bg-biru-muda p-3 text-center">
              <Maskot varian={v} ukuran={88} className="mx-auto" />
              <p className="mt-1 font-bold">{v.namaTampil}</p>
              <p className="text-sm text-teks-redup">{v.deskripsiSingkat}</p>
            </li>
          ))}
        </ul>
      </Kartu>

      <Kartu>
        <p className="label-kecil text-teks-redup">Komposisi</p>
        <div className="mt-3">
          <Komposisi persen={contohPersen} />
        </div>
      </Kartu>

      <Kartu>
        <p className="label-kecil text-teks-redup">Balon obrolan</p>
        <div className="mt-3 grid gap-4">
          <BalonObrolan
            kalimat="Dekat kamu tuh rasanya adem."
            pengirim="Dita"
            varian={DAFTAR_VARIAN[1]}
          />
          <BalonObrolan
            kalimat="Kamu lebih berani dari yang kamu kira."
            pengirim="Seorang teman"
            varian={DAFTAR_VARIAN[2]}
          />
        </div>
      </Kartu>

      <Kartu>
        <p className="label-kecil text-teks-redup">Tombol di atas putih</p>
        <div className="mt-3 grid gap-3">
          <Tombol gaya="biru">Tombol utama</Tombol>
          <Tombol gaya="garis-biru">Tombol kedua</Tombol>
          <TombolTautan href="https://shopee.co.id" gaya="shopee" keluar>
            Lihat di Shopee
          </TombolTautan>
        </div>
      </Kartu>
    </main>
  );
}
