import React, { useEffect, useRef, useState } from 'react';

// Tokens éditoriaux — alignés sur SolutionsSection (ambiance papier)
const DISPLAY = "'Space Grotesk', sans-serif";
const BODY = "'Manrope', sans-serif";
const MONO = "'JetBrains Mono', monospace";

const GREEN = '#027333';    // vert primary — le feutre
const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';

/* ------------------------------------------------------------------ *
 *  Le coup de feutre
 *  Un seul geste : une grosse brosse fait quatre allers-retours en biais
 *  et colorie les trois arguments de gauche à droite. Les passes se
 *  recouvrent — plus de blanc à l'intérieur — et les virages laissent les
 *  arrondis de la mèche sur les contours. Bords nets, aucun grain.
 * ------------------------------------------------------------------ */
const VB_W = 640;
const VB_H = 420;
const NIB = 220;   // largeur de mèche — grosse brosse
// 9 passes : le geste part du coin supérieur gauche et finit en bas à
// droite, ce qui cadre les quatre coins sans déborder de la colonne.
const PASSES = 9;
const SWEEP_START = 45;
const SWEEP_END = 560;

// Inclinaison : le tracé part du coin supérieur gauche et descend en biais.
// skewX pousse le haut à droite et le bas à gauche ; SKEW_SHIFT recentre
// l'ensemble sur la zone de texte.
const SKEW_DEG = 12;
const SKEW_SHIFT = Math.round((VB_H / 2) * Math.tan((SKEW_DEG * Math.PI) / 180));

const buildStroke = () => {
    const top = NIB / 2 - 8;
    const bottom = VB_H - NIB / 2 + 8;
    const dx = (SWEEP_END - SWEEP_START) / PASSES;

    // Extremums réguliers — aucune variation de longueur d'une passe à l'autre
    const pts: [number, number][] = [];
    for (let i = 0; i <= PASSES; i += 1) {
        pts.push([SWEEP_START + i * dx, i % 2 === 0 ? top : bottom]);
    }

    // Virages en courbe : poignées horizontales aux extremums, donc la brosse
    // tourne au lieu de casser à l'angle — le geste reste continu.
    let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 1; i <= PASSES; i += 1) {
        const [x0, y0] = pts[i - 1];
        const [x1, y1] = pts[i];
        const h = (x1 - x0) * 0.42;
        d += ` C ${(x0 + h).toFixed(1)} ${y0.toFixed(1)}, ${(x1 - h).toFixed(1)} ${y1.toFixed(1)}, ${x1.toFixed(1)} ${y1.toFixed(1)}`;
    }
    return d;
};

const STROKE_PATH = buildStroke();

const MarkerSweep: React.FC<{ active: boolean }> = ({ active }) => (
    <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
        // overflow visible : rien ne rogne les bouts de mèche à plat
        style={{ overflow: 'visible' }}
        aria-hidden="true"
    >
        <path
            d={STROKE_PATH}
            transform={`translate(${SKEW_SHIFT} 0) skewX(${-SKEW_DEG})`}
            fill="none"
            stroke={GREEN}
            strokeWidth={NIB}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={active ? 0 : 1}
            style={{ transition: 'stroke-dashoffset 1700ms linear' }}
        />
    </svg>
);

/* ------------------------------------------------------------------ *
 *  Pictogrammes — tracés au passage du feutre
 * ------------------------------------------------------------------ */
type GlyphProps = { active: boolean; delay: number };

const drawStyle = (active: boolean, delay: number, duration = 620) => ({
    strokeDasharray: 1,
    strokeDashoffset: active ? 0 : 1,
    transition: `stroke-dashoffset ${duration}ms ${EASE} ${delay}ms`,
});

const glyphBase = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#FFFFFF',
    strokeWidth: 1.9,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
};

// Marge : la courbe qui remonte
const GlyphMarge: React.FC<GlyphProps> = ({ active, delay }) => (
    <svg {...glyphBase}>
        <path d="M3 17.6 L8.6 11.4 L12.6 14.8 L21 5.4" pathLength={1} style={drawStyle(active, delay)} />
        <path d="M15.4 5.4 L21 5.4 L21 11" pathLength={1} style={drawStyle(active, delay + 260, 380)} />
    </svg>
);

// Qualité : le bouclier, puis la validation
const GlyphQualite: React.FC<GlyphProps> = ({ active, delay }) => (
    <svg {...glyphBase}>
        <path
            d="M12 2.6 L20.4 6.1 V12 C20.4 16.9 16.8 20.5 12 21.7 C7.2 20.5 3.6 16.9 3.6 12 V6.1 Z"
            pathLength={1}
            style={drawStyle(active, delay, 720)}
        />
        <path d="M8.4 12.2 L11 14.8 L15.9 9.6" pathLength={1} style={drawStyle(active, delay + 380, 400)} />
    </svg>
);

// Vitesse : le cadran, puis l'aiguille qui monte
const GlyphVitesse: React.FC<GlyphProps> = ({ active, delay }) => (
    <svg {...glyphBase}>
        <path d="M3.2 17.8 A 9.6 9.6 0 1 1 20.8 17.8" pathLength={1} style={drawStyle(active, delay, 700)} />
        <line
            x1="12"
            y1="17.8"
            x2="12"
            y2="9.4"
            style={{
                transform: active ? 'rotate(46deg)' : 'rotate(-58deg)',
                transformOrigin: '12px 17.8px',
                transition: `transform 780ms ${EASE} ${delay + 340}ms`,
            }}
        />
        <circle cx="12" cy="17.8" r="1.5" fill="#FFFFFF" stroke="none" />
    </svg>
);

const LEVIERS = [
    {
        label: 'MARGE',
        title: 'Restaurer vos marges',
        body: 'Faites plus de volume avec la même structure.',
        Glyph: GlyphMarge,
    },
    {
        label: 'QUALITÉ',
        title: 'Fiabilité & auditabilité',
        body: "Plus d'erreur humaine sur vos processus critiques. Des données propres et traçables.",
        Glyph: GlyphQualite,
    },
    {
        label: 'VITESSE',
        title: 'Agilité & vitesse',
        body: 'Vos concurrents automatisent déjà. Ne laissez pas votre dette technique vous ralentir.',
        Glyph: GlyphVitesse,
    },
];

const CorporateApproachSection: React.FC = () => {
    const listRef = useRef<HTMLUListElement>(null);
    const [inked, setInked] = useState(false);

    useEffect(() => {
        // Sans animation : le feutre est déjà posé, le texte reste lisible
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInked(true);
            return;
        }
        const el = listRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInked(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="notre-approche" className="bg-white py-24 px-6 border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* COLONNE GAUCHE (Conseil - Fond Blanc) */}
                    <div className="py-8 flex flex-col justify-center px-6 lg:px-12">
                        {/* Label Pill Style - Cleaner */}
                        <div className="self-start bg-[#FCFBF8] border border-[#E5E1D6] px-4 py-1.5 rounded-full mb-8">
                            <span className="text-[#262626] font-bold text-xs tracking-[0.1em] uppercase">
                                Notre Approche
                            </span>
                        </div>

                        {/* Title - Sans Serif, Clean, bold */}
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#262626] mb-10 leading-[1.1] tracking-tight">
                            Du conseil à la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#027333] to-[#FFD700]">performance.</span>
                        </h2>

                        <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                            {/* Citation Finale - Styled as a quote block */}
                            <div className="relative">
                                <span className="absolute top-0 left-0 text-6xl text-[#027333]/20 font-serif leading-none -mt-4">"</span>
                                <p className="text-[#262626] font-bold text-xl italic relative z-10 pl-6 border-l-2 border-[#027333]">
                                    Nous concevons et déployons les technologies qui transforment durablement la performance de votre entreprise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* COLONNE DROITE — texte blanc révélé par le coup de feutre */}
                    <div className="mt-12 lg:mt-0">
                        {/* Marge latérale : le coup de feutre déborde volontairement du bloc */}
                        <div className="h-full flex flex-col justify-center lg:pl-8 lg:pr-8">
                            <ul ref={listRef} className="relative isolate space-y-1 py-7">
                                {/* Un seul coup de feutre, derrière les trois arguments */}
                                <MarkerSweep active={inked} />

                                {LEVIERS.map(({ label, title, body, Glyph }, i) => {
                                    const delay = 300 + i * 130;
                                    return (
                                        <li key={label} className="relative z-10">
                                            <div className="pl-8 pr-10 py-3">
                                                <div className="flex items-center gap-3">
                                                    <Glyph active={inked} delay={delay} />
                                                    <span
                                                        style={{
                                                            fontFamily: MONO,
                                                            fontSize: '0.68rem',
                                                            letterSpacing: '0.14em',
                                                            color: '#FFFFFF',
                                                        }}
                                                    >
                                                        {label}
                                                    </span>
                                                </div>

                                                <h3
                                                    className="mt-2.5"
                                                    style={{
                                                        fontFamily: DISPLAY,
                                                        fontWeight: 700,
                                                        fontSize: '1.3rem',
                                                        lineHeight: 1.2,
                                                        letterSpacing: '-0.02em',
                                                        color: '#FFFFFF',
                                                    }}
                                                >
                                                    {title}
                                                </h3>
                                                <p
                                                    className="mt-1"
                                                    style={{
                                                        fontFamily: BODY,
                                                        fontWeight: 600,
                                                        color: '#FFFFFF',
                                                        fontSize: '0.95rem',
                                                        lineHeight: 1.45,
                                                    }}
                                                >
                                                    {body}
                                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default CorporateApproachSection;
