"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { drawPath, viewportOnce } from "@/components/motion/variants";

/**
 * The signature element of the design system: a right-angled trace line,
 * modeled on a real PCB routing path, that draws itself in when it enters
 * the viewport. Use between major sections instead of a plain <hr>.
 */
export function SignalDivider({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, viewportOnce);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height: 40 }}
      aria-hidden
    >
      <motion.path
        d="M0 20 H460 L500 4 L540 4 L580 20 H720 L760 36 L800 36 L840 20 H1200"
        fill="none"
        stroke="rgb(var(--signal))"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={drawPath}
      />
      {/* static faint base line so the divider reserves space before animating */}
      <line x1="0" y1="20" x2="1200" y2="20" stroke="rgb(var(--border))" strokeWidth={1} />
    </svg>
  );
}
