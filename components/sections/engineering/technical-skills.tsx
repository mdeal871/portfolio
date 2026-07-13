"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillPinout } from "@/components/ui/skill-pinout";

const GROUPS = [
  {
    pin: "P1",
    label: "Programming & software",
    skills: ["C/C++", "Verilog", "Java", "Assembly", "Git", "GitHub"],
  },
  {
    pin: "P2",
    label: "Hardware",
    skills: [
      "Embedded Systems",
      "Soldering",
      "Digital Logic Design",
      "Analog Circuit Design",
      "Microelectronics",
    ],
  },
  {
    pin: "P3",
    label: "Tools & simulation",
    skills: ["AMD Vivado", "Altium", "KiCad", "SPICE", "Oscilloscopes", "Solidworks"],
  },
  {
    pin: "P4",
    label: "Operating systems",
    skills: ["Windows", "macOS", "Linux (Ubuntu)", "Linux (RedHat)"],
  },
];

export function TechnicalSkills() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" title="Technical skills" />
        <div className="mt-14">
          <SkillPinout groups={GROUPS} />
        </div>
      </div>
    </section>
  );
}
