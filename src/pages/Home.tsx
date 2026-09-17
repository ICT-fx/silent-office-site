
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import HeroScrollStrip from '../components/HeroScrollStrip';
import ClientsBand from '../components/ClientsBand';
import SolutionsSection from '../components/SolutionsSection';
import TechStackSection from '../components/TechStackSection';
import InnovationShowcase from '../components/InnovationShowcase';
import InsightsCarousel from '../components/InsightsCarousel';

/** Fond papier : la seule couleur de fond de l'accueil, entre deux vagues. */
const PAPER = '#FCFBF8';
/** Hauteur des deux vagues qui bornent le bandeau papier. */
const WAVE_HEIGHT = 'clamp(64px, 5vw, 80px)';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (view: string) => {
        navigate(view === 'home' ? '/' : `/${view}`);
    };

    return (
        <>
            <section id="hero">
                <Hero onNavigate={(view, section) => {
                    if (view !== 'home') navigate(`/${view}`);
                    else if (section) {
                        const el = document.getElementById(section);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                }} />
            </section>

            <HeroScrollStrip />

            {/* Bandeau papier : la couleur s'ouvre sur une vague juste au-dessus
                des logos clients et se referme sur une seconde vague sous le
                bouton « Ouvrir le portfolio ». Les deux vagues occupent les
                paddings du bandeau : elles ne mordent jamais sur le contenu. */}
            <div
                className="relative"
                style={{
                    background: PAPER,
                    paddingTop: WAVE_HEIGHT,
                    paddingBottom: WAVE_HEIGHT,
                }}
            >
                {/* Vague haut — blanc (bandeau photo) → papier */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
                    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ height: WAVE_HEIGHT }}>
                        <path d="M0,40 C180,80 360,0 540,40 C720,80 900,10 1080,50 C1260,90 1380,20 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
                    </svg>
                </div>

                <ClientsBand />

                {/* Vague bas — papier → blanc (Solutions) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
                    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full" style={{ height: WAVE_HEIGHT }}>
                        <path d="M0,20 C240,70 480,0 720,35 C960,70 1200,5 1440,30 L1440,80 L0,80 Z" fill="#FFFFFF" />
                    </svg>
                </div>
            </div>

            <SolutionsSection />

            <TechStackSection />

            <InnovationShowcase onNavigate={(view) => navigate(`/${view}`)} />

            <section id="insights" className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                        <div>
                            <span className="text-[#027333] font-semibold tracking-wider uppercase text-sm mb-4 block">Expertise</span>
                            <h2 className="text-4xl lg:text-5xl font-light text-[#262626]">Journal de l'IA Corporate</h2>
                        </div>
                        <button
                            onClick={() => navigate('/insights')}
                            className="mt-8 md:mt-0 text-[#262626] border-b border-[#262626] pb-1 hover:text-[#027333] hover:border-[#027333] transition-all font-medium"
                        >
                            Voir tous les articles
                        </button>
                    </div>
                    <InsightsCarousel />
                </div>
            </section>
        </>
    );
};

export default Home;
