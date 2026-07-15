"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCaseStudy } from "@/components/ui/project-case-study";
import { EngineeringCard } from "@/components/ui/engineering-card";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const CASE_STUDIES = [
  {
    title: "Embedded WiFi remote-controlled car",
    context: "NC State — Introduction to Embedded Systems",
    image: "/images/projects/rc-car.jpg",
    imageAlt: "Finished dual-mode RC car built on a custom red PCB chassis",
    tags: ["MSP430FR2355", "C/C++", "PID Control", "Li-ion Power"],
    problem:
      "Build a vehicle capable of both fully autonomous navigation and live WiFi control on the same hardware, without the reliability problems that AA-battery-powered class builds typically ran into.",
    approach:
      "Engineered a dual-mode autonomous and WiFi-enabled vehicle around the TI MSP430FR2355 microcontroller. Redesigned the power delivery system by migrating from AA batteries to a rechargeable lithium-ion solution, then tuned an adaptive PID control loop through extensive testing to keep the vehicle stable in both driving modes.",
    challenges: [
      "Developed low-level firmware to manage peripheral integration, including hardware timers, interrupts, and serial IoT communication protocols.",
      "Managed complex hardware-software integration by interpreting schematics, debugging electrical systems, and working extensively with component datasheets.",
    ],
    outcome:
      "The vehicle completed a combined autonomous and WiFi-controlled course successfully on its first attempt. Planned next steps include DAC-based voltage control for finer speed regulation and software-defined low-power sleep modes to extend battery life.",
  },
  {
    title: "LED road-sign CMOS state machine",
    context: "NC State — Introduction to Logic Design",
    image: "/images/projects/led-sign.jpg",
    imageAlt: "Real curve-warning LED road signs that inspired the project",
    tags: ["Digital Logic", "FSM Design", "CMOS", "Breadboarding"],
    problem:
      "Design a sequential logic circuit that emulates a real curve-warning road sign — including its flashing directional patterns — entirely in discrete digital logic, from schematic through physical demonstration.",
    approach:
      "Designed and breadboarded the circuit around two concurrent finite state machines: one to handle asynchronous user inputs and one to drive the multi-pattern flashing sequence, following the full engineering design lifecycle from schematic design to a working physical demo.",
    challenges: [
      "Designing and constructing two concurrent FSMs to handle asynchronous inputs and multi-pattern flashing sequences at the same time.",
      "Synchronizing complex logic timing by troubleshooting and stabilizing the integrated clock circuit.",
    ],
    outcome:
      "Delivered a working breadboarded demo that correctly reproduced the curve-warning flash pattern. Identified follow-on improvements: additional logic states for a synchronized 'hazard' flashing mode, and a cleaner physical layout to reduce wiring interference.",
  },
];

const WORK_PROJECTS = [
  {
    title: "Battery-gauge PCB & Linux driver",
    description:
      "Custom PCB in Altium with ESD protection for a TI battery-gauge IC, paired with an embedded Linux driver for I2C communication. Ongoing work at Texas Instruments.",
    tags: ["Altium", "Embedded Linux", "I2C", "ESD Protection"],
    diagram: "battery-gauge" as const,
  },
  {
    title: "Digital project archival system",
    description:
      "Designed a document archival system and expanded server storage by 5TB for Superior Concrete's historical project records, improving retrieval and workflow efficiency.",
    tags: ["Systems Design", "Infrastructure", "Data Retention"],
    diagram: "archival-system" as const,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies"
          description="Two coursework projects, broken down the way I'd walk through them in an interview: the problem, the approach, what got in the way, and how it landed."
        />

        <div className="mt-14 space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <ProjectCaseStudy key={cs.title} {...cs} reverse={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-mono text-mono-label uppercase text-text-muted mb-6">
            More from my work experience
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {WORK_PROJECTS.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <EngineeringCard {...p} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
