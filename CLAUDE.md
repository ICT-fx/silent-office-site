# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build locally
```

No test suite is configured.

## Environment Variables

Copy `.env.example` to `.env.local` and set:
- `VITE_GEMINI_API_KEY` — Google Gemini API key (required for AI features)
- `VITE_EMAILJS_*` — EmailJS credentials (contact form)

Formspree form IDs are hardcoded in the contact components.

## Architecture

**Stack:** React 19 + TypeScript + Vite, React Router DOM 7, Tailwind CSS 3, Lucide icons.

**Path alias:** `@/` resolves to `./src/`.

**Routing** (`src/App.tsx`): Client-side SPA with routes for `/`, `/solutions`, `/solutions/:slug`, `/insights`, `/insights/:id`, `/contact`, `/careers`. Auto-scrolls to top on route change.

**Data layer** (`src/data/`): Static TypeScript objects — no backend, no API calls except external services (Gemini, Formspree, EmailJS). Solution pages are driven by `solutions.ts` and rendered via `SolutionDetail.tsx` using the `:slug` param.

**Component structure:**
- `src/pages/` — route-level page components
- `src/components/` — section and UI components; `home/` contains homepage-specific sections
- `src/types/index.ts` — shared TypeScript interfaces (`SolutionData`, `InsightPost`, `BentoItem`, etc.)

**Styling:** Tailwind utility classes throughout. Custom theme tokens defined in `tailwind.config.js`:
- `primary` `#027333` — vert forêt (accents, boutons, icônes)
- `secondary` `#025928` — vert foncé (dégradés, variants)
- `accent` `#93BF9E` — vert sauge (accents doux)
- `dark` `#262626` — quasi-noir (texte, backgrounds sombres)
- `light` `#F2F1DF` — crème (backgrounds clairs, cards)

Global styles (glass effect, gradient text, scrollbar) live in `index.html` `<style>` tags and `src/index.css`. Fonts: Inter (body), Manrope (headings).

**State:** Local `useState`/`useRef`/`useEffect` only — no global state management library.

**Forms:** Contact form uses `@formspree/react`. EmailJS is also wired up as an alternative (see `EMAILJS_SETUP.md`).

**AI:** `@google/genai` is installed for Gemini integration; usage is tied to `VITE_GEMINI_API_KEY`.

## Business Context

Ce site est le site vitrine de la propre entreprise du propriétaire du repo. **Un rebranding (nom + esthétique) est en cours** — ne pas cimenter le nom ou l'identité visuelle actuelle dans le code.

Services proposés par l'entreprise :
- Automatisation de processus (RPA)
- Création de SaaS
- Création de sites web
- Acculturation à l'IA
- Création de dashboards

Garder ce périmètre en tête lors d'ajouts de contenu, de nouvelles sections ou de modifications du copy.

## Notable Behaviors

- The `Header` logo (5-petal flower, bottom-right petal green) spins on hover/click via the `logo-spin-back` animation (`src/index.css`). Preserve this rotation when editing the header.
- The site content is in French.
