"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Memuat ulang data halaman hasil secara berkala dan saat pemain kembali ke tab ini,
 * supaya penghitung teman dan hasil ikut berubah tanpa perlu menyegarkan halaman.
 */
export function SegarkanOtomatis({ tiapMs = 20000 }: { tiapMs?: number }) {
  const router = useRouter();

  useEffect(() => {
    const segarkan = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    const jadwal = window.setInterval(segarkan, tiapMs);
    document.addEventListener("visibilitychange", segarkan);
    window.addEventListener("focus", segarkan);
    return () => {
      window.clearInterval(jadwal);
      document.removeEventListener("visibilitychange", segarkan);
      window.removeEventListener("focus", segarkan);
    };
  }, [router, tiapMs]);

  return null;
}
