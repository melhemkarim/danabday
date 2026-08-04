"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { recipient } from "@/data/content";

const TARGET = 10;

export default function ConfettiButton({ onNext }: { onNext: () => void }) {
  const [count, setCount] = useState(0);
  const done = count >= TARGET;

  function handleClick() {
    if (done) return;
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#a78bfa", "#c9a24b", "#f6f1e4", "#e8b4c8"],
    });
    setCount((c) => {
      const next = c + 1;
      if (next >= TARGET) {
        window.setTimeout(() => {
          confetti({
            particleCount: 220,
            spread: 100,
            origin: { y: 0.6 },
            colors: ["#a78bfa", "#c9a24b", "#f6f1e4", "#e8b4c8"],
          });
        }, 150);
      }
      return next;
    });
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      {!done && (
        <>
          <h2 className="font-display text-3xl md:text-4xl mb-3">
            One more thing
          </h2>
          <p className="text-parchment/60 text-sm mb-10 tracking-wide uppercase">
            keep pressing
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="w-40 h-40 rounded-full bg-gold text-midnight-deep font-display text-lg shadow-[0_0_60px_-10px_rgba(201,162,75,0.5)] hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            {count} / {TARGET}
          </button>
        </>
      )}

      {done && (
        <div className="animate-drift-in">
          <p className="font-script text-5xl md:text-6xl text-gold mb-4">
            Happy Birthday
          </p>
          <p className="font-script text-3xl text-parchment/80 mb-10">
            {recipient.name}
          </p>
          <button
            type="button"
            onClick={onNext}
            className="px-8 py-3 rounded-full font-body text-sm tracking-wide bg-periwinkle text-midnight-deep hover:scale-105 transition-transform duration-300"
          >
            Continue
          </button>
        </div>
      )}
    </section>
  );
}
