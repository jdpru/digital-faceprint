import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jdpruett.xyz',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/projects/': '/projects/euterria/',
  },
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: false },
  },
});
