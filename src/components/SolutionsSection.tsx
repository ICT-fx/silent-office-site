import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions/index';

// Tokens éditoriaux
const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'JetBrains Mono', monospace";

const INK = '#16201B';      // encre — titres
const GREEN = '#027333';    // vert primary — accents
const PAPER = '#FCFBF8';    // fond papier
const GREY = '#5C645C';     // gris texte
const HAIRLINE = '#E8E4DA'; // fines lignes

const TITLE = 'Du temps, de la clarté, des résultats.';
// Caractères de brouillage façon "texte chiffré"
// Glyphes volontairement étroits : centrés dans la cellule de la lettre finale,
// ils ne débordent pas sur leurs voisins.
const SCRAMBLE_CHARS = '#$1234567<>/*+=?!:;';
const SCRAMBLE_HOLD = 700;    // brouillage pur avant révélation (ms)
const SCRAMBLE_REVEAL = 1800; // durée de la révélation complète (ms)
const SCRAMBLE_TICK = 45;     // cadence de rafraîchissement du brouillage (ms)

const randomChar = () =>
    SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

// Découpage en mots, chaque caractère gardant son index absolu dans TITLE.
// Permet de rendre chaque lettre dans sa propre cellule de largeur fixe :
// la mise en page (largeur, césures, nombre de lignes) reste celle du titre final
// pendant toute l'animation — seul le glyphe change.
const WORDS: { char: string; index: number }[][] = (() => {
    const words: { char: string; index: number }[][] = [];
    let current: { char: string; index: number }[] = [];
    TITLE.split('').forEach((char, index) => {
        if (char === ' ') {
            words.push(current);
            current = [];
            return;
        }
        current.push({ char, index });
    });
    words.push(current);
    return words;
})();

// Titre "déchiffré" : caractères aléatoires qui se figent un à un, dans l'ordre.
// Typographie alignée sur le H1 de la hero (Inter 800, tracking serré).
const ScrambleTitle: React.FC<{ start: boolean }> = ({ start }) => {
    const [display, setDisplay] = useState<string>(() =>
        TITLE.replace(/\S/g, () => randomChar())
    );
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!start || done) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplay(TITLE);
            setDone(true);
            return;
        }

        const startTime = performance.now();
        const interval = window.setInterval(() => {
            const elapsed = performance.now() - startTime;
            const revealed =
                elapsed <= SCRAMBLE_HOLD
                    ? 0
                    : Math.floor(((elapsed - SCRAMBLE_HOLD) / SCRAMBLE_REVEAL) * TITLE.length);

            if (revealed >= TITLE.length) {
                setDisplay(TITLE);
                setDone(true);
                window.clearInterval(interval);
                return;
            }

            setDisplay(
                TITLE.split('')
                    .map((char, i) => {
                        if (i < revealed || char === ' ') return char;
                        return randomChar();
                    })
                    .join('')
            );
        }, SCRAMBLE_TICK);

        return () => window.clearInterval(interval);
    }, [start, done]);

    return (
        <h2
            aria-label={TITLE}
            style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 3.6vw, 3.4rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.05em',
                color: '#262626',
            }}
        >
            <span aria-hidden="true">
                {WORDS.map((word, wordIndex) => (
                    <React.Fragment key={wordIndex}>
                        {/* Le mot ne peut pas se couper : les césures restent celles du texte final. */}
                        <span style={{ whiteSpace: 'nowrap' }}>
                            {word.map(({ char, index }) => (
                                <span
                                    key={index}
                                    style={{ position: 'relative', display: 'inline-block' }}
                                >
                                    {/* Gabarit invisible : impose la largeur de la lettre finale. */}
                                    <span style={{ visibility: 'hidden' }}>{char}</span>
                                    {/* Glyphe visible, centré dans la cellule — n'affecte pas la mise en page. */}
                                    <span
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                        }}
                                    >
                                        {display[index] ?? char}
                                    </span>
                                </span>
                            ))}
                        </span>
                        {wordIndex < WORDS.length - 1 ? ' ' : null}
                    </React.Fragment>
                ))}
            </span>
        </h2>
    );
};

const SolutionsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    // Première solution affichée par défaut — le panneau n'est jamais vide.
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );
        const el = sectionRef.current;
        if (el) observer.observe(el);
        return () => {
            if (el) observer.unobserve(el);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative"
            style={{ background: PAPER }}
        >
            {/* Vague haut — blanc → papier */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
                    <path d="M0,40 C180,80 360,0 540,40 C720,80 900,10 1080,50 C1260,90 1380,20 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
                </svg>
            </div>

            <div className="px-6 pt-24 pb-24 md:pt-28 md:pb-28">
                <div
                    className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* ===== En-tête + liste (gauche) / panneau (droite) =====
                        L'en-tête est dans la colonne de gauche : le panneau court
                        du haut du titre jusqu'au bas de la dernière pilule. */}
                    <div className="sol-layout">
                        <div className="sol-col">
                            {/* En-tête de section */}
                            <div className="mb-10 md:mb-12">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="block h-px w-8" style={{ background: GREEN }} />
                                    <span
                                        style={{
                                            fontFamily: MONO,
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            color: GREY,
                                        }}
                                    >
                                        Nos expertises
                                    </span>
                                </div>
                                <ScrambleTitle start={isVisible} />
                            </div>

                            {/* 5 pilules, palette dégradée du vert (01) au bordeaux (05) */}
                            <div className="sol-list">
                                {solutionsList.map((solution, i) => (
                                    <Link
                                        key={solution.slug}
                                        to={`/solutions/${solution.slug}`}
                                        className={`sol-btn sol-btn-${i + 1}`}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        onFocus={() => setActiveIndex(i)}
                                    >
                                        <span
                                            className="sol-num"
                                            style={{
                                                fontFamily: MONO,
                                                color: 'rgba(255,255,255,0.45)',
                                                fontSize: '0.75rem',
                                                letterSpacing: '0.08em',
                                            }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="min-w-0">
                                            <span
                                                className="sol-title block"
                                                style={{
                                                    fontFamily: DISPLAY,
                                                    fontWeight: 600,
                                                    letterSpacing: '-0.02em',
                                                    lineHeight: 1.1,
                                                    color: '#FFFFFF',
                                                }}
                                            >
                                                {solution.title}
                                            </span>
                                            {/* Sous-titre visible uniquement en mobile (pas de panneau) */}
                                            <span
                                                className="sol-short block lg:hidden"
                                                style={{
                                                    fontFamily: BODY,
                                                    color: 'rgba(255,255,255,0.65)',
                                                    fontSize: '0.88rem',
                                                    lineHeight: 1.5,
                                                    marginTop: '0.4rem',
                                                    maxWidth: '46ch',
                                                }}
                                            >
                                                {solution.shortDescription}
                                            </span>
                                        </span>
                                        <span className="sol-arrow" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                            <ArrowUpRight className="w-5 h-5" strokeWidth={1.75} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Colonne droite — panneau clair, calé du titre au dernier bouton */}
                        <aside className="sol-panel hidden lg:block">
                            <div className={`sol-card sol-card-b-${activeIndex + 1}`}>
                                <div className="sol-card-stack">
                                    {solutionsList.map((solution, i) => {
                                        const isActive = i === activeIndex;
                                        return (
                                            <div
                                                key={solution.slug}
                                                className={`sol-card-item ${isActive ? 'is-active' : ''}`}
                                                aria-hidden={!isActive}
                                                inert={!isActive || undefined}
                                            >
                                                <h3
                                                    style={{
                                                        fontFamily: DISPLAY,
                                                        fontWeight: 600,
                                                        color: INK,
                                                        fontSize: '1.95rem',
                                                        lineHeight: 1.15,
                                                        letterSpacing: '-0.025em',
                                                    }}
                                                >
                                                    {solution.title}
                                                </h3>

                                                <p
                                                    className="mt-4"
                                                    style={{
                                                        fontFamily: DISPLAY,
                                                        fontWeight: 500,
                                                        color: GREEN,
                                                        fontSize: '1.15rem',
                                                        lineHeight: 1.35,
                                                        letterSpacing: '-0.01em',
                                                    }}
                                                >
                                                    {solution.promise}
                                                </p>

                                                <p
                                                    className="mt-4"
                                                    style={{
                                                        fontFamily: BODY,
                                                        color: GREY,
                                                        fontSize: '1.04rem',
                                                        lineHeight: 1.6,
                                                    }}
                                                >
                                                    {solution.shortDescription}
                                                </p>

                                                <ul
                                                    className="mt-7 pt-7 space-y-4"
                                                    style={{ borderTop: `1px solid ${HAIRLINE}` }}
                                                >
                                                    {solution.gains.slice(0, 3).map((gain, g) => (
                                                        <li key={g} className="flex items-start gap-3">
                                                            <span
                                                                className="mt-[2px] inline-flex items-center justify-center w-5 h-5 rounded-md shrink-0"
                                                                style={{
                                                                    background: '#F0F5F1',
                                                                    border: `1px solid ${HAIRLINE}`,
                                                                }}
                                                            >
                                                                <Check className="w-3 h-3" strokeWidth={2.5} style={{ color: GREEN }} />
                                                            </span>
                                                            <span
                                                                style={{
                                                                    fontFamily: BODY,
                                                                    color: INK,
                                                                    fontSize: '1rem',
                                                                    lineHeight: 1.55,
                                                                }}
                                                            >
                                                                {gain.scenario}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Link
                                                    to={`/solutions/${solution.slug}`}
                                                    className="sol-card-cta group/link"
                                                    style={{
                                                        fontFamily: BODY,
                                                        fontWeight: 700,
                                                        fontSize: '0.82rem',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.14em',
                                                    }}
                                                >
                                                    Découvrir
                                                    <ArrowRight
                                                        className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                                                        strokeWidth={2}
                                                    />
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Reflet rejoué à chaque changement (le `key` remonte l'élément) */}
                                <span key={activeIndex} className="sol-card-sheen" aria-hidden="true" />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            {/* Vague bas — papier → section suivante */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
                <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
                    <path d="M0,20 C240,70 480,0 720,35 C960,70 1200,5 1440,30 L1440,80 L0,80 Z" fill="#FFFFFF" />
                </svg>
            </div>

            {/* Styles responsive de la section */}
            <style>{`
                .sol-layout {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
                    gap: 3rem;
                    align-items: stretch;
                }
                .sol-col {
                    display: flex;
                    flex-direction: column;
                }
                .sol-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    flex: 1;
                }
                /* Les pilules absorbent la hauteur restante : le bas de la
                   dernière reste toujours aligné sur le bas du panneau. */
                .sol-list > .sol-btn { flex: 1 0 auto; }
                .sol-title { font-size: clamp(1.25rem, 1.9vw, 1.65rem); }
                @media (max-width: 1023px) {
                    .sol-layout { grid-template-columns: 1fr; gap: 0; }
                    .sol-list { flex: none; }
                    .sol-list > .sol-btn { flex: none; }
                    .sol-btn {
                        align-items: start;
                        gap: 0.9rem;
                        padding: 1.15rem 1.25rem;
                    }
                    .sol-btn .sol-num { padding-top: 0.3rem; }
                    .sol-title { font-size: 1.2rem; }
                }
            `}</style>
        </section>
    );
};

export default SolutionsSection;
