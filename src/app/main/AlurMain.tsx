"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { PENGATURAN } from "@content/pengaturan";
import { isi, TEKS } from "@content/teks";
import { Kartu } from "@/components/Kartu";
import { Logo } from "@/components/Logo";
import { Tombol } from "@/components/Tombol";
import { bersihkanNama, periksaPanjangNama } from "@/lib/nama";
import { catatEvent } from "@/lib/event-klien";
import { ambilIdPerangkat, simpanHasil } from "@/lib/perangkat-klien";
import { ambilSumber, tangkapSumber } from "@/lib/sumber-klien";
import { buatPemain, periksaNama } from "./aksi";

export type KartuTampil = {
  id: string;
  situasi: string;
  pilihan: { idVarian: string; teks: string }[];
};

type Jawaban = { idKartu: string; idVarian: string };

/** Langkah -1 adalah isi nama. Langkah 0 dan seterusnya adalah kartu situasi. */
const LANGKAH_NAMA = -1;

export function AlurMain({ kartu }: { kartu: KartuTampil[] }) {
  const router = useRouter();
  const [langkah, setLangkah] = useState(LANGKAH_NAMA);
  const [nama, setNama] = useState("");
  const [galat, setGalat] = useState<string | null>(null);
  const [jawaban, setJawaban] = useState<Jawaban[]>([]);
  const [terpilih, setTerpilih] = useState<string | null>(null);
  const [mengirim, setMengirim] = useState(false);
  const [memeriksa, setMemeriksa] = useState(false);
  const judulRef = useRef<HTMLHeadingElement>(null);
  const pertamaKali = useRef(true);

  const total = kartu.length;
  const kartuIni = langkah >= 0 ? kartu[langkah] : null;

  // Tiap ganti layar, fokus pindah ke judulnya supaya pembaca layar dan keyboard ikut pindah.
  useEffect(() => {
    if (pertamaKali.current) {
      pertamaKali.current = false;
      return;
    }
    judulRef.current?.focus();
  }, [langkah, mengirim]);

  async function kirimNama(e: FormEvent) {
    e.preventDefault();
    if (memeriksa) return;
    const bersih = bersihkanNama(nama);
    const masalah = periksaPanjangNama(bersih);
    if (masalah === "pendek") return setGalat(TEKS.galat.namaPendek);
    if (masalah === "panjang") return setGalat(TEKS.galat.namaPanjang);

    // Filter kata kasar ada di server, jadi nama dicek dulu sebelum kartu pertama.
    setMemeriksa(true);
    try {
      const hasil = await periksaNama(bersih);
      if (!hasil.ok) {
        setGalat(hasil.pesan);
        return;
      }
      setNama(hasil.nama);
    } catch {
      setGalat(TEKS.galat.umum);
      return;
    } finally {
      setMemeriksa(false);
    }
    setGalat(null);
    tangkapSumber();
    const { src } = ambilSumber();
    catatEvent("mulai_main", src ? { src } : {});
    setLangkah(0);
  }

  async function kirimSemua(semua: Jawaban[]) {
    setMengirim(true);
    setGalat(null);
    try {
      const { src, dari } = ambilSumber();
      const hasil = await buatPemain({
        nama,
        jawaban: semua,
        idPerangkat: ambilIdPerangkat(),
        src,
        kodePengajak: dari,
      });
      if (hasil.ok) {
        simpanHasil({ token: hasil.token, kode: hasil.kode, nama });
        router.replace(`/hasil/${hasil.token}`);
        return;
      }
      setGalat(hasil.pesan);
    } catch {
      setGalat(TEKS.galat.umum);
    }
    setMengirim(false);
  }

  function pilih(idVarian: string) {
    if (!kartuIni || terpilih) return;
    setTerpilih(idVarian);
    const semua = [...jawaban, { idKartu: kartuIni.id, idVarian }];
    // Jeda singkat supaya pilihan yang ditekan sempat terlihat sebelum kartu berganti.
    window.setTimeout(() => {
      setJawaban(semua);
      setTerpilih(null);
      if (langkah + 1 < total) setLangkah(langkah + 1);
      else void kirimSemua(semua);
    }, 220);
  }

  function kembali() {
    if (terpilih || mengirim) return;
    setGalat(null);
    setJawaban(jawaban.slice(0, -1));
    setLangkah(langkah - 1);
  }

  const selesaiMenjawab = jawaban.length === total;

  return (
    <main className="flex flex-1 flex-col px-5 pt-6 pb-8">
      <header className="flex min-h-11 items-center justify-between">
        <Link href="/" aria-label="EVOMI, kembali ke halaman awal" className="rounded-md">
          <Logo putih tinggi={22} />
        </Link>
        {kartuIni ? (
          <p className="label-kecil">{isi(TEKS.main.progres, { ke: langkah + 1, total })}</p>
        ) : null}
      </header>

      {/* Indikator progres: satu ruas per kartu. */}
      <div className="mt-3 flex gap-1.5" aria-hidden="true">
        {kartu.map((k, i) => (
          <span
            key={k.id}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < jawaban.length || (i === langkah && !selesaiMenjawab) ? "bg-putih" : "bg-putih/30"
            } ${i === langkah && i >= jawaban.length ? "opacity-70" : ""}`}
          />
        ))}
      </div>

      {/* Kartu menempel di atas supaya letak pertanyaan tidak loncat saat tinggi kartu berubah. */}
      <div className="flex flex-1 flex-col pt-8 pb-6">
        {langkah === LANGKAH_NAMA ? (
          <Kartu key="nama" className="anim-geser">
            <form onSubmit={kirimNama} noValidate>
              <h1 ref={judulRef} tabIndex={-1} className="text-[1.75rem] leading-tight font-bold outline-none">
                <label htmlFor="nama">{TEKS.main.tanyaNama}</label>
              </h1>
              <input
                id="nama"
                name="nama"
                type="text"
                value={nama}
                onChange={(e) => {
                  setNama(e.target.value);
                  if (galat) setGalat(null);
                }}
                maxLength={PENGATURAN.namaMaks}
                autoComplete="nickname"
                autoCapitalize="words"
                autoCorrect="off"
                spellCheck={false}
                enterKeyHint="next"
                aria-describedby={galat ? "nama-bantuan nama-galat" : "nama-bantuan"}
                aria-invalid={galat ? true : undefined}
                className="mt-5 block h-14 w-full rounded-[18px] border-2 border-biru-garis bg-biru-muda px-4 text-xl font-semibold text-teks outline-none focus:border-biru"
              />
              <p id="nama-bantuan" className="mt-2 text-teks-redup">
                {TEKS.main.bantuanNama}
              </p>
              {galat ? (
                <p id="nama-galat" role="alert" className="mt-2 font-semibold text-[var(--v-rebel)]">
                  {galat}
                </p>
              ) : null}
              <Tombol type="submit" gaya="biru" className="mt-6" disabled={memeriksa}>
                {TEKS.main.tombolLanjut}
              </Tombol>
            </form>
          </Kartu>
        ) : mengirim || (selesaiMenjawab && !galat) ? (
          <div className="text-center" role="status">
            <h1 ref={judulRef} tabIndex={-1} className="text-2xl font-bold outline-none">
              {TEKS.main.menyimpan}
            </h1>
          </div>
        ) : selesaiMenjawab && galat ? (
          <Kartu key="galat">
            <h1 ref={judulRef} tabIndex={-1} role="alert" className="text-xl leading-snug font-bold outline-none">
              {galat}
            </h1>
            <Tombol gaya="biru" className="mt-5" onClick={() => void kirimSemua(jawaban)}>
              {TEKS.main.cobaLagi}
            </Tombol>
          </Kartu>
        ) : kartuIni ? (
          <Kartu key={kartuIni.id} className="anim-geser">
            <h1
              ref={judulRef}
              tabIndex={-1}
              className="text-[1.625rem] leading-[1.2] font-bold text-balance outline-none"
            >
              {kartuIni.situasi}
            </h1>
            <ul className="mt-5 grid gap-3">
              {kartuIni.pilihan.map((p) => {
                const aktif = terpilih === p.idVarian;
                return (
                  <li key={p.idVarian}>
                    <button
                      type="button"
                      onClick={() => pilih(p.idVarian)}
                      disabled={terpilih !== null}
                      aria-pressed={aktif}
                      className={`flex min-h-[58px] w-full items-center rounded-[18px] border-2 px-4 py-3 text-left text-[1.0625rem] leading-snug font-semibold transition-colors duration-150 ${
                        aktif
                          ? "border-biru bg-biru text-putih"
                          : "border-biru-garis bg-putih text-teks hover:bg-biru-muda active:bg-biru-muda"
                      }`}
                    >
                      {p.teks}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Kartu>
        ) : null}

        {langkah > LANGKAH_NAMA && !mengirim && !selesaiMenjawab ? (
          <button
            type="button"
            onClick={kembali}
            className="mx-auto mt-3 min-h-11 rounded-full px-5 font-semibold underline underline-offset-4"
          >
            {TEKS.main.kembali}
          </button>
        ) : null}
      </div>
    </main>
  );
}
