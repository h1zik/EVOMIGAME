import type { CSSProperties } from "react";
import { DAFTAR_VARIAN } from "@content/varian";
import { BatangPersen } from "./BatangPersen";
import { Maskot } from "./Maskot";

export type Persen = Record<string, number>;

/**
 * Tampilan komposisi: semua maskot berjajar dengan ukuran mengikuti persen,
 * lalu batang persen di bawahnya. Selalu menampilkan semua versi.
 *
 * Lebar maskot = bagian dasar yang sama rata + bagian yang mengikuti persen,
 * sehingga jumlahnya selalu pas 100% lebar wadah.
 */
export function Komposisi({ persen, ringkas = false }: { persen: Persen; ringkas?: boolean }) {
  const jumlah = DAFTAR_VARIAN.length;
  const dasar = 57.2 / jumlah; // 57,2% lebar dibagi rata
  const perPersen = 0.428; // 42,8% sisanya dibagi menurut persen

  return (
    <div>
      <div
        className={`flex items-end justify-center rounded-[20px] bg-biru-muda px-3 ${
          ringkas ? "py-4" : "py-5"
        }`}
        role="img"
        aria-label={DAFTAR_VARIAN.map((v) => `${v.namaTampil} ${persen[v.id] ?? 0} persen`).join(", ")}
      >
        {DAFTAR_VARIAN.map((v, i) => (
          <Maskot
            key={v.id}
            varian={v}
            hias
            berdiri
            className="anim-maskot-masuk h-auto px-1"
            style={
              {
                width: `${dasar + (persen[v.id] ?? 0) * perPersen}%`,
                "--tunda": `${i * 110}ms`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className={`mt-4 grid ${ringkas ? "gap-2.5" : "gap-3.5"}`}>
        {DAFTAR_VARIAN.map((v, i) => (
          <BatangPersen key={v.id} varian={v} persen={persen[v.id] ?? 0} tunda={i * 90} />
        ))}
      </div>
    </div>
  );
}
