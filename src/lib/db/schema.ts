import { boolean, index, jsonb, pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

/** Satu jawaban pemain: kartu yang dijawab dan versi yang diwakili pilihannya. */
export type Jawaban = { idKartu: string; idVarian: string };

export const players = pgTable(
  "players",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    /** Kode pendek untuk link teman (publik). */
    kodePublik: text("kode_publik").notNull(),
    /** Token panjang dan acak untuk link hasil (rahasia). */
    tokenRahasia: text("token_rahasia").notNull(),
    namaPanggilan: text("nama_panggilan").notNull(),
    jawaban: jsonb("jawaban").$type<Jawaban[]>().notNull(),
    /** Poin tiap versi menurut pemain: { idVarian: poin }. */
    skorSendiri: jsonb("skor_sendiri").$type<Record<string, number>>().notNull(),
    /** Sumber kedatangan dari parameter ?src= (tiktok, ig, qr-box, booth, teman). */
    src: text("src"),
    /** Kode publik pemain yang mengajak, kalau datang dari halaman teman. */
    kodePengajak: text("kode_pengajak"),
    noWhatsapp: text("no_whatsapp"),
    setujuDihubungi: boolean("setuju_dihubungi").notNull().default(false),
    /** Hash perangkat pembuat, supaya pemain tidak mengisi link temannya sendiri. */
    sidikPembuat: text("sidik_pembuat"),
    dibuatPada: timestamp("dibuat_pada", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("players_kode_publik_unik").on(t.kodePublik),
    uniqueIndex("players_token_rahasia_unik").on(t.tokenRahasia),
    index("players_dibuat_pada_idx").on(t.dibuatPada),
  ],
);

export const friendResponses = pgTable(
  "friend_responses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    playerId: uuid("player_id")
      .notNull()
      .references(() => players.id, { onDelete: "cascade" }),
    /** Dua id varian yang dipilih teman. */
    pilihanVarian: jsonb("pilihan_varian").$type<string[]>().notNull(),
    idKalimat: text("id_kalimat").notNull(),
    namaTeman: text("nama_teman"),
    /** Hash perangkat teman. Bersama playerId harus unik: satu perangkat satu respons. */
    sidikPerangkat: text("sidik_perangkat").notNull(),
    dibuatPada: timestamp("dibuat_pada", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex("friend_responses_satu_perangkat").on(t.playerId, t.sidikPerangkat),
    index("friend_responses_player_idx").on(t.playerId),
  ],
);

export const events = pgTable(
  "events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    jenis: text("jenis").notNull(),
    playerId: uuid("player_id").references(() => players.id, { onDelete: "set null" }),
    data: jsonb("data").$type<Record<string, unknown>>(),
    dibuatPada: timestamp("dibuat_pada", { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [index("events_jenis_waktu_idx").on(t.jenis, t.dibuatPada)],
);

export type Pemain = typeof players.$inferSelect;
export type ResponsTeman = typeof friendResponses.$inferSelect;
