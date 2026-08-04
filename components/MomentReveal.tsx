import { moment } from "@/data/content";

export default function MomentReveal({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <svg viewBox="0 0 60 68" className="w-16 h-20 mb-8">
        <rect x="27" y="2" width="6" height="8" rx="1.5" fill="#c9b8fb" />
        <circle cx="30" cy="38" r="26" fill="#1b0f38" stroke="#c9b8fb" strokeWidth="2" />
        <circle cx="30" cy="38" r="20" fill="#2c1a52" stroke="#c9a24b" strokeWidth="1" />
        <line x1="30" y1="38" x2="30" y2="24" stroke="#f6f1e4" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="38" x2="40" y2="42" stroke="#f6f1e4" strokeWidth="2" strokeLinecap="round" />
        <circle cx="30" cy="38" r="2" fill="#c9a24b" />
      </svg>

      <p className="font-script text-2xl text-gold mb-4">{moment.date}</p>
      <p className="font-display text-2xl md:text-3xl max-w-lg leading-snug mb-10">
        {moment.description}
      </p>

      <button
        type="button"
        onClick={onBack}
        className="px-8 py-3 rounded-full font-body text-sm tracking-wide bg-gold text-midnight-deep hover:scale-105 transition-transform duration-300"
      >
        Back to choices
      </button>
    </section>
  );
}
