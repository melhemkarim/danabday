"use client";

import { useState } from "react";
import { secretMessage } from "@/data/content";

export default function SecretStar() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setRevealed(true)}
        aria-label="A quiet star"
        className="fixed bottom-4 right-4 z-30 w-3 h-3 rounded-full bg-periwinkle-soft opacity-70 hover:opacity-100 hover:scale-150 transition-all duration-300"
      />

      {revealed && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-midnight-deep/90 px-6 animate-drift-in"
          onClick={() => setRevealed(false)}
        >
          <div
            className="max-w-sm bg-parchment text-midnight-deep rounded-md px-8 py-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-script text-3xl mb-4 text-midnight">
              you found it
            </p>
            <p className="font-body text-[15px] leading-relaxed">
              {secretMessage}
            </p>
            <button
              type="button"
              onClick={() => setRevealed(false)}
              className="mt-6 text-sm text-midnight-deep/50 hover:text-midnight-deep"
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
