"use client";

export default function CastleSilhouette({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 420"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="castleFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0e33" />
          <stop offset="100%" stopColor="#0d0619" />
        </linearGradient>
        <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD56B" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD56B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* base */}
      <rect x="0" y="260" width="1200" height="160" fill="url(#castleFade)" />

      {/* side towers */}
      {[120, 1000].map((x, i) => (
        <g key={i}>
          <rect x={x} y="150" width="80" height="200" fill="url(#castleFade)" />
          <polygon points={`${x - 10},150 ${x + 40},70 ${x + 90},150`} fill="url(#castleFade)" />
          <circle cx={x + 40} cy="200" r="6" fill="url(#windowGlow)" className="animate-pulse-glow" />
        </g>
      ))}

      {/* mid towers */}
      {[340, 780].map((x, i) => (
        <g key={i}>
          <rect x={x} y="110" width="70" height="240" fill="url(#castleFade)" />
          <polygon points={`${x - 8},110 ${x + 35},40 ${x + 78},110`} fill="url(#castleFade)" />
          <circle cx={x + 35} cy="160" r="5" fill="url(#windowGlow)" className="animate-pulse-glow" />
        </g>
      ))}

      {/* central keep */}
      <rect x="520" y="60" width="160" height="290" fill="url(#castleFade)" />
      <polygon points="510,60 600,-30 690,60" fill="url(#castleFade)" />
      <circle cx="600" cy="10" r="4" fill="#FFD56B" className="animate-twinkle" />

      {/* central gate glow */}
      <rect x="575" y="260" width="50" height="90" rx="25" fill="url(#windowGlow)" opacity="0.5" />

      {/* windows row */}
      {[560, 600, 640].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy="140"
          r="5"
          fill="url(#windowGlow)"
          className="animate-pulse-glow"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}

      {/* connecting walls */}
      <rect x="200" y="220" width="140" height="140" fill="url(#castleFade)" />
      <rect x="680" y="220" width="140" height="140" fill="url(#castleFade)" />
    </svg>
  );
}
