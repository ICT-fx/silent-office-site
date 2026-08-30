# Sections retirées de la home — 30 août 2026

Trois sections ont été retirées de la page d'accueil. Le code est conservé ici,
intact, pour pouvoir être remis en place tel quel.

Ce dossier est **hors de `src/`** : il n'est ni compilé, ni bundlé.

| Fichier | Titre affiché | Emplacement d'origine |
|---|---|---|
| `ContexteEnjeuxSection.tsx` | « Un levier devenu incontournable pour rester compétitif. » | `src/components/InnovationShowcase.tsx` — bloc « SECTION 1: CONTEXTE & ENJEUX », 1re section du composant |
| `MethodologySection.tsx` | « De la vision stratégique à l'exécution technologique. » | `src/components/MethodologySection.tsx`, rendu dans `src/pages/Home.tsx` |
| `CorporateApproachSection.tsx` | « Du conseil à la performance. » | `src/components/CorporateApproachSection.tsx`, rendu dans `src/pages/Home.tsx` |

## Remettre une section en place

1. Copier le fichier dans `src/components/`.
2. L'importer et le rendre dans `src/pages/Home.tsx`.

Ordre d'origine dans la home :

```
Hero → HeroScrollStrip → ClientsBand → SolutionsSection → TechStackSection
→ CorporateApproachSection → MethodologySection
→ InnovationShowcase (ContexteEnjeux → ROI & Sécurité → TeamSection → Partenariat)
→ Insights
```

Pour `ContexteEnjeuxSection`, l'emplacement d'origine est le tout début du JSX de
`InnovationShowcase` (avant la section « Performance & Gouvernance ») ; l'import
`TrendingUp` de `lucide-react` a été retiré d'`InnovationShowcase` en même temps
que la section, il faut le remettre si on ré-inline le bloc.

## Dépendances

- `MethodologySection.tsx` : `framer-motion`, `react-router-dom`, et les images
  `/images/developer.png`, `/images/servers.png`, `/images/office-night.jpg`.
- `CorporateApproachSection.tsx` : aucune dépendance externe (SVG + CSS inline),
  polices Space Grotesk / Manrope / JetBrains Mono.
- `ContexteEnjeuxSection.tsx` : `lucide-react`.
