/**
 * Réalisations client — source unique du portfolio.
 *
 * Les intitulés de projet et les secteurs sont volontairement en anglais :
 * c'est la langue des livrables présentés ici.
 *
 * Pour ajouter une réalisation : une entrée dans PROJECTS, plus le client dans
 * CLIENTS s'il est nouveau. Le bandeau d'accueil et la page /portfolio se
 * recomposent tout seuls.
 */

export type ProjectMedia =
    | { kind: 'stack'; shots: string[] }
    | { kind: 'video'; sources: string[]; poster: string }
    /**
     * Visuel unique très haut (schéma de flux, arbre de décision) : il est
     * affiché entier, jamais rogné, contrairement aux captures d'écran.
     */
    | { kind: 'diagram'; src: string; alt: string }
    /** Projet livré dont on n'a pas encore de visuel publiable. */
    | { kind: 'none' };

export type Client =
    | {
          id: string;
          name: string;
          anonymous?: false;
          logo: string;
          /** Hauteur du logo dans le bandeau : les marques n'ont pas le même rapport. */
          logoClass: string;
      }
    /**
     * Client qui ne souhaite pas apparaître nommément : ni logo ni nom, nulle
     * part. Seul le secteur du projet (sa `category`) le situe.
     */
    | { id: string; name: string; anonymous: true };

export type PortfolioProject = {
    id: string;
    /** Intitulé du livrable, en anglais. */
    title: string;
    /** Secteur du client, en anglais. */
    category: string;
    clientId: string;
    media: ProjectMedia;
    /**
     * Une phrase : ce que c'est. En français, contrairement au titre.
     * C'est le seul texte qu'un moteur génératif a des chances de citer tel
     * quel, il doit donc tenir debout hors de la page.
     */
    summary: string;
    /** Le besoin tel qu'il se pose côté client, avant l'outil. */
    context: string;
    /**
     * Ce qui a été construit, concrètement.
     *
     * Décrit le livrable, jamais son effet chez le client : aucun résultat
     * chiffré n'est mesuré ni publiable (`PRODUCT.md`). Ce qui est décrit ici
     * doit être visible dans les captures ou le schéma associés.
     */
    delivered: string[];
};

export const CLIENTS: Client[] = [
    {
        id: 'pharma',
        name: 'Client confidentiel',
        anonymous: true,
    },
    {
        id: 'telcash',
        name: 'TEL and CASH',
        logo: '/images/portfolio/telcash-logo.png',
        // Logo très allongé : à hauteur égale il écraserait l'autre.
        logoClass: 'h-12 md:h-16',
    },
];

/** Les clients qui acceptent d'être cités : seuls eux figurent dans le bandeau d'accueil. */
export type NamedClient = Extract<Client, { anonymous?: false }>;
export const NAMED_CLIENTS: NamedClient[] = CLIENTS.filter((c): c is NamedClient => !c.anonymous);

export const PROJECTS: PortfolioProject[] = [
    {
        id: 'supply-chain-dashboard',
        title: 'Supply Chain Dashboard',
        category: 'Pharmaceutical industry',
        clientId: 'pharma',
        summary:
            "Un poste de pilotage unique pour une chaîne d'approvisionnement pharmaceutique répartie sur plusieurs sites et une trentaine d'entités.",
        context:
            "L'activité, la production, les stocks et le transport vivaient dans des extractions séparées. Rapprocher un coût d'acheminement d'un volume expédié, ou une valeur de stock d'un risque de péremption, demandait un travail manuel à refaire à chaque question.",
        delivered: [
            "Six vues (synthèse, activité, production, stocks, transport, détail produit) lisant le même jeu de données, avec des filtres croisés : exercice, groupe, entité, famille, produit, zone, canal, client.",
            "Comparaison systématique à l'exercice précédent et projection d'atterrissage sur chaque indicateur.",
            "Production suivie en budget, plan et réalisé, sous-traitance comprise, avec l'écart au plan par sous-traitant.",
            "Stocks décomposés par nature (produits finis, en-cours, substances actives, matières premières, conditionnement), avec couverture en mois et part à risque de péremption.",
            "Transport ventilé par mode (air, express, route, mer) et par zone, jusqu'au coût moyen par expédition.",
            "Export des tableaux à chaque niveau, pour reprendre l'analyse hors de l'outil.",
        ],
        media: {
            kind: 'stack',
            shots: [
                '/images/portfolio/supply-chain-01.jpg',
                '/images/portfolio/supply-chain-02.jpg',
                '/images/portfolio/supply-chain-03.jpg',
                '/images/portfolio/supply-chain-04.jpg',
            ],
        },
    },
    {
        id: 'ecommerce-website',
        title: 'E-commerce Website',
        category: 'Trading & Logistics',
        clientId: 'telcash',
        summary:
            "La boutique en ligne d'un revendeur de smartphones reconditionnés, du catalogue au tunnel d'achat.",
        context:
            "Vendre du reconditionné se joue sur la confiance : l'acheteur doit comprendre l'état réel de l'appareil, la garantie et le service après-vente avant de sortir sa carte. Le site devait porter cette réassurance sans alourdir le parcours.",
        delivered: [
            "Catalogue structuré par gamme et par accessoire, avec recherche et fiches produit détaillées.",
            "Les engagements (état de la batterie, certification, garantie 24 mois, délai de livraison) remontés au premier écran plutôt que relégués en bas de page.",
            "Compte client, panier et tunnel de commande complets.",
            "Identité visuelle et rédaction des pages, dans la continuité de la marque.",
        ],
        media: {
            kind: 'video',
            sources: ['/videos/telcash.webm', '/videos/telcash.mp4'],
            poster: '/images/portfolio/telcash-poster.jpg',
        },
    },
    {
        id: 'order-entry-automation',
        title: 'Order Entry Automation',
        category: 'Pharmaceutical industry',
        clientId: 'pharma',
        summary:
            "La saisie des commandes clients prise en charge de bout en bout, avec sa boucle de contrôle et ses trois issues explicites.",
        context:
            "Les commandes arrivaient en fichiers à ouvrir un par un et à ressaisir ligne par ligne. Une erreur de saisie ne se découvrait qu'en aval, une fois la commande déjà engagée.",
        delivered: [
            "Un déclenchement récurrent qui relève les nouveaux fichiers et les traite un par un, sans intervention.",
            "Trois issues explicites par ligne : traitée, à revoir, en erreur. Chacune a son dossier, personne ne pousse une ligne douteuse à l'aveugle.",
            "Rapport, journal et notification de l'équipe à chaque exécution, y compris lorsque tout s'est bien passé.",
            "Versionnement et sauvegarde avant écriture, pour pouvoir revenir en arrière.",
            "Les exceptions restent à l'humain : l'automatisation exécute, elle n'arbitre pas.",
        ],
        media: {
            kind: 'diagram',
            src: '/images/portfolio/order-entry-flow.webp',
            alt: "Schéma du flux d'automatisation de l'entrée de commande : récurrence, lecture du dossier, boucle de traitement des fichiers, puis branches de traitement des lignes et des erreurs.",
        },
    },
];

export const clientOf = (project: PortfolioProject): Client =>
    CLIENTS.find((c) => c.id === project.clientId)!;
