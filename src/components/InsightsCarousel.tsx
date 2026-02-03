
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InsightPost } from '../types';

const InsightsCarousel: React.FC = () => {
  const articles: InsightPost[] = [
    {
      id: '5',
      title: "Osez l'IA : Une stratégie nationale pour la compétitivité",
      category: "Stratégie",
      date: "21 Jan 2026",
      image: "/images/articles/osez-ia-hero.png",
      readTime: "5 min"
    },
    {
      id: '2',
      title: "Optimiser les flux de données : L'art du désilotage moderne.",
      category: "Expertise",
      date: "05 Oct 2024",
      image: "https://picsum.photos/600/400?abstract&seed=11",
      readTime: "12 min"
    },
    {
      id: '3',
      title: "IA Financière : Pourquoi l'audit manuel devient un risque majeur.",
      category: "Finance",
      date: "28 Sep 2024",
      image: "https://picsum.photos/600/400?business&seed=12",
      readTime: "6 min"
    },
    {
      id: '4',
      title: "Orchestration d'agents IA : un levier stratégique de performance et de valeur",
      category: "Point de vue",
      date: "10 Déc 2025",
      image: "/images/articles/ai-orchestration-hero.png",
      readTime: "7 min"
    }
  ];

  return (
    <div className="relative group">
      <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar scroll-smooth">
        {articles.map((post) => (
          <Link
            key={post.id}
            to={`/insights/${post.id}`}
            className="flex-shrink-0 w-full md:w-[450px] group/card cursor-pointer block"
          >
            <div className="overflow-hidden mb-6 relative rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[16/10] object-cover group-hover/card:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                  {post.category}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div>
                <div className="flex items-center text-xs text-gray-400 font-medium mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.readTime} de lecture</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover/card:text-[#FFB600] transition-colors">
                  {post.title}
                </h3>
              </div>
              <div className="flex-shrink-0 bg-[#F4F4F4] group-hover/card:bg-[#FFB600] p-3 rounded-full transition-colors transform group-hover/card:rotate-12">
                <ArrowUpRight size={20} className="text-[#1A1A1A]" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="hidden lg:flex justify-center mt-4">
        <div className="w-64 h-1 bg-gray-100 rounded-full relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/4 bg-[#FFB600] animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default InsightsCarousel;
