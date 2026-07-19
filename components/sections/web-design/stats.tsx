"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

// "Delivered" counts only sites built end-to-end personally — the IEEE
// NC State site in Recent Projects is real portfolio evidence, but it was
// team-led rather than a personal build, so it isn't counted here.
const STATS = [
  { value: "2", label: "Custom websites delivered" },
  { value: "100%", label: "Mobile responsive" },
  { value: "100%", label: "Custom designed — no templates" },
  { value: "E2E", label: "Design, deployment & SEO" },
];

export function Stats() {
  return (
    <section className="relative border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <dt className="font-display text-heading-lg text-trace">{stat.value}</dt>
              <dd className="mt-1 font-mono text-mono-label uppercase text-text-muted">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
