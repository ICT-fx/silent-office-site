import type React from 'react';
import { useEffect } from 'react';
import {
    DEFAULT_OG_IMAGE,
    SITE_LANG,
    SITE_LOCALE,
    SITE_NAME,
    absoluteUrl,
    organizationNode,
    websiteNode,
} from './siteMeta';

/**
 * Gestionnaire de `<head>` par page.
 *
 * Pourquoi impératif plutôt que déclaratif (React 19 sait hisser `<title>` et
 * `<meta>`) : `index.html` porte déjà un bloc meta statique complet. Hisser de
 * nouvelles balises créerait des doublons — deux `<title>`, deux `canonical` —
 * que les moteurs arbitrent de façon imprévisible. On met donc à jour les
 * balises existantes et on ne crée que ce qui manque.
 *
 * Le même mécanisme sert la navigation client et le pré-rendu : le snapshot
 * Playwright attend `html[data-seo-ready]` avant de capturer, ce qui garantit
 * que le HTML statique porte les bonnes meta.
 */

export interface SeoProps {
    /** Partie variable du titre. Le suffixe « | Flowera » est ajouté ici. */
    title: string;
    description: string;
    /** Chemin applicatif, ex. `/solutions/audit`. Sert au canonical et à og:url. */
    path: string;
    /** `website` par défaut, `article` pour les Insights. */
    type?: 'website' | 'article';
    /** Chemin ou URL absolue d'une image de partage spécifique. */
    image?: string;
    /** Nœuds JSON-LD propres à la page, ajoutés au graphe commun. */
    jsonLd?: Record<string, unknown>[];
    /** `true` pour désindexer (page 404, pages techniques). */
    noIndex?: boolean;
}

/** Met à jour une balise de `<head>`, ou la crée si elle n'existe pas. */
const setTag = (
    selector: string,
    create: () => HTMLElement,
    apply: (el: HTMLElement) => void,
) => {
    let el = document.head.querySelector<HTMLElement>(selector);
    if (!el) {
        el = create();
        document.head.appendChild(el);
    }
    apply(el);
};

const setMeta = (attr: 'name' | 'property', key: string, content: string) =>
    setTag(
        `meta[${attr}="${key}"]`,
        () => {
            const el = document.createElement('meta');
            el.setAttribute(attr, key);
            return el;
        },
        (el) => el.setAttribute('content', content),
    );

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    path,
    type = 'website',
    image,
    jsonLd,
    noIndex = false,
}) => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = absoluteUrl(path);
    const ogImage = image
        ? image.startsWith('http')
            ? image
            : absoluteUrl(image)
        : DEFAULT_OG_IMAGE;

    // Sérialisé pour que l'effet ne se relance pas à chaque rendu sur un
    // tableau recréé à l'identique.
    const jsonLdKey = JSON.stringify(jsonLd ?? []);

    useEffect(() => {
        document.documentElement.lang = SITE_LANG;
        document.title = fullTitle;

        setMeta('name', 'description', description);
        setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

        setTag(
            'link[rel="canonical"]',
            () => {
                const el = document.createElement('link');
                el.setAttribute('rel', 'canonical');
                return el;
            },
            (el) => el.setAttribute('href', url),
        );

        setMeta('property', 'og:site_name', SITE_NAME);
        setMeta('property', 'og:locale', SITE_LOCALE);
        setMeta('property', 'og:type', type);
        setMeta('property', 'og:url', url);
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:image', ogImage);

        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', fullTitle);
        setMeta('name', 'twitter:description', description);
        setMeta('name', 'twitter:image', ogImage);

        // Un seul bloc JSON-LD géré par l'application : on le remplace à chaque
        // navigation plutôt que d'empiler des graphes contradictoires.
        const previous = document.head.querySelector('script[data-seo-jsonld]');
        if (previous) previous.remove();

        const graph = [organizationNode(), websiteNode(), ...(jsonLd ?? [])];
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-jsonld', '');
        script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
        document.head.appendChild(script);

        // Signal attendu par `scripts/prerender.mjs`.
        document.documentElement.setAttribute('data-seo-ready', '');

        return () => {
            document.documentElement.removeAttribute('data-seo-ready');
        };
    }, [fullTitle, description, url, type, ogImage, noIndex, jsonLdKey]);

    return null;
};

export default Seo;
