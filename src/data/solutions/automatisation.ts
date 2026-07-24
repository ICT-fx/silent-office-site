import type { SolutionData } from './types';

// NOTE : contenu placeholder (phase 1) — sera réécrit en phase 2.
// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const automatisation: SolutionData = {
    id: 'automatisation',
    slug: 'automatisation',
    title: 'Automatisation & Optimisation',
    promise: 'Faites plus, avec les mêmes équipes.',
    shortDescription:
        'Vos tâches répétitives prises en charge, vos équipes concentrées sur ce qui compte.',
    gains: [
        {
            scenario: 'Une facture traitée en 30 secondes au lieu de 5 minutes',
            label: 'Du temps rendu à vos équipes',
        },
        {
            scenario: 'Zéro ressaisie entre vos outils',
            label: "Moins d'erreurs, moins de reprises",
        },
        {
            scenario: 'Des relances qui partent toutes seules, au bon moment',
            label: 'Une trésorerie mieux tenue',
        },
    ],
    useCases: [
        {
            title: 'La saisie des factures fournisseurs',
            before:
                'Chaque facture reçue par e-mail est ressaisie à la main dans la comptabilité.',
            setup:
                'Un circuit qui lit les factures entrantes et les enregistre automatiquement, avec validation humaine sur les cas particuliers.',
            result:
                "Des heures de saisie récupérées chaque semaine, et moins d'erreurs à corriger.",
        },
        {
            title: 'Les relances clients',
            before:
                "Les relances partent en retard, quand quelqu'un a le temps d'y penser.",
            setup:
                'Des relances automatiques, personnalisées et espacées selon vos règles.',
            result:
                'Des paiements encaissés plus tôt, sans y consacrer une minute de plus.',
        },
    ],
    steps: [
        {
            title: 'Repérage',
            description: 'Nous choisissons ensemble le processus au meilleur retour sur investissement.',
            duration: '1 semaine',
        },
        {
            title: 'Mise en place',
            description: 'Nous construisons et testons le circuit avec vos équipes.',
            duration: '2 à 4 semaines',
        },
        {
            title: 'Suivi',
            description: "Nous mesurons les gains et ajustons jusqu'à ce que ça tourne tout seul.",
            duration: 'en continu',
        },
    ],
};
