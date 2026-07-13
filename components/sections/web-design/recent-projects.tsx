"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { WebsiteCaseStudy } from "@/components/ui/website-case-study";

const PROJECTS = [
  {
    title: "Superior Concrete Inc.",
    industry: "Construction contractor",
    image: "/images/websites/superior-concrete.jpg",
    imageAlt: "Superior Concrete Inc. homepage",
    tags: ["Web Design", "SEO", "Lead Generation"],
    goal:
      "Give a working North Carolina concrete contractor a site that actually reflects the scale of their work and turns visitors into estimate requests, not just a digital business card.",
    approach:
      "Rebuilt the site around clear calls to action, a project gallery, and straightforward navigation to services, so a visitor can get from landing page to 'request an estimate' in a couple of clicks.",
    result:
      "A live, active marketing site the company uses as its primary way of fielding new project inquiries.",
  },
  {
    title: "TLowe Outfitters",
    industry: "Hunting ranch & outfitter",
    image: "/images/websites/tlowe-outfitters.jpg",
    imageAlt: "TLowe Outfitters homepage",
    tags: ["Web Design", "Branding"],
    goal:
      "Build a site for a South Texas hunting ranch that feels as premium as the land and the hunts it's selling — brand-forward, not another generic outfitter template.",
    approach:
      "Leaned into large-format photography, a bold type system, and a stripped-down navigation focused on the two things visitors actually want: what species are available, and how to book a hunt.",
    result:
      "A distinct, brand-led booking site that stands apart from the generic outfitter-directory look most competitors share.",
  },
];

export function RecentProjects() {
  return (
    <section id="recent-projects" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Recent projects"
          title="Sites I've shipped"
          tone="trace"
          description="Real, live client work — not mockups."
        />

        <div className="mt-14 space-y-8">
          {PROJECTS.map((p, i) => (
            <WebsiteCaseStudy key={p.title} {...p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
