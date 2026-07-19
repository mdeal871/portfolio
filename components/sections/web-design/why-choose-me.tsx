"use client";

import { motion } from "framer-motion";
import { Workflow, Zap, Search, MessageCircleMore } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const CLAIMS = [
  {
    icon: Workflow,
    tag: "End-to-end service",
    claim: "I manage everything from the first idea to launching the finished website.",
    support:
      "No hand-offs between a designer, a developer, and an SEO person — one point of contact for the entire project.",
  },
  {
    icon: Zap,
    tag: "Modern performance",
    claim: "Fast-loading websites built with clean code instead of heavy page builders.",
    support:
      "Lightweight, modern tools mean less to break and less weighing the site down — pages load fast on any connection.",
  },
  {
    icon: Search,
    tag: "SEO ready",
    claim: "Every website is optimized for search engines and submitted to Google after launch.",
    support: "Structure, metadata, sitemap, and indexing handled as part of the build, not an afterthought.",
  },
  {
    icon: MessageCircleMore,
    tag: "Personal collaboration",
    claim: "Clients work directly with me throughout the project.",
    support: "Clear communication and quick feedback — you're talking to the person building your site, every time.",
  },
];

export function WhyChooseMe() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Why work with me" title="What you're actually getting" tone="trace" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 border-l border-border ml-4"
        >
          {CLAIMS.map(({ icon: Icon, tag, claim, support }) => (
            <motion.div key={tag} variants={fadeUp} className="relative pb-12 pl-9 last:pb-0">
              <span className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-trace">
                <Icon size={15} strokeWidth={1.75} />
              </span>
              <span className="font-mono text-mono-label uppercase text-trace">{tag}</span>
              <h3 className="font-display text-heading-lg text-text mt-2 max-w-xl">{claim}</h3>
              <p className="mt-2 max-w-lg text-body-sm text-text-muted">{support}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
