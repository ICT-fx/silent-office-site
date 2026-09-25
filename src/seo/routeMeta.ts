/**
 * Titres et descriptions par route.
 *
 * Règles appliquées (`docs/SEO-GEO-PLAYBOOK.md`) :
 * - un intent = une page ; le terme principal est en tête de titre ;
 * - pas de superlatif auto-proclamé, pas d'accumulation de mots-clés ;
 * - le mot « RPA » est banni ;
 * - ancrage Genève / Suisse romande là où il est naturel, jamais forcé ;
 * - description : 150-160 caractères, gain client d'abord.
 *
 * Le suffixe « | Flowera » est ajouté par `<Seo />` — ne pas l'écrire ici.
 */

export interface RouteMeta {
    title: string;
    description: string;
}

export const HOME_META: RouteMeta = {
    title: 'Automatisation et logiciels sur mesure pour PME — Genève',
    description:
        "Flowera conçoit et met en production les outils qui simplifient vos opérations : automatisation de processus, applications métier, tableaux de bord. Suisse romande.",
};

export const STATIC_META: Record<string, RouteMeta> = {
    '/solutions': {
        title: 'Nos offres : audit, automatisation, data, logiciel, formation',
        description:
            "Cinq offres pour reprendre la main sur vos opérations : audit de processus, automatisation, data et business intelligence, développement sur mesure, formation à l'IA.",
    },
    '/portfolio': {
        title: 'Réalisations : dashboards, automatisations, applications métier',
        description:
            "Tableaux de bord décisionnels, automatisation de flux de commandes et applications métier livrés pour des PME industrielles et de négoce en Suisse romande.",
    },
    '/insights': {
        title: "Insights — IA, automatisation et data pour dirigeants de PME",
        description:
            "Analyses sur l'IA, l'automatisation et la data à destination des dirigeants de PME. Chiffres sourcés et datés, distinction explicite entre mesuré et estimé.",
    },
    '/contact': {
        title: 'Contact et prise de rendez-vous',
        description:
            "Réservez un appel de cadrage de 30 minutes ou écrivez-nous. Réponse sous 24 h. En visioconférence ou sur place en Suisse romande.",
    },
    '/careers': {
        title: 'Carrières — rejoindre Flowera en Suisse romande',
        description:
            "Postes ouverts chez Flowera, à Genève et en Suisse romande. Équipe à taille humaine, accès direct aux projets et aux personnes qui les construisent.",
    },
};

/**
 * Métadonnées par offre. Les clés sont les slugs de `src/data/solutions/`.
 * Ne jamais reformuler la `promise` de l'offre : elle vit dans les données,
 * pas ici. Ces textes-ci sont des accroches de résultat de recherche.
 */
export const SOLUTION_META: Record<string, RouteMeta> = {
    audit: {
        title: "Audit de processus pour PME — cartographie et plan d'action",
        description:
            "Deux semaines pour cartographier vos processus, chiffrer le temps perdu poste par poste et repartir avec 3 à 5 chantiers classés par impact. Plan utilisable sans nous.",
    },
    automatisation: {
        title: 'Automatisation des processus métier pour PME',
        description:
            "Factures, devis, commandes, reporting : vos tâches répétitives traitées automatiquement. Vos équipes gardent le travail qui demande du jugement.",
    },
    'data-bi': {
        title: 'Tableaux de bord et business intelligence pour PME',
        description:
            "Vos données consolidées dans des tableaux de bord qui disent où vous en êtes vraiment. Des indicateurs fiables et à jour, lisibles par votre comité de direction.",
    },
    'developpement-logiciel': {
        title: 'Développement logiciel sur mesure pour PME',
        description:
            "L'application métier que les outils du marché ne couvrent pas. Cadrée, développée et mise en production par la même équipe, sans couche d'intermédiaires.",
    },
    formation: {
        title: "Formation et acculturation à l'IA en entreprise",
        description:
            "Vos équipes montent en compétence sur l'IA et s'en servent vraiment. Ateliers construits sur vos propres cas d'usage, pas de théorie hors-sol.",
    },
};

/**
 * Descriptions de recherche des articles Insights, par identifiant.
 *
 * Séparées de `src/data/insights.ts` volontairement : ce sont des accroches
 * SERP, pas du contenu éditorial. Ajouter une entrée ici à chaque nouvel
 * article — sans quoi le repli générique ci-dessous s'applique.
 */
export const ARTICLE_META: Record<string, string> = {
    '6': "Comment automatiser la production du reporting destiné au conseil d'administration : périmètre, sources de données, points de contrôle et pièges à éviter.",
    '99': "Ce que l'IA générative change concrètement à la surface d'attaque d'une entreprise, et les mesures qui tiennent réellement face aux nouveaux vecteurs.",
    '3': "Pourquoi l'audit financier mené à la main devient un risque, et ce que l'automatisation des contrôles change en matière de fiabilité et de traçabilité.",
    '5': "Ce qu'une stratégie nationale sur l'intelligence artificielle implique pour la compétitivité des entreprises, et ce qu'une PME peut en tirer dès maintenant.",
    '4': "Orchestrer plusieurs agents IA plutôt que d'empiler des outils isolés : ce que cela change sur la valeur produite et sur le pilotage des opérations.",
    '2': "Comment évaluer le retour sur investissement d'un projet d'intelligence artificielle : méthode de calcul, horizons réalistes et erreurs fréquentes.",
};

export const articleDescription = (id: string, title: string): string =>
    ARTICLE_META[id] ??
    `${title}. Analyse Flowera pour les dirigeants de PME : chiffres sourcés et datés, distinction explicite entre ce qui est mesuré et ce qui est estimé.`;
