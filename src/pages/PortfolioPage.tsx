import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS, clientOf, type PortfolioProject } from '../data/portfolio';

/* ------------------------------------------------------------------ *
 *  Page /portfolio — les réalisations, une par ligne, en alternance.
 *  C'est ici que vivent les captures et la captation vidéo : l'accueil
 *  ne montre que les logos et le bouton qui mène à cette page.
 * ------------------------------------------------------------------ */

/** Police des titres — la même que le h1 du Hero. */
const TITLE = 'Inter, sans-serif';
/** Police de lecture, partout ailleurs. */
const BODY = '"DM Sans", sans-serif';

const GREEN = '#027333';
const INK = '#262626';
const EASE = 'cubic-bezier(0.22,0.61,0.36,1)';

/** Cadence de rotation du paquet de captures. */
const CYCLE_MS = 2000;
/** Durée du glissement d'une carte d'un cran à l'autre. */
const SLIDE_MS = 680;

const CARD_FRAME = {
    borderRadius: 12,
    border: '1px solid #E5E1D6',
    backgroundColor: '#FFFFFF',
};
const CARD_SHADOW = '0 26px 60px -28px rgba(38,38,38,0.36), 0 3px 8px rgba(38,38,38,0.05)';

/* ------------------------------------------------------------------ *
 *  Visuels
 * ------------------------------------------------------------------ */

/** Décalage d'un cran, en % de la carte. Le paquet s'ouvre vers l'extérieur. */
const STEP_X = 2;
const STEP_Y = 3;

const slot = (rank: number, mirrored: boolean) => {
    const dir = mirrored ? -1 : 1;
    return `translate3d(${dir * rank * STEP_X}%, ${rank * STEP_Y}%, 0) scale(${1 - rank * 0.03}) rotate(${dir * rank * 0.7}deg)`;
};

/**
 * Le paquet de captures : les vues sont superposées et décalées comme des
 * tirages posés à la main. Toutes les deux secondes celle de devant se glisse
 * sous la pile et celle du fond remonte au premier plan.
 */
const CardStack: React.FC<{ shots: string[]; label: string; mirrored: boolean; playing: boolean }> = ({
    shots,
    label,
    mirrored,
    playing,
}) => {
    const [front, setFront] = useState(0);

    useEffect(() => {
        if (!playing || shots.length < 2) return;
        const id = window.setInterval(() => setFront((f) => (f + 1) % shots.length), CYCLE_MS);
        return () => window.clearInterval(id);
    }, [playing, shots.length]);

    return (
        <>
            {shots.map((src, i) => {
                // Rang 0 = devant. Le paquet tourne, l'ordre reste circulaire.
                const rank = (i - front + shots.length) % shots.length;
                return (
                    <div
                        key={src}
                        className="absolute inset-0 overflow-hidden"
                        style={{
                            ...CARD_FRAME,
                            transform: slot(rank, mirrored),
                            zIndex: shots.length - rank,
                            boxShadow: rank === 0 ? CARD_SHADOW : '0 14px 30px -20px rgba(38,38,38,0.26)',
                            transition: `transform ${SLIDE_MS}ms ${EASE}, box-shadow ${SLIDE_MS}ms ${EASE}`,
                            willChange: 'transform',
                        }}
                    >
                        <img
                            src={src}
                            alt={`${label} — vue ${i + 1}`}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="w-full h-full object-cover object-top select-none"
                        />
                        {/* Voile clair sur les cartes du fond : la pile se lit comme
                            du papier plutôt que comme quatre écrans qui se disputent
                            l'attention. */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundColor: '#FCFBF8',
                                opacity: rank === 0 ? 0 : Math.min(0.86, 0.44 + rank * 0.2),
                                transition: `opacity ${SLIDE_MS}ms ${EASE}`,
                            }}
                        />
                    </div>
                );
            })}
        </>
    );
};

/** La captation du site en fonctionnement : muette, en boucle, sans contrôles. */
const ProjectVideo: React.FC<{
    sources: string[];
    poster: string;
    label: string;
    playing: boolean;
}> = ({ sources, poster, label, playing }) => {
    const ref = useRef<HTMLVideoElement>(null);

    // Hors champ, la vidéo est mise en pause : pas de décodage dans le vide.
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (playing) {
            const p = el.play();
            // Un navigateur peut refuser la lecture auto : l'affiche prend le relais.
            if (p) p.catch(() => undefined);
        } else {
            el.pause();
        }
    }, [playing]);

    return (
        <div className="absolute inset-0 overflow-hidden" style={{ ...CARD_FRAME, boxShadow: CARD_SHADOW }}>
            <video
                ref={ref}
                muted
                loop
                playsInline
                preload="metadata"
                poster={poster}
                aria-label={label}
                className="w-full h-full object-cover object-top select-none"
            >
                {sources.map((src) => (
                    <source key={src} src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                ))}
            </video>
        </div>
    );
};

/**
 * Un schéma de flux est haut et étroit : le rogner en 16/10 n'en montrerait
 * que l'amorce. Il est donc affiché entier, plafonné en hauteur, sur une
 * carte au fond papier — et cliquable pour l'ouvrir en pleine taille.
 */
const Diagram: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <a
        href={src}
        target="_blank"
        rel="noreferrer"
        title="Ouvrir le schéma en pleine taille"
        className="block mx-auto overflow-hidden group"
        style={{
            ...CARD_FRAME,
            backgroundColor: '#FCFBF8',
            boxShadow: CARD_SHADOW,
            // La carte épouse le schéma : sans cela elle occuperait toute la
            // colonne et le laisserait flotter entre deux grandes marges vides.
            width: 'fit-content',
            maxWidth: '100%',
        }}
    >
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="block w-auto max-w-full transition-transform duration-500 group-hover:scale-[1.015]"
            style={{ maxHeight: '78vh' }}
        />
    </a>
);

const Media: React.FC<{ project: PortfolioProject; mirrored: boolean; playing: boolean }> = ({
    project,
    mirrored,
    playing,
}) => {
    const label = `${project.title} — ${clientOf(project).name}`;

    if (project.media.kind === 'diagram') {
        return <Diagram src={project.media.src} alt={project.media.alt} />;
    }

    return (
        <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
            {project.media.kind === 'stack' && (
                <CardStack shots={project.media.shots} label={label} mirrored={mirrored} playing={playing} />
            )}
            {project.media.kind === 'video' && (
                <ProjectVideo
                    sources={project.media.sources}
                    poster={project.media.poster}
                    label={label}
                    playing={playing}
                />
            )}
        </div>
    );
};

/* ------------------------------------------------------------------ *
 *  Une réalisation
 * ------------------------------------------------------------------ */

const Entry: React.FC<{ project: PortfolioProject; index: number }> = ({ project, index }) => {
    const client = clientOf(project);
    const mirrored = index % 2 === 1;
    // Sans visuel publiable, la ligne reste compacte : mieux vaut une entrée
    // brève qu'un grand cadre vide qui aspire toute la page.
    const bare = project.media.kind === 'none';
    const ref = useRef<HTMLElement>(null);
    const [live, setLive] = useState(false);

    // Rien ne s'anime tant que la réalisation n'est pas à l'écran.
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => setLive(entry.isIntersecting), {
            threshold: 0.25,
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={ref}
            className={
                'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center' +
                (index > 0 ? ' mt-20 pt-20 lg:mt-24 lg:pt-24 border-t border-[#EDEAE0]' : '')
            }
        >
            {/* Le texte passe à droite une ligne sur deux ; en colonne unique il
                repasse toujours au-dessus du visuel. */}
            <div className={`${bare ? 'lg:col-span-12' : 'lg:col-span-4'} order-1 ${mirrored && !bare ? 'lg:order-2' : ''}`}>
                <img
                    src={client.logo}
                    alt={client.name}
                    className={`${client.id === 'trb' ? 'h-14' : 'h-10'} w-auto`}
                    loading="lazy"
                    decoding="async"
                />

                <h2
                    className="mt-7"
                    style={{
                        fontFamily: TITLE,
                        fontWeight: 800,
                        fontSize: 'clamp(1.75rem, 2.6vw, 2.5rem)',
                        lineHeight: 1.06,
                        letterSpacing: '-0.05em',
                        color: INK,
                    }}
                >
                    {project.title}
                </h2>

                <p
                    className="mt-3 inline-flex items-center gap-2.5"
                    style={{
                        fontFamily: BODY,
                        fontSize: '0.98rem',
                        letterSpacing: '-0.02em',
                        color: 'rgba(38,38,38,0.55)',
                    }}
                >
                    <span aria-hidden="true" className="w-6 h-px" style={{ backgroundColor: GREEN }} />
                    {project.category}
                </p>
            </div>

            {!bare && (
                <div className={`lg:col-span-8 order-2 ${mirrored ? 'lg:order-1' : ''}`}>
                    <Media project={project} mirrored={mirrored} playing={live} />
                </div>
            )}
        </article>
    );
};

/* ------------------------------------------------------------------ *
 *  Page
 * ------------------------------------------------------------------ */

const PortfolioPage: React.FC = () => (
    <div className="bg-white">
        <div className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="max-w-[1200px] mx-auto">
                <div className="inline-block bg-[#FCFBF8] border border-[#E5E1D6] px-4 py-1.5 rounded-full mb-8">
                    <span className="text-[#262626] font-bold text-xs tracking-[0.1em] uppercase">Portfolio</span>
                </div>
                <h1
                    style={{
                        fontFamily: TITLE,
                        fontWeight: 800,
                        fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                        lineHeight: 1.04,
                        letterSpacing: '-0.05em',
                        color: INK,
                    }}
                >
                    Ce que nous avons livré.
                </h1>
            </div>
        </div>

        <div className="px-6 pb-28 md:pb-36">
            <div className="max-w-[1200px] mx-auto">
                {PROJECTS.map((project, index) => (
                    <Entry key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    </div>
);

export default PortfolioPage;
