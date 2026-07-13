"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/motion/variants";

export interface TimelineEntry {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  tone?: "signal" | "trace";
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="relative border-l border-border ml-1.5"
    >
      {entries.map((entry, i) => (
        <motion.li key={i} variants={fadeUp} className="relative pb-10 pl-8 last:pb-0">
          <span
            className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-bg ${
              entry.tone === "trace" ? "bg-trace" : "bg-signal"
            }`}
            aria-hidden
          />
          <span className="font-mono text-mono-label uppercase text-text-muted">
            {entry.date}
          </span>
          <h3 className="font-display text-heading-sm text-text mt-1">{entry.title}</h3>
          {entry.subtitle && (
            <p className="text-body-sm text-text-muted mt-0.5">{entry.subtitle}</p>
          )}
          {entry.description && (
            <p className="text-body-sm text-text-muted mt-2 max-w-xl">{entry.description}</p>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
