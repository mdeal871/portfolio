"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function AboutPreview() {
  return (
    <section id="about" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeading eyebrow="About" title="A little about me" className="max-w-none" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="text-body-lg text-text-muted">
              I'm an Eagle Scout, IEEE NC State treasurer, and Alpha Phi Omega Education Vice President. Alongside engineering, I build websites for small businesses and make time for piano, lifting, gaming, and hunting.
            </p>
            <LinkButton href="/about" variant="ghost" className="mt-6">
              Read the full story →
            </LinkButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
