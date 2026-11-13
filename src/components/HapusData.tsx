"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TEKS } from "@content/teks";
import { hapusData } from "@/app/hasil/[token]/aksi";
import { lupakanHasil } from "@/lib/perangkat-klien";
import { Tombol } from "./Tombol";

/**
 * Hapus data sendiri dari halaman hasil. Dua langkah supaya tidak terhapus karena salah tekan:
 * tekan "Hapus dataku", lalu konfirmasi "Ya, hapus semuanya".
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
    <section aria-labelledby="judul-hapus" className="px-1 text-center">
      <h2 id="judul-hapus" className="text-lg font-bold">
        {TEKS.hapus.judul}
      </h2>
      <p className="mx-auto mt-1 max-w-[21rem] text-pretty">{TEKS.hapus.penjelasan}</p>
      {yakin ? (
        <div className="mt-4" role="group" aria-label={TEKS.hapus.yakin}>
          <p className="font-bold">{TEKS.hapus.yakin}</p>
          <div className="mt-3 grid gap-2.5">
            <Tombol gaya="putih" ukuran="ringkas" onClick={() => void hapus()} disabled={sibuk}>
              {sibuk ? TEKS.hapus.menghapus : TEKS.hapus.konfirmasi}
            </Tombol>
            <Tombol gaya="garis" ukuran="ringkas" onClick={() => setYakin(false)} disabled={sibuk}>
              {TEKS.hapus.batal}
            </Tombol>
          </div>
        </div>
      ) : (
        <Tombol gaya="garis" ukuran="ringkas" className="mt-4" onClick={() => setYakin(true)}>
          {TEKS.hapus.tombol}
        </Tombol>
      )}
      {galat ? (
        <p role="alert" className="mt-3 font-semibold">
          {galat}
        </p>
      ) : null}
    </section>
  );
}
