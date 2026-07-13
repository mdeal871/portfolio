"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline, type TimelineEntry } from "@/components/ui/timeline";

const ENTRIES: TimelineEntry[] = [
  {
    date: "Feb 2021 — Present",
    title: "Assistant Estimator",
    subtitle: "Superior Concrete of NC Inc. · Greenville, NC (hybrid)",
  },
  {
    date: "Aug 2024 — Present",
    title: "Education Vice President",
    subtitle: "Alpha Phi Omega National Service Fraternity",
    tone: "trace",
  },
  {
    date: "Sep 2024 — May 2025",
    title: "Pathfinder Mentee",
    subtitle: "NCSU–IBM Pathfinder Mentorship",
    tone: "trace",
  },
  {
    date: "Jan 2025 — Present",
    title: "Student IT Technician",
    subtitle: "NC State University Libraries",
  },
  {
    date: "Jan 2025 — Present",
    title: "Treasurer, IEEE NC State",
    subtitle: "Previously Web Development Lead — 1st place, SoutheastCon 2026 (Best Website)",
    tone: "trace",
  },
  {
    date: "Spring 2025",
    title: "Dean's List",
    tone: "trace",
  },
  {
    date: "Sep 2025 — Present",
    title: "Mentee, Apple Next-Gen Innovators",
    tone: "trace",
  },
  {
    date: "Spring 2026",
    title: "Dean's List & Student Assistant of the Year",
    subtitle: "2026 NC State University Libraries Student Assistant of the Year",
    tone: "trace",
  },
  {
    date: "May 2026 — Present",
    title: "Applications Engineer Intern",
    subtitle: "Texas Instruments · Dallas, TX — Battery Gauge Products",
  },
  {
    date: "Expected May 2027",
    title: "B.S. Computer Engineering",
    subtitle: "North Carolina State University · GPA 3.61 · Accelerated Bachelor's–Master's track",
  },
];

export function TimelineSection() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Timeline"
            title="How I got here"
            description="Coursework, internships, leadership, and a few milestones along the way — in order."
            className="max-w-none md:sticky md:top-28"
          />
          <Timeline entries={ENTRIES} />
        </div>
      </div>
    </section>
  );
}
