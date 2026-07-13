"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const AWARDS = [
  "Eagle Scout",
  "University Honors Program",
  "Dean's List — Spring 2025",
  "Dean's List — Spring 2026",
  "2026 NC State University Libraries Student Assistant of the Year",
  'SECU "People Helping People" Scholarship',
];

export function Awards() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Recognition" title="Awards & honors" align="center" className="mx-auto text-center" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AWARDS.map((award) => (
            <motion.div
              key={award}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-trace">
                <Award size={16} strokeWidth={1.5} />
              </span>
              <span className="text-body-sm text-text">{award}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
