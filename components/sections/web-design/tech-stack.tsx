"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { SkillPinout } from "@/components/ui/skill-pinout";

const GROUPS = [
  { pin: "01", label: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "Next.js"] },
  { pin: "02", label: "Hosting & infra", skills: ["Vercel", "Cloudflare", "GitHub"] },
  { pin: "03", label: "Tools & design", skills: ["VS Code", "Figma", "SVG Graphics"] },
  { pin: "04", label: "Search & analytics", skills: ["Google Search Console", "Google Analytics"] },
];

export function TechStack() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Technology"
          title="What it's built with"
          tone="trace"
          description="Lightweight, modern tools on purpose — no heavy page builders or bloated plugins slowing the site down. Less to break, faster to load."
        />

        <div className="mt-14">
          <SkillPinout groups={GROUPS} tone="trace" />
        </div>
      </div>
    </section>
  );
}
