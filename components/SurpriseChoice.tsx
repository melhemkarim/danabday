"use client";

import { useState } from "react";
import { surprises } from "@/data/content";

type SurpriseKey = (typeof surprises)[number]["key"];

function CameraArt() {
  return (
    <svg viewBox="0 0 80 60" className="w-16 h-12">
      <rect x="4" y="14" width="72" height="42" rx="4" fill="#2c1a52" stroke="#c9b8fb" strokeWidth="1.5" />
      <rect x="26" y="4" width="22" height="12" rx="2" fill="#2c1a52" stroke="#c9b8fb" strokeWidth="1.5" />
      <circle cx="40" cy="36" r="15" fill="#1b0f38" stroke="#c9a24b" strokeWidth="2" />
      <circle cx="40" cy="36" r="8" fill="#0f0620" stroke="#c9b8fb" strokeWidth="1" />
      <circle cx="64" cy="22" r="2.5" fill="#c9a24b" />
    </svg>
  );
}

function PocketWatchArt() {
  return (
    <svg viewBox="0 0 60 68" className="w-12 h-14">
      <rect x="27" y="2" width="6" height="8" rx="1.5" fill="#c9b8fb" />
      <circle cx="30" cy="38" r="26" fill="#1b0f38" stroke="#c9b8fb" strokeWidth="2" />
      <circle cx="30" cy="38" r="20" fill="#2c1a52" stroke="#c9a24b" strokeWidth="1" />
      <line x1="30" y1="38" x2="30" y2="24" stroke="#f6f1e4" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="38" x2="40" y2="42" stroke="#f6f1e4" strokeWidth="2" strokeLinecap="round" />
      <circle cx="30" cy="38" r="2" fill="#c9a24b" />
    </svg>
  );
}

function VinylArt() {
  return (
    <svg viewBox="0 0 70 70" className="w-16 h-16">
      <circle cx="35" cy="35" r="33" fill="#0f0620" stroke="#c9b8fb" strokeWidth="1" />
      <circle cx="35" cy="35" r="26" fill="none" stroke="#2c1a52" strokeWidth="1.5" />
      <circle cx="35" cy="35" r="19" fill="none" stroke="#2c1a52" strokeWidth="1.5" />
      <circle cx="35" cy="35" r="12" fill="#c9a24b" />
      <circle cx="35" cy="35" r="3" fill="#0f0620" />
    </svg>
  );
}

function EnvelopeArt() {
  return (
    <svg viewBox="0 0 76 56" className="w-16 h-12">
      <rect x="2" y="2" width="72" height="52" rx="3" fill="#2c1a52" stroke="#c9b8fb" strokeWidth="1.5" />
      <path d="M2 6 L38 34 L74 6" fill="none" stroke="#c9a24b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockArt() {
  return (
    <svg viewBox="0 0 48 56" className="w-12 h-14">
      <rect x="4" y="24" width="40" height="28" rx="4" fill="#2c1a52" stroke="#c9b8fb" strokeWidth="1.5" />
      <path d="M12 24V16a12 12 0 0124 0v8" fill="none" stroke="#c9a24b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="24" cy="38" r="3.5" fill="#c9a24b" />
    </svg>
  );
}

const art: Record<string, JSX.Element> = {
  camera: <CameraArt />,
  clock: <PocketWatchArt />,
  record: <VinylArt />,
  envelope: <EnvelopeArt />,
  lock: <LockArt />,
};

export default function SurpriseChoice({
  onPick,
  onContinue,
}: {
  onPick: (key: SurpriseKey) => void;
  onContinue: () => void;
}) {
  const [visited, setVisited] = useState<Set<SurpriseKey>>(new Set());

  function handlePick(key: SurpriseKey) {
    setVisited((prev) => new Set(prev).add(key));
    onPick(key);
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl text-center mb-2">
        Choose the surprise
      </h2>
      <p className="text-parchment/60 text-sm mb-12 tracking-wide uppercase">
        look through as many as you like
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-8 max-w-2xl w-full">
        {surprises.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => handlePick(s.key)}
            className={`group relative flex flex-col items-center gap-3 rounded-lg border px-4 py-8 transition-all duration-300 ${
              visited.has(s.key)
                ? "border-gold/60 bg-gold/5"
                : "border-periwinkle/30 hover:border-periwinkle hover:bg-periwinkle/5"
            }`}
          >
            {visited.has(s.key) && (
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold" />
            )}
            <span className="group-hover:scale-105 transition-transform">
              {art[s.icon]}
            </span>
            <span className="font-display text-lg">{s.label}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="mt-14 px-8 py-3 rounded-full font-body text-sm tracking-wide bg-gold text-midnight-deep hover:scale-105 transition-transform duration-300"
      >
        {visited.size > 0 ? "I'm ready, continue" : "Skip ahead"}
      </button>
    </section>
  );
}
