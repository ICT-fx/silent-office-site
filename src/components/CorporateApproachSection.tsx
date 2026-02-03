import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Trophy } from 'lucide-react';

const CorporateApproachSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="notre-approche" className="bg-white py-24 px-6 border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* COLONNE GAUCHE (Conseil - Fond Blanc) */}
                    <div className="py-8 flex flex-col justify-center px-6 lg:px-12">
                        {/* Label Pill Style - Cleaner */}
                        <div className="inline-block bg-[#F4F4F4] px-4 py-1.5 rounded-full mb-8">
                            <span className="text-[#1A1A1A] font-bold text-xs tracking-[0.1em] uppercase">
                                Notre Approche
                            </span>
                        </div>

                        {/* Title - Sans Serif, Clean, bold */}
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-10 leading-[1.1] tracking-tight">
                            Du conseil à la <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB600] to-[#FFD700]">performance.</span>
                        </h2>

                        {/* Corps de texte aéré (interligne augmenté) */}
                        <div className="prose prose-lg text-gray-600 font-light leading-relaxed space-y-8">
                            <p className="text-xl text-[#1A1A1A] font-medium leading-normal">
                                Silent Office est un partenaire stratégique qui transforme vos ambitions en leviers de performance.
                            </p>
                            <p>
                                Nous analysons en profondeur vos processus et vos données afin de concevoir des solutions sur mesure, alignées avec vos enjeux métiers et vos objectifs de croissance.
                            </p>

                            {/* Citation Finale - Styled as a quote block */}
                            <div className="pt-6 relative">
                                <span className="absolute top-0 left-0 text-6xl text-[#FFB600]/20 font-serif leading-none -mt-4">"</span>
                                <p className="text-[#1A1A1A] font-bold text-xl italic relative z-10 pl-6 border-l-2 border-[#FFB600]">
                                    Nous concevons et déployons les technologies qui transforment durablement la performance de votre entreprise.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SÉPARATEUR & COLONNE DROITE (Contexte - Fond SOMBRE) */}
                    <div className="relative mt-12 lg:mt-0">
                        {/* Séparateur 'Jaune Électrique' - Frontière lumineuse */}
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[4px] bg-[#FFB600] shadow-[0_0_15px_rgba(255,182,0,0.6)] z-20"></div>

                        {/* Conteneur Fond Sombre (Anthracite Profond/Bleu Nuit) */}
                        <div className="bg-[#0F172A] p-10 lg:p-16 h-full flex flex-col justify-center relative shadow-2xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB600]/5 blur-[80px] rounded-full pointer-events-none"></div>

                            <h3 className="text-3xl font-bold text-white mb-12 font-display">
                                Pourquoi l'IA et l'automatisation sont devenues vitales ?
                            </h3>

                            <ul className="space-y-10">
                                {/* Item 1: Productivité (Graphique) */}
                                <li className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFB600]/10 flex items-center justify-center shrink-0 border border-[#FFB600]/20 group-hover:border-[#FFB600] transition-colors">
                                        <TrendingUp className="text-[#FFB600] w-6 h-6" />
                                    </div>
                                    <div>
                                        <strong className="text-white text-lg block mb-1">Restaurer vos Marges</strong>
                                        <span className="text-gray-400 font-light leading-relaxed block">
                                            Déconnectez votre croissance de vos besoins en recrutement. Faites plus de volume avec la même structure en automatisant les tâches à faible valeur.
                                        </span>
                                    </div>
                                </li>

                                {/* Item 2: Fiabilité (Bouclier) */}
                                <li className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFB600]/10 flex items-center justify-center shrink-0 border border-[#FFB600]/20 group-hover:border-[#FFB600] transition-colors">
                                        <ShieldCheck className="text-[#FFB600] w-6 h-6" />
                                    </div>
                                    <div>
                                        <strong className="text-white text-lg block mb-1">Fiabilité & Auditabilité</strong>
                                        <span className="text-gray-400 font-light leading-relaxed block">
                                            Supprimez l'erreur humaine des processus critiques. Garantissez des données propres, traçables et conformes pour vos prises de décision.
                                        </span>
                                    </div>
                                </li>

                                {/* Item 3: Avantage (Trophée/Etoile) */}
                                <li className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFB600]/10 flex items-center justify-center shrink-0 border border-[#FFB600]/20 group-hover:border-[#FFB600] transition-colors">
                                        <Trophy className="text-[#FFB600] w-6 h-6" />
                                    </div>
                                    <div>
                                        <strong className="text-white text-lg block mb-1">Agilité & Vitesse</strong>
                                        <span className="text-gray-400 font-light leading-relaxed block">
                                            Vos concurrents automatisent déjà. Ne laissez pas votre dette technique vous ralentir. Nos solutions redonnent de l'agilité à vos systèmes pour réagir plus vite au marché.
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default CorporateApproachSection;
