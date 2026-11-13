import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Tombol pil.
 * - putih: di atas latar berwarna (teks biru).
 * - biru: di atas latar putih (teks putih).
 * - garis: pilihan kedua di atas latar berwarna.
 * - garis-biru: pilihan kedua di atas latar putih.
 * - shopee: hanya untuk tombol yang mengarah ke Shopee.
 */
export type GayaTombol = "putih" | "biru" | "garis" | "garis-biru" | "shopee";

const BENTUK =
  "inline-flex w-full items-center justify-center gap-2 rounded-full text-center font-bold leading-tight " +
  "transition-transform duration-150 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50";

/** besar: tombol utama satu layar. ringkas: pilihan tambahan di bawahnya. */
export type UkuranTombol = "besar" | "ringkas";

const UKURAN: Record<UkuranTombol, string> = {
  besar: "min-h-[52px] px-7 py-3.5 text-[1.1875rem]",
  ringkas: "min-h-[48px] px-5 py-2.5 text-base",
};

const GAYA: Record<GayaTombol, string> = {
  putih: "bg-putih text-biru",
  biru: "bg-biru text-putih",
  garis: "bg-transparent text-putih ring-2 ring-inset ring-putih",
  "garis-biru": "bg-putih text-biru ring-2 ring-inset ring-biru",
  shopee: "bg-shopee text-putih",
};

export function kelasTombol(gaya: GayaTombol = "putih", tambahan = "", ukuran: UkuranTombol = "besar") {
  return `${BENTUK} ${UKURAN[ukuran]} ${GAYA[gaya]} ${tambahan}`.trim();
}

type PropsTombol = ComponentPropsWithoutRef<"button"> & {
  gaya?: GayaTombol;
  ukuran?: UkuranTombol;
  children: ReactNode;
};

export function Tombol({
  gaya = "putih",
  ukuran = "besar",
  className = "",
  type = "button",
  children,
  ...lain
}: PropsTombol) {
  return (
    <button type={type} className={kelasTombol(gaya, className, ukuran)} {...lain}>
      {children}
    </button>
  );
}

type PropsTautan = {
  href: string;
  gaya?: GayaTombol;
  ukuran?: UkuranTombol;
  /** true untuk link ke luar situs (Shopee, WhatsApp). */
  keluar?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

export function TombolTautan({
  href,
  gaya = "putih",
  ukuran = "besar",
  keluar = false,
  className = "",
  children,
  ...lain
}: PropsTautan) {
  if (keluar) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={kelasTombol(gaya, className, ukuran)}
        {...lain}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={kelasTombol(gaya, className, ukuran)} {...lain}>
      {children}
    </Link>
  );
}
