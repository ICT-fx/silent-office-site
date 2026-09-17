# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Cible principale : dirigeants de PME de Suisse romande.** Le marché suisse est
prioritaire et oriente le copy, les exemples et les références réglementaires ;
la France reste possible en entrant mais ne pilote pas les décisions produit.

Profil d'acheteur, constant sur les cinq offres (blocs `audiences` de
`src/data/solutions/*.ts`) :

- **Dirigeants et Comex** — décident, arbitrent le budget, veulent savoir où
  partent le temps et l'argent avant d'investir.
- **Directions opérationnelles, administratives et financières** — subissent
  les processus manuels au quotidien et portent la douleur.
- **PME sans service informatique dédié** — pas de DSI pour cadrer, choisir ou
  intégrer ; l'entreprise a souvent grandi plus vite que ses outils.
- **Équipes IT & Tech** — cible secondaire, uniquement sur l'offre Formation.

Situation typique : le dirigeant sent que du temps et de l'argent s'échappent
quelque part, sans pouvoir dire où ni combien.

## Product Purpose

Site vitrine de Flowera. Il ne vend rien en ligne : son seul succès est
**la prise de rendez-vous** (« Réserver un appel ») ou l'envoi du formulaire de
contact. Tout le reste — profondeur des pages solutions, portfolio, articles
Insights — sert à établir la crédibilité qui rend cet appel possible.

Flowera conçoit les outils qui simplifient les opérations de ses clients :
automatisation de processus, applications sur mesure, dashboards, et montée en
compétence des équipes sur l'IA.

## Positioning

Un interlocuteur unique qui **cadre, construit et met en production**, là où le
marché sépare le cabinet de conseil (qui recommande sans livrer) de l'ESN (qui
livre sans cadrer). L'audit débouche sur des chantiers que la même équipe
exécute.

Équipe à taille humaine, accessible directement, qui suit le projet du cadrage à
la mise en production — pas de couche de commerciaux entre le client et ceux qui
font.

## Operating Context

Le visiteur arrive avec un problème ressenti mais non chiffré. Il compare
plusieurs prestataires, souvent sans compétence technique interne pour juger.
Il cherche à savoir si l'interlocuteur comprend son métier avant de juger sa
technique.

Parcours du site : accueil → offre concernée (`/solutions/:slug`) → preuves
(`/portfolio`, `/insights`) → contact. Les pages solutions sont conçues comme
des documents de fond, pas des plaquettes : le visiteur doit pouvoir y passer
plusieurs minutes et en ressortir avec une compréhension réelle de la méthode.

## Capabilities and Constraints

**Les cinq offres** (ordre officiel 01 → 05, promesses verbatim — ne jamais les
reformuler) :

| # | Offre | Slug | Promesse |
|---|---|---|---|
| 01 | Audit | `/solutions/audit` | Transformez vos contraintes en opportunités. |
| 02 | Automatisation & Optimisation | `/solutions/automatisation` | Faites plus, avec les mêmes équipes. |
| 03 | Data & Business Intelligence | `/solutions/data-bi` | Les IA se trompent. Les chiffres non. |
| 04 | Développement logiciel | `/solutions/developpement-logiciel` | Le bon outil, rien de plus. |
| 05 | Formation & Transformation | `/solutions/formation` | L'IA qui fait vraiment gagner du temps. |

**Terminologie :**

- Le mot **« RPA » est banni du copy** — le vocabulaire reste celui du client,
  pas celui du fournisseur.
- **L'IA n'est pas une offre autonome** : elle traverse les cinq, elle n'en
  constitue aucune.
- Le site est **en français**. Seuls les intitulés de projets et secteurs du
  portfolio sont en anglais, volontairement : c'est la langue des livrables.

**Contraintes techniques :** SPA React 19 + TypeScript + Vite, React Router 7,
Tailwind 3, Framer Motion, Lucide. Aucun back-end — toutes les données sont des
objets TypeScript statiques dans `src/data/`. Services externes uniquement :
Formspree (formulaire), EmailJS (alternative câblée), Gemini
(`VITE_GEMINI_API_KEY`). Hébergement Vercel, domaine canonique
`https://www.flowera.ch` — toute URL absolue écrite dans le code doit l'utiliser.

**Faits explicitement non décidés :**

- **L'adresse postale.** « 42 Avenue Montaigne, 75008 Paris » affichée dans le
  Footer est un **placeholder fictif**. Aucune page ne doit la réutiliser ni la
  présenter comme vraie. L'adresse réelle reste à fournir.
- **Les liens réseaux sociaux** du Footer pointent tous vers `href="#"` :
  comptes non câblés, peut-être inexistants. Ne pas inventer d'URL.
- **Les pages légales** (Mentions légales, Confidentialité, Cookies) sont des
  liens morts — les documents n'existent pas.
- **Le nom exact de la structure.** Le Footer écrit « Flowera Consulting », la
  forme juridique enregistrée est « Flowera » SAS. À trancher avant toute page
  légale.
- **Deux intitulés de poste** dans `TeamSection.tsx` portent un TODO de
  confirmation (Lola Bembekoff, Valentin Lefèvre).

## Brand Commitments

- **Nom : Flowera**, SAS. Le nom évoque le *flow* (flux, automatisation fluide)
  et *flower* (floraison, croissance).
- **Logo : fleur de frangipanier en moulinet**, 5 pétales crème, pétale
  bas-droite vert en dégradé. C'est un **fichier raster fourni**
  (`public/flowera-logo.png`, `public/favicon.png`) — **ne jamais le
  re-vectoriser en SVG**, les reconstructions ont été explicitement rejetées.
  Son animation de rotation dans le Header (vers l'avant, jamais en marche
  arrière) est un acquis à préserver.
- **Palette verrouillée** : `#027333` vert forêt (primary), `#025928` vert
  foncé (secondary), `#93BF9E` vert sauge (accent), `#262626` quasi-noir,
  `#F2F1DF` crème. Toujours via les tokens Tailwind.
- **Typographie** : Manrope (titres), Inter (corps), DM Sans (accroches et
  boutons).
- **Voix** : gains client au premier plan (temps, argent, efficacité), zéro
  jargon, phrases courtes, aucune promesse de résultat client.

## Evidence on Hand

**Clients affichés** — 2, dans `src/data/portfolio.ts` :

- **TRB Chemedica** (industrie pharmaceutique) — logo
  `/images/portfolio/trb-logo.png`
- **TEL and CASH** (négoce & logistique) — logo
  `/images/portfolio/telcash-logo.png`

**Réalisations montrables** — 3 :

- *Supply Chain Dashboard* (TRB) — 4 captures
- *E-commerce Website* (TEL and CASH) — vidéo `telcash.webm` / `.mp4`
- *Order Entry Automation* (TRB) — schéma de flux

**Équipe** — 4 personnes réelles avec portraits (`public/images/team/`) :
Fantin Schellekens (Président), Yanis Wamou (Head of Development),
Lola Bembekoff, Valentin Lefèvre.

**Contenu éditorial** — articles Insights au gabarit validé : chaque chiffre
sourcé et daté, note méthodologique distinguant le mesuré de l'estimé, auteur
affiché Fantin Schellekens.

**Coordonnées réelles :** `+33 7 67 28 82 07`, `contact@flowera.fr`.

**⚠ Risque à lever avant toute mise en avant :** l'autorisation d'afficher les
noms et logos de TRB Chemedica et TEL and CASH **n'est pas formellement
acquise**. Ne pas amplifier ces références (témoignage, étude de cas nommée,
citation, logo agrandi en preuve sociale) tant que l'accord n'est pas confirmé.

**Ce qui n'existe pas et ne doit jamais être fabriqué :**

- Aucun **témoignage** client, aucun verbatim.
- Aucun **résultat chiffré** client mesuré et publiable.
- Aucune **étude de cas** rédigée, aucun prix, aucune certification, aucune
  mention presse.
- Les chiffres présents dans les pages solutions sont des **scénarios de
  marché**, jamais des résultats obtenus chez un client. Ils doivent rester
  formulés comme tels.

## Product Principles

1. **Le contact est la seule conversion.** Chaque surface se juge à sa
   contribution à l'appel réservé, pas à son trafic ni à sa longueur.
2. **La profondeur est un critère de qualité, pas une option.** Un contenu
   correct dans un layout maigre est un échec. Les pages solutions doivent
   garder leur densité — piliers, cibles, programme détaillé — jamais être
   aplaties en template minimaliste.
3. **Parler la langue du client.** Les gains avant la technique, aucun
   acronyme fournisseur, aucune terminologie que le dirigeant devrait
   apprendre pour comprendre l'offre.
4. **Ne rien affirmer qu'on ne puisse tenir.** Scénarios de marché signalés
   comme tels, sources datées, distinction explicite entre mesuré et estimé.
   La crédibilité est l'actif principal d'un site sans preuve sociale.
5. **La proximité est le produit.** Équipe à taille humaine, accès direct aux
   personnes qui font — cette promesse doit rester perceptible dans le ton
   comme dans les parcours.
