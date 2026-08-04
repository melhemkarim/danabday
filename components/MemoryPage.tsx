"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Memory } from "@/data/memories";
import FairyDust from "./FairyDust";

function MiniButterfly({ style, delay }: { style: React.CSSProperties; delay: number }) {
  return (
    <motion.svg
      width="22"
      height="16"
      viewBox="0 0 26 20"
      style={{ position: "absolute", ...style }}
      animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M13 10 C 8 -4, -4 0, 6 10 C -4 20, 8 24, 13 10 Z" fill="#FFD56B" opacity="0.85" />
      <path d="M13 10 C 18 -4, 30 0, 20 10 C 30 20, 18 24, 13 10 Z" fill="#C8A2FF" opacity="0.85" />
    </motion.svg>
  );
}

export default function MemoryPage({ memory }: { memory: Memory }) {
  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 sm:py-20 overflow-hidden bg-royal-radial">
      <FairyDust count={16} />
      <MiniButterfly style={{ top: "12%", left: "8%" }} delay={0} />
      <MiniButterfly style={{ top: "20%", right: "10%" }} delay={1.2} />
      <MiniButterfly style={{ bottom: "18%", left: "12%" }} delay={2} />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative z-10 flex flex-col items-center gap-8 max-w-xl w-full"
      >
        {/* framed portrait */}
        <div className="relative p-3 rounded-[28px] glass shadow-glow-lg">
          <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-br from-gold via-lavender to-royal opacity-60 blur-md -z-10" />
          <div className="relative w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] rounded-3xl overflow-hidden ring-2 ring-gold/50">
            <Image
              src={memory.image}
              alt={memory.title}
              fill
              sizes="(max-width: 640px) 240px, 300px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl" />
          </div>
          {/* sparkle corners */}
          {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map(
            (pos, i) => (
              <span
                key={i}
                className={`absolute ${pos} text-gold text-lg animate-twinkle`}
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                ✦
              </span>
            )
          )}
        </div>

        <div className="text-center space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl text-gradient-gold font-semibold tracking-wide">
            {memory.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-lavender-light/95 leading-relaxed max-w-md mx-auto italic">
            &ldquo;{memory.message}&rdquo;
          </p>
        </div>
      </motion.div>
    </div>
  );
}
