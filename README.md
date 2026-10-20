# OpenShuttle website

Source of [openshuttle.app](https://openshuttle.app), the showcase site of
[OpenShuttle](https://github.com/OpenShuttle/openshuttle-app), the free and
offline badminton club tournament app.

Static site built with [Astro](https://astro.build), hosted on Cloudflare Pages.
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

Bulk Redirects run before Pages; `public/_redirects` only sends these paths to
the latest GitHub release page while the list does not exist yet.

## Deploy (Cloudflare Pages)

Cloudflare Pages builds and deploys from GitHub: every push to `main` goes to
production, every pull request gets a preview URL. GitHub Actions
(`.github/workflows/ci.yml`) only checks that the site builds.

One-time setup, in Cloudflare **Workers & Pages → Create → Pages → Connect to Git**:

| Setting | Value |
| --- | --- |
| Repository | `OpenShuttle/website` |
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variable | `NODE_VERSION` = `24` |

Then **Custom domains**: add `openshuttle.app` (the zone is on the same
Cloudflare account; HTTPS is required for `.app` and is automatic), and
optionally `www.openshuttle.app` redirected to the apex with a redirect rule.

Analytics: Cloudflare Web Analytics (no cookies) can be turned on in the Pages
project (**Metrics → Web Analytics**), or with the snippet left commented in
`src/layouts/Base.astro`. Update the privacy page if anything else is added.

## Open Graph images

`public/og/openshuttle-fr.png` and `-en.png` were rendered from the logo, the
headline and the control desk screenshot with a headless browser at 1200×630.
Regenerate them when the headline or the screenshot changes.

## To complete

- `src/pages/mentions-legales.astro` and `src/pages/en/legal-notice.astro`:
  publisher identity and contact (`[À COMPLÉTER]` / `[TO BE COMPLETED]`).
- Code signing policy: update once SignPath Foundation signing is active.

## Licence

- Code: [GNU AGPL-3.0-or-later](LICENSE), like the app.
- Content (texts, screenshots, images): [CC BY 4.0](LICENSE-CONTENT).
- The OpenShuttle name and logo are not covered by these licences.

Contributions: see the app's
[CONTRIBUTING.md](https://github.com/OpenShuttle/openshuttle-app/blob/main/CONTRIBUTING.md).
Commits follow Conventional Commits and are signed off (`git commit -s`).
