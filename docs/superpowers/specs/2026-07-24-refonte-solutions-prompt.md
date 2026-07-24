# Prompt d'exécution multi-agents — Refonte solutions Flowera

> À coller tel quel dans Claude Code (ou à exécuter directement). Spec de référence :
> `docs/superpowers/specs/2026-07-24-refonte-solutions-design.md` — la lire intégralement avant de commencer.

---

Exécute la refonte des solutions décrite dans `docs/superpowers/specs/2026-07-24-refonte-solutions-design.md` en orchestrant des sous-agents. Respecte strictement les phases ci-dessous : la phase 1 est séquentielle (elle pose le socle), la phase 2 lance 5 sous-agents **en parallèle**, les phases 3 et 4 sont séquentielles.

## Brief éditorial commun (à transmettre verbatim à chaque sous-agent de contenu)

- Tout le copy est en **français**, tutoiement interdit (vouvoiement), ton direct et concret.
- Chaque phrase doit répondre à « qu'est-ce que le client y gagne ? » — temps, argent, efficacité, fiabilité. On parle du quotidien du client, jamais de la technologie pour elle-même.
- Chiffres = **scénarios marché** (« une facture saisie en 30 secondes au lieu de 5 minutes »), jamais des promesses de résultats clients ni des KPI invérifiables.
- Mots interdits : « RPA », « OCR », « reconnaissance visuelle », jargon techno non expliqué. L'IA est un moyen transversal, jamais une fin.
- Les promesses hero sont **verbatim** (voir spec §3) : interdiction de les reformuler.

## Phase 1 — Socle (séquentiel, 1 agent)

Un sous-agent construit l'infrastructure, sans rédiger le contenu final :

1. Nouveau schéma `SolutionData` dans `src/types/index.ts` (ou `src/data/solutions/types.ts`) : `id`, `slug`, `title`, `promise`, `subPromise?`, `shortDescription`, `gains[] {scenario, label}`, `useCases[] {title, before, setup, result}`, `steps[] {title, description, duration}`.
2. Structure `src/data/solutions/` : un fichier par solution (`audit.ts`, `automatisation.ts`, `data-bi.ts`, `developpement-logiciel.ts`, `formation.ts`) avec un contenu **placeholder minimal mais typé et compilable**, + `index.ts` qui agrège en `Record<slug, SolutionData>`.
3. Nouveau template `src/pages/SolutionPage.tsx` rendant le squelette de la spec §4 (hero → gains → cas concrets → mise en place → CTA), stylé avec la palette et Space Grotesk (à ajouter dans `index.html` via Google Fonts).
4. Refonte de `src/components/SolutionsSection.tsx` (home) selon la spec §5 : liste + panneau latéral au survol sur desktop, liste titre + sous-titre sur mobile, alimentée par le nouvel index de données.
5. Vérifier que `npm run build` passe avec les placeholders.

Attendre la fin de cette phase avant de lancer la phase 2.

## Phase 2 — Contenu (5 sous-agents en parallèle)

Lancer **5 sous-agents simultanément**, un par solution. Chacun ne modifie **que son propre fichier** dans `src/data/solutions/` (aucun autre fichier — c'est ce qui rend la parallélisation sûre). Chacun reçoit : le brief éditorial commun, la spec §3 (sa promesse verbatim + son angle) et §4 (structure), et rédige l'intégralité de son contenu : sous-titre, 3 gains en scénarios chiffrés, 2-3 cas concrets (avant / mise en place / résultat), 3-4 étapes de mise en place avec durées.

Rappels d'angle par agent :

- **Agent Audit** — « Transformez vos contraintes en opportunités. » Posture collaborative : analyse des besoins, identification des problèmes prioritaires, restitution avec le client, plan d'action clair.
- **Agent Automatisation & Optimisation** — « Faites plus, avec les mêmes équipes. » Offre générale : tout processus, tout métier. Factures, commandes, relances = exemples de cas concrets. Couvrir automatisation ET optimisation.
- **Agent Data & BI** — Titre « Les IA se trompent. Les chiffres non. » + sous-titre « Chaque décision mérite des données fiables. » Dashboards, reporting automatisé, décisions pilotées par les chiffres.
- **Agent Développement logiciel** — « Le bon outil, rien de plus. » Outils métier sur mesure, SaaS internes, remplacement des bricolages Excel, pas de licences superflues.
- **Agent Formation & Transformation** — « L'IA qui fait vraiment gagner du temps. » Anti-gadget : IA utile dans les process quotidiens, augmentation de la capacité des équipes, zéro superflu.

## Phase 3 — Intégration (séquentiel, 1 agent)

1. `App.tsx` : `/solutions/:slug` → nouveau `SolutionPage.tsx` ; redirections `<Navigate replace>` : `audit-processus → audit`, `optimisation → automatisation`, `finance → automatisation`, `strategie → formation`.
2. `Header.tsx` : mega-menu desktop + menu mobile → les 5 offres avec les nouveaux slugs. **Ne pas toucher au logo ni à son animation `logo-spin-back`.**
3. `Footer.tsx` et `SolutionsPage.tsx` (listing `/solutions`) alignés sur les 5 offres.
4. Supprimer : `SolutionDetail.tsx`, `RPASolutionPage.tsx`, `AuditSolutionPage.tsx`, `OptimisationSolutionPage.tsx`, `StrategieSolutionPage.tsx`, et l'ancien `src/data/solutions.ts`.

## Phase 4 — Revue (séquentiel, 1 agent)

1. `npm run build` doit passer sans erreur ni import mort.
2. `grep -ri "rpa" src/` → zéro occurrence dans le copy rendu.
3. Relire les 5 fichiers de contenu d'un œil unique : cohérence de ton, promesses verbatim intactes, structure identique, aucun KPI invérifiable.
4. Vérifier les 5 pages + les 4 redirections + la section home (desktop et mobile) via le serveur de dev.
5. Rapporter les écarts et les corriger avant de conclure.
