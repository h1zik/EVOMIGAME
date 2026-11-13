import { isi, TEKS } from "@content/teks";
import { buatPratinjau, UKURAN_PRATINJAU } from "@/lib/kartu/Pratinjau";
import { ambilPemainDariKode } from "@/lib/pemain";

export const alt = TEKS.namaGame;
export const size = UKURAN_PRATINJAU;
export const contentType = "image/png";

/** Gambar pratinjau link teman: "Menurut kamu, {nama} versi yang mana?" */
export default async function Image({ params }: { params: Promise<{ kode: string }> }) {
  const { kode } = await params;
  const pemain = await ambilPemainDariKode(kode);
  if (!pemain) return buatPratinjau(TEKS.awal.judul, TEKS.awal.penjelasan);
  return buatPratinjau(isi(TEKS.teman.judulPratinjau, { nama: pemain.namaPanggilan }), TEKS.teman.keteranganPratinjau);
}
