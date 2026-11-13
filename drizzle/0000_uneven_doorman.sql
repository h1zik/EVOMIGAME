CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"jenis" text NOT NULL,
	"player_id" uuid,
	"data" jsonb,
	"dibuat_pada" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "friend_responses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"player_id" uuid NOT NULL,
	"pilihan_varian" jsonb NOT NULL,
	"id_kalimat" text NOT NULL,
	"nama_teman" text,
	"sidik_perangkat" text NOT NULL,
	"dibuat_pada" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"kode_publik" text NOT NULL,
	"token_rahasia" text NOT NULL,
	"nama_panggilan" text NOT NULL,
	"jawaban" jsonb NOT NULL,
	"skor_sendiri" jsonb NOT NULL,
	"src" text,
	"kode_pengajak" text,
	"no_whatsapp" text,
	"setuju_dihubungi" boolean DEFAULT false NOT NULL,
	"sidik_pembuat" text,
	"dibuat_pada" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "friend_responses" ADD CONSTRAINT "friend_responses_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "events_jenis_waktu_idx" ON "events" USING btree ("jenis","dibuat_pada");--> statement-breakpoint
CREATE UNIQUE INDEX "friend_responses_satu_perangkat" ON "friend_responses" USING btree ("player_id","sidik_perangkat");--> statement-breakpoint
CREATE INDEX "friend_responses_player_idx" ON "friend_responses" USING btree ("player_id");--> statement-breakpoint
CREATE UNIQUE INDEX "players_kode_publik_unik" ON "players" USING btree ("kode_publik");--> statement-breakpoint
CREATE UNIQUE INDEX "players_token_rahasia_unik" ON "players" USING btree ("token_rahasia");--> statement-breakpoint
CREATE INDEX "players_dibuat_pada_idx" ON "players" USING btree ("dibuat_pada");