"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

const PROCESS_PREVIEW = ["Planning", "Design", "Development", "SEO", "Launch", "Support"];

// Deliberately structured differently from the engineering header: a
// single strong CTA instead of a button pair, a credibility line naming
// real client work right in the header, and a live preview strip of the
// six-step process — the one thing that's actually unique to this page,
// surfaced above the fold instead of buried below a scroll.
export function WebDesignPageHeader() {
  return (
    <section className="relative border-b border-border bg-bg">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={fadeUp} className="font-mono text-mono-label uppercase text-text-muted mb-6">
            Portfolio / Web design
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-display-lg text-text text-balance"
          >
            Websites for businesses that need to look like they mean it.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-body-lg text-text-muted">
            I design and build sites for small businesses — concrete
            contractors, outfitters, local shops — that need a real online
            presence, not a page that looks the same as everyone else's.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
            <LinkButton href="#quote" size="lg" tone="trace">
              Get a quote
            </LinkButton>
            <a
              href="#recent-projects"
              className="text-body-sm text-text-muted hover:text-text transition-colors duration-fast"
            >
              Recently built:{" "}
              <span className="text-text underline underline-offset-4 decoration-border">
                Superior Concrete Inc.
              </span>{" "}
              &amp;{" "}
              <span className="text-text underline underline-offset-4 decoration-border">
                TLowe Outfitters
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#process"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="group mt-16 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-border pt-6"
        >
          {PROCESS_PREVIEW.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="font-mono text-mono-label uppercase text-text-muted transition-colors duration-fast group-hover:text-trace">
                {step}
              </span>
              {i < PROCESS_PREVIEW.length - 1 && (
                <ArrowRight size={12} strokeWidth={1.5} className="text-border" aria-hidden />
              )}
            </span>
          ))}
        </motion.a>
      </div>
    </section>
  );
}
