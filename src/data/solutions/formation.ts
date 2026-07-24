import type { SolutionData } from './types';

// Contenu réécrit (phase 2) — angle anti-gadget : l'IA formée sur les vrais
// process quotidiens des équipes, jamais sur des démonstrations ou des usages superflus.
// `id`, `slug`, `title` et `promise` restent verbatim (spec validée).

export const formation: SolutionData = {
    id: 'formation',
    slug: 'formation',
    title: 'Formation & Transformation',
    promise: "L'IA qui fait vraiment gagner du temps.",
    shortDescription:
        "Vos équipes formées à utiliser l’IA sur leurs vraies tâches, pas sur des démonstrations.",
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    heroTagline:
        "Les outils évoluent plus vite que les habitudes. Sans accompagnement, chacun bricole dans son coin — avec les risques qui vont avec.",
    heroTaglineStrong: 'Prenez les devants.',
    gains: [
        {
            scenario:
                'Un compte-rendu de réunion rédigé en 2 minutes au lieu de 30, une synthèse de dossier obtenue en quelques secondes.',
            label: 'Des heures rendues à vos équipes chaque semaine',
        },
        {
            scenario:
                "Un cadre simple sur ce qui peut être confié à l’IA et ce qui ne doit jamais l’être, appliqué par tous sans exception.",
            label: 'Une adoption sans risque pour vos données',
        },
        {
            scenario:
                "Des équipes qui utilisent encore ces réflexes six mois après la formation, sans repasser à l’ancienne méthode.",
            label: 'Un savoir-faire qui reste dans l’entreprise',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    pillars: [
        {
            title: 'Former sur vos vraies tâches',
            description:
                "Vos mails, vos documents, vos dossiers : jamais d’exemples génériques déconnectés de votre quotidien.",
            icon: 'Target',
        },
        {
            title: 'Un cadre clair et partagé',
            description:
                "Ce qui peut être confié à l’IA, ce qui ne doit jamais l’être, et les réflexes appliqués par tous.",
            icon: 'ShieldCheck',
        },
        {
            title: 'Des réflexes qui durent',
            description:
                'Une mise en pratique accompagnée sur plusieurs semaines, pour ancrer les usages au-delà de la session.',
            icon: 'RefreshCw',
        },
        {
            title: 'Chaque niveau servi',
            description:
                "Des formats adaptés aux équipes, à l’encadrement et à la direction, chacun sur ses propres enjeux.",
            icon: 'Users',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    audiences: [
        {
            title: 'Dirigeants & comités de direction',
            description:
                "Pour distinguer ce qui mérite d’être déployé dans votre entreprise de ce qui relève de l’effet de mode.",
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Équipes opérationnelles',
            description:
                "Pour gagner du temps dès la première semaine sur les tâches d’écriture, de synthèse et de recherche.",
            icon: 'Zap',
        },
        {
            title: 'Managers et encadrement',
            description:
                "Pour accompagner l’adoption dans leurs équipes et faire vivre le cadre d’usage au quotidien.",
            icon: 'Compass',
        },
    ],
    useCases: [
        {
            title: "Former une équipe qui n’a jamais utilisé l’IA",
            before:
                "Chacun a entendu parler de l’IA, personne ne sait par où commencer ni ce qu’elle peut vraiment changer à son poste.",
            setup:
                'Un atelier construit uniquement sur les tâches réelles de l’équipe — leurs mails, leurs comptes-rendus, leurs documents types — sans passer par des exemples génériques.',
            result:
                'Chaque participant repart avec deux ou trois usages précis, déjà testés sur ses propres dossiers, prêts à réutiliser dès le lendemain.',
        },
        {
            title: 'Cadrer des usages déjà installés',
            before:
                'Des outils utilisés en ordre dispersé selon les collaborateurs, sans règle commune, avec parfois des données sensibles collées dans des outils grand public.',
            setup:
                "Un cadre écrit et discuté avec les équipes : ce qui est autorisé, ce qui ne l’est jamais, et les bons réflexes à garder en toutes circonstances.",
            result:
                'Les usages qui font gagner du temps sont conservés et généralisés, les pratiques à risque disparaissent, tout le monde applique la même règle.',
        },
        {
            title: 'Donner à un comité de direction une vision claire',
            before:
                "Les dirigeants entendent parler d’IA partout mais ne savent pas ce qui, concrètement, mérite d’être mis en place dans leur entreprise.",
            setup:
                "Une session dédiée sur les décisions et process propres à la direction : préparation de comités, reporting, veille sectorielle — rien d’autre.",
            result:
                "Un plan d’usages priorisés, limité à ce qui fait vraiment gagner du temps ou de la fiabilité, le reste étant explicitement écarté.",
        },
    ],
    // --- PLACEHOLDER Phase A — chapitres minimaux, à réécrire en Phase B ---
    deepDive: {
        eyebrow: 'Le Programme en Détail',
        title: 'Ce que vos équipes apprendront',
        intro:
            'Un aperçu du parcours, ajusté à votre contexte lors du diagnostic initial.',
        chapters: [
            {
                id: 'formation-module1',
                title: "Module 1 — Comprendre ce que l’IA change",
                subtitle: '(Sans jargon ni promesses exagérées)',
                content: [
                    {
                        title: '1.1 Ce que ces outils savent faire',
                        items: [
                            'Écrire, résumer, reformuler, organiser',
                            "Ce qu’ils font bien et ce qu’ils font mal",
                        ],
                    },
                    {
                        title: '1.2 Les limites à connaître',
                        items: [
                            'Les erreurs plausibles et comment les repérer',
                            'Les données à ne jamais partager',
                        ],
                    },
                ],
            },
            {
                id: 'formation-module2',
                title: 'Module 2 — Appliquer sur votre quotidien',
                subtitle: '(Vos documents, vos cas réels)',
                content: [
                    {
                        title: '2.1 Ateliers sur vos tâches',
                        items: [
                            'Comptes-rendus, courriers, synthèses de dossiers',
                            'Chacun travaille sur ses propres exemples',
                        ],
                    },
                    {
                        title: '2.2 Construire vos réflexes',
                        items: [
                            'Deux ou trois usages précis par personne',
                            "Un cadre d’usage écrit et partagé",
                        ],
                    },
                ],
            },
        ],
    },
    steps: [
        {
            title: 'Diagnostic des usages',
            description:
                "Nous observons les tâches réelles de vos équipes et repérons où l’IA fera vraiment gagner du temps — et où elle n’a rien à faire.",
            duration: '1 semaine',
        },
        {
            title: 'Ateliers pratiques',
            description:
                'Nous formons chaque équipe directement sur ses documents et ses cas, avec des exercices appliqués plutôt que des présentations.',
            duration: '2 à 3 sessions',
        },
        {
            title: 'Mise en pratique accompagnée',
            description:
                "Vos équipes utilisent les usages appris sur leurs dossiers en cours, avec un point de contrôle pour lever les blocages rencontrés.",
            duration: '2 à 3 semaines',
        },
        {
            title: 'Bilan et ancrage',
            description:
                'Nous vérifions ce qui est réellement resté en usage et consolidons les pratiques qui ont fait leurs preuves.',
            duration: '1 mois après la formation',
        },
    ],
    // --- PLACEHOLDER Phase A — à réécrire en Phase B ---
    ctaTitle: 'Et si vos équipes gagnaient des heures dès la semaine prochaine ?',
    ctaText:
        'Parlons de vos équipes et de leurs tâches : nous construirons un parcours qui leur ressemble.',
    ctaLabel: 'Construire votre parcours',
    ctaFootnote: 'Formation éligible aux budgets OPCO sous conditions.',
};
