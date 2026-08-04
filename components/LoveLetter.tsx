import { letter, recipient } from "@/data/content";
import Typewriter from "./Typewriter";

export default function LoveLetter({ onRestart }: { onRestart?: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="relative max-w-md w-full bg-parchment text-midnight-deep px-8 py-10 md:px-12 md:py-14 shadow-2xl paper-fold rotate-[-1deg]">
        <p className="font-script text-3xl md:text-4xl mb-6 text-midnight">
          {letter.heading}, {recipient.name}
        </p>
        <Typewriter
          text={letter.body}
          className="font-body text-[15px] leading-relaxed text-midnight-deep/80 min-h-[6rem]"
        />
        <p className="font-script text-2xl mt-8 text-midnight">
          {letter.signOff}
        </p>
        <p className="font-script text-2xl -mt-1 text-midnight">
          {recipient.fromName}
        </p>
      </div>

      {onRestart && (
        <button
          type="button"
          onClick={onRestart}
          className="mt-10 text-parchment/50 hover:text-gold text-sm tracking-wide transition-colors"
        >
          read it again from the start
        </button>
      )}
    </section>
  );
}
