// TinaCMS config — the browser editor that sits on top of the `projects`
// content collection. This file is not part of the Astro build; it powers the
// `/admin` editor once TinaCMS is installed and a Tina Cloud project exists.
// See docs/CMS-SETUP.md for the one-time setup steps.
import { defineConfig } from 'tinacms';

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || 'a9e24397-2072-4057-933a-4d0c418253fa', // from app.tina.io
  token: process.env.TINA_TOKEN || '', // from app.tina.io
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'uploads', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'project',
        label: 'Projects',
        path: 'src/content/projects',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'kind', label: 'Kind (e.g. fMRI · Intervention)', required: true },
          { type: 'string', name: 'status', label: 'Status', required: true },
          { type: 'number', name: 'order', label: 'Order (sorts the index)' },
          { type: 'string', name: 'summary', label: 'Summary', ui: { component: 'textarea' } },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'image', name: 'cover', label: 'Cover image' },
          { type: 'string', name: 'pdf', label: 'PDF (uploaded path or URL)' },
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            list: true,
            ui: { itemProps: (i) => ({ label: i?.label || 'Link' }) },
            fields: [
              { type: 'string', name: 'label', label: 'Label' },
              { type: 'string', name: 'href', label: 'URL' },
            ],
          },
          { type: 'rich-text', name: 'body', label: 'Write-up', isBody: true },
        ],
      },
    ],
  },
});
