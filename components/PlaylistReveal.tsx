"use client";

import { useState } from "react";
import { playlist } from "@/data/content";

export default function PlaylistReveal({ onBack }: { onBack: () => void }) {
  const [activeTrack, setActiveTrack] = useState(0);
  const track = playlist[activeTrack];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative w-72 h-72 md:w-80 md:h-80 mb-4">
        {/* spinning grooves, sit behind the video */}
        <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="98" fill="#0f0620" stroke="#c9b8fb" strokeWidth="1" />
          <circle cx="100" cy="100" r="86" fill="none" stroke="#2c1a52" strokeWidth="2" />
          <circle cx="100" cy="100" r="74" fill="none" stroke="#2c1a52" strokeWidth="2" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="#2c1a52" strokeWidth="2" />
        </svg>

        {/* video label on top, stays upright */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[52%] h-[52%] rounded-full overflow-hidden bg-midnight border-4 border-gold shadow-lg">
            {track.youtubeId ? (
              <iframe
                key={track.youtubeId}
                src={`https://www.youtube.com/embed/${track.youtubeId}`}
                title={track.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center px-3">
                <span className="text-parchment/40 text-[11px] font-body text-center">
                  add a YouTube link in content.ts
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center gap-3 mb-12">
        {playlist.map((t, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setActiveTrack(i)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                i === activeTrack
                  ? "bg-gold text-midnight-deep"
                  : "bg-periwinkle/10 text-parchment/70 hover:bg-periwinkle/20"
              }`}
            >
              <span className="font-script text-base mr-1">{t.title}</span>
              <span className="text-xs opacity-70">— {t.artist}</span>
            </button>
          </li>
        ))}
      </ul>

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
