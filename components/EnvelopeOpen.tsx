"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import StarsField from "./StarsField";
import FairyDust from "./FairyDust";

export default function EnvelopeOpen({ onDone }: { onDone: () => void }) {
  const flapRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"closed" | "opening" | "rising">(
    "closed"
  );

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        setTimeout(onDone, 500);
      },
    });

    setPhase("opening");

    tl.to(flapRef.current, {
      rotateX: 180,
      duration: 1,
      ease: "power2.inOut",
    })
      .set(flapRef.current, { zIndex: -1 })
      .to(
        letterRef.current,
        {
          y: -220,
          scale: 1.08,
          duration: 1.1,
          ease: "back.out(1.2)",
          onStart: () => setPhase("rising"),
        },
        "-=0.3"
      )
      .to(
        envelopeRef.current,
        {
          opacity: 0,
          scale: 1.15,
          duration: 0.8,
          ease: "power1.in",
        },
        "-=0.4"
      )
      .to(
        letterRef.current,
        {
          scale: 1.6,
          opacity: 0,
          duration: 0.7,
          ease: "power2.in",
        },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-royal-radial overflow-hidden"
    >
      <StarsField count={60} />
      <FairyDust count={30} />

      <div ref={envelopeRef} className="relative" style={{ perspective: 1200 }}>
        <div className="relative w-[280px] h-[190px] sm:w-[360px] sm:h-[240px]">
          {/* envelope body */}
          <div className="absolute inset-0 rounded-md bg-gradient-to-br from-lavender to-royal shadow-glow-purple" />
          <div className="absolute inset-0 rounded-md overflow-hidden">
            <div className="absolute left-0 bottom-0 w-0 h-0 border-l-[140px] sm:border-l-[180px] border-l-transparent border-r-[140px] sm:border-r-[180px] border-r-transparent border-b-[95px] sm:border-b-[120px] border-b-royal-dark/70" />
          </div>

          {/* letter peeking / rising */}
          <div
            ref={letterRef}
            className="absolute left-1/2 top-4 -translate-x-1/2 w-[220px] sm:w-[280px] h-[150px] sm:h-[190px] rounded-sm parchment-texture flex items-center justify-center px-4 text-center z-10"
          >
            <p className="font-script text-royal-deep text-xl sm:text-2xl leading-snug">
              For my forever princess ✨
            </p>
          </div>

          {/* top flap */}
          <div
            ref={flapRef}
            className="absolute left-0 top-0 w-full h-1/2 origin-top z-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="w-0 h-0 mx-auto"
              style={{
                borderLeft: "140px solid transparent",
                borderRight: "140px solid transparent",
                borderTop: "95px solid #C8A2FF",
                filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.35))",
              }}
            />
          </div>
        </div>
      </div>

      <p className="absolute bottom-14 text-lavender-light/80 font-body text-sm tracking-wide animate-pulse">
        {phase === "rising" ? "Unfolding your first memory..." : "Opening your gift..."}
      </p>
    </motion.div>
  );
}
