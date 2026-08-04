"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Lock, Heart } from "lucide-react";
import StarsField from "./StarsField";
import FairyDust from "./FairyDust";
import CastleSilhouette from "./CastleSilhouette";
import Countdown from "./Countdown";
import TypewriterText from "./TypewriterText";
import { isBirthdayUnlocked } from "@/lib/utils";

const FINAL_LETTER = `My darling Dana,

If you're reading this, it means the whole world has spun its way back to your day.

I wanted to build you something that felt like magic, because that's exactly what you bring into my life — every ordinary moment, turned into a fairytale, simply because you're in it.

Thank you for your laughter, your softness, your fire, and your endless kindness. Thank you for choosing me, again and again, on the easy days and the hard ones.

Here's to another year of adventures, of quiet mornings and loud celebrations, of us.

Happy birthday, my princess. My favorite story will always be ours.`;

type Phase = "locked" | "opening" | "letter";

export default function FinalCastle() {
  const [unlocked, setUnlocked] = useState(false);
  const [phase, setPhase] = useState<Phase>("locked");
  const [shake, setShake] = useState(false);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);
  const leftDoorRef = useRef<HTMLDivElement>(null);
  const rightDoorRef = useRef<HTMLDivElement>(null);
  const sparkId = useRef(0);

  useEffect(() => {
    const check = () => setUnlocked(isBirthdayUnlocked());
    check();
    const id = setInterval(check, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (unlocked && phase === "locked") {
      setPhase("opening");
    }
  }, [unlocked, phase]);

  useEffect(() => {
    if (phase !== "opening") return;
    const tl = gsap.timeline({
      onComplete: () => setPhase("letter"),
    });
    tl.to([leftDoorRef.current], {
      rotateY: -110,
      duration: 1.6,
      ease: "power3.inOut",
      transformOrigin: "left center",
    }).to(
      [rightDoorRef.current],
      {
        rotateY: 110,
        duration: 1.6,
        ease: "power3.inOut",
        transformOrigin: "right center",
      },
      "<"
    );
    return () => {
      tl.kill();
    };
  }, [phase]);

  const handleLockClick = (e: React.MouseEvent) => {
    if (unlocked) return;
    setShake(true);
    setTimeout(() => setShake(false), 500);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const newSparks = Array.from({ length: 10 }).map(() => ({
      id: sparkId.current++,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    }));
    setSparks((s) => [...s, ...newSparks]);
    setTimeout(() => {
      setSparks((s) => s.filter((sp) => !newSparks.find((n) => n.id === sp.id)));
    }, 900);
  };

  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-royal-radial px-6 py-16">
      <StarsField count={100} />
      <FairyDust count={26} />

      {/* click sparks */}
      {sparks.map((s) => (
        <motion.span
          key={s.id}
          className="fixed z-40 pointer-events-none rounded-full"
          style={{ left: s.x, top: s.y, width: 4, height: 4, background: "#FFD56B" }}
          initial={{ opacity: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            x: (Math.random() - 0.5) * 140,
            y: (Math.random() - 0.5) * 140,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      <AnimatePresence mode="wait">
        {phase !== "letter" ? (
          <motion.div
            key="castle"
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="relative z-10 flex flex-col items-center gap-8 text-center max-w-lg"
          >
            <h2 className="font-display text-3xl sm:text-4xl text-gradient-gold font-semibold">
              A final letter is waiting for you...
            </h2>

            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]" style={{ perspective: 1400 }}>
              <CastleSilhouette className="absolute inset-0 w-full h-full opacity-70" />

              {/* castle doors */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[70px] h-[110px] sm:w-[90px] sm:h-[140px]" style={{ transformStyle: "preserve-3d" }}>
                <div
                  ref={leftDoorRef}
                  className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-royal to-royal-dark rounded-tl-full border-r border-gold/40"
                />
                <div
                  ref={rightDoorRef}
                  className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-royal to-royal-dark rounded-tr-full border-l border-gold/40"
                />
              </div>

              {phase === "locked" && (
                <motion.button
                  onClick={handleLockClick}
                  animate={shake ? { x: [0, -6, 6, -6, 6, 0] } : {}}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-10 sm:bottom-14 w-12 h-12 rounded-full bg-gold-shimmer bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] shadow-glow flex items-center justify-center text-royal-deep z-10"
                  aria-label="Try the lock"
                >
                  <Lock className="w-6 h-6" />
                </motion.button>
              )}
            </div>

            {!unlocked && (
              <div className="flex flex-col items-center gap-4">
                <p className="font-body text-lavender-light/90">
                  This letter will unlock on August 17 ❤️
                </p>
                <Countdown />
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg"
          >
            <div className="relative rounded-lg parchment-texture p-6 sm:p-10">
              <div className="absolute -top-3 -left-3 text-gold text-2xl animate-twinkle">✦</div>
              <div className="absolute -bottom-3 -right-3 text-gold text-2xl animate-twinkle" style={{ animationDelay: "0.6s" }}>✦</div>
              <TypewriterText
                text={FINAL_LETTER}
                speed={26}
                startDelay={400}
                className="font-body text-royal-deep/90 text-sm sm:text-base leading-relaxed"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: FINAL_LETTER.length * 0.026 + 1.2, duration: 1 }}
                className="mt-6 flex items-center justify-center gap-2 text-royal font-display text-lg"
              >
                <span>I love you forever</span>
                <motion.span className="text-red-500 inline-block animate-heartbeat">
                  <Heart className="w-5 h-5 fill-current" />
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
