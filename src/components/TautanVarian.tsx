"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { catatEvent } from "@/lib/event-klien";

/** Link ke halaman /versi/{id} yang mencatat event klik_varian. */
export function TautanVarian({
  idVarian,
  kode,
  className,
  style,
  children,
  ...lain
}: {
  idVarian: string;
  /** Kode publik pemain, kalau link ini ada di halaman hasilnya. */
  kode?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  "aria-current"?: "page";
}) {
  return (
    <Link
      href={`/versi/${idVarian}`}
      className={className}
      style={style}
      onClick={() => catatEvent("klik_varian", kode ? { idVarian, kode } : { idVarian })}
      {...lain}
    >
      {children}
    </Link>
  );
}
