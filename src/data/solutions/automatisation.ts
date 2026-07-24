import type { SolutionData } from './types';

// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const automatisation: SolutionData = {
    id: 'automatisation',
    slug: 'automatisation',
    title: 'Automatisation & Optimisation',
    promise: 'Faites plus, avec les mêmes équipes.',
    shortDescription:
        "N'importe quel processus lent ou répétitif, simplifié puis pris en charge, pour que vos équipes se recentrent sur ce qui compte.",
    gains: [
        {
            scenario: 'Une facture traitée en 30 secondes au lieu de 5 minutes',
            label: 'Du temps rendu à vos équipes',
        },
        {
            scenario: "Une commande enregistrée une seule fois, sans ressaisie du site à la logistique",
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
                'Chaque facture reçue par e-mail est ressaisie à la main dans la comptabilité, une par une.',
            setup:
                'Un circuit qui capte les factures dès leur réception et les enregistre directement dans votre outil, avec un contrôle humain sur les cas particuliers.',
            result:
                'Des heures de saisie récupérées chaque semaine, et des chiffres fiables sans repasser derrière.',
        },
        {
            title: 'Le traitement des commandes',
            before:
                "Une commande passe par plusieurs outils avant d'arriver en préparation, avec une ressaisie à chaque étape.",
            setup:
                "Une chaîne qui fait circuler l'information automatiquement d'un outil à l'autre, sans intervention manuelle entre les étapes.",
            result:
                'Des commandes qui partent plus vite, sans erreur de référence ni de quantité.',
        },
        {
            title: 'Les relances clients',
            before:
                "Les relances partent en retard, quand quelqu'un a le temps d'y penser — ou pas du tout.",
            setup:
                'Des relances automatiques, personnalisées et espacées selon vos règles, déclenchées au bon moment.',
            result:
                "Des paiements encaissés plus tôt, sans y consacrer une minute de plus. Le même principe s'applique à n'importe quelle tâche répétitive de votre activité.",
        },
    ],
    steps: [
        {
            title: 'Diagnostic',
            description:
                'Nous regardons vos processus avec vous et identifions celui qui offre le meilleur gain pour le moins d\'effort.',
            duration: '1 semaine',
        },
        {
            title: 'Simplification',
            description:
                "Avant d'automatiser, nous simplifions le processus lui-même : moins d'étapes, moins d'outils, moins de points de blocage.",
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
            description: "Nous mesurons les gains et ajustons jusqu'à ce que ça tourne tout seul.",
            duration: 'en continu',
        },
    ],
};
