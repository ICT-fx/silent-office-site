/**
 * Nouveau schéma des solutions (refonte 2026-07).
 * Un fichier par solution dans `src/data/solutions/`, agrégés par `index.ts`.
 * Ne pas confondre avec l'ancien `src/data/solutions.ts` (supprimé en phase 3).
 */

export interface SolutionGain {
    /** Scénario chiffré marché, ex. « Une facture traitée en 30 secondes au lieu de 5 minutes » */
    scenario: string;
    /** Libellé court du gain, ex. « Du temps rendu à vos équipes » */
    label: string;
}

export interface SolutionUseCase {
    title: string;
    /** Situation avant */
    before: string;
    /** Ce qu'on met en place */
    setup: string;
    /** Résultat obtenu */
    result: string;
}

export interface SolutionStep {
    title: string;
    description: string;
    /** Durée indicative, ex. « 1 semaine » */
    duration: string;
}

export interface SolutionPillar {
    title: string;
    description: string;
    /** Nom d'icône lucide-react (ex. « Brain »), résolu via le registre d'icônes du template */
    icon: string;
}

export interface SolutionAudience {
    title: string;
    description: string;
    /** Nom d'icône lucide-react, résolu via le registre d'icônes du template */
    icon: string;
    /** Carte mise en avant : fond sombre #262626 avec halo vert */
    highlighted?: boolean;
}

export interface SolutionDeepDiveSection {
    title: string;
    items: string[];
}

export interface SolutionDeepDiveChapter {
    id: string;
    title: string;
    subtitle?: string;
    /** Résumé en une phrase, affiché en tête d'étape par la mise en page compacte */
    summary?: string;
    /** Pictogramme tracé de l'étape (voir `StepGlyph`) — mise en page compacte */
    glyph?: string;
    content: SolutionDeepDiveSection[];
}

/** Section profonde en accordéon — syllabus, catalogue ou phases selon la solution */
export interface SolutionDeepDive {
    /**
     * Nature du contenu, pour la mise en page compacte :
     * `sequence` (défaut) = des étapes dans l'ordre, rendues en frise numérotée ;
     * `catalogue` = des familles sans ordre, rendues en sélecteur, la vraie
     * séquence étant alors portée par `steps`.
     */
    kind?: 'sequence' | 'catalogue';
    eyebrow: string;
    title: string;
    intro: string;
    chapters: SolutionDeepDiveChapter[];
}

/**
 * Composition propre à une page (mise en page compacte). Les cinq pages partagent
 * le même système ; ce qui varie, c'est la forme de chaque bloc, choisie d'après
 * la nature du contenu. Tout est optionnel : sans valeur, la page prend la forme
 * de référence (celle de l'Audit).
 */
export interface SolutionVariant {
    /** Hero : texte | image (`split`), image | texte (`split-left`), texte puis image pleine largeur (`banner`), texte centré (`centered`) */
    hero?: 'split' | 'split-left' | 'banner' | 'centered';
    /** Forme du catalogue en bureau : liste latérale, filtres, tuiles, accordéon pleine largeur, ou syllabus lu à la suite */
    catalogue?: 'selector' | 'chips' | 'tiles' | 'accordion' | 'syllabus';
    /** Présentation des cas concrets en bureau */
    cases?: 'cells' | 'flow' | 'beforeAfter' | 'rows';
    /** Titres de section propres à l'offre */
    labels?: {
        gains?: string;
        cases?: string;
    };
}

/** Repère lisible d'un coup d'œil, affiché sous le hero de la mise en page compacte */
export interface SolutionKeyFact {
    /** Nom d'icône lucide-react, résolu via le registre d'icônes du template */
    icon: string;
    label: string;
    value: string;
}

export interface SolutionData {
    id: string;
    slug: string;
    title: string;
    /**
     * Mise en page de la route `/solutions/:slug`.
     * `compact` : page claire et resserrée (méthode en frise cliquable) — pilotée sur l'Audit.
     * Absent : gabarit historique.
     */
    layout?: 'compact';
    /** Composition propre à la page (voir `SolutionVariant`) */
    variant?: SolutionVariant;
    /** 3-4 repères clés (durée, format, livrable…) — utilisés par la mise en page compacte */
    keyFacts?: SolutionKeyFact[];
    /** Promesse hero — verbatim validé, ne pas reformuler */
    promise: string;
    /** Sous-titre optionnel (utilisé par Data & BI) */
    subPromise?: string;
    /** Une ligne orientée gain, pour la home et la navigation */
    shortDescription: string;
    /** Illustration de l'expertise — cadrage 3:2, servie depuis /public/images/expertises */
    heroImage: string;
    /** Texte alternatif de `heroImage` */
    heroImageAlt: string;
    /** Paragraphe hero sous la promesse, ton « Les technologies évoluent en continu… » */
    heroTagline: string;
    /** Segment fort accolé en fin de tagline, ex. « Prenez les devants. » */
    heroTaglineStrong?: string;
    gains: SolutionGain[];
    /** 3-4 piliers « Notre approche » */
    pillars: SolutionPillar[];
    /** Section « Pour qui ? » — 3 cartes, une `highlighted` sur fond sombre */
    audiences?: SolutionAudience[];
    useCases: SolutionUseCase[];
    deepDive: SolutionDeepDive;
    steps: SolutionStep[];
    /** CTA final personnalisé */
    ctaTitle: string;
    ctaText: string;
    ctaLabel: string;
}
