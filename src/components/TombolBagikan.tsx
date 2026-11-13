"use client";

import { useState } from "react";
import { isi, TEKS } from "@content/teks";
import { catatEvent } from "@/lib/event-klien";
import { salinTeks } from "@/lib/salin";
import { Tombol, TombolTautan } from "./Tombol";

type Status = "diam" | "tersalin" | "gagal";

/**
 * Tombol bagikan link teman.
 * "Kirim ke teman" memakai Web Share API kalau tersedia. Kalau tidak, link disalin.
 * Di bawahnya selalu ada "Salin link" dan "Kirim lewat WhatsApp" sebagai cadangan,
 * karena Web Share sering tidak tersedia di browser dalam aplikasi.
 */
export function TombolBagikan({ linkTeman, kode }: { linkTeman: string; kode: string }) {
  const [status, setStatus] = useState<Status>("diam");
  const teks = isi(TEKS.bagikan.teks, { link: linkTeman });

  async function salin() {
    catatEvent("salin_link", { kode });
    const berhasil = await salinTeks(linkTeman);
    setStatus(berhasil ? "tersalin" : "gagal");
    if (berhasil) window.setTimeout(() => setStatus("diam"), 2500);
  }

  async function bagikan() {
    if (typeof navigator.share === "function") {
      catatEvent("klik_bagikan", { kode, cara: "bagikan" });
      try {
        // Teks sudah berisi link, jadi url tidak dikirim terpisah supaya tidak dobel.
        await navigator.share({ title: TEKS.bagikan.judul, text: teks });
        return;
      } catch (galat) {
        // Pengguna menutup lembar bagikan: tidak perlu berbuat apa-apa.
        if (galat instanceof DOMException && galat.name === "AbortError") return;
      }
    }
    await salin();
  }

  return (
    <div>
      <Tombol gaya="biru" onClick={() => void bagikan()}>
        {TEKS.hasil.tombolBagikan}
      </Tombol>
      <div className="mt-3 grid gap-2.5">
        <Tombol gaya="garis-biru" ukuran="ringkas" onClick={() => void salin()}>
          {status === "tersalin" ? TEKS.hasil.tersalin : TEKS.hasil.tombolSalinLinkTeman}
        </Tombol>
        <TombolTautan
          href={`https://wa.me/?text=${encodeURIComponent(teks)}`}
          gaya="garis-biru"
          ukuran="ringkas"
          keluar
          onClick={() => catatEvent("klik_bagikan", { kode, cara: "whatsapp" })}
        >
          {TEKS.hasil.tombolWhatsapp}
        </TombolTautan>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {status === "tersalin" ? TEKS.hasil.tersalin : ""}
      </p>
      {status === "gagal" ? (
        <div className="mt-3" role="alert">
          <p className="text-sm text-teks-redup">{TEKS.hasil.gagalSalin}</p>
          <p className="mt-1.5 rounded-[14px] bg-biru-muda px-3 py-2.5 text-sm font-semibold break-all select-all">
            {linkTeman}
          </p>
        </div>
      ) : null}
    </div>
  );
}
