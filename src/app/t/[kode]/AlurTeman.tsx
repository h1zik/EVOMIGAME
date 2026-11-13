"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { kalimatUntukKode } from "@content/kalimat";
import { PENGATURAN } from "@content/pengaturan";
import { isi, TEKS } from "@content/teks";
import { DAFTAR_VARIAN, type Varian } from "@content/varian";
import { Centang } from "@/components/Centang";
import { Kartu } from "@/components/Kartu";
import { Logo } from "@/components/Logo";
import { Maskot } from "@/components/Maskot";
import { Tombol, TombolTautan } from "@/components/Tombol";
import { catatEvent } from "@/lib/event-klien";
import { ambilHasilTersimpan, ambilIdPerangkat, sudahIsi, tandaiSudahIsi } from "@/lib/perangkat-klien";
import { kirimRespons } from "./aksi";

/**
 * memuat: sedang mengecek penyimpanan perangkat.
 * versi: langkah 1, pilih dua versi.
 * kalimat: langkah 2, pilih satu kalimat.
 * sudah: perangkat ini sudah mengisi.
 * sendiri: pemain membuka link temannya sendiri.
 * penuh: batas respons tercapai saat mengirim.
 */
type Layar = "memuat" | "versi" | "kalimat" | "sudah" | "sendiri" | "penuh";

const warnaVarian = (v: Varian) =>
  ({ "--v": `var(--v-${v.id})`, "--v-muda": `var(--v-${v.id}-muda)` }) as CSSProperties;

export function AlurTeman({ kode, nama }: { kode: string; nama: string }) {
  const router = useRouter();
  const [layar, setLayar] = useState<Layar>("memuat");
  const [pilihan, setPilihan] = useState<string[]>([]);
  const [idKalimat, setIdKalimat] = useState<string | null>(null);
  const [namaTeman, setNamaTeman] = useState("");
  const [tokenSendiri, setTokenSendiri] = useState<string | null>(null);
  const [mengirim, setMengirim] = useState(false);
  const [galat, setGalat] = useState<string | null>(null);
  const judulRef = useRef<HTMLHeadingElement>(null);
  const sudahTampil = useRef(false);

  const butuh = PENGATURAN.jumlahPilihanTeman;

  // Cek di perangkat: apakah ini link milik sendiri, atau sudah pernah mengisi.
  useEffect(() => {
    const milikku = ambilHasilTersimpan();
    if (milikku?.kode === kode) {
      setTokenSendiri(milikku.token);
      setLayar("sendiri");
    } else if (sudahIsi(kode)) {
      setLayar("sudah");
    } else {
      setLayar("versi");
      catatEvent("teman_buka_link", { kode });
    }
  }, [kode]);

  // Saat pindah layar, fokus ikut pindah ke judulnya.
  useEffect(() => {
    if (layar === "memuat") return;
    if (!sudahTampil.current) {
      sudahTampil.current = true;
      return;
    }
    judulRef.current?.focus();
    window.scrollTo({ top: 0 });
  }, [layar]);

  function ubahPilihan(id: string) {
    setPilihan((lama) => {
      if (lama.includes(id)) return lama.filter((x) => x !== id);
      if (lama.length >= butuh) return lama;
      return [...lama, id];
    });
  }

  function keKalimat() {
    if (pilihan.length !== butuh) return;
    setIdKalimat(null);
    setGalat(null);
    setLayar("kalimat");
  }

  async function kirim(e: FormEvent) {
    e.preventDefault();
    if (!idKalimat || mengirim) return;
    setMengirim(true);
    setGalat(null);
    try {
      const hasil = await kirimRespons({ kode, pilihan, idKalimat, namaTeman, idPerangkat: ambilIdPerangkat() });
      if (hasil.ok) {
        tandaiSudahIsi(kode);
        router.replace(`/t/${kode}/terima-kasih`);
        return;
      }
      if (hasil.alasan === "sudah") {
        tandaiSudahIsi(kode);
        setLayar("sudah");
      } else if (hasil.alasan === "sendiri") setLayar("sendiri");
      else if (hasil.alasan === "penuh") setLayar("penuh");
      else if (hasil.alasan === "nama") setGalat(TEKS.teman.namaKasar);
      else if (hasil.alasan === "sering") setGalat(TEKS.galat.terlaluSering);
      else setGalat(TEKS.galat.umum);
    } catch {
      setGalat(TEKS.galat.umum);
    }
    setMengirim(false);
  }

  const kepala = (
    <header className="flex min-h-11 items-center justify-between">
      <Link href="/" aria-label="EVOMI, ke halaman awal" className="rounded-md">
        <Logo putih tinggi={22} />
      </Link>
      {layar === "versi" || layar === "kalimat" ? (
        <p className="label-kecil">{isi(TEKS.teman.langkah, { ke: layar === "versi" ? 1 : 2 })}</p>
      ) : null}
    </header>
  );

  if (layar === "memuat") {
    return <main className="flex flex-1 flex-col px-5 pt-6 pb-8">{kepala}</main>;
  }

  if (layar === "sudah" || layar === "sendiri" || layar === "penuh") {
    const teks =
      layar === "sudah"
        ? isi(TEKS.teman.sudahMengisi, { nama })
        : layar === "penuh"
          ? isi(TEKS.teman.penuh, { nama })
          : TEKS.teman.linkSendiri;
    return (
      <main className="flex flex-1 flex-col px-5 pt-6 pb-8">
        {kepala}
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <h1 ref={judulRef} tabIndex={-1} className="max-w-[20rem] text-2xl leading-snug font-bold text-balance">
            {teks}
          </h1>
          {layar === "sendiri" ? (
            tokenSendiri ? (
              <TombolTautan href={`/hasil/${tokenSendiri}`} gaya="putih" className="mt-8">
                {TEKS.teman.bukaHasilku}
              </TombolTautan>
            ) : null
          ) : (
            <TombolTautan href={`/main?src=teman&dari=${kode}`} gaya="putih" className="mt-8">
              {TEKS.teman.ajakan}
            </TombolTautan>
          )}
        </div>
      </main>
    );
  }

  if (layar === "versi") {
    const penuh = pilihan.length >= butuh;
    return (
      <main className="flex flex-1 flex-col px-5 pt-6 pb-8">
        {kepala}
        <h1
          ref={judulRef}
          tabIndex={-1}
          className="mt-5 text-[1.625rem] leading-[1.2] font-bold text-balance break-words"
        >
          {isi(TEKS.teman.tanya1, { nama })}
        </h1>

        {/* Pilihan ditaruh di dalam kartu putih supaya garis tepi versi biru tetap terlihat di atas latar biru. */}
        <Kartu className="mt-5 !p-3">
        <ul className="grid gap-2.5">
          {DAFTAR_VARIAN.map((v) => {
            const aktif = pilihan.includes(v.id);
            const terkunci = penuh && !aktif;
            return (
              <li key={v.id} style={warnaVarian(v)}>
                <button
                  type="button"
                  onClick={() => ubahPilihan(v.id)}
                  aria-pressed={aktif}
                  aria-disabled={terkunci || undefined}
                  className={`flex min-h-[84px] w-full items-center gap-3 rounded-[18px] border-2 px-3 py-3 text-left text-teks transition-[background-color,border-color,opacity] duration-150 ${
                    aktif ? "border-v bg-v-muda" : "border-biru-garis bg-putih"
                  } ${terkunci ? "opacity-50" : ""}`}
                >
                  <Maskot varian={v} ukuran={56} hias className="shrink-0" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg leading-tight font-bold">{v.namaTampil}</span>
                    <span className="mt-0.5 block leading-snug text-teks-redup">{v.deskripsiSingkat}</span>
                  </span>
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full border-2 ${
                      aktif ? "border-v bg-v text-putih" : "border-biru-garis bg-putih text-putih"
                    }`}
                  >
                    {aktif ? <Centang /> : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        </Kartu>

        <div className="mt-auto pt-6">
          <p className="mb-3 text-center font-semibold" role="status" aria-live="polite">
            {isi(TEKS.teman.dipilih, { jumlah: pilihan.length, total: butuh })}
            {penuh ? <span className="block font-normal">{TEKS.teman.petunjukGanti}</span> : null}
          </p>
          <Tombol gaya="putih" onClick={keKalimat} disabled={!penuh}>
            {TEKS.teman.tombolLanjut}
          </Tombol>
        </div>
      </main>
    );
  }

  // Langkah 2: satu kalimat dari versi yang dipilih, ditambah nama opsional.
  const varianTerpilih = DAFTAR_VARIAN.filter((v) => pilihan.includes(v.id));
  return (
    <main className="flex flex-1 flex-col px-5 pt-6 pb-8">
      {kepala}
      <form onSubmit={kirim} className="flex flex-1 flex-col" noValidate>
        <h1
          ref={judulRef}
          tabIndex={-1}
          className="mt-5 text-[1.625rem] leading-[1.2] font-bold text-balance break-words"
        >
          {isi(TEKS.teman.tanya2, { nama })}
        </h1>

        <Kartu className="mt-5">
          <div className="grid gap-5">
            {varianTerpilih.map((v) => (
              <div key={v.id} style={warnaVarian(v)}>
                <p className="flex items-center gap-2 font-bold">
                  <Maskot varian={v} ukuran={28} hias />
                  {v.namaTampil}
                </p>
                <ul className="mt-2 grid gap-2">
                  {kalimatUntukKode(v.kode).map((k) => {
                    const aktif = idKalimat === k.id;
                    return (
                      <li key={k.id}>
                        <button
                          type="button"
                          onClick={() => setIdKalimat(k.id)}
                          aria-pressed={aktif}
                          className={`flex min-h-[52px] w-full items-center gap-3 rounded-[20px] rounded-bl-md border-2 px-4 py-2.5 text-left leading-snug font-semibold transition-colors duration-150 ${
                            aktif ? "border-v bg-v-muda" : "border-biru-garis bg-putih hover:bg-biru-muda"
                          }`}
                        >
                          <span className="flex-1">{k.teks}</span>
                          {aktif ? (
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-v text-putih">
                              <Centang className="size-3.5" />
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-biru-garis pt-5">
            <label htmlFor="nama-teman" className="font-bold">
              {TEKS.teman.labelNama}
            </label>
            <input
              id="nama-teman"
              name="nama-teman"
              type="text"
              value={namaTeman}
              onChange={(e) => setNamaTeman(e.target.value)}
              maxLength={PENGATURAN.namaMaks}
              autoComplete="nickname"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              aria-describedby="nama-teman-bantuan"
              className="mt-2 block h-13 w-full rounded-[18px] border-2 border-biru-garis bg-biru-muda px-4 text-lg font-semibold text-teks outline-none focus:border-biru"
            />
            <p id="nama-teman-bantuan" className="mt-2 text-teks-redup">
              {TEKS.teman.bantuanNama}
            </p>
          </div>
        </Kartu>

        {galat ? (
          <p role="alert" className="mt-4 rounded-[16px] bg-putih px-4 py-3 font-semibold text-teks">
            {galat}
          </p>
        ) : null}

        <div className="mt-auto pt-6">
          <Tombol type="submit" gaya="putih" disabled={!idKalimat || mengirim}>
            {mengirim ? TEKS.teman.mengirim : TEKS.teman.tombolKirim}
          </Tombol>
          <button
            type="button"
            onClick={() => setLayar("versi")}
            disabled={mengirim}
            className="mx-auto mt-2 block min-h-11 rounded-full px-5 font-semibold underline underline-offset-4"
          >
            {TEKS.teman.tombolUbah}
          </button>
        </div>
      </form>
    </main>
  );
}
