"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { DAFTAR_VARIAN } from "@content/varian";

const JUMLAH_KEPING = 28;
const LAMA_TAMPIL_MS = 3800;

/** Angka semu-acak yang tetap untuk tiap keping, supaya susunannya tidak berubah saat digambar ulang. */
function acak(indeks: number, benih: number): number {
  const x = Math.sin(indeks * 127.1 + benih * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Hujan maskot kecil, diputar satu kali di momen tertentu:
 * - "kuis": tepat setelah pemain selesai menjawab kartu dan tiba di halaman hasil.
 * - "terbuka": pertama kali "versi kata teman" terbuka di perangkat ini.
 *
 * Yang jatuh adalah keempat maskot, jadi semua versi ikut merayakan.
 * Tidak diputar kalau perangkat meminta gerakan dikurangi, dan tidak menghalangi sentuhan.
 */
export function Perayaan({ pemicu, id }: { pemicu: "kuis" | "terbuka"; id: string }) {
  const [tampil, setTampil] = useState(false);
  // Keputusan diambil sekali saja, supaya penanda di penyimpanan tidak dibaca dua kali.
  const boleh = useRef<boolean | null>(null);

  useEffect(() => {
    if (boleh.current === null) {
      let hasil = false;
      try {
        if (pemicu === "kuis") {
          hasil = window.sessionStorage.getItem("vkk_rayakan") === id;
          if (hasil) window.sessionStorage.removeItem("vkk_rayakan");
        } else {
          const kunci = `vkk_terbuka_${id}`;
          hasil = window.localStorage.getItem(kunci) !== "1";
          if (hasil) window.localStorage.setItem(kunci, "1");
        }
      } catch {
        hasil = false;
      }
      if (hasil && window.matchMedia("(prefers-reduced-motion: reduce)").matches) hasil = false;
      boleh.current = hasil;
    }
    if (!boleh.current) return;

    setTampil(true);
    const selesai = window.setTimeout(() => {
      boleh.current = false;
      setTampil(false);
    }, LAMA_TAMPIL_MS);
    return () => window.clearTimeout(selesai);
  }, [pemicu, id]);

  if (!tampil) return null;

  return (
    <div className="konfeti pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {Array.from({ length: JUMLAH_KEPING }, (_, i) => {
        const varian = DAFTAR_VARIAN[i % DAFTAR_VARIAN.length];
        const gaya = {
          "--kiri": `${Math.round(acak(i, 1) * 96)}%`,
          "--ukuran": `${Math.round(22 + acak(i, 2) * 22)}px`,
          "--tunda": `${Math.round(acak(i, 3) * 900)}ms`,
          "--lama": `${Math.round(1900 + acak(i, 4) * 1100)}ms`,
          "--geser": `${Math.round((acak(i, 5) - 0.5) * 140)}px`,
          "--putar": `${Math.round((acak(i, 6) - 0.5) * 900)}deg`,
        } as CSSProperties;
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={varian.maskot} alt="" className="konfeti-keping" style={gaya} draggable={false} />
        );
      })}
    </div>
  );
}
