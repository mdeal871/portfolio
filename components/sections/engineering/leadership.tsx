"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Trophy, Landmark, Lightbulb, Compass } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const ROLES = [
  {
    org: "Alpha Phi Omega National Service Fraternity",
    role: "Education Vice President",
    date: "August 2024 — Present",
    note: "Previously Webmaster, External Shadow, and Scouting Fellowship chairs.",
    icon: HeartHandshake,
  },
  {
    org: "IEEE Student Branch, NC State",
    role: "Web Development Lead",
    date: "July 2025 — May 2026",
    note: "Won 1st place at SoutheastCon 2026 for best website.",
    icon: Trophy,
  },
  {
    org: "IEEE Student Branch, NC State",
    role: "Treasurer",
    date: "April 2026 — Present",
    icon: Landmark,
  },
  {
    org: "Apple Next-Gen Innovators Mentorship",
    role: "Mentee",
    date: "September 2025 — Present",
    icon: Lightbulb,
  },
  {
    org: "NCSU–IBM Pathfinder Mentorship",
    role: "Mentee",
    date: "September 2024 — May 2025",
    icon: Compass,
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
              key={r.org + r.role}
              variants={fadeUp}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-signal">
                    <r.icon size={19} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-heading-sm text-text">{r.role}</h3>
                    <p className="text-body-sm text-text-muted mt-1">{r.org}</p>
                  </div>
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
