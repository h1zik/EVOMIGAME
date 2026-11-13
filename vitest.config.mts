import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const akar = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@content": path.resolve(akar, "content"),
      "@": path.resolve(akar, "src"),
    },
  },
  test: {
    include: ["src/**/*.test.ts", "content/**/*.test.ts"],
  },
});
