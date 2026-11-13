import type { MetadataRoute } from "next";

/** Halaman pribadi (hasil, link teman), pintu keluar, dan admin tidak boleh dirayapi mesin pencari. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/hasil/", "/t/", "/keluar/", "/admin", "/api/", "/contoh"] }],
  };
}
