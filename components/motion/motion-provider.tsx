"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every Framer Motion animation automatically respects
 * prefers-reduced-motion. The CSS-level reduced-motion rule in globals.css
 * only catches raw CSS transitions/animations — it does not touch Framer
 * Motion, which drives transforms directly via JS. This closes that gap.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
