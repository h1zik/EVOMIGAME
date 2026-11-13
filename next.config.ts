import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build mandiri supaya bisa dijalankan di VPS lewat Docker tanpa node_modules penuh.
  output: "standalone",
  poweredByHeader: false,
  devIndicators: false,
  // PGlite membawa file WebAssembly sendiri, jadi tidak ikut dibundel.
  serverExternalPackages: ["@electric-sql/pglite"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
