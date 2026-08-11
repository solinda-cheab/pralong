import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B2320",       // near-black green, primary text / dark sections
        teal: "#0E4D47",      // primary brand teal
        "teal-deep": "#082E2A",
        mint: "#3FE0A5",      // accent — "correct answer" green
        amber: "#F2A341",     // accent — secondary highlight
        paper: "#F6F5F0",     // warm off-white page background
        "paper-dim": "#EDECE4",
        line: "#D8D6CB",      // hairline borders on paper
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        shell: "1200px",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
