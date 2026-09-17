"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/components/motion/variants";

export function AboutPageHeader() {
  return (
    <section className="relative border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_0.7fr] md:items-end"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <span className="font-mono text-mono-label uppercase text-text-muted">About</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-display-lg text-text max-w-xl text-balance">
              Hardware, software, and the systems where the two meet.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-lg text-body-lg text-text-muted">
              I'm Mason, a computer engineering senior on NC State's accelerated bachelor's–master's track. I enjoy hands-on debugging, understanding how a product works, and helping people make it work better.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -inset-4 rounded-xl bg-signal/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
              <Image
                src="/images/about/ti-internship.jpeg"
                alt="Mason Deal at Texas Instruments during his Summer 2026 internship"
                width={1368}
                height={1824}
                sizes="(min-width: 768px) 40vw, 90vw"
                priority
                className="aspect-[4/5] w-full object-cover object-[center_65%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
