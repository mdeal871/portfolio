"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { EngineeringCard } from "@/components/ui/engineering-card";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

import { engineeringProjects } from "@/lib/engineering-projects";

export function FeaturedEngineering() {
  return (
    <section id="engineering" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Engineering"
          title="Selected projects"
          description="Battery-gauge hardware and software at TI, current senior design with Lenovo, and hands-on embedded work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {engineeringProjects.slice(0, 4).map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <EngineeringCard {...project} href={`/engineering#${project.id}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
