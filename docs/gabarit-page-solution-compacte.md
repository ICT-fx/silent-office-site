# Gabarit « page solution compacte »

Mis au point sur la page Audit, puis étendu aux quatre autres offres (septembre 2026), validé par
Fantin. Les cinq pages `/solutions/:slug` utilisent ce gabarit ; l'ancien gabarit dans
`SolutionPage.tsx` ne sert plus qu'à la 404 et à la bascule.

## Ce qui existe déjà

| Fichier | Rôle |
|---|---|
| `src/pages/CompactSolutionPage.tsx` | La mise en page compacte, pilotée par les données |
| `src/pages/SolutionPage.tsx` | Gabarit historique ; bascule sur le compact si `data.layout === 'compact'` |
| `src/components/solution/StepGlyph.tsx` | Pictogrammes tracés à la main, dessinés trait par trait |
| `src/pages/solutionIcons.ts` | Registre d'icônes lucide partagé par les deux gabarits |
| `src/index.css` (fin de fichier) | `.method-panel-in` (fondu du panneau) et `.glyph-draw` (tracé des pictogrammes) |

Activer le gabarit sur une offre : ajouter `layout: 'compact'` dans son fichier de données.
Rien d'autre à câbler, la route existe déjà.

## Une composition par page

Le 17 septembre 2026, Fantin a trouvé les cinq pages « trop ressemblantes, on dirait du copié-collé ».
Réponse validée : **même système, forme différente par bloc**, choisie d'après la nature du contenu,
tout en vert. Le réglage vit dans `variant` (`src/data/solutions/types.ts`, `SolutionVariant`) ;
sans réglage, la page prend la forme de référence, celle de l'Audit.

| Offre | Hero | Catalogue (bureau) | Cas concrets (bureau) | Titre des bénéfices |
|---|---|---|---|---|
| Audit | `split` : texte \| image | frise numérotée (`sequence`) | `cells` : 3 cellules | Ce que ça change pour vous |
| Automatisation | `banner` : texte, image pleine largeur, repères à cheval | `chips` : filtres + panneau | `flow` : 3 cellules reliées par des flèches | Ce que vos équipes récupèrent |
| Data & BI | `centered` : tout centré, repères, image large (2:1, calée vers le haut) | `tiles` : grille de tuiles, détail dessous | `rows` : lignes, résultat surligné | Décider avec les bons chiffres |
| Développement logiciel | `split-left` : image \| texte | `accordion` : fiches dépliables pleine largeur | `beforeAfter` : Avant \| Résultat, mise en place en légende | Ce que l'outil change au quotidien (cas : « Avant, après ») |
| Formation | `banner` | `syllabus` : sommaire numéroté fixe, chapitres lus à la suite | `cells` | Ce que vos équipes savent faire ensuite |

Sur mobile, toutes les pages gardent la même pile (texte, image, repères, liste dépliable, carrousel) :
c'est le bureau qui varie. Le numérotage du sommaire du syllabus est le seul autorisé hors frise :
l'ordre des chapitres d'un programme porte une information.

## Structure de la page (ordre validé)

1. **Hero clair** : fil d'Ariane « Solutions › <Offre> » avec pastille verte pleine, promesse verbatim
   (dernier mot en vert), une seule ligne d'accroche (`subPromise` si l'offre en a une, sinon
   `shortDescription`), bouton vert plein + lien « Voir le déroulé / le catalogue », illustration 3:2
   à droite. **Aucune mention sous les boutons** (« Premier échange sans engagement », OPCO…) :
   Fantin les a fait retirer le 17 septembre 2026, `ctaFootnote` n'est plus rendu.
2. **Bandeau de repères** (`keyFacts`) : 4 cellules séparées par des filets, icône verte + libellé + valeur.
   Les valeurs viennent **toujours** de copy déjà existante, jamais inventées.
3. **« Ce que ça change pour vous »** : à gauche le constat (`heroTagline` + `heroTaglineStrong`),
   à droite les 3 `gains` en lignes séparées par des filets, une icône verte chacun.
4. **Méthode / catalogue** : le widget interactif (voir ci-dessous), suivi des `pillars`
   en 4 colonnes compactes avec filet vert en tête. **Disposition compacte exigée par Fantin.**
5. **« Pour qui ? » + « Des situations concrètes »** : colonne gauche collante avec les `audiences`
   (sans icônes), colonne droite les `useCases`. Chaque cas : titre, puis trois blocs colorés distincts.
6. **Contact** : panneau clair (fond papier, filet), titre + texte + bouton vert plein.

## Règles de style verrouillées

- **Fond clair partout.** Blanc et papier `#FCFBF8`. Le `#262626` ne sert qu'au texte.
  Pas de section sombre, pas de dégradé qui tire vers le noir (les boutons sont en `#027333` plein,
  survol `#025928`).
- Titres Inter 800, interlettrage serré (`-0.04em` environ) ; corps DM Sans ; filets `#E5E1D6`.
- Vert `#027333` en accent uniquement. Jamais de `#93BF9E` en aplat de fond.
- **Pas de sur-titre (« eyebrow ») au-dessus des titres de section.**
- Gris de texte : jamais en dessous de `rgba(38,38,38,0.7)`, sinon le contraste passe sous le seuil.
- **Pas de tirets longs (—) dans le copy.** Remplacer par « : », une virgule ou une parenthèse.
  Les mots composés qui ne doivent pas se couper en fin de ligne (« e‑mail », « vous‑même »)
  prennent un trait d'union insécable (U+2011).
  Les cinq fichiers de données en sont désormais exempts ; les préfixes « Chapitre N — » et « N.N »
  des titres ont été retirés, la numérotation n'apportant rien au visiteur.
- Pas d'icône sur les principes ni sur les profils : seuls les 3 gains gardent une colonne d'icônes.

## Le widget interactif : deux modes, choisis par `deepDive.kind`

**`sequence`** (l'Audit) : les chapitres sont des étapes dans l'ordre. Frise horizontale numérotée,
rail vert qui se remplit, panneau de détail avec pictogramme animé, boutons « Étape précédente »
(contour) et « Étape suivante » (vert plein, sans le titre de l'étape suivante) ; sur la dernière
étape le bouton devient l'appel à l'action. La section « Mise en place » est fusionnée dedans.

**`catalogue`** (les quatre autres offres) : les chapitres sont des
familles sans ordre. Sélecteur vertical, liste des familles à gauche (repère vert sur la famille
ouverte), détail à droite avec pictogramme animé, pas de numéro ni de « Étape X sur Y ». La vraie
séquence (`steps`) suit dans la même section, sous le titre « Comment nous procédons », en frise
statique numérotée **sans durées** (règle de Fantin : jamais de durée sur les étapes). Les durées
de `steps[].duration` ne sont pas affichées.

Sur mobile, les deux modes deviennent une liste dépliable (numérotée seulement en `sequence`),
un chapitre ouvert à la fois, la page se recale sur le chapitre ouvert.

| Offre | Deep dive | Mode | Suite réelle (`steps`) |
|---|---|---|---|
| Audit | 5 étapes | `sequence` | fusionnée dans la frise |
| Automatisation | 6 familles de services | `catalogue` | Diagnostic → Simplification → Mise en place → Suivi |
| Data & BI | 5 familles d'indicateurs | `catalogue` | Cadrage → Connexion → Tableaux de bord → Formation |
| Développement logiciel | 5 types de projets | `catalogue` | Cadrage → Première version → Itérations → Durée |
| Formation | 6 chapitres de syllabus | `catalogue` | Diagnostic → Ateliers → Mise en pratique → Bilan |

## Mobile : l'expérience avant tout

- Les cas concrets deviennent un **carrousel à balayer** (`UseCasesCarousel`) : une situation par
  carte, l'amorce de la suivante visible, points de position (zone tactile 44 px) et compteur. Rien
  n'est caché derrière un clic. Dans la carte, les trois temps sont des bandes pleine largeur
  (`variant="bands"`), pas trois cartes bordées dans une carte. Le conteneur de grille porte
  `grid-cols-1` et `min-w-0`, sinon le rail élargit la page.
- Dans la liste dépliable, le titre n'est porté que par le déclencheur (un `h3`) ; le corps déplié
  montre le pictogramme, le cadre et l'accroche, jamais le titre une seconde fois.
- Espacements de section resserrés (`py-14` contre `py-28` en bureau), hero `pt-28`.
- Cibles tactiles d'au moins 44 px (le lien « Voir le déroulé / le catalogue » a un `py-2.5`).
- Hauteurs relevées le 17 septembre 2026 à 390 px : Audit 6 630, Automatisation 7 990, Data & BI 7 520,
  Développement logiciel 7 490, Formation 7 660.

## Données à ajouter par offre

1. `layout: 'compact'`, et `deepDive.kind: 'catalogue'` si les chapitres ne sont pas des étapes.
2. `keyFacts` : 4 repères tirés de la copy existante (durée, format, livrable, engagement…).
3. `summary` sur chaque chapitre, en mode `sequence` seulement : une phrase. Pour l'Audit, elles
   reprennent mot pour mot les descriptions de l'ancienne section « Mise en place ». En mode
   `catalogue`, le `subtitle` sert d'accroche (retirer ses parenthèses s'il en a).
4. `glyph` sur chaque chapitre + **dessiner les pictogrammes correspondants** dans `StepGlyph.tsx`.
   Existants : Audit (`listening`, `map`, `measure`, `workshop`, `plan`), Automatisation (`invoice`,
   `cart`, `people`, `box`, `headset`, `loop`), Data & BI (`gauge`, `note`, `pie`, `cog`, `bell`),
   Développement logiciel (`dashboard`, `globe`, `grid`, `tablet`, `nodes`), Formation (`bulb`,
   `layers`, `target`, `terminal`, `shield`, `sprout`).
   Chaque offre a besoin des siens ; un nom inconnu n'affiche rien. Contrainte : traits arrondis, épaisseur 1.5 sur une grille 24,
   4 à 5 tracés maximum, `pathLength={1}` et `data-draw` pour l'ordre d'apparition.
5. Nettoyer les tirets longs.

## Vérifications avant de rendre la main

```bash
npx tsc --noEmit          # 3 erreurs pré-existantes, voir CLAUDE.md
npm run build
```

Puis capturer la page en 1440 et en 390, cliquer chaque entrée du widget, et vérifier :
pastille de l'offre visible en haut, aucun fond sombre, aucun tiret long rendu, et la hauteur
de page nettement inférieure à l'ancien gabarit (Audit : 7 457 px → 4 845 px).
