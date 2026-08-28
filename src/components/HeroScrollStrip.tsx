import React, { useEffect, useRef } from 'react';

/** Hauteur du bandeau : fine, plafonnée, indépendante de la largeur d'écran. */
const STRIP_HEIGHT = 'clamp(140px, 19vw, 260px)';
/** L'image est forcée à déborder de 24 % pour garder de la course au scroll. */
const STRIP_MIN_WIDTH = '124%';

/**
 * Bandeau photo plein écran placé juste sous le Hero, dont le haut dépasse
 * légèrement dans l'écran d'accueil.
 * L'image (très large, peu haute) démarre collée au bord gauche et déborde à
 * droite ; elle glisse vers la gauche au fil du scroll et s'arrête net quand son
 * bord droit atteint le bord droit de l'écran — elle ne boucle jamais.
 *
 * La hauteur restant plafonnée, la largeur naturelle de l'image (hauteur × ratio)
 * finit par être inférieure à celle d'un grand écran : bande blanche à droite et
 * course nulle. D'où le `min-width` ci-dessus, qui garantit le plein écran et le
 * débordement à toute largeur ; au-delà de ~1400px l'image est donc recadrée
 * verticalement, en coupant surtout par le bas pour préserver les visages.
 */
const HeroScrollStrip: React.FC = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const frameEl = frameRef.current;
    const img = imgRef.current;
    if (!frameEl || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let maxShift = 0;
    let scrollRange = 1;
    let frame = 0;

    const measure = () => {
      // Course = uniquement la portion d'image qui déborde hors de l'écran.
      maxShift = Math.max(0, img.offsetWidth - frameEl.offsetWidth);
      // Elle s'étale jusqu'à la sortie du bandeau par le haut de l'écran : le
      // glissement reste donc perceptible tant que l'image est visible, et l'arrêt
      // se produit hors champ.
      scrollRange = Math.max(1, frameEl.getBoundingClientRect().bottom + window.scrollY);
    };

    const render = () => {
      frame = 0;
      const progress = Math.min(1, Math.max(0, window.scrollY / scrollRange));
      img.style.transform = `translate3d(${-progress * maxShift}px, 0, 0)`;
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
    // décodage de l'image, chargement des polices, sortie du Preloader.
    const observer = new ResizeObserver(onResize);
    observer.observe(frameEl);
    observer.observe(img);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    img.addEventListener('load', onResize);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      img.removeEventListener('load', onResize);
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
        marginTop: 'calc(-1 * clamp(40px, 4.5vw, 64px))',
      }}
    >
      <img
        ref={imgRef}
        src="/images/hero-strip.jpg"
        alt=""
        className="absolute left-0 top-0 h-full w-auto max-w-none select-none pointer-events-none"
        style={{
          willChange: 'transform',
          minWidth: STRIP_MIN_WIDTH,
          objectFit: 'cover',
          objectPosition: 'center 30%',
        }}
        draggable={false}
      />
    </div>
  );
};

export default HeroScrollStrip;
