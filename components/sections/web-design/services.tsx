"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

const SERVICES = [
  {
    n: "01",
    title: "Website design",
    description:
      "A custom, mobile-first design built around your business and what it actually sells — not a reskinned template that looks like the next five results on Google.",
  },
  {
    n: "02",
    title: "Development",
    description:
      "Fast, modern builds that load quickly and hold up over time — clean code, sensible hosting, and nothing fragile under the hood.",
  },
  {
    n: "03",
    title: "SEO & local search",
    description:
      "Structured from the ground up so the people searching for what you do can actually find you — page structure, metadata, and local search basics done right.",
  },
  {
    n: "04",
    title: "Ongoing support",
    description:
      "Sites need upkeep. I offer straightforward post-launch support for content changes, small updates, and keeping things running.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="What I offer"
          tone="trace"
          description="Everything a small business site needs, without the agency markup or the six-week onboarding."
        />

        <div className="mt-16 divide-y divide-border border-t border-border">
          {SERVICES.map((s) => (
            <motion.div
              key={s.n}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-10 md:py-10"
            >
              <span className="font-display text-display-md text-trace/30 leading-none select-none">
                {s.n}
              </span>
              <div className="max-w-xl">
                <h3 className="font-display text-heading-md text-text mb-2">{s.title}</h3>
                <p className="text-body-sm text-text-muted">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
