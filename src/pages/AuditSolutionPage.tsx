import React, { useEffect } from 'react';
import { ArrowRight, FileText, CheckCircle, PieChart, Server, Users, Search, Activity, BarChart3, Binary, LayoutDashboard, ScrollText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const AuditSolutionPage: React.FC = () => {
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
            <section className="relative py-32 px-6 bg-[#1A1A1A] text-white overflow-hidden">
                {/* Background abstrait épuré */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Conseil & Stratégie
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extralight mb-8 leading-tight max-w-5xl mx-auto">
                        Audit de <span className="font-bold">Processus & Performance</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light mb-12 leading-relaxed">
                        Ne laissez plus les inefficacités opérationnelles freiner votre croissance. Transformez vos données cachées en leviers de productivité grâce à notre diagnostic 360°.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={scrollToContact}
                            className="bg-white text-[#1A1A1A] px-10 py-5 font-bold text-lg hover:bg-[#FFB600] transition-colors duration-300 flex items-center rounded-sm shadow-xl"
                        >
                            Réserver un diagnostic flash
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. SECTION ENGAGEMENT NATIONAL (France 2030) */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="inline-block p-1 px-3 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest rounded-sm mb-6">
                            Initiative France 2030
                        </div>
                        <h2 className="text-3xl md:text-5xl font-light text-[#1A1A1A] mb-8 leading-tight">
                            Accélérer dans le cadre du plan <span className="font-bold text-blue-900">Osez l'IA</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#FFB600] mb-8"></div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Dans un contexte économique exigeant, la modernisation est impérative. En phase avec l'initiative nationale Osez l'IA, nous accompagnons les entreprises dans leur transition technologique.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Nous transformons l'urgence de la mise à jour numérique en avantage concurrentiel, en auditant votre maturité digitale et votre éligibilité aux dispositifs d'accélération.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative">
                        {/* Illustration abstraite ou logo France 2030 stylisé si disponible, sinon visuel pro */}
                        <div className="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl shadow-2xl p-8 flex items-center justify-center text-white overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.gouvernement.fr/sites/default/files/styles/entete_mobile/public/locale-image/2021-10/france_2030.png?h=c554805c&itok=0k_5R_6_')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                            <div className="text-center z-10">
                                <Activity size={64} className="mx-auto mb-4 text-[#FFB600]" />
                                <h3 className="text-2xl font-bold mb-2">Audit de Maturité IA</h3>
                                <p className="text-blue-200">Éligibilité & Financement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. MÉTHODOLOGIE (3 Colonnes) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Notre Approche</span>
                        <h2 className="text-4xl font-light text-[#1A1A1A]">Une approche holistique : <span className="font-bold">De l'Humain à la Technique</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Bloc 1 : Immersion Métier */}
                        <div className="group p-8 border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#FFB600]"></div>
                            <div className="mb-8 p-4 bg-orange-50 rounded-full w-20 h-20 flex items-center justify-center text-[#FFB600]">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Immersion Métier</h3>
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-6">Analyse des flux humains</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Entretiens avec vos équipes pour cartographier les processus (BPMN) et identifier les tâches répétitives sans valeur ajoutée. Nous comprenons le "réel" avant de toucher au virtuel.
                            </p>
                        </div>

                        {/* Bloc 2 : Audit Technique */}
                        <div className="group p-8 border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#1A1A1A]"></div>
                            <div className="mb-8 p-4 bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center text-[#1A1A1A]">
                                <Server size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Audit Technique</h3>
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-6">Hardware & Software</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Analyse de la compatibilité de votre infrastructure. Nous vérifions la faisabilité technique sur vos ERP (Legacy ou Cloud), vos serveurs et la complexité de vos données pour éviter toute impasse.
                            </p>
                        </div>

                        {/* Bloc 3 : Roadmap & ROI */}
                        <div className="group p-8 border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                            <div className="mb-8 p-4 bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center text-blue-600">
                                <BarChart3 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Roadmap & ROI</h3>
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-6">Aide à la décision</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Nous livrons une matrice de rentabilité (Coût vs Gain) et un plan d'action chiffré pour prioriser vos investissements. Vous savez exactement où va chaque euro investi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. LIVRABLES (Grid Visuelle) */}
            <section className="py-24 px-6 bg-[#F8F9FA]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">Livrables de la mission</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            Des documents clairs, exploitables et orientés résultats pour engager votre transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Livrable 1 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-[#FFB600] transition-colors">
                            <div className="text-[#1A1A1A] mb-4">
                                <LayoutDashboard size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Cartographie des flux</h4>
                            <p className="text-sm text-gray-500">Visuel processus Actuel (AS-IS) vs Cible (TO-BE)</p>
                        </div>

                        {/* Livrable 2 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-[#FFB600] transition-colors">
                            <div className="text-[#1A1A1A] mb-4">
                                <Binary size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Diagnostic dette tech</h4>
                            <p className="text-sm text-gray-500">Audit de l'obsolescence et de la sécurité du SI</p>
                        </div>

                        {/* Livrable 3 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-[#FFB600] transition-colors">
                            <div className="text-[#1A1A1A] mb-4">
                                <PieChart size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Calculateur ROI</h4>
                            <p className="text-sm text-gray-500">Modèle financier prévisionnel sur 12/24/36 mois</p>
                        </div>

                        {/* Livrable 4 */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-[#FFB600] transition-colors">
                            <div className="text-[#1A1A1A] mb-4">
                                <ScrollText size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-lg mb-2">Plan de déploiement</h4>
                            <p className="text-sm text-gray-500">Feuille de route opérationnelle phasée</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 px-6 bg-[#1A1A1A] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-light mb-8">Passez de l'intuition à la décision.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Réservez votre créneau pour un pré-diagnostic gratuit de 30 minutes avec nos consultants seniors.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="bg-[#FFB600] text-[#1A1A1A] px-12 py-6 font-bold text-xl hover:bg-white transition-all inline-flex items-center rounded-sm"
                    >
                        Réserver un diagnostic flash
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </button>
                    <p className="mt-8 text-sm text-gray-500">
                        Engagement de confidentialité signé dès le premier échange.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default AuditSolutionPage;
