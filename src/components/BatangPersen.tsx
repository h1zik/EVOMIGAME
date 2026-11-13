import type { CSSProperties } from "react";
import type { Varian } from "@content/varian";
import { Maskot } from "./Maskot";

/** Satu baris: maskot kecil, nama varian, persen, dan batang berwarna varian. */
export function BatangPersen({
  varian,
  persen,
  tunda = 0,
}: {
  varian: Varian;
  persen: number;
  tunda?: number;
}) {
  const warna = {
    "--v": `var(--v-${varian.id})`,
    "--v-muda": `var(--v-${varian.id}-muda)`,
  } as CSSProperties;

  return (
    <div style={warna}>
      <div className="flex items-center gap-2">
        <Maskot varian={varian} ukuran={28} hias />
        <span className="font-semibold">{varian.namaTampil}</span>
        <span className="ml-auto font-bold tabular-nums">{persen}%</span>
      </div>
      <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-v-muda" aria-hidden="true">
        <div
          className="anim-tumbuh h-full rounded-full bg-v"
          style={{ width: `${persen}%`, animationDelay: `${tunda}ms` }}
        />
      </div>
    </div>
  );
}
