# Mason Deal — Portfolio Site

Personal portfolio for **Mason Deal**, an NC State computer engineering senior focused on embedded systems, hardware/software integration, system validation, and consumer electronics. The site also presents freelance web-design work for small businesses.

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Site overview

| Route | Purpose |
| --- | --- |
| `/` | Landing page with featured engineering work, selected websites, an introduction, skills, and contact call-to-action |
| `/engineering` | TI internship projects, Lenovo-sponsored senior design, academic projects, experience, education, skills, leadership, and awards |
| `/web-design` | Client work, services, process, FAQs, and a quote form |
| `/about` | Engineering interests, background, hobbies, and working philosophy |
| `/contact` | Email, LinkedIn, GitHub, and downloadable résumé/project portfolio |

The engineering portfolio currently highlights:

- An embedded Linux battery-gauge driver developed at Texas Instruments
- An ESD-protected battery-gauge PCB designed and validated at Texas Instruments
- Automated liquid-cooling system testing for Lenovo-sponsored senior design
- An MSP430 autonomous and WiFi-controlled vehicle
- A breadboarded LED road-sign state machine
- Three additional Verilog projects with downloadable reports

## Features

- Responsive layouts and mobile navigation
- Light and dark themes with saved user preference
- Motion with reduced-motion support
- Route-specific metadata, Open Graph data, sitemap, and robots configuration
- Local images and downloadable PDF project reports
- Accessible skip link, semantic page structure, keyboard-friendly navigation, and descriptive image text
- Source audit that checks local asset paths, the downloadable PDF, disabled testimonials, and stale portfolio copy
- Client-side web-design quote form that opens a prefilled email draft

## Technology

- [Next.js](https://nextjs.org/) 14 with the App Router
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Project structure

```text
portfolio-main/
├── app/                         # Routes, metadata, global styles, sitemap, and robots
│   ├── engineering/
│   ├── web-design/
│   ├── about/
│   └── contact/
├── components/
│   ├── layout/                  # Navbar and footer
│   ├── motion/                  # Motion provider and shared variants
│   ├── sections/                # Page-specific content sections
│   └── ui/                      # Reusable cards, buttons, timelines, and visual elements
├── lib/
│   ├── engineering-projects.ts  # Engineering project content and report links
│   ├── fonts.ts                 # Local font configuration
│   └── utils.ts                 # Shared class-name utility
├── public/
│   ├── documents/
│   │   ├── mason-deal-resume-and-portfolio.pdf
│   │   └── project-reports/
│   └── images/
│       ├── about/
│       ├── brand/
│       ├── projects/
│       └── websites/
├── docs/                        # Design-system and refinement notes
├── scripts/audit-source.cjs     # Content and asset validation
└── tailwind.config.ts           # Design tokens and Tailwind theme
```

## Getting started

Use a supported Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For an exact dependency install in CI or from the committed lockfile, use `npm ci` instead of `npm install`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs the Next.js lint command |
| `npm run audit` | Verifies local assets and selected portfolio-content requirements |

Before deploying a content update, run:

```bash
npm run audit
npm run build
```

## Updating the portfolio

### Engineering projects

Edit `lib/engineering-projects.ts`. The `engineeringProjects` collection powers the main case studies, while `additionalVerilogProjects` powers the compact report cards.

Place project images in `public/images/projects/` and project reports in `public/documents/project-reports/`. Reference public files from the site root—for example:

```ts
image: "/images/projects/example.png"
reportHref: "/documents/project-reports/example-report.pdf"
```

### Résumé and project portfolio

Replace `public/documents/mason-deal-resume-and-portfolio.pdf` while keeping the filename unchanged. This preserves every existing download link.

### Web-design projects

Update `components/sections/web-design/recent-projects.tsx` and store preview images in `public/images/websites/`.

### Personal and experience content

- Homepage sections: `components/sections/`
- Engineering experience, education, leadership, and skills: `components/sections/engineering/`
- About page: `components/sections/about/`
- Contact links and downloads: `components/sections/contact/`
- Navigation and footer links: `components/layout/`

### Testimonials

The testimonials component remains in the source but is intentionally disabled in `app/page.tsx` until approved testimonials are available.

## Asset and confidentiality guidelines

Keep all site assets inside the appropriate `public/images/` or `public/documents/` subdirectory. The audit script verifies absolute local references beginning with `/images/` or `/documents/`.

The TI and Lenovo sections are written to respect proprietary and NDA-protected work:

- TI visuals are simplified or redacted, with proprietary details omitted.
- Lenovo imagery is public product context and is not presented as the student prototype.
- Do not add private schematics, source code, measurements, internal product names, or sponsor-confidential implementation details.

## SEO and site URL

The placeholder production URL is `https://masondeal.dev`. When the final domain is connected, update `SITE_URL` in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

The root layout contains the default title, description, keywords, Open Graph metadata, and Twitter card configuration. Each main route provides its own title and description.

## Deployment

The project is ready for Vercel and requires no environment variables in its current form.

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Allow Vercel to detect the Next.js framework and deploy with the default settings.
4. Connect the production domain.
5. Update the three `SITE_URL` constants listed above and redeploy.

The quote form uses `mailto:` in the browser; it does not submit data to a server. If it is later replaced with an API route or form provider, keep credentials in deployment environment variables rather than in source control.

## Design documentation

- `docs/design-system.md` documents visual direction, typography, color, spacing, and component patterns.
- `docs/refinement-notes.md` records the latest content and interface refinements.

## Privacy

This repository contains a public-facing résumé, contact information, and personal portfolio content. Review the contents of `public/documents/` and all contact components before making a fork or repository public.
