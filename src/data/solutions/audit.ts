import type { SolutionData } from './types';

export const audit: SolutionData = {
    id: 'audit',
    slug: 'audit',
    title: 'Audit',
    promise: 'Transformez vos contraintes en opportunités.',
    shortDescription:
        "Un état des lieux mené avec vous, et un plan d’action clair, priorisé par impact.",
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    heroTagline:
        "Vous sentez que du temps se perd, sans savoir précisément où ni combien. Un état des lieux structuré transforme cette intuition en plan chiffré.",
    heroTaglineStrong: 'Commencez par y voir clair.',
    gains: [
        {
            scenario:
                'Deux semaines suffisent pour cartographier vos processus clés et chiffrer le temps perdu poste par poste.',
            label: 'Un diagnostic rapide, sans ralentir votre activité',
        },
        {
            scenario:
                'Les dépenses inutiles — outils sous-utilisés, tâches redondantes, doublons entre services — identifiées avant tout investissement.',
            label: 'Des dépenses mieux maîtrisées',
        },
        {
            scenario:
                'Un plan avec 3 à 5 chantiers classés par impact, prêt à être lancé dès la restitution.',
            label: 'Une feuille de route claire, pas un rapport qui dort dans un tiroir',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    pillars: [
        {
            title: 'Observer le terrain',
            description:
                "Nous partons de la réalité de vos équipes, pas d’un modèle théorique plaqué sur votre activité.",
            icon: 'Eye',
        },
        {
            title: 'Chiffrer les enjeux',
            description:
                'Chaque constat est traduit en temps perdu et en coût, pour comparer ce qui mérite vraiment un investissement.',
            icon: 'BarChart3',
        },
        {
            title: 'Prioriser par impact',
            description:
                "Un plan resserré sur 3 à 5 chantiers à fort effet, plutôt qu’une liste interminable de recommandations.",
            icon: 'Target',
        },
        {
            title: 'Préparer la suite',
            description:
                'Une restitution pensée pour être actionnée dès le lendemain, avec ou sans nous.',
            icon: 'Compass',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    audiences: [
        {
            title: 'Dirigeants de PME',
            description:
                "Pour obtenir une vue d’ensemble objective avant d’engager un budget, et décider sur des faits plutôt que des impressions.",
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Responsables opérationnels',
            description:
                'Pour objectiver le temps perdu dans les tâches quotidiennes et identifier les chantiers à défendre en interne.',
            icon: 'ClipboardList',
        },
        {
            title: 'Équipes en croissance',
            description:
                "Pour structurer les process avant qu’ils ne craquent, et absorber la charge sans embaucher dans l’urgence.",
            icon: 'TrendingUp',
        },
    ],
    useCases: [
        {
            title: 'Une PME dont les équipes croulent sous les tâches administratives',
            before:
                "Chacun compense à sa manière, personne n’a de vue d’ensemble sur le temps réellement perdu.",
            setup:
                "Des entretiens avec les équipes, une observation du quotidien, puis une restitution construite ensemble.",
            result:
                "Trois chantiers prioritaires identifiés, avec le gain de temps estimé pour chacun.",
        },
        {
            title: 'Un dirigeant qui hésite entre plusieurs investissements',
            before:
                'Plusieurs pistes sur la table, aucun élément objectif pour trancher.',
            setup:
                'Une analyse des besoins réels et une comparaison chiffrée des options.',
            result:
                "Une décision prise sur des faits, et un budget engagé là où il rapporte le plus.",
        },
        {
            title: 'Une équipe qui multiplie les outils sans vue d’ensemble',
            before:
                "Chaque service a ajouté ses propres outils au fil du temps ; plus personne ne sait ce qui sert vraiment.",
            setup:
                "Un inventaire des outils et des flux d’information, croisé avec les besoins réels de chaque équipe.",
            result:
                "Un plan clair distinguant ce qui doit être gardé, simplifié ou automatisé — le premier pas vers les projets suivants.",
        },
    ],
    // --- PLACEHOLDER Phase A — chapitres minimaux, à réécrire en Phase B ---
    deepDive: {
        eyebrow: 'Le Déroulé Complet',
        title: "Ce que couvre l’audit, étape par étape",
        intro: "Un aperçu concret de ce que nous examinons avec vous pendant l’audit.",
        chapters: [
            {
                id: 'audit-volet1',
                title: 'Volet 1 — Cartographie de votre activité',
                subtitle: '(Comprendre avant de recommander)',
                content: [
                    {
                        title: '1.1 Vos processus au quotidien',
                        items: [
                            'Qui fait quoi, avec quels outils',
                            'Où le temps se perd réellement',
                            "Les tâches répétées qui n’apportent rien",
                        ],
                    },
                    {
                        title: '1.2 Vos outils et vos coûts',
                        items: [
                            'Inventaire des abonnements et licences en place',
                            'Ce qui est utilisé, sous-utilisé ou en doublon',
                        ],
                    },
                ],
            },
            {
                id: 'audit-volet2',
                title: "Volet 2 — Plan d’action priorisé",
                subtitle: '(Décider où investir)',
                content: [
                    {
                        title: '2.1 Classement des chantiers',
                        items: [
                            'Gain estimé pour chaque chantier identifié',
                            'Effort et budget nécessaires pour le mener',
                        ],
                    },
                    {
                        title: '2.2 Restitution partagée',
                        items: [
                            'Un atelier de restitution avec vos équipes',
                            'Une feuille de route prête à être lancée',
                        ],
                    },
                ],
            },
        ],
    },
    steps: [
        {
            title: 'Immersion',
            description: 'Nous découvrons votre activité et vos équipes, sur le terrain.',
            duration: '1 semaine',
        },
        {
            title: 'Analyse',
            description: 'Nous identifions les principaux problèmes à résoudre et les chiffrons.',
            duration: '1 semaine',
        },
        {
            title: 'Restitution',
            description: "Nous construisons avec vous un plan d’action clair et priorisé.",
            duration: '1 atelier',
        },
        {
            title: 'Passage à l’action',
            description:
                "Si vous le souhaitez, nous vous accompagnons sur les premiers chantiers identifiés.",
            duration: 'à la carte',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    ctaTitle: 'Et si vous saviez exactement où vous perdez du temps ?',
    ctaText:
        "Un premier échange suffit pour cadrer le périmètre de l’audit et vérifier qu’il vous sera utile.",
    ctaLabel: 'Planifier un échange',
    ctaFootnote: 'Premier échange sans engagement.',
};
