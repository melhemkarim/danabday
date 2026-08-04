"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, PanInfo, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { memories } from "@/data/memories";
import MemoryPage from "./MemoryPage";

type TransitionKind = "flip" | "portal" | "petals" | "fairydust" | "unfold";

const TRANSITIONS: TransitionKind[] = ["flip", "portal", "petals", "fairydust", "unfold"];

const variantsFor = (kind: TransitionKind): Variants => {
  switch (kind) {
    case "flip":
      return {
        enter: { rotateY: 90, opacity: 0, scale: 0.9 },
        center: { rotateY: 0, opacity: 1, scale: 1 },
        exit: { rotateY: -90, opacity: 0, scale: 0.9 },
      };
    case "portal":
      return {
        enter: { scale: 0.3, opacity: 0, filter: "blur(20px)" },
        center: { scale: 1, opacity: 1, filter: "blur(0px)" },
        exit: { scale: 1.6, opacity: 0, filter: "blur(20px)" },
      };
    case "petals":
      return {
        enter: { y: 80, opacity: 0, rotate: 4 },
        center: { y: 0, opacity: 1, rotate: 0 },
        exit: { y: -80, opacity: 0, rotate: -4 },
      };
    case "fairydust":
      return {
        enter: { opacity: 0, scale: 1.05 },
        center: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.96 },
      };
    case "unfold":
      return {
        enter: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
        center: { clipPath: "inset(0 0% 0 0%)", opacity: 1 },
        exit: { clipPath: "inset(0 50% 0 50%)", opacity: 0 },
      };
  }
};

function TransitionOverlay({ kind, playKey }: { kind: TransitionKind; playKey: number }) {
  if (kind === "petals") {
    return (
      <motion.div
        key={`overlay-${playKey}`}
        className="fixed inset-0 z-40 pointer-events-none"
        initial="show"
        animate="show"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-blush text-xl"
            style={{ left: `${(i * 6.3) % 100}%`, top: -20 }}
            initial={{ y: -40, opacity: 0, rotate: 0 }}
            animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 360 }}
            transition={{ duration: 1.6 + (i % 5) * 0.2, delay: i * 0.03, ease: "easeIn" }}
          >
            ❀
          </motion.span>
        ))}
      </motion.div>
    );
  }
  if (kind === "fairydust") {
    return (
      <motion.div
        key={`overlay-${playKey}`}
        className="fixed inset-0 z-40 pointer-events-none"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 3,
              height: 3,
              background: "#FFD56B",
              boxShadow: "0 0 8px 2px #FFD56B99",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
            transition={{ duration: 0.9, delay: i * 0.02 }}
          />
        ))}
      </motion.div>
    );
  }
  if (kind === "portal") {
    return (
      <motion.div
        key={`overlay-${playKey}`}
        className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-[60vmax] h-[60vmax] rounded-full bg-[radial-gradient(circle,rgba(255,213,107,0.35),transparent_70%)]" />
      </motion.div>
    );
  }
  return null;
}

export default function MemoryJourney({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [transitionIdx, setTransitionIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const kind = TRANSITIONS[transitionIdx % TRANSITIONS.length];

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next > memories.length) return;
      setTransitionIdx((t) => t + 1);
      if (next === memories.length) {
        onComplete();
        return;
      }
      setIndex(next);
    },
    [onComplete]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) goTo(index + 1);
    else if (info.offset.x > 80) goTo(index - 1);
  };

  const memory = memories[index];
  const variants = variantsFor(kind);

  return (
    <div ref={containerRef} className="relative w-full min-h-[100dvh] overflow-hidden">
      <AnimatePresence>
        <TransitionOverlay kind={kind} playKey={transitionIdx} />
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={memory.id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={onDragEnd}
          style={{ transformStyle: "preserve-3d" }}
        >
          <MemoryPage memory={memory} />
        </motion.div>
      </AnimatePresence>

      {/* progress indicator */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.3em] uppercase text-lavender-light/80 font-body">
          Memory {index + 1} / {memories.length}
        </span>
        <div className="flex gap-1.5">
          {memories.map((m, i) => (
            <span
              key={m.id}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* nav buttons */}
      {index > 0 && (
        <button
          aria-label="Previous memory"
          onClick={() => goTo(index - 1)}
          className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full glass flex items-center justify-center text-gold hover:scale-110 hover:shadow-glow transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30">
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => goTo(index + 1)}
          className="px-8 py-3 rounded-full font-display text-royal-deep bg-gold-shimmer bg-[length:200%_auto] shadow-glow animate-[shimmer_3s_linear_infinite] flex items-center gap-2"
        >
          {index === memories.length - 1 ? "Continue the Story" : "Next Memory"}
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
