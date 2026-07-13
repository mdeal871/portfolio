"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { EngineeringCard } from "@/components/ui/engineering-card";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const PROJECTS = [
  {
    title: "Embedded WiFi remote-controlled car",
    description:
      "Dual-mode autonomous and WiFi-controlled vehicle on an MSP430FR2355, with a custom PID control loop and a rebuilt lithium-ion power system.",
    tags: ["MSP430", "C/C++", "PID Control", "IoT"],
    image: "/images/projects/rc-car.jpg",
  },
  {
    title: "LED road-sign CMOS state machine",
    description:
      "Sequential logic circuit emulating a curve-warning road sign — two concurrent finite state machines breadboarded from schematic to demo.",
    tags: ["Digital Logic", "FSM Design", "CMOS"],
    image: "/images/projects/led-sign.jpg",
  },
  {
    title: "Battery-gauge PCB & Linux driver",
    description:
      "Custom PCB in Altium with ESD protection for a TI battery-gauge IC, paired with an embedded Linux driver for I2C communication.",
    tags: ["Altium", "Embedded Linux", "I2C"],
  },
  {
    title: "Digital project archival system",
    description:
      "Designed a document archival system and expanded server storage by 5TB for a construction firm's historical project records.",
    tags: ["Systems Design", "Infrastructure"],
  },
];

export function FeaturedEngineering() {
  return (
    <section id="engineering" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Engineering"
          title="Selected projects"
          description="Hardware, firmware, and the occasional server room — a look at what I've built in coursework, internships, and on my own."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <EngineeringCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
