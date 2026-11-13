import { ImageResponse } from "next/og";
import { DAFTAR_VARIAN } from "@content/varian";
import { ambilAsetKartu, WARNA } from "./aset";

export const UKURAN_PRATINJAU = { width: 1200, height: 630 } as const;

/**
 * Gambar pratinjau bermerek (Open Graph) 1200 x 630, yang muncul saat link dibagikan
 * di WhatsApp, Instagram, atau TikTok. Berisi logo, satu judul, dan keempat maskot.
 */
export async function buatPratinjau(judul: string, keterangan: string): Promise<ImageResponse> {
  const aset = await ambilAsetKartu();
  const panjang = [...judul].length;
  const ukuranJudul = panjang <= 24 ? 84 : panjang <= 44 ? 66 : 54;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "56px 64px",
          backgroundColor: WARNA.biru,
          backgroundImage: `linear-gradient(135deg, ${WARNA.biruLangit} 0%, ${WARNA.biru} 55%)`,
          color: WARNA.putih,
          fontFamily: "Nohemi",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640, height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src={aset.logoPutih.src} width={Math.round((48 * aset.logoPutih.lebar) / aset.logoPutih.tinggi)} height={48} />
          <div style={{ display: "flex", fontSize: ukuranJudul, fontWeight: 700, lineHeight: 1.06 }}>{judul}</div>
          {/* Tiap kalimat di baris sendiri, supaya tidak ada satu kata yang tertinggal di baris bawah. */}
          <div style={{ display: "flex", flexDirection: "column", fontSize: 32, fontWeight: 600, lineHeight: 1.25 }}>
            {keterangan
              .split(/(?<=\.)\s+/)
              .map((kalimat) => (
                <div key={kalimat} style={{ display: "flex" }}>
                  {kalimat}
                </div>
              ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            width: 404,
            height: 404,
            padding: 24,
            borderRadius: 56,
            backgroundColor: WARNA.biruMuda,
          }}
        >
          {DAFTAR_VARIAN.slice(0, 4).map((v) => {
            const g = aset.maskot[v.id];
            const lebar = 148;
            return (
              <div
                key={v.id}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 178, height: 178 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                <img src={g.src} width={lebar} height={Math.round((lebar * g.tinggi) / g.lebar)} />
              </div>
            );
          })}
        </div>
      </div>
    ),
    { ...UKURAN_PRATINJAU, fonts: aset.fon },
  );
}
