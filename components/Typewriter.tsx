"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speedMs = 28,
  className = "",
}: {
  text: string;
  speedMs?: number;
  className?: string;
}) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    setShown(0);
    const id = window.setInterval(() => {
      setShown((s) => {
        if (s >= text.length) {
          window.clearInterval(id);
          return s;
        }
        return s + 1;
      });
    }, speedMs);
    return () => window.clearInterval(id);
  }, [text, speedMs]);

  const done = shown >= text.length;

  return (
    <p className={className}>
      {text.slice(0, shown)}
      <span
        aria-hidden
        className={`inline-block w-[2px] h-[1em] align-middle ml-0.5 bg-midnight-deep/60 ${
          done ? "opacity-0" : "animate-twinkle"
        }`}
      />
    </p>
  );
}
