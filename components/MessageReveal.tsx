"use client";

import { useState } from "react";
import { messageNote } from "@/data/content";

export default function MessageReveal({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      {!open && (
        <button type="button" onClick={() => setOpen(true)} aria-label="Open the note">
          <svg viewBox="0 0 76 56" className="w-40 h-28 hover:scale-105 transition-transform">
            <rect x="2" y="2" width="72" height="52" rx="3" fill="#2c1a52" stroke="#c9b8fb" strokeWidth="1.5" />
            <path d="M2 6 L38 34 L74 6" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="mt-6 font-script text-xl text-parchment/70">tap to open</p>
        </button>
      )}

      {open && (
        <div className="animate-drift-in max-w-sm">
          <div className="bg-parchment text-midnight-deep rounded-md px-8 py-10 shadow-2xl rotate-[-1deg]">
            <p className="font-script text-2xl leading-relaxed">{messageNote}</p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="mt-10 px-8 py-3 rounded-full font-body text-sm tracking-wide bg-gold text-midnight-deep hover:scale-105 transition-transform duration-300"
          >
        Back to choices
      </button>
        </div>
      )}
    </section>
  );
}
