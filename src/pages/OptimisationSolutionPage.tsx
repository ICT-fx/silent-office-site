import React, { useEffect } from 'react';
import { ArrowRight, Database, Users, Truck, MessageSquare, Cog, Calculator, Layers, Factory, Search, Map, Code2, Repeat, BarChart3, ShieldCheck, Smartphone, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const OptimisationSolutionPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToContact = () => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    return (
        <div className="pt-20 min-h-screen bg-white font-sans text-[#1A1A1A]">

            {/* 1. HERO HEADER */}
            <section className="relative py-20 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 z-10">
                        <span className="inline-block py-1 px-3 border border-gray-200 bg-gray-50 text-gray-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            Operational Excellence
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1A1A1A] leading-tight">
                            Optimisation & Automatisation des <span className="text-[#FFB600]">Flux Métier</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                            Au-delà de la gestion de tâches. Nous restructurons vos opérations pour unifier vos processus, du CRM à la Supply Chain. Devenez une entreprise pilotée par la donnée.
                        </p>
                        <button
                            onClick={scrollToContact}
                            className="bg-[#1A1A1A] text-white px-8 py-4 font-bold text-lg hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all flex items-center rounded-sm"
                        >
                            Discuter de mon projet
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                    <div className="md:w-1/2 relative">
                        {/* Image "Visage Tech/Futuriste" placeholder - Abstract Tech Representation */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
                            <img
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                                alt="Innovation Tech"
                                className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. DÉFINITION & VISION */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A1A1A]">
                            Qu'est-ce que l'Automatisation Intelligente ?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            L'Automatisation de Flux est bien plus qu'une simple série de scripts. C'est une stratégie axée sur la technologie visant à connecter vos écosystèmes disparates.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Nous utilisons des API robustes et des Agents IA autonomes pour fluidifier le travail au-delà des activités conventionnelles de manipulation de données. Essentiellement, cela implique l'intégration profonde des applications et la restructuration des ressources humaines pour viser l'excellence opérationnelle.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80"
                            alt="Automatisation Intelligente"
                            className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                        />
                    </div>
                </div>
            </section>

            {/* 3. GRILLE DES SECTEURS */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1A1A1A]">Secteurs d'Application</h2>
                        <p className="text-gray-500 mt-4">L'automatisation transforme chaque département de votre organisation</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'CRM & Ventes', icon: Users },
                            { title: 'Ressources Humaines', icon: MessageSquare },
                            { title: 'Supply Chain & Logistique', icon: Truck },
                            { title: 'Service Client (Smart Bots)', icon: messageSquareIconAlias }, // Using alias below
                            { title: 'Opérations IT', icon: Settings },
                            { title: 'Finance & Compta', icon: Calculator },
                            { title: 'Gestion de Projet', icon: Layers },
                            { title: 'Industrie', icon: Factory },
                        ].map((sector, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 rounded-lg hover:shadow-lg hover:border-[#FFB600] transition-all group bg-white">
                                <sector.icon className="w-10 h-10 mb-6 text-gray-400 group-hover:text-[#FFB600] transition-colors" />
                                <h3 className="font-bold text-lg text-[#1A1A1A] mb-2 uppercase text-sm tracking-wide">{sector.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MÉTHODOLOGIE CONSEIL */}
            <section className="py-24 px-6 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#1A1A1A]">Notre Méthodologie</h2>
                        <p className="text-gray-600 mt-4">Un processus rigoureux pour garantir le succès de votre transformation.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { nb: '01', title: 'Audit & Stratégie', desc: 'Analyse approfondie de vos processus actuels pour élaborer une feuille de route claire.' },
                            { nb: '02', title: 'Cartographie des Processus', desc: 'Visualisation détaillée (BPMN) pour repérer les inefficacités et goulots d\'étranglement.' },
                            { nb: '03', title: 'Choix de la Stack Technique', desc: 'Sélection agnostique des meilleurs outils adaptés à vos besoins spécifiques.' },
                            { nb: '04', title: 'Gestion du Changement', desc: 'Accompagnement des équipes pour minimiser les perturbations et maximiser l\'adoption.' },
                            { nb: '05', title: 'Développement Sur-Mesure', desc: 'Implémentation robuste par nos ingénieurs experts (API, Scripts, IA).' },
                            { nb: '06', title: 'Analyse ROI', desc: 'Mesure précise de la valeur ajoutée et projection des résultats financiers.' },
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-start bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <span className="text-[#FFB600] font-bold text-4xl mb-4">{step.nb}</span>
                                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. STACK TECHNIQUE & OUTILS */}
            <section className="py-24 px-6 bg-[#1A1A1A] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Une ingénierie sur-mesure pilotée par nos experts</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Pas de solutions pré-faites. Nous construisons l'architecture technique exacte dont vous avez besoin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Carte 1 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                            <Code2 size={48} className="text-[#FFB600] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Scripting Expert</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Développement manuel par nos ingénieurs en Python, Node.js et C# pour une robustesse maximale et une performance sans faille.
                            </p>
                        </div>

                        {/* Carte 2 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                            <Database size={48} className="text-[#FFB600] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Connectivité & API</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Utilisation intensive d'API REST et Webhooks pour relier vos outils (ERP, CRM) en temps réel, garantissant l'intégrité des données.
                            </p>
                        </div>

                        {/* Carte 3 */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                            <Smartphone size={48} className="text-[#FFB600] mb-6" />
                            <h3 className="text-2xl font-bold mb-4">IA Avancée & MCP</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Déploiement de Serveurs MCP pour connecter l'IA à vos données, et configuration d'Agents IA autonomes pour exécuter des tâches complexes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. BUDGET & TRANSPARENCE */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#1A1A1A] leading-tight max-w-3xl">
                            Quel est le coût de l'automatisation de vos processus ?
                        </h2>
                        <p className="text-gray-600 mt-6 max-w-4xl">
                            Nous proposons des modèles de tarification transparents adaptés à vos objectifs. Voici les principaux facteurs qui influencent l'investissement :
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Complexité du processus', icon: Layers },
                            { title: "Champ d'application", icon: Map },
                            { title: 'Expertise requise', icon: ShieldCheck },
                            { title: 'Exigences de personnalisation', icon: Settings },
                            { title: 'Intégration existante', icon: Repeat },
                            { title: 'Soutien continu', icon: Settings }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                <div className="mr-6 text-gray-700">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-lg text-[#1A1A1A]">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#1A1A1A]">Prêt à optimiser vos opérations ?</h2>
                    <p className="text-xl text-gray-500 mb-12">
                        Nos experts sont prêts à analyser vos besoins. Réponse sous 24h.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="bg-[#1A1A1A] text-white px-12 py-6 font-bold text-xl hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all inline-flex items-center rounded-sm shadow-xl"
                    >
                        Lancer mon projet d'optimisation
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </button>
                </div>
            </section>
        </div>
    );
};

// Petites corrections pour les icones
const messageSquareIconAlias = MessageSquare;

export default OptimisationSolutionPage;
