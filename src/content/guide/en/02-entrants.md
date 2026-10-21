---
step: 2
title: Add the entrants
summary: By hand or by importing a CSV file (HelloAsso export, spreadsheet), with each player's club.
images:
  - src: ../../../assets/guide/02-entrants-en.png
    alt: "The Entrants screen: the list of pairs with their club and bib number, and the Add a pair form"
    caption: "The entrants list and the entry form"
  - src: ../../../assets/guide/02-import-en.png
    alt: "Importing a HelloAsso export: the first lines of the file, the Tarif column giving the category with the lunch line ignored, the player 1 and player 2 columns, and the preview of the 7 entrants to import"
    caption: "Import: each column of the file in its place"
---

In **Entrants**, add the entrants of each category: a player in singles, a pair in doubles. Each player has a name (first and last name) and a club, picked from the club list or added on the way.

Already have the list elsewhere? **Import…** takes any CSV file: an OpenShuttle export, a HelloAsso export or a spreadsheet saved as CSV (semicolon, comma or tab separated, UTF-8 or Excel's Windows encoding).

OpenShuttle guesses what each column holds from the header line, and shows its guess next to the first lines of the file. Correct it if needed:

- **the category**: the column that gives it, then, for each value found in that column, the category its lines go to. Codes (MD, WD…) and names ("Men's doubles"…) are recognised. A value that is not an entry, such as a meal, is set to **Ignore these lines**. Lines without a category go to the category of your choice;
- **each player**: either one column with the full name, or one column for the first name and one for the last name, and the club column. The partner can take player 1's club;
- **pairs**: tick **Pairs: a second player on each line** when the file gives both players on the same line.

Below, the preview updates live: the entrants to import, the lines skipped with the reason (already entered, category not played…) and the lines ignored. Nothing is entered until you click **Import N entrants**. A pair registered by each of its two players is entered once. The whole import is cancelled by a single **Undo**.

**Export** saves the list as CSV: handy to keep it from one year to the next and import it again.

> Two players with the same name? OpenShuttle warns you without blocking: namesakes exist. On the day, the bib number tells them apart.
