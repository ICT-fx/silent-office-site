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
    gains: SolutionGain[];
    useCases: SolutionUseCase[];
    steps: SolutionStep[];
}
