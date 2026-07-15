"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EASE_SIGNAL } from "@/components/motion/variants";
import { BatteryGaugeDiagram, ArchivalSystemDiagram } from "@/components/ui/project-diagrams";

interface EngineeringCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  diagram?: "battery-gauge" | "archival-system";
  href?: string;
}

// Fallback for any future no-image project that doesn't specify a diagram.
function PlaceholderArt({ seed }: { seed: string }) {
  const hash = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const rotate = (hash % 4) * 90;
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-2">
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <rect x="24" y="24" width="24" height="24" rx="3" stroke="rgb(var(--signal))" strokeWidth="1.5" />
        <path d="M36 8V24M36 48V64M8 36H24M48 36H64" stroke="rgb(var(--border))" strokeWidth="1.5" />
        <circle cx="36" cy="36" r="4" fill="rgb(var(--signal))" />
      </svg>
    </div>
  );
}

export function EngineeringCard({
  title,
  description,
  tags,
  image,
  diagram,
  href = "#",
}: EngineeringCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: EASE_SIGNAL }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-surface",
        "hover:border-signal/40 hover:shadow-glow-signal transition-colors duration-base"
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-slow ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
          />
        ) : diagram === "battery-gauge" ? (
          <BatteryGaugeDiagram />
        ) : diagram === "archival-system" ? (
          <ArchivalSystemDiagram />
        ) : (
          <PlaceholderArt seed={title} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          <span className="font-mono text-mono-label uppercase text-text-muted">
            Engineering
          </span>
        </div>
        <h3 className="font-display text-heading-md text-text mb-2">{title}</h3>
        <p className="text-body-sm text-text-muted mb-5 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
