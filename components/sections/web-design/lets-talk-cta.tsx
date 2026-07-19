"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function LetsTalkCta() {
  return (
    <section className="relative border-t border-border bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <h2 className="font-display text-display-md text-text text-balance">
            Looking for a modern website for your business?
          </h2>
          <p className="mt-4 text-body-lg text-text-muted">
            I'd love to help bring your vision to life.
          </p>
          <div className="mt-8">
            <LinkButton href="#quote" size="lg" tone="trace">
              Let's talk
            </LinkButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
