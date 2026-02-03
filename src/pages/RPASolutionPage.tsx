
import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, ShieldCheck, Clock, RefreshCw, Layers, Monitor, Code2, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const RPASolutionPage: React.FC = () => {
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

            {/* 1. HERO HEADER (Généraliste - Inspired by Ref_Screen_1) */}
            <section className="relative py-32 px-6 bg-[#1A1A1A] text-white overflow-hidden">
                {/* Background abstrait/subtil pour donner de la profondeur */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80')] bg-cover bg-center" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 border border-[#FFB600] text-[#FFB600] rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        Excellence Opérationnelle
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight max-w-5xl mx-auto">
                        Services d'Automatisation des <span className="font-bold text-[#FFB600]">Processus Robotiques (RPA)</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light mb-12 leading-relaxed">
                        Silent Office déploie des robots logiciels qui interagissent avec vos applications comme le ferait un humain. Grâce à la reconnaissance visuelle et l'OCR, nos agents automatisent vos processus sans nécessiter d'intégration API ou de modification de vos systèmes.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={scrollToContact}
                            className="bg-[#FFB600] text-[#1A1A1A] px-10 py-5 font-bold text-lg hover:bg-white transition-all flex items-center rounded-sm"
                        >
                            Demander un audit de rentabilité
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. SECTION CAPACITÉS CLÉS (Style 'My_Site_Screen_Response' - 3 Cartes Blanches) */}
            <section className="py-24 px-6 bg-gray-50 relative -mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 relative z-20">
                        {/* Carte 1 */}
                        <div className="bg-white p-10 rounded-sm shadow-xl border-t-4 border-[#FFB600] hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#FFB600]">
                                <Layers size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Compatibilité Legacy & Cloud</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Automatisation de vos logiciels hérités sans API. Nos robots s'adaptent à votre infrastructure existante sans rien casser.
                            </p>
                        </div>

                        {/* Carte 2 */}
                        <div className="bg-white p-10 rounded-sm shadow-xl border-t-4 border-[#FFB600] hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#FFB600]">
                                <RefreshCw size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Workflows Multi-Applications</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Orchestration fluide entre vos Emails, CRM, Excel et ERP. Connectez enfin tous vos outils entre eux.
                            </p>
                        </div>

                        {/* Carte 3 */}
                        <div className="bg-white p-10 rounded-sm shadow-xl border-t-4 border-[#FFB600] hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#FFB600]">
                                <Monitor size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Extraction OCR Avancée</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Reconnaissance visuelle intelligente pour transformer vos documents scannés et PDF en données exploitables.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION AVANTAGES (Style 'Ref_Screen_2' - Grille de 6) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Pourquoi la RPA ?</span>
                        <h2 className="text-4xl font-light text-[#1A1A1A]">La valeur ajoutée Silent Office</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {/* Avantage 1 - Coûts */}
                        <div className="flex flex-col">
                            <div className="mb-4 text-[#FFB600]">
                                <TrendingUp size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Réduire les coûts sans compromis</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Réduisez les coûts opérationnels en confiant le travail répétitif à des robots, libérant ainsi votre budget pour des actions stratégiques.
                            </p>
                        </div>

                        {/* Avantage 2 - Vitesse */}
                        <div className="flex flex-col">
                            <div className="mb-4 text-[#FFB600]">
                                <Zap size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Accélérer tout</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Pas de pause, pas de retard. Les bots fonctionnent 24/7, accélérant les approbations et la saisie des données pour un rythme fulgurant.
                            </p>
                        </div>

                        {/* Avantage 3 - Scale */}
                        <div className="flex flex-col">
                            <div className="mb-4 text-[#FFB600]">
                                <Layers size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Réduire l'échelle quand c'est nécessaire</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Évoluez à la demande en augmentant le nombre de bots pendant les périodes de pointe, garantissant des performances stables.
                            </p>
                        </div>

                        {/* Avantage 4 - Audit */}
                        <div className="flex flex-col">
                            <div className="mb-4 text-[#FFB600]">
                                <ShieldCheck size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Rester prêt à l'audit par défaut</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Bénéficiez de pistes d'audit infalsifiables à chaque exécution. Simplifiez la conformité et protégez vos données sensibles.
                            </p>
                        </div>

                        {/* Avantage 5 - ROI */}
                        <div className="flex flex-col">
                            <div className="mb-4 text-[#FFB600]">
                                <RefreshCw size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Accélérer votre retour sur investissement</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Des gains d'efficacité presque immédiats. Les économies réalisées financent souvent la prochaine vague d'automatisation.
                            </p>
                        </div>

                        {/* Avantage 6 - Service Continu */}
                        <div className="flex flex-col">
                            <div className="mb-4 text-[#FFB600]">
                                <Clock size={36} />
                            </div>
                            <h4 className="text-xl font-bold mb-3">Un service client toujours disponible</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Les bots traitent instantanément les requêtes de routine, permettant à vos équipes de se concentrer sur les problèmes complexes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECTION LOGICIELS (Double Approche) */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Notre Palette Technologique</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nous adoptons une approche agnostique, choisissant la meilleure solution pour votre infrastructure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Colonne A : Solution Propriétaire */}
                        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-[#1A1A1A] text-[#FFB600] text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">
                                Recommandé PME / Legacy
                            </div>
                            <div className="mb-6 text-[#FFB600]">
                                <Code2 size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Solution Propriétaire & Scripts Sur-Mesure</h3>
                            <p className="text-gray-500 mb-6 min-h-[50px]">
                                Développement léger en Python/C# pour des automatisations ciblées sans lourdeur administrative.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm font-semibold text-gray-700">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    Zéro coût de licence récurrent
                                </li>
                                <li className="flex items-center text-sm font-semibold text-gray-700">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    Code 100% vous appartient
                                </li>
                                <li className="flex items-center text-sm font-semibold text-gray-700">
                                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                    Idéal pour environnement Legacy complexe
                                </li>
                            </ul>
                            <div className="pt-6 border-t border-gray-100 font-mono text-xs text-gray-400">
                                Technologies : Python, Selenium, C#, .NET
                            </div>
                        </div>

                        {/* Colonne B : Standards Marché */}
                        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 flex flex-col">
                            <div className="mb-6 text-[#FFB600]">
                                <Users size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Intégration Partenaires Certifiés</h3>
                            <p className="text-gray-500 mb-6 min-h-[50px]">
                                Implémentation des leaders du marché pour les grandes entreprises nécessitant gouvernance et scale massif.
                            </p>

                            <div className="grid grid-cols-3 gap-6 items-center mt-auto">
                                {/* UiPath */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/partners/uipath.png" alt="UiPath" className="h-12 w-auto object-contain" />
                                    <div className="font-bold text-sm text-[#1A1A1A]">UiPath</div>
                                </div>
                                {/* BluePrism */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/partners/blueprism.png" alt="Blue Prism" className="h-12 w-auto object-contain" />
                                    <div className="font-bold text-sm text-[#1A1A1A]">Blue Prism</div>
                                </div>
                                {/* Power Automate */}
                                <div className="flex flex-col items-center gap-2">
                                    <img src="/images/partners/power-automate.png" alt="Power Automate" className="h-12 w-auto object-contain" />
                                    <div className="font-bold text-sm text-[#1A1A1A]">Power Automate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. MÉTHODOLOGIE (Style 'My_Site_Screen_Methodologie' - Vertical Timeline) */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Processus</span>
                        <h2 className="text-4xl font-light text-[#1A1A1A] mb-8">Votre projet, votre rythme</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Chez Silent Office, nous suivons un flux de travail structuré et convivial qui permet à vos solutions d'automatisation des processus robotiques d'avancer sans encombrer votre calendrier. Vous décidez du calendrier, et nous apportons le plan, des jalons clairs et une communication transparente. Notre équipe s'adapte à votre rythme pour garantir une intégration fluide sans perturber vos opérations quotidiennes.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-gray-100 ml-6 md:ml-12 space-y-16 pl-8 md:pl-16 mt-16">
                        {/* Point 1 - Analyse */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#FFB600] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                            <h4 className="font-bold text-2xl text-[#1A1A1A] mb-3">Analyse</h4>
                            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                                Tout d'abord, nous analysons vos flux de travail, identifions les opportunités d'automatisation et définissons des objectifs mesurables, de sorte que le projet démarre avec une clarté partagée.
                            </p>
                        </div>

                        {/* Point 2 - Conception technique */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#1A1A1A] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                            <h4 className="font-bold text-2xl text-[#1A1A1A] mb-3">Conception technique</h4>
                            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                                Nos architectes RPA choisissent les bons outils, élaborent le plan de la solution et définissent les intégrations, la sécurité et les mesures de réussite.
                            </p>
                        </div>

                        {/* Point 3 - Mise en œuvre */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#1A1A1A] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                            <h4 className="font-bold text-2xl text-[#1A1A1A] mb-3">Mise en œuvre</h4>
                            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                                Notre équipe construit, configure et teste les robots en cycles courts. Vous obtenez des démonstrations précoces, des itérations rapides et aucune surprise.
                            </p>
                        </div>

                        {/* Point 4 - Tests d'acceptation */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#1A1A1A] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                            <h4 className="font-bold text-2xl text-[#1A1A1A] mb-3">Tests d'acceptation</h4>
                            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                                C'est vous qui dirigez. Nous examinons chaque scénario dans une zone d'essai, nous recueillons vos commentaires et nous apportons les dernières retouches.
                            </p>
                        </div>

                        {/* Point 5 - Livraison */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#1A1A1A] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                            <h4 className="font-bold text-2xl text-[#1A1A1A] mb-3">Livraison</h4>
                            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                                Nos experts RPA mettent les bots en production, migrent les informations d'identification et exécutent les scripts de transition pour que votre équipe ressente l'impact sans aucun temps d'arrêt.
                            </p>
                        </div>

                        {/* Point 6 - Soutien et ajustement */}
                        <div className="relative group">
                            <span className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#1A1A1A] border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></span>
                            <h4 className="font-bold text-2xl text-[#1A1A1A] mb-3">Soutien et ajustement</h4>
                            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                                Après le lancement, nous restons vigilants. Notre équipe fournit des tableaux de bord de performance, peaufine les scripts et met à jour les bots lorsque vos processus ou réglementations évoluent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 px-6 bg-[#F4F4F4]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-light mb-8 text-[#1A1A1A]">Prêt à automatiser vos tâches chronophages ?</h2>
                    <p className="text-xl text-gray-500 mb-12">
                        Recevez une estimation gratuite du potentiel d'automatisation de votre entreprise sous 48h.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="bg-[#1A1A1A] text-white px-12 py-6 font-bold text-xl hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all inline-flex items-center rounded-sm shadow-xl"
                    >
                        Lancer mon projet RPA
                        <ArrowRight className="ml-3 w-6 h-6" />
                    </button>
                </div>
            </section>

        </div>
    );
};

export default RPASolutionPage;
