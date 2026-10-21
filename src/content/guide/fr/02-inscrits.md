---
step: 2
title: Inscrire les participants
summary: À la main ou par import d'un fichier CSV (export HelloAsso, tableur), avec le club de chaque joueur.
images:
  - src: ../../../assets/guide/02-entrants-fr.png
    alt: "L’écran Inscrits : la liste des paires avec leur club et leur dossard, et le formulaire Inscrire une paire"
    caption: "La liste des inscrits et le formulaire d’inscription"
  - src: ../../../assets/guide/02-import-fr.png
    alt: "L’import d’un export HelloAsso : les premières lignes du fichier, la colonne Tarif qui donne la catégorie avec la ligne Repas du midi ignorée, les colonnes du joueur 1 et du joueur 2, et l’aperçu des 7 inscriptions à importer"
    caption: "L’import : chaque colonne du fichier à sa place"
---

Dans **Inscrits**, ajoutez les participants de chaque catégorie : un joueur en simple, une paire en double. Chaque joueur a un nom (prénom et nom) et un club, choisi dans la liste des clubs ou ajouté au passage.

Vous avez déjà la liste ailleurs ? **Importer…** accepte n'importe quel fichier CSV : un export d'OpenShuttle, un export HelloAsso ou un tableur enregistré en CSV (séparateur point-virgule, virgule ou tabulation, encodage UTF-8 ou celui d'Excel sous Windows).

OpenShuttle devine ce que contient chaque colonne d'après la ligne d'en-tête, et vous montre sa proposition à côté des premières lignes du fichier. Vous la corrigez au besoin :

- **la catégorie** : la colonne qui la donne, puis, pour chaque valeur trouvée dans cette colonne, la catégorie où vont ses lignes. Les codes (DH, DD…) et les noms (« Double hommes »…) sont reconnus. Une valeur qui n'est pas une inscription, comme un repas, se règle sur **Ignorer ces lignes**. Les lignes sans catégorie vont dans la catégorie de votre choix ;
- **chaque joueur** : soit une colonne avec le nom complet, soit une colonne pour le prénom et une pour le nom, et la colonne du club. Le partenaire peut reprendre le club du joueur 1 ;
- **les paires** : cochez **Paires : un second joueur sur chaque ligne** quand le fichier donne les deux joueurs sur la même ligne.

En dessous, l'aperçu se met à jour en direct : les inscriptions à importer, les lignes non importées avec leur raison (déjà inscrite, catégorie non jouée…) et les lignes ignorées. Rien n'est enregistré avant de cliquer sur **Importer N inscriptions**. Une paire inscrite par chacun de ses deux joueurs n'est enregistrée qu'une fois. Tout l'import s'annule d'un seul **Annuler**.

**Exporter** enregistre la liste en CSV : pratique pour la garder d'une année sur l'autre et la réimporter.

> Deux joueurs portent le même nom ? OpenShuttle vous prévient, sans bloquer : les homonymes existent. Le jour J, le dossard les distinguera.
