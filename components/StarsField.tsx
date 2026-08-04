"use client";

import { useMemo } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

export default function StarsField({ count = 90 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: `${Math.random() * 4}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
            boxShadow: "0 0 6px 1px rgba(255,255,255,0.8)",
          }}
        />
      ))}
      {/* a few larger sparkle-stars */}
      {stars.slice(0, 10).map((s, i) => (
        <span
          key={`big-${i}`}
          className="absolute animate-twinkle"
          style={{
            top: s.top,
            left: `${(parseFloat(s.left) + 30) % 100}%`,
            animationDelay: s.delay,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z"
              fill="#FFE9B8"
              opacity="0.9"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
