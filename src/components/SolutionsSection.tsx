import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Tokens éditoriaux (inspiration Flowera, palette adaptée Nexus)
const SERIF = "'Newsreader', Georgia, serif";
const MONO = "'JetBrains Mono', monospace";

// Couleurs locales à la section
const INK = '#16201B';      // encre — titres
const GREEN = '#0B7A41';    // vert accent — numéros, hover
const PAPER = '#FCFBF8';    // fond papier
const CREAM = '#F4F1E9';    // crème — hover item
const GOLD = '#C49A4A';     // doré — badge "Nouveau"
const GREY = '#5C645C';     // gris texte — descriptions
const HAIRLINE = '#E5E1D6'; // fines lignes

// transition douce commune
const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';

interface Levier {
    n: string;
    title: string;
    description: string;
    link: string;
    badge?: string;
}

// 6 leviers Nexus — point 5 (Conseil & Intégration) placé en premier
const leviers: Levier[] = [
    {
        n: '01',
        title: 'Conseil & Intégration',
        description: "Audit, diagnostic et mise en œuvre pour identifier les bonnes solutions et les intégrer dans votre écosystème.",
        link: '/solutions/audit-processus',
    },
    {
        n: '02',
        title: 'Développement logiciel',
        description: "Applications et plateformes web sur mesure pour les besoins métier de votre organisation.",
        link: '/solutions',
    },
    {
        n: '03',
        title: 'Intelligence artificielle',
        description: "Solutions IA sur mesure et agents intelligents pour automatiser vos processus et augmenter vos capacités.",
        link: '/solutions',
        badge: 'Nouveau',
    },
    {
        n: '04',
        title: 'Automatisation & RPA',
        description: "Workflows et processus optimisés pour réduire les tâches manuelles et améliorer l'efficacité opérationnelle.",
        link: '/solutions/finance',
    },
    {
        n: '05',
        title: 'Data & Business Intelligence',
        description: "Visualisation des données et stratégie data pour transformer vos données en insights actionnables.",
        link: '/solutions',
    },
    {
        n: '06',
        title: 'Formation & Transformation',
        description: "Acculturation et change management pour que vos équipes adoptent vraiment l'IA et la transformation digitale.",
        link: '/solutions/strategie',
    },
];

const SolutionItem: React.FC<{ item: Levier }> = ({ item }) => {
    const [hover, setHover] = useState(false);

    return (
        <Link
            to={item.link}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="grid items-center border-b group"
            style={{
                gridTemplateColumns: 'var(--exp-cols)',
                borderColor: HAIRLINE,
                padding: '28px 8px',
                paddingLeft: hover ? '18px' : '8px',
                paddingRight: hover ? '18px' : '8px',
                background: hover ? CREAM : 'transparent',
                transition: `all 0.25s ${EASE}`,
            }}
        >
            {/* Numéro */}
            <span
                style={{
                    fontFamily: MONO,
                    color: GREEN,
                    fontSize: '0.85rem',
                    letterSpacing: '0.04em',
                }}
            >
                {item.n}
            </span>

            {/* Bloc texte */}
            <div className="min-w-0">
                <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
                    <h3
                        className="exp-title"
                        style={{
                            fontFamily: SERIF,
                            fontWeight: 500,
                            color: hover ? GREEN : INK,
                            lineHeight: 1.15,
                            transition: `color 0.25s ${EASE}`,
                        }}
                    >
                        {item.title}
                    </h3>
                    {item.badge && (
                        <span
                            style={{
                                fontFamily: "'Manrope', sans-serif",
                                color: GOLD,
                                border: `1px solid ${GOLD}`,
                                borderRadius: '9999px',
                                fontSize: '0.62rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                padding: '2px 9px',
                            }}
                        >
                            {item.badge}
                        </span>
                    )}
                </div>
                <p
                    style={{
                        fontFamily: "'Manrope', sans-serif",
                        color: GREY,
                        fontSize: '0.98rem',
                        lineHeight: 1.5,
                        maxWidth: '54ch',
                        marginTop: '0.4rem',
                    }}
                >
                    {item.description}
                </p>
            </div>

            {/* Flèche (masquée < lg) */}
            <span
                className="hidden lg:flex justify-end"
                style={{
                    color: hover ? GREEN : GREY,
                    transform: hover ? 'translateX(4px)' : 'translateX(0)',
                    transition: `transform 0.25s ${EASE}, color 0.25s ${EASE}`,
                }}
            >
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </span>
        </Link>
    );
};

const SolutionsSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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
                    className={`max-w-6xl mx-auto exp-layout transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {/* Colonne gauche — aside sticky */}
                    <aside className="exp-aside">
                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="block w-8 h-px" style={{ background: GREEN }} />
                            <span
                                style={{
                                    fontFamily: "'Manrope', sans-serif",
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

                        {/* Titre H2 serif */}
                        <h2
                            style={{
                                fontFamily: SERIF,
                                fontWeight: 500,
                                color: INK,
                                lineHeight: 1.08,
                                letterSpacing: '-0.01em',
                            }}
                            className="text-4xl md:text-5xl mb-6"
                        >
                            Six leviers pour industrialiser l'IA.
                        </h2>

                        {/* Chapô */}
                        <p
                            style={{
                                fontFamily: "'Manrope', sans-serif",
                                color: GREY,
                                fontSize: '1.24rem',
                                lineHeight: 1.55,
                            }}
                            className="mb-10 max-w-md"
                        >
                            Du diagnostic à l'exploitation, des solutions propriétaires pensées pour s'intégrer à vos systèmes existants — sans rupture.
                        </p>

                        {/* Bouton fantôme */}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full group"
                            style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                color: INK,
                                border: `1px solid ${INK}`,
                                padding: '12px 24px',
                                transition: `all 0.25s ${EASE}`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = INK;
                                e.currentTarget.style.color = PAPER;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = INK;
                            }}
                        >
                            Parler à un expert
                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                        </Link>
                    </aside>

                    {/* Colonne droite — liste */}
                    <div className="exp-list border-t" style={{ borderColor: HAIRLINE }}>
                        {leviers.map((item) => (
                            <SolutionItem key={item.n} item={item} />
                        ))}
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
                .exp-layout {
                    display: grid;
                    grid-template-columns: 40% 60%;
                    gap: 4rem;
                    align-items: start;
                }
                .exp-aside { position: sticky; top: 7rem; align-self: start; }
                .exp-list { --exp-cols: 56px 1fr auto; }
                .exp-title { font-size: 1.7rem; }
                @media (max-width: 1023px) {
                    .exp-layout {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .exp-aside { position: static; top: auto; }
                    .exp-list { --exp-cols: 40px 1fr; }
                    .exp-title { font-size: 1.35rem; }
                }
            `}</style>
        </section>
    );
};

export default SolutionsSection;
