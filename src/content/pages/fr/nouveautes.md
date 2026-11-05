---
page: changelog
title: "Nouveautés d’OpenShuttle : historique des versions"
description: "Ce qui change à chaque version d’OpenShuttle : nouvelles fonctionnalités et corrections, de la plus récente à la plus ancienne."
heading: "Nouveautés"
lead: "Ce qui change à chaque version de l’application, de la plus récente à la plus ancienne. Pour mettre à jour, téléchargez la nouvelle version et installez-la par-dessus : vos tournois sont conservés."
updated: 2026-11-05
---

## Version 1.5.0 · 5 novembre 2026

- **Nouveau :** les tableaux se dessinent en arbre, un tour par colonne, chaque partie (places 1 à 4, 5 à 8…) dans son bloc titré. Des boutons sautent à un tour ou à une partie du tableau, et les liens vers le match suivant s’affichent tous, seulement ceux des vainqueurs, des perdants, ou aucun.
- **Nouveau :** dans un tableau, chaque équipe montre d’où elle vient : sa poule et son rang (A1, B2…), coloré par poule.
- **Nouveau :** les dossards ne s’affichent plus par défaut et les codes de match (MD-A3…) ont disparu de l’écran : un match se lit par ses équipes, sa catégorie et son tour. Les dossards restent attribués au pointage ; un réglage les affiche partout.
- **Amélioré :** la saisie du score avance set par set avec Tab (set 1 des deux équipes, puis set 2…), et un troisième set inutile n’est pas demandé.
- **Amélioré :** les boutons montrent clairement lequel a le focus quand on navigue au clavier.
- **Corrigé :** sur un terrain terminé, le match suivant proposé s’affiche aussitôt.
- **Corrigé :** le pointage affiche à nouveau les noms et les clubs quand les dossards sont masqués, et l’historique ne montre les dossards que s’ils sont affichés.

[Détails techniques de la version 1.5.0 sur GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.5.0)

## Version 1.4.0 · 5 novembre 2026

- **Nouveau :** des règles par terrain. Un terrain peut être *prioritaire* pour une catégorie, une phase, une poule ou un tour de tableau, *uniquement* réservé à ce qui le concerne, ou *jamais* utilisé pour cela. Elles remplacent les terrains réservés et les matchs fantômes de la 1.3.
- **Nouveau :** la journée et les pauses. Indiquez la date et les heures de début et de fin sur l’écran Infos ; l’échéancier part de l’heure de début, signale une fin trop tardive et prévoit les pauses (déjeuner…) ajoutées sur tous les terrains.
- **Nouveau :** une pause avant une phase. Une phase qui suit une autre peut attendre un délai (par quarts d’heure) après la fin des matchs qui l’alimentent.
- **Nouveau :** pools et tableaux ont leur couleur, la même sur l’échéancier et sur la table de marque, avec des tours nommés (« P A · 2/5 », « 1/4 », « Finale »). Sur l’échéancier, un badge par poule ou tableau met ses matchs en valeur.
- **Nouveau :** ouvrir un tournoi d’un double-clic sur son fichier. Si le tournoi est déjà ouvert dans une autre fenêtre, celle-ci passe au premier plan : un même fichier ne s’ouvre qu’une fois.
- **Nouveau :** l’accueil signale qu’une version plus récente est disponible (une vérification discrète au démarrage, désactivable dans les réglages ; rien n’est téléchargé tout seul).
- **Amélioré :** les tableaux sont tirés avec soin : les équipes d’une même poule se retrouvent le plus tard possible, et les exemptions vont à celles qui ont le plus joué.
- **Amélioré :** dans un tour de tableau, les matchs à faible enjeu (9e place, 7e…) passent d’abord, la finale en dernier.
- **Amélioré :** le classement se modifie même une fois les poules tirées.
- **Corrigé :** avec des exemptions (6 équipes dans un tableau de 8), les matchs se jouent et se prévoient dans leur vrai tour.

[Détails techniques de la version 1.4.0 sur GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.4.0)

## Version 1.3.0 · 4 novembre 2026

- **Nouveau :** au tirage, chaque club a sa couleur. Un club seul dans sa poule reste pâle ; deux équipes du même club dans une poule ressortent, avec « ×2 ».
- **Nouveau :** une couleur par niveau de classement. Avec 5 poules, les 5 premières équipes forment le niveau 1, les 5 suivantes le niveau 2… : vous voyez d’un coup d’œil si chaque poule a bien une équipe de chaque niveau.
- **Nouveau :** clubs avec acronyme. Un club a un nom et un acronyme facultatif (Rillieux / AUVR), reconnus tous les deux à la saisie et à l’import ; au tirage, ils comptent pour un seul club, y compris dans les anciens fichiers. Les clubs inconnus d’un import sont proposés à l’ajout, et un réglage affiche les clubs par nom ou par acronyme.
- **Amélioré :** les « têtes de série » deviennent le « classement » : classez quelques équipes ou toutes.
- **Amélioré :** une poule reste rangée dans l’ordre du classement, même quand vous y déplacez une équipe à la main.

[Détails techniques de la version 1.3.0 sur GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.3.0)

## Version 1.2.0 · 4 novembre 2026

- **Nouveau :** en double, un joueur peut s’inscrire seul et attendre un partenaire. Le jour J, formez la paire avec un autre joueur seul ou ajoutez un partenaire sur place ; une paire peut aussi être séparée tant qu’elle n’a pas joué.
- **Nouveau :** le format d’une phase suivante se modifie pendant le tournoi, tant qu’aucun de ses matchs n’a commencé. Après des forfaits ou en cas de retard, passez le tableau final en un set, transformez-le en poules, ajoutez ou supprimez une phase.
- **Nouveau :** une corbeille sur l’accueil. Un tournoi dont vous n’avez plus besoin quitte la liste ; vous le restaurez ou le supprimez plus tard.
- **Nouveau :** l’aperçu du format se calcule au choix pour les paires complètes, toutes les inscriptions ou les présents.
- **Amélioré :** la catégorie choisie vous suit d’un écran à l’autre (inscrits, pointage, format, phases, résultats, file de la table de marque).
- **Amélioré :** au pointage, les équipes déjà pointées passent en bas de la liste ; en haut restent celles qu’on attend.
- **Amélioré :** chaque fenêtre de choix de fichier (import, export, ouverture, archive) s’ouvre dans le dernier dossier utilisé.
- **Amélioré :** une équipe qui a déjà des matchs ne peut plus être retirée ou séparée par erreur : l’écran Inscrits indique de déclarer un forfait.

[Détails techniques de la version 1.2.0 sur GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.2.0)

## Version 1.1.0 · 21 octobre 2026

- **Nouveau :** essayer l’application avec un tournoi d’exemple, depuis l’accueil.
- **Nouveau :** import des inscriptions depuis n’importe quel fichier CSV (export HelloAsso, tableur), avec le choix des colonnes et un aperçu avant d’importer.
- **Nouveau :** le bouton « ? » de la barre du haut ouvre le guide.
- **Corrigé :** dans les résultats, les places ex æquo tiennent sur une ligne.

[Détails techniques de la version 1.1.0 sur GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.1.0)

## Version 1.0.0 · 20 octobre 2026

Première version publique : tournois de club hors ligne, une ou deux catégories en même temps sur des terrains partagés, poules puis tableaux, tirage, échéancier, table de marque, écran d’appel, résultats et classement complet, en français et en anglais.

[Détails techniques de la version 1.0.0 sur GitHub](https://github.com/OpenShuttle/openshuttle-app/releases/tag/desktop-v1.0.0)
