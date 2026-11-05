---
step: 2
title: Add the entrants
summary: By hand or by importing a CSV file (HelloAsso export, spreadsheet), with each player's club.
images:
  - src: ../../../assets/guide/02-entrants-en.png
    alt: "The Entrants screen: the list of pairs with their club and check-in, two players registered alone waiting for a partner, and the entry form with the Registered alone, waiting for a partner box"
    caption: "The entrants list and the entry form"
  - src: ../../../assets/guide/02-partner-en.png
    alt: "The Find a partner panel of Adrien Marchand: pair him with Bastien Leroy, another player on his own in the category, or add a partner who was not registered"
    caption: "Pairing two players registered alone"
  - src: ../../../assets/guide/02-import-en.png
    alt: "Importing a HelloAsso export: the first lines of the file, the Tarif column giving the category with the lunch line ignored, the player 1 and player 2 columns, and the preview of the 7 entrants to import"
    caption: "Import: each column of the file in its place"
---

In **Entrants**, add the entrants of each category: a player in singles, a pair in doubles. Each player has a name (first and last name) and a club, picked from the club list or added on the way.

A club is recognised by its name as well as by its acronym ("Rillieux" or "AUVR"), ignoring case, accents, spaces and punctuation: the name from the list is always what gets stored. The club list and the optional acronyms are managed on the **Presets** screen, and **Settings** show clubs by name or by acronym (the name when there is no acronym).

In doubles, a player without a partner registers alone: tick **Registered alone, waiting for a partner**. They show as "Waiting for a partner" and stay out of the draw while alone. With **Partner…**, pair them with another player on their own in the category (**Form the pair**) or add a partner who was not registered. The other way round, **Split the pair** puts both players back to waiting for a partner.

Already have the list elsewhere? **Import…** takes any CSV file: an OpenShuttle export, a HelloAsso export or a spreadsheet saved as CSV (semicolon, comma or tab separated, UTF-8 or Excel's Windows encoding).

OpenShuttle guesses what each column holds from the header line, and shows its guess next to the first lines of the file. Correct it if needed:

- **the category**: the column that gives it, then, for each value found in that column, the category its lines go to. Codes (MD, WD…) and names ("Men's doubles"…) are recognised. A value that is not an entry, such as a meal, is set to **Ignore these lines**. Lines without a category go to the category of your choice;
- **each player**: either one column with the full name, or one column for the first name and one for the last name, and the club column. The partner can take player 1's club;
- **pairs**: tick **Pairs: a second player on each line** when the file gives both players on the same line;
- **clubs not in the list**: the file's clubs are recognised by their name or their acronym. Those matching no listed club are shown: for each one, **Add to the list** (the default, with its name and acronym), enter it as a listed club with **Same club as**, or **Keep as typed**.

Below, the preview updates live: the entrants to import, the lines skipped with the reason (already entered, category not played…) and the lines ignored. Nothing is entered until you click **Import N entrants**. A pair registered by each of its two players is entered once, and a line with a single player enters them alone, waiting for a partner. The whole import is cancelled by a single **Undo**.

**Export** saves the list as CSV: handy to keep it from one year to the next and import it again.

> Two players with the same name? OpenShuttle warns you without blocking: namesakes exist. On the day, their club and partner tell them apart.

> Once the draw is confirmed, a team has matches: it can no longer be removed or split, but its names and clubs can still be corrected. If it stops, declare a forfeit (**Stages**, correction mode).
