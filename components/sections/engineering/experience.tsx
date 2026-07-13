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
    date: "May 2026 — Present",
    bullets: [
      "Collaborating cross-functionally with industrial and consumer electronics clients to diagnose, debug, and resolve application-level hardware failures and integration.",
      "Developing an embedded Linux software driver to enable system compatibility and I2C serial communications for a specific TI battery gauge IC architecture.",
      "Designing and validating a custom PCB via Altium, incorporating ESD protection architectures to guarantee reliable gauge data integrity in high-noise environments.",
    ],
  },
  {
    company: "NC State University Libraries",
    logo: "ncsu" as const,
    role: "Student IT Technician",
    location: "Raleigh, North Carolina",
    date: "January 2025 — Present",
    bullets: [
      "Maintain and troubleshoot 1,000+ Windows, macOS, and Linux systems by diagnosing hardware, software, and network issues, improving device reliability, and minimizing downtime across campus workstations.",
      "Resolve complex system failures through configuration analysis, system imaging, and documented troubleshooting procedures, preventing recurring technical issues.",
      "Deliver responsive technical support in a customer-facing helpdesk environment, strengthening hardware diagnostics and technical communication skills.",
    ],
  },
  {
    company: "Superior Concrete of NC Inc.",
    logo: "superior-concrete" as const,
    role: "Assistant Estimator",
    location: "Greenville, North Carolina (hybrid)",
    date: "February 2021 — Present",
    bullets: [
      "Designed and implemented a digital project archival system to organize historical project records, significantly improving internal data retrieval and workflow efficiency.",
      "Expanded company server storage infrastructure by 5 TB, enabling reliable long-term data retention.",
      "Launched a redesigned company website and resolved software, server, and network access issues through systematic technical troubleshooting.",
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
