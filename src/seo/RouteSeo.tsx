import type React from 'react';
import { useLocation } from 'react-router-dom';
import Seo from './Seo';
import { HOME_META, SOLUTION_META, STATIC_META, articleDescription } from './routeMeta';
import { ORG_ID, SITE_LANG, absoluteUrl, breadcrumbNode } from './siteMeta';
import { solutionsBySlug } from '../data/solutions';
import { insightPosts } from '../data/insights';

/**
 * Pilote le `<head>` depuis la route courante.
 *
 * Centralisé volontairement : une seule source de vérité pour les 17 URLs,
 * plutôt qu'un `<Seo />` disséminé dans huit composants de page où une
 * omission passerait inaperçue. Les pages dynamiques (`/solutions/:slug`,
 * `/insights/:id`) tirent leur titre des données, jamais d'une liste parallèle.
 */

/** Convertit « 1 Août 2026 » en « 2026-08-01 » pour `datePublished`. */
const MONTHS: Record<string, string> = {
    jan: '01', fév: '02', fev: '02', mar: '03', avr: '04', mai: '05', jui: '06',
    juil: '07', aoû: '08', aou: '08', sep: '09', oct: '10', nov: '11', déc: '12', dec: '12',
};

const toIsoDate = (label: string): string | undefined => {
    const match = label.trim().match(/^(\d{1,2})\s+([^\s]+)\s+(\d{4})$/);
    if (!match) return undefined;
    const [, day, monthLabel, year] = match;
    const key = monthLabel.toLowerCase().replace('.', '').slice(0, 4);
    const month = MONTHS[key] ?? MONTHS[key.slice(0, 3)];
    if (!month) return undefined;
    return `${year}-${month}-${day.padStart(2, '0')}`;
};

const RouteSeo: React.FC = () => {
    const { pathname } = useLocation();
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';

    // --- Accueil ---------------------------------------------------------
    if (path === '/') {
        return <Seo {...HOME_META} path="/" />;
    }

    // --- Page d'une offre ------------------------------------------------
    const solutionMatch = path.match(/^\/solutions\/([^/]+)$/);
    if (solutionMatch) {
        const slug = solutionMatch[1];
        const solution = solutionsBySlug[slug];
        const meta = SOLUTION_META[slug];

        // Slug inconnu : la page affiche déjà un repli, on ne l'indexe pas.
        if (!solution || !meta) {
            return (
                <Seo
                    title="Offre introuvable"
                    description="Cette offre n'existe pas ou a été renommée."
                    path={path}
                    noIndex
                />
            );
        }

        return (
            <Seo
                {...meta}
                path={path}
                image={solution.heroImage}
                jsonLd={[
                    {
                        '@type': 'Service',
                        '@id': `${absoluteUrl(path)}#service`,
                        name: solution.title,
                        serviceType: meta.title,
                        description: solution.shortDescription,
                        provider: { '@id': ORG_ID },
                        areaServed: { '@type': 'AdministrativeArea', name: 'Suisse romande' },
                        url: absoluteUrl(path),
                    },
                    breadcrumbNode([
                        { name: 'Solutions', path: '/solutions' },
                        { name: solution.title, path },
                    ]),
                    // Émis uniquement si la page affiche réellement les
                    // questions : Google sanctionne un FAQPage qui ne
                    // correspond à aucun contenu visible.
                    ...(solution.faq?.length
                        ? [
                              {
                                  '@type': 'FAQPage',
                                  '@id': `${absoluteUrl(path)}#faq`,
                                  mainEntity: solution.faq.map((item) => ({
                                      '@type': 'Question',
                                      name: item.question,
                                      acceptedAnswer: {
                                          '@type': 'Answer',
                                          text: item.answer,
                                      },
                                  })),
                              },
                          ]
                        : []),
                ]}
            />
        );
    }

    // --- Article Insights -------------------------------------------------
    const articleMatch = path.match(/^\/insights\/([^/]+)$/);
    if (articleMatch) {
        const id = articleMatch[1];
        const post = insightPosts.find((entry) => entry.id === id);

        if (!post) {
            return (
                <Seo
                    title="Article introuvable"
                    description="Cet article n'existe pas ou a été retiré."
                    path={path}
                    noIndex
                />
            );
        }

        const published = toIsoDate(post.date);

        return (
            <Seo
                title={post.title}
                description={articleDescription(post.id, post.title)}
                path={path}
                type="article"
                image={post.image}
                jsonLd={[
                    {
                        '@type': 'Article',
                        '@id': `${absoluteUrl(path)}#article`,
                        headline: post.title,
                        description: articleDescription(post.id, post.title),
                        articleSection: post.category,
                        image: absoluteUrl(post.image),
                        inLanguage: SITE_LANG,
                        // Auteur identifié : son absence est un frein direct
                        // à la citation par les moteurs génératifs.
                        author: {
                            '@type': 'Person',
                            name: 'Fantin Schellekens',
                        },
                        publisher: { '@id': ORG_ID },
                        ...(published ? { datePublished: published, dateModified: published } : {}),
                        mainEntityOfPage: absoluteUrl(path),
                    },
                    breadcrumbNode([
                        { name: 'Insights', path: '/insights' },
                        { name: post.title, path },
                    ]),
                ]}
            />
        );
    }

    // --- Pages statiques --------------------------------------------------
    const staticMeta = STATIC_META[path];
    if (staticMeta) {
        const label = path.replace('/', '');
        return (
            <Seo
                {...staticMeta}
                path={path}
                jsonLd={[
                    breadcrumbNode([
                        { name: label.charAt(0).toUpperCase() + label.slice(1), path },
                    ]),
                ]}
            />
        );
    }

    // --- Tout le reste : hors index ---------------------------------------
    return (
        <Seo
            title="Page introuvable"
            description="Cette page n'existe pas. Revenez à l'accueil pour retrouver les offres, les réalisations et les analyses de Flowera."
            path={path}
            noIndex
        />
    );
};

export default RouteSeo;
