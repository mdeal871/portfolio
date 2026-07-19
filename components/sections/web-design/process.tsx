"use client";

import { Compass, PenTool, Code2, Eye, Rocket, Search, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessFlow, type ProcessStep } from "@/components/ui/process-flow";

const STEPS: ProcessStep[] = [
  {
    n: "01",
    title: "Discovery",
    icon: Compass,
    description:
      "Learn about the business and the goals for the site — no bloated questionnaire, just a short call.",
  },
  {
    n: "02",
    title: "Design",
    icon: PenTool,
    description:
      "Layouts and branding tailored to the client, reviewed with you before a single line of code is written.",
  },
  {
    n: "03",
    title: "Development",
    icon: Code2,
    description: "Build a responsive, high-performance website from the approved design.",
  },
  {
    n: "04",
    title: "Review",
    icon: Eye,
    description: "Collect feedback and refine the design before anything goes live.",
  },
  {
    n: "05",
    title: "Launch",
    icon: Rocket,
    description: "Configure the domain, DNS, hosting, and SSL, then deploy — end to end, no drama.",
  },
  {
    n: "06",
    title: "SEO & Indexing",
    icon: Search,
    description: "Optimize the site and submit it to Google so it's actually findable once it's live.",
  },
  {
    n: "07",
    title: "Support",
    icon: LifeBuoy,
    description: "Continue helping with updates and maintenance so the site doesn't go stale.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Process"
          title="How a project runs — seven steps, start to finish."
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
