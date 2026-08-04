import Image from "next/image";
import { memories } from "@/data/content";

export default function MemoryGallery() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <h2 className="font-display text-3xl md:text-4xl text-center mb-2">
        Little moments
      </h2>
      <p className="text-parchment/60 text-sm mb-14 tracking-wide uppercase">
        tap a photo to bring it forward
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-10 max-w-3xl">
        {memories.map((m, i) => (
          <div
            key={i}
            className="group relative bg-parchment p-3 pb-10 shadow-xl transition-transform duration-300 hover:z-10 hover:scale-105 hover:rotate-0 cursor-pointer"
            style={{ transform: `rotate(${m.rotate}deg)` }}
          >
            <div className="w-40 h-48 md:w-48 md:h-56 bg-midnight-light/80 flex items-center justify-center overflow-hidden">
              {m.src ? (
                <Image
                  src={m.src}
                  alt={m.caption}
                  width={192}
                  height={224}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-periwinkle-soft/50 text-xs px-4 text-center font-body">
                  drop a photo in /public/photos
                </span>
              )}
            </div>
            <p className="absolute bottom-2 left-0 right-0 text-center font-script text-lg text-midnight">
              {m.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
