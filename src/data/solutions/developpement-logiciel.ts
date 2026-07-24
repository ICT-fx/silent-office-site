import type { SolutionData } from './types';

// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const developpementLogiciel: SolutionData = {
    id: 'developpement-logiciel',
    slug: 'developpement-logiciel',
    title: 'Développement logiciel',
    promise: 'Le bon outil, rien de plus.',
    shortDescription:
        'Des outils métier sur mesure, construits autour de vos process, sans licences superflues.',
    gains: [
        {
            scenario:
                "Une tâche répétée vingt fois par jour à la main devient un outil qui la fait en un clic",
            label: 'Des heures rendues chaque semaine à vos équipes',
        },
        {
            scenario:
                "Un outil sur mesure qui remplace trois ou quatre abonnements payés pour une poignée de fonctionnalités utilisées",
            label: 'Des coûts fixes en moins, chaque mois',
        },
        {
            scenario:
                "Fini le fichier partagé qui plante ou se contredit entre deux versions la veille d’une échéance",
            label: 'Une donnée fiable, centralisée, accessible à tous',
        },
    ],
    useCases: [
        {
            title: 'Remplacer le tableur devenu ingérable',
            before:
                "Toute l’activité repose sur un fichier partagé que plus personne n’ose modifier, avec des formules cassées et des versions qui se contredisent.",
            setup:
                'Un outil simple, sur mesure, qui reprend vos données et vos règles métier telles qu’elles fonctionnent réellement chez vous.',
            result:
                'Plusieurs personnes travaillent en même temps, sans conflit ni perte de données, et le fichier fragile disparaît.',
        },
        {
            title: 'Un portail pour vos clients',
            before:
                'Les demandes arrivent par e-mail et téléphone, les équipes passent leur temps à répondre aux mêmes questions sur un dossier ou un statut.',
            setup:
                'Un espace en ligne où vos clients suivent leurs dossiers, documents et échéances en autonomie, à toute heure.',
            result:
                'Moins de sollicitations entrantes à traiter à la main, et des clients mieux informés sans effort supplémentaire.',
        },
        {
            title: 'Un outil interne pour piloter une activité qui vit dans la tête de deux personnes',
            before:
                "Le suivi des stocks, des plannings ou des dossiers repose sur la mémoire, des post-it et des messages épars : la moindre absence bloque tout.",
            setup:
                "Un outil interne qui centralise les informations utiles et automatise les tâches répétitives, pensé pour l’usage réel de vos équipes.",
            result:
                "Toute l’équipe accède à la même information, à jour, et l’activité ne dépend plus d’une seule personne indisponible.",
        },
    ],
    steps: [
        {
            title: 'Cadrage',
            description:
                'Nous observons vos process réels et définissons le périmètre juste : ce qui sert au quotidien, rien de plus.',
            duration: '1 semaine',
        },
        {
            title: 'Première version',
            description: 'Nous livrons vite une version utilisable, testée avec vos équipes sur de vrais cas.',
            duration: '3 à 6 semaines',
        },
        {
            title: 'Itérations',
            description: "Nous affinons l’outil au rythme de vos retours d’usage, sans repartir de zéro.",
            duration: 'par cycles courts',
        },
        {
            title: 'Un outil qui vous appartient',
            description:
                "L’outil reste le vôtre : pas d’abonnement obligatoire pour continuer à l’utiliser, et il évolue avec votre activité.",
            duration: 'dans la durée',
        },
    ],
};
