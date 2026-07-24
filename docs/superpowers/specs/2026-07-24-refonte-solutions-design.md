# Refonte des solutions — Design validé

**Date :** 2026-07-24
**Statut :** validé en discussion avec Fantin (promesses finales fournies par lui)

## 1. Objectif

Repositionner le discours du site sur **ce que le client gagne** (temps, argent, efficacité) plutôt que sur la technologie. Simplifier l'offre en **5 solutions**, redessiner la section solutions de la page d'accueil, et donner à chaque solution une page dédiée orientée cas concrets et gains.

**Périmètre de cette itération :** section solutions de la home + les 5 pages dédiées + navigation/routes associées. Le hero, la section méthode et le reste de la home ne bougent pas (harmonisation dans une itération future).

## 2. Décisions de cadrage validées

- **Chiffres :** scénarios marché assumés (ex. « une facture saisie en 30 secondes au lieu de 5 minutes »), formulés comme des scénarios concrets, jamais comme des promesses de résultats clients. Pas de KPI invérifiables type « -80% garanti ».
- **Vocabulaire :** le mot **RPA disparaît totalement** du copy client. L'**IA n'est plus une offre autonome** : elle est transversale, citée comme moyen dans chaque page, jamais comme fin.
- **Interaction home :** pattern **liste + panneau latéral** (voir §5).
- **Typographie :** sans-serif moderne — **Space Grotesk** pour les titres display (à charger via Google Fonts), Manrope en corps. Fond papier/crème conservé pour la cohérence avec le reste de la home.
- **Architecture :** un **template unique** de page solution, piloté par les données. Les 4 pages custom actuelles sont supprimées.

## 3. Les 5 offres — promesses finales (verbatim Fantin, ne pas reformuler)

| # | Offre | Slug | Promesse (hero) |
|---|---|---|---|
| 01 | Audit | `/solutions/audit` | « Transformez vos contraintes en opportunités. » |
| 02 | Automatisation & Optimisation | `/solutions/automatisation` | « Faites plus, avec les mêmes équipes. » |
| 03 | Data & Business Intelligence | `/solutions/data-bi` | Titre : « Les IA se trompent. Les chiffres non. » — Sous-titre : « Chaque décision mérite des données fiables. » |
| 04 | Développement logiciel | `/solutions/developpement-logiciel` | « Le bon outil, rien de plus. » |
| 05 | Formation & Transformation | `/solutions/formation` | « L'IA qui fait vraiment gagner du temps. » |

**Angles éditoriaux par offre :**

- **Audit** — posture collaborative : analyse des besoins, identification des principaux problèmes à résoudre, restitution **avec** le client (pas de ton donneur de leçons). Livrable : plan d'action clair et priorisé.
- **Automatisation & Optimisation** — offre générale : **n'importe quel processus** de l'entreprise, quel que soit le métier. Les factures fournisseurs, commandes, relances clients sont des **exemples** dans les cas concrets, pas le périmètre de l'offre. Le copy couvre les deux facettes : automatiser (la machine fait) et optimiser (le processus s'améliore).
- **Data & BI** — décider sur des chiffres fiables et à jour ; dashboards, reporting automatisé, pilotage.
- **Développement logiciel** — outils métier sur mesure (SaaS internes, portails, remplacement des bricolages Excel), sans licences superflues.
- **Formation & Transformation** — anti-gadget assumé : apprendre à utiliser l'IA là où elle sert vraiment, dans les process quotidiens ; augmenter la capacité des équipes, zéro superflu.

## 4. Structure commune des 5 pages dédiées

Chaque page suit le même squelette, dans cet ordre :

1. **Hero** — promesse (verbatim §3) + une phrase de contexte + CTA.
2. **« Ce que ça change pour vous »** — 3 gains présentés en scénarios chiffrés marché (temps, argent, fiabilité/efficacité).
3. **Cas concrets** — 2 à 3 cas détaillés et terrain (situation avant → ce qu'on met en place → résultat). Pour Automatisation & Optimisation : saisie de factures, traitement de commandes, relances clients, par exemple.
4. **Mise en place** — 3 à 4 étapes avec durée indicative, pour montrer que c'est rapide et cadré.
5. **CTA final** — vers `/contact`.

## 5. Section solutions de la home (redesign)

- **Desktop :** 5 grands titres empilés à gauche (Space Grotesk, sobres, sans description visible). Au survol : le titre passe en vert `#027333` et un **panneau fixe à droite** affiche sous-titre, 2-3 gains clés et un lien « Découvrir ». Clic sur la ligne = navigation vers la page dédiée. Un panneau par défaut (première solution active) pour éviter le vide au chargement.
- **Mobile (pas de hover) :** liste titre + sous-titre court visible, tap = navigation directe.
- **Ambiance :** fond papier `#FCFBF8` / crème `#F4F1E9` conservé, hairlines, numéros `01`–`05`.
- Le titre de section et le chapô sont réécrits orientés gains (plus de « Six leviers pour industrialiser l'IA »).

## 6. Architecture technique

- **Données :** `solutions.ts` restructuré. Nouveau schéma `SolutionData` : `id`, `title`, `promise` (+ `subPromise` optionnel pour Data & BI), `shortDescription` (home/nav), `gains[]` (scénario chiffré + libellé), `useCases[]` (avant / mise en place / résultat), `steps[]` (étape + durée), meta SEO. Un fichier par solution dans `src/data/solutions/` + un index qui agrège (permet l'édition en parallèle par plusieurs agents sans conflit).
- **Template :** nouveau `src/pages/SolutionPage.tsx` unique, rendu depuis les données. `SolutionDetail.tsx` et les 4 pages custom (`RPASolutionPage`, `AuditSolutionPage`, `OptimisationSolutionPage`, `StrategieSolutionPage`) sont **supprimés**.
- **Routes (`App.tsx`) :** `/solutions/:slug` rend le nouveau template. Redirections des anciens slugs : `audit-processus → audit`, `optimisation → automatisation`, `finance → automatisation`, `strategie → formation` (via `<Navigate replace>`).
- **Navigation :** mega-menu desktop + menu mobile du `Header.tsx` mis à jour avec les 5 offres (préserver l'animation `logo-spin-back` du logo). `Footer.tsx` et la page listing `/solutions` (`SolutionsPage.tsx`) alignés sur les 5 offres.

## 7. Contraintes globales

- Tout le copy en **français**.
- Palette officielle : primary `#027333`, secondary `#025928`, accent `#93BF9E`, dark `#262626`, light `#F2F1DF`.
- Le logo Flowera (PNG frangipanier) et son animation de rotation dans le header ne doivent pas être touchés.
- Aucune occurrence de « RPA » dans le rendu final (vérification par grep en phase de revue).
- `npm run build` doit passer.

## 8. Hors périmètre

- Hero, section méthode et autres sections de la home.
- Pages Insights, Contact, Careers.
- Harmonisation typographique du reste du site (itération future).
