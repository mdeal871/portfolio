# Mason Deal — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Project structure

- `app/` — routes, metadata, and global styles
- `components/` — layout, page sections, motion helpers, and shared UI
- `lib/` — project data and utilities
- `public/images/` — grouped into `about`, `brand`, `projects`, and `websites`
- `public/documents/` — the current combined résumé/portfolio and downloadable project reports
- `docs/` — design and refinement notes
- `scripts/` — source and asset validation

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Run `npm run audit` before deployment to verify local asset references and key content checks.

## Before you deploy

Search the repo for `masondeal.dev` and replace it with your real domain
once you have one — it's used in three places for SEO (canonical URLs,
sitemap, robots.txt):

- `app/layout.tsx` (`SITE_URL`)
- `app/sitemap.ts` (`SITE_URL`)
- `app/robots.ts` (`SITE_URL`)

If you don't have a domain yet, leave them — nothing breaks, the URLs will
just point at a placeholder until you update them.

## Deploy to Vercel

1. Push this folder to a new GitHub repo (see root-level instructions from
   Claude for the git commands).
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and
   import the repo.
3. Vercel auto-detects Next.js — no build settings to change. Click **Deploy**.
4. Once it's live, add a custom domain under Project → Settings → Domains
   if you have one, then update the three `SITE_URL` values above and push
   again.

No environment variables are required — the quote form on `/web-design`
works client-side via `mailto:` out of the box. If you later wire it to
Formspree, Resend, or an API route, that's where you'd add an API key as
an env var in Vercel's dashboard instead of hardcoding it.
