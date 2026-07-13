"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export interface SkillGroup {
  label: string;
  pin: string;
  skills: string[];
}

/**
 * Renders each skill category like a labeled pin group on a schematic
 * pinout diagram — a two-digit pin number, a connecting trace, then the
 * category name and its skills as inline mono text (not pills). Built to
 * replace the generic "icon in rounded square" SaaS feature-card pattern.
 */
export function SkillPinout({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="rounded-lg border border-border bg-surface divide-y divide-border overflow-hidden">
      {groups.map((group, i) => (
        <motion.div
          key={group.label}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="group flex flex-col gap-3 px-6 py-5 transition-colors duration-base hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-6"
        >
          <div className="flex items-center gap-3 sm:w-40 shrink-0">
            <span className="font-mono text-mono-data text-text-muted">{group.pin}</span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-signal transition-shadow duration-base group-hover:shadow-glow-signal"
              aria-hidden
            />
            <span className="h-px flex-1 bg-border sm:w-6 sm:flex-none" aria-hidden />
            <h3 className="font-display text-heading-sm text-text whitespace-nowrap">
              {group.label}
            </h3>
          </div>

          <p className="font-mono text-mono-data text-text-muted">
            {group.skills.join("  /  ")}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
