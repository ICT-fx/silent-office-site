import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Data for the 3 blocks
const methodologyBlocks = [
    {
        category: "MÉTHODE & EXPERTISE",
        title: "Une expertise profonde, du code à la stratégie.",
        text: "Chez Flowera, nous combinons une maîtrise avancée du développement, de l’automatisation et du RPA avec une vision stratégique orientée résultats. Nous ne nous contentons pas d’implémenter des outils : nous construisons des systèmes cohérents, gouvernés et alignés sur vos enjeux business.",
        number: "01",
        image: "/images/developer.png",
        tags: ["Stratégie", "Code", "Excellence"]
    },
    {
        category: "TECHNOLOGIE PROPRIÉTAIRE & FLEXIBILITÉ",
        title: "Des solutions conçues par nous, pour s’adapter à vous.",
        text: "Nous développons et utilisons nos propres solutions d’automatisation et d’orchestration. Ce choix garantit une flexibilité totale : intégration native avec vos outils existants, interconnexion avec des systèmes legacy et adaptation fine à vos processus métiers.",
        number: "02",
        image: "/images/servers.png",
        tags: ["Flexibilité", "Sur-mesure", "Souveraineté"]
    },
    {
        category: "TRANSITION TECHNOLOGIQUE SANS RUPTURE",
        title: "Moderniser sans casser l’existant.",
        text: "La transformation technologique ne doit pas être une rupture brutale. Nous accompagnons les organisations dans une transition progressive, sécurisée et maîtrisée, en valorisant l’existant tout en introduisant des technologies plus performantes.",
        number: "03",
        image: "/images/office-night.jpg",
        tags: ["Sécurité", "Transition", "Continuité"]
    }
];

// Décalage en diagonale vers le haut-droite pour chaque carte derrière
const OFFSET_X = 34; // px vers la droite
const OFFSET_Y = 26; // px vers le haut

const MethodologySection: React.FC = () => {
    const navigate = useNavigate();
    // order[0] = carte du dessus ; les suivantes sont empilées derrière
    const [order, setOrder] = useState<number[]>([0, 1, 2]);

    // Faire passer la carte suivante devant (front → arrière)
    const advance = () =>
        setOrder((prev) => [...prev.slice(1), prev[0]]);

    // Ramener une carte précise au premier plan
    const bringToFront = (cardIndex: number) =>
        setOrder((prev) => [cardIndex, ...prev.filter((i) => i !== cardIndex)]);

    // Défilement automatique toutes les 15 s. Relancé à chaque interaction
    // manuelle (via la dépendance `order`) pour laisser le temps de lire.
    const autoRef = useRef(advance);
    autoRef.current = advance;
    useEffect(() => {
        const id = window.setInterval(() => autoRef.current(), 15000);
        return () => window.clearInterval(id);
    }, [order]);

    return (
        <section id="methodologie" className="bg-white py-20 lg:py-28 px-6 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* SECTION HEADER - Compact & Left Aligned */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-20 border-b border-gray-200 pb-8">
                    <div className="max-w-3xl">
                        <span className="text-[#027333] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                            Notre Approche
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-medium text-[#262626] leading-tight font-display">
                            De la vision stratégique à l’exécution technologique.
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/contact')}
                        className="mt-8 md:mt-0 px-8 py-3 bg-[#262626] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#027333] hover:text-[#262626] transition-all duration-300 rounded-lg whitespace-nowrap"
                    >
                        Nous contacter
                    </button>
                </div>

                {/* STACKED CARD DECK */}
                <div
                    className="relative mx-auto"
                    style={{
                        maxWidth: '1080px',
                        // espace réservé en haut / à droite pour laisser voir les cartes du dessous
                        paddingTop: OFFSET_Y * (methodologyBlocks.length - 1),
                        paddingRight: OFFSET_X * (methodologyBlocks.length - 1),
                    }}
                >
                    {/* hauteur du deck (portée par un placeholder invisible) */}
                    <div className="invisible" aria-hidden="true">
                        <CardInner block={methodologyBlocks[0]} />
                    </div>

                    {order.map((cardIndex, pos) => {
                        const block = methodologyBlocks[cardIndex];
                        const isFront = pos === 0;
                        return (
                            <motion.article
                                key={cardIndex}
                                onClick={isFront ? advance : () => bringToFront(cardIndex)}
                                initial={false}
                                animate={{
                                    x: pos * OFFSET_X,
                                    y: pos * -OFFSET_Y,
                                    scale: 1 - pos * 0.03,
                                    zIndex: order.length - pos,
                                }}
                                transition={{ type: 'spring', stiffness: 320, damping: 34 }}
                                className="absolute top-0 left-0 w-full cursor-pointer rounded-3xl overflow-hidden bg-white border border-gray-200/80"
                                style={{
                                    boxShadow: isFront
                                        ? '0 30px 60px -20px rgba(38,38,38,0.28)'
                                        : '0 20px 40px -24px rgba(38,38,38,0.20)',
                                }}
                            >
                                <CardInner block={block} dimmed={!isFront} />
                            </motion.article>
                        );
                    })}
                </div>

                {/* Navigation par points */}
                <div className="flex items-center justify-center gap-2.5 mt-12">
                    {methodologyBlocks.map((_, i) => {
                        const isActive = order[0] === i;
                        return (
                            <button
                                key={i}
                                onClick={() => bringToFront(i)}
                                aria-label={`Voir la carte ${i + 1}`}
                                className="group flex items-center"
                            >
                                <span
                                    className={`block h-2 rounded-full transition-all duration-300 ${
                                        isActive
                                            ? 'w-8 bg-[#027333]'
                                            : 'w-2 bg-gray-300 group-hover:bg-[#93BF9E]'
                                    }`}
                                />
                            </button>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

// ---- Carte horizontale (image + contenu) ----
interface CardInnerProps {
    block: typeof methodologyBlocks[number];
    dimmed?: boolean;
}

const CardInner: React.FC<CardInnerProps> = ({ block, dimmed }) => {
    return (
        <div className="grid md:grid-cols-2">
            {/* IMAGE */}
            <div className="relative h-52 md:h-full min-h-[300px] overflow-hidden">
                <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#262626]/40 via-transparent to-transparent" />
                <span
                    className="absolute bottom-4 left-6 text-6xl font-bold leading-none select-none text-white/85 pointer-events-none"
                    aria-hidden="true"
                >
                    {block.number}
                </span>
            </div>

            {/* CONTENU */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-bold text-[#027333] tabular-nums">
                        {block.number}
                    </span>
                    <div className="h-px w-10 bg-[#027333]/40" />
                    <span className="text-[#027333] font-bold tracking-[0.14em] text-[11px] uppercase">
                        {block.category}
                    </span>
                </div>

                <h3 className="text-2xl lg:text-[1.9rem] font-bold text-[#262626] mb-4 leading-tight">
                    {block.title}
                </h3>

                <p className="text-gray-500 text-base leading-relaxed font-light mb-6">
                    {block.text}
                </p>

                <div className="flex flex-wrap gap-2">
                    {block.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#262626]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {dimmed && (
                <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />
            )}
        </div>
    );
};

export default MethodologySection;
