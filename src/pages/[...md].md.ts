// Markdown version of every page, next to it: /guide/ → /guide/index.md.
import type { APIRoute, GetStaticPaths } from 'astro';
import { pageMarkdown } from '../lib/markdown';
import { locales, routes, type Locale, type RouteKey } from '../i18n/routes';

export const getStaticPaths = (() =>
  (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    locales.map((locale) => ({
      params: { md: `${routes[key][locale].slice(1)}index` },
      props: { key, locale },
    })),
  )) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const { key, locale } = props as { key: RouteKey; locale: Locale };
  return new Response(await pageMarkdown(key, locale), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
