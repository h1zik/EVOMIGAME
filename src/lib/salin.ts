/**
 * Menyalin teks ke papan klip. Mencoba Clipboard API dulu, lalu cara lama
 * (textarea + execCommand) yang masih dibutuhkan di sebagian browser dalam aplikasi.
 * Mengembalikan false kalau keduanya gagal, supaya layar bisa menampilkan link untuk disalin manual.
 */
export async function salinTeks(teks: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(teks);
      return true;
    }
  } catch {
    // Lanjut ke cara lama.
  }

  try {
    const area = document.createElement("textarea");
    area.value = teks;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "0";
    area.style.left = "0";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    area.setSelectionRange(0, teks.length);
    const berhasil = document.execCommand("copy");
    document.body.removeChild(area);
    return berhasil;
  } catch {
    return false;
  }
}
