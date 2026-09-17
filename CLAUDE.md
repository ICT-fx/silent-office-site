# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server on http://localhost:3000 (host 0.0.0.0)
npm run build     # Production build → dist/ (Vite only — does NOT type-check)
npm run preview   # Serve the production build locally
npx tsc --noEmit  # Type-check (no npm script for it)
```

No test suite and no linter are configured. `tsc --noEmit` currently reports 3 pre-existing errors (`Preloader.tsx` and `ui/floating-tech-icons.tsx` framer-motion easing types, `React` namespace in `types/index.ts`); don't mistake them for regressions.

Deployment is Vercel. `vercel.json` rewrites every non-`/api/` path to `index.html` so React Router deep links don't 404.

## Environment Variables (`.env.local`)

- `VITE_FORMSPREE_FORM_ID`: read by `src/pages/ContactPage.tsx` (`@formspree/react`). Falls back to the literal `'YOUR_FORM_ID'`, so the form silently fails without it. See `FORMSPREE_SETUP.md`.
- `VITE_EMAILJS_*`: listed in `.env.example` and typed in `src/vite-env.d.ts`, but **no EmailJS package or code exists in `src/`**. Only `EMAILJS_SETUP.md` remains.
- `GEMINI_API_KEY` (no `VITE_` prefix): `vite.config.ts` injects it as `process.env.GEMINI_API_KEY` / `process.env.API_KEY`. `@google/genai` is installed but **not imported anywhere** today.

## Architecture

**Stack:** React 19 + TypeScript + Vite 6, React Router 7 (`BrowserRouter` in `main.tsx`), Tailwind 3, Framer Motion, Lucide. Pure static SPA: no backend, all content lives in TS files.

**Imports:** the code uses relative imports. Beware: the `@/` alias is inconsistent. Vite maps `@` → `./src`, but `tsconfig.json` maps `@/*` → `./*` (repo root), so `@/` imports would type-check wrong. The `<script type="importmap">` (esm.sh) in `index.html` is a Google AI Studio leftover and is inert, because Vite bundles from `node_modules`.

**Shell (`src/App.tsx`):** `Preloader` + `Header` + `<Routes>` + `Footer`. App owns the `scrolled` flag passed to `Header`, and scrolls to top on every pathname change. Legacy solution slugs (`audit-processus`, `optimisation`, `finance`, `strategie`) are `<Navigate>` redirects declared *before* `/solutions/:slug`. Keep them when renaming slugs. Note that `SolutionsPage` and `InsightsPage` live in `src/components/`, not `src/pages/`.

### Content sources and what must stay in sync

- **Solutions:** `src/data/solutions/`. One file per offer (`audit`, `automatisation`, `data-bi`, `developpement-logiciel`, `formation`), schema in `types.ts`. `index.ts` exports `solutionsList` (official order 01→05, consumed by Header, Footer, `SolutionsSection`, `SolutionsPage`) and `solutionsBySlug` (consumed by `src/pages/SolutionPage.tsx`, the single template for all 5 offers).
  - Icons in `pillars[].icon` / `audiences[].icon` are **string names** resolved through the `ICONS` registry at the top of `SolutionPage.tsx`. A new name must be imported and registered there, or it silently falls back to `Target`.
  - The per-offer button/palette styles `.sol-btn-1…5` / `.sol-pal-1…5` in `src/index.css` are applied by list index in `SolutionsSection.tsx`, so adding or reordering offers means updating them too.
- **Insights articles:** metadata (id, title, category, date, image, readTime) lives in `src/data/insights.ts` (`insightPosts`, newest first; `homeFeaturedIds` controls the home carousel order). The **article bodies are hardcoded JSX** in `src/pages/ArticleDetailPage.tsx` (~2.8k lines), one `if (id === '…')` block per article, with a "not found" fallback at the end. Adding an article = entry in `insights.ts` + JSX block in `ArticleDetailPage.tsx` + URL in `public/sitemap.xml`.
- **Portfolio:** `src/data/portfolio.ts`. `CLIENTS` (a client can be `anonymous: true`: no name/logo anywhere, only the project's sector shows) and `PROJECTS` with a discriminated `media` union (`stack` | `video` | `diagram` | `none`). `NAMED_CLIENTS` feeds `ClientsBand` on the home page; `PortfolioPage` renders projects.
- **Home page** (`src/pages/Home.tsx`): Hero → HeroScrollStrip → ClientsBand → SolutionsSection → TechStackSection → InnovationShowcase (includes `TeamSection`) → Insights carousel. Retired sections are kept, uncompiled, in `archive/sections-retirees-2026-08-30/`. Its README explains how to restore them.
- **SEO:** canonical domain `https://www.flowera.ch`, used in the `index.html` meta/Open Graph tags, `public/robots.txt` and `public/sitemap.xml` (maintained by hand). Every absolute URL written in code must use this domain.

### Preloader ↔ Header coupling

The "terminal → brand" intro (`src/components/Preloader.tsx`, spec in `docs/superpowers/specs/2026-06-30-preloader-terminal-to-brand-design.md`) plays on every load of `/` only, never with `prefers-reduced-motion`. An inline script in `index.html` adds `html.preloading` (black background, manual scroll restoration) before React mounts, and the Preloader removes it. The logo's final landing spot is **measured at runtime on the Header logo**, and `LOGO_SIZE = 56` mirrors the Header's `w-14 h-14` container. Changing the Header logo's size or position means updating the Preloader too. `html { scrollbar-gutter: stable }` in `index.html` prevents a 4px layout jump when the preloader's scroll lock ends.

### Styling

- Theme tokens in `tailwind.config.js`: `primary` #027333, `secondary` #025928, `accent` #93BF9E, `dark` #262626, `light` #F2F1DF. Much existing code writes the same values as arbitrary classes (`text-[#027333]`) or JS constants. Stay within this palette either way.
- Global CSS is split between the `<style>` block in `index.html` (base fonts, scrollbar, `.glass-header`, `.text-gradient`, preloader guard) and `src/index.css` (Tailwind layers plus all custom keyframes/classes: `logo-spin`, `gradient-button`, `sol-btn-*`, hero/showcase animations).
- Fonts are loaded from Google Fonts in `index.html`: Inter (body), Manrope (h1–h4), DM Sans (hooks/buttons), JetBrains Mono (preloader), plus Space Grotesk and Newsreader.
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge) for the `src/components/ui/` components.

### Dead code / non-app files

- Unused: `src/components/Header_backup.tsx`, `StrategicApproach.tsx`, `ui/animated-gradient-background.tsx`, `ViewState` in `src/types/index.ts`.
- Root-level `Logos/`, `Images équipes/`, `Video.heroe/`, and the loose `*.png` / `*.jpeg` files are source assets, **not served**. Only `public/` is. `metadata.json` is AI Studio metadata still carrying the old name.

## Business Context

Site vitrine de **Flowera** (SAS). Le rebranding est terminé : nom et logo sont définitifs. **`PRODUCT.md` fait référence** pour la cible (dirigeants de PME de Suisse romande), le positionnement, la voix, les preuves disponibles et les faits non décidés. À lire avant toute modification de copy ou ajout de section.

Points qui reviennent le plus souvent :
- **5 offres, ordre 01→05**, promesses hero verbatim (`promise` dans `src/data/solutions/*.ts`, ne jamais reformuler) : Audit, Automatisation & Optimisation, Data & BI, Développement logiciel, Formation & Transformation.
- **« RPA » est banni du copy.** L'IA traverse les 5 offres, elle n'est pas une offre autonome.
- **Ne jamais fabriquer** de témoignage, de résultat client chiffré, d'étude de cas, de certification. Les chiffres des pages solutions sont des scénarios de marché et doivent rester formulés comme tels.
- Footer : adresse (Avenue Montaigne), liens sociaux (`#`) et pages légales sont des **placeholders** : ne pas les réutiliser ni inventer de valeurs.
- Pages solutions : garder leur profondeur (piliers, cibles, deep-dive en accordéon), ne pas les aplatir en template minimaliste.
- Contenu en français. Seuls les intitulés de projets et secteurs du portfolio sont volontairement en anglais.

## Notable Behaviors

- **Logo:** raster files (`public/flowera-logo.png`, `public/favicon.png`), a frangipani in pinwheel form. Never rebuild it as SVG. In the Header it spins on hover/click through the `logo-spin` class (`src/index.css`): forward rotation that eases to rest, **never in reverse**, locked until the animation finishes. Preserve this when editing the Header.
