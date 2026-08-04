"use client";

import Image from "next/image";
import { growingUp } from "@/data/content";

export default function GrowingUpGallery({ onBack }: { onBack: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl text-center mb-2">
        You, through the years
      </h2>
      <p className="text-parchment/60 text-sm mb-14 tracking-wide uppercase">
        a little look back
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl w-full place-items-center">
        {growingUp.map((item, i) => (
          <div key={i} className="w-36 h-48 md:w-44 md:h-56 rounded-md overflow-hidden bg-parchment p-2 pb-6 shadow-xl relative">
            <div className="w-full h-full bg-midnight-light/80 flex items-center justify-center overflow-hidden rounded-sm">
              {item.src && item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  className="object-cover w-full h-full"
                />
              ) : item.src ? (
                <Image
                  src={item.src}
                  alt={item.label}
                  width={176}
                  height={200}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-periwinkle-soft/50 text-[11px] px-3 text-center font-body">
                  add {item.type === "video" ? "video to /public/videos" : "photo to /public/photos"}
                </span>
              )}
            </div>
            <p className="absolute bottom-1.5 left-0 right-0 text-center font-script text-base text-midnight">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* one combined paragraph below all the photos */}
      <p className="mt-12 max-w-2xl font-script text-lg md:text-xl text-parchment/90 text-center leading-relaxed px-4">
        {growingUp.map((item) => item.message).join(" ")}
      </p>

      <button
        type="button"
        onClick={onBack}
        className="mt-14 px-8 py-3 rounded-full font-body text-sm tracking-wide bg-gold text-midnight-deep hover:scale-105 transition-transform duration-300"
      >
        Back to choices
      </button>
    </section>
  );
}
