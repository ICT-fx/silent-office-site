# Playbook SEO & GEO — Flowera

Tout ce qu'il faut faire et maintenir pour que `www.flowera.ch` soit trouvé par
les moteurs de recherche **et** cité par les IA (ChatGPT, Claude, Perplexity,
Gemini, AI Overviews), avec priorité **Genève → Suisse romande → Suisse →
France voisine**.

Ce fichier est autoportant : il sert de référence au contrôle quotidien
(§ 8). Dernier audit complet : **23 septembre 2026**.

---

## 0. Avancement

**Livré le 24/09/2026** — vérifié sur le build de production :

| Chantier | Avant | Après |
|---|---|---|
| Texte dans le HTML brut (sans JS) | 0 car. sur 17/17 pages | 1 615 à 19 753 car. sur 18/18 |
| `<title>` uniques | 1 pour 17 pages | **18/18** |
| `canonical` auto-référents | 0 | **18/18** |
| Blocs JSON-LD | 0 | **18/18** |
| `llms.txt` | absent | servi en `text/plain` |
| Vrais 404 | toute URL → 200 | `404.html` pré-rendu + `noindex` |
| Signaux géo | Paris | Genève / 1205 / CH |
| Slugs hérités | redirections client | **301 serveur** |

Mécanique : `<Seo />` écrit le `<head>` au runtime, `scripts/prerender.mjs`
capture le DOM rendu par Chromium après le signal `html[data-seo-ready]`, et
écrit un `dist/<route>/index.html` complet. `npm run build` enchaîne les deux.
Le pré-rendu est **strict** : il fait échouer le build plutôt que de déployer
un site dont les routes renverraient 404.

**Reste à faire, par ordre d'impact :** § 4.1 (adresse de rue réelle),
§ 4.2 (fiche Google Business Profile), § 4.3 (annuaires), § 5 (contenu par
cluster), § 6 `FAQPage`, `sameAs` dès que les profils sociaux existent.

---

## 1. État des lieux au 23/09/2026 (avant correction)

Mesuré avec le moteur de rendu Playwright de `claude-seo` et les collecteurs
de `best-aeo-skill`.

| Constat | Mesure | Gravité |
|---|---|---|
| Les 17 URLs servent un HTML **identique octet pour octet** | 4 725 o, **0 caractère de texte** | 🔴 |
| Toutes les pages déclarent `canonical` = accueil | 17/17 | 🔴 |
| Toutes les pages partagent le même `<title>` | 17/17 | 🔴 |
| Signaux géographiques pointant vers Paris | adresse, téléphone `+33`, page Careers | 🔴 |
| Occurrences de « Genève » dans `src/` | **0** | 🔴 |
| Données structurées (JSON-LD) | **0 bloc** sur 7 pages testées | 🟠 |
| `llms.txt` | absent (le rewrite SPA renvoie `index.html`) | 🟠 |
| Soft-404 | toute URL inexistante → HTTP 200 | 🟠 |
| `/portfolio` : texte extractible même après rendu | 107 caractères | 🟠 |
| `robots.txt` : bots IA autorisés | **27/27** (GPTBot, ClaudeBot, PerplexityBot…) | 🟢 |
| Sitemap ↔ routes réelles | cohérent, 0 orphelin | 🟢 |

**Écart brut → rendu** (ce que les IA perdent) :

| Page | HTML brut | Après rendu JS |
|---|---:|---:|
| `/insights/3` | 0 car. | **15 364 car.** |
| `/solutions/data-bi` | 0 car. | 6 492 car. |
| `/solutions/audit` | 0 car. | 5 728 car. |
| `/` | 0 car. | 1 094 car. |

---

## 2. Règles non négociables

Elles priment sur toute optimisation. Elles viennent de `PRODUCT.md`
(principe 4 : « Ne rien affirmer qu'on ne puisse tenir ») et du droit suisse
et français de la concurrence.

### 2.1 Interdits absolus

- ❌ **Superlatifs non prouvables** — « le meilleur », « n°1 », « leader »,
  « les plus performants ». En Suisse, **LCD art. 3 al. 1 let. b** interdit les
  indications inexactes ou fallacieuses, et la jurisprudence vise
  spécifiquement la publicité superlative non étayée. En France,
  **art. L121-2 du Code de la consommation** (pratiques commerciales
  trompeuses). Risque : plainte d'un concurrent, pas seulement un souci d'image.
- ❌ **Bourrage de mots-clés** — listé explicitement dans les *Google Search
  spam policies* (« Keyword stuffing »). Sur le volet GEO c'est pire : les LLM
  extraient des entités et des affirmations ; une page saturée de variantes
  dilue le signal et fait chuter la citabilité. **La méthode demandée est
  exactement celle qui empêche le résultat demandé.**
- ❌ **Témoignage, résultat client chiffré, étude de cas, certification,
  mention presse fabriqués** (`PRODUCT.md` § Evidence on Hand).
- ❌ **Le mot « RPA »** dans tout copy public.
- ❌ **Amplifier TRB Chemedica / TEL and CASH** tant que l'autorisation
  d'affichage n'est pas formellement acquise.

### 2.2 Ce qu'on peut affirmer — et qui est plus fort

L'ambition (« la référence à Genève ») est atteignable. Ce qui l'obtient,
ce n'est pas l'auto-proclamation, c'est **l'appropriation de catégorie** plus
**l'autorité topique**. Formulations de remplacement, toutes vraies :

| À la place de | Écrire |
|---|---|
| « La meilleure boîte d'automatisation de Suisse » | « Le partenaire automatisation des PME de Suisse romande » |
| « Nous sommes les plus innovants » | « Jeune société genevoise — nous construisons sur la stack de 2026, pas sur celle de 2015 » |
| « On fait gagner énormément de rentabilité » | « Un périmètre cadré, livré vite : vos premiers gains sont chiffrés dès le premier trimestre » *(copy hero actuel — déjà juste)* |
| « Experts reconnus » | « Un seul interlocuteur qui cadre, construit et met en production — là où le marché sépare le cabinet de conseil de l'ESN » |
| « Des centaines de clients satisfaits » | « Équipe à taille humaine, accès direct aux personnes qui font » |

**Pourquoi c'est plus efficace :** un superlatif est invérifiable, donc aucun
LLM ne le reprend — les modèles citent des affirmations attribuables et
spécifiques. « Le partenaire automatisation des PME de Suisse romande » est une
revendication de catégorie que Google et les LLM peuvent associer à une entité.
« Le meilleur » ne s'associe à rien.

### 2.3 Le levier de différenciation réel, sous-exploité

**L'angle réglementaire suisse.** Personne ne le couvre sérieusement et il est
100 % vrai : nLPD (en vigueur depuis septembre 2023), hébergement des données
en Suisse, souveraineté des données, EU AI Act pour les PME suisses exportant
vers l'UE. C'est le sujet sur lequel Flowera peut devenir la source citée en
Suisse romande — bien plus vite que sur « automatisation ».

---

## 3. Chantier 1 — Fondations techniques

- [x] **3.1 Pré-rendu statique au build** — `scripts/prerender.mjs`. Chromium
      rend chaque route et écrit un `dist/<route>/index.html` complet. Choisi
      plutôt qu'un SSG Node (`vite-react-ssg`, `react-snap`) parce que le code
      touche `window` partout : Preloader qui mesure le logo au runtime, Header
      qui écoute le scroll, Framer Motion au montage. Un vrai navigateur exécute
      le code tel qu'il est écrit.
      **Strict** : le build échoue s'il ne peut pas pré-rendre. Échappatoire
      `npm run build:spa`.
- [x] **3.2 `<title>` + `<meta name="description">` uniques** — `src/seo/routeMeta.ts`.
      18 titres, 18 descriptions. Ajouter une entrée à chaque nouvelle page.
- [x] **3.3 `canonical` auto-référent** — `src/seo/Seo.tsx`, piloté par
      `src/seo/RouteSeo.tsx` depuis la route courante.
- [x] **3.4 `og:*` et `twitter:*` par page** — même mécanisme.
- [x] **3.5 Vrais 404** — `src/pages/NotFoundPage.tsx`, route `*`, `404.html`
      pré-rendu en `noindex`, et surtout **le rewrite fourre-tout de
      `vercel.json` a été retiré** : c'est lui qui transformait toute URL
      fautive en 200. Les 4 slugs hérités sont devenus des **301 serveur**,
      qui transmettent le jus de lien là où `<Navigate>` ne transmettait rien.
- [x] **3.6 `public/llms.txt`** — servi en `text/plain` depuis que le rewrite
      ne l'intercepte plus. Aucune exception nécessaire.
- [ ] **3.7 Core Web Vitals** — mesurer LCP / INP / CLS maintenant que le HTML
      arrive pré-rendu. Surveiller le preloader et Framer Motion sur mobile.
      Le bundle fait 818 Ko (233 Ko gzip) : envisager un découpage.
- [x] **3.8 Sitemap régénéré au build** ✅ `scripts/prerender.mjs` l'écrit
      depuis la même liste de routes que le pré-rendu : il ne peut plus
      diverger. `lastmod` = date de publication pour les articles, date du
      dernier commit git du fichier source pour les autres (pas la date du
      build, qui annoncerait une mise à jour à chaque déploiement).
      `public/sitemap.xml` a été supprimé pour éviter deux sources.
- [ ] **3.9 `/portfolio` : ajouter du texte réel.** 799 caractères après
      pré-rendu, la page la plus pauvre du site. Bloqué en partie par
      l'autorisation d'affichage TRB / TEL and CASH (`PRODUCT.md`) : décrire
      les réalisations sans nommer les clients est possible, l'amplification
      ne l'est pas.

---

## 4. Chantier 2 — Ancrage local (Genève → Suisse → France)

### 4.1 NAP — partiellement traité

**Fait le 24/09/2026** — source unique dans `src/config/booking.ts`
(`COMPANY_ADDRESS`, `COMPANY_ADDRESS_LINES`), consommée par le Footer, la page
Contact et le JSON-LD `ProfessionalService` :

- [x] Adresse parisienne remplacée par **Plainpalais, 1205 Genève, Suisse**.
- [x] Téléphone `+33` **retiré** du site (Footer et page Contact). La page
      Contact affiche l'adresse à la place — c'est elle que Google lit pour
      les signaux locaux.
- [x] Page Careers relocalisée : Genève, Lausanne, Suisse romande, Remote.
- [x] `lang="fr-CH"` et `og:locale="fr_CH"` (au lieu de `fr_FR`).

**Volontairement au niveau du quartier, sans numéro de rue.** Un numéro inventé
produirait un NAP invérifiable : Google refuse de valider une fiche dont
l'adresse ne correspond à rien, et l'erreur se propage ensuite à tous les
annuaires où le NAP doit rester identique au caractère près.

**Reste à faire :**

- [ ] **Arrêter l'adresse de rue réelle** (siège, domiciliation ou bureau),
      puis renseigner `COMPANY_ADDRESS.street`. Tout le reste suit
      automatiquement, y compris le JSON-LD.
- [ ] **Numéro suisse `+41 22 …`** si tu veux en réafficher un. Un `+33` sur un
      `.ch` était un signal contradictoire ; pas de numéro vaut mieux qu'un
      mauvais numéro, mais un numéro genevois vaut mieux que pas de numéro.
- [ ] **Unifier l'e-mail** sur `@flowera.ch` partout (`PRODUCT.md` mentionne
      encore `contact@flowera.fr`).

### 4.2 Google Business Profile — quand et comment

**Quand :** dès que le § 4.1 est tranché, et pas avant. La fiche se valide par
un code envoyé par courrier postal, par appel ou par vidéo montrant le lieu :
sans adresse réelle à laquelle tu as accès, la demande échoue et une fiche
refusée est pénible à relancer. C'est donc la **priorité 6**, après le NAP.

**Pourquoi ça compte autant :** le pack local (les 3 fiches avec la carte,
au-dessus des résultats classiques) se joue presque entièrement sur cette
fiche, pas sur le site. Et les assistants IA interrogés sur « une société
d'automatisation à Genève » lisent massivement ces données.

**Comment, étape par étape :**

1. **Créer** sur [business.google.com](https://business.google.com) avec un
   compte Google dédié à l'entreprise — jamais un compte personnel, tu
   perdrais la fiche en cas de changement.
2. **Nom** : `Flowera`, exactement. Pas « Flowera — Automatisation Genève » :
   bourrer le champ nom est une infraction aux règles de Google et un motif
   de suspension.
3. **Catégorie principale** : *Consultant en informatique* ou *Développeur de
   logiciels*. C'est le champ le plus déterminant du classement local — le
   choisir en fonction de la requête que tu veux gagner.
   **Catégories secondaires** : conseil en gestion, organisme de formation
   professionnelle, service d'assistance informatique.
4. **Adresse** : celle du § 4.1. Si tu reçois les clients, l'afficher ;
   sinon cocher « je livre des biens et services à mes clients » et masquer
   l'adresse — la fiche reste éligible au pack local.
5. **Zone desservie** : Genève, Vaud, Valais, Fribourg, Neuchâtel.
6. **Validation** : courrier postal (5 à 14 jours) ou vidéo. La vidéo doit
   montrer en continu l'extérieur, l'enseigne, l'intérieur et une preuve
   d'activité. Prévoir le tournage à l'avance, elle ne se refait pas facilement.
7. **Description (750 caractères)** : reprendre le positionnement de catégorie
   du § 2.2. Pas de superlatif — Google rejette les descriptions promotionnelles.
8. **Attributs** : identité de l'entreprise, langues parlées, prestations en
   ligne.
9. **Photos** : logo, une photo de couverture, l'équipe. Minimum 5 ; les fiches
   avec photos reçoivent nettement plus de sollicitations.
10. **Lien site** : `https://www.flowera.ch/` — l'URL canonique, avec `www`.

**Ensuite, en routine :**

- **Un post par mois minimum** (nouveauté, article Insights, offre). Une fiche
  inactive décroche.
- **Demander un avis à chaque fin de mission**, avec le lien court fourni par
  la fiche. Les avis sont le deuxième facteur du pack local après la catégorie.
- **Répondre à tous les avis**, y compris négatifs, sous 48 h.
- **Ne jamais acheter d'avis** : détection automatique, suppression de la fiche.
- **NAP identique au caractère près** entre la fiche, le site et les annuaires
  du § 4.3. Une virgule d'écart dilue le signal.

### 4.3 Citations et annuaires (signaux d'entité)

Cohérence NAP sur chacun. Ils alimentent autant Google que les LLM.

- [ ] **Suisse** : local.ch, search.ch, Zefix (registre du commerce),
      moneyhouse.ch, Chambre de commerce de Genève (CCIG), Genève Entreprise,
      Fédération des Entreprises Romandes (FER Genève).
- [ ] **Tech / écosystème** : Swiss Startup Association, Venturelab,
      startup.ch, swisstech directory, Crunchbase, LinkedIn Company Page.
- [ ] **France** : Google Business Profile France si présence réelle, sinon
      s'abstenir — une fausse implantation se retourne contre toi.
- [ ] **Wikidata** : créer l'élément dès qu'un critère de notoriété est
      atteint. C'est un des signaux d'entité les plus lus par les LLM.

### 4.4 Pages locales

Une page par zone **seulement si elle a du contenu propre** (contexte local,
références, spécificités réglementaires). Des pages géo clonées sont du
*doorway page*, sanctionné par Google.

- [ ] `/automatisation-geneve` — la seule prioritaire au départ.
- [ ] `/automatisation-suisse-romande` — quand il y a de la matière.
- [ ] France : **attendre une implantation réelle.**

### 4.5 Ciblage linguistique

- [ ] `<html lang="fr-CH">` (actuellement générique).
- [ ] `og:locale` = `fr_CH` (actuellement `fr_FR` — incohérent avec la cible).
- [ ] `hreflang` : seulement si des versions distinctes fr-CH / fr-FR existent
      un jour. Pas de hreflang sur une version unique.
- [ ] Vocabulaire et références suisses : francs, nLPD, cantons, AVS, TVA
      suisse. Le contenu actuel de `ArticleDetailPage.tsx` cite la **France**
      21 fois — à réorienter vers le contexte suisse.

---

## 5. Chantier 3 — Univers sémantique

La couverture large demandée se construit par **architecture de pages**, pas
par accumulation sur une page. Règle : **un intent = une page**, chaque page
ciblant 1 terme principal + 3 à 5 variantes naturelles.

### 5.1 Termes principaux (page de destination)

| Cluster | Terme principal | Page |
|---|---|---|
| Automatisation | automatisation des processus | `/solutions/automatisation` |
| Audit | audit de processus | `/solutions/audit` |
| Data / BI | tableau de bord de pilotage | `/solutions/data-bi` |
| Logiciel | développement logiciel sur mesure | `/solutions/developpement-logiciel` |
| Formation | formation intelligence artificielle entreprise | `/solutions/formation` |
| Local | agence automatisation Genève | `/automatisation-geneve` |

### 5.2 Variantes par cluster (à répartir, jamais à empiler)

**Automatisation** — automatisation métier · automatisation administrative ·
automatiser les tâches répétitives · automatisation de workflow ·
automatisation de la facturation · automatisation des devis · traitement
automatique des commandes · automatisation du reporting · automatisation
comptable · automatisation RH · saisie automatique de documents · intégration
d'outils métier · orchestration de processus

**Intelligence artificielle** — IA pour PME · IA générative en entreprise ·
agent IA · assistant IA interne · cas d'usage IA · intégration d'IA métier ·
IA documentaire · extraction de données par IA · copilote métier ·
IA et nLPD · souveraineté des données · EU AI Act PME

**Data & BI** — tableau de bord dirigeant · dashboard décisionnel · business
intelligence PME · Power BI · reporting automatisé · consolidation de données ·
indicateurs de pilotage · KPI opérationnels · data visualisation ·
entrepôt de données · fiabilisation des données

**Logiciel sur mesure** — application métier sur mesure · logiciel interne ·
outil métier · développement web sur mesure · refonte d'outil interne ·
application de gestion · portail client · intégration d'API

**Formation & acculturation** — acculturation à l'IA · formation IA
entreprise · sensibilisation IA · montée en compétence IA · atelier IA ·
conduite du changement · adoption de l'IA en entreprise

**Qualificatifs d'intention** — agence · société · entreprise · cabinet ·
prestataire · consultant · spécialiste · partenaire · pour PME · sur mesure ·
prix · tarif · devis

**Modificateurs géographiques** — Genève · Carouge · Meyrin · Vernier · Lancy ·
Plan-les-Ouates · Nyon · Lausanne · Vaud · Morges · Vevey · Suisse romande ·
Valais · Sion · Fribourg · Neuchâtel · Suisse · Annemasse · Annecy ·
Haute-Savoie · Genevois français · frontalier

### 5.3 Requêtes-questions (le carburant du GEO)

Les LLM citent les pages qui **répondent à une question précise en un
paragraphe autonome**. Chacune mérite une section H2 dédiée, ou un article.

- Comment automatiser les tâches répétitives dans une PME ?
- Combien coûte l'automatisation d'un processus en Suisse ?
- Quelle différence entre automatisation et intelligence artificielle ?
- Comment choisir un prestataire d'automatisation en Suisse romande ?
- Quel retour sur investissement attendre d'un projet d'automatisation ?
- Comment mettre en place un tableau de bord de pilotage ?
- Faut-il développer un logiciel sur mesure ou acheter une solution ?
- **Quelles obligations la nLPD impose-t-elle à une PME qui utilise l'IA ?**
- **Où héberger ses données pour rester conforme en Suisse ?**
- **L'EU AI Act s'applique-t-il à une PME suisse ?**
- Comment former ses équipes à l'IA sans bloquer la production ?

Les trois en gras sont les plus rentables : faible concurrence, forte intention,
et elles positionnent Flowera comme source de référence.

### 5.4 Règles de rédaction

- Terme principal dans le `<title>`, le `<h1>` et les 100 premiers mots.
- Densité naturelle. Si une phrase est illisible à voix haute, elle est sur-optimisée.
- Une question = un H2 = une réponse autonome de 40 à 60 mots juste en dessous.
  C'est le format que les moteurs génératifs extraient.
- Chiffres sourcés et datés (gabarit Insights validé). Un chiffre sans source
  n'est jamais cité par un LLM.
- Maillage interne : chaque article pointe vers sa page solution.

---

## 6. Chantier 4 — Données structurées (JSON-LD)

Zéro bloc aujourd'hui. C'est la principale surface de citation par les IA.

- [x] **`Organization`** ✅ (`ProfessionalService`, `src/seo/siteMeta.ts`). `sameAs` reste vide — (global) — nom, logo, URL, adresse, liens
      LinkedIn / Crunchbase / Zefix / Wikidata. Le `sameAs` est ce qui permet
      aux LLM de résoudre « Flowera » comme entité.
- [x] **`LocalBusiness`** ✅ via `ProfessionalService` : `addressLocality: Genève`, `postalCode: 1205`, `addressRegion: GE`, `addressCountry: CH`, `areaServed` sur 7 zones. Ajouter `geo` et les horaires avec l'adresse réelle. Ancien texte : (ou `ProfessionalService`) — `address` avec
      `addressLocality: "Genève"`, `addressCountry: "CH"`, `areaServed`,
      `geo`, horaires. *Dépend du § 4.1.*
- [x] **`Service`** × 5 ✅ un par page offre, `provider` rattaché à l'organisation. — un par page solution, avec `provider`, `areaServed`,
      `serviceType`.
- [x] **`Article`** ✅ auteur Fantin Schellekens, `datePublished` dérivée de la date affichée, `publisher` rattaché. — sur chaque Insight : `author` (Fantin Schellekens),
      `datePublished`, `dateModified`, `publisher`. **L'absence d'auteur
      identifié est un frein direct à la citation.**
- [x] **`FAQPage`** ✅ 4 questions par offre, champ `faq` dans
      `src/data/solutions/types.ts`, rendues visiblement en bas de page et
      reprises en schema. **Règle** : ne jamais émettre le schema sans le
      contenu visible correspondant, Google le sanctionne. Réponses de 31 à
      46 mots, autonomes, appuyées sur les `keyFacts` existants.
- [x] **`BreadcrumbList`** ✅ sur toutes les pages profondes. — sur les pages profondes.
- [ ] Valider sur [validator.schema.org](https://validator.schema.org) et le
      test des résultats enrichis de Google.

---

## 7. Chantier 5 — Citabilité par les IA (GEO)

- [ ] **Renderabilité** (§ 3.1) — préalable absolu.
- [ ] **`llms.txt`** (§ 3.6).
- [ ] **Auteur visible** sur chaque contenu : nom, rôle, page auteur.
- [ ] **Passages citables** : 40–60 mots, autonomes, factuels, placés juste
      sous un H2 interrogatif.
- [ ] **Sources externes** : l'audit relève **0 lien sortant** sur l'accueil.
      Citer des sources (OFS, Seco, PFPDT, études datées) augmente la
      citabilité — les LLM privilégient les pages qui en citent d'autres.
- [ ] **`dateModified` réelle** et entretenue. La fraîcheur pèse lourd.
- [ ] **Présence hors-site** : LinkedIn actif, réponses sur des forums
      pertinents, Wikidata. Les LLM citent ce qu'ils voient ailleurs, pas
      seulement le site.
- [ ] **Maintenir `robots.txt` ouvert aux bots IA** — actuellement 27/27
      autorisés, c'est un acquis à ne pas casser.

---

## 8. Protocole de contrôle quotidien

À faire tourner chaque jour. Toute réponse ❌ = alerte.

```bash
# 1 — Le site répond-il, et sert-il du contenu sans JS ?
curl -s -o /tmp/f.html -w "%{http_code}\n" https://www.flowera.ch/
#    ❌ si le texte visible du <body> est vide APRÈS mise en place du pré-rendu

# 2 — Titres et canonicals uniques sur les 17 URLs du sitemap
#     ❌ si deux pages partagent un <title> ou un canonical

# 3 — robots.txt autorise toujours les bots IA
curl -s https://www.flowera.ch/robots.txt
#    ❌ si un Disallow apparaît pour GPTBot, ClaudeBot, PerplexityBot, CCBot…

# 4 — llms.txt servi en text/plain (et non index.html)
curl -sI https://www.flowera.ch/llms.txt | grep content-type
#    ❌ si content-type: text/html

# 5 — Les 404 sont de vrais 404
curl -s -o /dev/null -w "%{http_code}\n" https://www.flowera.ch/test-404-xyz
#    ❌ si 200

# 6 — Sitemap accessible et à jour
curl -s https://www.flowera.ch/sitemap.xml | grep -c "<url>"
#    ❌ si le compte diverge des routes de src/App.tsx

# 7 — Audit GEO complet
python3 ~/.claude/skills/best-aeo-skill/scripts/audit.py \
  --url https://www.flowera.ch/ --profile agency
#    ⚠ Son vecteur « Technical » ne mesure QUE robots.txt — il ne détecte pas
#      une page vide sans JS. Ne jamais se fier à son score seul.

# 8 — Audit SEO rendu (Playwright)
/seo audit https://www.flowera.ch      # après redémarrage de session
/seo geo https://www.flowera.ch
```

**Contrôles hebdomadaires**

- [ ] Google Search Console : couverture d'indexation, requêtes, pages exclues.
- [ ] Positions sur les 6 termes principaux du § 5.1, depuis Genève.
- [ ] Interroger ChatGPT / Claude / Perplexity : *« Quelle société
      d'automatisation pour une PME à Genève ? »* — Flowera est-elle citée,
      à quelle position, la description est-elle exacte ?
- [ ] Cohérence NAP sur les annuaires du § 4.3.
- [ ] Nouveaux avis Google Business Profile.

**Contrôles mensuels**

- [ ] Réaudit complet (`/seo audit`) et comparaison au mois précédent.
- [ ] Core Web Vitals sur données terrain (CrUX).
- [ ] Revue des concurrents genevois sur les termes principaux.
- [ ] Mise à jour de `lastmod` et des `dateModified`.

---

## 9. Ordre d'exécution

| # | Chantier | État |
|---|---|---|
| 1 | § 3.3 canonical + § 3.2 titres/meta | ✅ fait |
| 2 | § 4.1 signaux géo (Paris → Genève) | ✅ fait |
| 3 | § 3.1 pré-rendu statique | ✅ fait |
| 4 | § 6 JSON-LD (Organization, Service, Article, Breadcrumb) | ✅ fait |
| 5 | § 3.6 llms.txt + § 3.5 vrais 404 | ✅ fait |
| **6** | **§ 4.1 adresse de rue réelle** | 🔲 décision à prendre |
| **7** | **§ 4.2 fiche Google Business Profile** | 🔲 dépend du 6 |
| 8 | § 4.3 annuaires et citations | 🔲 dépend du 6 |
| 9 | § 6 `FAQPage` sur les pages solutions | ✅ fait |
| 10 | § 5 contenu par cluster, angle nLPD en priorité | 🔲 |
| 11 | § 3.8 sitemap + lastmod | ✅ fait |
| 12 | § 3.7 Core Web Vitals (bundle 818 Ko), § 3.9 portfolio | 🔲 |

Le déploiement des points 1 à 5 doit précéder toute demande de réindexation
dans la Search Console.

---

## 10. Outillage installé

| Outil | Usage | Commande |
|---|---|---|
| `claude-seo` v2.3.1 | audit SEO + GEO avec rendu Playwright | `/seo audit`, `/seo geo`, `/seo schema` |
| `best-aeo-skill` | collecteurs GEO déterministes | `python3 ~/.claude/skills/best-aeo-skill/scripts/audit.py --url …` |
| `searchfit-seo` | check page, génération de schema, clusters | `/searchfit-seo:seo-check`, `/searchfit-seo:generate-schema` |
| `small-business:seo-ai-visibility` | audit des deux moitiés (SEO + IA) | skill automatique |

⚠ **Limite connue de `best-aeo-skill`** : son `fetch_page.py` utilise `urlopen`
sans exécuter le JavaScript. Sur une SPA il note « Technical 100/100 » alors que
la page est vide pour un crawler. Vérifié le 23/09/2026 — utiliser ses
checklists, pas son score.
