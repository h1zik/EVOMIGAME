"use client";

import { useEffect } from "react";
import { tangkapSumber } from "@/lib/sumber-klien";

/** Dipasang di layout: membaca ?src= dan ?dari= dari link masuk. Tidak menampilkan apa-apa. */
export function TangkapSumber() {
  useEffect(() => {
    tangkapSumber();
  }, []);
  return null;
}
