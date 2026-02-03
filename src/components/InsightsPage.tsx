
import React, { useState } from 'react';
import { ArrowLeft, Search, Clock, ArrowUpRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InsightPost } from '../types';

const InsightsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', 'Stratégie', 'Finance', 'Expertise', 'Futur du Travail', 'Point de vue'];

  // Expanded dummy data
  const allArticles: InsightPost[] = [
    {
      id: '5', // Using ID 5 as requested by user context implies specific attention, but I will map it to 'osez-ia' or '5' in detail page. Actually the user said "pour l'article sur 'osez l'ia'..." implying a specific one. I will use a unique ID 'osez-ia' to avoid collision or just '7'. Let's use '7'.
      title: "Osez l'IA : Une stratégie nationale pour la compétitivité",
      category: "Stratégie",
      date: "21 Jan 2026",
      image: "/images/articles/osez-ia-hero.png",
      readTime: "5 min"
    },
    {
      id: '1',
      title: "Le plan 'Osez l'IA' : Transformer la peur en levier de croissance.",
      category: "Stratégie",
      date: "12 Oct 2024",
      image: "https://picsum.photos/600/400?tech&seed=10",
      readTime: "8 min"
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
    },
    {
      id: '99', // Renaming old ID 5 to avoid confusion or just keeping it. The list had ID 5 "Cybersécurité". I'll keep the others as they were but I need to make sure IDs are unique. The previous list had 1, 2, 3, 4, 5, 6. I'll insert new one as ID '7'.
      title: "Cybersécurité et IA Générative : Les nouvelles frontières.",
      category: "Expertise",
      date: "15 Sep 2024",
      image: "https://picsum.photos/600/400?security&seed=14",
      readTime: "9 min"
    },
    {
      id: '6',
      title: "Automatiser le Reporting Board : Guide Pratique.",
      category: "Finance",
      date: "10 Sep 2024",
      image: "https://picsum.photos/600/400?chart&seed=15",
      readTime: "7 min"
    }
  ];

  const filteredArticles = activeCategory === 'Tous'
    ? allArticles
    : allArticles.filter(art => art.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pb-16 pt-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center text-gray-500 hover:text-[#FFB600] transition-colors mb-8 group text-sm font-medium inline-flex"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light text-[#1A1A1A] mb-4">
                Journal de <span className="font-bold">l'Expertise</span>
              </h1>
              <p className="text-gray-500 max-w-xl text-lg font-light">
                Analyses, tendances et retours d'expérience pour naviguer dans l'ère de l'intelligence artificielle.
              </p>
            </div>

            {/* Search Bar Visual */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full w-full md:w-80 focus:outline-none focus:border-[#FFB600] focus:bg-white transition-all"
              />
              <Search className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-[80px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex space-x-8 py-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-sm font-bold tracking-wide transition-colors pb-1 border-b-2 ${activeCategory === cat
                  ? 'text-[#1A1A1A] border-[#FFB600]'
                  : 'text-gray-400 border-transparent hover:text-[#1A1A1A]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <Link
              key={post.id}
              to={`/insights/${post.id}`}
              className="bg-white group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full block"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] rounded-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-400 font-medium mb-4 space-x-3">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#FFB600] transition-colors leading-tight">
                  {post.title}
                </h3>

                <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-500 group-hover:text-[#1A1A1A] transition-colors">Lire l'article</span>
                  <div className="w-8 h-8 rounded-full bg-[#F4F4F4] flex items-center justify-center group-hover:bg-[#FFB600] transition-colors">
                    <ArrowUpRight size={16} className="text-[#1A1A1A]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#1A1A1A] text-white py-20 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <Tag className="w-12 h-12 text-[#FFB600] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-light mb-6">Restez à la pointe de l'innovation</h2>
          <p className="text-gray-400 mb-8 text-lg">Recevez notre veille stratégique mensuelle. Pas de spam, uniquement de la valeur ajoutée pour votre Board.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="votre.email@societe.com"
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB600] flex-grow"
            />
            <button className="px-8 py-4 bg-[#FFB600] text-[#1A1A1A] font-bold rounded-lg hover:bg-white transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
