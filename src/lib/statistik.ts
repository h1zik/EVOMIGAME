import { sql } from "drizzle-orm";
import { PENGATURAN } from "@content/pengaturan";
import { DAFTAR_VARIAN } from "@content/varian";
import { ambilDb } from "./db/client";

/** Rentang tanggal dalam bentuk YYYY-MM-DD, dihitung menurut waktu Indonesia barat (WIB). */
export type Rentang = { dari: string; sampai: string };

const POLA_TANGGAL = /^\d{4}-\d{2}-\d{2}$/;

function tanggalWib(d: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Jakarta" }).format(d);
}

/** Rentang bawaan: 30 hari terakhir sampai hari ini. Masukan yang tidak sah diganti nilai bawaan. */
export function rapikanRentang(dari?: string, sampai?: string): Rentang {
  const hariIni = tanggalWib(new Date());
  const tigaPuluhHariLalu = tanggalWib(new Date(Date.now() - 29 * 86_400_000));
  const d = dari && POLA_TANGGAL.test(dari) ? dari : tigaPuluhHariLalu;
  const s = sampai && POLA_TANGGAL.test(sampai) ? sampai : hariIni;
  return d <= s ? { dari: d, sampai: s } : { dari: s, sampai: d };
}

export type Statistik = {
  mulaiMain: number;
  selesaiKuis: number;
  membagikan: number;
  totalRespons: number;
  rataTeman: number;
  temanKirim: number;
  temanJadiPemain: number;
  persenTemanJadiPemain: number;
  hasilTerbuka: number;
  unduhKartu: number;
  klikVarian: number;
  nomorWhatsapp: number;
  perVarian: { id: string; nama: string; toko: number; waitlist: number; kenalan: number }[];
  perSumber: { src: string; mulai: number; pemain: number; respons: number; terbuka: number }[];
};

type Baris = Record<string, unknown>;
const angka = (v: unknown) => Number(v ?? 0) || 0;

export async function ambilStatistik({ dari, sampai }: Rentang): Promise<Statistik> {
  const db = await ambilDb();
  // Awal hari "dari" sampai akhir hari "sampai", keduanya menurut WIB.
  const awal = `${dari}T00:00:00+07:00`;
  const akhir = `${sampai}T00:00:00+07:00`;
  const dalamRentang = (kolom: ReturnType<typeof sql>) =>
    sql`${kolom} >= ${awal}::timestamptz and ${kolom} < (${akhir}::timestamptz + interval '1 day')`;
  const baris = async (kueri: ReturnType<typeof sql>) => ((await db.execute(kueri)) as unknown as { rows: Baris[] }).rows;

  const [perJenis, pemain, berbagi, respons, perVarianMentah, pemainPerSrc, mulaiPerSrc] = await Promise.all([
    baris(sql`select jenis, count(*) as n from events where ${dalamRentang(sql`dibuat_pada`)} group by jenis`),
    baris(sql`select count(*) as n, count(no_whatsapp) as wa from players where ${dalamRentang(sql`dibuat_pada`)}`),
    baris(sql`
      select count(distinct player_id) as n from events
      where jenis in ('klik_bagikan', 'salin_link') and player_id is not null and ${dalamRentang(sql`dibuat_pada`)}`),
    baris(sql`
      select count(*) as n from friend_responses r
      join players p on p.id = r.player_id
      where ${dalamRentang(sql`p.dibuat_pada`)}`),
    baris(sql`
      select jenis, data->>'idVarian' as id, count(*) as n from events
      where jenis in ('klik_toko', 'klik_waitlist', 'klik_varian') and ${dalamRentang(sql`dibuat_pada`)}
      group by jenis, data->>'idVarian'`),
    baris(sql`
      select coalesce(p.src, '') as src, count(*) as pemain, coalesce(sum(r.n), 0) as respons,
             count(*) filter (where r.n >= ${PENGATURAN.ambangBuka}) as terbuka
      from players p
      left join (select player_id, count(*) as n from friend_responses group by player_id) r on r.player_id = p.id
      where ${dalamRentang(sql`p.dibuat_pada`)}
      group by coalesce(p.src, '')`),
    baris(sql`
      select coalesce(data->>'src', '') as src, count(*) as n from events
      where jenis = 'mulai_main' and ${dalamRentang(sql`dibuat_pada`)}
      group by coalesce(data->>'src', '')`),
  ]);

  const jenis = (nama: string) => angka(perJenis.find((b) => b.jenis === nama)?.n);
  const selesaiKuis = angka(pemain[0]?.n);
  const totalRespons = angka(respons[0]?.n);
  const temanKirim = jenis("teman_kirim");
  const temanJadiPemain = jenis("teman_jadi_pemain");

  const klik = (namaJenis: string, id: string) =>
    angka(perVarianMentah.find((b) => b.jenis === namaJenis && b.id === id)?.n);

  const sumber = new Map<string, { mulai: number; pemain: number; respons: number; terbuka: number }>();
  const ambil = (src: string) => {
    const kunci = src || "(langsung)";
    if (!sumber.has(kunci)) sumber.set(kunci, { mulai: 0, pemain: 0, respons: 0, terbuka: 0 });
    return sumber.get(kunci)!;
  };
  for (const b of pemainPerSrc) {
    const s = ambil(String(b.src ?? ""));
    s.pemain = angka(b.pemain);
    s.respons = angka(b.respons);
    s.terbuka = angka(b.terbuka);
  }
  for (const b of mulaiPerSrc) ambil(String(b.src ?? "")).mulai = angka(b.n);

  return {
    mulaiMain: jenis("mulai_main"),
    selesaiKuis,
    membagikan: angka(berbagi[0]?.n),
    totalRespons,
    rataTeman: selesaiKuis ? totalRespons / selesaiKuis : 0,
    temanKirim,
    temanJadiPemain,
    persenTemanJadiPemain: temanKirim ? (temanJadiPemain / temanKirim) * 100 : 0,
    hasilTerbuka: jenis("hasil_terbuka"),
    unduhKartu: jenis("unduh_kartu"),
    klikVarian: jenis("klik_varian"),
    nomorWhatsapp: angka(pemain[0]?.wa),
    perVarian: DAFTAR_VARIAN.map((v) => ({
      id: v.id,
      nama: v.namaTampil,
      toko: klik("klik_toko", v.id),
      waitlist: klik("klik_waitlist", v.id),
      kenalan: klik("klik_varian", v.id),
    })),
    perSumber: [...sumber.entries()]
      .map(([src, s]) => ({ src, ...s }))
      .sort((a, b) => b.pemain - a.pemain || b.mulai - a.mulai),
  };
}
