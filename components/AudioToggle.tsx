"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

/**
 * Optional ambient music toggle.
 * Drop an mp3 at /public/sounds/ambience.mp3 to enable playback.
 */
export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/ambience.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full glass flex items-center justify-center text-gold shadow-glow hover:scale-110 transition-transform"
    >
      {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
}
