import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "signal",
  variant = "compact",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "signal" | "trace";
  variant?: "compact" | "statement";
  className?: string;
}) {
  const dotColor = tone === "trace" ? "bg-trace" : "bg-signal";

  if (variant === "statement") {
    // No small eyebrow row — the eyebrow becomes an inline mono prefix
    // on the heading itself. Bigger, more editorial, deliberately
    // different rhythm from the compact dot-eyebrow pattern used
    // elsewhere on the site.
    return (
      <div className={cn(align === "center" && "text-center mx-auto", "max-w-3xl", className)}>
        <h2 className="font-display text-display-md text-text">
          <span className={cn("font-mono text-mono-label align-middle mr-3", tone === "trace" ? "text-trace" : "text-signal")}>
            {eyebrow.toUpperCase()}
          </span>
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-body-lg text-text-muted max-w-2xl mx-auto-0">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className={cn(align === "center" && "text-center mx-auto", "max-w-2xl", className)}>
      <div className="flex items-center gap-2 mb-4" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
        <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} aria-hidden />
        <span className="font-mono text-mono-label uppercase text-text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-display-md text-text">{title}</h2>
      {description && (
        <p className="mt-4 text-body-lg text-text-muted">{description}</p>
      )}
    </div>
  );
}
