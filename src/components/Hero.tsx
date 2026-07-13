
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';
import HeroVideo from './ui/hero-video';

interface HeroProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : texte */}
          <div className="text-left">
            <h1
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.05em',
                color: '#262626',
              }}
            >
              Votre partenaire <span style={{ color: '#027333' }}>tech &amp; IA</span>,<br />
              de l'idée à la mise en production.
            </h1>

            <div className="mb-8" style={{ maxWidth: '560px' }}>
              <p
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  letterSpacing: '-0.03em',
                  color: 'rgba(38,38,38,0.6)',
                }}
              >
                <strong style={{ color: '#262626', fontWeight: 600 }}>Création d'applications, automatisation des processus et formation à l'IA</strong> : un seul partenaire pour transformer votre façon de travailler.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-10">
              <button
                onClick={() => onNavigate('contact')}
                style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.03em' }}
                className="min-w-[240px] px-8 py-4 bg-[#027333] text-white font-bold text-lg hover:bg-[#025928] transition-all duration-300 flex items-center justify-center group"
              >
                Demander un audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('home', 'services')}
                style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.03em' }}
                className="min-w-[240px] px-8 py-4 bg-transparent text-[#262626] border border-[#262626]/20 font-bold text-lg hover:bg-[#262626]/5 transition-all flex items-center justify-center"
              >
                Découvrir nos expertises
              </button>
            </div>
          </div>

          {/* Colonne droite : vidéo illustrée fondue dans le fond */}
          <HeroVideo />
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-10 text-[#262626]/40 animate-bounce flex justify-center">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
