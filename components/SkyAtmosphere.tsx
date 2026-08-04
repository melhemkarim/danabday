"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function Cloud({ top, scale, duration, delay, opacity }: { top: string; scale: number; duration: number; delay: number; opacity: number }) {
  return (
    <motion.div
      className="absolute left-0"
      style={{ top }}
      initial={{ x: "-30vw" }}
      animate={{ x: "130vw" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <svg width={220 * scale} height={90 * scale} viewBox="0 0 220 90" style={{ opacity }}>
        <ellipse cx="60" cy="55" rx="55" ry="30" fill="#C8A2FF" />
        <ellipse cx="120" cy="40" rx="65" ry="35" fill="#E7D4FF" />
        <ellipse cx="170" cy="58" rx="45" ry="26" fill="#C8A2FF" />
      </svg>
    </motion.div>
  );
}

function Butterfly({ top, left, delay, hue }: { top: string; left: string; delay: number; hue: string }) {
  return (
    <motion.div
      className="absolute"
      style={{ top, left }}
      animate={{
        y: [0, -24, 0, -12, 0],
        x: [0, 18, -10, 22, 0],
      }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        animate={{ scaleX: [1, 0.6, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M13 10 C 8 -4, -4 0, 6 10 C -4 20, 8 24, 13 10 Z" fill={hue} opacity="0.85" />
        <path d="M13 10 C 18 -4, 30 0, 20 10 C 30 20, 18 24, 13 10 Z" fill={hue} opacity="0.85" />
        <rect x="12" y="4" width="2" height="12" rx="1" fill="#3a2060" />
      </motion.svg>
    </motion.div>
  );
}

export default function SkyAtmosphere() {
  const clouds = useMemo(
    () => [
      { top: "8%", scale: 1.1, duration: 55, delay: 0, opacity: 0.35 },
      { top: "18%", scale: 0.7, duration: 70, delay: 8, opacity: 0.25 },
      { top: "4%", scale: 0.85, duration: 65, delay: 20, opacity: 0.2 },
    ],
    []
  );

  const butterflies = useMemo(
    () => [
      { top: "30%", left: "15%", delay: 0, hue: "#FFD56B" },
      { top: "55%", left: "80%", delay: 1.4, hue: "#C8A2FF" },
      { top: "70%", left: "22%", delay: 2.8, hue: "#FBD6E5" },
      { top: "22%", left: "68%", delay: 0.7, hue: "#FFD56B" },
    ],
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* light rays */}
      <div
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[140%] opacity-30"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 0%, transparent 0deg, rgba(255,213,107,0.25) 8deg, transparent 16deg, transparent 40deg, rgba(200,162,255,0.2) 48deg, transparent 56deg, transparent 100deg)",
        }}
      />
      {clouds.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}
      {butterflies.map((b, i) => (
        <Butterfly key={i} {...b} />
      ))}
    </div>
  );
}
