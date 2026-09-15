"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EngineeringCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  caption?: string;
  context?: string;
  visualLabel?: string;
  href: string;
}

export function EngineeringCard({ title, description, tags, image, imageAlt, caption, context, visualLabel, href }: EngineeringCardProps) {
  return (
    <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-signal/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-signal">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
        {image ? <Image src={image} alt={imageAlt || title} fill sizes="(min-width: 1024px) 550px, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" /> : (
          <div className="flex h-full flex-col justify-between p-7 md:p-9">
            <span className="font-mono text-mono-label uppercase text-text-muted">Texas Instruments / Applications Engineering</span>
            <span className="font-display text-display-md text-signal">{visualLabel}</span>
            <span className="font-mono text-mono-label uppercase text-text-muted">Summer 2026 · Completed</span>
          </div>
        )}
      </div>
      {caption && <p className="border-b border-border px-6 py-2 text-xs leading-relaxed text-text-muted">{caption}</p>}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 font-mono text-mono-label !leading-relaxed uppercase text-text-muted">{context}</p>
        <h3 className="mb-3 flex items-start justify-between gap-3 font-display text-heading-md text-text">{title}<ArrowUpRight className="mt-1 shrink-0 text-signal" size={20} /></h3>
        <p className="mb-5 flex-1 text-body-sm text-text-muted">{description}</p>
        <div className="flex flex-wrap gap-2">{tags.map(tag => <Badge key={tag}>{tag}</Badge>)}</div>
      </div>
    </Link>
  );
}
