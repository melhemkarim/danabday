"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let curX = x;
    let curY = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      curX += (x - curX) * 0.12;
      curY += (y - curY) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${curX - 200}px, ${curY - 200}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor-glow hidden md:block" ref={ref}>
      <div
        className="w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,213,107,0.15) 0%, rgba(200,162,255,0.08) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
