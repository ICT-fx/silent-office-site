import React, { useState, useEffect, useRef } from 'react';
import { Layout, Cpu, Users, Database, ArrowRight, Bot } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SolutionsSection: React.FC = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timer
    const [isVisible, setIsVisible] = useState(false);

    const solutions = [
        {
            id: 'audit-processus',
            title: 'Audit de Processus & Performance',
            fullContent: 'Analyse immersive de vos flux opérationnels pour identifier les frictions et concevoir une roadmap IA rentable.',
            icon: Layout,
            tags: ['PROCESS MINING', 'DATA AUDIT'],
            link: '/solutions/audit-processus',
            drawerTitle: 'Analyse & Roadmap',
        },
        {
            id: 'optimisation',
            title: 'Optimisation & Automatisation',
            fullContent: 'Orchestration de vos outils (ERP, CRM) via des agents autonomes pour libérer vos équipes.',
            icon: Cpu,
            tags: ['AI AGENTS', 'PRODUCTIVITY'],
            link: '/solutions/optimisation',
            drawerTitle: 'Productivité Augmentée',
        },
        {
            id: 'finance',
            title: 'RPA (Robotic Process Automation)',
            fullContent: 'Robots logiciels qui automatisent vos tâches répétitives via reconnaissance visuelle et OCR. Compatible avec tous vos outils existants.',
            icon: Bot,
            tags: ['LEGACY COMPATIBLE', 'UNIVERSAL CONNECT'],
            link: '/solutions/finance',
            drawerTitle: 'Robotic Process Automation',
        },
        {
            id: 'strategie',
            title: 'Stratégie Board & Acculturation',
            fullContent: "Formation des dirigeants et montée en compétences des équipes. Comprenez les enjeux de l'IA, explorez le champ des possibles et sécurisez votre transition technologique par une acculturation en profondeur.",
            icon: Users,
            tags: ['WORKSHOP BOARD', 'UPSKILLING'],
            link: '/solutions/strategie',
            drawerTitle: 'Acculturation & Leadership',
        },
        {
            id: 'data-hub',
            title: 'Data Hub & Business Intelligence',
            fullContent: "Notre SaaS unifie l'ensemble des flux de données de votre entreprise (Finance, RH, Supply Chain, Opérations) au sein d'une interface unique. Grâce à nos algorithmes de Machine Learning, transformez vos données brutes en indicateurs de performance (KPI) actionnables.",
            icon: Database,
            tags: ['KPI DASHBOARD', 'PREDICTIVE ANALYTICS'],
            link: '/solutions/data-hub',
            drawerTitle: 'Pilotage Stratégique & Data Hub',
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Function to handle entering an item
    const handleMouseEnter = (index: number) => {
        // Clear any pending timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Delay opening the new item by 100ms
        timerRef.current = setTimeout(() => {
            setActiveIndex(index);
        }, 100);
    };

    // Function to handle leaving an item (instant close)
    const handleMouseLeave = () => {
        // Clear any pending timer (so if we left before 500ms, it never opens)
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        // Instantly close
        setActiveIndex(null);
    };

    return (
        <section
            ref={sectionRef}
            id="services"
            className="bg-[#1A1A1A] py-24 px-6 min-h-[85vh] flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full">

                {/* CENTERED TITLE */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight">Nos Solutions.</h2>
                </div>

                {/* ACCORDION LIST */}
                <div
                    className="flex flex-col border-t border-white/10"
                    onMouseLeave={handleMouseLeave} // If we leave the whole list, close everything instantly
                >
                    {solutions.map((solution, idx) => {
                        const isActive = activeIndex === idx;

                        return (
                            <div
                                key={solution.id}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                // We don't put onMouseLeave here because entering another item triggers that item's enter
                                // and the parent onMouseLeave handles leaving the list entirely.
                                // However, if we move from Item A to Item B:
                                // A.Stay -> B.Enter triggers.
                                // We need B.Enter to effectively "cancel" A (which it does by overwriting activeIndex after delay).
                                // BUT user wants "instant close of title zone". 
                                // So if I move from A to B, A should close instantly.
                                // To achieve this, when entering B, we should probably set Active(null) immediately?
                                // Let's refine handleMouseEnter
                                onMouseLeave={() => {
                                    // Optional: If we want strictly "leave title zone = vanish", we could do it here of the individual item.
                                    // But if we move to the Card (which is inside the item), we are still "in" the item.
                                    // If we move to next item, we leave this item.
                                    // So yes, individual onMouseLeave is good for 'instant close'.
                                    handleMouseLeave();
                                }}
                                className="border-b border-white/10 transition-colors duration-300 relative overflow-hidden"
                            >
                                {/* HEADLINE / TITLE ROW */}
                                <div
                                    onClick={() => navigate(solution.link)}
                                    className={`group py-6 cursor-pointer flex items-center justify-between transition-all duration-300 relative z-20`}
                                >
                                    <h3
                                        className={`text-xl md:text-3xl lg:text-5xl font-bold transition-all duration-300 tracking-tight
                                        ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'}`}
                                    >
                                        {solution.title}
                                    </h3>

                                    <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? 'text-[#FFB600]' : 'text-gray-600'
                                        }`}>
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* EXPANDABLE CARD */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out relative z-30 ${isActive ? 'max-h-[600px] opacity-100 mb-10 mt-12' : 'max-h-0 opacity-0 mb-0 mt-0'
                                        }`}
                                >
                                    <div className="bg-white rounded-[20px] md:rounded-[32px] p-5 md:p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-center mx-0 md:mx-4 relative overflow-hidden">
                                        {/* Decorative Elements inside card */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                        {/* Content Left */}
                                        <div className="flex-1 relative z-10">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {solution.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-[#F4F4F4] rounded-full flex items-center justify-center text-[#1C272A] shrink-0">
                                                    <solution.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-2xl font-bold text-[#1A1A1A]">
                                                    {solution.drawerTitle}
                                                </h4>
                                            </div>

                                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                                                {solution.fullContent}
                                            </p>

                                            <Link
                                                to={solution.link}
                                                className="inline-flex items-center px-8 py-3 bg-[#1C272A] text-white font-bold rounded-full hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg"
                                            >
                                                En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
};

export default SolutionsSection;
