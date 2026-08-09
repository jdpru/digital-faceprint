import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://jdpruett.xyz',
  // Dev-server guardrail only: this has NO effect on build output (verified by
  // diffing a build with and without it). The production 308 comes from
  // "trailingSlash": true in vercel.json. Both are kept on purpose — this one
  // makes `npm run dev` 404 on a slashless URL, so a missing trailing slash in
  // a new link surfaces locally instead of becoming a redirect in production.
  trailingSlash: 'always',
  integrations: [
    mdx(),
    // /reading/ is noindex while it is a stub; keep it out of the sitemap too.
    sitemap({ filter: (page) => page !== 'https://jdpruett.xyz/reading/' }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: false },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
