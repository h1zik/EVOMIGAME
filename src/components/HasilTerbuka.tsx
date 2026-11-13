import type { CSSProperties } from "react";
import { cariKalimat } from "@content/kalimat";
import { PENGATURAN } from "@content/pengaturan";
import { isi, TEKS } from "@content/teks";
import { cariVarian, cariVarianDariKode } from "@content/varian";
import type { ResponsTeman } from "@/lib/db/schema";
import type { RingkasanHasil } from "@/lib/hasil";
import { BalonObrolan } from "./BalonObrolan";
import { DeretVarian } from "./DeretVarian";
import { Kartu } from "./Kartu";
import { Maskot } from "./Maskot";
import { Perbandingan } from "./Perbandingan";
import { TautanVarian } from "./TautanVarian";
import { kelasTombol } from "./Tombol";
import { TombolBagikan } from "./TombolBagikan";

/** Bagian hasil setelah cukup teman mengisi: sorotan, perbandingan, kalimat teman, dan ajakan kenalan. */
export function HasilTerbuka({
  nama,
  kode,
  ringkasan,
  respons,
  linkTeman,
}: {
  nama: string;
  kode: string;
  ringkasan: RingkasanHasil;
  respons: ResponsTeman[];
  linkTeman: string;
}) {
  const persenTeman = ringkasan.persenTeman ?? {};
  const varianSorotan = ringkasan.sorotan ? cariVarian(ringkasan.sorotan.idVarian) : undefined;
  const varianAjakan = ringkasan.idVarianAjakan ? cariVarian(ringkasan.idVarianAjakan) : undefined;
  const penuh = respons.length >= PENGATURAN.maksRespons;

  return (
    <>
      {/* Sorotan utama. Tetap satu kalimat, tidak menyebut pemain sebagai satu varian. */}
      <Kartu className="anim-muncul">
        <div className="flex items-center gap-4">
          {varianSorotan ? (
            <Maskot
              varian={varianSorotan}
              ukuran={76}
              hias
              className="anim-lompat-dua shrink-0"
              style={{ "--tunda": "500ms" } as CSSProperties}
            />
          ) : null}
          <p className="text-[1.3125rem] leading-snug font-bold text-pretty">{ringkasan.kalimatSorotan}</p>
        </div>
      </Kartu>

      <Kartu>
        <Perbandingan
          nama={nama}
          persenSendiri={ringkasan.persenSendiri}
          persenTeman={persenTeman}
          idSorotan={ringkasan.sorotan?.idVarian ?? null}
        />
      </Kartu>

      <Kartu>
        <h2 className="text-[1.375rem] leading-tight font-bold">{TEKS.hasil.judulKalimat}</h2>
        <ul className="mt-4 grid gap-4">
          {respons.map((r) => {
            const kalimat = cariKalimat(r.idKalimat);
            if (!kalimat) return null;
            return (
              <li key={r.id}>
                <BalonObrolan
                  kalimat={kalimat.teks}
                  pengirim={r.namaTeman || TEKS.hasil.temanAnonim}
                  varian={cariVarianDariKode(kalimat.kode)}
                />
              </li>
            );
          })}
        </ul>
      </Kartu>

      {/* Ajakan ke halaman varian: versi sorotan, atau versi tertinggi kata teman. */}
      {varianAjakan ? (
        <Kartu>
          <div
            style={
              {
                "--v": `var(--v-${varianAjakan.id})`,
                "--v-muda": `var(--v-${varianAjakan.id}-muda)`,
              } as CSSProperties
            }
          >
            <div className="flex items-center gap-4 rounded-[20px] bg-v-muda p-4">
              <Maskot varian={varianAjakan} ukuran={84} hias className="shrink-0" />
              <div className="min-w-0">
                <h2 className="text-xl leading-tight font-bold">{varianAjakan.namaTampil}</h2>
                <p className="mt-1 leading-snug">{varianAjakan.deskripsiSingkat}</p>
              </div>
            </div>
            <TautanVarian idVarian={varianAjakan.id} kode={kode} className={kelasTombol("biru", "mt-4")}>
              {TEKS.hasil.ajakanVarian}
            </TautanVarian>
          </div>

          <h3 className="mt-6 font-bold">{TEKS.hasil.semuaVersi}</h3>
          <div className="mt-2.5">
            <DeretVarian kode={kode} />
          </div>
        </Kartu>
      ) : null}

      <Kartu>
        <h2 className="text-[1.375rem] leading-tight font-bold">
          {isi(TEKS.hasil.jumlahTeman, { jumlah: respons.length })}
        </h2>
        {penuh ? (
          <p className="mt-2 text-teks-redup text-pretty">
            {isi(TEKS.hasil.penuh, { maks: PENGATURAN.maksRespons })}
          </p>
        ) : (
          <>
            <p className="mt-2 text-teks-redup text-pretty">{TEKS.hasil.ajakLagi}</p>
            <div className="mt-5">
              <TombolBagikan linkTeman={linkTeman} kode={kode} />
            </div>
          </>
        )}
      </Kartu>
    </>
  );
}
