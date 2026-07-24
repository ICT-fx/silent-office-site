import type { SolutionData } from './types';

export const audit: SolutionData = {
    id: 'audit',
    slug: 'audit',
    title: 'Audit',
    promise: 'Transformez vos contraintes en opportunités.',
    shortDescription:
        "Un état des lieux mené avec vous, et un plan d’action clair, priorisé par impact.",
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
};
