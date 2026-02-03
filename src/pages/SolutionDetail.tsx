
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { solutionsData } from '../data/solutions';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

import RPASolutionPage from './RPASolutionPage';
import AuditSolutionPage from './AuditSolutionPage';
import OptimisationSolutionPage from './OptimisationSolutionPage';
import ComingSoon from '../components/ComingSoon';
import StrategieSolutionPage from './StrategieSolutionPage';

const SolutionDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const data = slug ? solutionsData[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (slug === 'finance') {
        return <RPASolutionPage />;
    }

    if (slug === 'audit-processus') {
        return <AuditSolutionPage />;
    }

    if (slug === 'optimisation') {
        return <OptimisationSolutionPage />;
    }

    if (slug === 'data-hub') {
        return <ComingSoon />;
    }

    if (slug === 'strategie') {
        return <StrategieSolutionPage />;
    }

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold mb-4">Solution non trouvée</h2>
                <Link to="/" className="text-[#FFB600] hover:underline">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="pt-20 min-h-screen bg-white font-sans text-[#1A1A1A]">

            {/* HERO */}
            <section className="relative py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={data.heroImage} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <Link to="/" className="text-gray-400 hover:text-[#FFB600] text-sm font-bold uppercase tracking-widest mb-8 inline-block">
                        &larr; Retour Accueil
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extralight mb-6 leading-tight">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light mb-12">
                        {data.subtitle}
                    </p>
                    <button className="bg-[#FFB600] text-[#1A1A1A] px-8 py-4 font-bold text-lg hover:bg-white transition-all flex items-center">
                        Demander un audit
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* PROBLEM */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Le Diagnostic</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.problem.title}</h2>
                        <ul className="space-y-4">
                            {data.problem.items.map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-red-400 mr-3 text-xl">&times;</span>
                                    <span className="text-gray-600 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="font-bold text-xl mb-6">Impact actuel sur votre structure</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2 text-sm font-bold text-gray-500">
                                    <span>Pertes de productivité</span>
                                    <span>Élevées</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-400 h-full w-[85%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2 text-sm font-bold text-gray-500">
                                    <span>Risque d'erreur</span>
                                    <span>Critique</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-400 h-full w-[65%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Notre Réponse</span>
                        <h2 className="text-3xl md:text-5xl font-light mb-8 text-[#1A1A1A]">{data.solution.title}</h2>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            {data.solution.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {data.useCases.map((uc, idx) => (
                            <div key={idx} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl hover:border-[#FFB600]/30 transition-all group">
                                <div className="w-12 h-12 bg-[#F4F4F4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFB600] transition-colors">
                                    <uc.icon className="w-6 h-6 text-[#1A1A1A]" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{uc.title}</h4>
                                <p className="text-gray-500">{uc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KPI & PROOF */}
            <section className="py-24 px-6 bg-[#1A1A1A] text-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Résultats <br />Mesurables</h3>
                        <p className="text-gray-400 text-sm">Nos engagements de performance.</p>
                    </div>
                    {data.kpi.map((k, idx) => (
                        <div key={idx} className="border-l border-white/20 pl-8">
                            <div className="text-5xl font-bold text-[#FFB600] mb-2">{k.value}</div>
                            <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{k.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TIMELINE & METHOD */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Méthodologie de Déploiement</h2>
                    </div>
                    <div className="relative border-l-2 border-gray-200 ml-6 space-y-12">
                        <div className="relative pl-12">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB600] border-4 border-white"></span>
                            <h4 className="font-bold text-lg mb-2">Semaine 1 : Immersion & Audit</h4>
                            <p className="text-gray-500">Cartographie des processus et identification des KPIs cibles.</p>
                        </div>
                        <div className="relative pl-12">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1A1A1A] border-4 border-white"></span>
                            <h4 className="font-bold text-lg mb-2">Semaine 2-4 : Prototype & Validation</h4>
                            <p className="text-gray-500">Développement d'un POC (Proof of Concept) sur un périmètre restreint.</p>
                        </div>
                        <div className="relative pl-12">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1A1A1A] border-4 border-white"></span>
                            <h4 className="font-bold text-lg mb-2">Mois 2 : Déploiement & Formation</h4>
                            <p className="text-gray-500">Mise en production sécurisée et onboarding des équipes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center bg-[#F4F4F4] rounded-3xl p-12 md:p-20">
                    <h2 className="text-3xl md:text-5xl font-light mb-8">Prêt à transformer vos opérations ?</h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                        Discutons de vos enjeux spécifiques. Notre équipe technique vous répond sous 24h.
                    </p>
                    <button className="bg-[#1A1A1A] text-white px-10 py-5 font-bold text-lg hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all inline-flex items-center">
                        Contacter un expert {data.title}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <p className="mt-6 text-sm text-gray-400 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        Vos données restent confidentielles et sécurisées.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default SolutionDetail;
