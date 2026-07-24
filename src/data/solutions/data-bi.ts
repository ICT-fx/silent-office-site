import type { SolutionData } from './types';

// Seuls `title`, `slug`, `promise` et `subPromise` sont définitifs (verbatim spec).

export const dataBi: SolutionData = {
    id: 'data-bi',
    slug: 'data-bi',
    title: 'Data & Business Intelligence',
    promise: 'Les IA se trompent. Les chiffres non.',
    subPromise: 'Chaque décision mérite des données fiables.',
    shortDescription:
        'Des chiffres fiables et à jour, pour décider sans deviner.',
    gains: [
        {
            scenario:
                'Votre reporting mensuel prêt en 10 minutes au lieu de deux jours passés à recouper des tableurs',
            label: 'Du temps rendu à vos équipes',
        },
        {
            scenario:
                "Votre marge, votre trésorerie et votre activité visibles chaque matin sur un même écran, sans attendre la fin du mois pour les découvrir",
            label: 'Des décisions prises à temps, pas après coup',
        },
        {
            scenario:
                "Une dérive de coûts ou une baisse d’activité repérée en quelques jours au lieu d’un trimestre, avant qu’elle ne pèse sur le résultat",
            label: 'Les problèmes coûteux détectés tôt',
        },
    ],
    useCases: [
        {
            title: 'Le tableau de bord du dirigeant',
            before:
                "Pour connaître sa marge réelle ou sa trésorerie du jour, il faut demander à trois personnes différentes et attendre leur retour.",
            setup:
                "Un tableau de bord unique qui rassemble les indicateurs qui comptent vraiment pour piloter l’entreprise : marge, trésorerie, activité.",
            result:
                "Les chiffres clés consultables à tout moment, sans solliciter personne.",
        },
        {
            title: 'Le reporting mensuel de direction',
            before:
                "Deux jours par mois à copier des exports dans des tableurs, avec des écarts qu’on n’arrive jamais vraiment à expliquer.",
            setup:
                'Un tableau de bord alimenté automatiquement par vos outils existants (comptabilité, ventes, production).',
            result:
                'Les bons chiffres, disponibles en permanence, et deux jours rendus à chaque cycle.',
        },
        {
            title: 'La consolidation de données éparpillées',
            before:
                "Les chiffres vivent dans des fichiers séparés, propres à chaque service, et se contredisent d’un tableau à l’autre.",
            setup:
                "Un espace central où toutes les données sont rassemblées et mises en cohérence, avec une seule version des chiffres pour toute l’entreprise.",
            result:
                'Fini les débats sur quel fichier a raison : tout le monde regarde les mêmes chiffres.',
        },
    ],
    steps: [
        {
            title: 'Cadrage',
            description:
                'Nous identifions avec vous les indicateurs qui pilotent réellement vos décisions, et laissons de côté ceux qui encombrent sans éclairer.',
            duration: '1 semaine',
        },
        {
            title: 'Connexion',
            description:
                'Nous branchons vos sources de données existantes et vérifions la fiabilité des chiffres avant de les afficher.',
            duration: '1 à 2 semaines',
        },
        {
            title: 'Tableaux de bord',
            description:
                'Nous livrons vos tableaux de bord et les mettons à jour automatiquement, sans ressaisie manuelle.',
            duration: '1 semaine',
        },
        {
            title: 'Formation et autonomie',
            description:
                "Nous formons vos équipes à lire et faire évoluer les tableaux de bord elles-mêmes, sans dépendre de nous au quotidien.",
            duration: '2 à 3 jours',
        },
    ],
};
