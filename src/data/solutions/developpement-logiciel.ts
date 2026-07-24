import type { SolutionData } from './types';

// NOTE : contenu placeholder (phase 1) — sera réécrit en phase 2.
// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const developpementLogiciel: SolutionData = {
    id: 'developpement-logiciel',
    slug: 'developpement-logiciel',
    title: 'Développement logiciel',
    promise: 'Le bon outil, rien de plus.',
    shortDescription:
        'Des outils métier sur mesure, sans licences superflues.',
    gains: [
        {
            scenario: "Un outil qui épouse votre façon de travailler, pas l'inverse",
            label: 'Adopté dès le premier jour',
        },
        {
            scenario: 'Des licences logicielles inutiles supprimées',
            label: 'Des coûts fixes en moins',
        },
        {
            scenario: 'Fini les fichiers partagés fragiles qui cassent',
            label: 'Une donnée fiable et centralisée',
        },
    ],
    useCases: [
        {
            title: 'Remplacer le tableur devenu ingérable',
            before:
                "Toute l'activité repose sur un fichier partagé que plus personne n'ose modifier.",
            setup:
                'Un outil simple, sur mesure, qui reprend vos données et vos règles métier.',
            result:
                'Plusieurs personnes travaillent en même temps, sans conflit ni perte de données.',
        },
        {
            title: 'Un portail pour vos clients',
            before:
                'Les demandes arrivent par e-mail et téléphone, les équipes passent leur temps à répondre aux mêmes questions.',
            setup:
                'Un espace en ligne où vos clients suivent leurs dossiers en autonomie.',
            result:
                'Moins de sollicitations entrantes, et des clients mieux informés.',
        },
    ],
    steps: [
        {
            title: 'Cadrage',
            description: 'Nous définissons le périmètre juste : ce qui sert, rien de plus.',
            duration: '1 semaine',
        },
        {
            title: 'Première version',
            description: 'Nous livrons vite une version utilisable, testée avec vos équipes.',
            duration: '3 à 6 semaines',
        },
        {
            title: 'Itérations',
            description: "Nous affinons l'outil au rythme de vos retours d'usage.",
            duration: 'par cycles courts',
        },
    ],
};
