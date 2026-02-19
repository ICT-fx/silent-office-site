
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';

interface HeroProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const opacity = Math.max(1 - scrollPos / 600, 0);
  const translateY = scrollPos * 0.3;
  const scale = 1 + scrollPos * 0.0005;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 opacity-30 transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url("/images/hero-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `scale(${scale})`
        }}
      />

      {/* Overlay Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white pt-20 md:pt-0"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-tight mb-6 leading-[1.2]">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] block mb-2">Architectes de votre</span>
          <span className="font-bold text-white relative inline-block pb-6">
            transformation digitale et robotique.
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-[#FFB600]"></span>
          </span>
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed px-4">
            <span className="font-semibold">Silent Office est un cabinet indépendant qui</span> optimise vos processus critiques pour transformer vos flux de travail en leviers de rentabilité. Audit, automatisation stratégique et pilotage de la performance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 mt-12">
          <button
            onClick={() => onNavigate('contact')}
            className="min-w-[260px] px-8 py-4 bg-[#FFB600] text-[#1A1A1A] font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            Demander un audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('home', 'services')}
            className="min-w-[260px] px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
          >
            Découvrir nos expertises
          </button>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10 text-white/50 animate-bounce flex justify-center">
        <ChevronDown size={32} />
      </div>

      {/* "Reveal Curtain" Effect for Next Section */}
      <div
        className="absolute bottom-0 left-0 w-full bg-white h-0 transition-all duration-300"
        style={{ height: `${Math.min(scrollPos * 0.2, 50)}px` }}
      />
    </div>
  );
};

export default Hero;
