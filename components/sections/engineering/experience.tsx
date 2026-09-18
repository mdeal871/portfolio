"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CompanyLogo } from "@/components/ui/company-logo";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const ROLES = [
  {
    company: "Texas Instruments",
    logo: "ti" as const,
    role: "Applications Engineer Intern — Battery Gauge Products",
    location: "Dallas, Texas",
    date: "May 2026 — August 2026",
    bullets: [
      "Diagnosed and resolved application-level hardware, firmware, and system-integration issues for industrial and consumer-electronics customers, closing 26 customer support cases without further escalation.",
      "Developed an embedded Linux kernel driver suite for a TI battery-gauge architecture, enabling I2C communication, device configuration, and system-level integration across two gauge platforms.",
      "Designed and validated a custom PCB in Altium with integrated ESD-protection circuitry, maintaining reliable data communication during contact-discharge testing exceeding 15 kV.",
    ],
  },
  {
    company: "NC State University Libraries",
    logo: "ncsu" as const,
    role: "Student IT Technician",
    location: "Raleigh, North Carolina",
    date: "January 2025 — Present",
    bullets: [
      "Support an environment of more than 1,000 computing systems, diagnosing hardware, software, and network failures to maintain workstation availability across university libraries.",
      "Resolve approximately 70 tickets per semester through configuration analysis, system imaging, component replacement, and troubleshooting.",
      "Provide customer-facing technical support to students, faculty, staff, and large campus events, including technology setup and live troubleshooting for events ranging from 10 to 100+ attendees.",
    ],
  },
  {
    company: "Superior Concrete of NC Inc.",
    logo: "superior-concrete" as const,
    role: "Assistant Estimator",
    location: "Greenville, North Carolina (hybrid)",
    date: "February 2021 — Present",
    bullets: [
      "Prepare material takeoffs, prequalifications, and bid documentation for concrete construction projects, supporting project planning and competitive bidding.",
      "Designed and implemented a digital project archive and expanded server capacity by 5 TB, improving long-term record retention and retrieval.",
      "Designed and launched a new company website and resolved select business-critical software, storage, and network issues in-house, avoiding outside IT escalation.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="From board-level hardware debug to 1,000+ managed campus systems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 space-y-6"
        >
          {ROLES.map((r) => (
            <motion.div
              key={r.company}
              variants={fadeUp}
              className="rounded-lg border border-border bg-surface p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <CompanyLogo company={r.logo} />
                  <div>
                    <h3 className="font-display text-heading-md text-text">{r.role}</h3>
                    <p className="text-body-sm text-text-muted mt-1">
                      {r.company} · {r.location}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-mono-label uppercase text-text-muted shrink-0">
                  {r.date}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {r.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-body-sm text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
