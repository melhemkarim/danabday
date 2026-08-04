"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function FairyDust({
  count = 26,
  color = "#FFD56B",
}: {
  count?: number;
  color?: string;
}) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 6,
      drift: (Math.random() - 0.5) * 120,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: color,
            boxShadow: `0 0 ${p.size * 4}px ${p.size}px ${color}55`,
          }}
          animate={{
            y: ["0%", "-120vh"],
            x: [0, p.drift],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
