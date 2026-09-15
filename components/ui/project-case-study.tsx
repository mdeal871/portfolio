"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

interface CaseStudyProps {
  title: string;
  context: string;
  id?: string;
  image?: string;
  caption?: string;
  visualLabel?: string;
  outcomeLabel?: string;
  imageAlt?: string;
  tags: string[];
  problem: string;
  approach: string;
  challenges: string[];
  outcome: string;
  reverse?: boolean;
}

export function ProjectCaseStudy({
  id,
  caption,
  visualLabel,
  outcomeLabel = "Outcome",
  title,
  context,
  image,
  imageAlt,
  tags,
  problem,
  approach,
  challenges,
  outcome,
  reverse = false,
}: CaseStudyProps) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className="scroll-mt-28 rounded-lg border border-border bg-surface overflow-hidden"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="relative min-h-[280px] lg:min-h-full border-b border-border lg:border-b-0 lg:border-r">
          {image ? <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          /> : <div className="flex h-full min-h-[280px] flex-col justify-center gap-6 bg-surface-2 p-8 md:p-12">
            <span className="font-mono text-mono-label uppercase text-text-muted">Texas Instruments</span>
            <span className="font-display text-display-lg text-signal">{visualLabel}</span>
            <p className="max-w-xs text-body-sm text-text-muted">Internship work · Summer 2026</p>
          </div>}
          {caption && <p className="absolute inset-x-0 bottom-0 bg-bg/90 p-4 text-xs leading-relaxed text-text">{caption}</p>}
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            <span className="font-mono text-mono-label !leading-relaxed uppercase text-text-muted">
              {context}
            </span>
          </div>
          <h3 className="font-display text-heading-lg text-text mb-5">{title}</h3>

          <div className="mb-6 font-mono text-mono-data text-text-muted">
            {tags.join("  /  ")}
          </div>

          <dl className="space-y-5">
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                Problem
              </dt>
              <dd className="text-body-sm text-text">{problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                Approach
              </dt>
              <dd className="text-body-sm text-text">{approach}</dd>
            </div>
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                Challenges
              </dt>
              <dd>
                <ul className="space-y-1.5">
                  {challenges.map((c, i) => (
                    <li key={i} className="flex gap-2 text-body-sm text-text">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-trace" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                {outcomeLabel}
              </dt>
              <dd className="text-body-sm text-text">{outcome}</dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.div>
  );
}
