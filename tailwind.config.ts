import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#1b0f38",
          deep: "#0f0620",
          light: "#2c1a52",
        },
        periwinkle: {
          DEFAULT: "#a78bfa",
          soft: "#c9b8fb",
        },
        parchment: "#f6f1e4",
        gold: "#c9a24b",
        blush: "#e8b4c8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "midnight-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(167,139,250,0.22), transparent), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(201,162,75,0.12), transparent)",
      },
      keyframes: {
        "flap-open": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(180deg)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "drift-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.15" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "flap-open": "flap-open 0.9s ease-in-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "drift-in": "drift-in 0.8s ease-out forwards",
        twinkle: "twinkle 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
