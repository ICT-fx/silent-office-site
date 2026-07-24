import type { SolutionData } from './types';

// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const automatisation: SolutionData = {
    id: 'automatisation',
    slug: 'automatisation',
    title: 'Automatisation & Optimisation',
    promise: 'Faites plus, avec les mêmes équipes.',
    shortDescription:
        "N’importe quel processus lent ou répétitif, simplifié puis pris en charge, pour que vos équipes se recentrent sur ce qui compte.",
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    heroTagline:
        "Vos équipes passent des heures sur des tâches qui n’exigent ni jugement ni savoir-faire. Ces heures peuvent être rendues à ce qui compte vraiment.",
    heroTaglineStrong: 'Libérez ce temps.',
    gains: [
        {
            scenario: 'Une facture traitée en 30 secondes au lieu de 5 minutes',
            label: 'Du temps rendu à vos équipes',
        },
        {
            scenario: "Une commande enregistrée une seule fois, sans ressaisie du site à la logistique",
            label: "Moins d’erreurs, moins de reprises",
        },
        {
            scenario: 'Des relances qui partent toutes seules, au bon moment',
            label: 'Une trésorerie mieux tenue',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    pillars: [
        {
            title: "Simplifier avant d’automatiser",
            description:
                'Un processus compliqué automatisé reste compliqué. Nous commençons toujours par le simplifier.',
            icon: 'Workflow',
        },
        {
            title: "S’appuyer sur vos outils",
            description:
                'Nous construisons avec ce que vous utilisez déjà, sans imposer de nouvelle plateforme à apprendre.',
            icon: 'Puzzle',
        },
        {
            title: "Garder l’humain aux commandes",
            description:
                'Les cas particuliers restent validés par vos équipes ; la machine ne décide jamais seule.',
            icon: 'ShieldCheck',
        },
        {
            title: 'Mesurer les gains',
            description:
                'Chaque circuit mis en place est suivi et chiffré, pour prouver ce qu’il rapporte réellement.',
            icon: 'BarChart3',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    audiences: [
        {
            title: 'Dirigeants et directions',
            description:
                "Pour absorber plus d’activité sans alourdir la structure, et fiabiliser les opérations qui pèsent sur le résultat.",
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Équipes administratives',
            description:
                'Pour se libérer des saisies, des ressaisies et des relances manuelles qui remplissent leurs journées.',
            icon: 'ClipboardList',
        },
        {
            title: 'Opérations et logistique',
            description:
                "Pour faire circuler l’information entre les outils sans intervention manuelle à chaque étape.",
            icon: 'Layers',
        },
    ],
    useCases: [
        {
            title: 'La saisie des factures fournisseurs',
            before:
                'Chaque facture reçue par e-mail est ressaisie à la main dans la comptabilité, une par une.',
            setup:
                'Un circuit qui capte les factures dès leur réception et les enregistre directement dans votre outil, avec un contrôle humain sur les cas particuliers.',
            result:
                'Des heures de saisie récupérées chaque semaine, et des chiffres fiables sans repasser derrière.',
        },
        {
            title: 'Le traitement des commandes',
            before:
                "Une commande passe par plusieurs outils avant d’arriver en préparation, avec une ressaisie à chaque étape.",
            setup:
                "Une chaîne qui fait circuler l’information automatiquement d’un outil à l’autre, sans intervention manuelle entre les étapes.",
            result:
                'Des commandes qui partent plus vite, sans erreur de référence ni de quantité.',
        },
        {
            title: 'Les relances clients',
            before:
                "Les relances partent en retard, quand quelqu’un a le temps d’y penser — ou pas du tout.",
            setup:
                'Des relances automatiques, personnalisées et espacées selon vos règles, déclenchées au bon moment.',
            result:
                "Des paiements encaissés plus tôt, sans y consacrer une minute de plus. Le même principe s’applique à n’importe quelle tâche répétitive de votre activité.",
        },
    ],
    // --- PLACEHOLDER Phase A — chapitres minimaux, à réécrire en Phase B ---
    deepDive: {
        eyebrow: 'La Méthode en Détail',
        title: 'Comment nous automatisons un processus',
        intro:
            "Un aperçu de la démarche, du choix du processus jusqu’à un circuit qui tourne seul.",
        chapters: [
            {
                id: 'auto-phase1',
                title: 'Phase 1 — Choisir le bon processus',
                subtitle: '(Là où le gain est le plus net)',
                content: [
                    {
                        title: '1.1 Repérer les candidats',
                        items: [
                            'Les tâches répétées chaque jour ou chaque semaine',
                            'Les ressaisies entre deux outils',
                            'Les contrôles systématiques sans valeur ajoutée',
                        ],
                    },
                    {
                        title: '1.2 Évaluer le gain',
                        items: [
                            'Temps récupéré par semaine, chiffré avec vos équipes',
                            'Erreurs évitées et reprises supprimées',
                        ],
                    },
                ],
            },
            {
                id: 'auto-phase2',
                title: 'Phase 2 — Construire et fiabiliser',
                subtitle: '(Un circuit qui tient dans la durée)',
                content: [
                    {
                        title: '2.1 Mettre en place le circuit',
                        items: [
                            'Connexion à vos outils existants',
                            'Tests avec vos équipes sur de vrais cas',
                        ],
                    },
                    {
                        title: '2.2 Prévoir les cas particuliers',
                        items: [
                            'Les exceptions renvoyées vers un contrôle humain',
                            'Un suivi des gains pour ajuster dans le temps',
                        ],
                    },
                ],
            },
        ],
    },
    steps: [
        {
            title: 'Diagnostic',
            description:
                'Nous regardons vos processus avec vous et identifions celui qui offre le meilleur gain pour le moins d’effort.',
            duration: '1 semaine',
        },
        {
            title: 'Simplification',
            description:
                "Avant d’automatiser, nous simplifions le processus lui-même : moins d’étapes, moins d’outils, moins de points de blocage.",
            duration: '1 semaine',
        },
        {
            title: 'Mise en place',
            description:
                'Nous construisons et testons le circuit avec vos équipes, sur vos outils existants.',
            duration: '2 à 3 semaines',
        },
        {
            title: 'Suivi',
            description: "Nous mesurons les gains et ajustons jusqu’à ce que ça tourne tout seul.",
            duration: 'en continu',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    ctaTitle: 'Quel processus vous coûte le plus cher ?',
    ctaText:
        'Décrivez-nous une tâche répétitive de votre quotidien : nous vous dirons ce qu’elle pourrait devenir.',
    ctaLabel: 'Parler de votre processus',
    ctaFootnote: 'Premier échange sans engagement.',
};
