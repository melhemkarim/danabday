"use client";

import { useState } from "react";
import { recipient } from "@/data/content";

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => {
      onOpen();
    }, 650);
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-midnight-glow" aria-hidden />

      <p className="relative z-10 font-script text-2xl md:text-3xl text-periwinkle-soft mb-2 animate-float-slow">
        for {recipient.name}
      </p>

      <button
        type="button"
        onClick={handleClick}
        aria-label="Open your gift"
        className={`relative z-10 mt-6 focus-visible:outline-none transition-all duration-700 ease-in-out ${
          opening ? "opacity-0 scale-90 -translate-y-6" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative w-64 h-44 md:w-80 md:h-52">
          <div className="absolute inset-0 rounded-sm bg-periwinkle-soft border border-periwinkle shadow-[0_20px_60px_-15px_rgba(142,169,219,0.35)]" />
          <div
            className="absolute inset-x-0 top-0 h-[92px]"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "linear-gradient(160deg, #b7c8ec 0%, #8ea9db 100%)",
            }}
          />
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gold shadow-lg flex items-center justify-center text-midnight-deep font-display font-bold text-lg transition-transform duration-500 ${
              opening ? "scale-0 rotate-12" : "hover:scale-105"
            }`}
          >
            {recipient.name.charAt(0)}
          </div>
        </div>
      </button>

      <p
        className={`relative z-10 mt-8 font-script text-xl text-parchment/80 tracking-wide transition-opacity duration-500 ${
          opening ? "opacity-0" : "opacity-100"
        }`}
      >
        press the seal to open
      </p>

      <p className="relative z-10 mt-16 text-parchment/20 text-[11px] tracking-wide">
        (one of the stars isn&apos;t like the others)
      </p>
    </section>
  );
}
