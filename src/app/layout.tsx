import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { cssWarnaVarian } from "@content/varian";
import { TEKS } from "@content/teks";
import { TangkapSumber } from "@/components/TangkapSumber";
import { WARNA } from "@/lib/kartu/aset";
import "./globals.css";

const nohemi = localFont({
  src: [
    { path: "../../public/fonts/Nohemi-Regular.otf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Nohemi-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Nohemi-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: {
    default: TEKS.namaGame,
    template: `%s | ${TEKS.namaGame}`,
  },
  description: TEKS.awal.penjelasan,
  applicationName: TEKS.namaGame,
  openGraph: {
    title: TEKS.namaGame,
    description: TEKS.awal.penjelasan,
    siteName: TEKS.namaGame,
    type: "website",
    locale: "id_ID",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: WARNA.biru,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={nohemi.variable}>
      <head>
        {/* Warna varian dari content/varian.ts, dijadikan CSS variables. */}
        <style dangerouslySetInnerHTML={{ __html: cssWarnaVarian() }} />
      </head>
      <body>
        <TangkapSumber />
        {/* Kolom tengah: dirancang untuk 360 sampai 430px, maksimal 480px. */}
        <div className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col">{children}</div>
      </body>
    </html>
  );
}
