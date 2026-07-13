"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const ROLES = [
  {
    org: "Alpha Phi Omega National Service Fraternity",
    role: "Education Vice President",
    date: "August 2024 — Present",
    note: "Previously Webmaster, External Shadow, and Scouting Fellowship chairs.",
  },
  {
    org: "IEEE Student Branch, NC State",
    role: "Treasurer",
    date: "January 2025 — Present",
    note: "Previously Web Development Lead — won 1st place at SoutheastCon 2026 for best website.",
  },
  {
    org: "Apple Next-Gen Innovators Mentorship",
    role: "Mentee",
    date: "September 2025 — Present",
  },
  {
    org: "NCSU–IBM Pathfinder Mentorship",
    role: "Mentee",
    date: "September 2024 — May 2025",
  },
];

export function Leadership() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership & organizations"
          description="Service, mentorship, and a website that beat out the rest of the region."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {ROLES.map((r) => (
            <motion.div
              key={r.org}
              variants={fadeUp}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-heading-sm text-text">{r.role}</h3>
                  <p className="text-body-sm text-text-muted mt-1">{r.org}</p>
                </div>
                <span className="font-mono text-mono-label uppercase text-text-muted shrink-0 text-right">
                  {r.date}
                </span>
              </div>
              {r.note && <p className="text-body-sm text-text-muted mt-3">{r.note}</p>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
