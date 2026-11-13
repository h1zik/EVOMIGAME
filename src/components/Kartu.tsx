import type { ReactNode } from "react";

/** Kartu putih bersudut sangat membulat dengan garis tepi halus. */
export function Kartu({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={`di-atas-putih rounded-kartu border border-biru-garis bg-putih p-5 text-teks ${className}`.trim()}
    >
      {children}
    </section>
  );
}
