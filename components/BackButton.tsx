export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go back"
      className="fixed top-5 left-5 z-30 flex items-center gap-1.5 text-parchment/60 hover:text-parchment text-sm tracking-wide transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
      </svg>
      back
    </button>
  );
}
