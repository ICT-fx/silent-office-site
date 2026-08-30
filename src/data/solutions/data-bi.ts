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
    heroImage: '/images/expertises/data-bi.jpg',
    heroImageAlt:
        "Une équipe lit sur grand écran un tableau de bord unifié qui rassemble ventes, logistique, clients et qualité.",
    heroTagline:
        'Vos chiffres existent déjà — dans votre logiciel de comptabilité, votre CRM, vos tableurs de suivi, vos outils de production. Ils sont seulement éparpillés, jamais mis en regard les uns des autres.',
    heroTaglineStrong: 'Il ne manque que le tableau de bord qui les fait parler.',
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
    pillars: [
        {
            title: 'Connecter sans tout changer',
            description:
                'Nous branchons vos outils existants — comptabilité, CRM, ventes, production — sans migration ni remplacement de vos logiciels.',
            icon: 'Database',
        },
        {
            title: 'Fiabiliser la source',
            description:
                'Chaque indicateur repose sur une définition unique et vérifiée, pour que deux personnes ne calculent jamais la même chose différemment.',
            icon: 'ShieldCheck',
        },
        {
            title: 'Visualiser l’essentiel',
            description:
                "Des tableaux de bord qui montrent ce qui pilote vos décisions, pas tout ce qu’il est techniquement possible d’afficher.",
            icon: 'Eye',
        },
        {
            title: 'Rendre autonome',
            description:
                'Vos équipes apprennent à lire, filtrer et faire évoluer leurs tableaux de bord sans dépendre de nous au quotidien.',
            icon: 'GraduationCap',
        },
    ],
    audiences: [
        {
            title: 'Dirigeants',
            description:
                'Une vue d’ensemble de la marge, de la trésorerie et de l’activité, actualisée chaque jour, sans attendre la clôture du mois.',
            icon: 'Users',
            highlighted: true,
        },
        {
            title: 'Directions financières',
            description:
                'Des chiffres consolidés automatiquement, pour remplacer les journées de recoupement par des rapprochements déjà faits.',
            icon: 'BarChart3',
        },
        {
            title: 'Responsables d’activité',
            description:
                'Un suivi de leur périmètre — ventes, production, projets — avec les écarts visibles avant qu’ils ne pèsent sur le résultat.',
            icon: 'TrendingUp',
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
    deepDive: {
        eyebrow: 'Le Catalogue en Détail',
        title: 'Ce que vous verrez enfin clairement — indicateurs par fonction',
        intro:
            "Un aperçu concret des vues et indicateurs que nous mettons en place, fonction par fonction. De quoi vous projeter dans votre futur tableau de bord.",
        chapters: [
            {
                id: 'data-pilotage',
                title: 'Pilotage dirigeant',
                subtitle: '(La vue d’ensemble, en un coup d’œil)',
                content: [
                    {
                        title: 'Vue d’ensemble de l’activité',
                        items: [
                            'Chiffre d’affaires du mois comparé au même mois l’an dernier, mis à jour chaque jour',
                            'Marge réelle par activité ou par client, recalculée automatiquement',
                            'Carnet de commandes et projets en cours, avec leur valeur engagée',
                        ],
                    },
                    {
                        title: 'Synthèse financière',
                        items: [
                            'Trésorerie disponible et son évolution sur les 30 derniers jours',
                            'Résultat d’exploitation estimé avant même la clôture comptable',
                            'Comparaison budget prévu / réalisé, poste par poste',
                        ],
                    },
                ],
            },
            {
                id: 'data-finance',
                title: 'Finance & trésorerie',
                subtitle: '(Anticiper plutôt que constater)',
                content: [
                    {
                        title: 'Trésorerie',
                        items: [
                            'Trésorerie projetée à 90 jours à partir des encaissements et échéances connus',
                            'Factures clients en retard, classées par ancienneté et par montant',
                            'Échéances fournisseurs à venir, regroupées par semaine',
                        ],
                    },
                    {
                        title: 'Rentabilité',
                        items: [
                            'Marge réelle par client, mise à jour chaque nuit',
                            'Coût de revient par produit ou par prestation, comparé au prix vendu',
                            'Charges fixes et variables suivies mois après mois',
                        ],
                    },
                ],
            },
            {
                id: 'data-ventes',
                title: 'Ventes & clients',
                subtitle: '(Ce qui se vend, à qui, et à quel prix)',
                content: [
                    {
                        title: 'Pipeline commercial',
                        items: [
                            'Devis en attente, classés par montant et par ancienneté',
                            'Taux de transformation des devis en commandes, par commercial ou par segment',
                            'Chiffre d’affaires par client, avec les clients en baisse signalés automatiquement',
                        ],
                    },
                    {
                        title: 'Fidélité et panier',
                        items: [
                            'Clients n’ayant pas commandé depuis plusieurs mois, repérés automatiquement',
                            'Panier moyen et son évolution par période',
                            'Répartition du chiffre d’affaires par produit, gamme ou zone géographique',
                        ],
                    },
                ],
            },
            {
                id: 'data-operations',
                title: 'Opérations & production',
                subtitle: '(Suivre le terrain sans y être)',
                content: [
                    {
                        title: 'Activité et charge',
                        items: [
                            'Taux d’occupation des équipes ou des machines, par semaine',
                            'Délai moyen de traitement d’une commande ou d’un projet, du début à la livraison',
                            'Retards et dépassements de délai, signalés dès qu’ils apparaissent',
                        ],
                    },
                    {
                        title: 'Qualité et coûts',
                        items: [
                            'Taux de non-conformité ou de retour, suivi par produit ou par ligne',
                            'Coût matière ou coût d’achat, comparé au budget prévisionnel',
                            'Stock disponible et rotation, pour anticiper les ruptures',
                        ],
                    },
                ],
            },
            {
                id: 'data-alertes',
                title: 'Alertes & anticipation',
                subtitle: '(Être prévenu avant que ça coûte cher)',
                content: [
                    {
                        title: 'Seuils et signaux',
                        items: [
                            'Une alerte dès qu’un indicateur clé sort de sa fourchette habituelle',
                            'Une notification quand une marge tombe sous un seuil défini avec vous',
                            'Un résumé hebdomadaire des écarts à surveiller, envoyé automatiquement',
                        ],
                    },
                    {
                        title: 'Anticipation',
                        items: [
                            'Des tendances calculées sur plusieurs mois pour repérer un essoufflement avant qu’il ne soit visible dans les comptes',
                            'Une comparaison automatique entre périodes, sans recalcul manuel',
                        ],
                    },
                ],
            },
        ],
    },
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
    ctaTitle: 'Quels chiffres vous manquent aujourd’hui ?',
    ctaText:
        "Décrivez-nous ce que vous aimeriez savoir en un coup d’œil — marge, trésorerie, activité, retards. Nous vous dirons quels indicateurs sont à votre portée, et lesquels ne le sont pas encore.",
    ctaLabel: 'Discuter de vos indicateurs',
    ctaFootnote: 'Premier échange sans engagement.',
};
