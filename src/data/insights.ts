import { InsightPost } from '../types';

// Source unique de vérité pour les articles : utilisée par la page Insights
// et par le carrousel de la page d'accueil. Ordre = du plus récent au plus ancien.
export const insightPosts: InsightPost[] = [
  {
    id: '6',
    title: "Automatiser le reporting Board : guide pratique",
    category: "Finance",
    date: "1 Août 2026",
    image: "/images/articles/reporting-board-hero.jpg",
    readTime: "14 min"
  },
  {
    id: '99',
    title: "Cybersécurité et IA générative : les nouvelles frontières",
    category: "Expertise",
    date: "31 Juil 2026",
    image: "/images/articles/cybersecurite-hero.jpg",
    readTime: "13 min"
  },
  {
    id: '3',
    title: "IA Financière : pourquoi l'audit manuel devient un risque majeur",
    category: "Finance",
    date: "28 Juil 2026",
    image: "/images/articles/audit-financier-hero.jpg",
    readTime: "12 min"
  },
  {
    id: '5',
    title: "Osez l'IA : Une stratégie nationale pour la compétitivité",
    category: "Stratégie",
    date: "21 Jan 2026",
    image: "/images/articles/osez-ia-hero.png",
    readTime: "5 min"
  },
  {
    id: '4',
    title: "Orchestration d'agents IA : un levier stratégique de performance et de valeur",
    category: "Point de vue",
    date: "10 Déc 2025",
    image: "/images/articles/ai-orchestration-hero.png",
    readTime: "7 min"
  },
  {
    id: '2',
    title: "Intelligence artificielle : quel retour sur investissement ?",
    category: "Point de vue",
    date: "24 Nov 2025",
    image: "/images/articles/roi-ia-hero.png",
    readTime: "5 min"
  }
];

export const insightCategories = ['Tous', 'Stratégie', 'Finance', 'Expertise', 'Futur du Travail', 'Point de vue'];

// Ordre imposé en tête du carrousel de la page d'accueil. Les articles non
// listés ici suivent, dans l'ordre chronologique ci-dessus.
const homeFeaturedIds = ['5', '4', '6'];

export const homeCarouselPosts: InsightPost[] = [
  ...homeFeaturedIds
    .map((id) => insightPosts.find((post) => post.id === id))
    .filter((post): post is InsightPost => Boolean(post)),
  ...insightPosts.filter((post) => !homeFeaturedIds.includes(post.id))
];
