"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function BuildingInterests() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeading eyebrow="What I'm building toward" title="Products people rely on" className="max-w-none" />

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <p className="text-body-lg text-text-muted">
              Consumer electronics interest me because the engineering reaches people directly. My summer on TI's battery-gauge team showed me how hardware choices and software integration affect the reliability of a finished product.
            </p>
            <p className="mt-4 text-body-lg text-text-muted">
              I'm now exploring those questions at a different scale through Lenovo-sponsored senior design: automated testing for datacenter liquid cooling systems. I'm looking for a Summer 2027 internship in hardware, embedded systems, or system integration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
