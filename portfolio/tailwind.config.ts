import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Share Tech Mono'", "monospace"],
        display: ["'Orbitron'", "sans-serif"],
        body: ["'Rajdhani'", "sans-serif"],
      },
      colors: {
        neon: {
          cyan: "#00f5ff",
          green: "#39ff14",
          purple: "#bf00ff",
          pink: "#ff006e",
          orange: "#ff6b00",
        },
        dark: {
          950: "#020408",
          900: "#060d14",
          800: "#0a1628",
          700: "#0d1f3c",
          600: "#112540",
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 1s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px #00f5ff" },
          "100%": { boxShadow: "0 0 10px #00f5ff, 0 0 30px #00f5ff, 0 0 60px #00f5ff" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "0%, 100%": { textShadow: "2px 0 #00f5ff, -2px 0 #ff006e" },
          "25%": { textShadow: "-2px 0 #00f5ff, 2px 0 #ff006e" },
          "50%": { textShadow: "2px 2px #00f5ff, -2px -2px #ff006e" },
          "75%": { textShadow: "-2px 2px #00f5ff, 2px -2px #ff006e" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
