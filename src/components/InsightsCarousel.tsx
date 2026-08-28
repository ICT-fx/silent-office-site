
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeCarouselPosts } from '../data/insights';

const InsightsCarousel: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const syncScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Marge de 8px pour absorber les arrondis de sous-pixel en fin de course
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncScrollState();
    el.addEventListener('scroll', syncScrollState, { passive: true });
    window.addEventListener('resize', syncScrollState);
    return () => {
      el.removeEventListener('scroll', syncScrollState);
      window.removeEventListener('resize', syncScrollState);
    };
  }, [syncScrollState]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-card]');
    // 32px = gap-8 entre les cartes
    const step = card ? card.offsetWidth + 32 : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex overflow-x-auto pb-8 gap-8 no-scrollbar scroll-smooth"
      >
        {homeCarouselPosts.map((post) => (
          <Link
            key={post.id}
            to={`/insights/${post.id}`}
            data-carousel-card
            className="flex-shrink-0 w-[85vw] md:w-[450px] group/card cursor-pointer block"
          >
            <div className="overflow-hidden mb-6 relative rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full aspect-[16/10] object-cover group-hover/card:scale-105 transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#262626]">
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
                <h3 className="text-xl font-bold leading-tight group-hover/card:text-[#027333] transition-colors">
                  {post.title}
                </h3>
              </div>
              <div className="flex-shrink-0 bg-[#F2F1DF] group-hover/card:bg-[#027333] p-3 rounded-full transition-colors transform group-hover/card:rotate-12">
                <ArrowUpRight size={20} className="text-[#262626]" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Dégradé de bord : signale qu'il reste des articles à droite */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 right-0 bottom-8 w-24 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Flèches de navigation (desktop) — le tactile utilise le balayage natif */}
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollLeft}
        aria-label="Articles précédents"
        className={`hidden md:flex absolute -left-5 top-[125px] w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center text-[#262626] transition-all hover:bg-[#027333] hover:text-white hover:border-[#027333] ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canScrollRight}
        aria-label="Articles suivants"
        className={`hidden md:flex absolute -right-5 top-[125px] w-11 h-11 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center text-[#262626] transition-all hover:bg-[#027333] hover:text-white hover:border-[#027333] ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default InsightsCarousel;
