import type { SolutionData } from './types';

// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const developpementLogiciel: SolutionData = {
    id: 'developpement-logiciel',
    slug: 'developpement-logiciel',
    title: 'Développement logiciel',
    promise: 'Le bon outil, rien de plus.',
    shortDescription:
        'Des outils métier sur mesure, construits autour de vos process, sans licences superflues.',
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    heroTagline:
        "Les logiciels du commerce vous imposent leurs règles ; les tableurs finissent par craquer. Entre les deux, il y a l’outil construit pour vous.",
    heroTaglineStrong: 'Exactement le vôtre.',
    gains: [
        {
            scenario:
                "Une tâche répétée vingt fois par jour à la main devient un outil qui la fait en un clic",
            label: 'Des heures rendues chaque semaine à vos équipes',
        },
        {
            scenario:
                "Un outil sur mesure qui remplace trois ou quatre abonnements payés pour une poignée de fonctionnalités utilisées",
            label: 'Des coûts fixes en moins, chaque mois',
        },
        {
            scenario:
                "Fini le fichier partagé qui plante ou se contredit entre deux versions la veille d’une échéance",
            label: 'Une donnée fiable, centralisée, accessible à tous',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    pillars: [
        {
            title: 'Partir de vos process réels',
            description:
                "Nous concevons l’outil autour de votre façon de travailler, pas l’inverse.",
            icon: 'Search',
        },
        {
            title: 'Livrer vite, ajuster souvent',
            description:
                'Une première version utilisable en quelques semaines, affinée ensuite avec vos retours.',
            icon: 'Rocket',
        },
        {
            title: 'Un périmètre juste',
            description:
                'Uniquement les fonctionnalités qui servent au quotidien : rien de superflu à payer ni à maintenir.',
            icon: 'Target',
        },
        {
            title: 'Un outil qui vous appartient',
            description:
                "Pas d’abonnement obligatoire ni de dépendance : l’outil et les données restent les vôtres.",
            icon: 'KeyRound',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    audiences: [
        {
            title: 'Entreprises prisonnières du tableur',
            description:
                "Pour remplacer le fichier fragile qui porte toute l’activité par un outil fiable et partagé.",
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Métiers aux besoins spécifiques',
            description:
                "Pour les activités qu’aucun logiciel standard ne couvre correctement, sans tordre vos process pour rentrer dans les cases.",
            icon: 'Puzzle',
        },
        {
            title: 'Structures multi-abonnements',
            description:
                'Pour regrouper dans un seul outil ce qui est aujourd’hui éparpillé entre plusieurs licences sous-utilisées.',
            icon: 'Layers',
        },
    ],
    useCases: [
        {
            title: 'Remplacer le tableur devenu ingérable',
            before:
                "Toute l’activité repose sur un fichier partagé que plus personne n’ose modifier, avec des formules cassées et des versions qui se contredisent.",
            setup:
                'Un outil simple, sur mesure, qui reprend vos données et vos règles métier telles qu’elles fonctionnent réellement chez vous.',
            result:
                'Plusieurs personnes travaillent en même temps, sans conflit ni perte de données, et le fichier fragile disparaît.',
        },
        {
            title: 'Un portail pour vos clients',
            before:
                'Les demandes arrivent par e-mail et téléphone, les équipes passent leur temps à répondre aux mêmes questions sur un dossier ou un statut.',
            setup:
                'Un espace en ligne où vos clients suivent leurs dossiers, documents et échéances en autonomie, à toute heure.',
            result:
                'Moins de sollicitations entrantes à traiter à la main, et des clients mieux informés sans effort supplémentaire.',
        },
        {
            title: 'Un outil interne pour piloter une activité qui vit dans la tête de deux personnes',
            before:
                "Le suivi des stocks, des plannings ou des dossiers repose sur la mémoire, des post-it et des messages épars : la moindre absence bloque tout.",
            setup:
                "Un outil interne qui centralise les informations utiles et automatise les tâches répétitives, pensé pour l’usage réel de vos équipes.",
            result:
                "Toute l’équipe accède à la même information, à jour, et l’activité ne dépend plus d’une seule personne indisponible.",
        },
    ],
    // --- PLACEHOLDER Phase A — chapitres minimaux, à réécrire en Phase B ---
    deepDive: {
        eyebrow: 'La Méthode en Détail',
        title: 'Comment votre outil prend forme',
        intro:
            "Un aperçu de la démarche, du cadrage initial jusqu’à un outil adopté par vos équipes.",
        chapters: [
            {
                id: 'dev-etape1',
                title: 'Étape 1 — Cadrer le juste périmètre',
                subtitle: '(Ce qui sert, rien de plus)',
                content: [
                    {
                        title: '1.1 Comprendre votre quotidien',
                        items: [
                            'Observation des tâches réelles de vos équipes',
                            'Les irritants et les contournements du moment',
                        ],
                    },
                    {
                        title: '1.2 Définir la première version',
                        items: [
                            'Les fonctionnalités indispensables au démarrage',
                            'Ce qui attendra une version suivante',
                        ],
                    },
                ],
            },
            {
                id: 'dev-etape2',
                title: 'Étape 2 — Construire avec vos équipes',
                subtitle: '(Un outil adopté, pas imposé)',
                content: [
                    {
                        title: '2.1 Livrer et tester',
                        items: [
                            'Une version utilisable mise rapidement entre les mains de vos équipes',
                            "Des retours d’usage intégrés en continu",
                        ],
                    },
                    {
                        title: '2.2 Installer dans la durée',
                        items: [
                            'Formation à la prise en main',
                            'Un outil qui évolue avec votre activité',
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
                'Nous observons vos process réels et définissons le périmètre juste : ce qui sert au quotidien, rien de plus.',
            duration: '1 semaine',
        },
        {
            title: 'Première version',
            description: 'Nous livrons vite une version utilisable, testée avec vos équipes sur de vrais cas.',
            duration: '3 à 6 semaines',
        },
        {
            title: 'Itérations',
            description: "Nous affinons l’outil au rythme de vos retours d’usage, sans repartir de zéro.",
            duration: 'par cycles courts',
        },
        {
            title: 'Un outil qui vous appartient',
            description:
                "L’outil reste le vôtre : pas d’abonnement obligatoire pour continuer à l’utiliser, et il évolue avec votre activité.",
            duration: 'dans la durée',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    ctaTitle: 'Un outil à votre mesure, ça commence par une conversation.',
    ctaText:
        "Racontez-nous ce qui coince dans vos outils actuels : nous vous dirons si le sur-mesure se justifie — et si ce n’est pas le cas, nous vous le dirons aussi.",
    ctaLabel: 'Décrire votre besoin',
    ctaFootnote: 'Premier échange sans engagement.',
};
