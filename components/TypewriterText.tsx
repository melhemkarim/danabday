"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  speed = 32,
  startDelay = 0,
  className = "",
  onDone,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          onDone?.();
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <p className={className} style={{ whiteSpace: "pre-wrap" }}>
      {shown}
      <span className="inline-block w-[2px] h-[1em] bg-royal-deep/70 align-middle animate-pulse ml-0.5" />
    </p>
  );
}
