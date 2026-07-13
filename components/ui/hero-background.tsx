/**
 * Purely CSS/SVG-driven — no canvas, no per-frame JS. Three looping
 * stroke-dashoffset traces plus one slow-drifting radial glow, all
 * transform/opacity based so they stay on the compositor thread.
 * Fully inert under prefers-reduced-motion (see app/globals.css).
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-trace-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="hero-glow absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-signal/20 blur-[100px]" />
      <div className="hero-glow-slow absolute top-1/3 left-[-15%] h-[420px] w-[420px] rounded-full bg-trace/10 blur-[110px]" />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.35]"
      >
        <path
          className="trace-line trace-line--a"
          d="M-100 620 H340 L400 560 H720 L780 500 H1100 L1160 440 H1700"
          fill="none"
          stroke="rgb(var(--signal))"
          strokeWidth="1.5"
        />
        <path
          className="trace-line trace-line--b"
          d="M-100 220 H260 L320 280 H600 L660 340 H980 L1040 400 H1700"
          fill="none"
          stroke="rgb(var(--trace))"
          strokeWidth="1.5"
        />
        <path
          className="trace-line trace-line--c"
          d="M-100 780 H500 L560 740 H900 L960 700 H1300 L1360 660 H1700"
          fill="none"
          stroke="rgb(var(--signal))"
          strokeWidth="1"
        />
      </svg>

      <style>{`
        .trace-line {
          stroke-dasharray: 6 14;
          animation: trace-flow 14s linear infinite;
        }
        .trace-line--b { animation-duration: 18s; animation-direction: reverse; }
        .trace-line--c { animation-duration: 22s; }
        @keyframes trace-flow {
          to { stroke-dashoffset: -400; }
        }
        .hero-glow { animation: drift 16s ease-in-out infinite; }
        .hero-glow-slow { animation: drift 22s ease-in-out infinite reverse; }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-24px, 24px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .trace-line, .hero-glow, .hero-glow-slow { animation: none; }
        }
      `}</style>
    </div>
  );
}
