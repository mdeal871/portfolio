# Mason Deal — Portfolio Design System

## Concept

Mason works at the seam between hardware and software — soldering irons and
oscilloscopes on one side, embedded C and PCB layout on the other — and he
also ships client websites on the side (Superior Concrete, TLowe Outfitters).
The system is built around that seam: **signal**. A signal is precise, it
travels a defined path, and it either resolves cleanly or it doesn't. That's
the visual thesis — not "generic dev portfolio," but *instrumentation panel
for an engineer who also happens to design well.*

The signature element is the **Signal Divider**: a hand-drawn PCB-trace line
(right-angle routing, like a real board trace) that draws itself in on
scroll instead of a plain `<hr>`. It reappears in miniature as a hover
affordance on nav links and the logo. It is the one place the design allows
itself a flourish — everything else stays quiet and precise.

Two accent colors stand in for the two LEDs on every board Mason has ever
soldered: a **power LED** (blue, pulled directly from his existing logo
mark) for primary actions and structure, and an **activity LED** (amber)
reserved for status, highlights, and the freelance/"available for work"
indicator. They are never used together in the same element — one signals
"this is the system," the other signals "this is happening right now."

## Color

Colors are stored as CSS variables so light/dark is a data-attribute swap,
not a duplicated component tree.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F7F8FA` | `#0B0F14` | page background |
| `--surface` | `#FFFFFF` | `#10151C` | cards, nav, panels |
| `--surface-2` | `#EFF1F5` | `#161C25` | nested/hover surfaces |
| `--border` | `#E1E4EA` | `#212834` | hairlines, card borders |
| `--text` | `#10151C` | `#E7ECF3` | primary text |
| `--text-muted` | `#5B6472` | `#8B95A5` | secondary text |
| `--signal` (power) | `#2F6FE0` | `#5B9EF8` | primary accent — CTAs, links, focus |
| `--signal-strong` | `#1E56C4` | `#8CBBFB` | hover/active state of signal |
| `--trace` (activity) | `#D9661F` | `#FFA357` | status dots, highlights, tags |

Brand mark blue (`#60B0F4`, from `logo.svg`) sits directly between the light
and dark `--signal` values — the palette was built outward from the existing
mark rather than picked independently.

Never use pure `#000` or pure `#FFF`. Never mix `--signal` and `--trace` as
a gradient — each is a discrete indicator, not a decorative pair.

## Typography

Three roles, not two, because the content includes real data (GPA, dates,
metrics, pin-style labels) that reads better in a technical face.

- **Display — Space Grotesk** (600/700): hero headlines, big numerals,
  section titles. Geometric with a slightly mechanical personality — used
  large, tight tracking, never for body copy.
- **Body/UI — Inter** (400/500/600): paragraphs, nav, buttons, form
  labels. Neutral and highly legible at small sizes.
- **Mono — JetBrains Mono** (400/500): eyebrows, tags, metadata, code
  snippets, the "LED status" labels. Always uppercase + wide tracking when
  used as a label.

### Scale (fluid, mobile-first via `clamp()`)

| Token | Size | Face | Weight |
|---|---|---|---|
| `display-xl` | `clamp(2.5rem, 5.5vw + 1rem, 5.25rem)` | Space Grotesk | 600 |
| `display-lg` | `clamp(2rem, 3.5vw + 1rem, 3.5rem)` | Space Grotesk | 600 |
| `display-md` | `clamp(1.625rem, 2vw + 1rem, 2.375rem)` | Space Grotesk | 600 |
| `heading-lg` | `1.75rem / 1.3` | Space Grotesk | 500 |
| `heading-md` | `1.375rem / 1.35` | Space Grotesk | 500 |
| `body-lg` | `1.125rem / 1.7` | Inter | 400 |
| `body` | `1rem / 1.7` | Inter | 400 |
| `body-sm` | `0.875rem / 1.6` | Inter | 400 |
| `mono-label` | `0.75rem / 1` | JetBrains Mono | 500, uppercase, tracking `0.08em` |
| `mono-data` | `0.875rem / 1.4` | JetBrains Mono | 400 |

## Spacing

4px base unit. Use the scale, never arbitrary values:

`1=4px 2=8px 3=12px 4=16px 5=20px 6=24px 8=32px 10=40px 12=48px 16=64px 20=80px 24=96px 32=128px`

Section vertical padding: `py-24` mobile → `py-32`/`py-40` desktop.

## Radius

Small and deliberate — this is an instrument, not a bubble-app.

`xs=4px` (chips) · `sm=6px` (inputs, small buttons) · `md=10px` (buttons) ·
`lg=16px` (cards) · `xl=24px` (hero panels/images) · `full` (pills, dots,
avatar)

## Shadows

Light mode uses soft neutral shadows. Dark mode uses **glow**, not shadow —
light doesn't cast shadows on a dark instrument panel, it emits.

- `shadow-sm` — `0 1px 2px rgba(16,21,28,.06)`
- `shadow-md` — `0 8px 24px rgba(16,21,28,.08)`
- `glow-signal` — `0 0 0 1px rgba(91,158,248,.35), 0 8px 32px rgba(91,158,248,.18)`
- `glow-trace` — `0 0 0 1px rgba(255,163,87,.35), 0 8px 32px rgba(255,163,87,.18)`

Glows are reserved for hover/focus states on interactive elements only.

## Motion

- **Durations**: `fast=150ms` `base=250ms` `slow=400ms` `slower=600ms`
- **Easing**: `standard = cubic-bezier(.4,0,.2,1)`; `signal = cubic-bezier(.16,1,.3,1)`
  (a fast-out, gentle-settle curve — used for anything that should feel like
  a value settling after a step input)
- Scroll reveals: `fadeUp` (12px rise + opacity), staggered 60ms per child,
  triggered once via `whileInView`.
- The Signal Divider draws its path (`strokeDashoffset` 1 → 0) over 900ms
  with the `signal` easing when it enters the viewport.
- Hover: buttons scale `1 → 1.02` + glow fade-in over `fast`; cards translate
  `-4px` on Y + border color shifts to `--signal`.
- `prefers-reduced-motion: reduce` disables all transform-based motion;
  opacity-only fades remain.

## Breakpoints

Mobile-first. Custom `xs` added below Tailwind's default `sm` for small
phones.

`xs=400px  sm=640px  md=768px  lg=1024px  xl=1280px  2xl=1536px`

## Components (see /components)

- `Button` — primary (solid signal), secondary (outline), ghost (text +
  animated underline), icon. Sizes sm/md/lg.
- `Card` — base surface card; `ProjectCard` variant adds a category dot
  (blue = Engineering, amber = Web Design) so the dual audience (recruiters
  + freelance clients) can scan the work by type at a glance.
- `Badge` — mono-label pill, used for tags/stack chips.
- `SignalDivider` — the signature scroll-drawn trace line.
- `Navbar` — fixed, blurred glass surface, mono wordmark, rocker-style
  theme toggle.
- `Footer` — trace-grid background, live "available for freelance work"
  status dot, sitemap columns.

## File structure

```
app/
  layout.tsx
  globals.css
  page.tsx
components/
  ui/
    button.tsx
    card.tsx
    badge.tsx
    signal-divider.tsx
    theme-toggle.tsx
  layout/
    navbar.tsx
    footer.tsx
  motion/
    variants.ts
lib/
  fonts.ts
  utils.ts
tailwind.config.ts
```
