"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function BuildingInterests() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeading eyebrow="What I'm building toward" title="Personal electronics" className="max-w-none" />

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <p className="text-body-lg text-text-muted">
              I'm still figuring out exactly where my interests land in this
              industry — I don't think that's something you rush. But if I'm
              honest about what's pulled at me the most, it's personal
              electronics. They power the world and get used every single
              day, and there's something about that scale that I find genuinely
              interesting to work on.
            </p>
            <p className="mt-4 text-body-lg text-text-muted">
              That's only gotten more concrete since starting my internship
              at Texas Instruments, working on battery gauges — a component
              most people never think about, but one that quietly decides
              whether the device in their pocket actually works when they
              need it to.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
