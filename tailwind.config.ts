import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        signal: {
          DEFAULT: "rgb(var(--signal) / <alpha-value>)",
          strong: "rgb(var(--signal-strong) / <alpha-value>)",
        },
        trace: "rgb(var(--trace) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5.5vw + 1rem, 5.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.5vw + 1rem, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.625rem, 2vw + 1rem, 2.375rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.75rem", { lineHeight: "1.3" }],
        "heading-md": ["1.375rem", { lineHeight: "1.35" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "mono-label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.08em" }],
        "mono-data": ["0.875rem", { lineHeight: "1.4" }],
      },
      spacing: {
        13: "3.25rem",
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(16,21,28,0.06)",
        md: "0 8px 24px rgba(16,21,28,0.08)",
        "glow-signal": "0 0 0 1px rgba(91,158,248,0.35), 0 8px 32px rgba(91,158,248,0.18)",
        "glow-trace": "0 0 0 1px rgba(255,163,87,0.35), 0 8px 32px rgba(255,163,87,0.18)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
        slower: "600ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "trace-grid":
          "radial-gradient(circle at 1px 1px, rgb(var(--border)) 1px, transparent 0)",
      },
      backgroundSize: {
        "trace-grid": "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
