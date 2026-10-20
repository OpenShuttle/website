// llms-full.txt: the whole guide and FAQ, English first, then French.
import type { APIRoute } from 'astro';
import { absolute, faqMarkdown, guideMarkdown, siteUrl } from '../lib/markdown';
import { faq } from '../data/faq';
import { home } from '../data/home';
import { faqPage, guidePage } from '../data/pages';
import { routes, type Locale } from '../i18n/routes';

async function part(locale: Locale) {
  const h = home[locale];
  const g = guidePage[locale];
  const f = faqPage[locale];
  return `# ${h.title}

> ${h.description}

${h.lead}

## ${g.h1}

Source: ${siteUrl}${routes.guide[locale]}

${g.lead}

${await guideMarkdown(locale, '###')}

## ${f.h1}

Source: ${siteUrl}${routes.faq[locale]}

${faqMarkdown(faq[locale], '###')}`;
}

export const GET: APIRoute = async () => {
  const body = `${await part('en')}\n\n---\n\n${await part('fr')}\n`;
  return new Response(absolute(body), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
