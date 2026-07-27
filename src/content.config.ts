import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Project "features": one MDX file per project. The frontmatter drives the
// index + detail header; the MDX body is the long-form write-up.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    status: z.string(),
    order: z.number().default(0),
    summary: z.string(),
    dek: z.string().optional(), // italic subtitle under the title
    date: z.string().optional(), // e.g. "March 2026"
    heroCaption: z.string().optional(), // caption under the hero figure
    tags: z.array(z.string()).default([]),
    // media/paths live under /public (CMS-friendly); optional for now
    cover: z.string().optional(),
    pdf: z.string().optional(),
    github: z.string().optional(), // link to the project's repo
    siteLink: z
      .object({ label: z.string(), href: z.string() })
      .optional(), // external product/site link shown in the byline
    demo: z.enum(['euterria']).optional(), // interactive demo rendered above the article
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

// Personal "fun stuff": one MDX file per project, shown as a pinup-board
// collage on /personal/ and opened as a stand-alone feature (no sidebar index).
const personal = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/personal' }),
  schema: z.object({
    title: z.string(),
    kind: z.string(),
    status: z.string(),
    order: z.number().default(0),
    summary: z.string(), // brief blurb shown on the corkboard card
    dek: z.string().optional(), // italic subtitle under the title
    tint: z.number().default(210), // base hue for the placeholder cover gradient
    cover: z.string().optional(), // real title image; falls back to a gradient
    heroCaption: z.string().optional(),
    video: z.string().optional(), // YouTube id, embedded above the article
    pdf: z.string().optional(),
    github: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { projects, personal };
