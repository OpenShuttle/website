---
page: signing
title: "OpenShuttle code signing policy"
description: "How OpenShuttle releases are built and signed: only from the public repository, by GitHub continuous integration, after a maintainer’s approval."
heading: "Code signing policy"
lead: "How the files you download are built, who approves them and what they do with your data."
updated: 2026-10-20
---

## Signing of Windows releases

Free code signing provided by [SignPath.io](https://about.signpath.io/), certificate by [SignPath Foundation](https://signpath.org/).

Signing of the Windows installer and portable version through the SignPath Foundation is being set up. Until it is active, Windows shows a warning on first launch: the [Download](/en/download/) page explains how to carry on.

The macOS app is ad-hoc signed, without an Apple developer certificate: macOS asks for a confirmation in System Settings → Privacy & Security. Linux packages are not signed.

## What gets signed

- Only files built from the source code of the [public OpenShuttle repository](https://github.com/OpenShuttle/openshuttle-app) are signed.
- They are built by GitHub Actions continuous integration (the repository’s `release-desktop.yml` workflow), from a release tag on a commit of the `main` branch. No file built on a personal computer is ever signed.
- The workflow checks the tag, builds the app for Windows, macOS and Linux, and publishes the release on GitHub with release notes and [SHA-256 checksums](/download/checksums).
- Bundled third-party dependencies (Go and npm libraries) come from their official registries, pinned to exact versions and updated through reviewed pull requests.

## Team roles

- **Committers and reviewers**: members of the [OpenShuttle organization on GitHub](https://github.com/OpenShuttle). Every change to `main` goes through a pull request and continuous integration. External contributions are reviewed by a member before merging.
- **Approvers**: the project maintainers, currently Thomas Da Rocha. Every signing request for a release is approved manually by an approver.

Team members use two-factor authentication on GitHub and SignPath.

## Privacy

This program will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it. In practice, OpenShuttle makes no network connection at all: your tournaments stay in files on your computer. See the [privacy policy](/en/privacy/).

## Reporting a problem

A signed file looks suspicious, or you found a security issue? Do not make it public: report it privately as explained in the repository’s [security policy](https://github.com/OpenShuttle/openshuttle-app/security/policy).
