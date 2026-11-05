---
page: changelog
title: "OpenShuttle changelog: what is new in each version"
description: "What changes in each version of OpenShuttle: new features and fixes, from the latest to the oldest."
heading: "Changelog"
lead: "What changes in each version of the app, from the latest to the oldest. To update, download the new version and install it over the old one: your tournaments are kept."
updated: 2026-11-05
---

## Version 1.4.0 · November 5, 2026

- **New:** rules per court. A court can be *priority* for a category, a stage, a pool or a bracket round, *only* for what concerns it, or *never* used for it. They replace the reserved courts and ghost matches of 1.3.
- **New:** the day and the breaks. Set the date and the start and end hours on the Info screen; the schedule starts from the start hour, flags a finish that runs too late and plans the breaks (lunch…) you add on every court.
- **New:** a pause before a stage. A stage that follows another can wait for a delay (in quarter hours) after the matches feeding it end.
- **New:** pools and brackets have their color, the same on the schedule and the control desk, with named rounds ("P A · 2/5", "QF", "Final"). On the schedule, one badge per pool or bracket highlights its matches.
- **New:** open a tournament by double-clicking its file. If it is already open in another window, that window comes to the front: a file opens only once.
- **New:** the home screen says when a newer version is available (a quiet check at startup, which you can turn off in the settings; nothing is downloaded by itself).
- **Improved:** brackets are drawn with more care: teams from the same pool meet as late as possible, and byes go to the teams that played the most.
- **Improved:** in a bracket round, the low-stakes matches (9th place, 7th…) come first, the final last.
- **Improved:** the ranking can be changed even after the pools are drawn.
- **Fixed:** with byes (6 teams in a bracket of 8), matches are played and forecast in their real round.

[Technical details of version 1.4.0 on GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.4.0)

## Version 1.3.0 · November 4, 2026

- **New:** at the draw, each club has its color. A club alone in its pool stays pale; two teams of the same club in a pool stand out, with "×2".
- **New:** one color per ranking level. With 5 pools, the first 5 teams make level 1, the next 5 level 2…: you see at a glance whether each pool has one team of each level.
- **New:** clubs with an acronym. A club has a name and an optional acronym (Rillieux / AUVR), both recognised when entering players and at import; at the draw they count as one club, older files included. Clubs unknown to the list are offered for adding at import, and a setting shows clubs by name or by acronym.
- **Improved:** "seeds" become the "ranking": rank a few teams or all of them.
- **Improved:** a pool stays in ranking order, even when you move a team into it by hand.

[Technical details of version 1.3.0 on GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.3.0)

## Version 1.2.0 · November 4, 2026

- **New:** in doubles, a player can register alone and wait for a partner. On the day, pair them with another player on their own or add a partner on the spot; a pair can also be split as long as it has not played.
- **New:** the format of a later stage can change during the tournament, as long as none of its matches has started. After forfeits or when running late, play the final bracket in one set, turn it into pools, add or remove a stage.
- **New:** a trash on the home screen. A tournament you no longer need leaves the list; restore it or delete it later.
- **New:** the format preview counts, as you choose, the complete pairs, every entry or the present ones.
- **Improved:** the category you pick follows you from one screen to the next (entrants, check-in, format, stages, results, control desk queue).
- **Improved:** at check-in, teams already checked in move to the bottom of the list; the ones still expected stay on top.
- **Improved:** each file dialog (import, export, open, archive) opens in the folder you used last.
- **Improved:** a team that already has matches can no longer be removed or split by mistake: the Entrants screen points you to a forfeit.

[Technical details of version 1.2.0 on GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.2.0)

## Version 1.1.0 · October 21, 2026

- **New:** try the app with a sample tournament, from the home screen.
- **New:** import entrants from any CSV file (HelloAsso export, spreadsheet), choosing the columns and with a preview before importing.
- **New:** the "?" button in the top bar opens the guide.
- **Fixed:** in the results, tied places fit on one line.

[Technical details of version 1.1.0 on GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.1.0)

## Version 1.0.0 · October 20, 2026

First public release: offline club tournaments, one or two categories at the same time on shared courts, pools then brackets, draw, schedule, control desk, display screen, results and full standings, in English and French.

[Technical details of version 1.0.0 on GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.0.0)
