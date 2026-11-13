"use client";

import { useEffect, useState } from "react";
import { TEKS } from "@content/teks";
import { ambilHasilTersimpan } from "@/lib/perangkat-klien";
import { kelasTombol } from "./Tombol";

/**
 * Tombol utama halaman varian.
 * tersedia = true: "Lihat di Shopee" (oranye, khusus tombol Shopee).
 * tersedia = false: "Kabari aku kalau sudah ada" ke waitlist WhatsApp.
 * Link menuju /keluar/{id}, yang menambah UTM, mencatat klik, lalu meneruskan ke tujuan.
 */
export function TombolKeluar({ idVarian, tersedia }: { idVarian: string; tersedia: boolean }) {
  const [kode, setKode] = useState<string | null>(null);

  // Kalau perangkat ini punya hasil, kliknya dicatat atas nama pemain itu.
  useEffect(() => {
    setKode(ambilHasilTersimpan()?.kode ?? null);
  }, []);

  return (
    <a
      href={`/keluar/${idVarian}${kode ? `?p=${kode}` : ""}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={kelasTombol(tersedia ? "shopee" : "biru")}
    >
      {tersedia ? TEKS.versi.tombolToko : TEKS.versi.tombolWaitlist}
    </a>
  );
}
