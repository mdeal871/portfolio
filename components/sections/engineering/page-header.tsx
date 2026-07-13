"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

// Redesigned as a spec block rather than another marketing hero — the
// right-hand panel reads like the corner stamp on a datasheet, using the
// same mono label/value language as the pinout strips and FIG. captions
// elsewhere on the site, instead of a third dot-eyebrow + headline + CTA.
const SPECS = [
  { label: "Status", value: "Actively interning" },
  { label: "Focus", value: "Embedded systems, PCB design" },
  { label: "Education", value: "B.S. Computer Engineering, NC State" },
  { label: "GPA", value: "3.61" },
];

export function EngineeringPageHeader() {
  return (
    <section className="relative border-b border-border bg-bg bg-trace-grid">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
        >
          <div>
            <motion.p variants={fadeUp} className="font-mono text-mono-label uppercase text-text-muted mb-6">
              Portfolio / Engineering
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-display-lg text-text max-w-2xl text-balance"
            >
              Hardware, firmware, and the systems in between.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-body-lg text-text-muted">
              A full look at my technical background — timeline, experience,
              projects, and the skills behind them.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10">
              <LinkButton href="/documents/mason-deal-resume.pdf" download size="lg">
                <Download size={18} strokeWidth={1.5} className="mr-1" />
                Download résumé
              </LinkButton>
            </motion.div>
          </div>

          <motion.dl
            variants={fadeUp}
            className="rounded-lg border border-border bg-surface divide-y divide-border"
          >
            {SPECS.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between gap-6 px-5 py-4">
                <dt className="font-mono text-mono-label uppercase text-text-muted shrink-0">
                  {spec.label}
                </dt>
                <dd className="text-body-sm text-text text-right">{spec.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
