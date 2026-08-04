"use client";

import { useState } from "react";
import Envelope from "@/components/Envelope";
import SurpriseChoice from "@/components/SurpriseChoice";
import GrowingUpGallery from "@/components/GrowingUpGallery";
import MomentReveal from "@/components/MomentReveal";
import PlaylistReveal from "@/components/PlaylistReveal";
import MessageReveal from "@/components/MessageReveal";
import LockedMessage from "@/components/LockedMessage";
import ConfettiButton from "@/components/ConfettiButton";
import LoveLetter from "@/components/LoveLetter";
import BackButton from "@/components/BackButton";

const STEPS = [
  "envelope",
  "surprise",
  "journey",
  "moment",
  "playlist",
  "message",
  "locked",
  "confetti",
  "letter",
] as const;
type Step = (typeof STEPS)[number];

export default function Home() {
  const [step, setStep] = useState<Step>("envelope");
  const [history, setHistory] = useState<Step[]>([]);

  function goTo(next: Step) {
    setHistory((h) => [...h, step]);
    setStep(next);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }

  function goBack() {
    setHistory((h) => {
      if (h.length === 0) return h;
      const copy = [...h];
      const prev = copy.pop() as Step;
      setStep(prev);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return copy;
    });
  }

  function handleSurprisePick(key: "journey" | "moment" | "playlist" | "message" | "locked") {
    goTo(key);
  }

  const showBack = step !== "envelope";

  return (
    <main className="relative z-10 min-h-screen">
      {showBack && <BackButton onClick={goBack} />}

      <div key={step} className="animate-drift-in">
        {step === "envelope" && <Envelope onOpen={() => goTo("surprise")} />}
        {step === "surprise" && (
          <SurpriseChoice onPick={handleSurprisePick} onContinue={() => goTo("confetti")} />
        )}
        {step === "journey" && <GrowingUpGallery onBack={goBack} />}
        {step === "moment" && <MomentReveal onBack={goBack} />}
        {step === "playlist" && <PlaylistReveal onBack={goBack} />}
        {step === "message" && <MessageReveal onBack={goBack} />}
        {step === "locked" && <LockedMessage onBack={goBack} />}
        {step === "confetti" && <ConfettiButton onNext={() => goTo("letter")} />}
        {step === "letter" && <LoveLetter onRestart={() => goTo("envelope")} />}
      </div>
    </main>
  );
}
