"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-6",
        "transition-colors transition-shadow duration-base",
        className
      )}
    >
      {children}
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  category: "Engineering" | "Web Design";
  tags?: string[];
  href?: string;
}

export function ProjectCard({ title, description, category, tags = [], href }: ProjectCardProps) {
  const dotColor = category === "Engineering" ? "bg-signal" : "bg-trace";

  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group block rounded-lg border border-border bg-surface p-6",
        "hover:border-signal/40 hover:shadow-glow-signal",
        "transition-colors duration-base"
      )}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} aria-hidden />
        <span className="font-mono text-mono-label uppercase text-text-muted">
          {category}
        </span>
      </div>
      <h3 className="font-display text-heading-md text-text mb-2">{title}</h3>
      <p className="text-body-sm text-text-muted mb-4">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </motion.a>
  );
}
