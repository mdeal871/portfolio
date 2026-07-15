"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

interface WebsiteCaseStudyProps {
  title: string;
  industry: string;
  image: string;
  imageAlt: string;
  tags: string[];
  goal: string;
  approach: string;
  result: string;
  href?: string;
  reverse?: boolean;
}

export function WebsiteCaseStudy({
  title,
  industry,
  image,
  imageAlt,
  tags,
  goal,
  approach,
  result,
  href = "#",
  reverse = false,
}: WebsiteCaseStudyProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className="rounded-lg border border-border bg-surface overflow-hidden"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="relative min-h-[260px] lg:min-h-full border-b border-border lg:border-b-0 lg:border-r">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-trace" aria-hidden />
            <span className="font-mono text-mono-label uppercase text-text-muted">
              {industry}
            </span>
          </div>
          <h3 className="font-display text-heading-lg text-text mb-5">{title}</h3>

          <div className="mb-6 font-mono text-mono-data text-text-muted">
            {tags.join("  /  ")}
          </div>

          <dl className="space-y-5">
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                Goal
              </dt>
              <dd className="text-body-sm text-text">{goal}</dd>
            </div>
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                Approach
              </dt>
              <dd className="text-body-sm text-text">{approach}</dd>
            </div>
            <div>
              <dt className="font-mono text-mono-label uppercase text-text-muted mb-1.5">
                Result
              </dt>
              <dd className="text-body-sm text-text">{result}</dd>
            </div>
          </dl>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 text-body-sm font-medium text-trace hover:underline underline-offset-4"
          >
            View live site
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
