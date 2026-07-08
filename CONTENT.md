# Editing this site

All content is plain files in this repo. Edit → commit → push, and Vercel
rebuilds and deploys automatically. No CMS, no dashboard.

## Project "features" — `src/content/projects/*.mdx`

Each project is **one `.mdx` file**. The filename is the URL slug, e.g.
`ontologies-of-cognitive-control.mdx` → `/projects/ontologies-of-cognitive-control/`.

A file is frontmatter (the block between `---`) plus a Markdown write-up below:

```mdx
---
title: Ontologies of Cognitive Control     # the page heading + index title
kind: fMRI · Intervention                   # small label (use " · " to separate)
status: Finalizing manuscript               # small muted label
order: 1                                     # sorts the index (lower shows first)
summary: One or two sentences — used on the index card and as the intro.
tags:                                        # optional chips
  - fMRI
  - Python
cover: /uploads/brain.jpg                    # optional photo at the top (see below)
pdf: /uploads/paper.pdf                      # optional PDF link
links:                                       # optional buttons at the bottom
  - label: GitHub →
    href: https://github.com/you/repo
---

Your write-up in **Markdown** — `##` headings, lists, links, quotes, images,
code blocks. This is the long-form "feature" shown on the project page.
```

Only `title`, `kind`, `status`, `summary` are required; the rest are optional.

### Add a new project
1. Copy any file in `src/content/projects/` to `src/content/projects/<slug>.mdx`.
2. Edit the frontmatter and the body.
3. Give it a unique `order` to position it in the list.
4. Commit and push.

### Photos & PDFs
Put the file in `public/uploads/`, then reference it with a path that starts at
`/uploads/…`:
- cover photo: `cover: /uploads/my-figure.png`
- PDF: `pdf: /uploads/my-paper.pdf`
- inside the write-up: `![caption](/uploads/chart.png)`

## Everything else — `src/data/site.ts`

The hero, pills, about block (based / occupied / methods / mentors), education,
the reading list, and the three "Works" cards live in `src/data/site.ts`.
Edit the values there.

## Preview locally (optional)

```bash
npm install
npm run dev        # http://localhost:4321
```

Use Node 20 or 22.
