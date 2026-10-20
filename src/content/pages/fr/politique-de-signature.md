---
page: signing
title: "Politique de signature du code d’OpenShuttle"
description: "Comment les versions d’OpenShuttle sont construites et signées : uniquement depuis le dépôt public, par l’intégration continue GitHub, après approbation d’un mainteneur."
heading: "Politique de signature du code"
lead: "Comment les fichiers que vous téléchargez sont construits, qui les approuve et ce qu’ils font de vos données."
updated: 2026-10-20
---

## Signature des versions Windows

Free code signing provided by [SignPath.io](https://about.signpath.io/), certificate by [SignPath Foundation](https://signpath.org/).

La signature de l’installateur et de la version portable Windows par la SignPath Foundation est en cours de mise en place. Tant qu’elle n’est pas active, Windows affiche un avertissement au premier lancement : la page [Télécharger](/telecharger/) explique comment continuer.

L’application macOS est signée ad hoc, sans certificat de développeur Apple : macOS demande une confirmation dans Réglages système → Confidentialité et sécurité. Les paquets Linux ne sont pas signés.

## Ce qui est signé

- Seuls les fichiers construits à partir du code source du [dépôt public OpenShuttle](https://github.com/OpenShuttle/openshuttle-app) sont signés.
- Ils sont construits par l’intégration continue GitHub Actions (le workflow `release-desktop.yml` du dépôt), à partir d’une étiquette de version posée sur un commit de la branche `main`. Aucun fichier construit sur un poste personnel n’est signé.
- Le workflow vérifie l’étiquette, construit l’application pour Windows, macOS et Linux, publie la version sur GitHub avec les notes de version et les [sommes de contrôle SHA-256](/telecharger/checksums).
- Les dépendances tierces incluses (bibliothèques Go et npm) proviennent de leurs dépôts officiels, épinglées à des versions précises et mises à jour par des demandes de fusion relues.

## Rôles de l’équipe

- **Auteurs et relecteurs** : les membres de l’[organisation OpenShuttle sur GitHub](https://github.com/OpenShuttle). Toute modification de `main` passe par une demande de fusion et l’intégration continue. Les contributions externes sont relues par un membre avant fusion.
- **Approbateurs** : les mainteneurs du projet, actuellement Thomas Da Rocha. Chaque demande de signature d’une version est approuvée manuellement par un approbateur.

Les membres de l’équipe utilisent l’authentification à deux facteurs sur GitHub et sur SignPath.

## Confidentialité

Ce programme ne transfère aucune information vers d’autres systèmes en réseau, sauf demande expresse de la personne qui l’installe ou l’utilise. En pratique, OpenShuttle n’établit aucune connexion réseau : vos tournois restent dans des fichiers sur votre ordinateur. Voir la [politique de confidentialité](/confidentialite/).

## Signaler un problème

Un fichier signé qui vous semble suspect, ou une faille de sécurité ? Ne la publiez pas : signalez-la en privé, comme l’explique la [politique de sécurité](https://github.com/OpenShuttle/openshuttle-app/security/policy) du dépôt.
