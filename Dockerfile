# syntax=docker/dockerfile:1

# ---- Tahap 1: pasang dependensi ----
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Tahap 2: build ----
FROM node:24-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# Alamat game dipakai saat build untuk link gambar pratinjau di halaman statis.
ARG BASE_URL
ENV BASE_URL=$BASE_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Tahap 3: image yang dijalankan ----
FROM node:24-alpine AS run
WORKDIR /app
ENV NODE_ENV=production     NEXT_TELEMETRY_DISABLED=1     PORT=3000     HOSTNAME=0.0.0.0
RUN addgroup -S app && adduser -S app -G app
# Hasil build mandiri, file statis, aset publik (font, logo, maskot), dan file migrasi database.
COPY --from=build --chown=app:app /app/.next/standalone ./
COPY --from=build --chown=app:app /app/.next/static ./.next/static
COPY --from=build --chown=app:app /app/public ./public
COPY --from=build --chown=app:app /app/drizzle ./drizzle
USER app
EXPOSE 3000
CMD ["node", "server.js"]
