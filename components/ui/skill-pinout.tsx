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
          className="group flex flex-col gap-2 px-6 py-5 transition-colors duration-base hover:bg-surface-2 sm:flex-row sm:items-start sm:gap-6"
        >
          <div className="flex items-center gap-3 sm:w-56 shrink-0">
            <span className="font-mono text-mono-data text-text-muted shrink-0">{group.pin}</span>
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal transition-shadow duration-base group-hover:shadow-glow-signal"
              aria-hidden
            />
            <span className="hidden h-px w-4 shrink-0 bg-border sm:block" aria-hidden />
            <h3 className="font-display text-heading-sm text-text">{group.label}</h3>
          </div>

          <p className="font-mono text-mono-data text-text-muted sm:pt-0.5">
            {group.skills.join("  /  ")}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
