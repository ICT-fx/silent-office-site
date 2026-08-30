import React, { useEffect, useRef } from 'react';

/**
 * Photos du bandeau, de gauche à droite.
 * Pour réordonner, retirer ou remplacer une vignette, il suffit d'éditer cette
 * liste : le bandeau se recompose tout seul (largeur, gouttières et course au
 * scroll sont recalculées au montage et à chaque resize).
 * Les fichiers vivent dans `public/images/hero-strip/`.
 */
const STRIP_IMAGES = [
  '/images/hero-strip/01.jpg',
  '/images/hero-strip/02.jpg',
  '/images/hero-strip/03.jpg',
  '/images/hero-strip/04.jpg',
  '/images/hero-strip/05.jpg',
  '/images/hero-strip/06.jpg',
];

/** Hauteur du bandeau : fine, plafonnée, indépendante de la largeur d'écran. */
const STRIP_HEIGHT = 'clamp(140px, 19vw, 260px)';
/** Le bandeau est forcé à déborder de 24 % pour garder de la course au scroll. */
const STRIP_MIN_WIDTH = '124%';
/** Gouttière blanche entre deux vignettes (≈ 2,8 % de la hauteur, comme la planche d'origine). */
const STRIP_GAP = 'clamp(4px, 0.53vw, 7px)';

/**
 * Bandeau photo plein écran placé juste sous le Hero, dont le haut dépasse
 * légèrement dans l'écran d'accueil.
 * La bande (très large, peu haute) démarre collée au bord gauche et déborde à
 * droite ; elle glisse vers la gauche au fil du scroll et s'arrête net quand son
 * bord droit atteint le bord droit de l'écran — elle ne boucle jamais.
 *
 * La hauteur restant plafonnée, la largeur naturelle de la bande (hauteur × ratios)
 * finit par être inférieure à celle d'un grand écran : bande blanche à droite et
 * course nulle. D'où le `min-width` ci-dessus, qui garantit le plein écran et le
 * débordement à toute largeur ; au-delà de ~1400px les vignettes s'élargissent et
 * sont donc recadrées verticalement, en coupant surtout par le bas pour préserver
 * les visages.
 */
const HeroScrollStrip: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frameEl = frameRef.current;
    const trackEl = trackRef.current;
    if (!frameEl || !trackEl) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let maxShift = 0;
    let scrollRange = 1;
    let frame = 0;

    const measure = () => {
      // Course = uniquement la portion de bande qui déborde hors de l'écran.
      maxShift = Math.max(0, trackEl.offsetWidth - frameEl.offsetWidth);
      // Elle s'étale jusqu'à la sortie du bandeau par le haut de l'écran : le
      // glissement reste donc perceptible tant que la bande est visible, et l'arrêt
      // se produit hors champ.
      scrollRange = Math.max(1, frameEl.getBoundingClientRect().bottom + window.scrollY);
    };

    const render = () => {
      frame = 0;
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
      trackEl.style.transform = `translate3d(${-progress * maxShift}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onResize = () => {
      measure();
      render();
    };

    measure();
    render();

    // Re-mesure aussi quand la mise en page bouge sans resize fenêtre :
    // décodage des images, chargement des polices, sortie du Preloader.
    const observer = new ResizeObserver(onResize);
    observer.observe(frameEl);
    observer.observe(trackEl);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    // `load` ne remonte pas : on l'écoute en phase de capture pour couvrir
    // toutes les vignettes d'un coup.
    trackEl.addEventListener('load', onResize, true);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      trackEl.removeEventListener('load', onResize, true);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      aria-hidden="true"
      className="relative w-full overflow-hidden bg-white"
      style={{
        height: STRIP_HEIGHT,
        // Remonte le bandeau sous le Hero pour qu'on en aperçoive le haut dès l'accueil.
        marginTop: 'calc(-1 * clamp(64px, 7vw, 100px))',
      }}
    >
      <div
        ref={trackRef}
        className="absolute left-0 top-0 flex h-full items-stretch"
        style={{
          willChange: 'transform',
          width: 'max-content',
          minWidth: STRIP_MIN_WIDTH,
          gap: STRIP_GAP,
        }}
      >
        {STRIP_IMAGES.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="h-full w-auto max-w-none select-none pointer-events-none"
            style={{
              flex: '1 0 auto',
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroScrollStrip;
