import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
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
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
