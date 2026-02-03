
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import SolutionsSection from '../components/SolutionsSection';
import MethodologySection from '../components/MethodologySection';
import InnovationShowcase from '../components/InnovationShowcase';
import CorporateApproachSection from '../components/CorporateApproachSection';
import InsightsCarousel from '../components/InsightsCarousel';

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

            <CorporateApproachSection />
            <SolutionsSection />
            <MethodologySection />


            <InnovationShowcase onNavigate={(view) => navigate(`/${view}`)} />

            <section id="insights" className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                        <div>
                            <span className="text-[#FFB600] font-semibold tracking-wider uppercase text-sm mb-4 block">Expertise</span>
                            <h2 className="text-4xl lg:text-5xl font-light text-[#1A1A1A]">Journal de l'IA Corporate</h2>
                        </div>
                        <button
                            onClick={() => navigate('/insights')}
                            className="mt-8 md:mt-0 text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#FFB600] hover:border-[#FFB600] transition-all font-medium"
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
