"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillPinout } from "@/components/ui/skill-pinout";

const GROUPS = [
  {
    pin: "P1",
    label: "Programming & software",
    skills: ["C/C++", "Python", "Verilog", "Java", "Git", "SSH"],
  },
  {
    pin: "P2",
    label: "Hardware",
    skills: [
      "Embedded Systems (MSP430/ARM)",
      "PCB Design",
      "FPGA/ASIC Design",
      "Microarchitecture",
      "Microelectronics",
    ],
  },
  {
    pin: "P3",
    label: "Tools & simulation",
    skills: ["Vivado", "Synopsys", "Questa", "Altium Designer", "KiCad", "SPICE", "Oscilloscopes", "Logic Analyzers"],
  },
  {
    pin: "P4",
    label: "Operating systems",
    skills: ["Windows", "macOS", "Linux (Ubuntu and Debian)"],
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
