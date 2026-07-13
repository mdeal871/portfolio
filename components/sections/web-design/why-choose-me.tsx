"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

// Direct, specific claims rather than a "me vs. agency" comparison table —
// the claim is the differentiator, it doesn't need a competitor column to
// make its point.
const CLAIMS = [
  {
    tag: "No middleman",
    claim: "You talk to the person building your site. Every time.",
    support:
      "No account manager, no hand-off to a subcontractor halfway through. If something needs to change, you tell me directly and it gets done.",
  },
  {
    tag: "Engineering background",
    claim: "I test things the way an engineer tests things.",
    support:
      "I debug hardware for a living — I'm not going to ship a site that breaks on half the phones that load it.",
  },
  {
    tag: "Real timelines",
    claim: "Weeks, not a quarter.",
    support: "Most small business sites are planned, built, and live inside 3–6 weeks.",
  },
  {
    tag: "Flat pricing",
    claim: "One quote, agreed upfront. No retainer.",
    support: "You know the number before I start. No scope creep billed by the hour.",
  },
];

export function WhyChooseMe() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why me" title="What you're actually getting" tone="trace" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 border-l border-border ml-1.5"
        >
          {CLAIMS.map((c) => (
            <motion.div key={c.tag} variants={fadeUp} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-trace" aria-hidden />
              <span className="font-mono text-mono-label uppercase text-trace">{c.tag}</span>
              <h3 className="font-display text-heading-lg text-text mt-2 max-w-xl">{c.claim}</h3>
              <p className="mt-2 max-w-lg text-body-sm text-text-muted">{c.support}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
