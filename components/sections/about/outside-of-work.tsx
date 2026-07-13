"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

// Emoji instead of the lucide icon set used everywhere else on the site —
// deliberate. This is the one section that's about life outside the work,
// and a little warmth here reads as personal rather than corporate. Every
// other section keeps vector icons; stacking both systems in one place
// would look cluttered rather than charming.
const HOBBIES = [
  {
    emoji: "🏋️",
    title: "Weightlifting",
    description: "Most consistent habit I've got — good for the same reason debugging is.",
  },
  {
    emoji: "🎹",
    title: "Piano & making beats",
    description: "Play piano, and mess around making beats when I want to build something that isn't code.",
  },
  {
    emoji: "🎮",
    title: "Gaming with friends",
    description: "Still the easiest way to stay in touch with people I don't see enough.",
  },
  {
    emoji: "🤝",
    title: "Volunteering",
    description: "Giving back to the community that gave a lot to me growing up — part of why I'm an Eagle Scout.",
  },
];

export function OutsideOfWork() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Outside of work" title="What I do when I'm not building" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {HOBBIES.map(({ emoji, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-lg border border-border/70 p-5 transition-colors duration-base hover:border-signal/30 hover:bg-surface"
            >
              <span className="mt-0.5 text-xl leading-none shrink-0" aria-hidden>
                {emoji}
              </span>
              <div>
                <h3 className="text-body font-medium text-text">{title}</h3>
                <p className="mt-1 text-body-sm text-text-muted">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
