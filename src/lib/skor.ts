/**
 * Perhitungan skor, persen, dan sorotan.
 * Fungsi di file ini murni (tanpa database, tanpa konten), supaya mudah dites.
 *
 * `urutan` selalu berisi id varian menurut urutan tampil. Urutan ini juga dipakai
 * untuk memutus seri, jadi hasilnya selalu sama untuk masukan yang sama.
 */

export type Poin = Record<string, number>;
export type Persen = Record<string, number>;

/**
 * Menghitung poin tiap versi: tiap versi mulai dari poin dasar,
 * lalu tiap pilihan menambah 1 poin ke versi yang diwakilinya.
 * Pilihan dengan id yang tidak dikenal diabaikan.
 */
export function hitungPoin(pilihan: readonly string[], urutan: readonly string[], poinDasar = 1): Poin {
  const poin: Poin = {};
  for (const id of urutan) poin[id] = poinDasar;
  for (const id of pilihan) {
    if (id in poin) poin[id] += 1;
  }
  return poin;
}

/**
 * Mengubah poin menjadi persen bulat yang jumlahnya tepat 100
 * dengan metode largest remainder:
 * 1. Tiap versi mendapat bagian bulat ke bawah dari persennya.
 * 2. Sisa poin persen dibagikan satu per satu ke versi dengan pecahan terbesar.
 *    Kalau pecahannya sama, versi yang tampil lebih dulu didahulukan.
 * Terakhir dipastikan tidak ada versi yang 0%.
 */
export function kePersen(poin: Poin, urutan: readonly string[]): Persen {
  const total = urutan.reduce((jumlah, id) => jumlah + (poin[id] ?? 0), 0);
  const hasil: Persen = {};

  if (total <= 0) {
    // Tidak seharusnya terjadi karena ada poin dasar. Dibagi rata sebagai pengaman.
    const rata = Math.floor(100 / urutan.length);
    urutan.forEach((id, i) => {
      hasil[id] = rata + (i < 100 - rata * urutan.length ? 1 : 0);
    });
    return hasil;
  }

  const baris = urutan.map((id, indeks) => {
    const tepat = ((poin[id] ?? 0) * 100) / total;
    const bawah = Math.floor(tepat);
    return { id, indeks, bawah, pecahan: tepat - bawah };
  });

  let sisa = 100 - baris.reduce((jumlah, b) => jumlah + b.bawah, 0);
  const antre = [...baris].sort((a, b) => b.pecahan - a.pecahan || a.indeks - b.indeks);
  for (const b of baris) hasil[b.id] = b.bawah;
  for (let i = 0; sisa > 0; i = (i + 1) % antre.length, sisa--) {
    hasil[antre[i].id] += 1;
  }

  // Pengaman: tidak boleh ada versi 0%. Ambil 1 dari versi yang paling besar.
  for (const id of urutan) {
    if (hasil[id] > 0) continue;
    const terbesar = urutan.reduce((a, b) => (hasil[b] > hasil[a] ? b : a));
    hasil[terbesar] -= 1;
    hasil[id] = 1;
  }

  return hasil;
}

export type Sorotan = { idVarian: string; selisih: number };

/**
 * Mencari versi yang lebih kelihatan di mata teman.
 * Selisih = persen kata teman dikurangi persen menurut pemain.
 * Mengembalikan versi dengan selisih terbesar kalau selisihnya mencapai ambang,
 * atau null kalau pemain dan teman melihat versi yang mirip.
 */
export function cariSorotan(
  persenSendiri: Persen,
  persenTeman: Persen,
  urutan: readonly string[],
  ambang = 10,
): Sorotan | null {
  let terbaik: Sorotan | null = null;
  for (const id of urutan) {
    const selisih = (persenTeman[id] ?? 0) - (persenSendiri[id] ?? 0);
    if (terbaik === null || selisih > terbaik.selisih) terbaik = { idVarian: id, selisih };
  }
  return terbaik && terbaik.selisih >= ambang ? terbaik : null;
}

/**
 * Versi untuk kartu ajakan "Kenalan sama versi ini":
 * versi sorotan kalau ada, kalau tidak versi dengan persen kata teman tertinggi.
 */
export function varianAjakan(sorotan: Sorotan | null, persenTeman: Persen, urutan: readonly string[]): string {
  if (sorotan) return sorotan.idVarian;
  return urutan.reduce((a, b) => ((persenTeman[b] ?? 0) > (persenTeman[a] ?? 0) ? b : a));
}
