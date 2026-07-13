"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/engineering", label: "Engineering" },
  { href: "/web-design", label: "Web Design" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-6 w-6 items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt=""
              width={24}
              height={24}
              className="transition-transform duration-base group-hover:scale-110"
            />
          </span>
          <span className="font-mono text-mono-label uppercase tracking-widest text-text">
            Mason Deal
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "text-body-sm transition-colors duration-fast underline-offset-4 hover:underline",
                  pathname === link.href ? "text-text" : "text-text-muted hover:text-text"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LinkButton href="/contact" size="sm" className="hidden sm:inline-flex">
            Get in touch
          </LinkButton>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-text md:hidden"
          >
            {open ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {LINKS.map((link) => (
                <li key={link.href} className="border-b border-border/60 last:border-0">
                  <a
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "block py-4 font-display text-heading-sm",
                      pathname === link.href ? "text-signal" : "text-text"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
