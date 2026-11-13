/** Logo resmi EVOMI (file asli, tidak digambar ulang). Rasio asli 5647 x 1909. */
export function Logo({ putih = false, tinggi = 28 }: { putih?: boolean; tinggi?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/evomi-logo.webp"
      alt="EVOMI"
      width={Math.round((tinggi * 5647) / 1909)}
      height={tinggi}
      className={putih ? "brightness-0 invert" : ""}
      style={{ height: tinggi, width: "auto" }}
    />
  );
}
