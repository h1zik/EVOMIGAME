import type { CSSProperties } from "react";
import type { Varian } from "@content/varian";
import { Maskot } from "./Maskot";

/** Balon obrolan untuk kalimat validasi dari teman. */
export function BalonObrolan({
  kalimat,
  pengirim,
  varian,
}: {
  kalimat: string;
  pengirim: string;
  varian?: Varian;
}) {
  const warna = {
    "--v-muda": varian ? `var(--v-${varian.id}-muda)` : "var(--biru-muda)",
  } as CSSProperties;

  return (
    <figure className="flex items-end gap-2" style={warna}>
      {varian ? <Maskot varian={varian} ukuran={36} hias className="shrink-0" /> : null}
      <div className="min-w-0">
        <blockquote className="rounded-[20px] rounded-bl-md bg-v-muda px-4 py-3 font-semibold text-teks">
          {kalimat}
        </blockquote>
        <figcaption className="mt-1 pl-1 text-sm text-teks-redup">{pengirim}</figcaption>
      </div>
    </figure>
  );
}
