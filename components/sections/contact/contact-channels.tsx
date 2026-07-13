"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp, viewportOnce } from "@/components/motion/variants";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "mdeal871@gmail.com",
    href: "mailto:mdeal871@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mason-deal",
    href: "https://www.linkedin.com/in/mason-deal/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mdeal871",
    href: "https://github.com/mdeal871",
  },
];

export function ContactChannels() {
  return (
    <section className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="rounded-lg border border-border bg-surface divide-y divide-border overflow-hidden"
        >
          {CHANNELS.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              variants={fadeUp}
              className="group flex items-center justify-between gap-6 px-6 py-6 transition-colors duration-base hover:bg-surface-2 md:px-8"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-signal transition-colors duration-base group-hover:border-signal/40">
                  <Icon size={19} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-mono text-mono-label uppercase text-text-muted">{label}</p>
                  <p className="font-display text-heading-sm text-text mt-0.5">{value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="text-text-muted transition-all duration-base group-hover:text-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
