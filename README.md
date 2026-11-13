# Versiku Kata Kamu

Game web singkat untuk EVOMI. Pemain menjawab 5 kartu situasi, melihat komposisi "versi menurutku", lalu mengirim link ke teman. Setelah 3 teman mengisi, terbuka perbandingan dengan "versi kata teman".

Tanpa install, tanpa login, tanpa analitik pihak ketiga, tanpa audio.

- [Menjalankan di komputer sendiri](#menjalankan-di-komputer-sendiri)
- [Mengedit konten](#mengedit-konten)
- [Deploy dengan Docker](#deploy-dengan-docker)
- [Halaman admin](#halaman-admin)
- [Yang perlu diisi sebelum tayang](#yang-perlu-diisi-sebelum-tayang)
- [Catatan teknis](#catatan-teknis)

## Menjalankan di komputer sendiri

Butuh Node.js 20.9 atau lebih baru. Tidak perlu memasang database.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Tanpa pengaturan apa pun, data disimpan di PGlite (PostgreSQL tertanam) di folder `.data/pglite`. Hapus folder itu kalau mau mulai dari data kosong.

Untuk membuka `/admin` di lokal, buat file `.env.local`:

```
ADMIN_KEY=kunci-pilihanmu
```

Mencoba alur teman di satu komputer: satu perangkat hanya bisa mengisi sekali untuk satu pemain, jadi buka link teman di jendela penyamaran atau browser yang berbeda untuk tiap "teman".

Mencoba dari HP di jaringan wifi yang sama: jalankan `npm run dev -- -H 0.0.0.0`, lalu buka `http://ALAMAT-IP-KOMPUTER:3000` dari HP.

### Tes

```bash
npm test
```

Mencakup perhitungan skor, pembulatan persen (jumlah selalu 100, tidak ada 0%), logika sorotan, UTM, filter kata kasar, dan pembatas permintaan.

## Mengedit konten

Semua teks dan pengaturan ada di folder `content/`. Komponen tidak perlu disentuh.

| File | Isi |
|---|---|
| `content/varian.ts` | Daftar varian: nama, warna, maskot, deskripsi, link Shopee, `tersedia`, `teksPenawaran`, link waitlist |
| `content/kartu.ts` | Kartu situasi dan pilihan jawabannya |
| `content/kalimat.ts` | Kalimat validasi yang bisa dipilih teman |
| `content/teks.ts` | Semua teks antarmuka |
| `content/pengaturan.ts` | Angka aturan game: jumlah kartu, ambang buka (3), batas respons (30), ambang sorotan (10), batas permintaan, kontak privasi |
| `content/privasi.ts` | Isi halaman kebijakan privasi |
| `content/kata-kasar.ts` | Daftar kata untuk menyaring nama panggilan |

Aturan menulis teks game: bahasa sehari-hari, pakai kata "versi" (bukan "tipe" atau "kepribadian"), tanpa em dash, tanpa harga, tanpa klaim ketahanan atau kemasan. Hasil selalu berupa komposisi semua versi, tidak pernah "kamu adalah satu varian".

Setelah mengedit konten di server, build ulang supaya perubahan tayang (lihat bagian deploy).

### Mengubah tombol varian ke waitlist

Di `content/varian.ts`, ubah `tersedia` varian itu menjadi `false`. Tombol utamanya berganti dari "Lihat di Shopee" menjadi "Kabari aku kalau sudah ada" dan mengarah ke `urlWaitlist`.

### Menambah varian baru

1. Tambahkan satu entri di `content/varian.ts` (id, kode, nama, warna, dan seterusnya).
2. Taruh file maskotnya di `public/maskot/` (PNG transparan) dan tulis lokasinya di kolom `maskot`.
3. Tambahkan satu pilihan dengan kode varian itu di tiap kartu di `content/kartu.ts`.
4. Tambahkan kalimat validasinya di `content/kalimat.ts`.

Warna varian otomatis menjadi CSS variable `--v-{id}` dan `--v-{id}-muda`.

### Mengganti aset

| Aset | Lokasi |
|---|---|
| Maskot | `public/maskot/{id}.png` |
| Logo | `public/logo/evomi-logo.webp` (halaman) dan `public/logo/evomi-logo-putih.png` (kartu gambar) |
| Font Nohemi | `public/fonts/Nohemi-{Regular,SemiBold,Bold}.otf` |

Kartu hasil dan gambar pratinjau dibuat di server dan hanya membaca PNG, jadi maskot dan logo untuk kartu harus PNG.

## Deploy dengan Docker

Butuh VPS dengan Docker dan Docker Compose. Database PostgreSQL ikut dijalankan oleh `docker-compose.yml`.

1. Salin proyek ini ke server.
2. Buat file `.env` dari contohnya, lalu isi:

   ```bash
   cp .env.example .env
   ```

   | Variabel | Keterangan |
   |---|---|
   | `BASE_URL` | Alamat game, misalnya `https://versiku.evomi.id`. Tanpa garis miring di akhir. |
   | `POSTGRES_PASSWORD` | Kata sandi database. Pakai huruf dan angka saja. |
   | `SIDIK_SALT` | Teks acak panjang. Jangan diganti setelah game berjalan. |
   | `ADMIN_KEY` | Kunci halaman `/admin`, minimal 8 karakter. |

   Membuat teks acak: `openssl rand -hex 32`

3. Jalankan:

   ```bash
   docker compose up -d --build
   ```

   Aplikasi berjalan di `127.0.0.1:3000` pada server. Tabel database dibuat otomatis saat permintaan pertama masuk.

4. Pasang reverse proxy untuk domain dan HTTPS. Contoh dengan Caddy (`/etc/caddy/Caddyfile`):

   ```
   versiku.evomi.id {
       reverse_proxy 127.0.0.1:3000
   }
   ```

   Caddy mengurus sertifikat HTTPS sendiri dan meneruskan alamat IP pengunjung lewat `X-Forwarded-For`, yang dipakai pembatas permintaan. Kalau memakai nginx, pastikan header `X-Forwarded-For`, `X-Forwarded-Proto`, dan `Host` diteruskan.

   Jangan membuka port 3000 langsung ke internet. Tanpa reverse proxy, header `X-Forwarded-For` bisa dipalsukan pengunjung dan pembatas permintaan jadi tidak berguna.

### Memperbarui

Setelah mengubah konten atau kode:

```bash
docker compose up -d --build
```

Data di database tidak hilang, karena disimpan di volume `data-db`.

Kalau `BASE_URL` diganti, build ulang juga dengan perintah yang sama.

### Cadangan database

```bash
docker compose exec db pg_dump -U versiku versiku > cadangan-$(date +%F).sql
```

### Melihat log

```bash
docker compose logs -f app
```

## Halaman admin

Buka `/admin` dan masukkan `ADMIN_KEY`. Isinya:

- Mulai main, selesai kuis, membagikan link, unduh kartu, nomor WhatsApp yang masuk
- Isian teman, rata-rata teman per pemain, hasil yang terbuka
- Persentase teman yang lanjut jadi pemain
- Klik per varian: ke halaman varian, ke toko, ke waitlist
- Rincian per sumber (`?src=`)
- Filter rentang tanggal (waktu Indonesia barat)

### Melacak sumber

Tambahkan `?src=` di link yang disebar, misalnya:

- `https://versiku.evomi.id/?src=tiktok`
- `https://versiku.evomi.id/?src=ig`
- `https://versiku.evomi.id/?src=qr-box`
- `https://versiku.evomi.id/?src=booth`

Nilainya bebas: huruf kecil, angka, tanda hubung, maksimal 24 karakter. Pemain yang datang dari tombol "Mau tahu versi kamu juga?" otomatis tercatat `src=teman` beserta kode pemain pengajaknya.

### Event yang dicatat

`mulai_main`, `selesai_kuis`, `klik_bagikan`, `salin_link`, `teman_buka_link`, `teman_kirim`, `hasil_terbuka`, `unduh_kartu`, `klik_varian`, `klik_toko`, `klik_waitlist`, `teman_jadi_pemain`. Semuanya masuk ke tabel `events`.

## Yang perlu diisi sebelum tayang

- [ ] Nomor WhatsApp waitlist di `content/varian.ts` (`WAITLIST_SEMENTARA`, sekarang masih nomor contoh)
- [ ] `BASE_URL` dengan domain asli
- [ ] Deskripsi aroma Sweet Shy di `content/varian.ts` (sekarang memakai deskripsi singkat sebagai pengganti)
- [ ] `teksPenawaran` per varian, kalau ada
- [ ] Kontak untuk permintaan hapus data di `content/pengaturan.ts` (`kontakPrivasi`)
- [ ] Baca ulang `content/privasi.ts` dan sesuaikan kalau perlu

## Catatan teknis

- **Stack**: Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Drizzle ORM, PostgreSQL.
- **Database**: `DATABASE_URL` diisi berarti PostgreSQL asli. Kosong berarti PGlite di `.data/pglite` (hanya untuk lokal). Skema ada di `src/lib/db/schema.ts`. Kalau skema diubah, jalankan `npm run db:generate` untuk membuat file migrasi baru di `drizzle/`. Migrasi dijalankan otomatis saat aplikasi mulai dipakai.
- **Dua link per pemain**: link teman memakai kode publik 8 karakter. Link hasil memakai token acak 256 bit yang dibuat terpisah, jadi tidak bisa ditebak dari link teman.
- **Satu perangkat satu respons**: browser menyimpan id acak di localStorage, server menyimpan hash-nya dan menolak respons kedua lewat indeks unik. Cara ini mencegah isi ganda yang tidak sengaja atau iseng, tapi bukan pengaman mutlak: orang yang membersihkan data browser atau berganti browser bisa mengisi lagi.
- **Pembatas permintaan**: disimpan di memori, per alamat IP. Cukup untuk satu server. Angkanya ada di `content/pengaturan.ts`.
- **Kartu hasil**: dibuat di server di `/api/kartu/{token}` (PNG 1080 x 1920). Tidak pernah memakai foto pengguna.
- **Design token**: semua warna ada di `src/app/globals.css` sebagai CSS variables. Kartu gambar memakai salinan nilainya di `src/lib/kartu/aset.ts`, jadi kalau warna brand berubah, ubah di dua tempat itu.
- **Halaman `/contoh`**: contoh komponen dasar untuk pengecekan tampilan. Tidak ditautkan dari game dan tidak diindeks.
#   E V O M I G A M E  
 