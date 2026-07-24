import type { SolutionData } from './types';

// NOTE : contenu placeholder (phase 1) — sera réécrit en phase 2.
// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const formation: SolutionData = {
    id: 'formation',
    slug: 'formation',
    title: 'Formation & Transformation',
    promise: "L'IA qui fait vraiment gagner du temps.",
    shortDescription:
        "Vos équipes formées à utiliser l'IA là où elle sert vraiment, dans leur quotidien.",
    gains: [
        {
            scenario: 'Des heures gagnées chaque semaine sur les tâches rédactionnelles',
            label: 'Des gains dès la première semaine',
        },
        {
            scenario: 'Des usages cadrés, sans risque pour vos données',
            label: 'Une adoption sereine',
        },
        {
            scenario: "Des équipes autonomes, pas dépendantes d'un prestataire",
            label: 'Un savoir-faire qui reste chez vous',
        },
    ],
    useCases: [
        {
            title: "Former une équipe qui n'a jamais utilisé l'IA",
            before:
                "Chacun a entendu parler de l'IA, personne ne sait par où commencer ni quoi en attendre.",
            setup:
                'Des ateliers pratiques construits sur vos vraies tâches quotidiennes, pas sur des démonstrations.',
            result:
                'Chaque participant repart avec des usages concrets appliqués à son poste.',
        },
        {
            title: 'Cadrer des usages déjà installés',
            before:
                'Des outils utilisés en ordre dispersé, sans règles, avec des données sensibles en jeu.',
            setup:
                "Un cadre simple : ce qui est permis, ce qui ne l'est pas, et les bons réflexes.",
            result:
                'Des usages utiles conservés, des risques éliminés, une pratique commune.',
        },
    ],
    steps: [
        {
            title: 'Diagnostic des usages',
            description: "Nous repérons où l'IA fera vraiment gagner du temps dans votre quotidien.",
            duration: '1 semaine',
        },
        {
            title: 'Ateliers pratiques',
            description: 'Nous formons vos équipes sur leurs propres cas, pas sur des exemples génériques.',
            duration: '2 à 3 sessions',
        },
        {
            title: 'Ancrage',
            description: 'Nous suivons la mise en pratique et consolidons les acquis.',
            duration: '1 mois',
        },
    ],
};
