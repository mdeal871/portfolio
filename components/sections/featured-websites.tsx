"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { WebsiteCard } from "@/components/ui/website-card";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const SITES = [
  {
    title: "Superior Concrete Inc.",
    description:
      "Marketing site relaunch for a North Carolina concrete contractor — built to convert visitors into estimate requests.",
    tags: ["Web Design", "SEO", "Lead Gen"],
    image: "/images/websites/superior-concrete.jpg",
    href: "/web-design#recent-projects",
  },
  {
    title: "TLowe Outfitters",
    description:
      "Brand-forward booking site for a South Texas hunting ranch, built around the land and the species it's known for.",
    tags: ["Web Design", "Branding"],
    image: "/images/websites/tlowe-outfitters.jpg",
    href: "/web-design#recent-projects",
  },
];

export function FeaturedWebsites() {
  return (
    <section id="web-design" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Web design"
          title="Websites I've built"
          description="Freelance and family-business work — from first sketch to a site that's actually live and bringing in customers."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {SITES.map((site) => (
            <motion.div key={site.title} variants={fadeUp}>
              <WebsiteCard {...site} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
