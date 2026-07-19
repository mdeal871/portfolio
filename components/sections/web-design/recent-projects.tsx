"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { WebsiteCaseStudy } from "@/components/ui/website-case-study";

const PROJECTS = [
  {
    title: "Superior Concrete Inc.",
    industry: "Construction contractor",
    image: "/images/websites/superior-concrete.jpg",
    imageAlt: "Superior Concrete Inc. homepage",
    tags: ["HTML/CSS/JavaScript", "Responsive", "SEO", "Vercel", "Cloudflare", "Google Search Console"],
    goal:
      "Give a working North Carolina concrete contractor a site that actually reflects the scale of their work and turns visitors into estimate requests, not just a digital business card.",
    approach:
      "A complete solution, not just a design file: a custom responsive build with clear calls to action and a project gallery, deployed on Vercel with Cloudflare DNS and SSL, and submitted to Google Search Console so the site was set up to actually get found.",
    result:
      "A live, active marketing site the company uses as its primary way of fielding new project inquiries.",
    href: "https://www.superiorconcreteofnc.com",
  },
  {
    title: "TLowe Outfitters",
    industry: "Hunting ranch & outfitter",
    image: "/images/websites/tlowe-outfitters.jpg",
    imageAlt: "TLowe Outfitters homepage",
    tags: ["HTML/CSS/JavaScript", "Responsive", "SEO", "Vercel", "Cloudflare", "Google Search Console"],
    goal:
      "Build a site for a South Texas hunting ranch that feels as premium as the land and the hunts it's selling — brand-forward, not another generic outfitter template.",
    approach:
      "End-to-end delivery: large-format photography and a bold type system built into a fully responsive custom site, with domain, hosting, and SEO fundamentals handled as part of the same project — not a separate line item.",
    result:
      "A distinct, brand-led booking site that stands apart from the generic outfitter-directory look most competitors share.",
    // WIP preview link — swap for the real domain once the site is finished and published.
    href: "https://tloweoutfitters.vercel.app/",
  },
  {
    title: "IEEE NC State Chapter Site",
    industry: "Student organization · Team lead",
    image: "/images/websites/ieee-ncsu.jpg",
    imageAlt: "IEEE NC State chapter website homepage",
    tags: ["Team Lead", "Content Strategy", "Web Development"],
    goal:
      "Give NC State's IEEE chapter a site strong enough to compete for best website at SoutheastCon — the organization's biggest regional stage.",
    approach:
      "Not a personal build — I led the team as Web Development Lead, managing content, information structure, and the people building it, rather than writing the code myself.",
    result: "Won 1st place for Best Website at SoutheastCon 2026.",
    href: "https://ieeencsu.com/",
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
          description="Client work, plus one I led rather than built myself — noted where that's the case."
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
