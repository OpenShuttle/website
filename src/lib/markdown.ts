// Markdown versions of the pages, for AI assistants and agents: built from the
// same sources as the HTML pages (data files and content collections), without
// navigation or footer. Served at <page path>index.md and listed in llms.txt.
import { getCollection, getEntry } from 'astro:content';
import { download } from '../data/download';
import { faq, type FaqItem } from '../data/faq';
import { home } from '../data/home';
import { faqPage, guidePage } from '../data/pages';
import { author, downloadUrl, github, routes, type Locale, type RouteKey } from '../i18n/routes';

export const siteUrl = 'https://openshuttle.app';

/** URL path of the Markdown version of a page path (`/guide/` → `/guide/index.md`). */
export const markdownPath = (path: string) => `${path}index.md`;

/** French typography puts a space before a colon, English does not. */
const colon = (locale: Locale) => (locale === 'fr' ? ' :' : ':');

const link = (text: string, href: string) => `[${text}](${href})`;

const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n');

const numbered = (items: readonly string[]) => items.map((item, i) => `${i + 1}. ${htmlToMarkdown(item)}`).join('\n');

/** Turns the small HTML used in the copy (p, a, strong, code) into Markdown. */
export function htmlToMarkdown(html: string): string {
  return html
    .replace(/<a href="([^"]*)">(.*?)<\/a>/g, '[$2]($1)')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .replace(/<\/p>\s*<p>/g, '\n\n')
    .replace(/<\/?p>/g, '')
    .replace(/&amp;/g, '&')
    .trim();
}

/** Makes site-relative links absolute, so the text stands on its own. */
export const absolute = (md: string) => md.replace(/\]\(\//g, `](${siteUrl}/`);

function document(locale: Locale, key: RouteKey, title: string, description: string, body: string) {
  const other: Locale = locale === 'fr' ? 'en' : 'fr';
  const c = colon(locale);
  const meta =
    locale === 'fr'
      ? `Page web${c} ${siteUrl}${routes[key].fr} · English version${c} ${siteUrl}${markdownPath(routes[key].en)}`
      : `Web page${c} ${siteUrl}${routes[key].en} · Version française${c} ${siteUrl}${markdownPath(routes[key][other])}`;
  return absolute(`# ${title}\n\n> ${description}\n\n${meta}\n\n${body.trim()}\n`);
}

export function faqMarkdown(items: FaqItem[], level = '##') {
  return items.map((item) => `${level} ${item.question}\n\n${htmlToMarkdown(item.answer)}`).join('\n\n');
}

function homeMarkdown(locale: Locale) {
  const c = home[locale];
  const k = colon(locale);
  const credit = locale === 'fr' ? 'Créé et maintenu par' : 'Created and maintained by';
  return document(
    locale,
    'home',
    c.title,
    c.description,
    `**${c.h1}**

${c.lead}

${c.pill}. ${link(c.ctaDownloadShort, routes.download[locale])} · ${link(c.ctaReadGuide, routes.guide[locale])}

## ${c.highlightsLabel}

${list(c.highlights.map((h) => `**${h.title}**${k} ${h.text}`))}

## ${c.featuresH2}

${c.featuresLead}

${c.steps.map((s) => `### ${s.title} (${s.label.replace(/^\d+ · /, '').toLowerCase()})\n\n${list(s.items)}`).join('\n\n')}

## ${c.scheduleH2}

${c.scheduleText}

${list(c.scheduleChecks)}

## ${c.displayH2}

${c.displayText}

## ${c.eventsH2}

${list(c.events.map((e) => `**${e.title}** ${e.text}`))}

## ${c.dataTitle}

${c.dataText}

## ${c.openTitle}

${c.openText} ${link('GitHub', github.repo)}${c.openText2} ${credit} ${author.name}.

## ${c.faqH2}

${faqMarkdown(faq[locale].filter((item) => item.home), '###')}

${link(c.faqMore, markdownPath(routes.faq[locale]))}`,
  );
}

function downloadMarkdown(locale: Locale) {
  const c = download[locale];
  const k = colon(locale);
  const dl = (platform: Parameters<typeof downloadUrl>[1]) => downloadUrl(locale, platform);
  return document(
    locale,
    'download',
    c.title,
    c.description,
    `${c.lead} ${link(c.releaseNotes, github.releases)}.

## Windows

${list([
  `**${c.windows.installer}** (${c.recommended.toLowerCase()})${k} ${c.windows.installerText} ${link(c.windows.installerBtn, dl('windows'))}`,
  `**${c.windows.portable}**${k} ${c.windows.portableText} ${link(c.windows.portableBtn, dl('windows-portable'))}`,
])}

## macOS

${list([`**${c.mac.title}**${k} ${c.mac.text} ${link(c.mac.btn, dl('macos'))}`])}

## Linux

${list([
  `**${c.linux.deb}**${k} ${c.linux.debText} ${link(c.linux.debBtn, dl('linux-deb'))}`,
  `**${c.linux.tar}**${k} ${c.linux.tarText} ${link(c.linux.tarBtn, dl('linux-tar'))}`,
])}

${c.integrity} ${link(c.checksums, dl('checksums'))} · ${c.source} ${link('GitHub', github.repo)}

${c.signingIntro} Free code signing provided by ${link('SignPath.io', 'https://about.signpath.io/')}, certificate by ${link('SignPath Foundation', 'https://signpath.org/')}. ${link(c.signingPolicy, routes.signing[locale])}

## ${c.firstH2}

${c.firstText}

### Windows

${numbered(c.firstWindows)}

### macOS

${numbered(c.firstMac)}

## ${c.nextTitle}

${c.nextText1} ${link(c.nextLink, routes.guide[locale])}${c.nextText2}

## ${c.updatesTitle}

${c.updatesText}

## ${c.problemTitle}

${c.problemText1} ${link('GitHub', github.issues)}${c.problemText2}`,
  );
}

/** The guide's steps of a language, in order. */
export async function guideSteps(locale: Locale) {
  const steps = await getCollection('guide', (entry) => entry.id.startsWith(`${locale}/`));
  return steps.sort((a, b) => a.data.step - b.data.step);
}

/** Every step of the guide as a section (step bodies have no headings of their own). */
export async function guideMarkdown(locale: Locale, level = '##') {
  const prefix = locale === 'fr' ? 'Étape' : 'Step';
  const steps = await guideSteps(locale);
  return steps
    .map((s) => `${level} ${prefix} ${s.data.step}${colon(locale)} ${s.data.title}\n\n${(s.body ?? '').trim()}`)
    .join('\n\n');
}

async function textPageMarkdown(locale: Locale, key: 'signing' | 'privacy' | 'legal' | 'changelog') {
  const slug = routes[key][locale].split('/').filter(Boolean).pop();
  const entry = await getEntry('pages', `${locale}/${slug}`);
  if (!entry) throw new Error(`Missing page ${locale}/${slug}`);
  const { heading, description, lead } = entry.data;
  return document(locale, key, heading, description, `${lead ? `${lead}\n\n` : ''}${entry.body ?? ''}`);
}

/** Markdown version of a page. */
export async function pageMarkdown(key: RouteKey, locale: Locale): Promise<string> {
  switch (key) {
    case 'home':
      return homeMarkdown(locale);
    case 'download':
      return downloadMarkdown(locale);
    case 'guide': {
      const c = guidePage[locale];
      return document(locale, 'guide', c.h1, c.description, `${c.lead}\n\n${await guideMarkdown(locale)}`);
    }
    case 'faq': {
      const c = faqPage[locale];
      return document(locale, 'faq', c.h1, c.description, `${c.lead}\n\n${faqMarkdown(faq[locale])}`);
    }
    default:
      return textPageMarkdown(locale, key);
  }
}
