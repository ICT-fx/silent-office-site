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
        media: {
            kind: 'diagram',
            src: '/images/portfolio/order-entry-flow.webp',
            alt: "Schéma du flux d'automatisation de l'entrée de commande : récurrence, lecture du dossier, boucle de traitement des fichiers, puis branches de traitement des lignes et des erreurs.",
        },
    },
];

export const clientOf = (project: PortfolioProject): Client =>
    CLIENTS.find((c) => c.id === project.clientId)!;
