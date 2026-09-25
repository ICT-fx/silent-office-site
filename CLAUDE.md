# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server on http://localhost:3000 (host 0.0.0.0)
npm run build     # vite build + pre-render 18 pages → dist/ (does NOT type-check)
npm run build:spa # Vite only, no pre-render — escape hatch if Chromium is unavailable
npm run prerender # Re-run the pre-render alone over an existing dist/
npm run preview   # Serve the production build locally
npx tsc --noEmit  # Type-check (no npm script for it)
```

No test suite and no linter are configured. `tsc --noEmit` currently reports 3 pre-existing errors (`Preloader.tsx` and `ui/floating-tech-icons.tsx` framer-motion easing types, `React` namespace in `types/index.ts`); don't mistake them for regressions.

Deployment is Vercel. **There is no catch-all rewrite any more**: `npm run build` pre-renders one `dist/<route>/index.html` per route (`scripts/prerender.mjs`), Vercel serves those from the filesystem, and anything unmatched gets `dist/404.html` with a real 404. `vercel.json` now only holds the four 301s for the legacy solution slugs. A build that cannot pre-render **fails on purpose** rather than shipping a site whose routes would all 404; `npm run build:spa` is the escape hatch.

## Environment Variables (`.env.local`)

Setup walkthrough for the first three: `docs/setup-contact-et-rendez-vous.md`.

- `RESEND_API_KEY` (**no** `VITE_` prefix — the prefix would ship the key to the browser): read by `api/contact.ts`. Missing ⇒ the endpoint answers 503 with an explicit message rather than swallowing the request.
- `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`: optional overrides, defaulting to `fantin.schellekens@flowera.ch` and `Flowera <contact@flowera.ch>`.
- `VITE_CAL_USERNAME` / `VITE_CAL_SLUG_30` / `VITE_CAL_SLUG_60`: Cal.com handle and event slugs for the booking embed. Defaults are `flowera.ch`, `30min`, `60min` — the live account — so none of them normally needs setting. Public by nature (they end up in the served HTML).
- `GEMINI_API_KEY` (no `VITE_` prefix): `vite.config.ts` injects it as `process.env.GEMINI_API_KEY` / `process.env.API_KEY`. `@google/genai` is installed but **not imported anywhere** today.

Formspree and EmailJS are gone: `@formspree/react` was uninstalled and `FORMSPREE_SETUP.md` deleted when contact moved to Resend. `EMAILJS_SETUP.md` still sits at the root but documents code that never existed.

## Contact and booking

Both are wired through one path, so don't add a third:

- **Booking**: `@calcom/embed-react` inline on `/contact`, against the live account `cal.com/flowera.ch`. Two event types, `30min` and `60min`, toggled by the pills and deep-linkable via `?duree=30|60`. Slugs and displayed contact details live in `src/config/booking.ts` — **a slug that does not exist on Cal.com makes the embed render a raw English 404**, so verify with `curl -o /dev/null -w '%{http_code}' https://cal.com/flowera.ch/<slug>` (404 for a fake slug, 200 for a real one) before changing one. The card titles shown on the page are the site's own copy and are independent of the event titles in Cal.com; renaming an event there is safe as long as its slug is untouched. Google Calendar sync and the host notification e-mails are Cal.com's own features, **nothing about them lives in this repo**.
- **Messages**: `api/contact.ts` (Vercel Node function) sends via Resend. It mails the request to `CONTACT_TO_EMAIL` with `Reply-To` set to the prospect, then an acknowledgement to the prospect; the acknowledgement is best-effort and never fails the request. Every submitted value is HTML-escaped before interpolation, length-capped, and screened by a `website` honeypot field.
- **Two forms share `src/hooks/useContactForm.ts`**: the one on `/contact` and the short one in `Footer.tsx` (which is on every page). A `source` field tells them apart in the received mail. Change the submit behaviour in the hook, not in either form.
- Server-side, only `name`, `email` and `message` are required — `company` is optional so the footer form can stay short.
- **`npm run dev` does not serve `/api/`**: Vite returns `index.html`, so submitting fails locally by design. Use `npx vercel dev` to exercise the endpoint.

## Architecture

**Stack:** React 19 + TypeScript + Vite 6, React Router 7 (`BrowserRouter` in `main.tsx`), Tailwind 3, Framer Motion, Lucide. Static SPA — all content lives in TS files — with exactly one server-side file, `api/contact.ts`, deployed as a Vercel function. There is no database and no other endpoint.

**Imports:** the code uses relative imports. Beware: the `@/` alias is inconsistent. Vite maps `@` → `./src`, but `tsconfig.json` maps `@/*` → `./*` (repo root), so `@/` imports would type-check wrong. The `<script type="importmap">` (esm.sh) in `index.html` is a Google AI Studio leftover and is inert, because Vite bundles from `node_modules`.

**Shell (`src/App.tsx`):** `Preloader` + `Header` + `<Routes>` + `Footer`. App owns the `scrolled` flag passed to `Header`, and scrolls to top on every pathname change. Legacy solution slugs (`audit-processus`, `optimisation`, `finance`, `strategie`) are `<Navigate>` redirects declared *before* `/solutions/:slug`. Keep them when renaming slugs. Note that `SolutionsPage` and `InsightsPage` live in `src/components/`, not `src/pages/`.

### Content sources and what must stay in sync

- **Solutions:** `src/data/solutions/`. One file per offer (`audit`, `automatisation`, `data-bi`, `developpement-logiciel`, `formation`), schema in `types.ts`. `index.ts` exports `solutionsList` (official order 01→05, consumed by Header, Footer, `SolutionsSection`, `SolutionsPage`) and `solutionsBySlug` (consumed by `src/pages/SolutionPage.tsx`, the single template for all 5 offers).
  - Icons in `pillars[].icon` / `audiences[].icon` are **string names** resolved through the `ICONS` registry at the top of `SolutionPage.tsx`. A new name must be imported and registered there, or it silently falls back to `Target`.
  - The per-offer button/palette styles `.sol-btn-1…5` / `.sol-pal-1…5` in `src/index.css` are applied by list index in `SolutionsSection.tsx`, so adding or reordering offers means updating them too.
- **Insights articles:** metadata (id, title, category, date, image, readTime) lives in `src/data/insights.ts` (`insightPosts`, newest first; `homeFeaturedIds` controls the home carousel order). The **article bodies are hardcoded JSX** in `src/pages/ArticleDetailPage.tsx` (~2.8k lines), one `if (id === '…')` block per article, with a "not found" fallback at the end. Adding an article = entry in `insights.ts` + JSX block in `ArticleDetailPage.tsx` + a search description in `src/seo/routeMeta.ts` (`ARTICLE_META`). The sitemap and the pre-render pick it up automatically.
- **Portfolio:** `src/data/portfolio.ts`. `CLIENTS` (a client can be `anonymous: true`: no name/logo anywhere, only the project's sector shows) and `PROJECTS` with a discriminated `media` union (`stack` | `video` | `diagram` | `none`). `NAMED_CLIENTS` feeds `ClientsBand` on the home page; `PortfolioPage` renders projects.
- **Home page** (`src/pages/Home.tsx`): Hero → HeroScrollStrip → ClientsBand → SolutionsSection → TechStackSection → InnovationShowcase (includes `TeamSection`) → Insights carousel. Retired sections are kept, uncompiled, in `archive/sections-retirees-2026-08-30/`. Its README explains how to restore them.
- **SEO:** canonical domain `https://www.flowera.ch`, used in `src/seo/siteMeta.ts` and `public/robots.txt`. Every absolute URL written in code must use this domain.
  - `src/seo/` owns the `<head>`: `RouteSeo.tsx` resolves the current route, `Seo.tsx` writes title, description, canonical, Open Graph and the JSON-LD graph, `routeMeta.ts` holds the per-route copy. Add a route there or it inherits the 404 treatment.
  - **`public/sitemap.xml` no longer exists**: `scripts/prerender.mjs` regenerates `dist/sitemap.xml` from the same route list it pre-renders, so the two cannot drift. `lastmod` comes from the article date, or from the source file's last git commit.
  - The static meta block in `index.html` is only the pre-JS default; `Seo.tsx` overwrites each tag in place rather than appending, so there is never a duplicate `<title>` or `canonical`.
  - **`docs/SEO-GEO-PLAYBOOK.md` is the reference** for search and AI-answer visibility: audit of record (23/09/2026), what to fix in which order, the Geneva/Suisse romande local plan, the keyword architecture, the JSON-LD plan, and the daily/weekly/monthly check protocol. Read it before any SEO, copy-for-search or structured-data change.

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
- **Pas de superlatif auto-proclamé** (« le meilleur », « n°1 », « leader », « les plus performants ») : non prouvable, visé par la LCD art. 3 al. 1 let. b en Suisse et l'art. L121-2 du Code de la consommation en France, et jamais repris par un moteur génératif. Le positionnement passe par l'appropriation de catégorie — voir `docs/SEO-GEO-PLAYBOOK.md` § 2.2.
- **Pas de bourrage de mots-clés.** La couverture sémantique se construit par architecture de pages (un intent = une page), pas par accumulation. Voir le playbook § 5.
- **Cible géographique = Genève / Suisse romande.** Or le footer affiche une adresse parisienne, le téléphone est un `+33` et « Genève » n'apparaît nulle part dans `src/`. Tant que le NAP suisse n'est pas tranché, ne pas écrire de copy local qui suppose une implantation genevoise.
- Footer : adresse (Avenue Montaigne), liens sociaux (`#`) et pages légales sont des **placeholders** : ne pas les réutiliser ni inventer de valeurs.
- Pages solutions : garder leur profondeur (piliers, cibles, deep-dive en accordéon), ne pas les aplatir en template minimaliste.
- Contenu en français. Seuls les intitulés de projets et secteurs du portfolio sont volontairement en anglais.

## Notable Behaviors

- **Logo:** raster files (`public/flowera-logo.png`, `public/favicon.png`), a frangipani in pinwheel form. Never rebuild it as SVG. In the Header it spins on hover/click through the `logo-spin` class (`src/index.css`): forward rotation that eases to rest, **never in reverse**, locked until the animation finishes. Preserve this when editing the Header.
