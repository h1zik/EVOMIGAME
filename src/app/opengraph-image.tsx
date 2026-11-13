import { TEKS } from "@content/teks";
import { buatPratinjau, UKURAN_PRATINJAU } from "@/lib/kartu/Pratinjau";

export const alt = TEKS.namaGame;
export const size = UKURAN_PRATINJAU;
export const contentType = "image/png";

export default function Image() {
  return buatPratinjau(TEKS.awal.judul, TEKS.awal.penjelasan);
}
