
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

  return (
    <div className="relative group">
      <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar scroll-smooth">
        {articles.map((post) => (
          <Link
            key={post.id}
            to={`/insights/${post.id}`}
            className="flex-shrink-0 w-[85vw] md:w-[450px] group/card cursor-pointer block"
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

    </div>
  );
};

export default InsightsCarousel;
