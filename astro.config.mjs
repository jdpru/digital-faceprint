import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://jdpruett.xyz',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/projects/': '/projects/euterria/',
  },
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: false },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
