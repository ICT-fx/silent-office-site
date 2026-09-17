
import React, { useEffect, useRef, useState } from 'react';
import { ViewState } from '../types';
import TeamSection from './TeamSection';

interface InnovationShowcaseProps {
  onNavigate?: (view: ViewState, sectionId?: string) => void;
}

// Tokens éditoriaux — Space Grotesk pour les chiffres, Manrope pour le texte
const DISPLAY = "'Space Grotesk', sans-serif";

/* ------------------------------------------------------------------ *
 *  Compteur — les chiffres se posent quand la section entre à l'écran
 * ------------------------------------------------------------------ */
const useCountUp = (target: number, active: boolean, duration = 1400) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || target === 0) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutExpo : démarrage franc, arrivée douce sur la valeur finale
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
};

/* ------------------------------------------------------------------ *
 *  Pictogrammes — animations pilotées par index.css (--showcase-delay)
 * ------------------------------------------------------------------ */
const iconBase = {
  className: 'w-full h-full',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const IconROI = () => (
  <svg {...iconBase}>
    <polyline className="showcase-trend-line" points="2 17 8.5 10.5 13.5 15.5 22 7" />
    <polyline className="showcase-trend-arrow" points="16 7 22 7 22 13" />
  </svg>
);

const IconKPI = () => (
  <svg {...iconBase}>
    <path
      className="showcase-layer-top"
      d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
    />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    <path className="showcase-layer-bottom" d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
  </svg>
);

const IconConformite = () => (
  <svg {...iconBase}>
    <path
      className="showcase-shield-pulse"
      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"
    />
    <path className="showcase-shield-check" d="m9 12 2 2 4-4" />
  </svg>
);

/* ------------------------------------------------------------------ *
 *  Nappe de bulles — l'arrière-plan vivant de la section
 *
 *  Chaque bulle est un dégradé radial (chute douce vers le transparent)
 *  adouci au flou : on obtient une tache gaussienne sans coût de repeint,
 *  puisque seule la `transform` est animée. Les positions sont exprimées
 *  en % du viewport : la nappe est fixe, pas solidaire de la section.
 * ------------------------------------------------------------------ */
const bubble = (color: string, alpha: number) =>
  `radial-gradient(circle at 50% 50%, rgba(${color}, ${alpha}), rgba(${color}, 0) 64%)`;

const BUBBLES = [
  { cls: 'results-bubble-a', top: '-14%', left: '-8%', size: 'clamp(300px, 38vw, 620px)', background: bubble('2, 115, 51', 0.72) },
  { cls: 'results-bubble-b', top: '4%', left: '58%', size: 'clamp(240px, 32vw, 520px)', background: bubble('147, 191, 158', 0.26) },
  { cls: 'results-bubble-c', top: '38%', left: '2%', size: 'clamp(230px, 30vw, 470px)', background: bubble('2, 89, 40', 0.85) },
  { cls: 'results-bubble-d', top: '56%', left: '50%', size: 'clamp(280px, 36vw, 580px)', background: bubble('2, 115, 51', 0.6) },
  { cls: 'results-bubble-e', top: '20%', left: '28%', size: 'clamp(180px, 22vw, 360px)', background: bubble('147, 191, 158', 0.18) },
];

/* `fixed` à partir de md seulement : sur mobile le défilement inertiel iOS
   fait saccader les couches fixes, et la section occupe presque tout l'écran
   — la nappe y est donc simplement ancrée à la section. */
const BubbleField: React.FC = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden md:fixed">
    {BUBBLES.map((b) => (
      <span
        key={b.cls}
        className={`results-bubble ${b.cls}`}
        style={{ top: b.top, left: b.left, width: b.size, height: b.size, background: b.background }}
      />
    ))}
  </div>
);

/* ------------------------------------------------------------------ *
 *  Les trois engagements — un chiffre, une preuve
 * ------------------------------------------------------------------ */
const ENGAGEMENTS = [
  {
    key: 'roi',
    prefix: 'J+',
    value: 90,
    suffix: '',
    title: 'ROI & création de valeur',
    body: 'Un périmètre cadré, livré vite : vos premiers gains sont chiffrés dès le premier trimestre.',
    Icon: IconROI,
    delay: '0s',
  },
  {
    key: 'kpi',
    prefix: '',
    value: 100,
    suffix: '%',
    title: 'KPIs & pilotage',
    body: 'Volumes, délais, anomalies : chaque processus est instrumenté pour un pilotage par la preuve.',
    Icon: IconKPI,
    delay: '0.6s',
  },
  {
    key: 'conformite',
    prefix: '',
    value: 0,
    suffix: '',
    title: 'Conformité & maîtrise',
    body: 'Aucune donnée hors de votre périmètre. Hébergement, accès et RGPD traités dès la conception.',
    Icon: IconConformite,
    delay: '1.2s',
  },
];

/**
 * Un engagement = un panneau translucide : la nappe de bulles se devine au
 * travers, le chiffre reste la seule chose « forte » de la carte. Un filet
 * sépare la promesse (le chiffre) de sa preuve (le texte).
 */
const EngagementCard: React.FC<{
  item: typeof ENGAGEMENTS[number];
  active: boolean;
  index: number;
}> = ({ item, active, index }) => {
  const count = useCountUp(item.value, active);

  return (
    <article
      className={`h-full transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        active ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
      style={{ transitionDelay: active ? `${index * 110}ms` : '0ms' }}
    >
      <div
        className="flex h-full flex-col rounded-[24px] bg-[#1C1C1C]/55 px-6 pb-7 pt-6 ring-1 ring-inset ring-white/[0.09] lg:px-7"
        style={{ '--showcase-delay': item.delay } as React.CSSProperties}
      >
        <div className="flex items-start justify-between gap-4">
          {/* Le chiffre est le seul élément fort de la carte */}
          <span
            className="leading-[0.8] tabular-nums text-[#F2F1DF]"
            style={{
              fontFamily: DISPLAY,
              fontWeight: 500,
              fontSize: 'clamp(3.35rem, 5.4vw, 4.5rem)',
              letterSpacing: '-0.055em',
            }}
          >
            {item.prefix && (
              <span
                className="text-[#93BF9E]"
                style={{ fontSize: '0.5em', letterSpacing: '-0.03em' }}
              >
                {item.prefix}
              </span>
            )}
            {count}
            {item.suffix && (
              <span className="ml-[0.1em] text-[#93BF9E]" style={{ fontSize: '0.44em' }}>
                {item.suffix}
              </span>
            )}
          </span>

          {/* Sceau : le picto animé, posé dans l'angle comme un tampon */}
          <span className="mt-1 h-[26px] w-[26px] shrink-0 text-[#93BF9E]">
            <item.Icon />
          </span>
        </div>

        <div className="mt-6 border-t border-white/[0.09] pt-5">
          <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-[0.925rem] leading-relaxed text-white/60">{item.body}</p>
        </div>
      </div>
    </article>
  );
};

const InnovationShowcase: React.FC<InnovationShowcaseProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-0 relative z-10">
      {/* SECTION 1: RÉSULTATS — le `clip-path` découpe la nappe fixe aux bords
          de la section : le fond reste immobile, la section défile devant. */}
      <section
        className="relative bg-[#262626] px-6 py-16 lg:py-20"
        style={{ clipPath: 'inset(0)' }}
      >
        <BubbleField />

        <div ref={sectionRef} className="relative z-10 mx-auto max-w-6xl">
          {/* En-tête en bandeau : titre à gauche, la promesse tenue par un filet vert */}
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h2
              className="lg:col-span-7"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.15rem, 4.2vw, 3.4rem)',
                lineHeight: 1.03,
                letterSpacing: '-0.045em',
              }}
            >
              <span className="text-white">Des résultats mesurables,</span>
              <br />
              <span className="text-[#93BF9E]">dans un cadre sécurisé.</span>
            </h2>

            <p className="border-l-2 border-[#93BF9E] pl-4 text-[0.98rem] leading-relaxed text-white/60 lg:col-span-5 lg:pb-2">
              Trois engagements posés dès le cadrage, revus à chaque étape.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {ENGAGEMENTS.map((item, i) => (
              <EngagementCard key={item.key} item={item} active={visible} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ÉQUIPE (portraits + tooltips animés) */}
      <TeamSection />

      {/* SECTION 3: PARTENARIAT (Style "Image + Citation") */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image with Quote Overlay */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Collaboration d'équipe"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#262626]/90 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-white italic text-sm lg:text-base leading-relaxed">
                  "Flowera n'est pas un fournisseur d'outils, c'est un partenaire de transformation qui s'engage sur votre réussite à long terme."
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#262626] mb-8 leading-tight">
                Partenaire, pas simple prestataire.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nous travaillons aux côtés des directions générales, IT et métiers pour construire des solutions qui s'inscrivent dans la durée. Notre approche repose sur la proximité, la compréhension fine de vos enjeux politiques et techniques, et une amélioration continue des dispositifs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#262626] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  Confiance
                </span>
                <span className="px-4 py-2 bg-[#262626] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  Long-terme
                </span>
                <span className="px-4 py-2 bg-[#262626] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  Partenariat
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationShowcase;
