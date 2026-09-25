"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { CompanyLogo } from "@/components/ui/company-logo";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

const EDUCATION = [
  {
    school: "North Carolina State University",
    degree: "Bachelor of Science, Computer Engineering",
    dates: "Aug 2024 – May 2027 (expected)",
    details: "Accelerated Bachelor's–Master's (ABM) track, graduate coursework in progress · GPA 3.61",
    honors: 'University Honors Program, Dean\'s List (Spring 2025, Spring 2026), 2026 Libraries Student Assistant of the Year, SECU "People Helping People" Scholarship Recipient',
    activities: "Alpha Phi Omega National Service Fraternity, IEEE Student Branch, Apple Next-Gen Innovators Mentorship, IBM Pathfinder Mentorship",
    logo: "ncsu",
  },
  {
    school: "Nash Community College",
    degree: "Associate of Arts, Associate of Science & Associate of Engineering",
    dates: "Aug 2019 – May 2024",
    honors: "Summa Cum Laude (highest honors), Dean's List (Spring 2024), Nash Notable Faculty Nomination, Outstanding Physics Award",
    activities: "Math and chemistry tutoring, multimedia volunteering",
  },
  {
    school: "NRM Early College High School",
    degree: "High School Diploma",
    dates: "Aug 2019 – May 2024",
  },
];

export function Education() {
  return (
    <section className="relative border-t border-border bg-bg py-16">
      <div className="mx-auto max-w-6xl space-y-6 px-6">
        {EDUCATION.map((education) => (
          <motion.div
            key={education.school}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="rounded-lg border border-border bg-surface p-6 md:p-8"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                {education.logo === "ncsu" ? (
                  <CompanyLogo company="ncsu" className="shrink-0" />
                ) : (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-trace">
                    <GraduationCap size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                )}
                <div className="min-w-0">
                  <h2 className="font-display text-heading-md text-text">
                    {education.school}
                  </h2>
                  <p className="mt-1 text-body-sm text-text-muted">
                    {education.degree}
                  </p>
                  {education.details && (
                    <p className="mt-2 text-body-sm text-text-muted">
                      {education.details}
                    </p>
                  )}
                </div>
              </div>
              <div className="shrink-0 border-t border-border pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="font-mono text-mono-label uppercase text-text-muted">Dates</p>
                <p className="mt-0.5 text-body-sm text-text">{education.dates}</p>
              </div>
            </div>
            {education.honors && education.activities && (
              <div className="mt-5 grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-mono-label uppercase text-text-muted">Honors</h3>
                  <p className="mt-2 text-body-sm text-text">{education.honors}</p>
                </div>
                <div>
                  <h3 className="font-mono text-mono-label uppercase text-text-muted">Activities &amp; service</h3>
                  <p className="mt-2 text-body-sm text-text">{education.activities}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
