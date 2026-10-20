// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { alternatesFor } from './src/i18n/routes.ts';

export const site = 'https://openshuttle.app';

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
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
