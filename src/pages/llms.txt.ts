// llms.txt (https://llmstxt.org): what OpenShuttle is, and where to read more,
// pointing to the Markdown versions of the pages in both languages.
import type { APIRoute } from 'astro';
import { guideSteps, markdownPath, siteUrl } from '../lib/markdown';
import { github, routes, type Locale, type RouteKey } from '../i18n/routes';
import { home } from '../data/home';
import { download } from '../data/download';
import { faqPage, guidePage } from '../data/pages';
import { getEntry } from 'astro:content';

const md = (path: string) => `${siteUrl}${markdownPath(path)}`;

async function textPage(locale: Locale, key: 'signing' | 'privacy' | 'legal') {
  const slug = routes[key][locale].split('/').filter(Boolean).pop();
  const entry = await getEntry('pages', `${locale}/${slug}`);
  return { title: entry!.data.heading, description: entry!.data.description };
}

async function section(locale: Locale) {
  const anchor = locale === 'fr' ? 'etape' : 'step';
  const steps = await guideSteps(locale);
  const entries: [RouteKey, string, string][] = [
    ['home', home[locale].title, home[locale].description],
    ['download', download[locale].h1, download[locale].description],
    ['guide', guidePage[locale].h1, guidePage[locale].description],
    ['faq', faqPage[locale].h1, faqPage[locale].description],
  ];
  const lines = entries.map(([key, title, description]) => `- [${title}](${md(routes[key][locale])}): ${description}`);
  const stepLines = steps.map(
    (s) => `  - [${s.data.step}. ${s.data.title}](${siteUrl}${routes.guide[locale]}#${anchor}-${s.data.step}): ${s.data.summary}`,
  );
  lines.splice(3, 0, ...stepLines);
  const policies = await Promise.all((['signing', 'privacy', 'legal'] as const).map((key) => textPage(locale, key).then((p) => ({ key, ...p }))));
  return { lines, policies: policies.map((p) => `- [${p.title}](${md(routes[p.key][locale])}): ${p.description}`) };
}

export const GET: APIRoute = async () => {
  const fr = await section('fr');
  const en = await section('en');
  const body = `# OpenShuttle

> OpenShuttle is a free and open source (AGPL-3.0) desktop app to run non-sanctioned badminton club tournaments from start to finish, fully offline on one computer: entrants (CSV import), formats made of pools and brackets (consolation, full placement), check-in with bib numbers, draw with seeds, schedule, control desk with match calls and scores, a display screen for the hall, corrections with undo and history, and full standings with CSV export. It runs on Windows, macOS and Linux, in English and French, with no account, no cloud and no data collection.

The website is in French (reference language, at the root) and English (under /en/). Every page has a Markdown version at the same path followed by \`index.md\`. Download links (/telecharger/<platform> in French, /download/<platform> in English, platforms: windows, windows-portable, macos, linux-deb, linux-tar, checksums) always redirect to the latest release. The full guide and FAQ in both languages are in ${siteUrl}/llms-full.txt.

## English

${en.lines.join('\n')}

## Français

${fr.lines.join('\n')}

## Policies

${en.policies.join('\n')}
${fr.policies.join('\n')}

## Optional

- [Source code on GitHub](${github.repo}): the app, its functional specification (docs/specs/scope-v1.md) and its contribution guide.
- [Releases](${github.releases}): release notes and files of every version.
- [Website source code](${github.website})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
