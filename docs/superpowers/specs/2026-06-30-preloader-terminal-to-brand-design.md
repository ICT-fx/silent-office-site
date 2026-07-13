# Preloader « terminal → marque » — Design

Date : 2026-06-30
Statut : approuvé (design)

## Objectif

Animation d'introduction (preloader) jouée à l'arrivée sur le site. Doit être
fluide, premium, et donner une image haut de gamme / moderne / technologique.
Passe d'un univers « terminal / développement » à l'identité graphique de la
marque Flowera, puis pose le logo à sa place définitive dans le Header.

Durée cible : ~3,5 s (≤ 4 s). 60 FPS, easings modernes, pas d'effet kitsch.

## Décisions produit (validées)

- **Fréquence** : se rejoue à **chaque chargement/rafraîchissement de l'accueil**
  (pas de gate de session). Au démarrage, le scroll est forcé en haut
  (`history.scrollRestoration = 'manual'` + `scrollTo(0,0)`) pour ne pas gâcher
  la révélation finale si on rafraîchit depuis le bas de page.
- **Typo du mot reformé (étape 2)** : style du titre principal de la Hero —
  `Inter`, `font-weight: 800`, `letter-spacing: -0.05em`. Blanc sur fond noir.
- **Portée** : Accueil uniquement (`location.pathname === '/'`).
- **Pas de bouton « Passer »** (retiré).

## Contexte technique (existant)

- `framer-motion@12.38.0` déjà installé.
- `JetBrains Mono` déjà chargé via Google Fonts (`index.html`).
- Hero `<h1>` : `Inter` 800, `letter-spacing -0.05em`, `color #262626`.
- Logo : `/flowera-logo.png` (raster frangipanier — ne pas reconstruire en SVG).
- Header : carte `fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl`,
  logo `<img>` dans un conteneur `w-14 h-14`. Animation hover `logo-spin`
  existante (90°→360°) à préserver.

## Architecture & montage

- Nouveau composant `src/components/Preloader.tsx` : overlay
  `fixed inset-0 z-[9999]`, fond noir, au-dessus de tout (Header inclus).
- Monté dans `src/App.tsx` (accès au `location`). S'auto-désactive : ne joue que
  si `pathname === '/'` ET clé sessionStorage absente ; sinon ne rend rien.
- La page (Header + Hero) est rendue dessous dès le départ — nécessaire pour
  mesurer la position réelle du logo Header à l'étape 4. L'overlay la masque puis
  la révèle.
- Scroll `body` verrouillé pendant la séquence, libéré à la fin.
- Bouton discret « Passer l'intro ». `prefers-reduced-motion` → révélation
  instantanée (pas d'animation).
- Anti-flash blanc : court script inline dans `index.html` qui force le fond noir
  si `'/'` + non-joué, classe retirée à la fin de la séquence.

## Séquence (durées = constantes réglables)

1. **Terminal (~1,0 s)** — fond noir, JetBrains Mono blanc, curseur `▌`
   clignotant. Frappe `F→FL→…→FLOWERA` caractère par caractère (~85 ms/lettre),
   maintien ~350 ms.
2. **Transformation (~0,85 s)** — backspace lettre par lettre jusqu'au vide,
   courte pause (curseur seul), puis `FLOWERA` retapée caractère par caractère en
   `Inter 800 / -0.05em`, blanc sur noir, curseur fin assorti.
3. **Logo géant (~0,65 s)** — le mot s'efface ; `/flowera-logo.png` entre
   hors-champ depuis le coin inférieur droit, gigantesque (~220 vmax), file vers
   le centre en restant énorme jusqu'à quasi-remplir l'écran (ease-out / spring).
4. **Dézoom + rotation → Header (~0,95 s)** — le logo dézoome très fluidement
   avec rotation (easing calqué sur `logo-spin`, fin à 0° droit) et se pose
   exactement sur le logo réel du Header (position **mesurée au runtime** via
   `getBoundingClientRect()` → responsive, pixel-perfect). En parallèle le fond
   noir se dissout → la Hero apparaît. À l'atterrissage : crossfade overlay-logo
   → logo réel, overlay démonté. Aucune coupure.

Total ≈ 3,45 s.

## Technique

- Frappe / backspace : état React + timeouts (caractère par caractère) ; curseur
  clignotant en CSS.
- Mouvement du logo : `framer-motion` (`motion.img`, `x/y/scale/rotate`), de
  « centre géant » vers le rect mesuré.
- Mesure de la cible : `id="brand-logo"` sur l'`<img>` du Header (1 ligne).

## Fichiers touchés

1. `src/components/Preloader.tsx` — nouveau, toute la séquence.
2. `src/App.tsx` — monter `<Preloader />`.
3. `src/components/Header.tsx` — `id="brand-logo"` sur le logo (1 ligne).
4. `src/index.css` — keyframes curseur + helpers + `prefers-reduced-motion`.
5. `index.html` — garde anti-flash noir (inline).

## Garde-fous

- Respect `prefers-reduced-motion`.
- Scroll verrouillé pendant la séquence, forcé en haut au démarrage, puis libéré
  (`scrollRestoration` repassé à `auto` à la fin).
- Rejeu à chaque chargement de l'accueil.
- Nettoyage des timers (compatible React StrictMode — flag `cancelled`).
- Aucun impact sur les autres routes ni sur l'animation hover du logo Header.

## Hors périmètre

- Pas de test automatisé (aucun runner configuré dans le projet). Vérification
  manuelle via `npm run dev` + build de prod.
