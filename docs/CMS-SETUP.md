# Content & CMS

## How content works now (no accounts needed)

Project "features" live as MDX files in `src/content/projects/`. Each file:

```mdx
---
title: My Project
kind: fMRI · Intervention
status: Paper
order: 1
summary: One-line summary shown on the index + as the page description.
tags: [fMRI, Python]
cover: /uploads/my-cover.png   # optional; put the image in public/uploads/
pdf: /uploads/my-paper.pdf     # optional
links:
  - label: "PDF →"
    href: "https://…"
---

Your long-form write-up in **Markdown/MDX** goes here.
```

- Astro reads these via the `projects` content collection (`src/content.config.ts`).
- `/projects/` renders the master–detail index; `/projects/<filename>/` renders the full feature page with the prose theme.
- Images/PDFs go in `public/uploads/` and are referenced by path (`/uploads/...`).

So today you can add a feature by dropping an `.mdx` file (+ any image/PDF) into
the repo — via Typora/VS Code locally, or the GitHub web editor — and pushing.
Vercel rebuilds automatically.

## Adding the TinaCMS editor (the browser `/admin`)

`tina/config.ts` already defines the editor schema **and has the Tina Cloud
Client ID baked in** (`a9e24397-2072-4057-933a-4d0c418253fa`). To turn the
editor on:

1. **Install Tina (local):**
   ```bash
   npm install -D tinacms @tinacms/cli
   ```
2. **Edit locally:**
   ```bash
   npx tinacms dev -c "astro dev"
   ```
   then open http://localhost:4321/admin — this works against your local files,
   no token needed.
3. **For production editing** (`https://<your-site>/admin`), generate a
   **read-only token** in your Tina Cloud project and add it in Vercel
   (Project → Settings → Environment Variables):
   ```
   TINA_TOKEN=...            # required in prod
   TINA_CLIENT_ID=...        # optional; falls back to the value in tina/config.ts
   ```
   Then change the Vercel **build command** to `tinacms build && astro build`
   (keep output `dist`). Edits commit back to GitHub and redeploy.

**Not committed on purpose:** `tinacms`/`@tinacms/cli` are left out of
`package.json` and the Vercel build stays plain `astro build`, so the live site
keeps deploying safely until you finish step 3. Once you add the token + build
command, add the two packages to `devDependencies` so Vercel can run
`tinacms build`.
