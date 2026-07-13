import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

/**
 * Preloader « terminal → marque ».
 *
 * Séquence (≈3,7 s) :
 *  1. Fond noir, curseur clignotant, frappe de FLOWERA en JetBrains Mono (terminal).
 *  2. Effacement (backspace) puis réécriture caractère par caractère en typo Hero
 *     (Inter 800, letter-spacing -0.05em) — bascule terminal → identité de marque.
 *  3. Le logo Flowera entre, gigantesque, du coin inférieur droit jusqu'au centre.
 *  4. Dézoom + rotation : le logo se pose exactement sur le logo réel du Header
 *     (cible mesurée au runtime), le fond noir se dissout et révèle la Hero.
 *
 * Ne se joue qu'une fois par session, uniquement sur l'accueil, et jamais en
 * `prefers-reduced-motion`.
 */

const BRAND = 'FLOWERA';
const PRELOAD_CLASS = 'preloading';

/** Taille (px) du logo dans le Header (conteneur w-14 h-14). */
const LOGO_SIZE = 56;

/** Durées en ms — réglables sans rien casser. Total ≈ 4,3 s. */
const TIMING = {
  bootBlink: 220,
  typePerChar: 85, // frappe terminal (un peu plus rapide)
  holdAfterType: 550, // le mot mono reste affiché plus longtemps
  backspacePerChar: 40,
  pauseEmpty: 200,
  retypePerChar: 72, // réécriture marque (un peu plus rapide)
  holdAfterRetype: 300, // petit écart avant l'arrivée du logo
  logoEnter: 620,
  logoLand: 900,
  handoff: 180,
};

type Mode = 'mono' | 'brand';

// Le preloader se rejoue à CHAQUE chargement/rafraîchissement de l'accueil
// (la page qui contient la Hero), et nulle part ailleurs. Jamais en
// prefers-reduced-motion.
function shouldPlay(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const isHome = window.location.pathname === '/';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isHome && !reduced;
  } catch {
    return false;
  }
}

const Preloader: React.FC = () => {
  const [active, setActive] = useState<boolean>(shouldPlay);

  const [text, setText] = useState('');
  const [mode, setMode] = useState<Mode>('mono');
  const [showWord, setShowWord] = useState(true);
  const [bgVisible, setBgVisible] = useState(true);

  const logo = useAnimationControls();

  const finish = useCallback(() => {
    document.documentElement.classList.remove(PRELOAD_CLASS);
    document.body.style.overflow = '';
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'auto';
    setActive(false);
  }, []);

  useEffect(() => {
    if (!active) {
      // Pas de preloader : on s'assure que la garde anti-flash est levée.
      document.documentElement.classList.remove(PRELOAD_CLASS);
      return;
    }

    // Remonte en haut (et empêche le navigateur de restaurer la position de
    // scroll après un refresh depuis le bas de page) pour ne pas gâcher la
    // révélation finale de la Hero.
    document.documentElement.classList.add(PRELOAD_CLASS);
    document.body.style.overflow = 'hidden';
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    let cancelled = false;
    const timers: number[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const run = async () => {
      // État de départ propre (utile en dev / StrictMode).
      setMode('mono');
      setText('');
      setShowWord(true);
      setBgVisible(true);

      await sleep(TIMING.bootBlink);
      if (cancelled) return;

      // Étape 1 — frappe en mode terminal.
      for (let i = 1; i <= BRAND.length; i++) {
        setText(BRAND.slice(0, i));
        await sleep(TIMING.typePerChar);
        if (cancelled) return;
      }
      await sleep(TIMING.holdAfterType);
      if (cancelled) return;

      // Étape 2a — effacement.
      for (let i = BRAND.length - 1; i >= 0; i--) {
        setText(BRAND.slice(0, i));
        await sleep(TIMING.backspacePerChar);
        if (cancelled) return;
      }
      await sleep(TIMING.pauseEmpty);
      if (cancelled) return;

      // Étape 2b — réécriture en typo de marque.
      setMode('brand');
      for (let i = 1; i <= BRAND.length; i++) {
        setText(BRAND.slice(0, i));
        await sleep(TIMING.retypePerChar);
        if (cancelled) return;
      }
      await sleep(TIMING.holdAfterRetype);
      if (cancelled) return;

      // Mesure de la cible (logo réel du Header) — responsive / pixel-perfect.
      const target = document.getElementById('brand-logo');
      const rect = target?.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const giant = (Math.max(vw, vh) * 1.5) / LOGO_SIZE;
      const finalScale = (rect?.width || LOGO_SIZE) / LOGO_SIZE;
      const headerCenterX = (rect?.left ?? 24) + (rect?.width ?? LOGO_SIZE) / 2;
      const headerCenterY = (rect?.top ?? 28) + (rect?.height ?? LOGO_SIZE) / 2;
      const finalX = headerCenterX - vw / 2;
      const finalY = headerCenterY - vh / 2;

      // Étapes 3-4 — un SEUL mouvement continu, sans pause : le logo géant
      // surgit du coin inférieur droit, traverse le centre en remplissant
      // l'écran (il accélère et ne s'arrête PAS au centre), puis dézoome
      // jusqu'au Header. La rotation court tout du long jusqu'à la position
      // finale (0° = droit).
      setShowWord(false);

      const START_ROT = -270; // degrés parcourus en continu jusqu'à 0 (réglable)
      const totalSec = (TIMING.logoEnter + TIMING.logoLand) / 1000;
      const tMid = TIMING.logoEnter / (TIMING.logoEnter + TIMING.logoLand);
      const pathTimes = [0, tMid, 1];
      const pathEase = [
        [0.42, 0, 1, 1], // 1er tronçon : accélère, arrive lancé au centre
        [0, 0.55, 0.3, 1], // 2e tronçon : repart lancé, décélère jusqu'au Header
      ];

      logo.set({ x: vw * 0.78, y: vh * 0.78, scale: giant, rotate: START_ROT, opacity: 1 });

      // La Hero se révèle pendant le dézoom (2e tronçon).
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) setBgVisible(false);
        }, TIMING.logoEnter),
      );

      await logo.start({
        x: [vw * 0.78, 0, finalX],
        y: [vh * 0.78, 0, finalY],
        scale: [giant, giant, finalScale],
        rotate: [START_ROT, 0],
        transition: {
          x: { duration: totalSec, times: pathTimes, ease: pathEase },
          y: { duration: totalSec, times: pathTimes, ease: pathEase },
          scale: { duration: totalSec, times: pathTimes, ease: pathEase },
          rotate: { duration: totalSec, ease: [0.2, 0.5, 0.2, 1] }, // rotation continue → 0
        },
      });
      if (cancelled) return;

      // Crossfade overlay → logo réel du Header (même taille, même position).
      await logo.start({ opacity: 0, transition: { duration: TIMING.handoff / 1000 } });
      if (cancelled) return;

      finish();
    };

    run();

    return () => {
      cancelled = true;
      timers.forEach((id) => clearTimeout(id));
      logo.stop();
    };
  }, [active, logo, finish]);

  if (!active) return null;

  const isMono = mode === 'mono';

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Fond noir (se dissout à l'étape 4 pour révéler la Hero) */}
      <div
        className="absolute inset-0"
        style={{
          background: '#050505',
          opacity: bgVisible ? 1 : 0,
          transition: `opacity ${TIMING.logoLand}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      />

      {/* Le mot (terminal puis marque) */}
      <div
        className="absolute inset-0 flex items-center justify-center px-6 select-none"
        style={{
          opacity: showWord ? 1 : 0,
          transition: 'opacity 280ms ease',
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontFamily: isMono ? "'JetBrains Mono', monospace" : "'Inter', sans-serif",
            fontWeight: isMono ? 500 : 800,
            letterSpacing: isMono ? '0.02em' : '-0.05em',
            fontSize: isMono
              ? 'clamp(2.2rem, 8vw, 5rem)'
              : 'clamp(2.6rem, 9vw, 6rem)',
            lineHeight: 1,
            textShadow: '0 0 28px rgba(255,255,255,0.12)',
            whiteSpace: 'nowrap',
          }}
        >
          {text}
          <span
            className="preloader-cursor"
            style={{
              display: 'inline-block',
              marginLeft: isMono ? '0.05em' : '0.02em',
              width: isMono ? '0.58em' : '0.06em',
              height: isMono ? '1.05em' : '1.1em',
              transform: 'translateY(0.12em)',
              background: '#ffffff',
              borderRadius: isMono ? '1px' : '0',
            }}
          />
        </span>
      </div>

      {/* Logo overlay (entrée géante puis dézoom vers le Header) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.img
          src="/flowera-logo.png"
          alt=""
          draggable={false}
          initial={{ opacity: 0, x: 0, y: 0, scale: 1, rotate: 0 }}
          animate={logo}
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
            objectFit: 'contain',
            willChange: 'transform, opacity',
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
