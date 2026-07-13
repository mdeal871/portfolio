"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { SignalDivider } from "@/components/ui/signal-divider";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function FinalCta() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2 className="font-display text-display-md text-text">
            Let's build something that works.
          </h2>
          <p className="mt-4 text-body-lg text-text-muted">
            Open to full-time and internship engineering roles, and taking
            on a limited number of freelance web design projects.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href="/contact" size="lg">
              Engineering opportunities
            </LinkButton>
            <LinkButton href="/web-design#quote" size="lg" variant="secondary" tone="trace">
              Freelance web design
            </LinkButton>
          </div>
        </motion.div>

        <SignalDivider className="mt-20" />
      </div>
    </section>
  );
}
