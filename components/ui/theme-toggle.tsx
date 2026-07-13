"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className="relative h-7 w-12 rounded-full border border-border bg-surface-2 transition-colors duration-base"
    >
      <motion.span
        className="absolute top-0.5 h-5 w-5 rounded-full bg-signal"
        animate={{ left: isDark ? 26 : 2 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </button>
  );
}
