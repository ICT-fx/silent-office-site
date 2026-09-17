import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsList, type SolutionData } from '../data/solutions';

/* ------------------------------------------------------------------ *
 *  Page /solutions — les cinq offres en grandes planches illustrées,
 *  dans l'ordre officiel 01 → 05. Chaque planche se lève au scroll,
 *  puis son panneau de texte vient s'y poser.
 * ------------------------------------------------------------------ */

/** Police des titres — la même que le h1 du Hero et de Portfolio. */
const TITLE = 'Inter, sans-serif';
/** Police de lecture. */
const BODY = '"DM Sans", sans-serif';

const GREEN = '#027333';
const INK = '#262626';

const INTRO =
    "Cinq façons concrètes de faire gagner du temps, de l'argent et de la clarté à vos équipes.";

const number = (i: number) => String(i + 1).padStart(2, '0');

/* ------------------------------------------------------------------ *
 *  Une planche
 * ------------------------------------------------------------------ */

const Plate: React.FC<{ solution: SolutionData; index: number }> = ({ solution, index }) => {
    const ref = useRef<HTMLElement>(null);
    const [shown, setShown] = useState(false);
    const mirrored = index % 2 === 1;
    // Le panneau ne se pose pas deux fois de suite au même endroit :
    // bas, haut, milieu, puis la séquence reprend.
    const anchor = (['low', 'high', 'mid'] as const)[index % 3];
    const href = `/solutions/${solution.slug}`;
    const titleId = `solution-${solution.slug}-title`;

    // La planche se lève une seule fois, quand elle entre à l'écran.
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={ref}
            id={solution.slug}
            aria-labelledby={titleId}
            className={`plate plate--${anchor} ${mirrored ? 'plate--mirrored' : ''} ${shown ? 'is-in' : ''}`}
        >
            {/* L'illustration est un doublon cliquable du lien du panneau :
                retirée de la tabulation pour ne pas annoncer deux fois l'offre. */}
            <Link to={href} className="plate-art" tabIndex={-1} aria-hidden="true">
                <img
                    src={solution.heroImage}
                    alt=""
                    width={1536}
                    height={1024}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                />
            </Link>

            <div className="plate-label">
                <h2
                    id={titleId}
                    style={{
                        fontFamily: TITLE,
                        fontWeight: 800,
                        fontSize: 'clamp(1.7rem, 2.5vw, 2.35rem)',
                        lineHeight: 1.06,
                        letterSpacing: '-0.05em',
                        color: INK,
                        textWrap: 'balance',
                    }}
                >
                    <span className="plate-index">{number(index)}</span>{' '}
                    <Link to={href} className="plate-title-link">
                        {solution.title}
                    </Link>
                </h2>

                <p
                    className="mt-3"
                    style={{
                        fontFamily: BODY,
                        fontWeight: 600,
                        fontSize: 'clamp(1.08rem, 1.3vw, 1.2rem)',
                        lineHeight: 1.35,
                        letterSpacing: '-0.02em',
                        color: GREEN,
                        textWrap: 'balance',
                    }}
                >
                    {solution.promise}
                </p>

                <p
                    className="mt-3"
                    style={{
                        fontFamily: BODY,
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        letterSpacing: '-0.01em',
                        color: 'rgba(38,38,38,0.72)',
                    }}
                >
                    {solution.shortDescription}
                </p>

                <ul className="plate-gains" aria-label="Ce que vous y gagnez">
                    {solution.gains.map((gain, g) => (
                        <li key={gain.label} style={{ '--g': g } as React.CSSProperties}>
                            <span className="plate-check" aria-hidden="true">
                                <Check className="w-3 h-3" strokeWidth={3} />
                            </span>
                            <span>{gain.label}</span>
                        </li>
                    ))}
                </ul>

                <Link to={href} className="plate-link" aria-describedby={titleId}>
                    Découvrir l'offre
                    <ArrowRight className="w-4 h-4" strokeWidth={2.25} aria-hidden="true" />
                </Link>
            </div>
        </article>
    );
};

/* ------------------------------------------------------------------ *
 *  Page
 * ------------------------------------------------------------------ */

const SolutionsPage: React.FC = () => {
    // L'état caché des planches n'existe que si le JS tourne et que le
    // visiteur accepte le mouvement : sans cela, tout reste visible.
    const [motion, setMotion] = useState(false);
    useLayoutEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!reduced && 'IntersectionObserver' in window) setMotion(true);
    }, []);

    // « Nos solutions » se cale en face de la troisième ligne du sommaire.
    // C'est le titre qui descend : remonter le sommaire le ferait passer
    // sous le header flottant sur les écrans courts. Les hauteurs dépendent
    // du texte et des polices chargées, donc on mesure plutôt que de figer
    // une marge qui dériverait d'une largeur à l'autre.
    const titleRef = useRef<HTMLHeadingElement>(null);
    const headTextRef = useRef<HTMLDivElement>(null);
    const tocRef = useRef<HTMLElement>(null);
    useLayoutEffect(() => {
        const align = () => {
            const title = titleRef.current;
            const head = headTextRef.current;
            const toc = tocRef.current;
            if (!title || !head || !toc) return;
            head.style.marginTop = '';
            toc.style.marginTop = '';
            if (window.innerWidth < 1024) return;
            const third = toc.querySelectorAll('li')[2];
            if (!third) return;
            const t = title.getBoundingClientRect();
            const n = third.getBoundingClientRect();
            // Le sommaire descend d'un cran de plus que l'alignement strict :
            // il respire sous le header au lieu de s'y coller.
            const drop = 40;
            const offset = Math.round(n.top + n.height / 2 - (t.top + t.height / 2));
            toc.style.marginTop = `${drop}px`;
            if (offset >= 0) head.style.marginTop = `${offset + drop}px`;
            else {
                head.style.marginTop = `${drop}px`;
                toc.style.marginTop = `${drop - offset}px`;
            }
        };
        align();
        // Les polices Google arrivent après le premier rendu : on recale.
        if (document.fonts?.ready) document.fonts.ready.then(align).catch(() => undefined);
        const observer = new ResizeObserver(align);
        if (titleRef.current) observer.observe(titleRef.current);
        if (tocRef.current) observer.observe(tocRef.current);
        window.addEventListener('resize', align);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', align);
        };
    }, []);

    return (
        <div className={`solutions-page bg-white ${motion ? 'has-motion' : ''}`}>
            {/* ===== En-tête ===== */}
            <header className="px-6 pt-36 pb-16 md:pt-40 md:pb-20">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    <div ref={headTextRef} className="lg:col-span-7">
                        <h1
                            ref={titleRef}
                            style={{
                                fontFamily: TITLE,
                                fontWeight: 800,
                                fontSize: 'clamp(2.8rem, 5.4vw, 5rem)',
                                lineHeight: 0.98,
                                letterSpacing: '-0.05em',
                                color: INK,
                            }}
                        >
                            Nos solutions
                        </h1>
                        <p
                            className="mt-6"
                            style={{
                                fontFamily: BODY,
                                fontSize: 'clamp(1.12rem, 1.5vw, 1.3rem)',
                                lineHeight: 1.5,
                                letterSpacing: '-0.03em',
                                color: 'rgba(38,38,38,0.72)',
                                maxWidth: '34ch',
                            }}
                        >
                            {INTRO}
                        </p>
                    </div>

                    {/* Sommaire : les cinq offres dans leur ordre, en ancres */}
                    <nav ref={tocRef} aria-label="Les cinq solutions" className="lg:col-span-5">
                        <ol className="toc">
                            {solutionsList.map((solution, i) => (
                                <li key={solution.slug}>
                                    <a href={`#${solution.slug}`}>
                                        <span className="toc-num" style={{ fontFamily: TITLE }}>
                                            {number(i)}
                                        </span>
                                        <span className="toc-title">{solution.title}</span>
                                        <ArrowRight className="toc-arrow w-4 h-4" strokeWidth={2} aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </header>

            {/* ===== Les planches ===== */}
            <div className="px-6 pb-28 md:pb-40">
                <div className="max-w-[1200px] mx-auto plates">
                    {solutionsList.map((solution, i) => (
                        <Plate key={solution.slug} solution={solution} index={i} />
                    ))}
                </div>
            </div>

            {/* ===== Clôture ===== */}
            <section className="closing px-6 py-24 md:py-32" aria-labelledby="solutions-closing-title">
                <div className="closing-card">
                    <h2
                        id="solutions-closing-title"
                        style={{
                            fontFamily: TITLE,
                            fontWeight: 800,
                            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
                            lineHeight: 1.02,
                            letterSpacing: '-0.05em',
                            color: INK,
                            textWrap: 'balance',
                        }}
                    >
                        Un besoin qui ne rentre pas dans une case ?
                    </h2>
                    <p
                        className="mt-6"
                        style={{
                            fontFamily: BODY,
                            fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)',
                            lineHeight: 1.6,
                            letterSpacing: '-0.02em',
                            color: 'rgba(38,38,38,0.72)',
                            maxWidth: '48ch',
                            marginInline: 'auto',
                            textWrap: 'balance',
                        }}
                    >
                        Parlons de votre situation. Nous vous proposons l'accompagnement le plus adapté, sans détour.
                    </p>

                    <Link to="/contact" className="closing-cta" style={{ fontFamily: BODY }}>
                        Réserver un appel
                        <ArrowRight className="w-5 h-5" strokeWidth={2.25} aria-hidden="true" />
                    </Link>

                    <p className="closing-note" style={{ fontFamily: BODY }}>
                        Réponse sous 24h — ou écrivez-nous à{' '}
                        <a href="mailto:contact@flowera.fr">contact@flowera.fr</a>
                    </p>
                </div>
            </section>

            <style>{`
                .solutions-page ::selection { background: rgba(2,115,51,0.16); color: ${INK}; }
                .solutions-page a:focus-visible {
                    outline: 2px solid ${GREEN};
                    outline-offset: 4px;
                    border-radius: 6px;
                }

                /* ---------- Sommaire ---------- */
                .toc { border-top: 1px solid #EDEAE0; }
                .toc li { border-bottom: 1px solid #EDEAE0; }
                .toc a {
                    display: grid;
                    grid-template-columns: 2.75rem minmax(0,1fr) auto;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 0.25rem;
                    font-family: ${TITLE};
                    font-weight: 700;
                    font-size: clamp(1.1rem, 1.55vw, 1.35rem);
                    letter-spacing: -0.035em;
                    color: ${INK};
                    transition: color .25s ease;
                }
                .toc-num {
                    font-weight: 800;
                    font-size: 0.95rem;
                    letter-spacing: -0.02em;
                    font-variant-numeric: tabular-nums;
                    color: ${GREEN};
                }
                .toc-num, .toc-title { transition: transform .35s cubic-bezier(0.22,0.61,0.36,1); }
                .toc a:hover .toc-num, .toc a:hover .toc-title { transform: translateX(0.4rem); }
                .toc-arrow {
                    color: ${GREEN};
                    opacity: 0;
                    transform: translateX(-6px);
                    transition: opacity .25s ease, transform .35s cubic-bezier(0.22,0.61,0.36,1);
                }
                .toc a:hover { color: ${GREEN}; }
                .toc a:hover .toc-arrow { opacity: 1; transform: none; }

                /* ---------- Planches ---------- */
                .plates { display: flex; flex-direction: column; gap: clamp(6rem, 11vw, 10rem); }
                .plate {
                    position: relative;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));
                    align-items: end;
                    /* Sous le header flottant (~104px), avec une respiration.
                       Les planches « high » ajoutent la remontée du panneau. */
                    scroll-margin-top: 9.5rem;
                }
                .plate-art {
                    grid-column: 5 / span 8;
                    grid-row: 1;
                    position: relative;
                    display: block;
                    overflow: hidden;
                    border-radius: 16px;
                    background: #F4EFE4;
                    box-shadow: 0 30px 70px -40px rgba(38,38,38,0.45), 0 2px 6px rgba(38,38,38,0.05);
                }
                .plate-art img {
                    display: block;
                    width: 100%;
                    aspect-ratio: 3 / 2;
                    object-fit: cover;
                    transition: transform 1.1s cubic-bezier(0.16,1,0.3,1);
                }
                .plate:hover .plate-art img { transform: scale(1.025); }

                .plate-label {
                    grid-column: 1 / span 5;
                    grid-row: 1;
                    position: relative;
                    z-index: 1;
                    margin-bottom: -3.5rem;
                    padding: clamp(1.75rem, 2.6vw, 2.5rem);
                    background: #FFFFFF;
                    border: 1px solid #E5E1D6;
                    border-radius: 14px;
                    box-shadow: 0 28px 60px -30px rgba(38,38,38,0.32), 0 3px 8px rgba(38,38,38,0.05);
                }
                .plate--high { scroll-margin-top: 11.6rem; }
                .plate--high .plate-label { align-self: start; margin-bottom: 0; margin-top: -3.5rem; }
                .plate--mid .plate-label { align-self: center; margin-bottom: 0; }
                .plate--mirrored .plate-art { grid-column: 1 / span 8; }
                .plate--mirrored .plate-label { grid-column: 8 / span 5; }

                .plate-index {
                    font-variant-numeric: tabular-nums;
                    color: ${GREEN};
                    margin-right: 0.12em;
                }
                .plate-title-link { color: inherit; transition: color .25s ease; }
                .plate-title-link:hover { color: ${GREEN}; }

                .plate-gains {
                    margin-top: 1.4rem;
                    padding-top: 1.25rem;
                    border-top: 1px solid #EDEAE0;
                    display: grid;
                    gap: 0.6rem;
                }
                .plate-gains li {
                    display: grid;
                    grid-template-columns: 1.25rem minmax(0,1fr);
                    gap: 0.65rem;
                    align-items: start;
                    font-family: ${BODY};
                    font-size: 0.97rem;
                    line-height: 1.45;
                    letter-spacing: -0.015em;
                    color: ${INK};
                }
                .plate-check {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-top: 0.05rem;
                    border-radius: 999px;
                    display: grid;
                    place-items: center;
                    color: #FFFFFF;
                    background: ${GREEN};
                }

                .plate-link {
                    margin-top: 1.75rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.55rem;
                    padding: 0.9rem 1.6rem;
                    border-radius: 11px;
                    font-family: ${BODY};
                    font-weight: 600;
                    font-size: 1rem;
                    letter-spacing: -0.02em;
                    color: #FFFFFF;
                    background: ${GREEN};
                    box-shadow: 0 12px 26px -14px rgba(2,115,51,0.55);
                    transition:
                        transform .35s cubic-bezier(0.22,0.61,0.36,1),
                        box-shadow .35s ease,
                        background-color .25s ease;
                }
                .plate-link svg { transition: transform .35s cubic-bezier(0.22,0.61,0.36,1); }
                .plate-link:hover {
                    background: #038a3e;
                    transform: translateY(-2px);
                    box-shadow: 0 18px 32px -16px rgba(2,115,51,0.6);
                }
                .plate-link:hover svg, .plate:hover .plate-link svg { transform: translateX(4px); }

                /* ---------- La planche se lève ---------- */
                .has-motion .plate-art {
                    clip-path: inset(100% 0 0 0 round 16px);
                    transition: clip-path 1.15s cubic-bezier(0.16,1,0.3,1);
                }
                .has-motion .plate-art img { transform: scale(1.08); }
                .has-motion .plate.is-in .plate-art { clip-path: inset(0 0 0 0 round 16px); }
                .has-motion .plate.is-in .plate-art img {
                    transform: none;
                    transition: transform 1.6s cubic-bezier(0.16,1,0.3,1);
                }
                .has-motion .plate.is-in:hover .plate-art img {
                    transform: scale(1.025);
                    transition-duration: 1.1s;
                }

                .has-motion .plate-label {
                    opacity: 0;
                    transform: translateY(2.5rem);
                    transition:
                        opacity .7s cubic-bezier(0.16,1,0.3,1) .28s,
                        transform 1s cubic-bezier(0.16,1,0.3,1) .28s;
                }
                .has-motion .plate.is-in .plate-label { opacity: 1; transform: none; }

                .has-motion .plate-gains li {
                    opacity: 0;
                    transform: translateY(0.6rem);
                    transition:
                        opacity .5s ease calc(.62s + var(--g) * .09s),
                        transform .6s cubic-bezier(0.16,1,0.3,1) calc(.62s + var(--g) * .09s);
                }
                .has-motion .plate.is-in .plate-gains li { opacity: 1; transform: none; }

                /* ---------- Clôture ---------- */
                .closing {
                    background: #FCFBF8;
                    border-top: 1px solid #EDEAE0;
                }
                .closing-card {
                    max-width: 860px;
                    margin: 0 auto;
                    padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 4rem);
                    text-align: center;
                    background: #FFFFFF;
                    border: 1px solid #E5E1D6;
                    border-radius: 20px;
                    box-shadow: 0 34px 70px -34px rgba(38,38,38,0.28), 0 3px 8px rgba(38,38,38,0.05);
                }
                .closing-note {
                    margin-top: 1.25rem;
                    font-size: 0.95rem;
                    letter-spacing: -0.01em;
                    color: rgba(38,38,38,0.6);
                }
                .closing-note a {
                    color: ${GREEN};
                    text-decoration: underline;
                    text-decoration-color: rgba(2,115,51,0.3);
                    text-underline-offset: 4px;
                    transition: text-decoration-color .25s ease;
                }
                .closing-note a:hover { text-decoration-color: ${GREEN}; }
                .closing-cta {
                    margin-top: 2.25rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    padding: 1.25rem 2.4rem;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 1.15rem;
                    letter-spacing: -0.03em;
                    color: #FFFFFF;
                    background: ${GREEN};
                    box-shadow: 0 14px 30px -14px rgba(2,115,51,0.55);
                    transition: transform .35s cubic-bezier(0.22,0.61,0.36,1), box-shadow .35s ease, background-color .25s ease;
                }
                .closing-cta svg { transition: transform .35s cubic-bezier(0.22,0.61,0.36,1); }
                .closing-cta:hover {
                    background: #038a3e;
                    transform: translateY(-2px);
                    box-shadow: 0 20px 36px -16px rgba(2,115,51,0.6);
                }
                .closing-cta:hover svg { transform: translateX(4px); }

                /* ---------- Tablette et mobile : une colonne ---------- */
                @media (max-width: 1023px) {
                    .plate { grid-template-columns: minmax(0,1fr); }
                    .plate-art,
                    .plate--mirrored .plate-art { grid-column: 1; grid-row: 1; }
                    .plate-label,
                    .plate--mirrored .plate-label,
                    .plate--high .plate-label,
                    .plate--mid .plate-label {
                        grid-column: 1;
                        grid-row: 2;
                        align-self: start;
                        margin: -3rem 1rem 0;
                    }
                    .plate--high { scroll-margin-top: 9.5rem; }
                }
                @media (max-width: 480px) {
                    .plate-label,
                    .plate--mirrored .plate-label,
                    .plate--high .plate-label,
                    .plate--mid .plate-label { margin: -2rem 0.5rem 0; }
                    .plate-art, .has-motion .plate-art { border-radius: 12px; }
                    .closing-cta { width: 100%; justify-content: center; }
                }
            `}</style>
        </div>
    );
};

export default SolutionsPage;
