import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions/index';

// Tokens éditoriaux
const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'JetBrains Mono', monospace";

const GREEN = '#027333';    // vert primary — accents
const PAPER = '#FCFBF8';    // fond papier
const GREY = '#5C645C';     // gris texte

const TITLE = 'Du temps, de la clarté, des résultats.';

const SolutionsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    // Première solution affichée par défaut — la colonne image n'est jamais vide.
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

            <div className="px-6 pt-14 pb-24 md:pt-16 md:pb-28">
                <div
                    className={`max-w-[1380px] mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* ===== En-tête + liste (gauche) / illustration (droite) =====
                        L'en-tête est dans la colonne de gauche : l'illustration
                        court du haut du titre jusqu'au bas de la dernière pilule. */}
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
                                <h2
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 800,
                                        fontSize: 'clamp(2.2rem, 3.6vw, 3.4rem)',
                                        lineHeight: 1.04,
                                        letterSpacing: '-0.05em',
                                        color: '#262626',
                                    }}
                                >
                                    {TITLE}
                                </h2>
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
                                            {/* Sous-titre visible uniquement en mobile (pas d'illustration) */}
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

                        {/* Colonne droite — promesse puis illustration de l'expertise survolée */}
                        <div className={`sol-media sol-pal-${activeIndex + 1}`}>
                            <div className="sol-media-stack">
                                {solutionsList.map((solution, i) => {
                                    const isActive = i === activeIndex;
                                    return (
                                        <Link
                                            key={solution.slug}
                                            to={`/solutions/${solution.slug}`}
                                            className={`sol-media-item ${isActive ? 'is-active' : ''}`}
                                            aria-hidden={!isActive}
                                            inert={!isActive || undefined}
                                            tabIndex={isActive ? undefined : -1}
                                        >
                                            <span
                                                className="sol-media-promise"
                                                style={{
                                                    fontFamily: DISPLAY,
                                                    fontWeight: 600,
                                                    color: GREEN,
                                                    letterSpacing: '-0.02em',
                                                }}
                                            >
                                                {solution.promise}
                                            </span>
                                            <span
                                                className="sol-media-lede"
                                                style={{
                                                    fontFamily: BODY,
                                                    color: GREY,
                                                }}
                                            >
                                                {solution.shortDescription}
                                            </span>
                                            <span className="sol-media-frame">
                                                <img
                                                    src={solution.heroImage}
                                                    alt={solution.heroImageAlt}
                                                    loading="lazy"
                                                    decoding="async"
                                                    width={1536}
                                                    height={1024}
                                                />
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
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
                    grid-template-columns: minmax(0, 1fr) minmax(0, 1.12fr);
                    gap: 3.5rem;
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
                   dernière reste toujours aligné sur le bas de l'illustration. */
                .sol-list > .sol-btn { flex: 1 0 auto; }
                .sol-title { font-size: clamp(1.25rem, 1.9vw, 1.65rem); }

                /* L'illustration garde le même cadrage 3:2 pour les 5 expertises
                   et se centre verticalement en regard des pilules. */
                .sol-media {
                    /* étirée sur toute la hauteur : promesse en haut, image en bas */
                    align-self: stretch;
                    display: flex;
                    /* le liseré glisse d'une palette à l'autre plutôt que de sauter */
                    transition:
                        --card-b-1 0.5s,
                        --card-b-2 0.5s,
                        --card-b-3 0.5s,
                        --card-b-4 0.5s;
                }
                .sol-media-stack { display: grid; flex: 1; }
                .sol-media-item {
                    grid-area: 1 / 1;
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    visibility: hidden;
                    transform: scale(1.012);
                    transition:
                        opacity 0.42s ease,
                        transform 0.42s ease,
                        visibility 0.42s;
                }
                .sol-media-item.is-active {
                    opacity: 1;
                    visibility: visible;
                    transform: none;
                }
                /* Promesse de l'expertise — hauteur réservée sur deux lignes pour
                   qu'elle occupe toujours la même place d'une expertise à l'autre. */
                .sol-media-promise {
                    display: flex;
                    align-items: flex-end;
                    min-height: 2.6em;
                    font-size: clamp(1.25rem, 1.65vw, 1.6rem);
                    line-height: 1.3;
                }
                /* Résumé de l'expertise — occupe l'espace entre la promesse (fixe,
                   en haut) et l'image (poussée en bas par sa marge automatique). */
                .sol-media-lede {
                    display: block;
                    margin-top: 0.9rem;
                    margin-bottom: 1.5rem;
                    max-width: 62ch;
                    font-size: 1.02rem;
                    line-height: 1.6;
                }
                .sol-media-frame {
                    margin-top: auto;
                    position: relative;
                    display: block;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #EFEBE1;
                    box-shadow:
                        0 1px 2px rgba(22, 32, 27, 0.04),
                        0 26px 56px -32px rgba(22, 32, 27, 0.45);
                }
                .sol-media-item img {
                    display: block;
                    width: 100%;
                    aspect-ratio: 3 / 2;
                    object-fit: cover;
                    object-position: center;
                }
                /* Liseré dégradé accordé à la palette de la pilule active */
                .sol-media-frame::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    padding: 2.5px;
                    background: linear-gradient(
                        140deg,
                        var(--card-b-1) 0%,
                        var(--card-b-2) 34%,
                        var(--card-b-3) 67%,
                        var(--card-b-4) 100%
                    );
                    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    mask-composite: exclude;
                    pointer-events: none;
                }
                @media (prefers-reduced-motion: reduce) {
                    .sol-media-item { transition: none; }
                }

                /* Sous 1024px : une seule colonne, les pilules portent leur
                   sous-titre et l'illustration s'efface (pas de survol tactile). */
                @media (max-width: 1023px) {
                    .sol-layout { grid-template-columns: 1fr; gap: 0; }
                    .sol-list { flex: none; }
                    .sol-list > .sol-btn { flex: none; }
                    .sol-media { display: none; }
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
