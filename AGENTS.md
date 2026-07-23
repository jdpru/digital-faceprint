# Digital Faceprint — Agent Guide

## Project at a glance

This is JD Pruett's personal site: a static **Astro 6** site, deployed by
Vercel from `main`. Its canonical domain is `https://jdpruett.xyz` (configured
as `site` in `astro.config.mjs`). Preserve the site's restrained, editorial character:
warm paper background, Newsreader serif display text, IBM Plex Mono metadata,
thin rules, and blue used as an accent—not a default decorative color.

## Where changes belong

- `src/data/site.ts` is the source of truth for home-page and small-page
  content. Do not delete staged arrays simply because no page imports them
  yet.
- `src/content/projects/*.mdx` contains one long-form feature per project.
  Its frontmatter is validated in `src/content.config.ts` and drives the
  project index and feature header.
- `src/components/` holds reusable Astro components; `src/components/feature/`
  holds MDX-facing feature building blocks.
- `src/styles/global.css` holds site-wide styles and styles needed by
  components rendered from MDX.
- `public/` contains all served media and PDFs. Reference assets with absolute
  paths such as `/gallery/euterria/map.jpg`.
- `archive/feature-link-snapshots/` is a repository-only backup of external
  sources used in project features. It is deliberately not part of the public
  site build.

## Commands

```sh
npm run dev                   # local Astro server
npm run build                 # static site to dist/
npm run preview               # serve the production build
npm run check                 # Astro type and diagnostic check
npm run optimize:images       # safe, in-place media optimization
npm run archive:feature-links # dated backup of project-feature external links
```

## Content and feature pages

- Write concrete, plain-spoken copy. Prefer specific evidence and clear verbs
  over generic praise, hype, or résumé inflation.
- Keep frontmatter valid and complete. `order` controls sidebar order; the
  lowest-order project is the default `/projects/` destination. If that
  project changes, update `astro.config.mjs`, `Layout.astro`, and the home
  page's `explore` link together. `/projects/` is a redirect, not an index page.
- Use existing MDX feature components (`Figure`, `FigurePair`, `Display`,
  `EndMark`) before inventing a one-off markup pattern.
- Preserve meaningful alt text and figure captions. Never use an image only as
  decoration when it communicates project context.
- Treat external links as live citations. For links added or changed in a
  project MDX file, run `npm run archive:feature-links` and commit the new
  dated snapshot and manifest update. Do not replace visitor-facing links with
  archive paths.

## Astro, TypeScript, and CSS

- Prefer Astro's server-rendered components and simple data flow. Add client
  JavaScript only for an interaction that cannot be expressed in HTML/CSS.
- Keep TypeScript strict; avoid `any` in new code. Narrow unknown values and
  model component props explicitly.
- Use semantic HTML first, then classes. Buttons must be real `<button>`
  elements; icon-only controls need an accessible name; visible focus states
  must remain intact.
- Keep normal component styles scoped. **Exception:** styles for components
  rendered inside MDX belong in `src/styles/global.css`, because scoped styles
  are unreliable in that path.
- Reuse design tokens and established class naming in `global.css`. Keep
  responsive rules and `prefers-reduced-motion` behavior in sync with any new
  animation or interaction.
- Project pages use `<ClientRouter />`. Module scripts there run once per
  browser session, not per navigation: initialize against the current DOM on
  `astro:page-load` and clean up timers, observers, and listeners on
  `astro:before-swap`. Follow `EuterriaDemo.astro` for the established pattern.
- The home page does not use view transitions, so its scripts run on each full
  page load. Preserve the intentional `data-astro-reload` attributes on home
  navigation links.
- Before removing a seemingly unused feature CSS class, check for dynamic class
  construction. For example, `Figure.astro` constructs
  `feature-fig--${align}`.

## Assets and generated files

- Add media under `public/` with descriptive, stable names. Gallery thumbnails
  use the `name-thumb.jpg` convention; cover plots are PNGs in `public/covers/`.
- After adding or changing images, run `npm run optimize:images`. It is
  idempotent and preserves quality safeguards for plots (portrait: 480px;
  gallery: ≤1400px; thumbnails: ≤510px; covers: ≤1380px).
- `Figure.astro` and project covers read local image dimensions at build time
  to prevent layout shift, so referenced media must exist in `public/` before
  building.
- Do not hand-edit generated archive responses. Preserve their bytes and
  metadata; `.gitattributes` intentionally exempts them from whitespace checks.
- Never commit `dist/`, `.astro/`, `node_modules/`, secrets, or local Vercel
  state.
- In parallel Conductor workspaces, avoid overlapping edits to common files
  (`src/data/site.ts`, `src/styles/global.css`, and `src/layouts/Layout.astro`)
  and use an explicit port if starting a dev server.

## Verification and Git hygiene

- Use Node `>=22.12.0` and `npm ci` for a clean dependency install.
- Before handing off a code or content change, run:

  ```sh
  npm run check
  npm run build
  ```

  There is no CI; these commands are the required local verification bar.

- Inspect `git diff --check` and `git status` before committing. Stage only
  files relevant to the requested change; preserve unrelated work in a dirty
  tree.
- Do not force-push, reset, rewrite history, or commit/push unless the user
  asks. For PR work, target `main` unless instructed otherwise.
