import { SignalDivider } from "@/components/ui/signal-divider";

/**
 * The one place the Signal Divider is guaranteed to appear: the moment
 * the page itself pivots from engineering work to web design work. The
 * trace line is the transition, not decoration between arbitrary sections.
 */
export function EngineeringToWebPivot() {
  return (
    <div className="relative border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-center gap-4 mb-3">
          <span className="font-mono text-mono-label uppercase text-signal">Engineering</span>
          <span className="font-mono text-mono-label text-text-muted">→</span>
          <span className="font-mono text-mono-label uppercase text-trace">Web design</span>
        </div>
        <SignalDivider />
      </div>
    </div>
  );
}
