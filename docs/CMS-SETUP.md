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

`tina/config.ts` already defines the editor schema. To turn it on:

1. **Install Tina:**
   ```bash
   npm install tinacms @tinacms/cli
   ```
2. **Create a Tina Cloud project** at https://app.tina.io — connect this GitHub
   repo. It gives you a **Client ID** and you generate a **Token**.
3. **Add env vars** in Vercel (Project → Settings → Environment Variables) and
   in a local `.env`:
   ```
   TINA_CLIENT_ID=...
   TINA_TOKEN=...
   ```
4. **Local editing:**
   ```bash
   npx tinacms dev -c "astro dev"
   ```
   then open http://localhost:4321/admin
5. **Production editing:** change the Vercel **build command** to
   `tinacms build && astro build` (keep output `dist`). Then edit at
   `https://<your-site>/admin` — changes commit back to GitHub and redeploy.

Until step 5 is done, the live build stays plain `astro build`, so nothing
breaks before Tina is configured.
