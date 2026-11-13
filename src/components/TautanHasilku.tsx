"use client";

import { useEffect, useState } from "react";
import { TEKS } from "@content/teks";
import { ambilHasilTersimpan } from "@/lib/perangkat-klien";
import { TombolTautan } from "./Tombol";

/** Di halaman awal: kalau perangkat ini pernah main, tampilkan jalan pintas ke hasilnya. */
export function TautanHasilku() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(ambilHasilTersimpan()?.token ?? null);
  }, []);

  if (!token) return null;
  return (
    <TombolTautan href={`/hasil/${token}`} gaya="garis" className="mt-3">
      {TEKS.awal.tombolHasil}
    </TombolTautan>
  );
}
