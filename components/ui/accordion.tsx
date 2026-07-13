"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_SIGNAL } from "@/components/motion/variants";

export interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        const num = String(i + 1).padStart(2, "0");
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start gap-5 py-5 text-left"
            >
              <span
                className={`mt-0.5 font-mono text-mono-data shrink-0 transition-colors duration-fast ${
                  isOpen ? "text-trace" : "text-text-muted"
                }`}
              >
                Q{num}
              </span>
              <span className="font-display text-heading-sm text-text flex-1">
                {item.question}
              </span>
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-trace transition-opacity duration-fast"
                style={{ opacity: isOpen ? 1 : 0 }}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE_SIGNAL }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-10 max-w-2xl text-body-sm text-text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
