"use client";

import { useState, type FormEvent } from "react";
import { TEKS } from "@content/teks";
import { hapusWhatsapp, simpanWhatsapp } from "@/app/hasil/[token]/aksi";
import { BarisLipat, Ikon, IKON } from "./BarisLipat";
import { Tombol } from "./Tombol";

/**
 * Tawaran opsional "Dapat kabar dari EVOMI", sebagai satu baris yang bisa dibuka.
 * Kolom nomor baru muncul setelah pemain membuka barisnya, kotak persetujuan
 * tidak dicentang sejak awal, dan nomor hanya disimpan kalau persetujuan dicentang.
 */
export function TawaranWhatsapp({ token, sudahTersimpan }: { token: string; sudahTersimpan: boolean }) {
  const [terbuka, setTerbuka] = useState(false);
  const [tersimpan, setTersimpan] = useState(sudahTersimpan);
  const [nomor, setNomor] = useState("");
  const [setuju, setSetuju] = useState(false);
  const [sibuk, setSibuk] = useState(false);
  const [pesan, setPesan] = useState<{ jenis: "galat" | "info"; teks: string } | null>(null);

  async function simpan(e: FormEvent) {
    e.preventDefault();
    if (sibuk) return;
    if (!setuju) return setPesan({ jenis: "galat", teks: TEKS.whatsapp.galatSetuju });
    setSibuk(true);
    setPesan(null);
    try {
      const hasil = await simpanWhatsapp(token, nomor, setuju);
      if (hasil.ok) {
        setTersimpan(true);
        setTerbuka(false);
        setNomor("");
        setSetuju(false);
        setPesan({ jenis: "info", teks: TEKS.whatsapp.tersimpan });
      } else setPesan({ jenis: "galat", teks: hasil.pesan });
    } catch {
      setPesan({ jenis: "galat", teks: TEKS.galat.umum });
    }
    setSibuk(false);
  }

  async function hapus() {
    if (sibuk) return;
    setSibuk(true);
    setPesan(null);
    try {
      const hasil = await hapusWhatsapp(token);
      if (hasil.ok) {
        setTersimpan(false);
        setTerbuka(false);
        setPesan({ jenis: "info", teks: TEKS.whatsapp.terhapus });
      } else setPesan({ jenis: "galat", teks: hasil.pesan });
    } catch {
      setPesan({ jenis: "galat", teks: TEKS.galat.umum });
    }
    setSibuk(false);
  }

  // Kabar baik (tersimpan, terhapus) tampil di baris keterangan, jadi tetap terbaca saat baris tertutup.
  const info = pesan?.jenis === "info" ? pesan.teks : null;
  const keterangan = tersimpan ? TEKS.whatsapp.tersimpan : (info ?? TEKS.whatsapp.keterangan);

  return (
    <div>
      <BarisLipat
        id="whatsapp"
        ikon={<Ikon d={tersimpan ? IKON.centang : IKON.obrolan} />}
        judul={TEKS.whatsapp.judul}
        keterangan={keterangan}
        terbuka={terbuka}
        onUbah={(buka) => {
          if (!sibuk) setTerbuka(buka);
        }}
      >
        {tersimpan ? (
          <Tombol gaya="garis-biru" ukuran="ringkas" onClick={() => void hapus()} disabled={sibuk}>
            {TEKS.whatsapp.tombolHapus}
          </Tombol>
        ) : (
          <form onSubmit={simpan} noValidate>
            <label htmlFor="nomor-wa" className="font-bold">
              {TEKS.whatsapp.label}
            </label>
            <input
              id="nomor-wa"
              name="nomor-wa"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              value={nomor}
              onChange={(e) => setNomor(e.target.value.replace(/[^\d+\s-]/g, "").slice(0, 18))}
              aria-describedby="nomor-wa-contoh"
              className="mt-2 block h-13 w-full rounded-[18px] border-2 border-biru-garis bg-biru-muda px-4 text-lg font-semibold text-teks outline-none focus:border-biru"
            />
            <p id="nomor-wa-contoh" className="mt-1.5 text-sm text-teks-redup">
              {TEKS.whatsapp.contoh}
            </p>

            <label className="mt-4 flex min-h-11 cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={setuju}
                onChange={(e) => setSetuju(e.target.checked)}
                className="mt-0.5 size-6 shrink-0 accent-[var(--biru)]"
              />
              <span className="text-sm leading-snug text-pretty">{TEKS.whatsapp.setuju}</span>
            </label>

            <Tombol type="submit" gaya="biru" ukuran="ringkas" className="mt-4" disabled={sibuk}>
              {sibuk ? TEKS.whatsapp.menyimpan : TEKS.whatsapp.tombolSimpan}
            </Tombol>
          </form>
        )}

        {pesan?.jenis === "galat" ? (
          <p role="alert" className="mt-3 font-semibold text-bahaya">
            {pesan.teks}
          </p>
        ) : null}
      </BarisLipat>
      <p className="sr-only" role="status" aria-live="polite">
        {info ?? ""}
      </p>
    </div>
  );
}
