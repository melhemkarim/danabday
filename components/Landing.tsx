"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import StarsField from "./StarsField";
import FairyDust from "./FairyDust";
import SkyAtmosphere from "./SkyAtmosphere";
import CastleSilhouette from "./CastleSilhouette";
import Countdown from "./Countdown";

export default function Landing({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between overflow-hidden bg-royal-radial"
    >
      <StarsField />
      <SkyAtmosphere />
      <FairyDust count={22} />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center gap-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2 text-gold/90"
        >
          <Sparkles className="w-4 h-4 animate-twinkle" />
          <span className="uppercase tracking-[0.4em] text-xs sm:text-sm font-body text-lavender-light">
            A Royal Invitation
          </span>
          <Sparkles className="w-4 h-4 animate-twinkle" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="block font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-[0_0_25px_rgba(123,77,255,0.6)]">
            Happy Birthday
          </span>
          <span className="block font-script text-gradient-gold text-6xl sm:text-8xl md:text-9xl leading-tight mt-2 drop-shadow-[0_0_35px_rgba(255,213,107,0.5)]">
            Princess Dana
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-md text-lavender-light/90 font-body text-sm sm:text-base"
        >
          A little magic has been written just for you. Your storybook awaits...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold/80">
            Until your special day
          </span>
          <Countdown />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpen}
          className="group relative mt-2 px-10 py-4 rounded-full font-display text-lg tracking-wide text-royal-deep bg-gold-shimmer bg-[length:200%_auto] shadow-glow animate-[shimmer_3s_linear_infinite] overflow-hidden"
        >
          <span className="relative z-10">✨ Open My Gift ✨</span>
          <span className="absolute inset-0 rounded-full ring-2 ring-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

      <div className="relative z-10 w-full h-[180px] sm:h-[260px] md:h-[320px]">
        <CastleSilhouette className="w-full h-full" />
      </div>
    </motion.section>
  );
}
