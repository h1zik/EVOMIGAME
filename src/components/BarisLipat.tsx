"use client";

import type { ReactNode } from "react";

/** biru: baris biasa. bahaya: baris untuk tindakan yang tidak bisa dibatalkan. */
export type NadaBaris = "biru" | "bahaya";

const NADA: Record<NadaBaris, string> = {
  biru: "bg-biru-muda text-biru",
  bahaya: "bg-bahaya-muda text-bahaya",
};

/** Ikon bulat di kiri baris. Hanya hiasan, jadi disembunyikan dari pembaca layar. */
export function LingkarIkon({ nada = "biru", children }: { nada?: NadaBaris; children: ReactNode }) {
  return (
    <span aria-hidden="true" className={`grid size-10 shrink-0 place-items-center rounded-full ${NADA[nada]}`}>
      {children}
    </span>
  );
}

/** Ikon garis 20px. `d` boleh berisi beberapa sub-jalur. */
export function Ikon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const IKON = {
  obrolan: "M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z",
  tautan:
    "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  hapus:
    "M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
  centang: "M5 12.5l4.5 4.5L19 7.5",
  panah: "M6 9l6 6 6-6",
} as const;

/** Judul dan satu baris keterangan di samping ikon. */
export function TeksBaris({ judul, keterangan }: { judul: ReactNode; keterangan: ReactNode }) {
  return (
    <span className="min-w-0 flex-1">
      <span className="block leading-tight font-bold">{judul}</span>
      <span className="mt-0.5 block text-sm leading-snug text-teks-redup text-pretty">{keterangan}</span>
    </span>
  );
}

type Props = {
  /** Awalan id untuk tombol dan isinya. Harus unik di satu halaman. */
  id: string;
  ikon: ReactNode;
  nada?: NadaBaris;
  judul: string;
  keterangan: string;
  terbuka: boolean;
  onUbah: (terbuka: boolean) => void;
  children: ReactNode;
};

/**
 * Satu baris yang bisa dibuka dan ditutup, untuk hal tambahan di halaman hasil.
 * Saat tertutup hanya tampil ikon, judul, dan satu baris keterangan. Isinya baru
 * muncul setelah baris ditekan, dan selama tertutup tidak bisa difokus (inert).
 */
export function BarisLipat({ id, ikon, nada = "biru", judul, keterangan, terbuka, onUbah, children }: Props) {
  return (
    <div>
      <h2>
        <button
          type="button"
          id={`${id}-tombol`}
          aria-expanded={terbuka}
          aria-controls={`${id}-isi`}
          onClick={() => onUbah(!terbuka)}
          className="flex min-h-[4.5rem] w-full items-center gap-3 rounded-[14px] py-3 text-left"
        >
          <LingkarIkon nada={nada}>{ikon}</LingkarIkon>
          <TeksBaris judul={judul} keterangan={keterangan} />
          <span
            aria-hidden="true"
            className={`shrink-0 text-teks-redup transition-transform duration-200 ${terbuka ? "rotate-180" : ""}`}
          >
            <Ikon d={IKON.panah} />
          </span>
        </button>
      </h2>
      <div
        id={`${id}-isi`}
        role="region"
        aria-labelledby={`${id}-tombol`}
        inert={!terbuka}
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          terbuka ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        {/* Ruang kiri kanan supaya garis fokus tombol di dalamnya tidak terpotong. */}
        <div className="-mx-2 min-h-0 overflow-hidden px-2">
          <div className="pt-1 pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
