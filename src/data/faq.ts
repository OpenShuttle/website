import { routes, type Locale } from '../i18n/routes';

export interface FaqItem {
  question: string;
  /** Answer as trusted HTML (paragraphs and links only). */
  answer: string;
  /** Also shown in the home page FAQ section. */
  home?: boolean;
}

export const faq: Record<Locale, FaqItem[]> = {
  fr: [
    {
      home: true,
      question: 'Faut-il une connexion internet ?',
      answer:
        '<p>Non. OpenShuttle fonctionne entièrement hors ligne, sur un seul ordinateur. Internet ne sert qu’à le télécharger.</p>',
    },
    {
      home: true,
      question: 'Est-ce adapté aux tournois homologués FFBaD ?',
      answer:
        '<p>Non. OpenShuttle est fait pour les tournois de club non homologués : tournois internes, tournois amicaux, tournois de fin de saison.</p>',
    },
    {
      home: true,
      question: 'Quel matériel faut-il ?',
      answer:
        '<p>Un ordinateur portable pour la table de marque, et si vous le souhaitez un vidéoprojecteur ou une télé pour l’écran d’appel. Pas d’imprimante nécessaire.</p>',
    },
    {
      home: true,
      question: 'C’est vraiment gratuit ?',
      answer:
        '<p>Oui, sans abonnement ni version payante. OpenShuttle est un logiciel libre développé par des bénévoles.</p>',
    },
    {
      home: true,
      question: 'Windows m’affiche un avertissement au lancement, est-ce normal ?',
      answer: `<p>Oui, pour les nouvelles versions. Cliquez sur « Informations complémentaires » puis « Exécuter quand même ». La page <a href="${routes.download.fr}">Télécharger</a> détaille la marche à suivre.</p>`,
    },
    {
      question: 'Sur Mac, l’application refuse de s’ouvrir. Que faire ?',
      answer:
        '<p>Ouvrez OpenShuttle une première fois et fermez le message. Allez ensuite dans Réglages système → Confidentialité et sécurité, puis cliquez sur « Ouvrir quand même » en bas de la page. Il suffit de le faire une fois.</p>',
    },
    {
      question: 'Combien de catégories peut-on faire jouer en même temps ?',
      answer:
        '<p>Une ou deux par tournoi, sur les mêmes terrains : une catégorie masculine et une féminine, par exemple double hommes et double dames. Un joueur ne peut être inscrit que dans une seule. Le double mixte se joue seul.</p>',
    },
    {
      question: 'Quels formats de tournoi sont possibles ?',
      answer:
        '<p>Vous enchaînez librement des phases : poules, tableaux à élimination directe, tableau consolante, avec placement complet pour classer tout le monde place par place. Chaque phase a sa condition de victoire : nombre de sets, points par set, plafond, ou matchs au temps joués par rotations avec point en or (quand une seule catégorie joue).</p><p>Des presets prêts à l’emploi évitent de tout reconstruire d’un tournoi à l’autre.</p>',
    },
    {
      question: 'OpenShuttle gère-t-il les classements des joueurs (P10, NC…) ?',
      answer:
        '<p>Non, il n’y a pas de niveau ni de classement fédéral. Pour équilibrer les poules, vous désignez vos têtes de série et les rangez dans l’ordre au moment du tirage.</p>',
    },
    {
      question: 'Comment importer la liste des inscrits ?',
      answer:
        '<p>Depuis un fichier CSV avec les colonnes catégorie, joueur 1, club 1, joueur 2, club 2 (séparateur point-virgule ou virgule). Les lignes invalides ou déjà inscrites sont signalées, et l’import s’annule d’un seul clic.</p>',
    },
    {
      question: 'Où sont enregistrés mes tournois ?',
      answer:
        '<p>Sur votre ordinateur : un fichier <code>.openshuttle</code> par tournoi. Chaque action est écrite immédiatement sur le disque et une copie de sauvegarde est faite régulièrement, donc une coupure de courant ne fait rien perdre.</p>',
    },
    {
      question: 'Les joueurs peuvent-ils suivre les scores sur leur téléphone ?',
      answer:
        '<p>Pas pour l’instant : tout se passe sur l’ordinateur de la table de marque, et les joueurs suivent sur l’écran d’appel, dans la salle.</p>',
    },
    {
      question: 'En quelles langues est l’application ?',
      answer: '<p>En français et en anglais. La langue se change à tout moment dans les réglages.</p>',
    },
  ],
  en: [
    {
      home: true,
      question: 'Do I need an internet connection?',
      answer:
        '<p>No. OpenShuttle runs fully offline, on a single computer. You only need the internet to download it.</p>',
    },
    {
      home: true,
      question: 'Can I use it for sanctioned tournaments?',
      answer:
        '<p>No. OpenShuttle is made for non-sanctioned club tournaments: internal club days, friendly tournaments, end-of-season events.</p>',
    },
    {
      home: true,
      question: 'What equipment do I need?',
      answer:
        '<p>A laptop for the control desk and, if you like, a projector or a TV for the display screen. No printer needed.</p>',
    },
    {
      home: true,
      question: 'Is it really free?',
      answer:
        '<p>Yes, with no subscription and no paid edition. OpenShuttle is free and open source software made by volunteers.</p>',
    },
    {
      home: true,
      question: 'Windows shows a warning when I start it. Is that normal?',
      answer: `<p>Yes, for new releases. Click “More info”, then “Run anyway”. The <a href="${routes.download.en}">Download</a> page walks you through it.</p>`,
    },
    {
      question: 'On a Mac, the app will not open. What should I do?',
      answer:
        '<p>Open OpenShuttle once and close the message. Then go to System Settings → Privacy &amp; Security and click “Open Anyway” at the bottom of the page. You only need to do this once.</p>',
    },
    {
      question: 'How many categories can play at the same time?',
      answer:
        '<p>One or two per tournament, on the same courts: one men’s and one women’s category, for example men’s doubles and women’s doubles. A player can only be entered in one of them. Mixed doubles always runs on its own.</p>',
    },
    {
      question: 'Which tournament formats are possible?',
      answer:
        '<p>You chain stages freely: pools, single elimination brackets, a consolation bracket, with full placement to rank everyone place by place. Each stage has its own win condition: sets to win, points per set, a point cap, or timed matches played in rounds with a golden point (when a single category plays).</p><p>Ready-made presets save you from rebuilding everything from one tournament to the next.</p>',
    },
    {
      question: 'Does OpenShuttle handle player rankings or levels?',
      answer:
        '<p>No, there are no levels or federation rankings. To balance the pools, you pick your seeds and put them in order at the draw.</p>',
    },
    {
      question: 'How do I import the list of entrants?',
      answer:
        '<p>From a CSV file with the columns category, player 1, club 1, player 2, club 2 (semicolon or comma separated). Invalid or already entered rows are reported, and the whole import can be undone in one click.</p>',
    },
    {
      question: 'Where are my tournaments saved?',
      answer:
        '<p>On your computer: one <code>.openshuttle</code> file per tournament. Every action is written to disk at once and a backup copy is made regularly, so a power cut loses nothing.</p>',
    },
    {
      question: 'Can players follow the scores on their phones?',
      answer:
        '<p>Not for now: everything happens on the control desk computer, and players follow along on the display screen in the hall.</p>',
    },
    {
      question: 'Which languages does the app speak?',
      answer: '<p>English and French. You can switch the language at any time in the settings.</p>',
    },
  ],
};

/** schema.org FAQPage for a list of questions. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
