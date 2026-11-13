import { defineConfig } from "drizzle-kit";

// Dipakai untuk membuat file migrasi: npm run db:generate
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
});
