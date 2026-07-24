import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions/index';

// Tokens éditoriaux (ambiance papier conservée)
const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'JetBrains Mono', monospace";

const INK = '#16201B';      // encre — titres
const GREEN = '#027333';    // vert primary — hover, accents
const PAPER = '#FCFBF8';    // fond papier
const CREAM = '#F4F1E9';    // crème — panneau
const GREY = '#5C645C';     // gris texte
const HAIRLINE = '#E5E1D6'; // fines lignes

const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';

const SolutionsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    // Première solution active par défaut — le panneau n'est jamais vide.
    const [activeIndex, setActiveIndex] = useState(0);

    const active = solutionsList[activeIndex];

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

            <div className="px-6 pt-32 pb-36 md:pt-40 md:pb-44">
                <div
                    className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* ===== En-tête de section ===== */}
                    <div className="mb-14 md:mb-20 max-w-3xl">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="block w-8 h-px" style={{ background: GREEN }} />
                            <span
                                style={{
                                    fontFamily: BODY,
                                    color: GREY,
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.22em',
                                }}
                            >
                                Nos solutions
                            </span>
                        </div>

                        <h2
                            style={{
                                fontFamily: DISPLAY,
                                fontWeight: 700,
                                color: INK,
                                lineHeight: 1.05,
                                letterSpacing: '-0.02em',
                            }}
                            className="text-4xl md:text-6xl mb-6"
                        >
                            Du temps, de la clarté, des résultats.
                        </h2>

                        <p
                            style={{
                                fontFamily: BODY,
                                color: GREY,
                                fontSize: '1.2rem',
                                lineHeight: 1.55,
                            }}
                            className="max-w-xl"
                        >
                            Cinq solutions concrètes pour libérer du temps, réduire vos coûts
                            et fiabiliser vos opérations — au service de votre métier, pas de
                            la technologie.
                        </p>
                    </div>

                    {/* ===== Liste + panneau ===== */}
                    <div className="sol-layout">
                        {/* Colonne gauche — 5 grands titres */}
                        {/* Au mouseleave, la dernière solution survolée reste active (jamais de panneau vide) */}
                        <div className="sol-list" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
                            {solutionsList.map((solution, i) => {
                                const isActive = i === activeIndex;
                                return (
                                    <Link
                                        key={solution.slug}
                                        to={`/solutions/${solution.slug}`}
                                        className="sol-row group"
                                        style={{ borderBottom: `1px solid ${HAIRLINE}` }}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        onFocus={() => setActiveIndex(i)}
                                    >
                                        <span
                                            className="sol-num"
                                            style={{
                                                fontFamily: MONO,
                                                color: isActive ? GREEN : GREY,
                                                fontSize: '0.8rem',
                                                letterSpacing: '0.04em',
                                                transition: `color 0.3s ${EASE}`,
                                            }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="min-w-0">
                                            <span
                                                className="sol-title block"
                                                style={{
                                                    fontFamily: DISPLAY,
                                                    fontWeight: 500,
                                                    letterSpacing: '-0.02em',
                                                    lineHeight: 1.08,
                                                    color: isActive ? GREEN : INK,
                                                    transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                                                    transition: `color 0.3s ${EASE}, transform 0.35s ${EASE}`,
                                                }}
                                            >
                                                {solution.title}
                                            </span>
                                            {/* Sous-titre visible uniquement en mobile */}
                                            <span
                                                className="sol-short block lg:hidden"
                                                style={{
                                                    fontFamily: BODY,
                                                    color: GREY,
                                                    fontSize: '0.92rem',
                                                    lineHeight: 1.5,
                                                    marginTop: '0.45rem',
                                                    maxWidth: '46ch',
                                                }}
                                            >
                                                {solution.shortDescription}
                                            </span>
                                        </span>
                                        <span
                                            className="justify-self-end"
                                            style={{
                                                color: isActive ? GREEN : HAIRLINE,
                                                transform: isActive ? 'translate(2px, -2px)' : 'translate(0, 0)',
                                                transition: `color 0.3s ${EASE}, transform 0.3s ${EASE}`,
                                            }}
                                        >
                                            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Colonne droite — panneau fixe (desktop uniquement) */}
                        <aside className="sol-panel hidden lg:block">
                            <div
                                className="sticky top-28 rounded-2xl overflow-hidden"
                                style={{
                                    background: CREAM,
                                    border: `1px solid ${HAIRLINE}`,
                                }}
                            >
                                {/* key = slug → relance le fondu à chaque changement */}
                                <div key={active.slug} className="sol-panel-inner p-9">
                                    <span
                                        style={{
                                            fontFamily: DISPLAY,
                                            fontWeight: 700,
                                            fontSize: '4.2rem',
                                            lineHeight: 1,
                                            letterSpacing: '-0.04em',
                                            color: 'transparent',
                                            WebkitTextStroke: `1px ${GREEN}`,
                                            display: 'block',
                                            opacity: 0.55,
                                        }}
                                        aria-hidden="true"
                                    >
                                        {String(activeIndex + 1).padStart(2, '0')}
                                    </span>

                                    <p
                                        className="mt-6"
                                        style={{
                                            fontFamily: DISPLAY,
                                            fontWeight: 500,
                                            color: INK,
                                            fontSize: '1.2rem',
                                            lineHeight: 1.35,
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        {active.shortDescription}
                                    </p>

                                    <ul
                                        className="mt-7 pt-7 space-y-4"
                                        style={{ borderTop: `1px solid ${HAIRLINE}` }}
                                    >
                                        {active.gains.slice(0, 3).map((gain, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span
                                                    className="mt-[0.55em] block w-1.5 h-1.5 rounded-full shrink-0"
                                                    style={{ background: GREEN }}
                                                />
                                                <span
                                                    style={{
                                                        fontFamily: BODY,
                                                        color: GREY,
                                                        fontSize: '0.95rem',
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    {gain.scenario}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        to={`/solutions/${active.slug}`}
                                        className="mt-9 inline-flex items-center gap-2 group/link"
                                        style={{
                                            fontFamily: BODY,
                                            fontWeight: 700,
                                            fontSize: '0.9rem',
                                            color: GREEN,
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
                    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
                    gap: 4.5rem;
                    align-items: start;
                }
                .sol-row {
                    display: grid;
                    grid-template-columns: 52px 1fr auto;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 34px 4px;
                }
                .sol-title { font-size: clamp(1.6rem, 2.6vw, 2.4rem); }
                .sol-panel-inner { animation: solPanelIn 0.45s ${EASE} both; }
                @keyframes solPanelIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 1023px) {
                    .sol-layout { grid-template-columns: 1fr; gap: 0; }
                    .sol-row {
                        grid-template-columns: 40px 1fr auto;
                        align-items: start;
                        padding: 26px 2px;
                    }
                    .sol-row .sol-num { padding-top: 0.35rem; }
                    .sol-title { font-size: 1.45rem; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .sol-panel-inner { animation: none; }
                }
            `}</style>
        </section>
    );
};

export default SolutionsSection;
