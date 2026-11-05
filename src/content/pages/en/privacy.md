---
page: privacy
title: "Privacy: OpenShuttle collects no data"
description: "The OpenShuttle app collects and sends no data. The openshuttle.app website uses no cookies and measures its audience without personal tracking."
heading: "Privacy"
lead: "Your tournaments and your players’ names never leave your computer."
updated: 2026-10-20
---

## The OpenShuttle app

- **No data collected.** OpenShuttle runs fully offline. It sends no usage statistics or crash reports, and your tournaments never leave your computer. Its only network connection is the check for a new version described below, which you can turn off.
- **Your data stays with you.** Tournaments (entrants, clubs, scores, history) are saved in `.openshuttle` files on your computer, with backup copies in the same place. Settings, presets and the club list live in a local app file.
- **You are in charge.** As the organizer, you are the one handling players’ names: keep the files safe and delete them when you no longer need them. CSV exports and archives are only created when you ask, where you choose.

## Checking for a new version

At startup, OpenShuttle checks whether a newer version exists, to tell you so on the home screen with a link to the [Download](/en/download/) page.

- **What is sent.** A single request, in the background, to GitHub (`api.github.com`), which hosts OpenShuttle's code and releases. It asks for the list of published releases; OpenShuttle only reads their version numbers.
- **What GitHub receives.** As with any website visit, your computer's IP address, the time of the request and the software's name with its version number (`OpenShuttle/1.4.0`, for example), under the [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). No cookies, no identifier, no tournament data.
- **What OpenShuttle does with it.** Nothing is downloaded or installed, and nothing is kept: the app only shows that a new version exists. Without an internet connection, nothing happens and everything works as usual.
- **How to turn it off.** It is on by default. In **Settings → Updates**, set **Look for a new version at startup** to **No**. The **Check now** button runs the check on demand.

## The openshuttle.app website

- **No cookies**, no accounts, no forms, no ads.
- **Hosting.** The site is served by Cloudflare Workers. Like any host, Cloudflare processes technical connection data (IP address, browser, requested page) to deliver the pages and protect the site, under its [privacy policy](https://www.cloudflare.com/privacypolicy/).
- **Audience measurement.** When enabled, audience measurement uses Cloudflare Web Analytics, with no cookies and no browser fingerprinting: it counts visits in aggregate, without following people across sites.
- **Downloads.** Download links redirect to files published on GitHub, covered by the [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- Fonts are hosted on the site itself: no request to Google Fonts or any other third party.

## Your rights

The site keeps no personal data about you, so there is nothing to access or delete on our side. For any question, write to [contact@openshuttle.app](mailto:contact@openshuttle.app) or open an issue on [GitHub](https://github.com/OpenShuttle/openshuttle-app/issues). See also the [legal notice](/en/legal-notice/).
