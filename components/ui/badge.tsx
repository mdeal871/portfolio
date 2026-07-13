import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "neutral" | "signal" | "trace";
  className?: string;
}

const toneClasses = {
  neutral: "border-border text-text-muted",
  signal: "border-signal/30 text-signal",
  trace: "border-trace/30 text-trace",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1",
        "font-mono text-mono-label uppercase",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
