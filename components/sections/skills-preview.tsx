"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillPinout } from "@/components/ui/skill-pinout";

const GROUPS = [
  { pin: "P1", label: "Programming & software", skills: ["C/C++", "Python", "Verilog", "Java", "Git", "SSH"] },
  { pin: "P2", label: "Hardware design", skills: ["Embedded Systems", "PCB Design", "FPGA/ASIC Design", "Microarchitecture"] },
  { pin: "P3", label: "Tools & simulation", skills: ["Vivado", "Synopsys", "Questa", "Altium", "KiCad", "SPICE"] },
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
