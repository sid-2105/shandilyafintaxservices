import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#132A4A",
          light: "#1D3E67",
          soft: "#2B4E78",
        },
        paper: {
          DEFAULT: "#FAF8F3",
          dim: "#F1EEE5",
          line: "#E4DFD1",
        },
        emerald: {
          DEFAULT: "#1C7FA0",
          deep: "#125B76",
          bright: "#2B9AC0",
        },
        brass: {
          DEFAULT: "#2E9CB5",
          light: "#7FCBDB",
          dark: "#1D7A93",
        },
        slate: {
          DEFAULT: "#5B6470",
          dark: "#1A1F26",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-publicsans)", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-plexmono)", "monospace"],
      },
      backgroundImage: {
        ledger:
          "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(19,42,74,0.045) 43px, rgba(19,42,74,0.045) 44px)",
        "ledger-dark":
          "repeating-linear-gradient(to bottom, transparent, transparent 43px, rgba(250,248,243,0.05) 43px, rgba(250,248,243,0.05) 44px)",
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
