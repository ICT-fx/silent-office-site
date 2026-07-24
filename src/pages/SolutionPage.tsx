import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { solutionsList, solutionsBySlug } from '../data/solutions/index';

// Tokens éditoriaux — cohérents avec la section solutions de la home
const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'JetBrains Mono', monospace";

const INK = '#16201B';
const GREEN = '#027333';
const GREEN_DEEP = '#025928';
const PAPER = '#FCFBF8';
const CREAM = '#F4F1E9';
const GREY = '#5C645C';
const HAIRLINE = '#E5E1D6';

const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-center gap-3">
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
            {children}
        </span>
    </div>
);

const SolutionPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? solutionsBySlug[slug] : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return (
            <div
                className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
                style={{ background: PAPER }}
            >
                <span style={{ fontFamily: MONO, color: GREEN, fontSize: '0.85rem' }}>404</span>
                <h1
                    className="mt-4 text-3xl md:text-4xl"
                    style={{ fontFamily: DISPLAY, fontWeight: 500, color: INK }}
                >
                    Cette solution n'existe pas.
                </h1>
                <p className="mt-4 max-w-md" style={{ fontFamily: BODY, color: GREY }}>
                    La page que vous cherchez a peut-être changé d'adresse.
                </p>
                <Link
                    to="/solutions"
                    className="mt-8 inline-flex items-center gap-2"
                    style={{
                        fontFamily: BODY,
                        fontWeight: 600,
                        color: INK,
                        border: `1px solid ${INK}`,
                        borderRadius: '9999px',
                        padding: '12px 24px',
                    }}
                >
                    Voir toutes nos solutions
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
            </div>
        );
    }

    const index = solutionsList.findIndex((s) => s.slug === data.slug);
    const number = String(index + 1).padStart(2, '0');

    return (
        <div className="pt-20 min-h-screen" style={{ background: PAPER, color: INK }}>
            {/* ============ HERO — promesse ============ */}
            <header className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between gap-6 flex-wrap">
                        <Eyebrow>
                            Solution {number} — {data.title}
                        </Eyebrow>
                        <Link
                            to="/solutions"
                            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                            style={{ fontFamily: MONO, color: GREY, fontSize: '0.78rem' }}
                        >
                            Toutes les solutions
                            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </Link>
                    </div>

                    <h1
                        className="mt-10 md:mt-14"
                        style={{
                            fontFamily: DISPLAY,
                            fontWeight: 700,
                            color: INK,
                            lineHeight: 1.02,
                            letterSpacing: '-0.03em',
                            fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
                            maxWidth: '18ch',
                        }}
                    >
                        {data.promise}
                    </h1>

                    {data.subPromise && (
                        <p
                            className="mt-6"
                            style={{
                                fontFamily: DISPLAY,
                                fontWeight: 500,
                                color: GREEN,
                                fontSize: 'clamp(1.2rem, 2.4vw, 1.7rem)',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            {data.subPromise}
                        </p>
                    )}

                    <p
                        className="mt-8 max-w-xl"
                        style={{ fontFamily: BODY, color: GREY, fontSize: '1.15rem', lineHeight: 1.6 }}
                    >
                        {data.shortDescription}
                    </p>

                    <div className="mt-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full"
                            style={{
                                fontFamily: BODY,
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                color: PAPER,
                                background: INK,
                                padding: '14px 28px',
                                transition: `background 0.25s ${EASE}`,
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = GREEN)}
                            onMouseLeave={(e) => (e.currentTarget.style.background = INK)}
                        >
                            Parler de votre projet
                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </Link>
                    </div>
                </div>
            </header>

            {/* ============ GAINS — « Ce que ça change pour vous » ============ */}
            <section className="px-6 py-20 md:py-24" style={{ background: CREAM }}>
                <div className="max-w-6xl mx-auto">
                    <Eyebrow>Ce que ça change pour vous</Eyebrow>
                    <div
                        className="mt-12 grid md:grid-cols-3 gap-y-10"
                        style={{ borderTop: `1px solid ${HAIRLINE}` }}
                    >
                        {data.gains.map((gain, i) => (
                            <div key={i} className="pt-8 md:pr-10">
                                <span style={{ fontFamily: MONO, color: GREEN, fontSize: '0.8rem' }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <p
                                    className="mt-4"
                                    style={{
                                        fontFamily: DISPLAY,
                                        fontWeight: 500,
                                        color: INK,
                                        fontSize: '1.35rem',
                                        lineHeight: 1.25,
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    {gain.scenario}
                                </p>
                                <p
                                    className="mt-3"
                                    style={{ fontFamily: BODY, color: GREY, fontSize: '0.95rem' }}
                                >
                                    {gain.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CAS CONCRETS ============ */}
            <section className="px-6 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <Eyebrow>Cas concrets</Eyebrow>
                    <div className="mt-12 space-y-10">
                        {data.useCases.map((useCase, i) => (
                            <article
                                key={i}
                                className="rounded-2xl p-8 md:p-12"
                                style={{ background: '#ffffff', border: `1px solid ${HAIRLINE}` }}
                            >
                                <h3
                                    style={{
                                        fontFamily: DISPLAY,
                                        fontWeight: 500,
                                        color: INK,
                                        fontSize: '1.5rem',
                                        letterSpacing: '-0.01em',
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {useCase.title}
                                </h3>
                                <div className="mt-8 grid md:grid-cols-3 gap-8">
                                    {[
                                        { label: 'Avant', text: useCase.before },
                                        { label: 'Ce que nous mettons en place', text: useCase.setup },
                                        { label: 'Résultat', text: useCase.result },
                                    ].map((step, j) => (
                                        <div
                                            key={j}
                                            className="pt-5"
                                            style={{
                                                borderTop: `2px solid ${j === 2 ? GREEN : HAIRLINE}`,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: BODY,
                                                    fontWeight: 700,
                                                    fontSize: '0.72rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.18em',
                                                    color: j === 2 ? GREEN : GREY,
                                                }}
                                            >
                                                {step.label}
                                            </span>
                                            <p
                                                className="mt-3"
                                                style={{
                                                    fontFamily: BODY,
                                                    color: j === 2 ? INK : GREY,
                                                    fontSize: '0.98rem',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {step.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ MISE EN PLACE ============ */}
            <section className="px-6 py-20 md:py-24" style={{ background: CREAM }}>
                <div className="max-w-6xl mx-auto">
                    <Eyebrow>La mise en place</Eyebrow>
                    <div className="mt-12">
                        {data.steps.map((step, i) => (
                            <div
                                key={i}
                                className="grid gap-4 md:gap-8 py-8 items-baseline solution-step"
                                style={{ borderTop: `1px solid ${HAIRLINE}` }}
                            >
                                <span style={{ fontFamily: MONO, color: GREEN, fontSize: '0.85rem' }}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3
                                        style={{
                                            fontFamily: DISPLAY,
                                            fontWeight: 500,
                                            color: INK,
                                            fontSize: '1.35rem',
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="mt-2 max-w-xl"
                                        style={{ fontFamily: BODY, color: GREY, fontSize: '0.98rem', lineHeight: 1.6 }}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                                <span
                                    className="md:justify-self-end"
                                    style={{
                                        fontFamily: MONO,
                                        color: INK,
                                        fontSize: '0.82rem',
                                        background: PAPER,
                                        border: `1px solid ${HAIRLINE}`,
                                        borderRadius: '9999px',
                                        padding: '6px 14px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {step.duration}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CTA FINAL ============ */}
            <section className="px-6 py-20 md:py-28">
                <div
                    className="max-w-6xl mx-auto rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center"
                    style={{
                        background: `linear-gradient(135deg, ${INK} 0%, ${GREEN_DEEP} 130%)`,
                    }}
                >
                    <h2
                        style={{
                            fontFamily: DISPLAY,
                            fontWeight: 700,
                            color: PAPER,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.1,
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        }}
                    >
                        Et si on regardait votre situation ensemble ?
                    </h2>
                    <p
                        className="mt-5 max-w-xl mx-auto"
                        style={{ fontFamily: BODY, color: '#C9CFC9', fontSize: '1.05rem', lineHeight: 1.6 }}
                    >
                        Un premier échange, sans engagement, pour identifier ce que vous pourriez gagner.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-10 inline-flex items-center gap-2 rounded-full"
                        style={{
                            fontFamily: BODY,
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: INK,
                            background: PAPER,
                            padding: '14px 28px',
                            transition: `all 0.25s ${EASE}`,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#93BF9E';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = PAPER;
                        }}
                    >
                        Prendre contact
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </Link>
                </div>
            </section>

            <style>{`
                .solution-step { grid-template-columns: 56px 1fr auto; }
                @media (max-width: 767px) {
                    .solution-step { grid-template-columns: 40px 1fr; }
                    .solution-step > span:last-child { grid-column: 2; justify-self: start; }
                }
            `}</style>
        </div>
    );
};

export default SolutionPage;
