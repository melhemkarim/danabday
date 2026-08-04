"use client";

import { useState } from "react";
import { playlist } from "@/data/content";

export default function MusicPlayer() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const track = playlist[index];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-midnight-light/90 backdrop-blur border border-periwinkle/30 rounded-full pl-4 pr-2 py-2 shadow-lg">
      <button
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? "Pause" : "Play"}
        className="w-9 h-9 rounded-full bg-gold text-midnight-deep flex items-center justify-center shrink-0"
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-4 h-4 ml-0.5" fill="currentColor">
            <path d="M7 5l12 7-12 7z" />
          </svg>
        )}
      </button>
      <div className="text-xs leading-tight pr-2">
        <p className="font-body">{track.title}</p>
        <p className="text-parchment/50">{track.artist}</p>
      </div>
      <button
        onClick={() => setIndex((i) => (i + 1) % playlist.length)}
        aria-label="Next track"
        className="text-parchment/60 hover:text-gold px-2 text-sm"
      >
        ⟳
      </button>
    </div>
  );
}
