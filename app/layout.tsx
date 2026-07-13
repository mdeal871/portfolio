import type { Metadata, Viewport } from "next";
import { spaceGrotesk, inter, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion/motion-provider";
import "./globals.css";

const SITE_URL = "https://masondeal.dev"; // update once the domain is live

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mason Deal — Computer Engineer & Web Developer",
    template: "%s — Mason Deal",
  },
  description:
    "Computer engineering senior at NC State building embedded systems by day and premium websites for small businesses on the side.",
  keywords: [
    "Mason Deal",
    "computer engineer",
    "embedded systems",
    "web design",
    "NC State",
    "Texas Instruments",
  ],
  authors: [{ name: "Mason Deal" }],
  openGraph: {
    type: "website",
    title: "Mason Deal — Computer Engineer & Web Developer",
    description:
      "Computer engineering senior at NC State building embedded systems by day and premium websites for small businesses on the side.",
    siteName: "Mason Deal",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mason Deal — Computer Engineer & Web Developer",
    description:
      "Computer engineering senior at NC State building embedded systems by day and premium websites for small businesses on the side.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F14" },
  ],
};

// Inline script avoids a light-mode flash on load by applying the saved
// theme before React hydrates.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-body-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="pt-16">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
