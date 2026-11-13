/**
 * Menambahkan parameter UTM ke link keluar (Shopee atau WhatsApp waitlist):
 * utm_source=versiku, utm_medium=game, utm_campaign={idVarian}.
 * Parameter lain di link itu dibiarkan. UTM bawaan link ditimpa supaya tidak dobel.
 */
export function tambahUtm(url: string, idVarian: string): string {
  try {
    const alamat = new URL(url);
    alamat.searchParams.set("utm_source", "versiku");
    alamat.searchParams.set("utm_medium", "game");
    alamat.searchParams.set("utm_campaign", idVarian);
    return alamat.toString();
  } catch {
    return url;
  }
}
