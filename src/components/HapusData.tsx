"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TEKS } from "@content/teks";
import { hapusData } from "@/app/hasil/[token]/aksi";
import { lupakanHasil } from "@/lib/perangkat-klien";
import { BarisLipat, Ikon, IKON } from "./BarisLipat";
import { Tombol } from "./Tombol";

/**
 * Hapus data sendiri dari halaman hasil. Dua langkah supaya tidak terhapus karena salah tekan:
 * buka baris "Hapus dataku", lalu konfirmasi "Ya, hapus semuanya".
 */
export function HapusData({ token }: { token: string }) {
  const router = useRouter();
  const [yakin, setYakin] = useState(false);
  const [sibuk, setSibuk] = useState(false);
  const [galat, setGalat] = useState<string | null>(null);

  async function hapus() {
    if (sibuk) return;
    setSibuk(true);
    setGalat(null);
    try {
      const hasil = await hapusData(token);
      if (hasil.ok) {
        lupakanHasil(token);
        router.replace("/");
        return;
      }
      setGalat(hasil.pesan);
    } catch {
      setGalat(TEKS.galat.umum);
    }
    setSibuk(false);
  }

  return (
    <BarisLipat
      id="hapus"
      nada="bahaya"
      ikon={<Ikon d={IKON.hapus} />}
      judul={TEKS.hapus.judul}
      keterangan={TEKS.hapus.keterangan}
      terbuka={yakin}
      onUbah={(buka) => {
        if (!sibuk) setYakin(buka);
      }}
    >
      <p className="text-teks-redup text-pretty">{TEKS.hapus.penjelasan}</p>
      <div className="mt-4 grid gap-2.5" role="group" aria-label={TEKS.hapus.yakin}>
        <Tombol gaya="bahaya" ukuran="ringkas" onClick={() => void hapus()} disabled={sibuk}>
          {sibuk ? TEKS.hapus.menghapus : TEKS.hapus.konfirmasi}
        </Tombol>
        <Tombol gaya="garis-biru" ukuran="ringkas" onClick={() => setYakin(false)} disabled={sibuk}>
          {TEKS.hapus.batal}
        </Tombol>
      </div>
      {galat ? (
        <p role="alert" className="mt-3 font-semibold text-bahaya">
          {galat}
        </p>
      ) : null}
    </BarisLipat>
  );
}
