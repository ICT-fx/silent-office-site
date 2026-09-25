
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';
import HeroVideo from './ui/hero-video';
import { GradientButton } from './ui/gradient-button';

interface HeroProps {
  onNavigate: (view: ViewState, sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    /* Sur mobile la colonne unique (titre + texte + boutons + vidéo) est plus
       haute qu'un écran : centrer verticalement poussait le titre sous le
       Header. On aligne donc en haut et on dégage explicitement la hauteur du
       Header ; à partir de `md` la mise en page deux colonnes tient dans
       l'écran et retrouve son centrage. */
    <div className="relative md:min-h-screen flex items-start md:items-center overflow-hidden bg-white">
      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-[calc(var(--header-bottom)_+_1.75rem)] md:pt-0 pb-16 md:pb-0 md:-translate-y-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
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
              Réduisez vos coûts.<br />
              Gagnez en visibilité.<br />
              <span style={{ color: '#027333' }}>Débloquez de nouveaux usages.</span>
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
                <strong style={{ color: '#262626', fontWeight: 600 }}>Applications sur mesure, automatisation des processus et intelligence artificielle</strong> : nous concevons les outils qui simplifient vos opérations et accélèrent votre croissance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-10">
              <GradientButton
                variant="green"
                onClick={() => onNavigate('contact')}
                style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.03em' }}
                className="group min-w-[240px] text-lg"
              >
                Réserver un appel
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
              <GradientButton
                onClick={() => onNavigate('home', 'services')}
                style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.03em' }}
                className="min-w-[240px] text-lg"
              >
                Découvrir nos solutions
              </GradientButton>
            </div>
          </div>

          {/* Colonne droite : vidéo illustrée fondue dans le fond */}
          <HeroVideo />
        </div>
      </div>

      {/* Floating Indicators */}
      {/* Remonté pour rester au-dessus du bandeau photo qui dépasse en bas d'écran.
          Masqué sur mobile : la colonne y est plus haute qu'un écran, la flèche
          se serait posée par-dessus la vidéo au lieu d'indiquer un bas de page. */}
      <div className="hidden md:flex absolute bottom-24 left-0 right-0 z-10 text-[#262626]/40 animate-bounce justify-center">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
