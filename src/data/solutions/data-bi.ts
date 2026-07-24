import type { SolutionData } from './types';

// Seuls `title`, `slug`, `promise` et `subPromise` sont définitifs (verbatim spec).

export const dataBi: SolutionData = {
    id: 'data-bi',
    slug: 'data-bi',
    title: 'Data & Business Intelligence',
    promise: 'Les IA se trompent. Les chiffres non.',
    subPromise: 'Chaque décision mérite des données fiables.',
    shortDescription:
        'Des chiffres fiables et à jour, pour décider sans deviner.',
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    heroTagline:
        'Les décisions importantes se prennent encore trop souvent sur des chiffres en retard, incomplets ou contradictoires.',
    heroTaglineStrong: 'Décidez sur du solide.',
    gains: [
        {
            scenario:
                'Votre reporting mensuel prêt en 10 minutes au lieu de deux jours passés à recouper des tableurs',
            label: 'Du temps rendu à vos équipes',
        },
        {
            scenario:
                "Votre marge, votre trésorerie et votre activité visibles chaque matin sur un même écran, sans attendre la fin du mois pour les découvrir",
            label: 'Des décisions prises à temps, pas après coup',
        },
        {
            scenario:
                "Une dérive de coûts ou une baisse d’activité repérée en quelques jours au lieu d’un trimestre, avant qu’elle ne pèse sur le résultat",
            label: 'Les problèmes coûteux détectés tôt',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    pillars: [
        {
            title: 'Des indicateurs choisis, pas subis',
            description:
                "Nous partons des décisions que vous avez à prendre, pas de tout ce qu’il est possible d’afficher.",
            icon: 'Target',
        },
        {
            title: 'Une seule version des chiffres',
            description:
                'Toutes vos sources rassemblées et mises en cohérence, pour que tout le monde regarde la même chose.',
            icon: 'Database',
        },
        {
            title: 'Des mises à jour automatiques',
            description:
                "Vos tableaux de bord s’alimentent seuls depuis vos outils, sans export ni ressaisie.",
            icon: 'RefreshCw',
        },
        {
            title: 'Une autonomie durable',
            description:
                'Vos équipes savent lire, adapter et faire évoluer leurs tableaux de bord sans dépendre de nous.',
            icon: 'GraduationCap',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    audiences: [
        {
            title: 'Dirigeants',
            description:
                'Pour piloter marge, trésorerie et activité au jour le jour, sans attendre la clôture du mois.',
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Directions financières',
            description:
                'Pour remplacer les journées de consolidation manuelle par des chiffres fiables disponibles en permanence.',
            icon: 'BarChart3',
        },
        {
            title: 'Responsables métier',
            description:
                "Pour suivre leur périmètre avec des indicateurs à jour, et repérer les dérives avant qu’elles ne coûtent.",
            icon: 'TrendingUp',
        },
    ],
    useCases: [
        {
            title: 'Le tableau de bord du dirigeant',
            before:
                "Pour connaître sa marge réelle ou sa trésorerie du jour, il faut demander à trois personnes différentes et attendre leur retour.",
            setup:
                "Un tableau de bord unique qui rassemble les indicateurs qui comptent vraiment pour piloter l’entreprise : marge, trésorerie, activité.",
            result:
                "Les chiffres clés consultables à tout moment, sans solliciter personne.",
        },
        {
            title: 'Le reporting mensuel de direction',
            before:
                "Deux jours par mois à copier des exports dans des tableurs, avec des écarts qu’on n’arrive jamais vraiment à expliquer.",
            setup:
                'Un tableau de bord alimenté automatiquement par vos outils existants (comptabilité, ventes, production).',
            result:
                'Les bons chiffres, disponibles en permanence, et deux jours rendus à chaque cycle.',
        },
        {
            title: 'La consolidation de données éparpillées',
            before:
                "Les chiffres vivent dans des fichiers séparés, propres à chaque service, et se contredisent d’un tableau à l’autre.",
            setup:
                "Un espace central où toutes les données sont rassemblées et mises en cohérence, avec une seule version des chiffres pour toute l’entreprise.",
            result:
                'Fini les débats sur quel fichier a raison : tout le monde regarde les mêmes chiffres.',
        },
    ],
    // --- PLACEHOLDER Phase A — chapitres minimaux, à réécrire en Phase B ---
    deepDive: {
        eyebrow: 'La Démarche en Détail',
        title: 'Des données brutes aux décisions',
        intro:
            "Un aperçu de la démarche, de la mise en cohérence de vos données jusqu’aux tableaux de bord utilisés chaque jour.",
        chapters: [
            {
                id: 'data-etape1',
                title: 'Étape 1 — Poser des fondations fiables',
                subtitle: '(Sans données propres, pas de bons chiffres)',
                content: [
                    {
                        title: '1.1 Rassembler vos sources',
                        items: [
                            'Comptabilité, ventes, production : vos outils existants comme point de départ',
                            'Un espace central où les données sont réunies',
                        ],
                    },
                    {
                        title: '1.2 Fiabiliser les chiffres',
                        items: [
                            'Détection des écarts et des doublons',
                            'Une définition partagée pour chaque indicateur',
                        ],
                    },
                ],
            },
            {
                id: 'data-etape2',
                title: 'Étape 2 — Donner à voir ce qui compte',
                subtitle: '(Des tableaux de bord qui servent vraiment)',
                content: [
                    {
                        title: '2.1 Construire les vues',
                        items: [
                            'Une vue direction et des vues par métier',
                            'Des alertes quand un indicateur dérive',
                        ],
                    },
                    {
                        title: '2.2 Installer l’usage',
                        items: [
                            'Formation de vos équipes à la lecture et à l’adaptation',
                            'Des rituels de pilotage appuyés sur les chiffres',
                        ],
                    },
                ],
            },
        ],
    },
    steps: [
        {
            title: 'Cadrage',
            description:
                'Nous identifions avec vous les indicateurs qui pilotent réellement vos décisions, et laissons de côté ceux qui encombrent sans éclairer.',
            duration: '1 semaine',
        },
        {
            title: 'Connexion',
            description:
                'Nous branchons vos sources de données existantes et vérifions la fiabilité des chiffres avant de les afficher.',
            duration: '1 à 2 semaines',
        },
        {
            title: 'Tableaux de bord',
            description:
                'Nous livrons vos tableaux de bord et les mettons à jour automatiquement, sans ressaisie manuelle.',
            duration: '1 semaine',
        },
        {
            title: 'Formation et autonomie',
            description:
                "Nous formons vos équipes à lire et faire évoluer les tableaux de bord elles-mêmes, sans dépendre de nous au quotidien.",
            duration: '2 à 3 jours',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    ctaTitle: 'Et si vos chiffres étaient toujours prêts ?',
    ctaText:
        "Montrez-nous comment vous pilotez aujourd’hui : nous vous montrerons ce que des données fiables changeraient.",
    ctaLabel: 'Échanger sur vos indicateurs',
    ctaFootnote: 'Premier échange sans engagement.',
};
