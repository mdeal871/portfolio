"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Smartphone,
  Rows3,
  Sparkles,
  Globe,
  Network,
  Server,
  ShieldCheck,
  Search,
  Gauge,
  Map,
  ListChecks,
  Zap,
  MessageSquare,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

interface Item {
  icon: LucideIcon;
  title: string;
  description: string;
}

const GROUPS: { category: string; items: Item[] }[] = [
  {
    category: "Design & branding",
    items: [
      {
        icon: LayoutTemplate,
        title: "Custom Website Design",
        description: "A layout built around your business, not a reskinned template.",
      },
      {
        icon: Smartphone,
        title: "Responsive Mobile Design",
        description: "Looks and works right on phones and tablets, not just desktop.",
      },
      {
        icon: Rows3,
        title: "Content & Page Layout",
        description: "Your copy and photos organized so visitors find what they need fast.",
      },
      {
        icon: Sparkles,
        title: "Logo Design / Branding Support",
        description: "Light branding help if you don't already have a mark to build around.",
      },
    ],
  },
  {
    category: "Domain, hosting & security",
    items: [
      {
        icon: Globe,
        title: "Domain Setup",
        description: "Your domain purchased or connected and pointed at the new site.",
      },
      {
        icon: Network,
        title: "Cloudflare DNS Configuration",
        description: "DNS configured through Cloudflare for speed and reliability.",
      },
      {
        icon: Server,
        title: "Secure Hosting with Vercel",
        description: "Deployed on infrastructure built for fast, reliable uptime.",
      },
      {
        icon: ShieldCheck,
        title: "SSL Certificate",
        description: "HTTPS enabled by default — secure and trusted by every browser.",
      },
    ],
  },
  {
    category: "Search & performance",
    items: [
      {
        icon: Search,
        title: "Search Engine Optimization (SEO)",
        description: "Page structure and metadata built so search engines understand the site.",
      },
      {
        icon: Gauge,
        title: "Google Search Console Setup",
        description: "Connected and verified so you can see how the site performs in search.",
      },
      {
        icon: Map,
        title: "Sitemap Submission",
        description: "A sitemap generated and submitted so every page gets found.",
      },
      {
        icon: ListChecks,
        title: "Google Indexing",
        description: "Pages requested for indexing so the site shows up sooner, not eventually.",
      },
      {
        icon: Zap,
        title: "Performance Optimization",
        description: "Images, fonts, and code tuned so pages load fast on any connection.",
      },
    ],
  },
  {
    category: "Launch & ongoing",
    items: [
      {
        icon: MessageSquare,
        title: "Contact Form Integration",
        description: "A working contact form that sends inquiries straight to your inbox.",
      },
      {
        icon: LifeBuoy,
        title: "Ongoing Maintenance & Support",
        description: "Straightforward help after launch for updates and small changes.",
      },
    ],
  },
];

export function WhatsIncluded() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What's included"
          title="Everything it takes to go from idea to live"
          tone="trace"
          description="Every project includes the full list below — you're not paying extra later to discover half of it was missing."
        />

        <div className="mt-16 space-y-12">
          {GROUPS.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-mono-label uppercase text-text-muted mb-5">
                {group.category}
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.items.map(({ icon: Icon, title, description }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="rounded-lg border border-border bg-surface p-5 transition-colors duration-base hover:border-trace/40"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface-2 text-trace">
                      <Icon size={17} strokeWidth={1.5} />
                    </span>
                    <h4 className="font-display text-heading-sm text-text mt-4">{title}</h4>
                    <p className="mt-1.5 text-body-sm text-text-muted">{description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
