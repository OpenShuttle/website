# OpenShuttle website

Source of [openshuttle.app](https://openshuttle.app), the showcase site of
[OpenShuttle](https://github.com/OpenShuttle/openshuttle-app), the free and
offline badminton club tournament app.

Static site built with [Astro](https://astro.build), hosted on Cloudflare Workers (static assets, no Worker script).
French is the reference language (at `/`), English lives under `/en/`.

## Run it

Node 24 (see `.nvmrc`).

```bash
npm ci
npm run dev        # http://localhost:4321 with hot reload
npm run build      # type check (astro check), then static build into dist/
npm run preview    # serve dist/ locally
```

## Layout

```
src/i18n/routes.ts        every page in both languages, download links, GitHub links
src/i18n/ui.ts            strings shared by header and footer
src/layouts/Base.astro    <head>: title, description, canonical, hreflang, Open Graph, JSON-LD
src/components/pages/     pages rendered in both languages (copy for fr and en side by side)
src/pages/                routes; legal pages are written per language
src/content/guide/<lang>/ the guide "a tournament in 10 steps", one Markdown file per step
src/data/faq.ts           FAQ (home page section, FAQ page and its FAQPage JSON-LD)
src/assets/               app screenshots and logo, optimized to AVIF/WebP at build
public/og/                Open Graph images (1200×630), one per language
public/_redirects         fallback for the download links (see below)
```

Adding a page: add it to `routes` in `src/i18n/routes.ts` (both languages), then
create both route files. The hreflang links and the sitemap alternates come from
`routes`.

Conventions: zero client JavaScript by default (the only script is the OS tabs
of the download page, a progressive enhancement), self-hosted fonts
(Fontsource), images through `astro:assets`, unique title and description per
page and language. The guide describes only what the app does: check it
against the app's `docs/specs/scope-v1.md` and its French and English UI labels.

## Download links

Download buttons point to `/telecharger/<platform>` (French) and
`/download/<platform>` (English), with platforms `windows`, `windows-portable`,
`macos`, `linux-deb`, `linux-tar`, `checksums`. These are Cloudflare Bulk
Redirects that the app's release workflow points to the latest release files
(see `docs/releasing.md` in the app repository). Never link to a versioned
GitHub file from the site.

Bulk Redirects run before the Worker; `public/_redirects` (read by Workers
static assets from `dist/`) only sends these paths to the latest GitHub release
page while the list does not exist yet.

## Deploy (Cloudflare Workers)

The site is a Cloudflare Worker with static assets only, configured in
`wrangler.jsonc`: it serves `dist/`, returns `dist/404.html` for unknown paths,
and applies `dist/_redirects`. Cloudflare builds and deploys from GitHub: every
push to `main` goes to production, other branches and pull requests get preview
URLs. GitHub Actions (`.github/workflows/ci.yml`) only checks that the site
builds.

Check a deployment locally without a Cloudflare login:

```bash
npm run build
npx wrangler deploy --dry-run
```

One-time setup, in Cloudflare **Workers & Pages → Create → Import a repository**
(pick `OpenShuttle/website`):

| Setting | Value |
| --- | --- |
| Project name | `openshuttle-website` (must match `name` in `wrangler.jsonc`) |
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler versions upload` (default, for preview builds) |
| Build variable | `NODE_VERSION` = `24`, if the build image does not pick up `.nvmrc` |

Then, on the Worker, **Settings → Domains & Routes → Add → Custom domain**:
`openshuttle.app` (the zone is on the same Cloudflare account; HTTPS is
required for `.app` and is automatic). Optionally add `www.openshuttle.app` and
redirect it to the apex with a redirect rule.

Analytics: Cloudflare Web Analytics (no cookies) can be turned on for the
`openshuttle.app` site in **Analytics & Logs → Web Analytics**, which injects
the beacon at the edge, or with the snippet left commented in
`src/layouts/Base.astro`. Update the privacy page if anything else is added.

## Open Graph images

`public/og/openshuttle-fr.png` and `-en.png` were rendered from the logo, the
headline and the control desk screenshot with a headless browser at 1200×630.
Regenerate them when the headline or the screenshot changes.

## To complete

- Contact address `contact@openshuttle.app` (`contact` in `src/i18n/routes.ts`):
  set up its forwarding in Cloudflare Email Routing.
- Code signing policy: update once SignPath Foundation signing is active.

## Licence

- Code: [GNU AGPL-3.0-or-later](LICENSE), like the app.
- Content (texts, screenshots, images): [CC BY 4.0](LICENSE-CONTENT).
- The OpenShuttle name and logo are not covered by these licences.

Contributions: see the app's
[CONTRIBUTING.md](https://github.com/OpenShuttle/openshuttle-app/blob/main/CONTRIBUTING.md).
Commits follow Conventional Commits and are signed off (`git commit -s`).
