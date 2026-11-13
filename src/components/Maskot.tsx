import type { CSSProperties } from "react";
import type { Varian } from "@content/varian";

type Props = {
  varian: Varian;
  /** Ukuran kotak dalam px. Kosongkan kalau ukurannya diatur pembungkus. */
  ukuran?: number;
  /** true kalau nama varian sudah tertulis di dekatnya, supaya tidak dibaca dua kali. */
  hias?: boolean;
  /**
   * true kalau maskot berjajar di dalam satu wadah. Gambar memakai rasio aslinya
   * (tidak dibungkus kotak persegi), jadi tidak ada ruang kosong tersembunyi di atasnya.
   */
  berdiri?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Maskot resmi varian. Gambarnya diambil dari file yang ditunjuk content/varian.ts (maskot).
 * File aslinya tidak persegi. Saat berdiri sendiri, gambar dimuat utuh di dalam kotak persegi.
 * Saat berjajar (berdiri), gambar memakai rasio aslinya.
 * Maskot tidak punya nama sendiri, selalu disebut dengan nama variannya.
 */
export function Maskot({
  varian,
  ukuran,
  hias = false,
  berdiri = false,
  className = "",
  style,
}: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={varian.maskot}
      alt={hias ? "" : `Maskot ${varian.namaTampil}, bentuk ${varian.bentuk}`}
      aria-hidden={hias || undefined}
      width={ukuran ?? 200}
      height={ukuran ?? 200}
      draggable={false}
      className={`block select-none ${
        berdiri ? "h-auto" : "aspect-square object-contain object-center"
      } ${className}`.trim()}
      style={ukuran ? { width: ukuran, height: ukuran, ...style } : style}
    />
  );
}
