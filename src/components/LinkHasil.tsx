"use client";

import { useEffect, useState } from "react";
import { TEKS } from "@content/teks";
import { simpanHasil } from "@/lib/perangkat-klien";
import { salinTeks } from "@/lib/salin";
import { Tombol } from "./Tombol";

type Props = { linkHasil: string; token: string; kode: string; nama: string };

/**
 * Bagian link hasil (rahasia).
 * Saat halaman hasil dibuka, token disimpan di perangkat ini supaya lain kali
 * hasil bisa dibuka langsung dari halaman awal. Tombolnya menyalin link hasil
 * untuk dibuka dari perangkat lain.
 */
export function LinkHasil({ linkHasil, token, kode, nama }: Props) {
  const [status, setStatus] = useState<"diam" | "tersalin" | "gagal">("diam");

  useEffect(() => {
    simpanHasil({ token, kode, nama });
  }, [token, kode, nama]);

  async function salin() {
    const berhasil = await salinTeks(linkHasil);
    setStatus(berhasil ? "tersalin" : "gagal");
    if (berhasil) window.setTimeout(() => setStatus("diam"), 2500);
  }

  return (
    <section aria-labelledby="judul-link-hasil" className="px-1 text-center">
      <h2 id="judul-link-hasil" className="text-lg font-bold">
        {TEKS.hasil.judulLinkHasil}
      </h2>
      <p className="mx-auto mt-1 max-w-[21rem] text-pretty">{TEKS.hasil.bantuanLinkHasil}</p>
      <Tombol gaya="garis" ukuran="ringkas" className="mt-4" onClick={() => void salin()}>
        {status === "tersalin" ? TEKS.hasil.tersalin : TEKS.hasil.tombolSalinLinkHasil}
      </Tombol>
      <p className="sr-only" role="status" aria-live="polite">
        {status === "tersalin" ? TEKS.hasil.tersalin : ""}
      </p>
      {status === "gagal" ? (
        <div className="mt-3" role="alert">
          <p className="text-sm">{TEKS.hasil.gagalSalin}</p>
          <p className="mt-1.5 rounded-[14px] bg-putih px-3 py-2.5 text-left text-sm font-semibold break-all text-teks select-all">
            {linkHasil}
          </p>
        </div>
      ) : null}
    </section>
  );
}
