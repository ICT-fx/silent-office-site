import type { SolutionData } from './types';

// NOTE : contenu placeholder (phase 1) — sera réécrit en phase 2.
// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const audit: SolutionData = {
    id: 'audit',
    slug: 'audit',
    title: 'Audit',
    promise: 'Transformez vos contraintes en opportunités.',
    shortDescription:
        "Un état des lieux mené avec vous, et un plan d'action clair et priorisé.",
    gains: [
        {
            scenario: 'Vos processus clés cartographiés en deux semaines',
            label: 'Une vision claire, rapidement',
        },
        {
            scenario: 'Les heures perdues chaque semaine identifiées et chiffrées',
            label: 'Des priorités évidentes',
        },
        {
            scenario: "Un plan d'action priorisé, prêt à être lancé",
            label: 'Une feuille de route concrète',
        },
    ],
    useCases: [
        {
            title: 'Une PME dont les équipes croulent sous les tâches administratives',
            before:
                "Chacun compense à sa manière, personne n'a de vue d'ensemble sur le temps réellement perdu.",
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
    ],
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
            description: "Nous construisons avec vous un plan d'action clair et priorisé.",
            duration: '1 atelier',
        },
    ],
};
