import type { CSSProperties } from "react";
import { PENGATURAN } from "@content/pengaturan";
import { isi, TEKS } from "@content/teks";
import { DAFTAR_VARIAN } from "@content/varian";
import { Kartu } from "./Kartu";
import { Maskot } from "./Maskot";
import { TombolBagikan } from "./TombolBagikan";

/**
 * Bagian "versi kata teman" selama masih terkunci.
 * Maskot tampil sebagai bayangan sama besar (belum ada yang tahu komposisinya),
 * dan kursi di bawahnya terisi satu per satu tiap ada teman yang mengisi.
 */
export function TemanTerkunci({
  jumlahTeman,
  linkTeman,
  kode,
}: {
  jumlahTeman: number;
  linkTeman: string;
  kode: string;
}) {
  const ambang = PENGATURAN.ambangBuka;
  const terisi = Math.min(jumlahTeman, ambang);
  const penghitung = isi(TEKS.hasil.penghitung, { jumlah: terisi, ambang });

  return (
    <Kartu>
      <div
        className="flex items-end justify-center rounded-[20px] bg-biru-muda px-3 py-5"
        aria-hidden="true"
      >
        {DAFTAR_VARIAN.map((v) => (
          <Maskot key={v.id} varian={v} hias berdiri className="h-auto w-1/4 px-2 opacity-20 brightness-0" />
        ))}
      </div>

      <h2 className="mt-5 text-[1.375rem] leading-tight font-bold text-balance">
        {isi(TEKS.hasil.terkunci, { ambang })}
      </h2>

      <div className="mt-3 flex items-center gap-2.5">
        <div className="flex gap-2" aria-hidden="true">
          {Array.from({ length: ambang }, (_, i) => (
            <span
              key={i}
              className={`grid size-9 place-items-center rounded-full border-2 ${
                i < terisi ? "anim-muncul border-biru bg-biru text-putih" : "border-dashed border-biru-garis bg-putih"
              }`}
              style={{ "--tunda": `${300 + i * 140}ms` } as CSSProperties}
            >
              {i < terisi ? (
                <svg viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : null}
            </span>
          ))}
        </div>
        <p className="font-bold tabular-nums">
          {penghitung}
          <span className="sr-only"> teman sudah mengisi</span>
        </p>
      </div>

      <p className="mt-3 text-teks-redup text-pretty">{TEKS.hasil.penjelasanTerkunci}</p>

      <div className="mt-5">
        <TombolBagikan linkTeman={linkTeman} kode={kode} />
      </div>
    </Kartu>
  );
}
