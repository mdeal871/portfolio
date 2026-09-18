"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_STANDARD } from "@/components/motion/variants";

type Variant = "primary" | "secondary" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";
type Tone = "signal" | "trace";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  tone?: Tone;
  className?: string;
  children?: React.ReactNode;
};

export interface ButtonProps extends CommonProps, Omit<HTMLMotionProps<"button">, keyof CommonProps> {}

export interface LinkButtonProps extends CommonProps, Omit<HTMLMotionProps<"a">, keyof CommonProps> {
  href: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-body-sm gap-1.5",
  md: "h-11 px-5 text-body gap-2",
  lg: "h-13 px-7 text-body-lg gap-2",
};

// Tone controls the accent color independently of variant, so a primary
// button can be signal (engineering pages) or trace (web design pages)
// without a one-off className override at the call site.
const variantClasses: Record<Variant, Record<Tone, string>> = {
  primary: {
    signal: "bg-signal text-white hover:bg-signal-strong hover:shadow-glow-signal",
    trace: "bg-trace text-white hover:opacity-90 hover:shadow-glow-trace",
  },
  secondary: {
    signal: "bg-transparent text-text border border-border hover:bg-surface-2 hover:border-signal/40",
    trace: "bg-transparent text-text border border-border hover:bg-surface-2 hover:border-trace/40",
  },
  ghost: {
    signal: "bg-transparent text-text-muted hover:text-text underline-offset-4 hover:underline px-0 h-auto",
    trace: "bg-transparent text-text-muted hover:text-text underline-offset-4 hover:underline px-0 h-auto",
  },
  icon: {
    signal: "h-10 w-10 p-0 bg-surface border border-border hover:border-signal/40 hover:shadow-glow-signal text-text",
    trace: "h-10 w-10 p-0 bg-surface border border-border hover:border-trace/40 hover:shadow-glow-trace text-text",
  },
};

function baseClasses(variant: Variant, size: Size, tone: Tone, className?: string) {
  return cn(
    "inline-flex items-center justify-center rounded-md font-medium",
    "transition-colors transition-shadow duration-base",
    "disabled:opacity-40 disabled:pointer-events-none",
    variant !== "icon" && variant !== "ghost" ? sizeClasses[size] : undefined,
    variantClasses[variant][tone],
    className
  );
}

// Renders an <a> styled as a button — use for navigation (anchors, routes).
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "md", tone = "signal", children, href, ...props }, ref) => (
    <motion.a
      ref={ref}
      href={href}
      whileHover={{ scale: variant === "ghost" ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: EASE_STANDARD }}
      className={baseClasses(variant, size, tone, className)}
      {...props}
    >
      {children}
    </motion.a>
  )
);
LinkButton.displayName = "LinkButton";

// Renders a real <button> — use for in-page actions (submit, toggle, open modal).
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", tone = "signal", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: variant === "ghost" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15, ease: EASE_STANDARD }}
        className={baseClasses(variant, size, tone, className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
