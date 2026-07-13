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
            I've had a thing for technology since I was a kid. For a while I
            was genuinely torn between computer science and computer
            engineering — but I figured out pretty quickly that I like a
            blend of both: getting hands-on with the actual hardware, and
            writing the software that makes it do something. Computer
            engineering was the one degree that didn't ask me to choose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
