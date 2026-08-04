const STAR_COUNT = 60;

function starAt(i: number) {
  const left = (i * 37) % 100;
  const top = (i * 53) % 100;
  const size = 1 + (i % 3);
  const delay = (i % 9) * 0.35;
  const duration = 2.5 + (i % 5) * 0.4;
  return { left, top, size, delay, duration };
}

export default function StarField() {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => starAt(i));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-periwinkle-soft animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
