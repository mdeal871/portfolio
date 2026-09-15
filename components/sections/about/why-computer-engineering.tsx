"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function WhyComputerEngineering() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <span className="font-mono text-mono-label uppercase text-signal">Why engineering</span>
          <h2 className="font-display text-display-md text-text mt-4">
            I wanted to build the thing, not just the code running on top of it.
          </h2>
          <p className="mt-6 text-body-lg text-text-muted">
              Computer engineering lets me work with the whole system: the circuit, the firmware, and the interface between them. I like tracing a problem from its symptoms to its cause, then testing whether the fix holds up.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
