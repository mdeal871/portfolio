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
              I'm a computer engineering senior at NC State, currently
              interning on the battery-gauge team at Texas Instruments.
              Outside of class and internships, I run web design projects
              for small businesses — including the site you're on now.
              I'm an Eagle Scout, treasurer of IEEE's NC State chapter, and
              I like problems that live at the edge of hardware and
              software, where a bad solder joint and a bad line of code
              cause the exact same symptom.
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
