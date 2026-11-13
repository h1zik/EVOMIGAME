import { isi, TEKS } from "@content/teks";
import { DAFTAR_VARIAN } from "@content/varian";
import type { Persen } from "@/lib/skor";
import { WARNA, type AsetKartu } from "./aset";

export const UKURAN_KARTU = { width: 1080, height: 1920 } as const;

export type DataKartu = {
  nama: string;
  persenSendiri: Persen;
  /** null selama "versi kata teman" belum terbuka. */
  persenTeman: Persen | null;
  /** Satu kalimat di bawah kartu: sorotan kalau sudah terbuka, ajakan kalau belum. */
  kalimat: string;
  /** Alamat game tanpa protokol, misalnya versiku.evomi.id */
  alamat: string;
};

const LEBAR_ISI = 1080 - 2 * 60; // lebar kartu putih
const LEBAR_PANEL = LEBAR_ISI - 2 * 44; // lebar panel maskot di dalam kartu putih

/**
 * Kartu hasil 1080 x 1920 untuk dibagikan ke story.
 * Ditulis untuk pembuat gambar di server: hanya flexbox, semua ukuran dalam px,
 * dan tiap elemen dengan lebih dari satu anak diberi display flex.
 */
export function KartuHasil({ data, aset }: { data: DataKartu; aset: AsetKartu }) {
  const terbuka = data.persenTeman !== null;
  const persenUtama = data.persenTeman ?? data.persenSendiri;
  const panjangNama = [...data.nama].length;
  const ukuranNama = panjangNama <= 9 ? 112 : panjangNama <= 14 ? 88 : 66;
  const judul = terbuka ? TEKS.hasil.judulTeman : TEKS.hasil.judulSendiri;
  const [awal, akhir] = judul.split("{nama}");

  // Lebar maskot: bagian dasar sama rata ditambah bagian yang mengikuti persen.
  const ruang = LEBAR_PANEL - 2 * 28;
  const lebarMaskot = (id: string) => ruang * (0.572 / DAFTAR_VARIAN.length + ((persenUtama[id] ?? 0) / 100) * 0.428);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "92px 60px 84px",
        backgroundColor: WARNA.biru,
        backgroundImage: `linear-gradient(180deg, ${WARNA.biruLangit} 0%, ${WARNA.biru} 42%)`,
        color: WARNA.putih,
        fontFamily: "Nohemi",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={aset.logoPutih.src} width={Math.round((64 * aset.logoPutih.lebar) / aset.logoPutih.tinggi)} height={64} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 44,
            fontWeight: 700,
            lineHeight: 1.04,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 76 }}>{`${awal}${terbuka ? data.nama : ""}`.trim()}</div>
          <div style={{ display: "flex", fontSize: terbuka ? 76 : ukuranNama, marginTop: 6 }}>
            {terbuka ? akhir.trim() : data.nama}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: LEBAR_ISI,
          padding: 44,
          borderRadius: 60,
          backgroundColor: WARNA.putih,
          color: WARNA.teks,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: terbuka ? 300 : 360,
            padding: "0 28px 34px",
            borderRadius: 44,
            backgroundColor: WARNA.biruMuda,
          }}
        >
          {DAFTAR_VARIAN.map((v) => {
            const g = aset.maskot[v.id];
            const lebar = lebarMaskot(v.id) - 16;
            return (
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              <img
                key={v.id}
                src={g.src}
                width={Math.round(lebar)}
                height={Math.round((lebar * g.tinggi) / g.lebar)}
                style={{ margin: "0 8px" }}
              />
            );
          })}
        </div>

        {terbuka ? (
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 25,
              fontWeight: 600,
              letterSpacing: 5,
              color: WARNA.teksRedup,
            }}
          >
            <div style={{ display: "flex", width: "50%" }}>
              {isi(TEKS.hasil.kolomMenurut, { nama: data.nama }).toUpperCase()}
            </div>
            <div style={{ display: "flex", width: "50%", paddingLeft: 16 }}>{TEKS.hasil.kolomTeman.toUpperCase()}</div>
          </div>
        ) : null}

        <div style={{ display: "flex", flexDirection: "column", marginTop: terbuka ? 4 : 30 }}>
          {DAFTAR_VARIAN.map((v) => {
            const g = aset.maskot[v.id];
            const tinggiIkon = Math.round((60 * g.tinggi) / g.lebar);
            return (
              <div key={v.id} style={{ display: "flex", flexDirection: "column", marginTop: terbuka ? 24 : 30 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
                  <img src={g.src} width={60} height={tinggiIkon} />
                  <div style={{ display: "flex", flexGrow: 1, marginLeft: 18, fontSize: 40, fontWeight: 600 }}>
                    {v.namaTampil}
                  </div>
                  {terbuka ? null : (
                    <div style={{ display: "flex", fontSize: 46, fontWeight: 700 }}>{`${data.persenSendiri[v.id] ?? 0}%`}</div>
                  )}
                </div>
                {terbuka ? (
                  <div style={{ display: "flex", marginTop: 12 }}>
                    <Batang persen={data.persenSendiri[v.id] ?? 0} warna={v.warna} warnaMuda={v.warnaMuda} pudar />
                    <div style={{ display: "flex", width: 32 }} />
                    <Batang persen={data.persenTeman?.[v.id] ?? 0} warna={v.warna} warnaMuda={v.warnaMuda} />
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      height: 24,
                      marginTop: 14,
                      borderRadius: 12,
                      backgroundColor: v.warnaMuda,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: `${data.persenSendiri[v.id] ?? 0}%`,
                        height: 24,
                        borderRadius: 12,
                        backgroundColor: v.warna,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            maxWidth: 900,
            fontSize: 50,
            fontWeight: 700,
            lineHeight: 1.18,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {data.kalimat}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "20px 44px",
            borderRadius: 60,
            backgroundColor: WARNA.putih,
            color: WARNA.biru,
            fontSize: 38,
            fontWeight: 700,
          }}
        >
          {data.alamat}
        </div>
      </div>
    </div>
  );
}

function Batang({ persen, warna, warnaMuda, pudar = false }: { persen: number; warna: string; warnaMuda: string; pudar?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexGrow: 1, flexBasis: 0 }}>
      <div style={{ display: "flex", flexGrow: 1, height: 22, borderRadius: 11, backgroundColor: warnaMuda }}>
        <div
          style={{
            display: "flex",
            width: `${persen}%`,
            height: 22,
            borderRadius: 11,
            backgroundColor: warna,
            opacity: pudar ? 0.45 : 1,
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", width: 104, fontSize: 40, fontWeight: 700 }}>{`${persen}%`}</div>
    </div>
  );
}
