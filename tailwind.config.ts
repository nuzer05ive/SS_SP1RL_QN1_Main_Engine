import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#0b0d10", light: "#f9fbff" },
        fg: { DEFAULT: "#e8f0ff", dark: "#0d1220" },
        line: "#203040",
        paper: "#0f1217",
        paperLight: "#ffffff",
        note: "#14202a",
        noteLight: "#eef4ff",
        accent: "#39d0ff",
        good: "#59ffa1",
        warn: "#ffd45e",
        bad: "#ff6b6b"
      }
    }
  },
  plugins: [],
};
export default config;
