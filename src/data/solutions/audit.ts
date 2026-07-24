import type { SolutionData } from './types';

export const audit: SolutionData = {
    id: 'audit',
    slug: 'audit',
    title: 'Audit',
    promise: 'Transformez vos contraintes en opportunités.',
    shortDescription:
        "Un état des lieux mené avec vous, et un plan d’action clair, priorisé par impact.",
    heroTagline:
        "Vous sentez que du temps et de l’argent s’échappent quelque part dans votre organisation, sans pouvoir dire précisément où ni combien. Notre audit remonte le fil de vos processus pour transformer ce ressenti en constats mesurables.",
    heroTaglineStrong: 'Passez des intuitions aux certitudes.',
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
    pillars: [
        {
            title: 'Écouter le terrain',
            description:
                'Nous recueillons la parole de vos équipes avant toute conclusion, parce que ce sont elles qui connaissent vraiment le quotidien.',
            icon: 'Ear',
        },
        {
            title: 'Mesurer objectivement',
            description:
                'Chaque constat est vérifié par des données concrètes — temps passé, coûts, fréquence — pas par des impressions.',
            icon: 'BarChart3',
        },
        {
            title: 'Prioriser par impact',
            description:
                "Un plan resserré sur les chantiers qui rapportent le plus, plutôt qu’une liste de recommandations impossible à traiter.",
            icon: 'Target',
        },
        {
            title: 'Restituer en toute transparence',
            description:
                'Vous recevez une restitution claire et sans jargon, que vous pouvez porter vous-même en interne.',
            icon: 'ShieldCheck',
        },
    ],
    audiences: [
        {
            title: 'Dirigeants de PME',
            description:
                "Pour obtenir une vue d’ensemble objective avant d’engager un budget, et décider sur des faits plutôt que des impressions.",
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Directions opérationnelles',
            description:
                'Pour objectiver le temps perdu dans les tâches du quotidien et défendre les bons chantiers auprès de la direction.',
            icon: 'ClipboardList',
        },
        {
            title: 'Entreprises en croissance',
            description:
                "Pour structurer vos processus avant qu’ils ne craquent, et absorber la charge sans embaucher dans l’urgence.",
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
    deepDive: {
        eyebrow: 'Le Déroulé Complet',
        title: 'Notre méthode d’audit, étape par étape',
        intro:
            'Semaine par semaine, voici précisément ce qui se passe pendant votre audit — ce que nous observons, ce que nous mesurons, et ce que vous recevez à chaque étape.',
        chapters: [
            {
                id: 'audit-immersion',
                title: 'Immersion & écoute terrain',
                subtitle: 'Semaine 1 — avec les équipes concernées',
                content: [
                    {
                        title: 'Ce que nous écoutons',
                        items: [
                            'Des entretiens individuels avec les collaborateurs qui vivent les processus au quotidien',
                            'Les irritants remontés sans filtre hiérarchique',
                            "L’historique des solutions déjà tentées, et pourquoi elles n’ont pas tenu",
                        ],
                    },
                    {
                        title: 'Ce que nous observons',
                        items: [
                            'Une journée type suivie sur le terrain, poste par poste',
                            'Les contournements informels que les équipes ont inventés pour tenir',
                            'Les points de friction entre services',
                        ],
                    },
                ],
            },
            {
                id: 'audit-cartographie',
                title: 'Cartographie de vos processus',
                subtitle: 'Semaine 1-2 — vue d’ensemble de votre activité',
                content: [
                    {
                        title: 'Ce que nous cartographions',
                        items: [
                            'Le parcours complet de chaque processus clé, de bout en bout',
                            'Les outils et systèmes mobilisés à chaque étape',
                            'Les moments où l’information change de main, entre humains et outils',
                        ],
                    },
                    {
                        title: 'Ce que vous recevez',
                        items: [
                            'Un schéma clair et partageable de vos processus actuels',
                            'Un inventaire de vos outils, licences et coûts associés',
                        ],
                    },
                ],
            },
            {
                id: 'audit-analyse',
                title: 'Analyse & chiffrage des pertes',
                subtitle: 'Semaine 2 — traduire les constats en chiffres',
                content: [
                    {
                        title: 'Ce que nous mesurons',
                        items: [
                            'Le temps passé sur les tâches répétitives ou à faible valeur',
                            'Le coût estimé de ces pertes, ramené à l’échelle de l’année',
                            'L’écart entre la charge réelle et la charge perçue par chacun',
                        ],
                    },
                    {
                        title: 'Ce que nous croisons',
                        items: [
                            'Les constats terrain avec les données déjà disponibles chez vous',
                            'Les priorités métier avec la faisabilité budgétaire et technique',
                        ],
                    },
                ],
            },
            {
                id: 'audit-restitution',
                title: 'Restitution partagée',
                subtitle: '1 atelier — avec décideurs et équipes concernées',
                content: [
                    {
                        title: 'Comment se déroule l’atelier',
                        items: [
                            'Une présentation des constats en langage clair, sans jargon technique',
                            'Un temps d’échange pour challenger et affiner les priorités ensemble',
                        ],
                    },
                    {
                        title: 'Ce que vous recevez',
                        items: [
                            'Un support de restitution que vous pouvez rediffuser en interne',
                            'Une synthèse chiffrée, chantier par chantier',
                        ],
                    },
                ],
            },
            {
                id: 'audit-plan-action',
                title: 'Plan d’action & suites',
                subtitle: 'À l’issue de l’audit — à votre rythme',
                content: [
                    {
                        title: 'Ce que contient le plan',
                        items: [
                            '3 à 5 chantiers classés par impact et par effort',
                            'Pour chaque chantier : gain estimé, budget indicatif, délai de mise en œuvre',
                        ],
                    },
                    {
                        title: 'Les suites possibles',
                        items: [
                            'Un accompagnement à la carte sur les chantiers que vous choisissez',
                            'Une totale liberté : le plan reste utilisable avec ou sans nous',
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
    ctaTitle: 'Et si on regardait ensemble ?',
    ctaText:
        "Un premier échange suffit pour cadrer le périmètre de l’audit et vérifier qu’il vous sera vraiment utile.",
    ctaLabel: 'Planifier un échange',
    ctaFootnote: 'Premier échange sans engagement.',
};
