// Every page of the site, in both languages. French is the reference language
// and lives at the root; English lives under /en/ with translated slugs.
export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const routes = {
  home: { fr: '/', en: '/en/' },
  download: { fr: '/telecharger/', en: '/en/download/' },
  guide: { fr: '/guide/', en: '/en/guide/' },
  faq: { fr: '/faq/', en: '/en/faq/' },
  signing: { fr: '/politique-de-signature/', en: '/en/code-signing-policy/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

// Download links are Cloudflare Bulk Redirects to the latest GitHub release,
// updated by the app's release workflow. Never link to a versioned file.
export const platforms = ['windows', 'windows-portable', 'macos', 'linux-deb', 'linux-tar', 'checksums'] as const;
export type Platform = (typeof platforms)[number];
const downloadBase: Record<Locale, string> = { fr: '/telecharger/', en: '/download/' };
export const downloadUrl = (locale: Locale, platform: Platform) => `${downloadBase[locale]}${platform}`;

export const github = {
  repo: 'https://github.com/OpenShuttle/openshuttle-app',
  releases: 'https://github.com/OpenShuttle/openshuttle-app/releases',
  issues: 'https://github.com/OpenShuttle/openshuttle-app/issues',
  contributing: 'https://github.com/OpenShuttle/openshuttle-app/blob/main/CONTRIBUTING.md',
  website: 'https://github.com/OpenShuttle/website',
} as const;

// Author credit (authorship, not the legal publisher: the legal notice stays anonymous).
export const author = {
  name: 'Thomas Da Rocha',
  url: 'https://github.com/OpenShuttle',
} as const;

export const contact = {
  /** Forwarded by Cloudflare Email Routing; never publish a personal address. */
  email: 'contact@openshuttle.app',
} as const;

/** hreflang alternates of a page path (fr, en, x-default), or undefined for an unknown path. */
export function alternatesFor(path: string) {
  const entry = Object.values(routes).find((r) => r.fr === path || r.en === path);
  if (!entry) return undefined;
  return [
    { lang: 'fr', path: entry.fr },
    { lang: 'en', path: entry.en },
    { lang: 'x-default', path: entry.fr },
  ];
}
