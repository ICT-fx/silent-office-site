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

export type Client = {
    id: string;
    name: string;
    logo: string;
    /** Hauteur du logo dans le bandeau : les marques n'ont pas le même rapport. */
    logoClass: string;
};

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
        id: 'trb',
        name: 'TRB Chemedica',
        logo: '/images/portfolio/trb-logo.png',
        logoClass: 'h-20 md:h-28',
    },
    {
        id: 'telcash',
        name: 'TEL and CASH',
        logo: '/images/portfolio/telcash-logo.png',
        // Logo très allongé : à hauteur égale il écraserait l'autre.
        logoClass: 'h-12 md:h-16',
    },
];

export const PROJECTS: PortfolioProject[] = [
    {
        id: 'supply-chain-dashboard',
        title: 'Supply Chain Dashboard',
        category: 'Pharmaceutical industry',
        clientId: 'trb',
        media: {
            kind: 'stack',
            shots: [
                '/images/portfolio/trb-01.jpg',
                '/images/portfolio/trb-02.jpg',
                '/images/portfolio/trb-03.jpg',
                '/images/portfolio/trb-04.jpg',
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
        clientId: 'trb',
        media: {
            kind: 'diagram',
            src: '/images/portfolio/order-entry-flow.webp',
            alt: "Schéma du flux d'automatisation de l'entrée de commande : récurrence, lecture du dossier, boucle de traitement des fichiers, puis branches de traitement des lignes et des erreurs.",
        },
    },
];

export const clientOf = (project: PortfolioProject): Client =>
    CLIENTS.find((c) => c.id === project.clientId)!;
