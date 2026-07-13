"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

// Placeholder quotes — swap in real client/collaborator feedback as it
// comes in. Kept generic on purpose; none of this is attributed to a
// real person yet.
const TESTIMONIALS = [
  {
    quote:
      "Mason took a vague idea of what we wanted and turned it into a site that actually gets us calls. Fast to respond, easy to work with.",
    name: "Placeholder name",
    role: "Small business client",
  },
  {
    quote:
      "He's the rare engineer who can also explain the hardware to people who've never seen a schematic. Made our integration issue disappear.",
    name: "Placeholder name",
    role: "Applications engineering colleague",
  },
  {
    quote:
      "Reliable, detail-oriented, and genuinely curious about how things work under the hood. Would bring him onto another project without hesitation.",
    name: "Placeholder name",
    role: "Project collaborator",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Feedback"
          title="What people say"
          align="center"
          className="mx-auto text-center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name + t.role}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-border bg-surface p-6"
            >
              <blockquote className="text-body-sm text-text flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-2 font-mono text-mono-label text-text-muted">
                  ··
                </span>
                <span>
                  <span className="block text-body-sm font-medium text-text">{t.name}</span>
                  <span className="block text-body-sm text-text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
