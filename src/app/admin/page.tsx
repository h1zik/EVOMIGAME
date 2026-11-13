import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PENGATURAN } from "@content/pengaturan";
import { Kartu } from "@/components/Kartu";
import { Tombol } from "@/components/Tombol";
import { kunciAdminTerpasang, sudahMasukAdmin } from "@/lib/admin";
import { ambilStatistik, rapikanRentang } from "@/lib/statistik";
import { keluarAdmin, masukAdmin } from "./aksi";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

const bulat = (n: number) => new Intl.NumberFormat("id-ID").format(n);
const desimal = (n: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(n);

function Baris({ label, nilai, ket }: { label: string; nilai: ReactNode; ket?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-biru-garis py-2.5 last:border-b-0">
      <dt>
        {label}
        {ket ? <span className="block text-sm text-teks-redup">{ket}</span> : null}
      </dt>
      <dd className="text-xl font-bold tabular-nums">{nilai}</dd>
    </div>
  );
}

const kelasSel = "border-b border-biru-garis px-2 py-2 text-right tabular-nums";
const dasarKepala = "border-b-2 border-biru-garis px-2 py-2 text-sm font-semibold text-teks-redup";
const kelasKepala = `${dasarKepala} text-right`;
const kelasKepalaKiri = `${dasarKepala} text-left`;

export default async function HalamanAdmin({
  searchParams,
}: {
  searchParams: Promise<{ dari?: string; sampai?: string; galat?: string }>;
}) {
  const { dari, sampai, galat } = await searchParams;

  if (!kunciAdminTerpasang()) {
    return (
      <main className="flex flex-1 flex-col justify-center px-5 py-10">
        <Kartu>
          <h1 className="text-2xl font-bold">Admin belum aktif</h1>
          <p className="mt-2">
            Isi environment variable <code className="font-bold">ADMIN_KEY</code> (minimal 8 karakter), lalu jalankan
            ulang aplikasinya.
          </p>
        </Kartu>
      </main>
    );
  }

  if (!(await sudahMasukAdmin())) {
    return (
      <main className="flex flex-1 flex-col justify-center px-5 py-10">
        <Kartu>
          <h1 className="text-2xl font-bold">
            <label htmlFor="kunci">Kunci admin</label>
          </h1>
          <form action={masukAdmin} className="mt-4">
            <input
              id="kunci"
              name="kunci"
              type="password"
              autoComplete="current-password"
              required
              aria-describedby={galat ? "galat-kunci" : undefined}
              className="block h-13 w-full rounded-[18px] border-2 border-biru-garis bg-biru-muda px-4 text-lg font-semibold text-teks outline-none focus:border-biru"
            />
            {galat ? (
              <p id="galat-kunci" role="alert" className="mt-2 font-semibold text-[var(--v-rebel)]">
                {galat === "sering" ? "Terlalu banyak percobaan. Coba lagi beberapa menit lagi." : "Kuncinya tidak cocok."}
              </p>
            ) : null}
            <Tombol type="submit" gaya="biru" className="mt-4">
              Masuk
            </Tombol>
          </form>
        </Kartu>
      </main>
    );
  }

  const rentang = rapikanRentang(dari, sampai);
  const s = await ambilStatistik(rentang);
  const selesaiDariMulai =
    s.mulaiMain && s.selesaiKuis <= s.mulaiMain
      ? `${desimal((s.selesaiKuis / s.mulaiMain) * 100)}% dari yang mulai`
      : undefined;

  return (
    <main className="flex flex-1 flex-col gap-5 px-5 pt-6 pb-10">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Statistik</h1>
        <form action={keluarAdmin}>
          <button type="submit" className="min-h-11 rounded-full px-4 font-semibold underline underline-offset-4">
            Keluar
          </button>
        </form>
      </div>

      <Kartu>
        <form method="get" className="grid grid-cols-2 gap-3">
          <label className="grid min-w-0 gap-1 text-sm font-semibold">
            Dari tanggal
            <input
              type="date"
              name="dari"
              defaultValue={rentang.dari}
              className="h-12 w-full min-w-0 rounded-[14px] border-2 border-biru-garis bg-biru-muda px-2 text-base font-semibold text-teks"
            />
          </label>
          <label className="grid min-w-0 gap-1 text-sm font-semibold">
            Sampai tanggal
            <input
              type="date"
              name="sampai"
              defaultValue={rentang.sampai}
              className="h-12 w-full min-w-0 rounded-[14px] border-2 border-biru-garis bg-biru-muda px-2 text-base font-semibold text-teks"
            />
          </label>
          <Tombol type="submit" gaya="biru" ukuran="ringkas" className="col-span-2">
            Tampilkan
          </Tombol>
        </form>
        <p className="mt-3 text-sm text-teks-redup">
          Menampilkan {rentang.dari} sampai {rentang.sampai}, menurut waktu Indonesia barat.
        </p>
      </Kartu>

      <Kartu>
        <h2 className="text-lg font-bold">Pemain</h2>
        <dl className="mt-1">
          <Baris label="Mulai main" nilai={bulat(s.mulaiMain)} ket="Mengisi nama dan masuk ke kartu pertama" />
          <Baris label="Selesai kuis" nilai={bulat(s.selesaiKuis)} ket={selesaiDariMulai} />
          <Baris label="Membagikan link" nilai={bulat(s.membagikan)} ket="Pemain yang menekan kirim atau salin link" />
          <Baris label="Unduh kartu hasil" nilai={bulat(s.unduhKartu)} />
          <Baris label="Meninggalkan nomor WhatsApp" nilai={bulat(s.nomorWhatsapp)} />
        </dl>
      </Kartu>

      <Kartu>
        <h2 className="text-lg font-bold">Teman</h2>
        <dl className="mt-1">
          <Baris label="Isian teman" nilai={bulat(s.totalRespons)} ket="Untuk pemain yang dibuat di rentang ini" />
          <Baris label="Rata-rata teman per pemain" nilai={desimal(s.rataTeman)} />
          <Baris
            label="Hasil terbuka"
            nilai={bulat(s.hasilTerbuka)}
            ket={`Mencapai ${PENGATURAN.ambangBuka} teman di rentang ini`}
          />
          <Baris
            label="Teman yang lanjut jadi pemain"
            nilai={`${desimal(s.persenTemanJadiPemain)}%`}
            ket={`${bulat(s.temanJadiPemain)} dari ${bulat(s.temanKirim)} teman yang mengirim`}
          />
        </dl>
      </Kartu>

      <Kartu>
        <h2 className="text-lg font-bold">Klik per varian</h2>
        <div className="mt-2 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className={kelasKepalaKiri}>
                  Varian
                </th>
                <th scope="col" className={kelasKepala}>
                  Kenalan
                </th>
                <th scope="col" className={kelasKepala}>
                  Toko
                </th>
                <th scope="col" className={kelasKepala}>
                  Waitlist
                </th>
              </tr>
            </thead>
            <tbody>
              {s.perVarian.map((v) => (
                <tr key={v.id}>
                  <th scope="row" className="border-b border-biru-garis px-2 py-2 text-left font-semibold">
                    {v.nama}
                  </th>
                  <td className={kelasSel}>{bulat(v.kenalan)}</td>
                  <td className={kelasSel}>{bulat(v.toko)}</td>
                  <td className={kelasSel}>{bulat(v.waitlist)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-teks-redup">
          Kenalan: klik ke halaman varian. Toko dan waitlist: klik tombol utama di halaman varian.
        </p>
      </Kartu>

      <Kartu>
        <h2 className="text-lg font-bold">Rincian per sumber</h2>
        {s.perSumber.length === 0 ? (
          <p className="mt-2 text-teks-redup">Belum ada data di rentang ini.</p>
        ) : (
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={kelasKepalaKiri}>
                    Sumber
                  </th>
                  <th scope="col" className={kelasKepala}>
                    Mulai
                  </th>
                  <th scope="col" className={kelasKepala}>
                    Selesai
                  </th>
                  <th scope="col" className={kelasKepala}>
                    Isian teman
                  </th>
                  <th scope="col" className={kelasKepala}>
                    Terbuka
                  </th>
                </tr>
              </thead>
              <tbody>
                {s.perSumber.map((b) => (
                  <tr key={b.src}>
                    <th scope="row" className="border-b border-biru-garis px-2 py-2 text-left font-semibold">
                      {b.src}
                    </th>
                    <td className={kelasSel}>{bulat(b.mulai)}</td>
                    <td className={kelasSel}>{bulat(b.pemain)}</td>
                    <td className={kelasSel}>{bulat(b.respons)}</td>
                    <td className={kelasSel}>{bulat(b.terbuka)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-3 text-sm text-teks-redup">
          Sumber diambil dari parameter ?src= di link masuk. (langsung) berarti tanpa parameter.
        </p>
      </Kartu>
    </main>
  );
}
