"use client";

import Link from "next/link";
import { useState } from "react";
import { TEKS } from "@content/teks";
import { catatEvent } from "@/lib/event-klien";
import { Tombol } from "./Tombol";

const NAMA_FILE = "versiku-kata-kamu.png";

/**
 * Tombol unduh kartu hasil.
 * Di HP yang mendukung, gambar dibuka lewat lembar bagikan (bisa disimpan atau langsung ke story).
 * Kalau tidak, gambar diunduh sebagai file. Di bawahnya selalu ada link ke halaman gambar,
 * karena browser dalam aplikasi sering menolak unduhan: di sana gambar bisa ditekan lama.
 */
export function TombolUnduh({ token, kode }: { token: string; kode: string }) {
  const [status, setStatus] = useState<"diam" | "menyiapkan" | "gagal">("diam");

  async function unduh() {
    if (status === "menyiapkan") return;
    setStatus("menyiapkan");
    catatEvent("unduh_kartu", { kode });
    try {
      const jawaban = await fetch(`/api/kartu/${token}`, { cache: "no-store" });
      if (!jawaban.ok) throw new Error("gagal");
      const blob = await jawaban.blob();
      const file = new File([blob], NAMA_FILE, { type: "image/png" });

      if (typeof navigator.canShare === "function" && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file] });
          setStatus("diam");
          return;
        } catch (galat) {
          if (galat instanceof DOMException && galat.name === "AbortError") {
            setStatus("diam");
            return;
          }
          // Lembar bagikan ditolak browser: lanjut ke unduhan biasa.
        }
      }

      const alamat = URL.createObjectURL(blob);
      const tautan = document.createElement("a");
      tautan.href = alamat;
      tautan.download = NAMA_FILE;
      document.body.appendChild(tautan);
      tautan.click();
      tautan.remove();
      window.setTimeout(() => URL.revokeObjectURL(alamat), 15000);
      setStatus("diam");
    } catch {
      setStatus("gagal");
    }
  }

  return (
    <section className="text-center">
      <Tombol gaya="garis" onClick={() => void unduh()} aria-busy={status === "menyiapkan"}>
        {status === "menyiapkan" ? TEKS.kartu.menyiapkan : TEKS.hasil.tombolUnduh}
      </Tombol>
      {status === "gagal" ? (
        <p role="alert" className="mt-3 font-semibold">
          {TEKS.kartu.gagal}
        </p>
      ) : null}
      <p className="mx-auto mt-3 max-w-[21rem] text-pretty">
        {TEKS.kartu.bantuanUnduh}{" "}
        <Link href={`/hasil/${token}/kartu`} className="inline-block min-h-6 font-bold underline underline-offset-4">
          {TEKS.kartu.bukaGambar}
        </Link>
      </p>
    </section>
  );
}
