"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const DOCUMENTS = [
  {
    fig: "DOC. 01",
    title: "Résumé",
    description: "Education, experience, skills, and honors — one page.",
    href: "/documents/mason-deal-resume.pdf",
    filename: "mason-deal-resume.pdf",
  },
  {
    fig: "DOC. 02",
    title: "Project portfolio",
    description: "Full write-ups and photos for the embedded systems and logic design projects.",
    href: "/documents/mason-deal-project-portfolio.pdf",
    filename: "mason-deal-project-portfolio.pdf",
  },
];

export function Downloads() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Downloads" title="Résumé & project portfolio" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {DOCUMENTS.map((doc) => (
            <motion.a
              key={doc.title}
              href={doc.href}
              download={doc.filename}
              variants={fadeUp}
              className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors duration-base hover:border-signal/40 hover:shadow-glow-signal"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface-2 text-signal">
                  <FileText size={19} strokeWidth={1.5} />
                </span>
                <Download
                  size={18}
                  strokeWidth={1.5}
                  className="text-text-muted transition-colors duration-base group-hover:text-signal"
                />
              </div>
              <span className="mt-5 font-mono text-mono-label uppercase text-text-muted">
                {doc.fig} · PDF
              </span>
              <h3 className="font-display text-heading-md text-text mt-1.5">{doc.title}</h3>
              <p className="mt-2 text-body-sm text-text-muted">{doc.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
