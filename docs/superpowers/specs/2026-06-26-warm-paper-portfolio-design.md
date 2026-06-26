# Warm Paper Portfolio — Design Spec

**Date:** 2026-06-26
**Repo:** `digital-faceprint` (Astro 6, deployed on Vercel)
**Status:** Approved direction — content treated as accurate-but-draft

## Goal

Rebuild JD Pruett's personal site from the "Warm Paper" HTML mockup into a
properly structured Astro project. Keep the exact look and the signature
cursor-following portrait, but make the content data-driven so it's easy to
extend over time.

## Framework decision

**Astro** (already scaffolded). Not Gatsby (declining ecosystem) and not Next.js
(an app framework heavier than a content site needs). Astro ships zero JS by
default, has first-class content support, and deploys to Vercel with no adapter
for a static build.

## Aesthetic (from `portfolio.css`)

- **Palette:** cream paper (`#f5f2ec`), ink (`#1c1a17`), navy accent (`#1f3b66`)
- **Type:** Newsreader (serif body/headings) + IBM Plex Mono (labels/eyebrows),
  via Google Fonts
- Sticky translucent top bar; thin rules between sections; mono uppercase
  "eyebrow" labels

## Information architecture

**Single scrolling home page** (matches the mockup) **plus subpages** for depth.

### Home (`/`) — single scroll, sticky anchor nav
1. **Hero** — name, positioning lede, chips, and the **cursor-following pencil
   portrait** (the one signature interaction; uses real `sketch-portrait.png`)
2. **About** — mono sidebar (Based / Working on / Methods / Advisors) + prose
3. **Experience** — interactive résumé; click a role to expand details + tags
4. **Education** — degree strip
5. **Selected work** — 2-column card grid; shows a few items + "All projects &
   papers →" link to `/projects/`
6. **Writing** — featured clip card(s)
7. **Footer / Contact** — email, LinkedIn, CV, OSF

### Subpages (Warm Paper subpage styles already in `portfolio.css`)
- `/projects/` — full list of projects & papers (`.prow` rows)
- `/publications/` — formal publications list
- `/personal/` — personal prose + reading list

Subpages reuse the same data and shared layout/styles.

## Data model (`src/data/site.ts`)

Single source of truth, so adding content later = editing data:

- `site` — name, lede, location, "working on", methods, advisors, contact links
  (email, LinkedIn, GitHub, Twitter/X, OSF, CV path)
- `experience[]` — `{ years, role, org, place, description[], tags[] }`
- `education[]` — `{ degree, thesis, award?, school, gpa, year }`
- `work[]` — `{ kind, status, title, summary, links[] }` (projects & papers)
- `publications[]` — `{ title, venue, year, blurb }`
- `writing[]` — `{ outlet, title, by, href }`
- `personal[]`, `reading[]`

## Components (`src/components/`)

- `Layout.astro` — shared shell: fonts, global Warm Paper CSS, sticky top bar,
  footer. Accepts `title`/`description`.
- `Hero.astro` — text + portrait, includes the cursor script
- `Experience.astro` — expandable entries (small client script for toggle)
- `WorkGrid.astro` — selected-work cards
- Subpage-specific blocks as needed (`ProjectRows`, `ReadingList`)

Global Warm Paper CSS lives in one place (ported from `portfolio.css` /
`JD Pruett.html`) rather than duplicated per page.

## Interactions (client-side JS)

- **Portrait:** eyes track the cursor + subtle parallax; hover blooms a navy
  duotone and sketches a frame. Ported verbatim from the mockup; gated on
  `prefers-reduced-motion` where animated.
- **Experience entries:** click to expand/collapse (CSS grid-rows transition).

## Deferred / known gaps (draft status)

- **Images:** the mockup's `<image-slot>` drop-zones are removed for launch
  (text-only). No `image-slot.js` dependency. Layout stays clean without them.
- **Dead links:** CV PDF, several paper PDFs/GitHub links, and the contact email
  are placeholders in the mockup. They'll render as "soon"/disabled or be filled
  in by JD before go-live. Not blocking for first deploy.
- **Content wording:** accurate but draft — expect copy edits before final.

## Deployment

- Static Astro build (`astro build` → `dist/`). Vercel project already linked;
  it auto-detects Astro. Push to `main` → Vercel builds and deploys.

## Out of scope (for now)

- CMS / dynamic data, blog with Markdown collections (can be added later given
  Astro's content collections), analytics, dark mode.
