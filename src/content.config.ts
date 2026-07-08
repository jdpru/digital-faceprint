import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
    tags: z.array(z.string()).default([]),
    // media/paths live under /public (CMS-friendly); optional for now
    cover: z.string().optional(),
    pdf: z.string().optional(),
    links: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
  }),
});

export const collections = { projects };
