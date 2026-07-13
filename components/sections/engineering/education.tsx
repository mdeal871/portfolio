"use client";

import { motion } from "framer-motion";
import { CompanyLogo } from "@/components/ui/company-logo";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export function Education() {
  return (
    <section className="relative border-t border-border bg-bg py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col gap-5 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"
        >
          <div className="flex items-center gap-4">
            <CompanyLogo company="ncsu" />
            <div>
              <h2 className="font-display text-heading-md text-text">
                B.S. Computer Engineering
              </h2>
              <p className="text-body-sm text-text-muted mt-1">
                North Carolina State University — Accelerated Bachelor's–Master's
                (ABM) track, graduate coursework in progress
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-6 border-t border-border pt-4 sm:border-t-0 sm:pt-0 sm:pl-6 sm:border-l">
            <div>
              <p className="font-mono text-mono-label uppercase text-text-muted">Graduating</p>
              <p className="font-display text-heading-sm text-text mt-0.5">May 2027</p>
            </div>
            <div>
              <p className="font-mono text-mono-label uppercase text-text-muted">GPA</p>
              <p className="font-display text-heading-sm text-text mt-0.5">3.61</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
