import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://jdpruett.xyz',
  // Match Vercel, which serves every page at a trailing slash. Keeping dev and
  // production on one URL shape avoids two indexable URLs per page.
  trailingSlash: 'always',
  integrations: [
    mdx(),
    // /reading/ is noindex while it is a stub; keep it out of the sitemap too.
    sitemap({ filter: (page) => page !== 'https://jdpruett.xyz/reading/' }),
  ],
  // /projects/ redirects to the lowest-order project. It lives in vercel.json
  // so the platform serves a real 308 rather than a meta-refresh HTML page.
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: false },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
