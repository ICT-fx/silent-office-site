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
    content: SolutionDeepDiveSection[];
}

/** Section profonde en accordéon — syllabus, catalogue ou phases selon la solution */
export interface SolutionDeepDive {
    eyebrow: string;
    title: string;
    intro: string;
    chapters: SolutionDeepDiveChapter[];
}

export interface SolutionData {
    id: string;
    slug: string;
    title: string;
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
    /** Mention sous le CTA, affichée avec une icône cadenas, ex. éligibilité OPCO */
    ctaFootnote?: string;
}
