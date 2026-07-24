import type { SolutionData } from './types';

// Seuls `title`, `slug` et `promise` sont définitifs (verbatim spec).

export const automatisation: SolutionData = {
    id: 'automatisation',
    slug: 'automatisation',
    title: 'Automatisation & Optimisation',
    promise: 'Faites plus, avec les mêmes équipes.',
    shortDescription:
        "N’importe quel processus lent ou répétitif, simplifié puis pris en charge, pour que vos équipes se recentrent sur ce qui compte.",
    heroTagline:
        "Vos équipes passent des heures, chaque semaine, sur des tâches que personne n’a vraiment choisies — ressaisir, copier-coller, relancer, vérifier. Ce temps peut être rendu à ce qui compte vraiment.",
    heroTaglineStrong: 'Chaque heure répétitive est une heure récupérable.',
    gains: [
        {
            scenario: 'Une facture traitée en 30 secondes au lieu de 5 minutes',
            label: 'Du temps rendu à vos équipes',
        },
        {
            scenario: "Une commande enregistrée une seule fois, sans ressaisie du site à la logistique",
            label: "Moins d’erreurs, moins de reprises",
        },
        {
            scenario: 'Des relances qui partent toutes seules, au bon moment',
            label: 'Une trésorerie mieux tenue',
        },
    ],
    pillars: [
        {
            title: "Observer avant d’automatiser",
            description:
                'Nous regardons le processus tel qu’il est vraiment vécu par vos équipes, pas tel qu’il est décrit sur le papier.',
            icon: 'Search',
        },
        {
            title: "Simplifier d’abord",
            description:
                'Un processus compliqué automatisé reste compliqué. Nous retirons d’abord ce qui est inutile, avant de construire quoi que ce soit.',
            icon: 'Workflow',
        },
        {
            title: 'Automatiser ce qui compte',
            description:
                'Nous concentrons l’effort sur les tâches qui pèsent vraiment sur votre temps ou votre trésorerie, pas sur tout ce qui est techniquement automatisable.',
            icon: 'Zap',
        },
        {
            title: "Garder l’humain aux commandes",
            description:
                'Les cas particuliers restent entre les mains de vos équipes : la machine exécute, vos équipes décident.',
            icon: 'ShieldCheck',
        },
    ],
    audiences: [
        {
            title: 'PME sans service informatique dédié',
            description:
                "Pour automatiser sans recruter ni monter une équipe technique en interne : nous nous occupons de tout, avec les outils que vous utilisez déjà.",
            icon: 'Building2',
            highlighted: true,
        },
        {
            title: 'Services administratifs et financiers',
            description:
                'Pour se libérer des saisies, des rapprochements et des relances qui remplissent les journées sans jamais exiger de réflexion.',
            icon: 'Calculator',
        },
        {
            title: 'Directions opérationnelles',
            description:
                "Pour fiabiliser les circuits qui font tourner l’activité, et absorber plus de volume sans alourdir les équipes.",
            icon: 'Settings',
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
                "Une commande passe par plusieurs outils avant d’arriver en préparation, avec une ressaisie à chaque étape.",
            setup:
                "Une chaîne qui fait circuler l’information automatiquement d’un outil à l’autre, sans intervention manuelle entre les étapes.",
            result:
                'Des commandes qui partent plus vite, sans erreur de référence ni de quantité.',
        },
        {
            title: 'Les relances clients',
            before:
                "Les relances partent en retard, quand quelqu’un a le temps d’y penser — ou pas du tout.",
            setup:
                'Des relances automatiques, personnalisées et espacées selon vos règles, déclenchées au bon moment.',
            result:
                "Des paiements encaissés plus tôt, sans y consacrer une minute de plus. Le même principe s’applique à n’importe quelle tâche répétitive de votre activité.",
        },
    ],
    deepDive: {
        eyebrow: 'Le Catalogue',
        title: 'Catalogue — ce qu’on automatise, service par service',
        intro:
            "Un aperçu, service par service, de ce qui peut être pris en charge chez vous. Cette liste n’a rien d’exhaustif : elle illustre l’étendue du possible, quel que soit votre métier. Le seul critère qui compte, c’est la répétition — pas le nom du service.",
        chapters: [
            {
                id: 'auto-finance',
                title: 'Finance & comptabilité',
                subtitle: 'De la facture reçue à l’écriture comptée, sans ressaisie',
                content: [
                    {
                        title: 'Factures fournisseurs',
                        items: [
                            'Réception, lecture et enregistrement des factures fournisseurs, de la boîte mail à l’écriture comptable, sans saisie manuelle',
                            'Rapprochement automatique entre bon de commande, bon de livraison et facture, avec alerte sur les écarts',
                            'Circuit de validation adapté à vos seuils, avec relance des approbateurs qui traînent',
                            'Classement et archivage réglementaire des pièces, retrouvables en un clic',
                        ],
                    },
                    {
                        title: 'Facturation clients & recouvrement',
                        items: [
                            'Émission et envoi des factures clients dès qu’une commande ou une prestation est validée',
                            'Relances de factures impayées, échelonnées et personnalisées selon l’ancienneté du retard',
                            'Rapprochement bancaire automatique entre les encaissements reçus et les factures ouvertes',
                            'Tableau de trésorerie tenu à jour sans export manuel chaque semaine',
                        ],
                    },
                    {
                        title: 'Reporting & clôtures',
                        items: [
                            'Consolidation automatique des dépenses par catégorie, service ou centre de coût',
                            'Préparation des documents de clôture mensuelle, sans reconstruction manuelle des tableaux',
                            'Notes de frais collectées, contrôlées et injectées dans la comptabilité sans ressaisie',
                        ],
                    },
                ],
            },
            {
                id: 'auto-ventes',
                title: 'Ventes & administration des ventes',
                subtitle: 'Du premier contact à la commande livrée, sans perdre le fil',
                content: [
                    {
                        title: 'Prospection & devis',
                        items: [
                            'Devis générés automatiquement à partir d’un configurateur ou d’un formulaire, sans reprise manuelle',
                            'Relances de devis restés sans réponse, envoyées au bon moment, avec le bon ton',
                            'Qualification et répartition automatique des nouveaux contacts entre commerciaux, selon vos règles',
                            'Mise à jour du fichier client sans double saisie entre les outils commerciaux et administratifs',
                        ],
                    },
                    {
                        title: 'Commandes & contrats',
                        items: [
                            'Commande enregistrée une seule fois, transmise automatiquement à la logistique et à la facturation',
                            'Contrats générés à partir d’un modèle, pré-remplis avec les informations du client',
                            'Suivi automatique des signatures et relance des dossiers en attente',
                            'Alertes sur les commandes bloquées ou en retard, avant que le client ne s’en aperçoive',
                        ],
                    },
                    {
                        title: 'Pilotage commercial',
                        items: [
                            'Tableaux de suivi des ventes mis à jour automatiquement, sans export ni compilation manuelle',
                            'Calcul automatique des commissions selon vos barèmes',
                            'Rapports d’activité commerciale envoyés chaque semaine sans y penser',
                        ],
                    },
                ],
            },
            {
                id: 'auto-rh',
                title: 'Ressources humaines & administratif',
                subtitle: 'Des dossiers qui avancent seuls, du recrutement à la paie',
                content: [
                    {
                        title: 'Recrutement & intégration',
                        items: [
                            'Tri et pré-qualification automatique des candidatures reçues, selon vos critères',
                            'Planification des entretiens sans échanges d’e-mails à rallonge',
                            'Parcours d’intégration déclenché dès la signature du contrat : accès, matériel, documents',
                            'Réponses automatiques et personnalisées aux candidats non retenus',
                        ],
                    },
                    {
                        title: 'Administration du personnel',
                        items: [
                            'Collecte et vérification automatique des pièces pour les dossiers salariés',
                            'Préparation des éléments variables de paie, consolidés depuis vos différents outils',
                            'Suivi automatique des absences, congés et validations, sans tableur partagé',
                            'Échéances à ne pas manquer (visites médicales, périodes d’essai, renouvellements) signalées avant qu’il ne soit trop tard',
                        ],
                    },
                    {
                        title: 'Documents & conformité',
                        items: [
                            'Génération automatique des documents RH récurrents (attestations, avenants, courriers types)',
                            'Classement et archivage des documents salariés, retrouvables en un clic',
                        ],
                    },
                ],
            },
            {
                id: 'auto-logistique',
                title: 'Logistique & opérations',
                subtitle: 'L’information qui circule d’un outil à l’autre, sans ressaisie ni oubli',
                content: [
                    {
                        title: 'Approvisionnement & stocks',
                        items: [
                            'Commandes fournisseurs déclenchées automatiquement quand un seuil de stock est atteint',
                            'Rapprochement automatique entre commande, réception et facture',
                            'Alertes sur les ruptures ou les écarts d’inventaire, avant qu’ils ne deviennent un problème',
                            'Mise à jour des stocks synchronisée entre votre entrepôt, votre site et votre comptabilité',
                        ],
                    },
                    {
                        title: 'Préparation & expédition',
                        items: [
                            'Bons de préparation générés et transmis automatiquement dès la validation d’une commande',
                            'Étiquettes et documents de transport édités sans ressaisie des informations client',
                            'Suivi automatique des expéditions, avec notification au client sans intervention manuelle',
                        ],
                    },
                    {
                        title: 'Qualité & suivi',
                        items: [
                            'Contrôles qualité enregistrés et centralisés sans tableur ni papier',
                            'Tableaux de bord de performance logistique mis à jour automatiquement',
                        ],
                    },
                ],
            },
            {
                id: 'auto-relation-client',
                title: 'Relation client & support',
                subtitle: 'Des demandes traitées vite, sans que personne ne les laisse filer',
                content: [
                    {
                        title: 'Traitement des demandes',
                        items: [
                            'Tri et répartition automatique des messages entrants (e-mail, formulaire, chat) selon leur sujet et leur urgence',
                            'Réponses automatiques aux questions les plus fréquentes, avec bascule vers un humain pour le reste',
                            'Relances automatiques des demandes restées sans réponse au-delà d’un délai défini',
                            'Historique client centralisé et à jour, sans reconstitution manuelle avant chaque échange',
                        ],
                    },
                    {
                        title: 'Satisfaction & fidélisation',
                        items: [
                            'Enquêtes de satisfaction envoyées automatiquement après chaque livraison ou intervention',
                            'Alertes en cas de retour négatif, pour une reprise de contact rapide',
                            'Relances de fidélisation ou de réachat déclenchées au bon moment selon l’historique client',
                        ],
                    },
                ],
            },
            {
                id: 'auto-et-tout-le-reste',
                title: 'Et tout le reste',
                subtitle: 'Si c’est répétitif, c’est un candidat',
                content: [
                    {
                        title: 'Un processus qui n’est dans aucune case ci-dessus ?',
                        items: [
                            'Ce catalogue n’est qu’un aperçu : n’importe quel processus répétitif, dans n’importe quel métier, peut être observé, simplifié puis pris en charge',
                            'Un circuit propre à votre activité, qui ne ressemble à aucun exemple ci-dessus, est probablement candidat aussi',
                            'La seule question qui compte : cette tâche revient-elle souvent, sans exiger de jugement à chaque fois ?',
                            'Si la réponse est oui, elle mérite d’être regardée avec vous',
                        ],
                    },
                ],
            },
        ],
    },
    steps: [
        {
            title: 'Diagnostic',
            description:
                'Nous regardons vos processus avec vous et identifions celui qui offre le meilleur gain pour le moins d’effort.',
            duration: '1 semaine',
        },
        {
            title: 'Simplification',
            description:
                "Avant d’automatiser, nous simplifions le processus lui-même : moins d’étapes, moins d’outils, moins de points de blocage.",
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
            description: "Nous mesurons les gains et ajustons jusqu’à ce que ça tourne tout seul.",
            duration: 'en continu',
        },
    ],
    ctaTitle: 'Quelle est votre tâche la plus pénible ?',
    ctaText:
        'Décrivez-nous le processus qui vous fait perdre le plus de temps ou d’argent chaque semaine. Nous vous dirons, en toute franchise, ce qu’il est possible d’en faire.',
    ctaLabel: 'Parler de mon processus',
    ctaFootnote: 'Premier échange sans engagement, pour évaluer ensemble si ça vaut le coup.',
};
