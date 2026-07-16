"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
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

        {/* Highlighted separately from the grid below — this is the one
            with an actual competition win attached to it. */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-14 flex flex-col gap-4 rounded-lg border border-signal/40 bg-surface p-6 shadow-glow-signal sm:flex-row sm:items-center sm:justify-between md:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-signal/30 bg-surface-2 text-signal">
              <Trophy size={19} strokeWidth={1.5} />
            </span>
            <div>
              <span className="font-mono text-mono-label uppercase text-signal">
                1st place · SoutheastCon 2026 · Best Website
              </span>
              <h3 className="font-display text-heading-sm text-text mt-1">
                Web Development Lead — IEEE Student Branch, NC State
              </h3>
              <p className="text-body-sm text-text-muted mt-2 max-w-lg">
                Led content, structure, and the team behind the chapter's
                site — now Treasurer as of January 2025.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2"
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
