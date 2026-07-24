import type { SolutionData } from './types';

// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const developpementLogiciel: SolutionData = {
    id: 'developpement-logiciel',
    slug: 'developpement-logiciel',
    title: 'Développement logiciel',
    promise: 'Le bon outil, rien de plus.',
    shortDescription:
        'Des outils métier sur mesure, construits autour de vos process, sans licences superflues.',
    heroTagline:
        'Vous payez chaque mois des licences pour des logiciels dont vous n’utilisez que 10 % des fonctionnalités, pendant que le reste de votre activité continue de vivre dans des fichiers Excel fragiles, bricolés au fil des années. Entre l’usine à gaz surdimensionnée et le tableur qui menace de craquer, il existe une troisième voie.',
    heroTaglineStrong: 'Un outil fait pour vous, qui vous appartient.',
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
    pillars: [
        {
            title: 'Partir de vos processus',
            description:
                'Nous observons comment vos équipes travaillent réellement aujourd’hui, avant d’écrire la moindre ligne de code.',
            icon: 'Puzzle',
        },
        {
            title: 'Livrer vite une première version',
            description:
                'Une version utilisable arrive entre les mains de vos équipes en quelques semaines, pas en fin d’année.',
            icon: 'Rocket',
        },
        {
            title: 'Itérer par cycles courts',
            description:
                'Chaque retour d’usage vient affiner l’outil, sans jamais repartir de zéro.',
            icon: 'RefreshCw',
        },
        {
            title: 'Vous rendre propriétaire',
            description:
                'Le code, les données et l’outil vous appartiennent — aucun abonnement obligatoire pour continuer à vous en servir.',
            icon: 'KeyRound',
        },
    ],
    audiences: [
        {
            title: 'PME qui a grandi plus vite que ses outils',
            description:
                'Vos effectifs et votre activité ont doublé, mais vos outils sont restés ceux du début — un logiciel générique ici, un tableur là, saturés de contournements.',
            icon: 'TrendingUp',
            highlighted: true,
        },
        {
            title: 'Métiers aux processus spécifiques',
            description:
                'Votre façon de travailler ne rentre dans aucune case des logiciels standards, et vous passez plus de temps à les contourner qu’à vous en servir.',
            icon: 'Puzzle',
        },
        {
            title: 'Entreprises dépendantes d’un fichier critique',
            description:
                'Toute une partie de votre activité repose sur un fichier que personne n’ose modifier, et dont la disparition mettrait tout à l’arrêt.',
            icon: 'Database',
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
    deepDive: {
        eyebrow: 'Catalogue de projets',
        title: 'Ce qu’on construit',
        intro:
            'Cinq familles de projets reviennent le plus souvent. Vous vous reconnaîtrez sans doute dans l’une d’elles — ou dans un mélange des deux.',
        chapters: [
            {
                id: 'dev-chap1',
                title: 'Chapitre 1 — Outils de gestion interne',
                subtitle: '(Piloter votre activité avec vos propres règles)',
                content: [
                    {
                        title: '1.1 Suivi et pilotage',
                        items: [
                            'Suivi de production avec vos règles à vous, pas celles d’un progiciel générique',
                            'Tableaux de bord qui remontent l’information utile, sans ressaisie manuelle',
                            'Gestion de stock ajustée à votre organisation réelle, entrepôt par entrepôt',
                            'Suivi de dossiers ou de projets du premier contact jusqu’à la clôture',
                        ],
                    },
                    {
                        title: '1.2 Organisation d’équipe',
                        items: [
                            'Planning et affectation des tâches visibles par tous, à jour en temps réel',
                            'Historique et traçabilité des actions, consultables à tout moment',
                            'Circuits de validation adaptés à votre hiérarchie réelle, pas à un standard',
                        ],
                    },
                ],
            },
            {
                id: 'dev-chap2',
                title: 'Chapitre 2 — Portails clients & fournisseurs',
                subtitle: '(Moins d’appels, plus d’autonomie)',
                content: [
                    {
                        title: '2.1 Côté clients',
                        items: [
                            'Espace client : vos clients consultent leurs commandes sans vous appeler',
                            'Suivi de dossier en autonomie, avec statut et documents toujours à jour',
                            'Prise de rendez-vous ou de commande directement en ligne, sans échange de mails',
                            'Historique des échanges et des documents accessible à toute heure',
                        ],
                    },
                    {
                        title: '2.2 Côté fournisseurs',
                        items: [
                            'Dépôt de documents et de factures centralisé, sans boîte mail qui déborde',
                            'Suivi des commandes et des délais partagé avec vos partenaires',
                            'Accès restreint à l’information qui les concerne, rien de plus',
                        ],
                    },
                ],
            },
            {
                id: 'dev-chap3',
                title: 'Chapitre 3 — Remplacement de fichiers Excel critiques',
                subtitle: '(Le fichier que plus personne n’ose modifier)',
                content: [
                    {
                        title: '3.1 Ce qu’on reprend',
                        items: [
                            'Vos formules et vos règles de calcul, telles qu’elles fonctionnent réellement chez vous',
                            'L’historique de données existant, repris sans perte',
                            'Les usages annexes construits autour du fichier au fil des années',
                        ],
                    },
                    {
                        title: '3.2 Ce que ça change',
                        items: [
                            'Plusieurs personnes travaillent en même temps, sans écraser le travail des autres',
                            'Des droits d’accès par personne, au lieu d’un fichier ouvert à tout le monde',
                            'Une sauvegarde automatique, sans dépendre d’un classeur sur un poste local',
                            'Fini la version « finale_v3_vraiment_finale » envoyée par mail',
                        ],
                    },
                ],
            },
            {
                id: 'dev-chap4',
                title: 'Chapitre 4 — Applications métier spécifiques',
                subtitle: '(Le logiciel qui n’existe pas sur étagère)',
                content: [
                    {
                        title: '4.1 Pensé pour votre secteur',
                        items: [
                            'Un outil pensé pour un métier précis — BTP, santé, artisanat, services — que les logiciels génériques ne couvrent pas',
                            'Des calculs ou des règles propres à votre secteur, intégrés nativement',
                            'Une interface adaptée à l’usage réel : tablette sur le terrain, poste fixe au bureau',
                        ],
                    },
                    {
                        title: '4.2 Automatiser les livrables',
                        items: [
                            'Génération automatique de devis, contrats ou rapports à partir de vos données',
                            'Contrôles et alertes construits sur vos propres seuils métier',
                            'Un outil qui évolue au fil des nouveaux besoins, sans repartir de zéro',
                        ],
                    },
                ],
            },
            {
                id: 'dev-chap5',
                title: 'Chapitre 5 — Connexion entre vos outils existants',
                subtitle: '(Faire parler vos logiciels entre eux)',
                content: [
                    {
                        title: '5.1 Fin de la double saisie',
                        items: [
                            'Un logiciel de facturation qui alimente automatiquement votre comptabilité',
                            'Une fiche client mise à jour à un seul endroit, répercutée partout ailleurs',
                            'Synchronisation entre votre site, votre CRM et vos outils internes',
                        ],
                    },
                    {
                        title: '5.2 Une vue d’ensemble',
                        items: [
                            'Un tableau de bord unique qui rassemble des données venues de plusieurs logiciels',
                            'Des alertes automatiques quand une information change quelque part',
                            'Un point d’entrée commun, même si vos outils métier restent en place derrière',
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
    ctaTitle: 'Décrivez-nous l’outil qui vous manque.',
    ctaText:
        'Racontez-nous le processus qui vous ralentit ou le fichier qui vous fait peur : nous vous dirons ce qu’un outil sur mesure changerait concrètement — et si le sur-mesure ne se justifie pas, nous vous le dirons aussi.',
    ctaLabel: 'Décrire mon besoin',
    ctaFootnote: 'Premier échange sans engagement.',
};
