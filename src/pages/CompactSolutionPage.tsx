import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    Check,
    ChevronDown,
    ChevronRight,
    ShieldCheck,
    TrendingUp,
    Zap,
    type LucideIcon,
} from 'lucide-react';
import type {
    SolutionData,
    SolutionDeepDiveChapter,
    SolutionKeyFact,
    SolutionStep,
    SolutionUseCase,
    SolutionVariant,
} from '../data/solutions/index';
import { resolveIcon } from './solutionIcons';
import StepGlyph from '../components/solution/StepGlyph';

/* ------------------------------------------------------------------ *
 *  Page solution, mise en page compacte.
 *  Fond clair, peu de sombre, et un parcours court :
 *  hero + repères → bénéfices → méthode ou catalogue → pour qui / cas → contact.
 *
 *  Les cinq pages partagent ce système, mais pas la même forme : chaque
 *  offre choisit dans `variant` la composition de son hero, de son catalogue
 *  et de ses cas concrets, d'après la nature de son contenu. L'Audit, sans
 *  variante, est la forme de référence.
 *
 *  Le bloc central dépend de `deepDive.kind` :
 *  - `sequence` : les chapitres sont des étapes, rendues en frise numérotée ;
 *    la section « Mise en place » y est fusionnée.
 *  - `catalogue` : les chapitres sont des familles sans ordre ; la vraie
 *    séquence (`steps`) suit, en frise statique.
 * ------------------------------------------------------------------ */

/** Mêmes voix que le Hero de l'accueil et la page Portfolio. */
const TITLE = 'Inter, sans-serif';
const BODY = '"DM Sans", sans-serif';

const GREEN = '#027333';
const INK = '#262626';
const MUTED = 'rgba(38,38,38,0.7)';
const LINE = '#E5E1D6';
const PAPER = '#FCFBF8';
const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';

const SHADOW = '0 26px 60px -30px rgba(38,38,38,0.32), 0 3px 8px rgba(38,38,38,0.04)';

const FOCUS =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#027333]';

const METHOD_ID = 'methode';

/** Bouton principal : vert plein, sans le dégradé qui tire vers le noir. */
const PRIMARY_BUTTON = `group inline-flex items-center justify-center text-center rounded-[11px] px-7 sm:px-9 py-4 text-[1.05rem] sm:text-lg font-semibold text-white bg-[#027333] hover:bg-[#025928] shadow-[0_10px_24px_-12px_rgba(2,115,51,0.55)] transition-colors ${FOCUS}`;

/** Bouton de navigation entre étapes : plein pour avancer, contour pour revenir. */
const stepButton = (solid: boolean) =>
    `group inline-flex items-center gap-2 rounded-[10px] px-5 py-2.5 text-[0.95rem] font-semibold transition-colors ${FOCUS} ` +
    (solid
        ? 'bg-[#027333] text-white hover:bg-[#025928]'
        : 'bg-white text-[#262626] border border-[#E5E1D6] hover:border-[#027333] hover:text-[#027333] disabled:opacity-40 disabled:pointer-events-none');

/** Icônes fixes pour les 3 gains (les données n'en portent pas). */
const GAIN_ICONS: LucideIcon[] = [Zap, ShieldCheck, TrendingUp];

const h2Style: React.CSSProperties = {
    fontFamily: TITLE,
    fontWeight: 800,
    fontSize: 'clamp(1.9rem, 3vw, 2.75rem)',
    lineHeight: 1.06,
    letterSpacing: '-0.045em',
    color: INK,
    textWrap: 'balance',
};

const h3Style: React.CSSProperties = {
    fontFamily: TITLE,
    fontWeight: 800,
    fontSize: '1.35rem',
    letterSpacing: '-0.035em',
    color: INK,
};

const chapterTitleStyle: React.CSSProperties = {
    fontFamily: TITLE,
    fontWeight: 800,
    fontSize: '1.6rem',
    letterSpacing: '-0.04em',
    color: INK,
};

const bodyStyle: React.CSSProperties = {
    fontFamily: BODY,
    letterSpacing: '-0.015em',
    color: MUTED,
};

const ledeStyle: React.CSSProperties = {
    ...bodyStyle,
    fontSize: '1.08rem',
    lineHeight: 1.55,
    maxWidth: '58ch',
    color: 'rgba(38,38,38,0.85)',
};

/** Cercle numéroté des frises : plein quand l'étape est passée, contour sinon. */
const numberBadge = (state: 'done' | 'current' | 'todo'): React.CSSProperties => ({
    fontFamily: BODY,
    fontWeight: 600,
    backgroundColor: state === 'done' ? GREEN : '#FFFFFF',
    borderColor: state === 'todo' ? '#CFCABB' : GREEN,
    color: state === 'done' ? '#FFFFFF' : state === 'current' ? GREEN : MUTED,
    boxShadow: state === 'current' ? '0 0 0 5px rgba(2,115,51,0.14)' : 'none',
});

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollBehavior = (): ScrollBehavior => (prefersReducedMotion() ? 'auto' : 'smooth');

/* ------------------------------------------------------------------ *
 *  Chapitre : en-tête et contenu, partagés par toutes les variantes
 * ------------------------------------------------------------------ */

const ChapterSections: React.FC<{ chapter: SolutionDeepDiveChapter }> = ({ chapter }) => (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {chapter.content.map((section) => (
            <div key={section.title}>
                <h4
                    style={{
                        fontFamily: TITLE,
                        fontWeight: 700,
                        fontSize: '1.02rem',
                        letterSpacing: '-0.02em',
                        color: INK,
                    }}
                >
                    {section.title}
                </h4>
                <ul className="mt-3 space-y-2.5">
                    {section.items.map((item) => (
                        <li key={item} className="flex gap-3" style={{ ...bodyStyle, lineHeight: 1.55 }}>
                            <Check
                                aria-hidden="true"
                                className="w-4 h-4 mt-[0.2rem] shrink-0"
                                strokeWidth={2.5}
                                style={{ color: GREEN }}
                            />
                            <span style={{ color: 'rgba(38,38,38,0.82)' }}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

type DeepDiveKind = 'sequence' | 'catalogue';

/** Ce qu'un chapitre affiche sous son titre selon la nature du contenu. */
const chapterLines = (chapter: SolutionDeepDiveChapter, kind: DeepDiveKind, position?: string) => {
    if (kind === 'sequence') {
        const meta = [position, chapter.subtitle].filter(Boolean).join(' · ');
        return { meta, lede: chapter.summary };
    }
    return { meta: undefined, lede: chapter.summary ?? chapter.subtitle };
};

const ChapterHeader: React.FC<{
    chapter: SolutionDeepDiveChapter;
    kind: DeepDiveKind;
    position?: string;
    compact?: boolean;
}> = ({ chapter, kind, position, compact = false }) => {
    const { meta, lede } = chapterLines(chapter, kind, position);
    return (
        <div className={compact ? '' : 'flex items-start justify-between gap-10'}>
            {/* Sur mobile, le titre est déjà porté par le déclencheur du chapitre. */}
            {compact && <StepGlyph name={chapter.glyph} className="w-14 h-14 mb-3" />}
            <div>
                {!compact && <h3 style={chapterTitleStyle}>{chapter.title}</h3>}
                {meta && (
                    <p className={compact ? 'text-[0.95rem]' : 'mt-1.5 text-[0.95rem]'} style={bodyStyle}>
                        {meta}
                    </p>
                )}
                {lede && (
                    <p
                        className={compact && !meta ? '' : 'mt-3'}
                        style={{ ...ledeStyle, fontSize: compact ? '1rem' : '1.08rem' }}
                    >
                        {lede}
                    </p>
                )}
            </div>
            {!compact && <StepGlyph name={chapter.glyph} className="shrink-0 w-20 h-20 lg:w-24 lg:h-24" />}
        </div>
    );
};

/** Lien d'appel en bas d'un panneau de catalogue. */
const CatalogueCta: React.FC<{ ctaLabel: string }> = ({ ctaLabel }) => (
    <div className="mt-10 pt-6" style={{ borderTop: `1px solid ${LINE}` }}>
        <Link
            to="/contact"
            className={`group inline-flex items-center gap-2 text-[0.95rem] font-semibold rounded-md ${FOCUS}`}
            style={{ fontFamily: BODY, color: GREEN }}
        >
            {ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
    </div>
);

/* ------------------------------------------------------------------ *
 *  Chapitres dépliables : mobile de toutes les pages, et bureau en
 *  mode « accordéon » (une fiche par type de projet, lue en place)
 * ------------------------------------------------------------------ */

const ExpandableChapters: React.FC<{
    chapters: SolutionDeepDiveChapter[];
    kind: DeepDiveKind;
    /** `mobile` : réservé aux petits écrans ; `all` : accordéon à toutes les largeurs */
    scope: 'mobile' | 'all';
}> = ({ chapters, kind, scope }) => {
    const count = chapters.length;
    const [open, setOpen] = useState<number | null>(0);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const numbered = kind === 'sequence';
    const wide = scope === 'all';

    const toggle = (i: number) => {
        const willOpen = open !== i;
        setOpen(willOpen ? i : null);
        // Le chapitre qui se ferme au-dessus décale celui qu'on ouvre :
        // on recale la page sur ce dernier plutôt que de le laisser sauter.
        if (willOpen) {
            requestAnimationFrame(() =>
                itemRefs.current[i]?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' })
            );
        }
    };

    return (
        <ol
            className={
                wide
                    ? 'mt-10 md:mt-12 md:rounded-2xl md:bg-white md:overflow-hidden'
                    : 'md:hidden mt-10'
            }
            style={wide ? { border: `1px solid ${LINE}`, boxShadow: SHADOW } : undefined}
        >
            {chapters.map((chapter, i) => {
                const expanded = open === i;
                const last = i === count - 1;
                const passed = open !== null && i < open;
                return (
                    <li
                        key={chapter.id}
                        ref={(el) => {
                            itemRefs.current[i] = el;
                        }}
                        className={`relative scroll-mt-28 ${numbered ? 'pl-12' : ''} ${wide ? 'md:px-8 lg:px-10' : ''}`}
                        style={numbered || i === 0 ? undefined : { borderTop: `1px solid ${LINE}` }}
                    >
                        {numbered && !last && (
                            <span
                                aria-hidden="true"
                                className="absolute left-[15px] top-12 bottom-0 w-[3px] rounded-full transition-colors duration-500"
                                style={{ backgroundColor: passed ? GREEN : LINE }}
                            />
                        )}
                        {numbered && (
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-[0.9rem] w-8 h-8 rounded-full flex items-center justify-center border-2 tabular-nums text-[0.85rem] transition-all duration-300"
                                style={numberBadge(passed ? 'done' : expanded ? 'current' : 'todo')}
                            >
                                {i + 1}
                            </span>
                        )}
                        <h3>
                            <button
                                type="button"
                                aria-expanded={expanded}
                                aria-controls={`chapter-${chapter.id}`}
                                onClick={() => toggle(i)}
                                className={`w-full flex items-center justify-between gap-4 py-5 ${wide ? 'md:py-6' : ''} text-left rounded-md ${FOCUS}`}
                            >
                                <span className="flex items-center gap-4 min-w-0">
                                    {wide && (
                                        <StepGlyph name={chapter.glyph} className="hidden md:block w-9 h-9 shrink-0" />
                                    )}
                                    <span className="min-w-0">
                                        <span
                                            className="block"
                                            style={{
                                                fontFamily: TITLE,
                                                fontWeight: 700,
                                                fontSize: wide ? '1.18rem' : '1.12rem',
                                                lineHeight: 1.25,
                                                letterSpacing: '-0.03em',
                                                color: expanded ? INK : MUTED,
                                            }}
                                        >
                                            {chapter.title}
                                        </span>
                                        {wide && chapter.subtitle && kind === 'catalogue' && (
                                            <span className="hidden md:block mt-1 text-[0.95rem]" style={bodyStyle}>
                                                {chapter.subtitle}
                                            </span>
                                        )}
                                    </span>
                                </span>
                                <ChevronDown
                                    aria-hidden="true"
                                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                                    style={{ color: MUTED }}
                                />
                            </button>
                        </h3>
                        {expanded && (
                            <div id={`chapter-${chapter.id}`} className={`method-panel-in pb-8 ${wide ? 'md:pb-10' : ''}`}>
                                <div className={wide ? 'md:hidden' : ''}>
                                    <ChapterHeader chapter={chapter} kind={kind} compact />
                                </div>
                                <div className={wide ? 'mt-5 md:mt-1' : 'mt-5'}>
                                    <ChapterSections chapter={chapter} />
                                </div>
                            </div>
                        )}
                    </li>
                );
            })}
        </ol>
    );
};

/* ------------------------------------------------------------------ *
 *  Onglets : sélection, clavier, focus (partagé par les catalogues)
 * ------------------------------------------------------------------ */

const useTabs = (count: number) => {
    const [active, setActive] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const select = (index: number, focus = false) => {
        const next = (index + count) % count;
        setActive(next);
        if (focus) tabRefs.current[next]?.focus();
    };

    const onTabKey = (e: React.KeyboardEvent, index: number, orientation: 'horizontal' | 'vertical') => {
        const [prevKey, nextKey] =
            orientation === 'vertical' ? ['ArrowUp', 'ArrowDown'] : ['ArrowLeft', 'ArrowRight'];
        const moves: Record<string, number> = {
            [nextKey]: index + 1,
            [prevKey]: index - 1,
            Home: 0,
            End: count - 1,
        };
        if (e.key in moves) {
            e.preventDefault();
            select(moves[e.key], true);
        }
    };

    return { active, select, onTabKey, tabRefs };
};

type TabProps = {
    chapter: SolutionDeepDiveChapter;
    index: number;
    selected: boolean;
    tabs: ReturnType<typeof useTabs>;
    orientation: 'horizontal' | 'vertical';
};

/** Attributs communs à tous les onglets, quelle que soit leur forme. */
const tabAttributes = ({ chapter, index, selected, tabs, orientation }: TabProps) => ({
    ref: (el: HTMLButtonElement | null) => {
        tabs.tabRefs.current[index] = el;
    },
    type: 'button' as const,
    role: 'tab',
    id: `tab-${chapter.id}`,
    'aria-selected': selected,
    'aria-controls': `panel-${chapter.id}`,
    tabIndex: selected ? 0 : -1,
    onClick: () => tabs.select(index),
    onKeyDown: (e: React.KeyboardEvent) => tabs.onTabKey(e, index, orientation),
});

/* ------------------------------------------------------------------ *
 *  Séquence : frise numérotée cliquable (bureau)
 * ------------------------------------------------------------------ */

const MethodTimeline: React.FC<{ chapters: SolutionDeepDiveChapter[]; ctaLabel: string }> = ({
    chapters,
    ctaLabel,
}) => {
    const count = chapters.length;
    const tabs = useTabs(count);
    const { active, select } = tabs;
    const current = chapters[active];
    const next = chapters[active + 1];
    const progress = count > 1 ? active / (count - 1) : 1;

    return (
        <div
            className="hidden md:block mt-12 rounded-2xl bg-white overflow-hidden"
            style={{ border: `1px solid ${LINE}`, boxShadow: SHADOW }}
        >
            <div
                role="tablist"
                aria-label="Étapes de la méthode"
                className="relative grid px-6 lg:px-8 pt-8 pb-7"
                style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`, borderBottom: `1px solid ${LINE}` }}
            >
                {/* Rail : il se remplit jusqu'à l'étape affichée. */}
                <div
                    aria-hidden="true"
                    className="absolute top-[47px] h-[3px] rounded-full"
                    style={{
                        left: `calc(${50 / count}% + 1.5rem)`,
                        right: `calc(${50 / count}% + 1.5rem)`,
                        backgroundColor: LINE,
                    }}
                >
                    <div
                        className="h-full rounded-full origin-left motion-reduce:transition-none"
                        style={{
                            backgroundColor: GREEN,
                            transform: `scaleX(${progress})`,
                            transition: `transform 700ms ${EASE}`,
                        }}
                    />
                </div>

                {chapters.map((chapter, i) => {
                    const selected = i === active;
                    const state = i < active ? 'done' : selected ? 'current' : 'todo';
                    return (
                        <button
                            key={chapter.id}
                            {...tabAttributes({ chapter, index: i, selected, tabs, orientation: 'horizontal' })}
                            className={`group relative flex flex-col items-center text-center px-2 lg:px-3 rounded-xl ${FOCUS}`}
                        >
                            <span
                                aria-hidden="true"
                                className="relative z-10 w-9 h-9 rounded-full flex items-center justify-center border-2 tabular-nums text-[0.92rem] transition-all duration-300 group-hover:border-[#027333]"
                                style={numberBadge(state)}
                            >
                                {i + 1}
                            </span>
                            <span
                                className="mt-4 transition-colors group-hover:text-[#262626]"
                                style={{
                                    fontFamily: TITLE,
                                    fontWeight: 700,
                                    fontSize: '1.08rem',
                                    lineHeight: 1.25,
                                    letterSpacing: '-0.03em',
                                    color: selected ? INK : MUTED,
                                    textWrap: 'balance',
                                }}
                            >
                                {chapter.title}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div
                key={current.id}
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
                className="method-panel-in p-8 lg:p-10"
            >
                <ChapterHeader chapter={current} kind="sequence" position={`Étape ${active + 1} sur ${count}`} />

                <div className="mt-9">
                    <ChapterSections chapter={current} />
                </div>

                <div
                    className="mt-10 pt-6 flex flex-wrap items-center justify-between gap-4"
                    style={{ borderTop: `1px solid ${LINE}` }}
                >
                    <button
                        type="button"
                        onClick={() => select(active - 1, true)}
                        disabled={active === 0}
                        className={stepButton(false)}
                        style={{ fontFamily: BODY }}
                    >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        Étape précédente
                    </button>
                    {next ? (
                        <button
                            type="button"
                            onClick={() => select(active + 1, true)}
                            className={stepButton(true)}
                            style={{ fontFamily: BODY }}
                        >
                            Étape suivante
                            <ArrowRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </button>
                    ) : (
                        <Link to="/contact" className={stepButton(true)} style={{ fontFamily: BODY }}>
                            {ctaLabel}
                            <ArrowRight
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Catalogue, forme « liste latérale » (bureau)
 * ------------------------------------------------------------------ */

const CatalogueSelector: React.FC<{ chapters: SolutionDeepDiveChapter[]; ctaLabel: string }> = ({
    chapters,
    ctaLabel,
}) => {
    const tabs = useTabs(chapters.length);
    const current = chapters[tabs.active];

    return (
        <div
            className="hidden md:grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] mt-12 rounded-2xl bg-white overflow-hidden"
            style={{ border: `1px solid ${LINE}`, boxShadow: SHADOW }}
        >
            <div
                role="tablist"
                aria-orientation="vertical"
                aria-label="Familles du catalogue"
                className="py-3"
                style={{ backgroundColor: PAPER, borderRight: `1px solid ${LINE}` }}
            >
                {chapters.map((chapter, i) => {
                    const selected = i === tabs.active;
                    return (
                        <button
                            key={chapter.id}
                            {...tabAttributes({ chapter, index: i, selected, tabs, orientation: 'vertical' })}
                            className={`group relative w-full flex items-center justify-between gap-3 text-left px-6 lg:px-7 py-4 transition-colors ${FOCUS} focus-visible:outline-offset-[-4px]`}
                            style={{ backgroundColor: selected ? '#FFFFFF' : 'transparent' }}
                        >
                            {/* Repère de sélection : une barre verte au bord du volet */}
                            <span
                                aria-hidden="true"
                                className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full transition-opacity duration-300"
                                style={{ backgroundColor: GREEN, opacity: selected ? 1 : 0 }}
                            />
                            <span
                                className="transition-colors group-hover:text-[#262626]"
                                style={{
                                    fontFamily: TITLE,
                                    fontWeight: 700,
                                    fontSize: '1.04rem',
                                    lineHeight: 1.25,
                                    letterSpacing: '-0.03em',
                                    color: selected ? INK : MUTED,
                                }}
                            >
                                {chapter.title}
                            </span>
                            <ChevronRight
                                aria-hidden="true"
                                className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5"
                                style={{ color: selected ? GREEN : 'rgba(38,38,38,0.35)' }}
                            />
                        </button>
                    );
                })}
            </div>

            <div
                key={current.id}
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
                className="method-panel-in p-8 lg:p-10"
            >
                <ChapterHeader chapter={current} kind="catalogue" />
                <div className="mt-8">
                    <ChapterSections chapter={current} />
                </div>
                <CatalogueCta ctaLabel={ctaLabel} />
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Catalogue, forme « filtres » : une rangée de familles, un panneau
 * ------------------------------------------------------------------ */

const CatalogueChips: React.FC<{ chapters: SolutionDeepDiveChapter[]; ctaLabel: string }> = ({
    chapters,
    ctaLabel,
}) => {
    const tabs = useTabs(chapters.length);
    const current = chapters[tabs.active];

    return (
        <div className="hidden md:block mt-12">
            <div role="tablist" aria-label="Familles du catalogue" className="flex flex-wrap gap-2.5">
                {chapters.map((chapter, i) => {
                    const selected = i === tabs.active;
                    return (
                        <button
                            key={chapter.id}
                            {...tabAttributes({ chapter, index: i, selected, tabs, orientation: 'horizontal' })}
                            className={`rounded-full px-5 py-2.5 text-[0.98rem] font-semibold transition-colors ${FOCUS} ${
                                selected
                                    ? 'bg-[#027333] text-white'
                                    : 'bg-white text-[#262626] border border-[#E5E1D6] hover:border-[#027333] hover:text-[#027333]'
                            }`}
                            style={{ fontFamily: BODY, letterSpacing: '-0.01em' }}
                        >
                            {chapter.title}
                        </button>
                    );
                })}
            </div>

            <div
                key={current.id}
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
                className="method-panel-in mt-6 rounded-2xl bg-white p-8 lg:p-10"
                style={{ border: `1px solid ${LINE}`, boxShadow: SHADOW }}
            >
                <ChapterHeader chapter={current} kind="catalogue" />
                <div className="mt-8">
                    <ChapterSections chapter={current} />
                </div>
                <CatalogueCta ctaLabel={ctaLabel} />
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Catalogue, forme « tuiles » : une grille, le détail dessous
 * ------------------------------------------------------------------ */

const CatalogueTiles: React.FC<{ chapters: SolutionDeepDiveChapter[]; ctaLabel: string }> = ({
    chapters,
    ctaLabel,
}) => {
    const tabs = useTabs(chapters.length);
    const current = chapters[tabs.active];

    return (
        <div className="hidden md:block mt-12">
            <div role="tablist" aria-label="Familles du catalogue" className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                {chapters.map((chapter, i) => {
                    const selected = i === tabs.active;
                    return (
                        <button
                            key={chapter.id}
                            {...tabAttributes({ chapter, index: i, selected, tabs, orientation: 'horizontal' })}
                            className={`group flex flex-col items-start text-left rounded-2xl bg-white p-5 transition-all duration-300 ${FOCUS}`}
                            style={{
                                border: `1px solid ${selected ? GREEN : LINE}`,
                                boxShadow: selected ? SHADOW : 'none',
                            }}
                        >
                            <StepGlyph name={chapter.glyph} className="w-9 h-9" />
                            <span
                                className="block mt-4 transition-colors group-hover:text-[#262626]"
                                style={{
                                    fontFamily: TITLE,
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    lineHeight: 1.25,
                                    letterSpacing: '-0.03em',
                                    color: selected ? INK : MUTED,
                                }}
                            >
                                {chapter.title}
                            </span>
                            {chapter.subtitle && (
                                <span className="block mt-1.5 text-[0.9rem]" style={{ ...bodyStyle, lineHeight: 1.45 }}>
                                    {chapter.subtitle}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            <div
                key={current.id}
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
                className="method-panel-in mt-4 rounded-2xl bg-white p-8 lg:p-10"
                style={{ border: `1px solid ${LINE}` }}
            >
                {/* La tuile porte déjà pictogramme et accroche : le panneau va droit au contenu. */}
                <h3 style={chapterTitleStyle}>{current.title}</h3>
                <div className="mt-6">
                    <ChapterSections chapter={current} />
                </div>
                <CatalogueCta ctaLabel={ctaLabel} />
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Catalogue, forme « syllabus » : sommaire fixe, chapitres lus à la suite
 * ------------------------------------------------------------------ */

const Syllabus: React.FC<{ chapters: SolutionDeepDiveChapter[] }> = ({ chapters }) => {
    const [current, setCurrent] = useState(0);
    const articleRefs = useRef<(HTMLElement | null)[]>([]);
    // Pendant un saut depuis le sommaire, l'observateur se tait : c'est le clic qui décide.
    const quietUntil = useRef(0);

    // Le sommaire suit la lecture : le chapitre qui passe sous l'en-tête est marqué.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (Date.now() < quietUntil.current) return;
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setCurrent(Number(entry.target.getAttribute('data-index')));
                });
            },
            { rootMargin: '-12% 0px -72% 0px' }
        );
        articleRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [chapters.length]);

    const jump = (i: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrent(i);
        quietUntil.current = Date.now() + 900;
        articleRefs.current[i]?.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    };

    return (
        <div className="hidden md:grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] gap-10 lg:gap-16 mt-12">
            <nav aria-label="Sommaire du programme" className="md:sticky md:top-32 self-start">
                <ol>
                    {chapters.map((chapter, i) => {
                        const active = i === current;
                        return (
                            <li key={chapter.id}>
                                <a
                                    href={`#syllabus-${chapter.id}`}
                                    onClick={jump(i)}
                                    aria-current={active ? 'true' : undefined}
                                    className={`group flex items-start gap-4 py-2.5 rounded-md ${FOCUS}`}
                                >
                                    <span
                                        className="shrink-0 w-7 tabular-nums text-[0.85rem] pt-[0.2rem] transition-colors"
                                        style={{ fontFamily: BODY, fontWeight: 600, color: active ? GREEN : 'rgba(38,38,38,0.45)' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span
                                        className="transition-colors group-hover:text-[#262626]"
                                        style={{
                                            fontFamily: TITLE,
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            lineHeight: 1.3,
                                            letterSpacing: '-0.025em',
                                            color: active ? INK : MUTED,
                                        }}
                                    >
                                        {chapter.title}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ol>
            </nav>

            <div>
                {chapters.map((chapter, i) => (
                    <article
                        key={chapter.id}
                        id={`syllabus-${chapter.id}`}
                        data-index={i}
                        ref={(el) => {
                            articleRefs.current[i] = el;
                        }}
                        className="scroll-mt-32 py-10 first:pt-0 last:pb-0"
                        style={i > 0 ? { borderTop: `1px solid ${LINE}` } : undefined}
                    >
                        <ChapterHeader chapter={chapter} kind="catalogue" />
                        <div className="mt-8">
                            <ChapterSections chapter={chapter} />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Mise en place : la séquence, en frise statique
 * ------------------------------------------------------------------ */

const StepsStrip: React.FC<{ steps: SolutionStep[] }> = ({ steps }) => {
    const count = steps.length;
    return (
        <ol className="relative grid gap-y-8 md:grid-flow-col md:auto-cols-fr md:gap-x-8">
            <div
                aria-hidden="true"
                className="hidden md:block absolute top-[17px] h-[2px] rounded-full"
                style={{ left: `${50 / count}%`, right: `${50 / count}%`, backgroundColor: '#CFCABB' }}
            />
            {steps.map((step, i) => {
                const last = i === count - 1;
                return (
                    <li key={step.title} className="relative pl-12 md:pl-0 md:text-center">
                        {!last && (
                            <span
                                aria-hidden="true"
                                className="md:hidden absolute left-[17px] top-10 bottom-[-2rem] w-[2px]"
                                style={{ backgroundColor: '#CFCABB' }}
                            />
                        )}
                        <span
                            aria-hidden="true"
                            className="absolute md:relative left-0 top-0 md:mx-auto w-9 h-9 rounded-full flex items-center justify-center border-2 tabular-nums text-[0.92rem]"
                            style={{ ...numberBadge('current'), boxShadow: 'none' }}
                        >
                            {i + 1}
                        </span>
                        <p
                            className="md:mt-4"
                            style={{
                                fontFamily: TITLE,
                                fontWeight: 700,
                                fontSize: '1.08rem',
                                lineHeight: 1.25,
                                letterSpacing: '-0.03em',
                                color: INK,
                            }}
                        >
                            {step.title}
                        </p>
                        <p className="mt-2 md:mx-auto md:max-w-[26ch]" style={{ ...bodyStyle, fontSize: '0.96rem', lineHeight: 1.55 }}>
                            {step.description}
                        </p>
                    </li>
                );
            })}
        </ol>
    );
};

/* ------------------------------------------------------------------ *
 *  Cas concrets : avant / ce que nous mettons en place / résultat
 * ------------------------------------------------------------------ */

const useCaseCells = (useCase: SolutionUseCase) => [
    {
        key: 'before',
        label: 'Avant',
        text: useCase.before,
        background: '#F7F5EE',
        border: '#EAE5D6',
        labelColor: MUTED,
        textColor: MUTED,
    },
    {
        key: 'setup',
        label: 'Ce que nous mettons en place',
        text: useCase.setup,
        background: '#FFFFFF',
        border: LINE,
        labelColor: MUTED,
        textColor: MUTED,
    },
    {
        key: 'result',
        label: 'Résultat',
        text: useCase.result,
        background: 'rgba(2,115,51,0.07)',
        border: 'rgba(2,115,51,0.22)',
        labelColor: GREEN,
        textColor: INK,
    },
];

type UseCaseCell = ReturnType<typeof useCaseCells>[number];

const CellLabel: React.FC<{ cell: UseCaseCell }> = ({ cell }) => (
    <dt className="text-[0.82rem] font-semibold tracking-[0.01em]" style={{ fontFamily: BODY, color: cell.labelColor }}>
        {cell.label}
    </dt>
);

const CellText: React.FC<{ cell: UseCaseCell; className?: string }> = ({ cell, className = 'mt-2' }) => (
    <dd
        className={className}
        style={{
            ...bodyStyle,
            fontSize: '0.98rem',
            lineHeight: 1.6,
            color: cell.textColor,
            fontWeight: cell.textColor === INK ? 500 : 400,
        }}
    >
        {cell.text}
    </dd>
);

/** Une cellule teintée : bordée (`card`) ou bande à fond perdu (`band`). */
const Cell: React.FC<{ cell: UseCaseCell; shape: 'card' | 'band' }> = ({ cell, shape }) => (
    <div
        className={shape === 'card' ? 'rounded-xl p-5' : 'px-5 py-4 last:flex-1'}
        style={{
            backgroundColor: cell.background,
            border: shape === 'card' ? `1px solid ${cell.border}` : undefined,
            borderTop: shape === 'band' ? `1px solid ${cell.border}` : undefined,
        }}
    >
        <CellLabel cell={cell} />
        <CellText cell={cell} />
    </div>
);

type CasesVariant = NonNullable<SolutionVariant['cases']>;

/** Un cas en bureau, dans la forme choisie par la page. */
const UseCaseDesktop: React.FC<{ useCase: SolutionUseCase; variant: CasesVariant }> = ({ useCase, variant }) => {
    const cells = useCaseCells(useCase);
    const [before, setup, result] = cells;

    if (variant === 'flow') {
        // Le flux : les trois temps reliés par des flèches.
        return (
            <dl className="mt-6 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1.15fr)] gap-2 items-stretch">
                {cells.map((cell, i) => (
                    <React.Fragment key={cell.key}>
                        {i > 0 && (
                            <div aria-hidden="true" className="flex items-center px-0.5">
                                <ArrowRight className="w-6 h-6" strokeWidth={2} style={{ color: GREEN }} />
                            </div>
                        )}
                        <Cell cell={cell} shape="card" />
                    </React.Fragment>
                ))}
            </dl>
        );
    }

    if (variant === 'beforeAfter') {
        // Avant | après, la mise en place en légende.
        return (
            <>
                <dl className="mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-3">
                    <Cell cell={before} shape="card" />
                    <Cell cell={result} shape="card" />
                </dl>
                <p className="mt-3 text-[0.95rem]" style={{ ...bodyStyle, lineHeight: 1.6 }}>
                    <span style={{ color: INK, fontWeight: 600 }}>{setup.label} : </span>
                    {setup.text}
                </p>
            </>
        );
    }

    if (variant === 'rows') {
        // Des lignes, comme un tableau : libellé à gauche, texte à droite, le résultat surligné.
        return (
            <dl className="mt-5">
                {cells.map((cell, i) => (
                    <div
                        key={cell.key}
                        className="grid grid-cols-[minmax(0,13rem)_minmax(0,1fr)] gap-x-8 px-4 py-3.5 rounded-xl"
                        style={{
                            borderTop: i > 0 && cell.key !== 'result' ? `1px solid ${LINE}` : undefined,
                            backgroundColor: cell.key === 'result' ? cell.background : undefined,
                        }}
                    >
                        <CellLabel cell={cell} />
                        <CellText cell={cell} className="" />
                    </div>
                ))}
            </dl>
        );
    }

    return (
        <dl className="mt-6 grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)] gap-3">
            {cells.map((cell) => (
                <Cell key={cell.key} cell={cell} shape="card" />
            ))}
        </dl>
    );
};

const useCaseTitleStyle: React.CSSProperties = {
    fontFamily: TITLE,
    fontWeight: 700,
    fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)',
    lineHeight: 1.3,
    letterSpacing: '-0.03em',
    color: INK,
};

/** Largeur d'une carte du carrousel mobile, en % du volet. */
const CAROUSEL_CARD = 86;

/**
 * Mobile : une situation à la fois, à faire glisser. L'amorce de la carte
 * suivante reste visible pour inviter au geste, et les points disent où l'on est.
 */
const UseCasesCarousel: React.FC<{ useCases: SolutionUseCase[] }> = ({ useCases }) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const cardStep = () => {
        const track = trackRef.current;
        const card = track?.firstElementChild as HTMLElement | null;
        return card ? card.offsetWidth + 16 : 1;
    };

    const onScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const next = Math.round(track.scrollLeft / cardStep());
        if (next !== index) setIndex(Math.max(0, Math.min(useCases.length - 1, next)));
    };

    const goTo = (i: number) => trackRef.current?.scrollTo({ left: i * cardStep(), behavior: scrollBehavior() });

    return (
        <div className="md:hidden mt-6">
            <div
                ref={trackRef}
                onScroll={onScroll}
                className="-mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1"
                style={{ scrollPaddingInline: '1.5rem' }}
            >
                {useCases.map((useCase) => (
                    <article
                        key={useCase.title}
                        className="snap-start shrink-0 flex flex-col rounded-2xl bg-white overflow-hidden"
                        style={{ width: `${CAROUSEL_CARD}%`, border: `1px solid ${LINE}` }}
                    >
                        <h3 className="px-5 pt-5 pb-4" style={useCaseTitleStyle}>
                            {useCase.title}
                        </h3>
                        {/* Les bandes remplissent la carte de haut en bas : la dernière s'étire. */}
                        <dl className="flex-1 flex flex-col">
                            {useCaseCells(useCase).map((cell) => (
                                <Cell key={cell.key} cell={cell} shape="band" />
                            ))}
                        </dl>
                    </article>
                ))}
            </div>

            <div className="mt-3 flex items-center justify-between">
                <div className="flex -ml-4" role="group" aria-label="Choisir une situation">
                    {useCases.map((useCase, i) => (
                        <button
                            key={useCase.title}
                            type="button"
                            aria-label={`Situation ${i + 1} : ${useCase.title}`}
                            aria-current={i === index ? 'true' : undefined}
                            onClick={() => goTo(i)}
                            className={`min-w-11 min-h-11 flex items-center justify-center rounded-full ${FOCUS}`}
                        >
                            <span
                                aria-hidden="true"
                                className="block h-2 rounded-full transition-all duration-300"
                                style={{ width: i === index ? 20 : 8, backgroundColor: i === index ? GREEN : '#CFCABB' }}
                            />
                        </button>
                    ))}
                </div>
                <p className="text-[0.85rem] tabular-nums" style={bodyStyle}>
                    {index + 1} / {useCases.length}
                </p>
            </div>
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Hero : le texte, l'image et les repères, composés selon la page
 * ------------------------------------------------------------------ */

const HeroCopy: React.FC<{ data: SolutionData; kind: DeepDiveKind; centered?: boolean }> = ({
    data,
    kind,
    centered = false,
}) => {
    // Promesse : dernier mot en vert, le reste à l'encre
    const promiseWords = data.promise.trim().split(' ');
    const promiseEnd = promiseWords.pop();
    const promiseLead = promiseWords.join(' ');

    const scrollToMethod = () =>
        document.getElementById(METHOD_ID)?.scrollIntoView({ behavior: scrollBehavior() });

    return (
        <div className={centered ? 'text-center max-w-[760px] mx-auto' : ''}>
            {/* On sait tout de suite où l'on est : Solutions › <Offre> */}
            <nav
                aria-label="Fil d'Ariane"
                className={`flex flex-wrap items-center gap-2.5 mb-6 md:mb-8 ${centered ? 'justify-center' : ''}`}
            >
                <Link
                    to="/solutions"
                    className={`text-[0.95rem] font-medium rounded-sm transition-colors hover:text-[#027333] ${FOCUS}`}
                    style={{ fontFamily: BODY, color: MUTED }}
                >
                    Solutions
                </Link>
                <ChevronRight aria-hidden="true" className="w-4 h-4" style={{ color: 'rgba(38,38,38,0.35)' }} />
                <span
                    aria-current="page"
                    className="inline-flex items-center rounded-full px-5 py-2"
                    style={{ backgroundColor: GREEN, color: '#FFFFFF', fontFamily: BODY }}
                >
                    <span className="text-[1.15rem] font-semibold tracking-[-0.015em]">{data.title}</span>
                </span>
            </nav>

            <h1
                style={{
                    fontFamily: TITLE,
                    fontWeight: 800,
                    fontSize: 'clamp(2.5rem, 4.4vw, 4.1rem)',
                    lineHeight: 1.03,
                    letterSpacing: '-0.05em',
                    color: INK,
                    textWrap: 'balance',
                }}
            >
                {promiseLead} <span style={{ color: GREEN }}>{promiseEnd}</span>
            </h1>

            {/* La sous-promesse validée, quand elle existe, tient lieu d'accroche :
                deux niveaux sous le titre, pas trois. */}
            <p
                className={`mt-6 ${centered ? 'mx-auto' : ''}`}
                style={{
                    ...bodyStyle,
                    fontSize: 'clamp(1.15rem, 1.5vw, 1.32rem)',
                    lineHeight: 1.5,
                    maxWidth: centered ? '44ch' : '34ch',
                    color: 'rgba(38,38,38,0.78)',
                }}
            >
                {data.subPromise ?? data.shortDescription}
            </p>

            <div
                className={`mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-7 ${
                    centered ? 'sm:justify-center' : ''
                }`}
            >
                <Link to="/contact" className={PRIMARY_BUTTON} style={{ fontFamily: BODY, letterSpacing: '-0.03em' }}>
                    {data.ctaLabel}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <button
                    type="button"
                    onClick={scrollToMethod}
                    className={`group inline-flex items-center justify-center gap-2 py-2.5 text-[1.02rem] font-semibold rounded-md transition-colors hover:text-[#027333] ${FOCUS}`}
                    style={{ fontFamily: BODY, color: INK, letterSpacing: '-0.02em' }}
                >
                    {kind === 'catalogue' ? 'Voir le catalogue' : 'Voir le déroulé'}
                    <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

/** `wide` : recadrée en bandeau sur bureau ; `crop` : où caler le recadrage. */
const HeroImage: React.FC<{ data: SolutionData; wide?: 'banner' | 'panel'; crop?: string }> = ({
    data,
    wide,
    crop = 'center',
}) => (
    <img
        src={data.heroImage}
        alt={data.heroImageAlt}
        width={1536}
        height={1024}
        decoding="async"
        className={`w-full object-cover rounded-[20px] ${
            wide === 'banner' ? 'aspect-[3/2] md:aspect-[21/9]' : wide === 'panel' ? 'aspect-[3/2] md:aspect-[2/1]' : 'aspect-[3/2]'
        }`}
        style={{ border: `1px solid ${LINE}`, boxShadow: SHADOW, objectPosition: crop }}
    />
);

/** Repères : ce qu'il faut savoir en un coup d'œil. */
const KeyFacts: React.FC<{ facts: SolutionKeyFact[]; className?: string; raised?: boolean }> = ({
    facts,
    className = '',
    raised = false,
}) => (
    <dl
        className={`grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl ${className}`}
        style={{ backgroundColor: LINE, border: `1px solid ${LINE}`, boxShadow: raised ? SHADOW : undefined }}
    >
        {facts.map((fact) => {
            const FactIcon = resolveIcon(fact.icon);
            return (
                <div key={fact.label} className="bg-white p-4 md:p-6 flex flex-col">
                    <dt className="flex items-center gap-2 text-[0.85rem] font-medium" style={bodyStyle}>
                        <FactIcon className="w-4 h-4" style={{ color: GREEN }} aria-hidden="true" />
                        {fact.label}
                    </dt>
                    <dd
                        className="mt-2"
                        style={{
                            fontFamily: TITLE,
                            fontWeight: 700,
                            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                            lineHeight: 1.3,
                            letterSpacing: '-0.03em',
                            color: INK,
                        }}
                    >
                        {fact.value}
                    </dd>
                </div>
            );
        })}
    </dl>
);

type HeroVariant = NonNullable<SolutionVariant['hero']>;

const Hero: React.FC<{ data: SolutionData; kind: DeepDiveKind; variant: HeroVariant }> = ({ data, kind, variant }) => {
    const facts = data.keyFacts ?? [];

    if (variant === 'banner') {
        // Le texte, puis l'image sur toute la largeur ; les repères mordent sur son bord bas.
        return (
            <>
                <div className="max-w-[760px]">
                    <HeroCopy data={data} kind={kind} />
                </div>
                <div className="mt-10 md:mt-14">
                    <HeroImage data={data} wide="banner" />
                </div>
                {facts.length > 0 && (
                    <div className="relative z-10 md:mx-10 lg:mx-16">
                        <KeyFacts facts={facts} className="mt-6 md:-mt-14" raised />
                    </div>
                )}
            </>
        );
    }

    if (variant === 'centered') {
        // Tout centré, les repères sous le texte, l'image large en pied de hero.
        // Sur mobile, la pile reste celle des autres pages : texte, image, repères.
        return (
            <>
                <HeroCopy data={data} kind={kind} centered />
                <div className="flex flex-col">
                    {facts.length > 0 && (
                        <div className="order-2 md:order-1 mt-6 md:mt-14">
                            <KeyFacts facts={facts} />
                        </div>
                    )}
                    <div className="order-1 md:order-2 mt-10 md:mt-8">
                        <HeroImage data={data} wide="panel" crop="center 22%" />
                    </div>
                </div>
            </>
        );
    }

    const imageFirst = variant === 'split-left';
    return (
        <>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className={`lg:col-span-6 ${imageFirst ? 'lg:order-2' : ''}`}>
                    <HeroCopy data={data} kind={kind} />
                </div>
                <div className={`lg:col-span-6 ${imageFirst ? 'lg:order-1' : ''}`}>
                    <HeroImage data={data} />
                </div>
            </div>
            {facts.length > 0 && <KeyFacts facts={facts} className="mt-10 md:mt-20" />}
        </>
    );
};

/* ------------------------------------------------------------------ *
 *  Page
 * ------------------------------------------------------------------ */

const CompactSolutionPage: React.FC<{ data: SolutionData }> = ({ data }) => {
    const kind: DeepDiveKind = data.deepDive.kind ?? 'sequence';
    const variant = data.variant ?? {};
    const heroVariant: HeroVariant = variant.hero ?? 'split';
    const catalogueVariant = variant.catalogue ?? 'selector';
    const casesVariant: CasesVariant = variant.cases ?? 'cells';
    const labels = {
        gains: variant.labels?.gains ?? 'Ce que ça change pour vous',
        cases: variant.labels?.cases ?? 'Des situations concrètes',
    };
    const audiences = data.audiences ?? [];
    const chapters = data.deepDive.chapters;

    // Le bloc central en bureau, et ce qui le remplace sur mobile.
    let deepDiveDesktop: React.ReactNode;
    let deepDiveMobile: React.ReactNode = <ExpandableChapters chapters={chapters} kind={kind} scope="mobile" />;
    if (kind === 'sequence') {
        deepDiveDesktop = <MethodTimeline chapters={chapters} ctaLabel={data.ctaLabel} />;
    } else if (catalogueVariant === 'chips') {
        deepDiveDesktop = <CatalogueChips chapters={chapters} ctaLabel={data.ctaLabel} />;
    } else if (catalogueVariant === 'tiles') {
        deepDiveDesktop = <CatalogueTiles chapters={chapters} ctaLabel={data.ctaLabel} />;
    } else if (catalogueVariant === 'syllabus') {
        deepDiveDesktop = <Syllabus chapters={chapters} />;
    } else if (catalogueVariant === 'accordion') {
        deepDiveDesktop = <ExpandableChapters chapters={chapters} kind={kind} scope="all" />;
        deepDiveMobile = null;
    } else {
        deepDiveDesktop = <CatalogueSelector chapters={chapters} ctaLabel={data.ctaLabel} />;
    }

    return (
        <div className="bg-white text-[#262626] selection:bg-[#93BF9E]/50 selection:text-[#262626]">
            {/* ============ HERO CLAIR ============ */}
            <section className="px-6 pt-28 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-[1200px] mx-auto">
                    <Hero data={data} kind={kind} variant={heroVariant} />
                </div>
            </section>

            {/* ============ LE CONSTAT + CE QUE ÇA CHANGE ============ */}
            <section className="px-6 pt-6 pb-14 md:pt-12 md:pb-28">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-5">
                        <h2 style={h2Style}>{labels.gains}</h2>
                        <p className="mt-5 md:mt-6" style={{ ...bodyStyle, fontSize: '1.12rem', lineHeight: 1.65, maxWidth: '46ch' }}>
                            {data.heroTagline}
                            {data.heroTaglineStrong && (
                                <>
                                    {' '}
                                    <strong style={{ color: INK, fontWeight: 600 }}>{data.heroTaglineStrong}</strong>
                                </>
                            )}
                        </p>
                    </div>

                    <ul className="lg:col-span-7">
                        {data.gains.map((gain, i) => {
                            const GainIcon = GAIN_ICONS[i % GAIN_ICONS.length];
                            return (
                                <li
                                    key={gain.label}
                                    className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 py-6 md:py-7 first:pt-0 last:pb-0"
                                    style={{ borderBottom: i < data.gains.length - 1 ? `1px solid ${LINE}` : 'none' }}
                                >
                                    <GainIcon className="w-6 h-6 mt-0.5" style={{ color: GREEN }} aria-hidden="true" />
                                    <div>
                                        <h3
                                            style={{
                                                fontFamily: TITLE,
                                                fontWeight: 700,
                                                fontSize: 'clamp(1.15rem, 1.6vw, 1.35rem)',
                                                lineHeight: 1.25,
                                                letterSpacing: '-0.035em',
                                                color: INK,
                                            }}
                                        >
                                            {gain.label}
                                        </h3>
                                        <p className="mt-2" style={{ ...bodyStyle, fontSize: '1.02rem', lineHeight: 1.6 }}>
                                            {gain.scenario}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ============ MÉTHODE OU CATALOGUE + PRINCIPES ============ */}
            <section
                id={METHOD_ID}
                className="px-6 py-14 md:py-28 scroll-mt-24"
                style={{ backgroundColor: PAPER, borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}
            >
                <div className="max-w-[1200px] mx-auto">
                    <div className="max-w-[720px]">
                        <h2 style={h2Style}>{data.deepDive.title}</h2>
                        <p className="mt-5" style={{ ...bodyStyle, fontSize: '1.08rem', lineHeight: 1.65 }}>
                            {data.deepDive.intro}
                        </p>
                    </div>

                    {deepDiveDesktop}
                    {deepDiveMobile}

                    {/* En mode catalogue, la vraie séquence est celle de la mise en place. */}
                    {kind === 'catalogue' && data.steps.length > 0 && (
                        <div className="mt-14 md:mt-20">
                            <h3 style={h3Style}>Comment nous procédons</h3>
                            <div className="mt-8 md:mt-10">
                                <StepsStrip steps={data.steps} />
                            </div>
                        </div>
                    )}

                    <div className="mt-14 md:mt-20">
                        <h3 style={h3Style}>Nos principes, à chaque étape</h3>
                        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
                            {data.pillars.map((pillar) => (
                                <li key={pillar.title} className="pt-4" style={{ borderTop: `2px solid ${GREEN}` }}>
                                    <p
                                        style={{
                                            fontFamily: TITLE,
                                            fontWeight: 700,
                                            fontSize: '1.05rem',
                                            letterSpacing: '-0.025em',
                                            color: INK,
                                        }}
                                    >
                                        {pillar.title}
                                    </p>
                                    <p className="mt-2" style={{ ...bodyStyle, fontSize: '0.96rem', lineHeight: 1.6 }}>
                                        {pillar.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============ POUR QUI + CAS CONCRETS ============ */}
            <section className="px-6 py-14 md:py-28">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {audiences.length > 0 && (
                        <div className="min-w-0 lg:col-span-4">
                            <div className="lg:sticky lg:top-32">
                                <h2 style={h2Style}>Pour qui ?</h2>
                                <ul className="mt-6 md:mt-8 space-y-6 md:space-y-7">
                                    {audiences.map((audience) => (
                                        <li key={audience.title}>
                                            <p
                                                style={{
                                                    fontFamily: TITLE,
                                                    fontWeight: 700,
                                                    fontSize: '1.08rem',
                                                    letterSpacing: '-0.025em',
                                                    color: INK,
                                                }}
                                            >
                                                {audience.title}
                                            </p>
                                            <p className="mt-1.5" style={{ ...bodyStyle, fontSize: '0.98rem', lineHeight: 1.6 }}>
                                                {audience.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    <div className={`min-w-0 ${audiences.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
                        <h2 style={h2Style}>{labels.cases}</h2>

                        {/* Bureau : une situation sous l'autre, dans la forme choisie par la page */}
                        <div className="hidden md:block mt-8">
                            {data.useCases.map((useCase) => (
                                <article key={useCase.title} className="py-8" style={{ borderTop: `1px solid ${LINE}` }}>
                                    <h3 style={useCaseTitleStyle}>{useCase.title}</h3>
                                    <UseCaseDesktop useCase={useCase} variant={casesVariant} />
                                </article>
                            ))}
                        </div>

                        <UseCasesCarousel useCases={data.useCases} />
                    </div>
                </div>
            </section>

            {/* ============ CONTACT (CLAIR) ============ */}
            <section className="px-6 pb-16 md:pb-32">
                <div
                    className="max-w-[1200px] mx-auto rounded-[28px] p-7 sm:p-12 md:p-16 grid md:grid-cols-[minmax(0,1fr)_auto] items-center gap-7 md:gap-14"
                    style={{ backgroundColor: PAPER, border: `1px solid ${LINE}` }}
                >
                    <div>
                        <h2 style={h2Style}>{data.ctaTitle}</h2>
                        <p className="mt-4" style={{ ...bodyStyle, fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '52ch' }}>
                            {data.ctaText}
                        </p>
                    </div>
                    <Link to="/contact" className={PRIMARY_BUTTON} style={{ fontFamily: BODY, letterSpacing: '-0.03em' }}>
                        {data.ctaLabel}
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CompactSolutionPage;
