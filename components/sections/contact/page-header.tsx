"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

export function ContactPageHeader() {
  return (
    <section className="relative border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            <span className="font-mono text-mono-label uppercase text-text-muted">Contact</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-display text-display-lg text-text text-balance">
            Let's talk.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-body-lg text-text-muted">
            I'm open to full-time and internship engineering roles, and I'm
            taking on a limited number of freelance web design projects.
            Whichever brought you here, the fastest way to reach me is
            below — I read everything that comes in.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
