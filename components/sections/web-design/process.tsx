"use client";

import { ClipboardList, PenTool, Code2, Search, Rocket, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessFlow, type ProcessStep } from "@/components/ui/process-flow";

const STEPS: ProcessStep[] = [
  {
    n: "01",
    title: "Planning",
    icon: ClipboardList,
    description:
      "A short call to understand the business, the goal for the site, and what's actually needed — no bloated questionnaire.",
  },
  {
    n: "02",
    title: "Design",
    icon: PenTool,
    description:
      "A custom layout and visual direction built around your brand, reviewed with you before a single line of code is written.",
  },
  {
    n: "03",
    title: "Development",
    icon: Code2,
    description: "The approved design gets built — responsive, fast, and tested across devices.",
  },
  {
    n: "04",
    title: "SEO",
    icon: Search,
    description:
      "Metadata, page structure, and local search setup so the site is actually findable once it's live.",
  },
  {
    n: "05",
    title: "Launch",
    icon: Rocket,
    description: "Domain, hosting, and go-live handled end to end — the site ships without drama.",
  },
  {
    n: "06",
    title: "Support",
    icon: LifeBuoy,
    description:
      "Post-launch check-ins and straightforward help with updates, so the site doesn't go stale.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Process"
          title="How a project runs — six steps, start to finish."
          variant="statement"
          tone="trace"
          align="center"
          className="mx-auto text-center"
          description="No surprises in between."
        />

        <div className="mt-16">
          <ProcessFlow steps={STEPS} />
        </div>
      </div>
    </section>
  );
}
