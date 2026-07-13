import Link from "next/link";

const SITEMAP = [
  { label: "Engineering", href: "/engineering" },
  { label: "Web Design", href: "/web-design" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mason-deal/" },
  { label: "GitHub", href: "#" },
  { label: "Email", href: "mailto:mdeal871@gmail.com" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface bg-trace-grid">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.svg" alt="" width={20} height={20} />
              <span className="font-mono text-mono-label uppercase tracking-widest text-text">
                Mason Deal
              </span>
            </div>
            <p className="text-body-sm text-text-muted">
              Computer engineer building embedded systems by day, and
              websites for small businesses on the side.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-trace opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-trace" />
              </span>
              <span className="font-mono text-mono-label uppercase text-text-muted">
                Available for freelance web projects
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="font-mono text-mono-label uppercase text-text-muted mb-4">
                Sitemap
              </p>
              <ul className="space-y-2">
                {SITEMAP.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-body-sm text-text hover:text-signal transition-colors duration-fast"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-mono-label uppercase text-text-muted mb-4">
                Connect
              </p>
              <ul className="space-y-2">
                {SOCIAL.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-text hover:text-signal transition-colors duration-fast"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-mono-data text-text-muted">
            © {new Date().getFullYear()} Mason Deal. Raleigh, NC.
          </p>
          <p className="font-mono text-mono-data text-text-muted">
            Built with Next.js + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
