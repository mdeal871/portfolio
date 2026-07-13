"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on scope — a small business marketing site is a very different job from a booking platform with custom features. I give a flat, upfront quote after a short planning call, not a per-hour retainer.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most small business sites run 3–6 weeks from planning to launch, depending on how quickly content and feedback come back to me.",
  },
  {
    question: "Do you handle hosting and domains?",
    answer:
      "Yes — I can set up hosting and connect your domain, or work with what you already have. I'll walk you through the options during planning.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "That's what the support step is for. I offer ongoing support for content updates and small changes, billed simply rather than through a bloated retainer.",
  },
  {
    question: "Do you build online stores?",
    answer:
      "I can, depending on scope and platform needs — let's talk about what you're selling and how you want checkout to work.",
  },
  {
    question: "Can you redesign my existing site instead of starting over?",
    answer:
      "Often, yes. If the bones are workable, a redesign can be faster and cheaper than a full rebuild — I'll tell you honestly which one your site needs.",
  },
];

export function Faq() {
  return (
    <section className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions clients usually ask"
            tone="trace"
            className="max-w-none md:sticky md:top-28"
          />
          <Accordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
