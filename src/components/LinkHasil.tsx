"use client";

import { useEffect, useState } from "react";
import { TEKS } from "@content/teks";
import { simpanHasil } from "@/lib/perangkat-klien";
import { salinTeks } from "@/lib/salin";
import { Ikon, IKON, LingkarIkon, TeksBaris } from "./BarisLipat";

type Props = { linkHasil: string; token: string; kode: string; nama: string };

/**
 * Baris link hasil (rahasia).
 * Saat halaman hasil dibuka, token disimpan di perangkat ini supaya lain kali
 * hasil bisa dibuka langsung dari halaman awal. Tombolnya menyalin link hasil
 * untuk dibuka dari perangkat lain. Cuma ada satu tindakan, jadi barisnya tidak perlu dibuka dulu.
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

  const tersalin = status === "tersalin";

  return (
    <div>
      <div className="flex min-h-[4.5rem] items-center gap-3 py-3">
        <LingkarIkon>
          <Ikon d={IKON.tautan} />
        </LingkarIkon>
        <h2 className="contents">
          <TeksBaris judul={TEKS.hasil.judulLinkHasil} keterangan={TEKS.hasil.bantuanLinkHasil} />
        </h2>
        <button
          type="button"
          onClick={() => void salin()}
          aria-label={TEKS.hasil.tombolSalinLinkHasil}
          className={`inline-flex min-h-11 min-w-[5.75rem] shrink-0 items-center justify-center gap-1 rounded-full px-4 font-bold ring-2 ring-biru transition-colors duration-150 ring-inset active:translate-y-px ${
            tersalin ? "bg-biru text-putih" : "bg-putih text-biru"
          }`}
        >
          {tersalin ? TEKS.hasil.tersalin : TEKS.hasil.tombolSalinRingkas}
        </button>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {tersalin ? TEKS.hasil.tersalin : ""}
      </p>
      {status === "gagal" ? (
        <div className="pb-4" role="alert">
          <p className="text-sm text-teks-redup">{TEKS.hasil.gagalSalin}</p>
          <p className="mt-1.5 rounded-[14px] bg-biru-muda px-3 py-2.5 text-sm font-semibold break-all text-teks select-all">
            {linkHasil}
          </p>
        </div>
      ) : null}
    </div>
  );
}
