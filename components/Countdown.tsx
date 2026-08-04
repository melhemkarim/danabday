"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getNextBirthday, getTimeLeft, TimeLeft } from "@/lib/utils";

function Unit({ value, label }: { value: number; label: string }) {
  const display = value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-2xl glass shadow-glow-purple flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold"
          >
            {display}
          </motion.span>
        </AnimatePresence>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gold/30 pointer-events-none" />
      </div>
      <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-lavender-light/80 font-body">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const target = getNextBirthday();
    const tick = () => setTime(getTimeLeft(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) {
    return <div className="h-16 sm:h-20 md:h-24" />;
  }

  return (
    <div className="flex items-center gap-3 sm:gap-5 md:gap-6">
      <Unit value={time.days} label="Days" />
      <Unit value={time.hours} label="Hours" />
      <Unit value={time.minutes} label="Minutes" />
      <Unit value={time.seconds} label="Seconds" />
    </div>
  );
}
