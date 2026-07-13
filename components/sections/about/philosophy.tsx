"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const PRINCIPLES = [
  {
    tag: "On learning",
    text: "We're never really finished learning — the world doesn't stop changing, so I try not to either. Staying useful in this field means staying open, not settling into whatever I already know.",
  },
  {
    tag: "On problem-solving",
    text: "I'm genuinely passionate about solving technical problems, and just as much about helping other people understand and use technology to make their day-to-day easier. Building, integrating, supporting — showing someone how something works — that's the actual reason I chose this industry.",
  },
];

export function Philosophy() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
        >
          {PRINCIPLES.map((p) => (
            <motion.div key={p.tag} variants={fadeUp}>
              <span className="font-mono text-mono-label uppercase text-signal">{p.tag}</span>
              <p className="mt-4 font-display text-heading-lg text-text leading-snug">
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
