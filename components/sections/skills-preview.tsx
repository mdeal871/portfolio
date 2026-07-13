"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillPinout } from "@/components/ui/skill-pinout";

const GROUPS = [
  { pin: "P1", label: "Embedded & firmware", skills: ["C/C++", "Verilog", "Assembly", "RTOS"] },
  { pin: "P2", label: "Hardware design", skills: ["Altium", "KiCad", "SPICE", "Oscilloscopes"] },
  { pin: "P3", label: "Software & tools", skills: ["Java", "Git", "Linux", "Vivado"] },
  { pin: "P4", label: "Web & design", skills: ["Next.js", "TypeScript", "Tailwind", "Figma"] },
];

export function SkillsPreview() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Capabilities" title="What I work with" />
        <div className="mt-14">
          <SkillPinout groups={GROUPS} />
        </div>
      </div>
    </section>
  );
}
