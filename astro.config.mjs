// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { appendFile } from 'node:fs/promises';
import { alternatesFor, routes } from './src/i18n/routes.ts';

export const site = 'https://openshuttle.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
  // Keep line breaks between text and links in the page sources as spaces.
  compressHTML: false,
  // The stylesheet is small (~3 KB gzipped): inline it so it never blocks rendering.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    {
      // Each HTML page announces its Markdown version in a Link header too,
      // like its <link rel="alternate" type="text/markdown"> (Workers _headers).
      name: 'markdown-link-headers',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          const paths = Object.values(routes).flatMap((r) => [r.fr, r.en]);
          const rules = paths.map((p) => `${p}\n  Link: <${p}index.md>; rel="alternate"; type="text/markdown"\n`);
          await appendFile(new URL('_headers', dir), `\n# Markdown version of each page (generated)\n${rules.join('\n')}`);
        },
      },
    },
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const links = alternatesFor(path);
        if (links) {
          item.links = links.map(({ lang, path: href }) => ({ lang, url: new URL(href, site).href }));
        }
        return item;
      },
    }),
  ],
});
