"use client";

import { useEffect, useState } from "react";
import { birthday, lockedMessage, recipient } from "@/data/content";
import Typewriter from "./Typewriter";

function nextOccurrence() {
  const now = new Date();
  let year = now.getFullYear();
  let target = new Date(year, birthday.month - 1, birthday.day, 0, 0, 0);
  if (target.getTime() <= now.getTime()) {
    target = new Date(year + 1, birthday.month - 1, birthday.day, 0, 0, 0);
  }
  return target;
}

function getRemaining() {
  const now = new Date();
  const target = nextOccurrence();
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { diff, days, hours, minutes, seconds };
}

export default function LockedMessage({ onBack }: { onBack: () => void }) {
  const [remaining, setRemaining] = useState(getRemaining());

  useEffect(() => {
    const id = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const unlocked = remaining.diff <= 0;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      {!unlocked && (
        <>
          <svg viewBox="0 0 48 56" className="w-14 h-16 mb-8">
            <rect x="4" y="24" width="40" height="28" rx="4" fill="#2c1a52" stroke="#c9b8fb" strokeWidth="2" />
            <path
              d="M12 24V16a12 12 0 0124 0v8"
              fill="none"
              stroke="#c9a24b"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="24" cy="38" r="4" fill="#c9a24b" />
          </svg>

          <h2 className="font-display text-2xl md:text-3xl mb-2">
            Not yet
          </h2>
          <p className="text-parchment/60 text-sm mb-10 tracking-wide uppercase">
            unlocks august 17
          </p>

          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "days", value: remaining.days },
              { label: "hrs", value: remaining.hours },
              { label: "min", value: remaining.minutes },
              { label: "sec", value: remaining.seconds },
            ].map((u) => (
              <div key={u.label} className="flex flex-col items-center">
                <span className="font-display text-3xl md:text-4xl text-gold tabular-nums">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-parchment/50 mt-1">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {unlocked && (
        <div className="animate-drift-in max-w-sm">
          <div className="bg-parchment text-midnight-deep rounded-md px-8 py-10 shadow-2xl rotate-[-1deg]">
            <p className="font-script text-2xl mb-3">
              Happy Birthday, {recipient.name}
            </p>
            <Typewriter
              text={lockedMessage}
              className="font-body text-[15px] leading-relaxed text-midnight-deep/80"
            />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onBack}
        className="mt-14 px-8 py-3 rounded-full font-body text-sm tracking-wide bg-periwinkle/10 border border-periwinkle/30 text-parchment/70 hover:border-periwinkle transition-colors"
      >
        Back to choices
      </button>
    </section>
  );
}
