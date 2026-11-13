import type { CSSProperties } from "react";
import { isi, TEKS } from "@content/teks";
import { DAFTAR_VARIAN } from "@content/varian";
import type { Persen } from "@/lib/skor";
import { Maskot } from "./Maskot";

/**
 * Perbandingan berdampingan: "Menurut {nama}" dan "Kata teman" untuk semua versi.
 * Di atasnya, maskot berjajar dengan ukuran mengikuti persen kata teman.
 * Batang kiri (menurut pemain) lebih pudar, batang kanan (kata teman) penuh,
 * dan keduanya selalu diberi judul kolom serta angka, jadi tidak bergantung pada warna.
 */
export function Perbandingan({
  nama,
  persenSendiri,
  persenTeman,
  idSorotan,
}: {
  nama: string;
  persenSendiri: Persen;
  persenTeman: Persen;
  idSorotan: string | null;
}) {
  const dasar = 57.2 / DAFTAR_VARIAN.length;
  const perPersen = 0.428;
  const kolomSendiri = isi(TEKS.hasil.kolomMenurut, { nama });

  return (
    <div>
      <div
        className="flex items-end justify-center rounded-[20px] bg-biru-muda px-3 py-5"
        role="img"
        aria-label={`${TEKS.hasil.kolomTeman}: ${DAFTAR_VARIAN.map((v) => `${v.namaTampil} ${persenTeman[v.id] ?? 0} persen`).join(", ")}`}
      >
        {DAFTAR_VARIAN.map((v) => (
          <Maskot
            key={v.id}
            varian={v}
            hias
            berdiri
            className="anim-membesar h-auto px-1"
            style={{ width: `${dasar + (persenTeman[v.id] ?? 0) * perPersen}%` }}
          />
        ))}
      </div>

      <table className="mt-5 w-full table-fixed border-separate border-spacing-0">
        <caption className="sr-only">{TEKS.hasil.labelPerbandingan}</caption>
        <thead>
          <tr>
            <th scope="col" className="sr-only">
              Versi
            </th>
            <th scope="col" className="label-kecil w-1/2 pr-2 pb-1 text-left align-bottom break-words text-teks-redup">
              {kolomSendiri}
            </th>
            <th scope="col" className="label-kecil w-1/2 pb-1 pl-2 text-left align-bottom text-teks-redup">
              {TEKS.hasil.kolomTeman}
            </th>
          </tr>
        </thead>
        {DAFTAR_VARIAN.map((v, i) => {
          const warna = {
            "--v": `var(--v-${v.id})`,
            "--v-muda": `var(--v-${v.id}-muda)`,
          } as CSSProperties;
          const sendiri = persenSendiri[v.id] ?? 0;
          const teman = persenTeman[v.id] ?? 0;
          return (
            <tbody key={v.id} style={warna}>
              <tr>
                <th scope="rowgroup" colSpan={3} className="pt-3.5 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    <Maskot varian={v} ukuran={28} hias />
                    {v.namaTampil}
                    {idSorotan === v.id ? (
                      <span className="ml-auto rounded-full bg-v-muda px-2.5 py-0.5 text-sm font-bold tabular-nums">
                        +{teman - sendiri}
                      </span>
                    ) : null}
                  </span>
                </th>
              </tr>
              <tr>
                <td className="sr-only">{v.namaTampil}</td>
                <td className="pt-1.5 pr-2 align-middle">
                  <Sel persen={sendiri} pudar tunda={i * 90} />
                </td>
                <td className="pt-1.5 pl-2 align-middle">
                  <Sel persen={teman} tunda={i * 90 + 200} />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

function Sel({ persen, pudar = false, tunda }: { persen: number; pudar?: boolean; tunda: number }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-3 flex-1 overflow-hidden rounded-full bg-v-muda" aria-hidden="true">
        <span
          className={`anim-tumbuh block h-full rounded-full bg-v ${pudar ? "opacity-45" : ""}`}
          style={{ width: `${persen}%`, animationDelay: `${tunda}ms` }}
        />
      </span>
      <span className="w-[2.75rem] text-right font-bold tabular-nums">{persen}%</span>
    </span>
  );
}
