import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Data for the 6 blocks
const methodologyBlocks = [
    {
        category: "MÉTHODE & EXPERTISE",
        title: "Une expertise profonde, du code à la stratégie.",
        text: "Chez Silent Office, nous combinons une maîtrise avancée du développement, de l’automatisation et du RPA avec une vision stratégique orientée résultats. Nos équipes conçoivent, déploient et industrialisent des solutions robustes, pensées pour durer et évoluer avec votre organisation.\n\nNous ne nous contentons pas d’implémenter des outils : nous construisons des systèmes cohérents, gouvernés et alignés sur vos enjeux business.",
        number: "01",
        image: "/images/developer.png",
        tags: ["Stratégie", "Code", "Excellence"]
    },
    {
        category: "TECHNOLOGIE PROPRIÉTAIRE & FLEXIBILITÉ",
        title: "Des solutions conçues par nous, pour s’adapter à vous.",
        text: "Nous développons et utilisons nos propres solutions d’automatisation et d’orchestration. Ce choix garantit une flexibilité totale : intégration native avec vos outils existants, interconnexion avec des systèmes legacy, et adaptation fine à vos processus métiers.\n\nCette indépendance technologique est un gage de qualité, de maîtrise et de pérennité dans vos projets de transformation.",
        number: "02",
        image: "/images/servers.png",
        tags: ["Flexibilité", "Sur-mesure", "Souveraineté"]
    },
    {
        category: "TRANSITION TECHNOLOGIQUE SANS RUPTURE",
        title: "Moderniser sans casser l’existant.",
        text: "La transformation technologique ne doit pas être une rupture brutale. Nous accompagnons les organisations dans une transition progressive, sécurisée et maîtrisée, en valorisant l’existant tout en introduisant des technologies plus performantes.\n\nRésultat : une modernisation continue, sans arrêt d’activité ni dépendance excessive à des solutions fermées.",
        number: "03",
        image: "/images/office-night.jpg",
        tags: ["Sécurité", "Transition", "Continuité"]
    }
];

const MethodologySection: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const cards = cardsRef.current;

            // Configuration for scaling and spacing
            const gap = 300;
            const maxScaleReduce = 0.05;

            cards.forEach((card, index) => {
                if (!card) return;

                const nextCard = cards[index + 1];
                let scale = 1;

                if (nextCard) {
                    const nextRect = nextCard.getBoundingClientRect();
                    const nextStickyTop = 40; // Fixed top matching the style
                    const windowHeight = window.innerHeight;

                    let progress = (windowHeight - nextRect.top) / (windowHeight - nextStickyTop);
                    progress = Math.max(0, Math.min(1, progress));

                    scale = 1 - (progress * maxScaleReduce);
                } else {
                    scale = 1;
                }

                card.style.transform = `scale(${scale})`;
                card.style.transformOrigin = 'top center';
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="methodologie" className="bg-[#F8F9FA] pt-10 pb-0 px-6 relative" ref={containerRef}>
            <div className="max-w-[1400px] mx-auto">

                {/* SECTION HEADER - Compact & Left Aligned */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-gray-200 pb-8">
                    <div className="max-w-3xl">
                        <span className="text-[#FFB600] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                            Notre Approche
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-medium text-[#1A1A1A] leading-tight font-display">
                            De la vision stratégique à l’exécution technologique.
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/contact')}
                        className="mt-8 md:mt-0 px-8 py-3 bg-[#1A1A1A] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all duration-300 rounded-lg"
                    >
                        Nous contacter
                    </button>
                </div>

                {/* STACKING CARDS */}
                <div className="pb-8 lg:pb-[40vh]">
                    {methodologyBlocks.map((block, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="lg:sticky bg-white shadow-2xl border border-gray-100 flex flex-col lg:flex-row gap-4 lg:gap-16 items-start min-h-0 lg:min-h-[65vh] transition-transform duration-100 ease-out will-change-transform mb-8 lg:mb-[30vh]"
                            style={{
                                top: 40,
                                zIndex: index + 1,
                                borderRadius: '4px',
                            }}
                        >
                            {/* Left: Number (Outline Style similar to screenshot) */}
                            <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-gray-100">
                                <div>
                                    <span className="text-[#FFB600] font-bold tracking-widest text-xs uppercase mb-6 block">
                                        {block.category}
                                    </span>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {block.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-900">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 lg:mt-auto">
                                    {/* Number style updated to solid dark blue */}
                                    <span
                                        className="text-8xl lg:text-9xl font-bold block leading-none select-none text-[#0F172A]"
                                    >
                                        {block.number}
                                    </span>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="lg:w-2/3 p-8 lg:p-12 h-full flex flex-col justify-center relative">
                                {/* Optional Image at top, mostly for first slide */}
                                {(block as any).image && (
                                    <div className="w-full h-48 md:h-64 mb-8 rounded-lg overflow-hidden shadow-sm">
                                        <img
                                            src={(block as any).image}
                                            alt={block.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                )}
                                <h3 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-8 leading-tight max-w-2xl">
                                    {block.title}
                                </h3>
                                {/* A4 feel: slightly denser text, serif or clean sans */}
                                <div className="prose prose-lg text-gray-500 leading-relaxed whitespace-pre-line max-w-none font-light">
                                    {block.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MethodologySection;
