"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { HeroBackground } from "@/components/ui/hero-background";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-start gap-16 md:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-sm border border-border bg-surface/60 px-3 py-1.5 mb-8"
            >
              <span className="font-mono text-mono-label text-text-muted">STATUS</span>
              <span className="h-3 w-px bg-border" aria-hidden />
              <span className="flex items-center gap-1.5 font-mono text-mono-label uppercase text-trace">
                <span className="h-1.5 w-1.5 rounded-full bg-trace" aria-hidden />
                Open for freelance work
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-display-xl text-text max-w-xl text-balance"
            >
              Computer Engineer. Web Designer.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-body-lg text-text-muted"
            >
              Computer engineering senior at NC State — designing embedded
              hardware at Texas Instruments by day, and building premium
              websites for small businesses on the side.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <LinkButton href="/engineering" size="lg">
                View engineering portfolio
              </LinkButton>
              <LinkButton href="/web-design" size="lg" variant="secondary">
                View web design portfolio
              </LinkButton>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              className="mt-16 grid grid-cols-2 gap-x-8 gap-y-4 max-w-md border-t border-border pt-6 sm:grid-cols-3"
            >
              <div>
                <dt className="font-mono text-mono-label uppercase text-text-muted">GPA</dt>
                <dd className="font-display text-heading-sm text-text mt-1">3.61</dd>
              </div>
              <div>
                <dt className="font-mono text-mono-label uppercase text-text-muted">Grad</dt>
                <dd className="font-display text-heading-sm text-text mt-1">May '27</dd>
              </div>
              <div>
                <dt className="font-mono text-mono-label uppercase text-text-muted">Currently</dt>
                <dd className="font-display text-heading-sm text-text mt-1">TI Intern</dd>
              </div>
            </motion.dl>
          </div>

          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-xl bg-signal/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src="/images/headshot.jpg"
                alt="Portrait of Mason Deal"
                width={886}
                height={886}
                sizes="(min-width: 768px) 384px, 90vw"
                priority
                className="h-full w-full object-cover grayscale-[15%]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border/60 bg-bg/70 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-mono text-mono-label uppercase text-text-muted">
                  FIG. 01 — M. DEAL
                </span>
                <span className="font-mono text-mono-label uppercase text-text-muted">
                  RALEIGH, NC
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

