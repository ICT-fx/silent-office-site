import type { SolutionData } from './types';

// NOTE : contenu placeholder (phase 1) — sera réécrit en phase 2.
// Seuls `title`, `slug`, `promise` et `subPromise` sont définitifs (verbatim spec).

export const dataBi: SolutionData = {
    id: 'data-bi',
    slug: 'data-bi',
    title: 'Data & Business Intelligence',
    promise: 'Les IA se trompent. Les chiffres non.',
    subPromise: 'Chaque décision mérite des données fiables.',
    shortDescription:
        'Des chiffres fiables et à jour pour décider vite et bien.',
    gains: [
        {
            scenario: 'Votre reporting mensuel prêt en quelques minutes au lieu de deux jours',
            label: 'Un pilotage sans effort',
        },
        {
            scenario: 'Vos indicateurs clés à jour chaque matin, sans intervention',
            label: 'Des décisions prises sur du réel',
        },
        {
            scenario: "Une seule source de vérité pour toute l'entreprise",
            label: 'Fini les chiffres qui se contredisent',
        },
    ],
    useCases: [
        {
            title: 'Le reporting mensuel de direction',
            before:
                'Deux jours par mois à consolider des exports dans des tableurs, avec des écarts inexpliqués.',
            setup:
                'Un tableau de bord alimenté automatiquement par vos outils existants.',
            result:
                'Les bons chiffres, disponibles en permanence, et deux jours rendus à chaque cycle.',
        },
        {
            title: 'Le suivi commercial',
            before:
                'Chaque commercial tient son propre fichier, la direction découvre les chiffres en fin de mois.',
            setup:
                'Un suivi partagé, mis à jour en continu, avec des alertes sur les signaux importants.',
            result:
                "Des arbitrages pris en cours de mois, quand il est encore temps d'agir.",
        },
    ],
    steps: [
        {
            title: 'Cadrage',
            description: 'Nous définissons ensemble les indicateurs qui comptent vraiment pour vous.',
            duration: '1 semaine',
        },
        {
            title: 'Connexion',
            description: 'Nous branchons vos sources de données et fiabilisons les chiffres.',
            duration: '1 à 2 semaines',
        },
        {
            title: 'Tableaux de bord',
            description: 'Nous livrons vos tableaux de bord et formons vos équipes à les exploiter.',
            duration: '1 semaine',
        },
    ],
};
