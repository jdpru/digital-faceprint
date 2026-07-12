# CLAUDE.md

Personal site for JD Pruett. Static Astro 6, no adapter, deployed on Vercel
(push to `main` → auto build/deploy). Canonical domain: `https://jdpruett.xyz`
(set as `site` in `astro.config.mjs`; sitemap/OG URLs derive from it).

## Commands

```bash
npm run dev              # dev server
npm run build            # static build → dist/
npm run check            # astro check (types) — run before pushing
npm run preview          # serve dist/
npm run optimize:images  # resize/re-encode images in public/ (sharp; idempotent)
```

There is no CI. `npm run build && npm run check` is the verification bar for
every change.

## Content model — two sources of truth

1. **`src/data/site.ts`** — everything on the home page and small pages: hero,
   about, experience rows, education, the three "Works" shelf cards
   (`explore`), Fun Stuff (`personalProjects`), reading list. Some arrays
   (`publications`, `writing`, `reading`) are staged for under-construction
   pages and intentionally have no importer yet — don't delete them as "dead."
2. **`src/content/projects/*.mdx`** — one MDX file per project feature.
   Frontmatter (schema in `src/content.config.ts`) drives the sidebar index and
   article header; the body is the write-up. `order` controls sidebar ordering;
   the lowest-order project (currently `euterria`, order 0) is the site's
   "first project."

`/projects/` is a config redirect (see `redirects` in `astro.config.mjs`) to
the first project — there is no projects index page. The header nav and the
home-page shelf card link straight to `/projects/euterria/`. If the first
project ever changes, update all three places.

## Non-obvious gotchas

- **Components rendered inside MDX must keep their styles in
  `src/styles/global.css`**, not in scoped `<style>` blocks — scoped styles
  don't reliably apply to MDX-embedded usage. This bit us once. Page-level
  `.astro` files may use scoped styles freely.
- **Project pages use `<ClientRouter />` (view transitions)**, so module
  scripts in components on those pages run **once per browser session**, not
  once per page view. Any script there must re-init on `astro:page-load` and
  tear down on `astro:before-swap` — see `EuterriaDemo.astro` (generation
  counter pattern). The home page does *not* use transitions; its scripts
  (e.g. `Hero.astro`) run on every full load.
- `Figure.astro` builds class names dynamically (`feature-fig--${align}`), so
  grep for the *fragment* before declaring a CSS class dead.
- The home nav links carry `data-astro-reload` on purpose: only the projects
  sidebar navigation is client-side.

## Images

- All media lives under `public/` and is referenced by absolute path
  (`/gallery/...`, `/covers/...`) from frontmatter and `site.ts`.
- Naming: full-size `name.jpg` + `name-thumb.jpg` for experience-row
  thumbnails. Covers are PNG plots in `public/covers/`.
- After adding any image, run `npm run optimize:images` — targets: portrait
  480px, gallery ≤1400px (q78), thumbs ≤510px, covers ≤1380px. It only
  rewrites a file when it gets ≥20% smaller, so re-running is safe.
- `Figure.astro` and the project cover read intrinsic dimensions at build time
  (`image-size`) to emit `width`/`height` and avoid layout shift — images must
  exist in `public/` at build time.

## Multi-agent workflow

Multiple agents often work this repo in parallel (Conductor workspaces).
- Partition by file: `site.ts`, `global.css`, and `Layout.astro` are the
  common collision points — one owner at a time.
- Don't squat on dev-server ports another workspace may be using (4330 has
  been used by a static-dist launch config); pass an explicit `--port` if you
  need a server.
- Leave `dist/` out of commits; never commit unless asked.
