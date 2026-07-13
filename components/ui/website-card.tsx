"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WebsiteCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href?: string;
}

export function WebsiteCard({ title, description, tags, image, href = "#" }: WebsiteCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group block overflow-hidden rounded-lg border border-border bg-surface hover:border-trace/40 hover:shadow-glow-trace transition-colors duration-base"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <Image
          src={image}
          alt={`${title} homepage screenshot`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-slow ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-base group-hover:opacity-100">
          <span className="m-5 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-4 py-2 text-body-sm font-medium text-[#10151C]">
            View case study
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-trace" aria-hidden />
          <span className="font-mono text-mono-label uppercase text-text-muted">
            Web design
          </span>
        </div>
        <h3 className="font-display text-heading-md text-text mb-2">{title}</h3>
        <p className="text-body-sm text-text-muted mb-5">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} tone="trace">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
