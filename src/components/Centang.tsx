/** Tanda centang kecil untuk pilihan yang aktif. Selalu dipakai bersama perubahan warna, bukan sendirian. */
export function Centang({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
