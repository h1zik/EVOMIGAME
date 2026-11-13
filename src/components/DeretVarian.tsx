import type { CSSProperties } from "react";
import { TEKS } from "@content/teks";
import { DAFTAR_VARIAN } from "@content/varian";
import { Maskot } from "./Maskot";
import { TautanVarian } from "./TautanVarian";

/**
 * Deretan kecil semua varian, supaya semua versi tetap terlihat
 * dan tidak ada kesan pemain "adalah" satu varian saja.
 */
export function DeretVarian({ kode, idAktif }: { kode?: string; idAktif?: string }) {
  return (
    <nav aria-label={TEKS.hasil.semuaVersi}>
      <ul className="grid grid-cols-2 gap-2.5">
        {DAFTAR_VARIAN.map((v) => {
          const aktif = v.id === idAktif;
          const warna = {
            "--v": `var(--v-${v.id})`,
            "--v-muda": `var(--v-${v.id}-muda)`,
          } as CSSProperties;
          return (
            <li key={v.id} style={warna}>
              <TautanVarian
                idVarian={v.id}
                kode={kode}
                aria-current={aktif ? "page" : undefined}
                className={`flex min-h-[60px] items-center gap-2 rounded-[18px] border-2 px-2.5 py-2 text-[0.9375rem] leading-tight font-bold ${
                  aktif ? "border-v bg-v-muda" : "border-biru-garis bg-putih"
                }`}
              >
                <Maskot varian={v} ukuran={36} hias className="shrink-0" />
                <span className="min-w-0">
                  {v.namaTampil}
                  {aktif ? <span className="sr-only"> ({TEKS.versi.varianIni})</span> : null}
                </span>
              </TautanVarian>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
