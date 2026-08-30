
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
    suffix: ' %',
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

const EngagementColumn: React.FC<{
  item: typeof ENGAGEMENTS[number];
  active: boolean;
}> = ({ item, active }) => {
  const count = useCountUp(item.value, active);

  return (
    <div
      className="group relative rounded-[26px] px-7 py-8 lg:px-9 lg:py-9 transition-colors duration-500 hover:bg-white/[0.04]"
      style={{ '--showcase-delay': item.delay } as React.CSSProperties}
    >
      <div className="flex items-center gap-4">
        {/* Pastille ronde — l'icône respire au lieu d'être enfermée dans un carré */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.07] ring-1 ring-inset ring-white/10 text-[#93BF9E] transition-colors duration-500 group-hover:bg-[#027333]/25 group-hover:text-white">
          <span className="h-[19px] w-[19px]">
            <item.Icon />
          </span>
        </span>

        <span
          className="text-[2.6rem] lg:text-[3rem] leading-none tracking-[-0.045em] tabular-nums text-white"
          style={{ fontFamily: DISPLAY, fontWeight: 500 }}
        >
          {item.prefix}
          {count}
          {item.suffix}
        </span>
      </div>

      <h3 className="mt-6 text-[1.05rem] font-semibold tracking-[-0.01em] text-white">
        {item.title}
      </h3>
      <p className="mt-2 text-[0.925rem] leading-relaxed text-white/50">{item.body}</p>
    </div>
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
      {/* SECTION 1: RÉSULTATS — bandeau sombre, panneau arrondi, rien de superflu */}
      <section className="relative overflow-hidden bg-[#262626] px-6 py-14 lg:py-16">
        {/* Deux halos très diffus : de la profondeur, aucune trame */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-[8%] h-[30rem] w-[30rem] rounded-full bg-[#027333]/25 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-[4%] h-[26rem] w-[26rem] rounded-full bg-[#93BF9E]/10 blur-[140px]"
        />

        <div ref={sectionRef} className="relative mx-auto max-w-5xl">
          {/* En-tête centré, court */}
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-[2.1rem] lg:text-[2.9rem] leading-[1.08] tracking-[-0.03em] text-white"
              style={{ fontFamily: DISPLAY, fontWeight: 500 }}
            >
              Des résultats mesurables,
              <br className="hidden sm:block" />{' '}
              <span className="text-[#93BF9E]">dans un cadre sécurisé.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/50">
              Trois engagements posés dès le cadrage, revus à chaque étape.
            </p>
          </div>

          {/* Panneau unique, très arrondi — les trois engagements vivent dedans */}
          <div className="mt-11 rounded-[34px] border border-white/10 bg-white/[0.045] p-1.5 shadow-[0_40px_80px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm">
            <div className="rounded-[28px] bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="grid divide-y divide-white/[0.07] md:grid-cols-3 md:divide-y-0 md:divide-x">
                {ENGAGEMENTS.map((item) => (
                  <EngagementColumn key={item.key} item={item} active={visible} />
                ))}
              </div>
            </div>
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
