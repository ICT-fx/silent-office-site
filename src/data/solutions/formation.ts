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
    heroImage: '/images/expertises/formation.jpg',
    heroImageAlt:
        "Un formateur anime une session d'acculturation à l'IA devant une salle de collaborateurs équipés de leurs ordinateurs.",
    heroTagline:
        "Les technologies évoluent en continu. L’absence de vision claire entraîne des risques, des pertes financières et une inefficacité opérationnelle.",
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
    pillars: [
        {
            title: 'Comprendre les enjeux',
            description:
                "Démystifier l’intelligence artificielle et la donnée pour sortir des fantasmes et saisir les opportunités réelles.",
            icon: 'Brain',
        },
        {
            title: 'Décider intelligemment',
            description:
                'Prioriser les investissements rentables et éviter les projets « gadgets » sans retour sur investissement.',
            icon: 'Lightbulb',
        },
        {
            title: 'Automatiser efficacement',
            description:
                "Déployer les bonnes technologies — automatisation de processus, intelligence artificielle, agents intelligents — au bon endroit dans votre chaîne de valeur.",
            icon: 'Cpu',
        },
        {
            title: 'Sécuriser durablement',
            description:
                "Maîtriser la gouvernance des données, la conformité et les risques liés à l’intelligence artificielle.",
            icon: 'ShieldCheck',
        },
    ],
    audiences: [
        {
            title: 'Dirigeants & Comex',
            description:
                'Pour aligner la vision stratégique, comprendre les impacts sur le modèle économique et définir les indicateurs de succès.',
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Équipes IT & Tech',
            description:
                "Pour maîtriser l’architecture, le déploiement technique et l’intégration des nouvelles solutions d’intelligence artificielle dans l’écosystème existant.",
            icon: 'BarChart3',
        },
        {
            title: 'Transformation',
            description:
                "Pour les organisations en pleine mutation, afin de réussir l’adoption, gérer le changement culturel et vaincre les résistances.",
            icon: 'Zap',
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
    deepDive: {
        eyebrow: 'Syllabus complet',
        title: 'Programme de formation détaillé',
        intro:
            'Un cursus intensif alliant théorie stratégique et mise en pratique technique.',
        chapters: [
            {
                id: 'formation-chap1',
                title: 'Chapitre 1 — Acculturation aux enjeux de l’intelligence artificielle et de l’automatisation',
                subtitle: '(Dirigeants & équipes)',
                content: [
                    {
                        title: '1.1 Introduction à l’intelligence artificielle',
                        items: [
                            'Intelligence artificielle, apprentissage automatique, modèles de langage : ce qui existe vraiment aujourd’hui',
                            'Ce que l’IA fait vs ce qu’elle ne fait pas',
                            'Différence entre IA, automatisation et digitalisation',
                        ],
                    },
                    {
                        title: '1.2 Pourquoi l’IA change la concurrence',
                        items: [
                            'Accélération continue (24/7)',
                            'Avantage compétitif vs décrochage',
                            'IA comme levier de coûts, temps, stabilité, qualité',
                        ],
                    },
                ],
            },
            {
                id: 'formation-chap2',
                title: 'Chapitre 2 — Panorama des technologies actuelles',
                subtitle: '(Ce qui est possible aujourd’hui, concrètement)',
                content: [
                    {
                        title: '2.1 Automatisation intelligente',
                        items: [
                            'Automatisation de processus classique vs automatisation de processus augmentée par l’IA',
                            'Automatisations déterministes vs adaptatives',
                        ],
                    },
                    {
                        title: '2.2 Agents IA',
                        items: [
                            'Qu’est-ce qu’un agent IA',
                            'Agents décisionnels vs agents exécutants',
                            'Cas d’usage : lecture d’emails, déclenchement d’actions, orchestration',
                        ],
                    },
                    {
                        title: '2.3 Lecture automatique de documents nouvelle génération',
                        items: [
                            'Lecture automatique classique vs lecture automatique enrichie par l’IA',
                            'Extraction de données fiables à grande échelle',
                            'Cas d’usage documents, factures, contrats, emails',
                        ],
                    },
                ],
            },
            {
                id: 'formation-chap3',
                title: 'Chapitre 3 — De la vision stratégique à l’exécution',
                subtitle: '(Strategy Board)',
                content: [
                    {
                        title: '3.1 Alignement vision dirigeant / IT',
                        items: [
                            'Traduire la vision business en capacités techniques',
                            'Priorisation des automatisations à fort impact',
                        ],
                    },
                    {
                        title: '3.2 Identifier ce qui doit (ou non) être automatisé',
                        items: [
                            'Tâches répétitives',
                            'Process critiques',
                            'Zones à risque ou à forte valeur humaine',
                        ],
                    },
                    {
                        title: '3.3 Feuille de route d’automatisation',
                        items: [
                            'Gains rapides vs transformation structurelle',
                            'Retour sur investissement, coûts, gains de temps, stabilité',
                        ],
                    },
                ],
            },
            {
                id: 'formation-chap4',
                title: 'Chapitre 4 — Mise en œuvre opérationnelle',
                subtitle: '(Formation équipes IT)',
                content: [
                    {
                        title: '4.1 Comment fonctionne une automatisation concrètement',
                        items: [
                            'Architecture type',
                            'Déclencheurs, règles, exceptions',
                        ],
                    },
                    {
                        title: '4.2 Déploiement des solutions',
                        items: [
                            'Installation technique',
                            'Connexion aux systèmes existants',
                            'Tests, supervision, maintenance',
                        ],
                    },
                    {
                        title: '4.3 Industrialisation',
                        items: [
                            'Passage du prototype à la production',
                            'Scalabilité',
                            'Documentation et transmission',
                        ],
                    },
                ],
            },
            {
                id: 'formation-chap5',
                title: 'Chapitre 5 — Gouvernance, risques et sécurité',
                subtitle: '(Point clé pour les dirigeants)',
                content: [
                    {
                        title: '5.1 Risques liés aux données',
                        items: [
                            'Données envoyées sur des serveurs externes',
                            'Confidentialité et conformité',
                            'Choix cloud vs sur site',
                        ],
                    },
                    {
                        title: '5.2 Risques liés aux IA autonomes',
                        items: [
                            'IA qui agit sans validation humaine',
                            'Contrôles, garde-fous, permissions',
                            'Niveaux d’autonomie acceptables',
                        ],
                    },
                    {
                        title: '5.3 Gouvernance IA & automatisation',
                        items: [
                            'Qui décide quoi',
                            'Règles, audits, traçabilité',
                            'Responsabilité humaine',
                        ],
                    },
                ],
            },
            {
                id: 'formation-chap6',
                title: 'Chapitre 6 — Transformation continue',
                subtitle: '(Pourquoi ça ne s’arrête jamais)',
                content: [
                    {
                        title: '6.1 Amélioration continue',
                        items: [
                            'Optimisation des automatisations existantes',
                            'Adaptation aux nouvelles technologies',
                        ],
                    },
                    {
                        title: '6.2 Veille technologique & concurrentielle',
                        items: [
                            'Nouveaux usages IA',
                            'Évolution des outils',
                            'Anticipation plutôt que réaction',
                        ],
                    },
                    {
                        title: '6.3 Acculturation long terme',
                        items: [
                            'Formation continue des équipes',
                            'Mise à niveau des dirigeants',
                            'Culture IA dans l’entreprise',
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
    ctaTitle: 'Prêt à sécuriser votre avenir ?',
    ctaText:
        "Ne laissez pas l’automatisation devenir une menace. Faites-en votre plus grand levier de croissance.",
    ctaLabel: 'Réserver une session stratégique',
    ctaFootnote: 'Formation éligible aux budgets OPCO sous conditions.',
};
