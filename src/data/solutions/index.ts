import type { SolutionData } from './types';
import { audit } from './audit';
import { automatisation } from './automatisation';
import { dataBi } from './data-bi';
import { developpementLogiciel } from './developpement-logiciel';
import { formation } from './formation';

export type {
    SolutionData,
    SolutionGain,
    SolutionUseCase,
    SolutionStep,
    SolutionPillar,
    SolutionAudience,
    SolutionDeepDive,
    SolutionDeepDiveChapter,
    SolutionDeepDiveSection,
} from './types';

/** Ordre officiel des 5 offres (01 → 05). */
export const solutionsList: SolutionData[] = [
    audit,
    automatisation,
    dataBi,
    developpementLogiciel,
    formation,
];

/** Index par slug — utilisé par la route `/solutions/:slug`. */
export const solutionsBySlug: Record<string, SolutionData> = Object.fromEntries(
    solutionsList.map((solution) => [solution.slug, solution])
);
