"use client";

import { motion } from "framer-motion";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/components/motion/variants";

export interface ProcessStep {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mx-auto max-w-2xl"
    >
      {steps.map((step, i) => (
        <motion.li key={step.n} variants={fadeUp}>
          <div className="flex gap-5 rounded-lg border border-border bg-surface p-6 transition-colors duration-base hover:border-trace/40">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-trace">
              <step.icon size={19} strokeWidth={1.5} />
            </div>
            <div>
              <span className="font-mono text-mono-label uppercase text-text-muted">
                Step {step.n}
              </span>
              <h3 className="font-display text-heading-sm text-text mt-0.5">{step.title}</h3>
              <p className="mt-1.5 text-body-sm text-text-muted">{step.description}</p>
            </div>
          </div>

          {i < steps.length - 1 && (
            <div className="flex justify-center py-2" aria-hidden>
              <ChevronDown size={18} strokeWidth={1.5} className="text-trace/50" />
            </div>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
