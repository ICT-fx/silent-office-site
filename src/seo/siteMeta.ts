/**
 * Source unique des constantes SEO du site.
 *
 * Toute URL absolue écrite dans le code doit passer par `absoluteUrl()` :
 * le domaine canonique est `https://www.flowera.ch` et rien d'autre.
 *
 * Référence : `docs/SEO-GEO-PLAYBOOK.md`.
 */

import { COMPANY_ADDRESS, CONTACT_EMAIL } from '../config/booking';

export const SITE_URL = 'https://www.flowera.ch';
export const SITE_NAME = 'Flowera';
export const SITE_LOCALE = 'fr_CH';
export const SITE_LANG = 'fr-CH';

/** Image de partage par défaut, en absolu (requis par Open Graph). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/flowera-logo.png`;

/** Construit une URL absolue propre à partir d'un chemin applicatif. */
export const absoluteUrl = (path: string): string => {
    if (!path || path === '/') return `${SITE_URL}/`;
    const clean = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_URL}${clean.replace(/\/+$/, '')}`;
};

/**
 * Zone desservie, ordonnée du plus précis au plus large.
 * Sert au JSON-LD et aux pages locales.
 */
export const AREA_SERVED = [
    'Genève',
    'Vaud',
    'Valais',
    'Fribourg',
    'Neuchâtel',
    'Suisse romande',
    'Suisse',
] as const;

/**
 * Profils officiels. Source unique : le pied de page les affiche et le JSON-LD
 * les déclare en `sameAs`, qui est l'un des signaux les plus lus par les
 * moteurs génératifs pour résoudre « Flowera » comme une entité unique plutôt
 * que comme une chaîne de caractères ambiguë.
 *
 * Ne jamais déclarer ici un profil qui n'existe pas : un `sameAs` mort abîme
 * la résolution d'entité au lieu de l'aider.
 *
 * LinkedIn est référencé par son identifiant numérique, seule forme dont
 * l'appartenance est certaine (relevée dans l'URL d'administration). Si un
 * nom court est configuré côté LinkedIn, le remplacer ici.
 */
export const SOCIAL_PROFILES = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/130184124/' },
    { name: 'Instagram', url: 'https://www.instagram.com/flowera.ch/' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@flowera.dev' },
] as const;

/**
 * Identifiants stables du graphe JSON-LD. Les `@id` permettent aux moteurs
 * de rattacher chaque nœud à la même entité au lieu d'en créer plusieurs.
 */
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Nœud entité de l'organisation.
 *
 * `sameAs` liste les profils de `SOCIAL_PROFILES`. À compléter au fil de l'eau
 * avec Zefix, Crunchbase et Wikidata : plus l'entité est corroborée ailleurs,
 * plus les moteurs génératifs la citent avec des faits exacts.
 */
export const organizationNode = () => ({
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/flowera-logo.png`,
    },
    image: `${SITE_URL}/flowera-logo.png`,
    email: CONTACT_EMAIL,
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
    description:
        "Flowera conçoit et met en production les outils qui simplifient les opérations des PME : automatisation de processus, applications métier sur mesure, tableaux de bord décisionnels et montée en compétence des équipes sur l'IA.",
    address: {
        '@type': 'PostalAddress',
        ...(COMPANY_ADDRESS.street ? { streetAddress: COMPANY_ADDRESS.street } : {}),
        postalCode: COMPANY_ADDRESS.postalCode,
        addressLocality: COMPANY_ADDRESS.locality,
        addressRegion: COMPANY_ADDRESS.region,
        addressCountry: COMPANY_ADDRESS.countryCode,
    },
    areaServed: AREA_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
    knowsLanguage: ['fr'],
    slogan: 'Du temps, de la clarté, des résultats.',
});

/** Nœud du site lui-même, rattaché à l'organisation. */
export const websiteNode = () => ({
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: SITE_LANG,
    publisher: { '@id': ORG_ID },
});

/** Fil d'Ariane. `items` = [{ name, path }], la racine est ajoutée seule. */
export const breadcrumbNode = (items: { name: string; path: string }[]) => ({
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Accueil', path: '/' }, ...items].map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
    })),
});
