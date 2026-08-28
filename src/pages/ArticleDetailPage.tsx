import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, CheckCircle2, User, Layers, Database, Cpu, MessageSquare, TrendingUp, Target, ShieldCheck, AlertTriangle, FileSearch, Repeat, LineChart, Scale, KeyRound, Bot, Radar, Network } from 'lucide-react';

const ArticleDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [scrollProgress, setScrollProgress] = useState(0);

    // Barre de progression au scroll
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // -------- CONTENU ARTICLE 2 (ROI IA) --------
    if (id === '2') {
        return (
            <div className="min-h-screen bg-white">
                {/* Scroll Progress Bar */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div className="h-full bg-[#027333] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero Section */}
                <div className="relative h-[60vh] overflow-hidden bg-[#0F172A]">
                    <img src="/images/articles/roi-ia-hero.png" alt="Intelligence artificielle : quel retour sur investissement ?" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#027333] text-[#262626] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
                                Point de vue
                            </span>
                            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                                Intelligence artificielle : quel retour sur investissement ?
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl">
                                Le paradoxe des investissements croissants et des retours incertains.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#027333]" />
                                    <span>24 Nov 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#027333]" />
                                    <span>5 min de lecture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#027333]" />
                                    <span>Co-rédigé avec Henri Lajarrige et Ouissam Taleb Bendiab</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#027333] transition-colors mb-12 group text-sm font-medium">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Intro */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="lead text-xl md:text-2xl leading-relaxed font-light text-[#262626] mb-8 border-l-4 border-[#027333] pl-6">
                            Les conseils d’administration multiplient les discussions sur la course à l’Intelligence artificielle, mais sous l’effervescence, la réalité est plus nuancée. Les organisations investissent massivement, cependant les retours tardent à se concrétiser et restent difficiles à mesurer.
                        </p>
                        <p>
                            L’enquête 2025 de Deloitte, menée auprès de 1854 dirigeants à travers l’Europe et le Moyen-Orient (249 en France et 1742 en Europe) et appuyée par 24 entretiens approfondis, montre que la dynamique s’accélère. Dans 10 % des organisations, le dirigeant pilote directement la stratégie IA. De plus en plus d’entreprises considèrent l’intelligence artificielle (IA) comme un impératif stratégique, et non plus simplement comme une évolution technologique, notamment à mesure que l’IA agentique remet en question les hypothèse sur le fonctionnement futur des entreprises.
                        </p>
                        <p>
                            Pour capter la valeur de l’IA, les entreprises leaders adoptent une approche pilotée par le dirigeant et généralisée à l’ensemble de l’organisation. Elles deviennent également plus sélectives dans le choix des cas d’usage et mettent en place des programmes structurés afin de conduire les transformations organisationnelles nécessaires à un déploiement à grande échelle de l’IA. L’IA générative (GenAI) offre déjà des gains de productivité mesurables. Quant à l’IA agentique, elle implique une plus grande complexité, mais offre un potentiel de refonte complète des processus.
                        </p>
                        <p>
                            Cependant, intégrer l’IA au cœur d’une organisation ne se résume pas à une simple mise à jour technologique. Cela est comparable à la transition de la vapeur à l’électricité. Lorsque les usines sont passées de la vapeur à l’électricité, elles ont dû reconfigurer leurs lignes de production, repenser l’organisation du travail, investir dans de nouvelles infrastructures et former leurs équipes. Les bénéfices réels ne sont apparus que lorsque les organisations ont radicalement transformé leur mode de fonctionnement. Il en va de même pour l’IA, qui requiert une planification rigoureuse, des investissements à long terme et souvent une transformation organisationnelle en profondeur. À terme, l’IA s’intégrera au cœur des opérations, redéfinissant ainsi la création de valeur pour l’entreprise.
                        </p>
                    </div>

                    {/* Illustration */}
                    <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
                        <img src="/images/articles/roi-ia-hero.png" alt="Intelligence artificielle et transformation digitale" className="w-full h-auto" />
                    </div>

                    {/* Section 1: Investments */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">Des investissements en hausse, un ROI à concrétiser</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Tous secteurs confondus, les investissements dans l’IA connaissent une croissance rapide. Selon notre enquête, 85 % des entreprises françaises (vs 98 % en Europe) ont augmenté leurs investissements au cours des 12 derniers mois, et 92 % prévoient de les accroître à nouveau cette année.
                        </p>

                        {/* Figure 1: Evolution des investissements */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 1. Evolution des investissements en IA en France (12 derniers mois)</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Comment les investissements de votre organisation dans l’IA ont-ils évolué au cours des 12 derniers mois ?</p>

                            <div className="space-y-4">
                                {/* Bar 1 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Augmentation très forte (+40%+)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-200/50 rounded-full" style={{ width: '5%' }}></div>
                                        <span className="relative z-10 font-bold text-[#262626]">5%</span>
                                    </div>
                                </div>
                                {/* Bar 2 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Augmentation significative (+20% à +39%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-300/50 rounded-full" style={{ width: '15%' }}></div>
                                        <span className="relative z-10 font-bold text-[#262626]">15%</span>
                                    </div>
                                </div>
                                {/* Bar 3 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Augmentation modérée (+11% à +19%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-400/50 rounded-full" style={{ width: '37%' }}></div>
                                        <span className="relative z-10 font-bold text-[#262626]">37%</span>
                                    </div>
                                </div>
                                {/* Bar 4 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Légère augmentation (+6% à +10%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-500/50 rounded-full" style={{ width: '28%' }}></div>
                                        <span className="relative z-10 font-bold text-[#262626]">28%</span>
                                    </div>
                                </div>
                                {/* Bar 5 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Stabilité (entre -5% et +5%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-600/50 rounded-full" style={{ width: '12%' }}></div>
                                        <span className="relative z-10 font-bold text-[#262626]">12%</span>
                                    </div>
                                </div>
                                {/* Bar 6 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Légère diminution (-6% à -10%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-800/50 rounded-full" style={{ width: '2%' }}></div>
                                        <span className="relative z-10 font-bold text-[#262626]">2%</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-4">Source: Étude Deloitte 2025</p>
                        </div>

                        {/* Figure 2: Prévisions */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 2. Prévisions des investissements (12 prochains mois)</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Au cours des 12 prochains mois, comment votre organisation prévoit-elle de faire évoluer ses investissements financiers dédiés à l’IA ?</p>

                            <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-2">
                                <div className="w-1/6 h-full flex flex-col justify-end items-center group">
                                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">6%</div>
                                    <div className="w-full bg-teal-200/70 rounded-t-md relative hover:bg-teal-200 transition-colors" style={{ height: '6%' }}></div>
                                    <div className="text-[10px] md:text-xs text-center mt-2 text-gray-500 font-medium leading-tight h-10 flex items-start justify-center">Très forte +40%</div>
                                </div>
                                <div className="w-1/6 h-full flex flex-col justify-end items-center group">
                                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">30%</div>
                                    <div className="w-full bg-teal-300/70 rounded-t-md relative hover:bg-teal-300 transition-colors" style={{ height: '30%' }}></div>
                                    <div className="text-[10px] md:text-xs text-center mt-2 text-gray-500 font-medium leading-tight h-10 flex items-start justify-center">Significative +20%</div>
                                </div>
                                <div className="w-1/6 h-full flex flex-col justify-end items-center group">
                                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">35%</div>
                                    <div className="w-full bg-teal-400/70 rounded-t-md relative hover:bg-teal-400 transition-colors" style={{ height: '35%' }}></div>
                                    <div className="text-[10px] md:text-xs text-center mt-2 text-gray-500 font-medium leading-tight h-10 flex items-start justify-center">Modérée +11%</div>
                                </div>
                                <div className="w-1/6 h-full flex flex-col justify-end items-center group">
                                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">21%</div>
                                    <div className="w-full bg-teal-500/70 rounded-t-md relative hover:bg-teal-500 transition-colors" style={{ height: '21%' }}></div>
                                    <div className="text-[10px] md:text-xs text-center mt-2 text-gray-500 font-medium leading-tight h-10 flex items-start justify-center">Légère +6%</div>
                                </div>
                                <div className="w-1/6 h-full flex flex-col justify-end items-center group">
                                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">6%</div>
                                    <div className="w-full bg-teal-600/70 rounded-t-md relative hover:bg-teal-600 transition-colors" style={{ height: '6%' }}></div>
                                    <div className="text-[10px] md:text-xs text-center mt-2 text-gray-500 font-medium leading-tight h-10 flex items-start justify-center">Stable</div>
                                </div>
                                <div className="w-1/6 h-full flex flex-col justify-end items-center group">
                                    <div className="text-xs font-bold mb-1 opacity-0 group-hover:opacity-100 transition-opacity">2%</div>
                                    <div className="w-full bg-teal-800/70 rounded-t-md relative hover:bg-teal-800 transition-colors" style={{ height: '2%' }}></div>
                                    <div className="text-[10px] md:text-xs text-center mt-2 text-gray-500 font-medium leading-tight h-10 flex items-start justify-center">Diminution</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-8">Source: Étude Deloitte 2025</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Pourtant, malgré cette dynamique, la plupart des répondants indiquent qu’il faut entre deux et quatre ans pour obtenir un retour sur investissement satisfaisant pour un cas d’usage type de l’IA. Ce délai est nettement plus long que la période de retour sur investissement habituellement attendue pour les technologies, qui se situe entre sept et douze mois.
                        </p>
                        <blockquote className="border-l-4 border-[#027333] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            "Le délai pour concrétiser les gains liés à l’IA varie selon les secteurs d’activités mais, en moyenne, les bénéfices significatifs mettent plusieurs années à se matérialiser."
                            <span className="block mt-2 text-xs font-bold uppercase not-italic text-gray-400">— Dirigeant d’une entreprise de biens de consommation</span>
                        </blockquote>

                        {/* Figure 3: Délai ROI Comparison */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 3. Délai de retour sur investissement</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Pour le cas d’usage de l’IA au sein de votre organisation, quel est le délai moyen observé pour obtenir un retour sur investissement ?</p>

                            <div className="space-y-6">
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-3 text-right font-medium text-gray-600">Plus de 5 ans</div>
                                    <div className="col-span-9 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-4 rounded-sm" style={{ width: '2%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">2%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-4 rounded-sm" style={{ width: '1px' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">0%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-3 text-right font-medium text-gray-600">4-5 ans</div>
                                    <div className="col-span-9 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-4 rounded-sm" style={{ width: '6%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">6%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-4 rounded-sm" style={{ width: '8%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">8%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-3 text-right font-medium text-gray-600">3-4 ans</div>
                                    <div className="col-span-9 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-4 rounded-sm" style={{ width: '26%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">26%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-4 rounded-sm" style={{ width: '19%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">19%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-3 text-right font-medium text-gray-600">2-3 ans</div>
                                    <div className="col-span-9 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-4 rounded-sm" style={{ width: '40%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">40%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-4 rounded-sm" style={{ width: '43%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">43%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-3 text-right font-medium text-gray-600">1-2 ans</div>
                                    <div className="col-span-9 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-4 rounded-sm" style={{ width: '29%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">29%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-4 rounded-sm" style={{ width: '34%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">34%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-3 text-right font-medium text-gray-600">Moins d'un an</div>
                                    <div className="col-span-9 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-4 rounded-sm" style={{ width: '9%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">9%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-4 rounded-sm" style={{ width: '7%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">7%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-6 mt-6 text-xs font-bold">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-[#003831] rounded-sm"></div> Europe
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-teal-300 rounded-sm"></div> France
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-4">Source: Étude Deloitte 2025</p>
                        </div>
                    </section>

                    {/* Section 2: GenAI ROI */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">La GenAI, catalyseur d’un retour sur investissement rapide</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            L’IA générative s’impose comme un levier de retour sur investissement (ROI) rapide, bien plus que les précédentes vagues d’IA. Les dirigeants y voient la promesse d’une efficacité immédiate : automatisation des tâches répétitives, génération de contenus, assistance à la décision.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            En France, cette approche à court terme traduit une volonté claire : démontrer rapidement les bénéfices, dans un contexte de forte pression budgétaire et de nécessité de preuves concrètes pour maintenir l’adhésion des directions générales. En effet, 18 % des entreprises françaises constatent déjà un ROI, et 45 % en attendent un en moins d’un an.
                        </p>

                        {/* Figure 4: ROI Attendu GenAI */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 4. ROI attendu de la GenAI</h4>

                            <div className="space-y-6 mt-8">
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-4 text-right font-medium text-gray-600">Nous constatons déjà une valeur</div>
                                    <div className="col-span-8 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-5 rounded-sm" style={{ width: '18%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">18%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-5 rounded-sm" style={{ width: '21%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">21%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-4 text-right font-medium text-gray-600">Moins d'un an</div>
                                    <div className="col-span-8 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-5 rounded-sm" style={{ width: '40%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">40%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-5 rounded-sm" style={{ width: '47%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">47%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-4 text-right font-medium text-gray-600">1-3 ans</div>
                                    <div className="col-span-8 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-5 rounded-sm" style={{ width: '39%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">39%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-5 rounded-sm" style={{ width: '33%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">33%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Row */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-4 text-right font-medium text-gray-600">3-5 ans</div>
                                    <div className="col-span-8 space-y-1">
                                        <div className="flex items-center">
                                            <div className="bg-[#003831] h-5 rounded-sm" style={{ width: '10%' }}></div>
                                            <span className="ml-2 text-xs text-[#003831] font-bold">10%</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-teal-300 h-5 rounded-sm" style={{ width: '5%' }}></div>
                                            <span className="ml-2 text-xs text-teal-600 font-bold">5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-6 mt-8 text-xs font-bold">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-[#003831] rounded-sm"></div> Europe
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-teal-300 rounded-sm"></div> France
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Cette perception d’un ROI rapide explique en grande partie l’adoption accélérée de la GenAI : elle permet de générer de la valeur sans nécessiter de refonte technologique majeure.
                        </p>
                    </section>

                    {/* Section 3: Obstacles */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">Obstacles au ROI et le rôle de la GenAI pour les dépasser</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Les freins à l’adoption de l’IA et à la réalisation du ROI sont avant tout organisationnels et humains. En Europe, ils se traduisent par : un manque de compétences en IA (29 %), des infrastructures et des données insuffisantes (26 %), une gouvernance peu structurée (21 %) et des préoccupations en matière de sécurité et de souveraineté (25 %-28 %).
                        </p>
                        <blockquote className="border-l-4 border-[#027333] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            "Tout le monde demande à son organisation d’adopter l’IA, même sans savoir exactement quels résultats en attendre. Il y a un tel engouement que je pense que les entreprises s’attendent à ce qu’elle résolve tout, comme par magie."
                            <span className="block mt-2 text-xs font-bold uppercase not-italic text-gray-400">— Dirigeant d’une entreprise de télécommunications</span>
                        </blockquote>

                        {/* Figure 5: Obstacles */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 5. Les obstacles au ROI de l’IA</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Quels obstacles freinent votre organisation dans la réalisation du ROI de ses projets IA ?</p>

                            <div className="space-y-4">
                                {/* Obstacle 1 */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-5 text-right font-medium text-gray-600 text-xs md:text-sm">Manque de talents, compétences techniques</div>
                                    <div className="col-span-7 space-y-1">
                                        <div className="flex items-center"><div className="bg-[#003831] h-3 rounded-sm" style={{ width: '30%' }}></div><span className="ml-2 text-[10px] text-[#003831]">30%</span></div>
                                        <div className="flex items-center"><div className="bg-teal-300 h-3 rounded-sm" style={{ width: '33%' }}></div><span className="ml-2 text-[10px] text-teal-600">33%</span></div>
                                    </div>
                                </div>
                                {/* Obstacle 2 */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-5 text-right font-medium text-gray-600 text-xs md:text-sm">Souveraineté de l'IA/des données</div>
                                    <div className="col-span-7 space-y-1">
                                        <div className="flex items-center"><div className="bg-[#003831] h-3 rounded-sm" style={{ width: '29%' }}></div><span className="ml-2 text-[10px] text-[#003831]">29%</span></div>
                                        <div className="flex items-center"><div className="bg-teal-300 h-3 rounded-sm" style={{ width: '23%' }}></div><span className="ml-2 text-[10px] text-teal-600">23%</span></div>
                                    </div>
                                </div>
                                {/* Obstacle 3 */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-5 text-right font-medium text-gray-600 text-xs md:text-sm">Infrastructures techno / données</div>
                                    <div className="col-span-7 space-y-1">
                                        <div className="flex items-center"><div className="bg-[#003831] h-3 rounded-sm" style={{ width: '27%' }}></div><span className="ml-2 text-[10px] text-[#003831]">27%</span></div>
                                        <div className="flex items-center"><div className="bg-teal-300 h-3 rounded-sm" style={{ width: '26%' }}></div><span className="ml-2 text-[10px] text-teal-600">26%</span></div>
                                    </div>
                                </div>
                                {/* Obstacle 4 */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-5 text-right font-medium text-gray-600 text-xs md:text-sm">Évolution des coûts et économie</div>
                                    <div className="col-span-7 space-y-1">
                                        <div className="flex items-center"><div className="bg-[#003831] h-3 rounded-sm" style={{ width: '26%' }}></div><span className="ml-2 text-[10px] text-[#003831]">26%</span></div>
                                        <div className="flex items-center"><div className="bg-teal-300 h-3 rounded-sm" style={{ width: '23%' }}></div><span className="ml-2 text-[10px] text-teal-600">23%</span></div>
                                    </div>
                                </div>
                                {/* Obstacle 5 */}
                                <div className="grid grid-cols-12 gap-4 items-center text-sm">
                                    <div className="col-span-5 text-right font-medium text-gray-600 text-xs md:text-sm">Manque d'engagement / financement</div>
                                    <div className="col-span-7 space-y-1">
                                        <div className="flex items-center"><div className="bg-[#003831] h-3 rounded-sm" style={{ width: '26%' }}></div><span className="ml-2 text-[10px] text-[#003831]">26%</span></div>
                                        <div className="flex items-center"><div className="bg-teal-300 h-3 rounded-sm" style={{ width: '27%' }}></div><span className="ml-2 text-[10px] text-teal-600">27%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Comparison Table */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">GenAI vs Agentic AI : deux logiques de ROI</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Les entreprises distinguent désormais deux modèles économiques autour de l’IA :
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">
                            <li><strong className="text-[#262626]">La GenAI</strong> se positionne comme un moteur de ROI express, immédiat et quantifiable, avec des impacts mesurables en termes de productivité, rapidité et économies.</li>
                            <li><strong className="text-[#262626]">L’Agentic AI</strong> se projette sur un horizon plus long, orienté vers la transformation organisationnelle et la délégation partielle de la prise de décision aux systèmes autonomes.</li>
                        </ul>

                        {/* Figure 6: Table */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 mb-12 shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#262626] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Aspect</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-[#027333]">GenAI</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-teal-300">Agentic AI</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Horizon de ROI</td>
                                        <td className="px-6 py-4 text-gray-600">Court terme (≤ 1–3 ans)</td>
                                        <td className="px-6 py-4 text-gray-600">Long terme (3–5 ans)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Type de gains</td>
                                        <td className="px-6 py-4 text-gray-600">Efficience, productivité, coûts</td>
                                        <td className="px-6 py-4 text-gray-600">Transformation, autonomie, décisions</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">KPIs utilisés</td>
                                        <td className="px-6 py-4 text-gray-600">Temps gagné, contenus produits, satisfaction client</td>
                                        <td className="px-6 py-4 text-gray-600">Automatisation, conformité, réduction des risques</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Nature du ROI</td>
                                        <td className="px-6 py-4 text-gray-600">Tactique et mesurable</td>
                                        <td className="px-6 py-4 text-gray-600">Stratégique et structurel</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Sources</h3>
                        <div className="text-xs text-gray-400 space-y-1 font-mono">
                            <p>Étude Deloitte 2025, menée auprès de 1854 dirigeants.</p>
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="mt-20 bg-[#262626] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour mesurer votre ROI ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Nos experts Strategy & AI vous accompagnent dans la définition de vos KPIs et le pilotage de vos investissements.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#027333] text-[#262626] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
                            Contacter l'équipe Strategy
                        </Link>
                    </div>
                </article>
            </div>
        );
    }
    // -------- CONTENU ARTICLE 6 (AUTOMATISER LE REPORTING BOARD) --------
    if (id === '6') {
        return (
            <div className="min-h-screen bg-white">
                {/* Barre de progression */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div className="h-full bg-[#027333] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero */}
                <div className="relative h-[60vh] overflow-hidden bg-[#262626]">
                    <img
                        src="/images/articles/reporting-board-hero.jpg"
                        alt="Automatiser le reporting Board : guide pratique"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/75 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#027333] text-[#262626] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
                                Finance
                            </span>
                            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                                Automatiser le reporting Board : guide pratique
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl">
                                Produire 226 pages plus vite ne sert à rien si la moitié n’est pas lue. Automatiser le reporting board, c’est d’abord décider ce qu’on arrête de produire.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#027333]" />
                                    <span>1 Août 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#027333]" />
                                    <span>14 min de lecture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#027333]" />
                                    <span>Fantin Schellekens</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#027333] transition-colors mb-12 group text-sm font-medium">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="lead text-xl md:text-2xl leading-relaxed font-light text-[#262626] mb-8 border-l-4 border-[#027333] pl-6">
                            La demande arrive presque toujours formulée de la même façon : « il nous faut trois semaines pour sortir le pack du conseil, il faut automatiser ». C’est une bonne intuition et un mauvais diagnostic. Dans la plupart des organisations, le pack n’est pas trop lent à produire. Il est trop long à lire.
                        </p>
                        <p>
                            Automatiser un processus sans le repenser produit exactement le même résultat, plus vite et moins cher. Appliqué au reporting board, cela donne 226 pages que personne ne lit, livrées le mardi au lieu du vendredi. Le gain est réel pour l’équipe finance ; il est nul pour le conseil.
                        </p>
                        <p>
                            Ce guide prend le problème dans l’ordre inverse de l’habitude. On regarde d’abord ce que le conseil consomme réellement, puis ce que la fabrication coûte, puis on automatise — de la donnée vers la mise en forme, jamais l’inverse. Et on trace une ligne nette sur ce qu’on peut, ou non, confier à un modèle de langage quand il s’agit de chiffres qui engagent la responsabilité des administrateurs.
                        </p>
                    </div>

                    {/* SECTION 1 — Le goulot est la lecture */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">1. Le goulot d’étranglement n’est pas la production</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Les recherches menées sur le contenu des conseils d’administration convergent sur un point : les liasses grossissent. Le pack moyen atteint environ 226 pages, en hausse de 30 % depuis 2019. Seuls 40 % restent sous la barre des 100 pages, et plus de la moitié dépassent 200 pages — avec des cas extrêmes approchant le millier.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Face à cela, le temps de préparation d’un administrateur plafonne autour de quatre heures. À un rythme de lecture attentive d’environ trente pages par heure, cela plafonne la capacité d’absorption à cent vingt pages. L’arithmétique est brutale.
                        </p>

                        {/* FIGURE 1 — L'écart production / lecture */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 1. Ce qui est produit, ce qui est lu</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Pack moyen de 226 pages, face à une capacité de lecture de 120 pages en quatre heures.</p>

                            <div className="mb-8">
                                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                                    <span>Pack moyen produit</span>
                                    <span>226 pages</span>
                                </div>
                                <div className="flex w-full h-16 rounded-lg overflow-hidden border border-gray-200">
                                    <div className="bg-[#027333] flex items-center justify-center text-white text-sm font-bold" style={{ width: '53%' }}>
                                        120 p. lues
                                    </div>
                                    <div className="bg-[#262626] flex items-center justify-center text-white text-sm font-bold" style={{ width: '47%' }}>
                                        106 p. non lues
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">+30 %</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">de longueur du pack depuis 2019</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">≈ 4 h</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">de préparation par administrateur</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#027333]">47 %</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">du pack qui n’est jamais lu</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : recherches Board Intelligence sur le reporting de conseil (voir note méthodologique)</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le jugement porté sur ces documents suit la même pente. Moins de la moitié des administrateurs estiment que les documents du conseil apportent de la valeur ; plus de quatre sur dix les jugent sans effet ; une minorité considère qu’ils <em>nuisent</em> au débat. Et près des deux tiers notent leur pack « faible » ou « médiocre ».
                        </p>

                        {/* FIGURE 2 — Perception */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 2. Ce que les administrateurs pensent de leurs documents</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Effet perçu des documents du conseil sur la qualité de la discussion.</p>

                            <div className="flex w-full h-14 rounded-lg overflow-hidden border border-gray-200 mb-6">
                                <div className="bg-[#027333] flex items-center justify-center text-white text-sm font-bold" style={{ width: '48%' }}>48 %</div>
                                <div className="bg-[#93BF9E] flex items-center justify-center text-[#262626] text-sm font-bold" style={{ width: '42%' }}>42 %</div>
                                <div className="bg-[#262626] flex items-center justify-center text-white text-xs font-bold" style={{ width: '10%' }}>10 %</div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 text-sm">
                                <div className="flex gap-2 items-start">
                                    <span className="w-3 h-3 rounded-sm bg-[#027333] flex-shrink-0 mt-1"></span>
                                    <span className="text-gray-600 leading-snug">Apportent de la valeur</span>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <span className="w-3 h-3 rounded-sm bg-[#93BF9E] flex-shrink-0 mt-1"></span>
                                    <span className="text-gray-600 leading-snug">Sans effet sur la discussion</span>
                                </div>
                                <div className="flex gap-2 items-start">
                                    <span className="w-3 h-3 rounded-sm bg-[#262626] flex-shrink-0 mt-1"></span>
                                    <span className="text-gray-600 leading-snug">Nuisent à la discussion</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200 flex items-baseline gap-4">
                                <span className="text-4xl font-bold text-[#262626]">63 %</span>
                                <span className="text-sm text-gray-600 leading-snug">des administrateurs et professionnels de la gouvernance notent leur pack « faible » ou « médiocre ».</span>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Reste la question de savoir <em>pourquoi</em> ces liasses grossissent. La réponse n’est pas l’incompétence des équipes : c’est l’accumulation réglementaire. Dans l’étude portant sur l’évolution du contenu, plus de neuf répondants sur dix constatent une augmentation du reporting de conformité et de réglementation, et près de neuf sur dix du reporting de risque. Personne n’a jamais décidé d’ajouter cent pages. On a ajouté une section par exigence nouvelle, et rien n’a été retiré.
                        </p>

                        <div className="flex gap-4 items-start bg-[#F2F1DF] rounded-2xl p-8 mb-12">
                            <Scale className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-[#262626]">Note méthodologique</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Les chiffres sur la longueur des packs et la perception de leur valeur proviennent d’enquêtes menées par Board Intelligence auprès de plus de 1 000 administrateurs et professionnels de la gouvernance issus de près de 700 organisations. Les chiffres sur le temps de lecture et l’évolution du contenu proviennent d’une étude distincte, au périmètre nettement plus étroit — une cinquantaine de participants, majoritairement des secrétaires généraux. Ce sont par ailleurs des travaux financés par un éditeur de solutions de reporting de conseil. Nous les citons parce qu’il n’existe pas d’équivalent public plus robuste sur ce sujet précis, et parce que l’ordre de grandeur est cohérent avec ce qu’on observe sur le terrain — pas parce qu’ils auraient valeur de statistique officielle.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2 — Le coût de fabrication */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">2. Ce que la fabrication coûte vraiment</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Côté production, le constat est stable depuis des années et personne ne le conteste sérieusement. Une enquête conjointe de l’Association for Financial Professionals et de l’APQC, menée auprès de plus de 430 professionnels du pilotage financier, établit la répartition suivante du temps de travail.
                        </p>

                        {/* FIGURE 3 — Répartition du temps FP&A */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 3. À quoi passe son temps une équipe de pilotage financier</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Répartition du temps déclaré.</p>

                            <div className="space-y-5">
                                {[
                                    { label: 'Collecte et préparation des données', value: 42, tone: 'dark' },
                                    { label: 'Administration des processus', value: 33, tone: 'mid' },
                                    { label: 'Analyse à valeur ajoutée', value: 25, tone: 'green' },
                                ].map((row) => (
                                    <div key={row.label}>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-sm font-medium text-gray-600">{row.label}</span>
                                            <span className={`text-xl font-bold ${row.tone === 'green' ? 'text-[#027333]' : 'text-[#262626]'}`}>{row.value} %</span>
                                        </div>
                                        <div className="w-full bg-white rounded-full h-5 border border-gray-100">
                                            <div
                                                className={`h-full rounded-full ${row.tone === 'green' ? 'bg-[#027333]' : row.tone === 'mid' ? 'bg-[#93BF9E]' : 'bg-[#262626]'}`}
                                                style={{ width: `${row.value}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-8">Source : enquête AFP / APQC auprès de plus de 430 professionnels du pilotage financier</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Trois quarts du temps d’une fonction censée éclairer la décision partent en amont de la décision. Ce n’est pas seulement du gaspillage : c’est un décalage temporel. Quand l’analyse arrive, la période analysée est déjà loin.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            La clôture, en amont, fixe le rythme de tout le reste. Les référentiels de l’APQC, construits sur plus de dix mille organisations, donnent des écarts considérables entre organisations comparables.
                        </p>

                        {/* FIGURE 4 — Délais de clôture */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 4. Délais de clôture : l’écart entre les meilleurs et les autres</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">En jours.</p>

                            <div className="grid md:grid-cols-2 gap-10">
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Clôture mensuelle</div>
                                    <div className="h-48 flex items-end justify-around gap-4">
                                        <div className="flex-1 h-full flex flex-col justify-end items-center">
                                            <div className="text-sm font-bold text-[#027333] mb-2">≤ 5 j</div>
                                            <div className="w-full bg-[#027333] rounded-t-md" style={{ height: '50%' }}></div>
                                            <div className="text-[11px] text-center mt-2 text-gray-500 font-medium">Meilleurs</div>
                                        </div>
                                        <div className="flex-1 h-full flex flex-col justify-end items-center">
                                            <div className="text-sm font-bold text-[#262626] mb-2">6 j</div>
                                            <div className="w-full bg-[#93BF9E] rounded-t-md" style={{ height: '60%' }}></div>
                                            <div className="text-[11px] text-center mt-2 text-gray-500 font-medium">Médiane</div>
                                        </div>
                                        <div className="flex-1 h-full flex flex-col justify-end items-center">
                                            <div className="text-sm font-bold text-[#262626] mb-2">≥ 10 j</div>
                                            <div className="w-full bg-[#262626] rounded-t-md" style={{ height: '100%' }}></div>
                                            <div className="text-[11px] text-center mt-2 text-gray-500 font-medium">Retardataires</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Clôture annuelle</div>
                                    <div className="h-48 flex items-end justify-around gap-4">
                                        <div className="flex-1 h-full flex flex-col justify-end items-center">
                                            <div className="text-sm font-bold text-[#027333] mb-2">≤ 10 j</div>
                                            <div className="w-full bg-[#027333] rounded-t-md" style={{ height: '29%' }}></div>
                                            <div className="text-[11px] text-center mt-2 text-gray-500 font-medium">Meilleurs</div>
                                        </div>
                                        <div className="flex-1 h-full flex flex-col justify-end items-center">
                                            <div className="text-sm font-bold text-[#262626] mb-2">18 j</div>
                                            <div className="w-full bg-[#93BF9E] rounded-t-md" style={{ height: '51%' }}></div>
                                            <div className="text-[11px] text-center mt-2 text-gray-500 font-medium">Médiane</div>
                                        </div>
                                        <div className="flex-1 h-full flex flex-col justify-end items-center">
                                            <div className="text-sm font-bold text-[#262626] mb-2">35 j</div>
                                            <div className="w-full bg-[#262626] rounded-t-md" style={{ height: '100%' }}></div>
                                            <div className="text-[11px] text-center mt-2 text-gray-500 font-medium">Retardataires</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-8">Source : APQC, Open Standards Benchmarking (plus de 10 000 organisations)</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Un facteur deux sur la clôture mensuelle, un facteur trois et demi sur l’annuelle. Ces écarts ne s’expliquent ni par la taille ni par le secteur : ils s’expliquent par le nombre de retraitements manuels entre le système source et l’état final.
                        </p>
                    </section>

                    {/* SECTION 3 — L'erreur classique */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">3. L’erreur classique : automatiser la dernière couche</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            La quasi-totalité des projets d’automatisation du reporting board commencent par la fin : générer les diapositives, assembler le PDF, publier sur le portail des administrateurs. C’est la couche la plus visible, la plus démontrable, et celle qui produit le moins de valeur.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Un reporting board se construit en quatre couches. La règle est simple et rarement respectée : <strong className="text-[#262626]">on ne peut pas automatiser une couche tant que celle du dessous ne l’est pas.</strong>
                        </p>

                        {/* FIGURE 5 — Les 4 couches */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 5. Les quatre couches, et l’ordre dans lequel les traiter</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">L’automatisation se construit de bas en haut. La plupart des projets commencent par le haut.</p>

                            <div className="space-y-3">
                                {[
                                    { n: '04', label: 'Narration et mise en forme', desc: 'Commentaires, diapositives, assemblage du pack.', tag: 'Là où commencent 80 % des projets', bad: true },
                                    { n: '03', label: 'Calcul et agrégation', desc: 'Indicateurs, ratios, comparatifs, consolidation.' },
                                    { n: '02', label: 'Réconciliation', desc: 'Rapprochements, corrections, points d’équilibre entre systèmes.' },
                                    { n: '01', label: 'Collecte et contrat de données', desc: 'Une définition, un propriétaire et une source par indicateur.', tag: 'Là où il faut commencer', good: true },
                                ].map((row) => (
                                    <div
                                        key={row.n}
                                        className={`flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl p-5 ${row.good ? 'bg-[#027333] text-white' : row.bad ? 'bg-white border-2 border-dashed border-gray-300' : 'bg-white border border-gray-100'}`}
                                    >
                                        <span className={`font-mono text-lg font-bold flex-shrink-0 ${row.good ? 'text-white/60' : 'text-gray-300'}`}>{row.n}</span>
                                        <div className="flex-grow">
                                            <div className={`font-bold text-sm ${row.good ? 'text-white' : 'text-[#262626]'}`}>{row.label}</div>
                                            <div className={`text-xs mt-1 leading-relaxed ${row.good ? 'text-white/80' : 'text-gray-500'}`}>{row.desc}</div>
                                        </div>
                                        {row.tag && (
                                            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 ${row.good ? 'bg-white text-[#027333]' : 'bg-[#262626] text-white'}`}>
                                                {row.tag}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Automatiser la couche 4 sans les couches 1 à 3 revient à fabriquer une belle liasse de chiffres non vérifiés. C’est pire que la situation de départ : la mise en forme professionnelle confère aux données une autorité qu’elles n’ont pas gagnée.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Ce diagnostic est confirmé par les données d’enquête. Dans une étude menée fin 2025 auprès de 431 professionnels de la finance, 58 % citent la qualité et la disponibilité des données comme premier frein à leurs processus, et 73 % la placent dans leur trio de tête. Dans le même temps, 70 % des organisations déclarent avoir un mandat de leur direction générale pour adopter l’IA en finance — mais plus de la moitié n’ont qu’une intégration modérée ou limitée entre leurs outils de pilotage et leurs systèmes sources.
                        </p>

                        <blockquote className="border-l-4 border-[#027333] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            Un mandat d’adoption de l’IA posé sur des données non intégrées ne produit pas de la vitesse. Il produit des erreurs plus rapides, mieux présentées, et beaucoup plus difficiles à repérer.
                        </blockquote>
                    </section>

                    {/* SECTION 4 — Le rôle de l'IA */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">4. Où l’IA a sa place, et où elle n’en a aucune</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            C’est le point sur lequel il faut être catégorique, parce qu’il engage la responsabilité des administrateurs. <strong className="text-[#262626]">Un modèle de langage ne doit jamais produire un chiffre destiné au conseil.</strong> Pas « rarement », pas « sous réserve de relecture » : jamais.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Les chiffres viennent de traitements déterministes — des requêtes, des règles de calcul versionnées, une piste d’audit rejouable. Ce qu’un modèle sait très bien faire, en revanche, c’est travailler <em>par-dessus</em> des chiffres déjà vérifiés : détecter les écarts qui méritent un commentaire, rédiger une première version de la narration, reformuler pour un lecteur non financier, résumer une annexe de quarante pages en un paragraphe. La frontière est nette et elle est facile à tenir.
                        </p>

                        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12 shadow-sm">
                            <table className="w-full text-sm text-left min-w-[640px]">
                                <thead className="bg-[#262626] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Tâche</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-[#93BF9E]">À confier à l’IA</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-gray-300">À ne jamais lui confier</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Chiffres</td>
                                        <td className="px-6 py-4 text-gray-600">Les mettre en forme, les commenter</td>
                                        <td className="px-6 py-4 text-gray-600">Les calculer, les estimer, les compléter</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Écarts budgétaires</td>
                                        <td className="px-6 py-4 text-gray-600">Repérer et hiérarchiser ceux qui sortent des seuils</td>
                                        <td className="px-6 py-4 text-gray-600">En inventer la cause sans donnée sous-jacente</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Narration</td>
                                        <td className="px-6 py-4 text-gray-600">Produire une première version à partir des données validées</td>
                                        <td className="px-6 py-4 text-gray-600">Être publiée sans relecture d’un responsable identifié</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Synthèse d’annexes</td>
                                        <td className="px-6 py-4 text-gray-600">Résumer un document long en conservant les renvois</td>
                                        <td className="px-6 py-4 text-gray-600">Remplacer l’annexe : le document source reste la référence</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Prévisions</td>
                                        <td className="px-6 py-4 text-gray-600">Expliciter les hypothèses d’un modèle existant</td>
                                        <td className="px-6 py-4 text-gray-600">Produire la prévision elle-même en langage naturel</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Questions du conseil</td>
                                        <td className="px-6 py-4 text-gray-600">Retrouver la page et la source qui répondent</td>
                                        <td className="px-6 py-4 text-gray-600">Répondre de mémoire, sans citer la source</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex gap-4 items-start bg-[#262626] text-white rounded-2xl p-8 mb-12">
                            <AlertTriangle className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Le test à appliquer avant toute mise en production</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Prenez n’importe quel chiffre du pack généré et demandez sa provenance. Si la réponse n’est pas « telle table, telle règle de calcul, telle version, exécutée à telle date », le chiffre n’est pas publiable devant un conseil. Cette exigence n’a rien de spécifique à l’IA : c’est la même que pour un tableur. La différence est qu’un tableur ne produit pas de phrase convaincante pour masquer une lacune.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Précisons ce que cette ligne ne dit pas. Elle n’interdit pas les modèles statistiques ni l’apprentissage automatique dans la chaîne de calcul : une prévision produite par un modèle documenté, testé et rejouable est parfaitement légitime. Ce qui est proscrit, c’est qu’un chiffre naisse d’une génération de texte — un objet dont, par construction, on ne peut ni rejouer ni auditer la production.
                        </p>
                    </section>

                    {/* SECTION 5 — CSRD */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">5. Le périmètre vient de changer : la CSRD après l’Omnibus</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Une partie de l’inflation des packs venait de la préparation au reporting de durabilité. Le cadre a été substantiellement revu. La directive dite « Omnibus I », adoptée par le Parlement européen en décembre 2025, validée par le Conseil le 24 février 2026, publiée au Journal officiel de l’Union le 26 février et entrée en vigueur le 18 mars 2026, relève fortement les seuils d’application de la CSRD.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Le seuil passe à 1 000 salariés et 450 millions d’euros de chiffre d’affaires net. L’effet sur le périmètre est massif.
                        </p>

                        {/* FIGURE 6 — CSRD périmètre */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 6. Entreprises concernées par la CSRD dans l’Union européenne</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Avant et après la directive Omnibus I.</p>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-gray-500">Avant l’Omnibus</span>
                                        <span className="text-2xl font-bold text-[#262626]">≈ 50 000</span>
                                    </div>
                                    <div className="w-full bg-white rounded-full h-8 border border-gray-100">
                                        <div className="bg-[#262626] h-full rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-[#262626]">Après l’Omnibus</span>
                                        <span className="text-2xl font-bold text-[#027333]">≈ 10 000</span>
                                    </div>
                                    <div className="w-full bg-white rounded-full h-8 border border-gray-100">
                                        <div className="bg-[#027333] h-full rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-[#027333]">− 80 %</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">d’entreprises concernées</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">&lt; 2 000</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">entreprises concernées en France</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">Mars 2027</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">transposition française attendue</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : directive Omnibus I, Journal officiel de l’Union européenne, 26 février 2026</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le calendrier glisse en conséquence : les grandes entreprises non cotées de la deuxième vague ne publieront qu’en 2028, sur l’exercice 2027, au lieu de 2026 ; les PME cotées de la troisième vague en 2029 sur l’exercice 2028.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Deux conclusions opposées et également fausses circulent. La première : « nous sommes sortis du périmètre, le sujet est clos ». Sauf que donneurs d’ordre, banques et investisseurs continuent de réclamer les mêmes données, sans le calendrier réglementaire pour les cadrer. La seconde : « rien ne change, continuons comme prévu ». Sauf qu’une organisation hors périmètre qui maintient un dispositif calibré pour la conformité intégrale dépense pour un besoin qui n’existe plus.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            La bonne lecture est plus ennuyeuse et plus utile : le report est une fenêtre de dix-huit à vingt-quatre mois pour construire la collecte proprement, plutôt que de la bricoler dans l’urgence. Les indicateurs extra-financiers relèvent exactement de la même discipline que les indicateurs financiers — une définition, un propriétaire, une source, une piste d’audit.
                        </p>
                    </section>

                    {/* SECTION 6 — Guide pratique */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">6. La méthode, en cinq étapes</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Voici la séquence que nous appliquons. Elle tient en un trimestre pour un premier cycle, et elle ne commence pas par un achat de logiciel.
                        </p>

                        <div className="space-y-6 mb-12">
                            {[
                                {
                                    icon: <Target className="text-[#027333]" size={20} />,
                                    step: 'Étape 01',
                                    title: 'Mesurer ce qui est réellement lu avant de produire quoi que ce soit',
                                    body: 'Après la prochaine séance, demandez à chaque administrateur quelles pages il a ouvertes et lesquelles ont servi à une décision. La réponse est systématiquement plus courte que ce que tout le monde imagine. C’est votre périmètre cible, et c’est le seul mandat légitime pour supprimer des sections.',
                                },
                                {
                                    icon: <Database className="text-[#027333]" size={20} />,
                                    step: 'Étape 02',
                                    title: 'Écrire le contrat de données avant d’écrire la moindre ligne de code',
                                    body: 'Pour chaque indicateur conservé : une définition écrite, un propriétaire nommé, un système source unique, une fréquence, une règle de calcul. Un tableau d’une trentaine de lignes suffit. Ce document est le livrable le plus important du projet — et le seul qui ne s’achète pas.',
                                },
                                {
                                    icon: <Layers className="text-[#027333]" size={20} />,
                                    step: 'Étape 03',
                                    title: 'Automatiser de bas en haut, une couche à la fois',
                                    body: 'Collecte, puis réconciliation, puis calcul, puis mise en forme. Chaque couche doit tourner seule pendant un cycle complet avant qu’on attaque la suivante. C’est plus lent au démarrage et beaucoup plus rapide au total : une couche automatisée sur des données instables se refait deux fois.',
                                },
                                {
                                    icon: <FileSearch className="text-[#027333]" size={20} />,
                                    step: 'Étape 04',
                                    title: 'Rendre chaque chiffre traçable jusqu’à sa source',
                                    body: 'Depuis le pack, on doit pouvoir remonter à la règle de calcul, à la version de cette règle et à l’extraction qui l’a alimentée. C’est ce qui permet de répondre en séance plutôt qu’au conseil suivant — et ce qui vous protège le jour où un chiffre est contesté.',
                                },
                                {
                                    icon: <MessageSquare className="text-[#027333]" size={20} />,
                                    step: 'Étape 05',
                                    title: 'Ajouter l’IA en dernier, et seulement sur la narration',
                                    body: 'Une fois les quatre couches stables, un modèle peut rédiger la première version des commentaires à partir des chiffres validés, et signaler les écarts qui sortent des seuils. Chaque paragraphe reste attribué à un responsable humain qui l’a relu. L’IA fait gagner des heures de rédaction, jamais un contrôle.',
                                },
                            ].map((s) => (
                                <div key={s.step} className="bg-white rounded-2xl p-8 border border-gray-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                            {s.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{s.step}</span>
                                    </div>
                                    <h4 className="font-bold text-lg text-[#262626] mb-3">{s.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            Sur la forme du pack lui-même, la structure qui fonctionne le mieux sépare ce qui appelle une décision de ce qui documente. Voici la cible que nous proposons — non pas un standard de place, mais une répartition qui tient dans le budget de lecture réel d’un administrateur.
                        </p>

                        {/* FIGURE 7 — Pack cible */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 7. Une structure de pack qui tient dans le temps disponible</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Proposition de répartition, à calibrer selon la taille et le secteur.</p>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Aujourd’hui</div>
                                    <div className="bg-[#262626] rounded-lg h-40 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <div className="text-4xl font-bold">226 p.</div>
                                            <div className="text-xs text-gray-400 mt-2">un bloc indifférencié</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-[#027333] mb-4">Cible</div>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'Décisions à prendre', pages: '10 p.', h: 'h-14', bg: 'bg-[#027333]', text: 'text-white' },
                                            { label: 'Performance et écarts commentés', pages: '15 p.', h: 'h-16', bg: 'bg-[#93BF9E]', text: 'text-[#262626]' },
                                            { label: 'Risques et conformité', pages: '10 p.', h: 'h-12', bg: 'bg-[#025928]', text: 'text-white' },
                                            { label: 'Annexes, consultables à la demande', pages: 'illimité', h: 'h-10', bg: 'bg-white border border-dashed border-gray-300', text: 'text-gray-500' },
                                        ].map((b) => (
                                            <div key={b.label} className={`${b.bg} ${b.h} ${b.text} rounded-lg px-4 flex items-center justify-between`}>
                                                <span className="text-xs font-medium leading-tight">{b.label}</span>
                                                <span className="text-sm font-bold flex-shrink-0 ml-3">{b.pages}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 mt-8 pt-6 border-t border-gray-200 leading-relaxed">
                                Le point essentiel n’est pas le nombre de pages : c’est que les annexes sortent du pack lu. Elles restent disponibles, indexées et interrogeables — mais elles cessent de consommer le budget d’attention du conseil.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-[#262626] mb-6">Cinq erreurs à ne pas commettre</h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Commencer par choisir un outil. La structure du pack et le contrat de données déterminent l’outil, jamais l’inverse.',
                                'Automatiser un indicateur dont la définition n’est pas écrite : vous industrialiserez un désaccord au lieu de le résoudre.',
                                'Conserver « au cas où » les sections que personne n’a ouvertes. Une annexe consultable à la demande remplit la même fonction sans coûter d’attention.',
                                'Laisser un modèle de langage produire, arrondir ou compléter un chiffre — même sur une page de synthèse, même relue.',
                                'Livrer le pack automatisé sans piste d’audit : le premier chiffre contesté en séance annulera dix mois de crédibilité.',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 items-start text-gray-700">
                                    <CheckCircle2 className="text-[#027333] flex-shrink-0 mt-0.5" size={20} />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Le reporting board souffre d’un désalignement simple : il est évalué sur ce qu’il produit, jamais sur ce qu’il permet de décider. Tant que l’indicateur de succès reste « le pack est sorti à temps », l’automatisation ne fera qu’accélérer la production d’un document dont près de la moitié ne sera pas lue.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Changez l’indicateur et tout le projet se réorganise. Si le succès devient « chaque page du pack a servi à une décision ou à un contrôle », alors la première tâche n’est plus technique : c’est de supprimer. L’automatisation vient ensuite, de bas en haut, et devient beaucoup plus simple — il y a moins à automatiser.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Quant à l’IA, elle a une place réelle, mais étroite et clairement bornée : au-dessus des chiffres, jamais à leur place. Un conseil d’administration engage sa responsabilité sur des données. Une phrase bien tournée sur un chiffre inventé reste un chiffre inventé.
                        </p>
                    </section>

                    {/* Sources */}
                    <section className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Sources</h3>
                        <ul className="text-xs text-gray-500 space-y-2 list-disc pl-5">
                            <li>Board Intelligence, enquêtes sur l’état du reporting de conseil — plus de 1 000 administrateurs et professionnels de la gouvernance, près de 700 organisations ; étude complémentaire sur le temps de lecture menée auprès d’une cinquantaine de participants (voir note méthodologique).</li>
                            <li>Association for Financial Professionals &amp; APQC, enquête auprès de plus de 430 professionnels du pilotage financier — répartition du temps de travail.</li>
                            <li>APQC, Open Standards Benchmarking — délais de clôture mensuelle et annuelle, plus de 10 000 organisations.</li>
                            <li>Vena &amp; Benchmarkit, « 2026 FP&amp;A Impact Report » — 431 professionnels de la finance interrogés en octobre 2025.</li>
                            <li>Directive (UE) « Omnibus I », publiée au Journal officiel de l’Union européenne le 26 février 2026, entrée en vigueur le 18 mars 2026 — relèvement des seuils CSRD et report du calendrier.</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="mt-20 bg-[#262626] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Combien de pages de votre pack ont servi à une décision&nbsp;?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Nous auditons votre dernier pack page par page, écrivons le contrat de données des indicateurs qui restent, et automatisons la chaîne de bas en haut. Premier cycle livré en un trimestre.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#027333] text-[#262626] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
                            Faire auditer notre reporting
                        </Link>
                    </div>
                </article>
            </div>
        );
    }

    // -------- CONTENU ARTICLE 99 (CYBERSÉCURITÉ & IA GÉNÉRATIVE) --------
    if (id === '99') {
        return (
            <div className="min-h-screen bg-white">
                {/* Barre de progression */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div className="h-full bg-[#027333] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero */}
                <div className="relative h-[60vh] overflow-hidden bg-[#262626]">
                    <img
                        src="/images/articles/cybersecurite-hero.jpg"
                        alt="Cybersécurité et IA générative : les nouvelles frontières"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/75 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#027333] text-[#262626] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
                                Expertise
                            </span>
                            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                                Cybersécurité et IA générative : les nouvelles frontières
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl">
                                L’IA n’a pas inventé de nouvelles vulnérabilités. Elle a supprimé le coût d’exploitation des anciennes — et créé, au passage, une surface d’attaque que personne n’auditait il y a deux ans.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#027333]" />
                                    <span>31 Juil 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#027333]" />
                                    <span>13 min de lecture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#027333]" />
                                    <span>Fantin Schellekens</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#027333] transition-colors mb-12 group text-sm font-medium">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="lead text-xl md:text-2xl leading-relaxed font-light text-[#262626] mb-8 border-l-4 border-[#027333] pl-6">
                            La plupart des discours sur « l’IA et la cybersécurité » se trompent de sujet. Ils cherchent la nouvelle attaque spectaculaire. Or ce qui a changé n’est pas la nature des attaques : c’est leur économie. Une opération qui demandait une semaine à un attaquant compétent en demande désormais dix minutes à un attaquant médiocre.
                        </p>
                        <p>
                            Trois frontières se déplacent en même temps, et il faut les traiter séparément sous peine de confusion. <strong>La première</strong> est offensive : l’IA industrialise ce qui relevait de l’artisanat — l’usurpation d’identité, le prétexte crédible, le message parfaitement contextualisé. <strong>La deuxième</strong> est nouvelle : vos propres systèmes d’IA sont devenus une cible, avec des classes de vulnérabilités qui n’existaient pas dans vos référentiels il y a trois ans. <strong>La troisième</strong> est défensive : l’IA est aussi, à ce jour, le seul levier dont l’effet sur le coût d’une violation soit mesuré et significatif.
                        </p>
                        <p>
                            Une quatrième frontière, réglementaire, arrive en France : la transposition de NIS2 fera passer le périmètre des entités soumises à obligation de sécurité d’environ 500 opérateurs à près de 15 000 entités.
                        </p>
                        <p>
                            Cet article prend ces quatre mouvements dans l’ordre, avec les chiffres publiés en 2026 — et sépare explicitement ce qui est mesuré de ce qui est estimé.
                        </p>
                    </div>

                    {/* SECTION 1 — L'économie de l'attaque */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">1. Première frontière : l’économie de l’attaque s’est effondrée</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            L’ingénierie sociale reposait historiquement sur un goulot d’étranglement : produire un prétexte crédible coûtait du temps humain. Reconnaître une voix, repérer une faute de français, sentir qu’un message « sonne faux » — ces réflexes défensifs fonctionnaient parce que la contrefaçon de qualité était rare et chère.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Cette barrière est tombée. Trois secondes d’audio public suffisent aujourd’hui à cloner une voix exploitable. Le résultat n’est pas une attaque nouvelle : c’est la même fraude au président, produite à l’échelle industrielle et personnalisée à chaque cible.
                        </p>

                        {/* FIGURE 1 — Pertes deepfake US */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 1. Pertes déclarées liées aux deepfakes aux États-Unis</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">En millions de dollars. Estimations agrégées par les trackers du secteur.</p>

                            <div className="h-64 flex items-end justify-center gap-12 md:gap-24 px-2">
                                <div className="w-28 md:w-44 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#262626] mb-2">360 M$</div>
                                    <div className="w-full bg-[#93BF9E] rounded-t-md" style={{ height: '33%' }}></div>
                                    <div className="text-sm text-center mt-3 text-gray-600 font-bold">2024</div>
                                </div>
                                <div className="w-28 md:w-44 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#027333] mb-2">1 100 M$</div>
                                    <div className="w-full bg-[#027333] rounded-t-md" style={{ height: '100%' }}></div>
                                    <div className="text-sm text-center mt-3 text-gray-600 font-bold">2025</div>
                                </div>
                            </div>
                            <div className="text-center mt-8 pt-6 border-t border-gray-200">
                                <span className="inline-block bg-[#262626] text-white text-sm font-bold px-4 py-2 rounded-full">× 3 en un an</span>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            L’ordre de grandeur cumulé avoisine 3,7 milliards de dollars de pertes déclarées, dont près de 90 % concentrés sur 2025 et le premier semestre 2026. Le cas le plus documenté reste celui du groupe d’ingénierie Arup : en janvier 2024, un collaborateur de la filiale de Hong Kong effectue quinze virements pour un total de 25 millions de dollars, après une visioconférence où <em>tous</em> les autres participants — dont le directeur financier — étaient des deepfakes.
                        </p>

                        <div className="flex gap-4 items-start bg-[#F2F1DF] rounded-2xl p-8 mb-12">
                            <Scale className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-[#262626]">Note méthodologique</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Les agrégats de pertes liées aux deepfakes proviennent de trackers privés dont les méthodologies diffèrent et ne sont pas toujours auditables. À l’inverse, les chiffres d’IBM, de l’ANSSI et de l’OWASP cités plus bas sont issus d’études primaires au périmètre déclaré. Nous distinguons les deux dans tout l’article : la tendance des deepfakes est solide, la précision de ses montants ne l’est pas.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Ce déplacement a une conséquence opérationnelle immédiate : <strong className="text-[#262626]">tous vos contrôles qui reposent sur la reconnaissance humaine sont désormais caducs.</strong> « J’ai reconnu sa voix », « c’est bien son visage à l’écran », « le mail vient de son adresse » — ces trois preuves ne prouvent plus rien. Elles doivent être remplacées par des contrôles qui ne dépendent pas de la perception : un canal de rappel indépendant, un secret partagé hors bande, un double seuil de validation sur les virements.
                        </p>
                    </section>

                    {/* SECTION 2 — L'IA comme cible */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">2. Deuxième frontière : vos systèmes d’IA sont devenus la cible</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            C’est le point le moins compris et le plus coûteux. Déployer un assistant interne, un agent de support ou un copilote métier revient à exposer une nouvelle surface d’attaque, avec des vulnérabilités qui ne figurent dans aucun de vos référentiels historiques.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            L’OWASP — la référence en matière de classification des vulnérabilités applicatives — publie depuis 2023 un Top 10 dédié aux applications à base de modèles de langage. Dans l’édition 2025, l’injection de prompt occupe la première place pour la deuxième fois consécutive.
                        </p>

                        {/* FIGURE 2 — OWASP Top 10 LLM */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 2. OWASP Top 10 pour les applications à base de LLM (édition 2025)</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Classement des risques de sécurité propres aux applications d’IA générative.</p>

                            <div className="space-y-2">
                                {[
                                    { code: 'LLM01', label: 'Injection de prompt', desc: 'Le modèle traite instructions et données dans le même canal : une entrée bien construite devient une instruction.', top: true },
                                    { code: 'LLM02', label: 'Divulgation d’informations sensibles', desc: 'Fuite de données confidentielles présentes dans le contexte ou l’entraînement.' },
                                    { code: 'LLM03', label: 'Chaîne d’approvisionnement', desc: 'Modèles, jeux de données et dépendances tiers non vérifiés.' },
                                    { code: 'LLM04', label: 'Empoisonnement des données et du modèle', desc: 'Altération volontaire des données d’entraînement ou de fine-tuning.' },
                                    { code: 'LLM05', label: 'Traitement incorrect des sorties', desc: 'Sortie du modèle consommée sans validation par un système en aval.' },
                                    { code: 'LLM06', label: 'Autonomie excessive', desc: 'L’agent dispose de permissions supérieures à ce que sa tâche exige.' },
                                    { code: 'LLM07', label: 'Fuite du prompt système', desc: 'Exposition des instructions et garde-fous internes.' },
                                    { code: 'LLM08', label: 'Faiblesses des vecteurs et embeddings', desc: 'Attaques sur les bases vectorielles alimentant le RAG.' },
                                    { code: 'LLM09', label: 'Désinformation', desc: 'Sorties erronées mais plausibles, intégrées sans contrôle dans une décision.' },
                                    { code: 'LLM10', label: 'Consommation non bornée', desc: 'Épuisement de ressources ou explosion de coûts par sollicitation abusive.' },
                                ].map((row) => (
                                    <div
                                        key={row.code}
                                        className={`flex gap-4 items-start rounded-xl p-4 ${row.top ? 'bg-[#027333] text-white' : 'bg-white border border-gray-100'}`}
                                    >
                                        <span className={`font-mono text-xs font-bold pt-1 flex-shrink-0 ${row.top ? 'text-white/70' : 'text-gray-400'}`}>{row.code}</span>
                                        <div>
                                            <div className={`font-bold text-sm ${row.top ? 'text-white' : 'text-[#262626]'}`}>{row.label}</div>
                                            <div className={`text-xs mt-1 leading-relaxed ${row.top ? 'text-white/80' : 'text-gray-500'}`}>{row.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : OWASP Top 10 for LLM Applications, édition 2025</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            L’injection de prompt mérite qu’on s’y arrête, car elle n’est pas un bug à corriger mais une propriété structurelle. Un modèle de langage reçoit les instructions et les données <em>dans le même canal</em>, sans séparation. Quand votre agent lit un e-mail, un ticket ou une page web, il ne dispose d’aucun moyen fiable de distinguer « voici du contenu à analyser » de « voici un ordre à exécuter ». C’est exactement le problème de l’injection SQL — sauf qu’il n’existe pas encore d’équivalent robuste des requêtes paramétrées.
                        </p>

                        <div className="flex gap-4 items-start bg-[#262626] text-white rounded-2xl p-8 mb-12">
                            <Bot className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Le risque se multiplie avec l’autonomie</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Un chatbot victime d’une injection dit une bêtise. Un agent doté d’accès en écriture à votre CRM, votre messagerie ou votre système de paiement, victime de la même injection, exécute une action. L’OWASP a d’ailleurs publié fin 2025 un Top 10 distinct pour les applications agentiques, où figurent le détournement d’objectif, l’abus d’outils et l’empoisonnement de mémoire. Avant de donner à un agent le droit d’agir, il faut avoir répondu à une question simple : quel est le pire qu’il puisse faire si quelqu’un lui donne un ordre à votre place ?
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            Ces risques ne sont plus théoriques. Le rapport <em>Cost of a Data Breach 2026</em> d’IBM, qui porte sur 602 organisations victimes d’une violation entre mars 2025 et février 2026, montre que plus de 20 % d’entre elles ont subi une attaque visant directement leurs modèles ou applications d’IA. Les deux causes principales sont d’une banalité éclairante.
                        </p>

                        {/* FIGURE 3 — Causes et gouvernance */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 3. Attaques sur les systèmes d’IA : causes et angles morts de gouvernance</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Organisations victimes d’une violation de données, mars 2025 – février 2026.</p>

                            <div className="space-y-3 mb-8">
                                {[
                                    { label: 'Organisations attaquées sur l’IA n’ayant pas maîtrisé les accès', value: 92, tone: 'dark' },
                                    { label: 'Organisations sans gouvernance pour encadrer l’IA non déclarée', value: 68, tone: 'dark' },
                                    { label: 'Organisations limitant réellement l’accès à leurs systèmes d’IA', value: 40, tone: 'green' },
                                    { label: 'API, applications ou plug-ins compromis (cause de l’attaque)', value: 27, tone: 'mid' },
                                    { label: 'Mauvaises configurations cloud (cause de l’attaque)', value: 27, tone: 'mid' },
                                ].map((row) => (
                                    <div key={row.label} className="grid grid-cols-12 gap-3 items-center">
                                        <div className="col-span-6 text-right text-xs md:text-sm font-medium text-gray-600 leading-tight">{row.label}</div>
                                        <div className="col-span-6 flex items-center">
                                            <div
                                                className={`h-6 rounded-sm ${row.tone === 'green' ? 'bg-[#027333]' : row.tone === 'mid' ? 'bg-[#93BF9E]' : 'bg-[#262626]'}`}
                                                style={{ width: `${row.value}%` }}
                                            ></div>
                                            <span className="ml-2 text-xs font-bold text-gray-600">{row.value} %</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-right text-xs text-gray-400">Source : IBM, Cost of a Data Breach Report 2026 (602 organisations, 16 pays)</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Ce 92 % dit l’essentiel. La quasi-totalité des organisations attaquées sur leur IA n’avait pas de contrôle d’accès sérieux autour de ces systèmes. On a branché un modèle sur des données de production sans lui appliquer la moindre des règles qu’on impose depuis vingt ans à n’importe quelle base.
                        </p>
                    </section>

                    {/* SECTION 3 — Shadow AI */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">3. Le point aveugle : l’IA que vous n’avez pas déployée</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le risque le plus rapide en progression ne vient pas des systèmes que vous avez mis en production. Il vient de ceux que vos équipes utilisent sans vous le dire — comptes personnels sur des services grand public, extensions de navigateur, assistants intégrés à des outils SaaS activés par défaut.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            La part des incidents de sécurité impliquant cette « IA de l’ombre » a plus que doublé en un an.
                        </p>

                        {/* FIGURE 4 — Shadow AI */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 4. Part des incidents de sécurité impliquant de l’IA non déclarée</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Évolution sur un an.</p>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-gray-500">Rapport 2025</span>
                                        <span className="text-2xl font-bold text-[#93BF9E]">20 %</span>
                                    </div>
                                    <div className="w-full bg-white rounded-full h-6 border border-gray-100">
                                        <div className="bg-[#93BF9E] h-full rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm font-bold text-[#262626]">Rapport 2026</span>
                                        <span className="text-2xl font-bold text-[#027333]">43 %</span>
                                    </div>
                                    <div className="w-full bg-white rounded-full h-6 border border-gray-100">
                                        <div className="bg-[#027333] h-full rounded-full" style={{ width: '43%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-8">Source : IBM, Cost of a Data Breach Report 2026</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Plus de deux tiers des organisations reconnaissent n’avoir aucun processus de gouvernance pour encadrer ce phénomène. Ce n’est pas un problème de discipline des salariés : c’est un problème d’offre interne. Une équipe qui n’a pas d’outil validé, rapide et utile utilisera l’outil grand public — et y collera, dans le presse-papiers, exactement ce que votre politique de sécurité interdit d’exporter.
                        </p>
                        <blockquote className="border-l-4 border-[#027333] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            Interdire l’IA générative sans proposer d’alternative interne ne réduit pas le risque. Cela le rend simplement invisible : l’usage se poursuit, mais hors de tout journal, de tout contrôle et de toute possibilité d’audit.
                        </blockquote>
                    </section>

                    {/* SECTION 4 — Le coût */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">4. Ce que ça coûte, et ce que la défense rapporte</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Le coût moyen mondial d’une violation de données atteint 4,99 millions de dollars en 2026, en hausse de 12 % sur un an. Une violation sur quatre implique désormais l’IA côté attaquant, et ces violations-là coûtent environ un million de dollars de plus que la moyenne.
                        </p>

                        {/* FIGURE 5 — Coût des violations */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 5. Coût moyen d’une violation de données en 2026</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">En millions de dollars.</p>

                            <div className="h-64 flex items-end justify-center gap-6 md:gap-16 px-2">
                                <div className="w-24 md:w-40 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#262626] mb-2">4,99 M$</div>
                                    <div className="w-full bg-[#93BF9E] rounded-t-md" style={{ height: '79%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Moyenne<br />mondiale</div>
                                </div>
                                <div className="w-24 md:w-40 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#027333] mb-2">6,00 M$</div>
                                    <div className="w-full bg-[#027333] rounded-t-md" style={{ height: '95%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Violation<br />assistée par IA</div>
                                </div>
                                <div className="w-24 md:w-40 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#262626] mb-2">6,30 M$</div>
                                    <div className="w-full bg-[#262626] rounded-t-md" style={{ height: '100%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Services<br />financiers</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : IBM, Cost of a Data Breach Report 2026</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            La contrepartie est le seul chiffre vraiment encourageant de tout le rapport. Les organisations qui utilisent massivement l’IA et l’automatisation dans leurs opérations de sécurité réduisent le coût moyen d’une violation de près de deux millions de dollars, et raccourcissent le cycle de vie de l’incident de 65 jours.
                        </p>

                        {/* FIGURE 6 — Effet de la défense augmentée */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 6. L’effet mesuré de la défense augmentée</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Organisations utilisant massivement l’IA et l’automatisation en sécurité, comparées à celles qui ne les utilisent pas.</p>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-xl p-6 border border-gray-100">
                                    <div className="text-4xl font-bold text-[#027333] mb-2">−1,93 M$</div>
                                    <div className="text-sm text-gray-600 leading-snug">sur le coût moyen d’une violation</div>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-gray-100">
                                    <div className="text-4xl font-bold text-[#027333] mb-2">−65 j</div>
                                    <div className="text-sm text-gray-600 leading-snug">sur le cycle de vie complet de l’incident</div>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-gray-100">
                                    <div className="text-4xl font-bold text-[#027333] mb-2">−51 j</div>
                                    <div className="text-sm text-gray-600 leading-snug">sur la seule détection : 232 jours ramenés à 181</div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm font-bold text-[#262626] mb-4">Mais l’adoption défensive reste très partielle :</p>
                                <div className="space-y-3">
                                    {[
                                        { label: 'Appliquent l’IA sur tout le cycle de sécurité', value: 36 },
                                        { label: 'Utilisent des agents pour la chasse aux menaces', value: 50 },
                                        { label: 'Utilisent des agents pour la gestion des vulnérabilités', value: 18 },
                                    ].map((row) => (
                                        <div key={row.label} className="grid grid-cols-12 gap-3 items-center">
                                            <div className="col-span-6 text-right text-xs md:text-sm font-medium text-gray-600 leading-tight">{row.label}</div>
                                            <div className="col-span-6 flex items-center">
                                                <div className="h-5 rounded-sm bg-[#262626]" style={{ width: `${row.value}%` }}></div>
                                                <span className="ml-2 text-xs font-bold text-gray-600">{row.value} %</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : IBM, Cost of a Data Breach Report 2026</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le déséquilibre saute aux yeux : la moitié des organisations déploient des agents pour <em>chasser</em> les menaces, moins d’une sur cinq pour <em>réduire la surface</em> qui les rend possibles. C’est l’équivalent d’investir dans des caméras de surveillance en laissant les portes ouvertes. La détection est visible et valorisante ; la gestion des vulnérabilités est ingrate et invisible. Les budgets suivent la visibilité, pas le risque.
                        </p>
                    </section>

                    {/* SECTION 5 — France */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">5. Où en est la France</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Le Panorama de la cybermenace 2025 de l’ANSSI donne la mesure locale : 3 586 événements de sécurité traités, 2 209 signalements et 1 366 incidents caractérisés. Le volume d’incidents reste stable par rapport à 2024, mais très supérieur à 2023 (1 112) et 2022 (831). La répartition sectorielle mérite d’être regardée de près.
                        </p>

                        {/* FIGURE 7 — ANSSI */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 7. Secteurs les plus touchés en France</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Répartition des 1 366 incidents traités par l’ANSSI en 2025.</p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { label: 'Éducation et recherche', value: 34 },
                                    { label: 'Ministères et collectivités territoriales', value: 24 },
                                    { label: 'Santé', value: 10 },
                                    { label: 'Télécommunications', value: 9 },
                                ].map((row, idx) => (
                                    <div key={row.label} className="grid grid-cols-12 gap-3 items-center">
                                        <div className="col-span-5 text-right text-xs md:text-sm font-medium text-gray-600 leading-tight">{row.label}</div>
                                        <div className="col-span-7 flex items-center">
                                            <div
                                                className="h-7 rounded-sm"
                                                style={{ width: `${row.value * 2.5}%`, backgroundColor: idx === 0 ? '#027333' : idx === 1 ? '#025928' : '#93BF9E' }}
                                            ></div>
                                            <span className="ml-2 text-sm font-bold text-[#262626]">{row.value} %</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">3 586</div>
                                    <div className="text-xs text-gray-500 mt-1">événements traités</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">2 209</div>
                                    <div className="text-xs text-gray-500 mt-1">signalements reçus</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#027333]">1 366</div>
                                    <div className="text-xs text-gray-500 mt-1">incidents caractérisés</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : ANSSI, Panorama de la cybermenace 2025</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-10">
                            À cette pression opérationnelle s’ajoute un changement de régime réglementaire. La directive NIS2, transposée en droit français par la loi dite « Résilience », étend massivement le périmètre : d’environ 500 opérateurs sous NIS1 à près de 15 000 entités réparties dans 18 secteurs. Les sanctions peuvent atteindre 10 millions d’euros ou 2 % du chiffre d’affaires mondial pour une entité essentielle.
                        </p>

                        {/* FIGURE 8 — Timeline NIS2 */}
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 8. NIS2 en France : où en est-on</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Séquence de mise en œuvre attendue.</p>

                            <div className="relative">
                                <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-200 hidden md:block"></div>
                                <div className="grid md:grid-cols-4 gap-8 relative">
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#93BF9E] border-4 border-gray-50 mb-4 flex items-center justify-center">
                                            <CheckCircle2 size={14} className="text-[#262626]" />
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mars 2026</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            L’ANSSI publie le Référentiel Cyber France (ReCyF) : 20 objectifs de sécurité pour les entités essentielles, 15 pour les entités importantes.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#027333] border-4 border-gray-50 mb-4"></div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-[#027333] mb-2">Fin 2026</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Enregistrement des entités concernées auprès de l’ANSSI, une fois la loi Résilience promulguée.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#025928] border-4 border-gray-50 mb-4"></div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">2027</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Premiers contrôles sur le respect des objectifs de sécurité.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#262626] border-4 border-gray-50 mb-4"></div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">≈ 2028</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Régime de sanctions pleinement applicable : jusqu’à 10 M€ ou 2 % du CA mondial.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-8">Sources : ANSSI ; calendrier de transposition de la loi Résilience (au 31 juillet 2026)</p>
                        </div>

                        <div className="flex gap-4 items-start bg-[#F2F1DF] rounded-2xl p-8 mb-4">
                            <AlertTriangle className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-[#262626]">Le piège du calendrier</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    La transposition française a pris du retard et la date de promulgation reste incertaine à la date de publication de cet article. Beaucoup d’organisations en concluent qu’elles ont le temps. C’est une lecture dangereuse : les mesures attendues — inventaire des actifs, gestion des accès, journalisation, plan de réponse, sécurisation de la chaîne d’approvisionnement — demandent entre douze et vingt-quatre mois de travail réel. Ce sont par ailleurs exactement les mesures qui protègent des attaques décrites plus haut, indépendamment de toute obligation légale.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 6 — Tableau */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">6. Ce qui change dans les contrôles</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            La plupart des contrôles restent valides. Ce sont ceux qui reposent sur le jugement humain d’authenticité qui s’effondrent, et ceux qui n’existaient pas parce que la surface n’existait pas qui doivent être créés.
                        </p>

                        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12 shadow-sm">
                            <table className="w-full text-sm text-left min-w-[680px]">
                                <thead className="bg-[#262626] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Objet</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-gray-300">Contrôle d’hier</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-[#93BF9E]">Contrôle à mettre en place</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Identité d’un interlocuteur</td>
                                        <td className="px-6 py-4 text-gray-600">Reconnaissance de la voix ou du visage</td>
                                        <td className="px-6 py-4 text-gray-600">Rappel sur un canal indépendant, secret partagé hors bande</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Virement exceptionnel</td>
                                        <td className="px-6 py-4 text-gray-600">Validation hiérarchique sur instruction orale</td>
                                        <td className="px-6 py-4 text-gray-600">Double validation asynchrone, délai plancher, seuil indépendant du demandeur</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Détection du phishing</td>
                                        <td className="px-6 py-4 text-gray-600">Sensibilisation aux fautes et incohérences</td>
                                        <td className="px-6 py-4 text-gray-600">Authentification forte résistante au phishing, filtrage côté protocole</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Entrées d’un système d’IA</td>
                                        <td className="px-6 py-4 text-gray-600">Inexistant</td>
                                        <td className="px-6 py-4 text-gray-600">Traitement de tout contenu externe comme non fiable, cloisonnement instructions / données</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Permissions d’un agent</td>
                                        <td className="px-6 py-4 text-gray-600">Inexistant</td>
                                        <td className="px-6 py-4 text-gray-600">Moindre privilège, actions sensibles sous validation humaine, journalisation exhaustive</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Usage de l’IA par les équipes</td>
                                        <td className="px-6 py-4 text-gray-600">Note de service d’interdiction</td>
                                        <td className="px-6 py-4 text-gray-600">Alternative interne utilisable, inventaire des usages, filtrage sortant</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Sorties d’un modèle</td>
                                        <td className="px-6 py-4 text-gray-600">Inexistant</td>
                                        <td className="px-6 py-4 text-gray-600">Validation avant consommation par un système en aval, jamais d’exécution directe</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 7 — Par où commencer */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">7. Par où commencer</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Aucune de ces quatre étapes ne suppose d’acheter une plateforme. Elles supposent de savoir ce que vous exposez.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <Radar className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 01</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Inventorier l’IA réellement utilisée</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Pas celle du plan stratégique : celle des journaux du proxy et des dépenses sur carte bancaire. Tant que la liste n’est pas écrite, aucune politique n’est applicable.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <KeyRound className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 02</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Traiter vos modèles comme des bases de données</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Contrôle d’accès nominatif, moindre privilège, rotation des secrets, journalisation des requêtes. Le fameux 92 % se règle avec des pratiques vieilles de vingt ans, appliquées à un objet neuf.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <Network className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 03</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Sortir la validation d’identité du canal attaqué</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Toute demande sensible arrivée par voix, visio ou message doit être confirmée par un canal différent, sur un annuaire interne — jamais sur le numéro fourni par le demandeur.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 04</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Borner l’autonomie avant de l’accorder</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Pour chaque agent : périmètre d’outils explicite, actions irréversibles sous validation humaine, budget d’exécution plafonné, et une trace rejouable de chaque décision.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#262626] mb-6">Cinq mesures applicables ce trimestre</h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Instaurer un mot de passe verbal partagé entre la direction générale et la direction financière, pour toute demande de virement hors circuit habituel.',
                                'Imposer un délai plancher incompressible entre la demande et l’exécution d’un virement exceptionnel — la fraude au président repose sur l’urgence.',
                                'Déployer une authentification résistante au phishing (clés matérielles ou passkeys) sur les comptes à privilèges, avant de la généraliser.',
                                'Publier une liste blanche d’outils d’IA validés et la rendre plus pratique que les alternatives grand public, sinon elle sera contournée.',
                                'Passer en revue les permissions de chaque agent ou intégration IA déjà en production : la question n’est pas ce qu’il fait, mais ce qu’il pourrait faire.',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 items-start text-gray-700">
                                    <CheckCircle2 className="text-[#027333] flex-shrink-0 mt-0.5" size={20} />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            La formule « l’IA change tout en cybersécurité » est à la fois vraie et inutile. Ce qu’elle change précisément, c’est le rapport entre le coût de l’attaque et le coût de la défense. Produire une contrefaçon crédible ne coûte presque plus rien ; vérifier une identité coûte toujours le même effort humain. Tant que cet écart reste ouvert, chaque contrôle fondé sur la perception se dégrade mécaniquement.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            La bonne nouvelle est que le rééquilibrage est documenté et chiffré : près de deux millions de dollars et 65 jours d’écart entre une organisation qui a outillé sa défense et une qui ne l’a pas fait. Le problème n’est donc pas de savoir si l’investissement se justifie — la réponse est publiée — mais de constater que seules 36 % des organisations l’ont fait sur l’ensemble du cycle.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Pour les entreprises françaises, l’échéance NIS2 transforme cet arbitrage en obligation. Autant s’en servir : les mesures qu’elle impose sont exactement celles qui referment les angles morts décrits dans cet article. La conformité, pour une fois, va dans le même sens que la sécurité réelle.
                        </p>
                    </section>

                    {/* Sources */}
                    <section className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Sources</h3>
                        <ul className="text-xs text-gray-500 space-y-2 list-disc pl-5">
                            <li>IBM, « Cost of a Data Breach Report 2026 » — 602 organisations victimes d’une violation entre mars 2025 et février 2026, 16 pays.</li>
                            <li>ANSSI, « Panorama de la cybermenace 2025 » (CERT-FR) — événements, signalements et incidents traités en France.</li>
                            <li>OWASP, « Top 10 for LLM Applications », édition 2025, et « Top 10 for Agentic Applications », annoncé fin 2025.</li>
                            <li>ANSSI, Référentiel Cyber France (ReCyF), publié en mars 2026 ; calendrier de transposition de la directive NIS2 par la loi Résilience.</li>
                            <li>Agrégats de pertes liées aux deepfakes : trackers privés du secteur, méthodologies variables (voir note méthodologique).</li>
                            <li>Cas Arup, Hong Kong, janvier 2024 — 25 M$ détournés via une visioconférence intégralement falsifiée.</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="mt-20 bg-[#262626] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Savez-vous ce que vos agents IA ont le droit de faire&nbsp;?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Nous inventorions vos usages d’IA réels, cartographions les permissions de vos intégrations et vous remettons la liste des actions qu’un attaquant pourrait déclencher à votre place.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#027333] text-[#262626] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
                            Demander un audit d’exposition
                        </Link>
                    </div>
                </article>
            </div>
        );
    }

    // -------- CONTENU ARTICLE 3 (IA FINANCIÈRE / AUDIT) --------
    if (id === '3') {
        return (
            <div className="min-h-screen bg-white">
                {/* Barre de progression */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div className="h-full bg-[#027333] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero */}
                <div className="relative h-[60vh] overflow-hidden bg-[#262626]">
                    <img
                        src="/images/articles/audit-financier-hero.jpg"
                        alt="IA financière : l’audit manuel devient un risque majeur"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-[#262626]/75 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#027333] text-[#262626] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
                                Finance
                            </span>
                            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                                IA Financière : pourquoi l’audit manuel devient un risque majeur
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-3xl">
                                Tant que la donnée était coûteuse à lire, échantillonner était une méthode. Depuis qu’elle est exhaustive et structurée, c’est devenu un choix de ne pas regarder.
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#027333]" />
                                    <span>28 Juil 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#027333]" />
                                    <span>12 min de lecture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#027333]" />
                                    <span>Fantin Schellekens</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#027333] transition-colors mb-12 group text-sm font-medium">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="lead text-xl md:text-2xl leading-relaxed font-light text-[#262626] mb-8 border-l-4 border-[#027333] pl-6">
                            Depuis un demi-siècle, l’audit financier repose sur un compromis parfaitement rationnel : on ne peut pas tout vérifier, donc on vérifie un échantillon et on extrapole. Ce compromis avait une justification technique — le coût de la lecture. Ce coût vient de s’effondrer. Et ce qui était une méthode se transforme, mécaniquement, en angle mort.
                        </p>
                        <p>
                            Deux mouvements se croisent en 2026, et c’est leur croisement qui crée le risque. D’un côté, la fraude change d’échelle : générer une fausse facture crédible, un faux contrat ou une identité de fournisseur ne demande plus ni compétence ni temps. De l’autre, la donnée financière devient intégralement structurée et lisible par machine — en France, la réforme de la facturation électronique impose la bascule dès le 1<sup>er</sup> septembre 2026.
                        </p>
                        <p>
                            Autrement dit : la surface d’attaque s’industrialise pendant que les moyens de la couvrir deviennent enfin disponibles. Une organisation qui continue de contrôler 25 écritures sur 100 000 ne fait plus un arbitrage coût/bénéfice. Elle assume une exposition qu’elle ne mesure pas.
                        </p>
                        <p>
                            Cet article ne plaide pas pour « mettre de l’IA dans la finance ». Il montre, chiffres à l’appui, pourquoi la question n’est plus <em>si</em> l’audit doit passer à l’exhaustif, mais ce que coûte chaque trimestre de retard.
                        </p>
                    </div>

                    {/* SECTION 1 — L'angle mort */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">1. Le problème n’est pas la lenteur, c’est l’angle mort</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            On reproche souvent à l’audit manuel d’être lent. C’est vrai, mais secondaire. Le vrai problème est structurel : <strong className="text-[#262626]">la taille d’un échantillon d’audit ne croît pas avec la population testée.</strong> Un test d’attributs porte typiquement sur quelques dizaines d’éléments, que la population compte mille lignes ou dix millions. Statistiquement, c’est défendable pour estimer un taux d’erreur moyen. Pour détecter un événement rare — et une fraude est, par construction, un événement rare et volontairement dissimulé — c’est presque inopérant.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            La conséquence est contre-intuitive : plus votre entreprise croît, plus votre couverture de contrôle se dégrade, à effort d’audit constant.
                        </p>

                        {/* FIGURE 1 — Grille de couverture */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 1. Ce qu’un échantillon d’audit regarde réellement</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">
                                1 000 écritures comptables. En vert, les 25 écritures testées par un échantillon d’audit classique.
                            </p>

                            <div className="grid grid-cols-[repeat(50,minmax(0,1fr))] gap-[2px] mb-6">
                                {Array.from({ length: 1000 }).map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block w-full aspect-square rounded-[1px] ${i % 40 === 7 ? 'bg-[#027333]' : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                                <div>
                                    <div className="text-3xl font-bold text-[#027333]">2,5 %</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">de couverture sur 1 000 écritures</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">0,025 %</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">le même échantillon sur 100 000 écritures</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#262626]">100 %</div>
                                    <div className="text-xs text-gray-500 mt-1 leading-snug">couverture d’un test rejoué par script sur la population entière</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Ce trou de couverture a un prix, et il est documenté. L’édition 2026 du rapport de l’ACFE (<em>Occupational Fraud: A Report to the Nations</em>), qui analyse 2 402 cas réels de fraude professionnelle, établit une corrélation nette entre <strong className="text-[#262626]">la durée pendant laquelle une fraude reste invisible</strong> et son coût final. La durée médiane avant détection est de 12 mois.
                        </p>

                        {/* FIGURE 2 — Perte médiane / durée */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 2. Plus une fraude dure, plus elle coûte cher</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Perte médiane par cas, en dollars, selon la durée du schéma avant détection.</p>

                            <div className="h-72 flex items-end justify-center gap-6 md:gap-16 px-2">
                                <div className="w-24 md:w-36 h-full flex flex-col justify-end items-center">
                                    <div className="text-sm font-bold text-[#262626] mb-2">40 000 $</div>
                                    <div className="w-full bg-[#93BF9E] rounded-t-md" style={{ height: '3.6%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Détectée<br />en moins de 6 mois</div>
                                </div>
                                <div className="w-24 md:w-36 h-full flex flex-col justify-end items-center">
                                    <div className="text-sm font-bold text-[#262626] mb-2">104 000 $</div>
                                    <div className="w-full bg-[#027333] rounded-t-md" style={{ height: '9.5%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Cas médian<br />(12 mois)</div>
                                </div>
                                <div className="w-24 md:w-36 h-full flex flex-col justify-end items-center">
                                    <div className="text-sm font-bold text-[#262626] mb-2">1 100 000 $</div>
                                    <div className="w-full bg-[#262626] rounded-t-md" style={{ height: '100%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Détectée<br />après plus de 5 ans</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : ACFE, Occupational Fraud 2026 — A Report to the Nations (2 402 cas)</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le facteur entre une détection rapide et une détection tardive est de <strong className="text-[#262626]">27</strong>. Ce n’est pas un écart d’efficacité, c’est un écart de nature : dans le premier cas on corrige un incident, dans le second on absorbe une perte structurelle. Et le rapport ajoute une donnée qui devrait retenir l’attention de tout comité d’audit : <strong className="text-[#262626]">plus de la moitié des cas analysés impliquent soit une absence de contrôle interne, soit un contournement des contrôles existants.</strong>
                        </p>

                        <div className="flex gap-4 items-start bg-[#262626] text-white rounded-2xl p-8 mb-12">
                            <AlertTriangle className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2">Le contournement ne se voit pas dans un échantillon</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Un contrôle contourné laisse une trace : une séquence inhabituelle, une écriture passée hors horaire, un fournisseur créé et payé dans la même semaine, un montant juste sous un seuil de validation. Ces signaux sont invisibles sur 25 lignes tirées au hasard. Ils sautent aux yeux sur 100 % de la population.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 2 — La fraude a changé d'échelle */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">2. La fraude a changé d’échelle, pas les contrôles</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Une enquête conduite au quatrième trimestre 2025 par l’IIA (Institute of Internal Auditors) et AuditBoard auprès de <strong className="text-[#262626]">373 responsables d’audit interne</strong> donne la mesure du décalage. 27 % d’entre eux considèrent la fraude assistée par IA comme un risque élevé, 58 % comme un risque modéré. Mais <strong className="text-[#262626]">moins de 40 % estiment leur fonction correctement équipée pour la détecter.</strong>
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Le détail des préoccupations est révélateur : le deuxième risque cité, juste derrière le phishing, concerne directement le cœur du métier comptable — les factures et documents financiers fabriqués.
                        </p>

                        {/* FIGURE 3 — Fraudes assistées par IA */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 3. Les fraudes assistées par IA qui inquiètent les auditeurs</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Part des responsables d’audit interne citant chaque risque (plusieurs réponses possibles).</p>

                            <div className="space-y-3">
                                {[
                                    { label: 'Phishing généré par IA', value: 88 },
                                    { label: 'Factures et documents financiers fabriqués', value: 65, highlight: true },
                                    { label: 'Ingénierie sociale automatisée', value: 58 },
                                    { label: 'Deepfakes audio et vidéo', value: 45 },
                                    { label: 'Insertion de code malveillant', value: 41 },
                                    { label: 'Faux contrats et documents juridiques', value: 29 },
                                    { label: 'Fausses candidatures', value: 28 },
                                    { label: 'Identités synthétiques', value: 27 },
                                ].map((row) => (
                                    <div key={row.label} className="grid grid-cols-12 gap-3 items-center">
                                        <div className={`col-span-5 text-right text-xs md:text-sm leading-tight ${row.highlight ? 'font-bold text-[#262626]' : 'font-medium text-gray-600'}`}>
                                            {row.label}
                                        </div>
                                        <div className="col-span-7 flex items-center">
                                            <div
                                                className={`h-6 rounded-sm ${row.highlight ? 'bg-[#027333]' : 'bg-[#262626]/70'}`}
                                                style={{ width: `${row.value}%` }}
                                            ></div>
                                            <span className={`ml-2 text-xs font-bold ${row.highlight ? 'text-[#027333]' : 'text-gray-500'}`}>{row.value} %</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : The IIA &amp; AuditBoard, enquête T4 2025 — 373 responsables d’audit interne</p>
                        </div>

                        <blockquote className="border-l-4 border-[#027333] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            Le coût de production d’une fausse facture crédible est tombé à quelques centimes. Le coût de vérification d’une facture, lui, est resté celui d’un humain qui la lit. Tant que cet écart persiste, le rapport de force est défavorable au contrôle.
                        </blockquote>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Les freins invoqués ne sont d’ailleurs pas des freins de conviction. Ce sont des freins d’outillage et de compétences — c’est-à-dire des freins qui se lèvent par décision, pas par attente.
                        </p>

                        {/* FIGURE 4 — Barrières */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 4. Ce qui empêche les fonctions d’audit de se préparer</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Obstacles cités par les responsables d’audit interne.</p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { label: 'Absence d’outils adaptés', value: 57 },
                                    { label: 'Compétences insuffisantes dans l’équipe', value: 55 },
                                    { label: 'Budget limité', value: 46 },
                                    { label: 'Priorités concurrentes', value: 43 },
                                    { label: 'Manque de temps dédié', value: 43 },
                                ].map((row) => (
                                    <div key={row.label} className="bg-white rounded-xl p-6 border border-gray-100">
                                        <div className="text-4xl font-bold text-[#027333] mb-2">{row.value} %</div>
                                        <div className="text-sm text-gray-600 leading-snug">{row.label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : The IIA &amp; AuditBoard, enquête T4 2025</p>
                        </div>
                    </section>

                    {/* SECTION 3 — Le déclencheur français */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">3. Le déclencheur français : septembre 2026</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Il existe une objection classique à l’audit exhaustif : « nos données ne sont pas assez propres ni assez structurées ». En France, cette objection a une date d’expiration.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            La réforme de la facturation électronique impose qu’au <strong className="text-[#262626]">1<sup>er</sup> septembre 2026</strong>, toutes les entreprises assujetties à la TVA — de la micro-entreprise au grand groupe — soient capables de <em>recevoir</em> des factures électroniques. À la même date, les grandes entreprises et les ETI doivent <em>émettre</em> au format électronique et transmettre leurs données de transaction et de paiement à l’administration (e-reporting). Les PME, TPE et indépendants suivent au 1<sup>er</sup> septembre 2027.
                        </p>

                        {/* FIGURE 5 — Timeline */}
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 5. Calendrier de la facturation électronique en France</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Ce que chaque échéance rend obligatoire.</p>

                            <div className="relative">
                                <div className="absolute left-0 right-0 top-4 h-0.5 bg-gray-200 hidden md:block"></div>
                                <div className="grid md:grid-cols-3 gap-8 relative">
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#93BF9E] border-4 border-gray-50 mb-4 flex items-center justify-center">
                                            <CheckCircle2 size={14} className="text-[#262626]" />
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Aujourd’hui</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Flux mixtes : PDF, papier, EDI. La donnée existe mais reste hétérogène et coûteuse à exploiter.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#027333] border-4 border-gray-50 mb-4"></div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-[#027333] mb-2">1<sup>er</sup> septembre 2026</div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            <strong>Réception</strong> électronique obligatoire pour <strong>toutes</strong> les entreprises. <strong>Émission</strong> et <strong>e-reporting</strong> obligatoires pour les grandes entreprises et les ETI.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-8 h-8 rounded-full bg-[#262626] border-4 border-gray-50 mb-4"></div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">1<sup>er</sup> septembre 2027</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Obligation d’émission étendue aux PME, TPE, micro-entreprises et indépendants. L’intégralité du flux B2B devient structurée.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-8">Source : calendrier officiel de la réforme, economie.gouv.fr</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            L’enjeu dépasse largement la conformité. À partir de septembre, une part croissante de vos flux fournisseurs arrive <strong className="text-[#262626]">nativement structurée, horodatée et rapprochable automatiquement</strong>. Techniquement, plus rien n’empêche de tester 100 % des factures entrantes contre 100 % des bons de commande et 100 % des paiements — en continu, pas une fois l’an.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le paradoxe est là : la même réforme qui donne enfin les moyens du contrôle exhaustif donne aussi à un fraudeur un canal normalisé, à haut volume et à faible friction. L’organisation qui reçoit dix fois plus de données machine sans augmenter d’un cran sa capacité d’analyse ne devient pas plus sûre. Elle devient plus aveugle, plus vite.
                        </p>
                    </section>

                    {/* SECTION 4 — Le coût réel du manuel */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">4. Ce que le manuel coûte vraiment</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Entre le système comptable et la liasse, il reste presque toujours une couche de tableurs. C’est là que se logent les retraitements, les reclassements, les allocations analytiques — et les erreurs. La recherche académique sur le sujet est ancienne, robuste et remarquablement ignorée : dans la revue de littérature de référence de Raymond Panko (University of Hawaii), la moyenne pondérée des tableurs contenant au moins une erreur atteint <strong className="text-[#262626]">94 %</strong>, avec un taux d’erreur par cellule de l’ordre de 5 %. Sur 30 modèles de financement de projet audités par Lawrence et Lee, les 30 contenaient des erreurs.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Le plus instructif n’est pas le taux d’erreur. C’est l’écart entre ce taux et la confiance que leurs auteurs placent dans leurs propres fichiers.
                        </p>

                        {/* FIGURE 6 — Écart de confiance */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 6. L’écart de confiance sur les tableurs</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Probabilité d’erreur estimée par les auteurs des fichiers, comparée au taux réellement observé.</p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="bg-white rounded-xl p-8 border border-gray-100">
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Probabilité d’erreur estimée</div>
                                    <div className="text-5xl font-bold text-[#93BF9E] mb-4">18 %</div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-[#93BF9E] h-3 rounded-full" style={{ width: '18%' }}></div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-8 border border-gray-100">
                                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Taux d’erreur réel constaté</div>
                                    <div className="text-5xl font-bold text-[#262626] mb-4">86 %</div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-[#262626] h-3 rounded-full" style={{ width: '86%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Source : R. Panko, « What We Know About Spreadsheet Errors », University of Hawaii</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            À cette fragilité s’ajoute un coût de fonctionnement rarement chiffré. Les enquêtes menées auprès des directions financières convergent : une part importante des équipes consacre plus de douze heures par semaine au rapprochement manuel de données, près de la moitié traitent encore plus des trois quarts de leurs opérations de back-office à la main, et la fragmentation des systèmes — souvent plus de dix outils pour obtenir une vision unifiée — impose un travail de réconciliation permanent.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Ce temps n’est pas seulement perdu : il est <strong className="text-[#262626]">soustrait au contrôle</strong>. Une équipe qui passe la clôture à faire concorder des fichiers n’a plus de bande passante pour investiguer les anomalies qu’elle aurait pu voir.
                        </p>
                    </section>

                    {/* SECTION 5 — L'audit augmenté */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">5. L’audit augmenté n’est plus une expérimentation</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            La bascule est déjà largement engagée. Une enquête Wolters Kluwer menée auprès de <strong className="text-[#262626]">4 214 professionnels de l’audit interne</strong> montre que 39 % utilisaient déjà l’IA, et que 41 % supplémentaires prévoyaient de l’adopter dans les douze mois — soit une adoption projetée de 80 % en 2026. Côté directions de l’audit, une enquête Gartner auprès de 119 responsables aboutit à un chiffre convergent : 83 % des fonctions d’audit expérimentent ou utilisent déjà l’IA, 12 % de plus prévoient de s’y mettre dans l’année.
                        </p>

                        {/* FIGURE 7 — Adoption */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#262626] mb-2 text-lg">Figure 7. Adoption de l’IA dans l’audit interne</h4>
                            <p className="text-sm text-gray-500 mb-10 italic">Part des fonctions d’audit utilisant ou prévoyant d’utiliser l’IA.</p>

                            <div className="h-64 flex items-end justify-center gap-8 md:gap-20 px-2">
                                <div className="w-24 md:w-40 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#262626] mb-2">39 %</div>
                                    <div className="w-full bg-[#93BF9E] rounded-t-md" style={{ height: '39%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Utilisent déjà l’IA<br />(constat 2025)</div>
                                </div>
                                <div className="w-24 md:w-40 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#027333] mb-2">80 %</div>
                                    <div className="w-full bg-[#027333] rounded-t-md" style={{ height: '80%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Adoption projetée<br />en 2026</div>
                                </div>
                                <div className="w-24 md:w-40 h-full flex flex-col justify-end items-center">
                                    <div className="text-lg font-bold text-[#262626] mb-2">83 %</div>
                                    <div className="w-full bg-[#262626] rounded-t-md" style={{ height: '83%' }}></div>
                                    <div className="text-xs text-center mt-3 text-gray-600 font-medium leading-tight">Pilotent ou utilisent l’IA<br />(directions de l’audit)</div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-6">Sources : Wolters Kluwer (4 214 répondants) ; Gartner (119 directeurs de l’audit interne, août 2025)</p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Un chiffre mérite d’être isolé : <strong className="text-[#262626]">46 % des professionnels de l’audit interne estiment que leur fonction est en retard sur les autres directions de l’entreprise</strong> en matière d’IA. C’est un signal inconfortable. La fonction dont le métier est d’évaluer les risques technologiques est aussi celle qui s’équipe le plus tard.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Les bénéfices attendus, eux, restent lucides : 54 % anticipent des gains d’efficacité dans les douze mois, 24 % un redéploiement des auditeurs vers des travaux à plus forte valeur, et seulement 13 % citent en premier l’amélioration de la précision. Autrement dit, le marché achète d’abord du temps. La réduction du risque, elle, arrive en prime — alors qu’elle est le vrai gisement.
                        </p>
                    </section>

                    {/* SECTION 6 — Tableau comparatif */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">6. Deux régimes de contrôle</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Le passage à l’audit augmenté n’est pas une accélération de l’audit manuel. C’est un changement de régime, avec une économie différente.
                        </p>

                        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12 shadow-sm">
                            <table className="w-full text-sm text-left min-w-[640px]">
                                <thead className="bg-[#262626] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Dimension</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-gray-300">Audit manuel</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-[#93BF9E]">Audit augmenté</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Couverture</td>
                                        <td className="px-6 py-4 text-gray-600">Échantillon fixe, indépendant du volume</td>
                                        <td className="px-6 py-4 text-gray-600">Population complète</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Fréquence</td>
                                        <td className="px-6 py-4 text-gray-600">Ponctuelle (clôture, mission annuelle)</td>
                                        <td className="px-6 py-4 text-gray-600">Continue, au fil de l’écriture</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Détection d’un événement rare</td>
                                        <td className="px-6 py-4 text-gray-600">Faible — dépend du tirage</td>
                                        <td className="px-6 py-4 text-gray-600">Élevée — l’anomalie est cherchée, pas croisée</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Délai de détection</td>
                                        <td className="px-6 py-4 text-gray-600">Mois, voire années</td>
                                        <td className="px-6 py-4 text-gray-600">Jours</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Coût d’un contrôle supplémentaire</td>
                                        <td className="px-6 py-4 text-gray-600">Linéaire — chaque test coûte des heures</td>
                                        <td className="px-6 py-4 text-gray-600">Quasi nul une fois le script écrit</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Rôle de l’auditeur</td>
                                        <td className="px-6 py-4 text-gray-600">Exécuter le test</td>
                                        <td className="px-6 py-4 text-gray-600">Arbitrer les anomalies remontées</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Piste d’audit</td>
                                        <td className="px-6 py-4 text-gray-600">Papiers de travail, reconstitution manuelle</td>
                                        <td className="px-6 py-4 text-gray-600">Journalisée, rejouable à l’identique</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex gap-4 items-start bg-[#F2F1DF] rounded-2xl p-8 mb-4">
                            <Scale className="text-[#027333] flex-shrink-0 mt-1" size={28} />
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-[#262626]">Une précision nécessaire</h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    L’audit augmenté ne supprime ni le jugement professionnel ni l’échantillonnage. Il déplace l’effort humain : au lieu de tirer au sort ce qu’on va regarder, on regarde tout et on choisit ce qui mérite une investigation. Un modèle qui remonte des anomalies sans piste d’audit vérifiable ne vaut rien devant un commissaire aux comptes — la traçabilité des règles appliquées est aussi importante que leur pertinence.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 7 — Par où commencer */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">7. Par où commencer</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            La bonne séquence n’est pas d’acheter un outil. C’est de prouver la valeur sur un flux, avec vos propres données, avant d’industrialiser.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <FileSearch className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 01</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Cartographier un flux, pas tout le SI</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Choisissez un cycle à fort volume et à fort enjeu : achats-fournisseurs, notes de frais, ou paie. Identifiez où la donnée est déjà structurée et où elle transite encore par un tableur.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <Repeat className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 02</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Rejouer l’historique avant de surveiller le présent</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Passez vos règles sur vingt-quatre mois d’écritures déjà clôturées. C’est le test le plus honnête : ce que le contrôle exhaustif trouve dans un exercice audité et validé mesure exactement l’angle mort actuel.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <LineChart className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 03</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Passer du ponctuel au continu</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Une fois les règles calibrées, branchez-les en flux. L’objectif n’est pas de produire plus d’alertes, mais de ramener le délai de détection de douze mois à quelques jours — c’est là que se joue le facteur 27 de la figure 2.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F2F1DF] flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="text-[#027333]" size={20} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Étape 04</span>
                                </div>
                                <h4 className="font-bold text-lg text-[#262626] mb-3">Rendre la piste d’audit opposable</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Chaque règle doit être versionnée, chaque exécution journalisée, chaque décision de classement traçable. Un contrôle automatisé qu’on ne peut pas rejouer à l’identique n’est pas un contrôle : c’est une opinion.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#262626] mb-6">Cinq contrôles à passer en exhaustif dès maintenant</h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                'Doublons de paiement fournisseurs — même montant, même IBAN, fenêtre glissante de 90 jours.',
                                'Fournisseurs dont l’IBAN a changé dans les 30 jours précédant un paiement.',
                                'Montants systématiquement positionnés juste sous un seuil de validation hiérarchique.',
                                'Écritures manuelles passées hors horaires ouvrés ou par un compte inhabituel pour le journal concerné.',
                                'Correspondance à trois voies commande / réception / facture, sur 100 % des lignes et non par sondage.',
                            ].map((item) => (
                                <li key={item} className="flex gap-3 items-start text-gray-700">
                                    <CheckCircle2 className="text-[#027333] flex-shrink-0 mt-0.5" size={20} />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Aucun de ces cinq contrôles ne requiert de modèle de langage. Ils demandent seulement l’accès à la population complète et une exécution régulière. C’est précisément ce que l’audit manuel ne peut pas offrir — et ce que la structuration réglementaire des flux rend désormais accessible.
                        </p>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-bold text-[#262626] mb-8">Conclusion</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            L’audit manuel n’est pas devenu mauvais. Il est devenu <em>insuffisamment couvrant</em> pour l’environnement dans lequel il opère. Tant que produire un faux document coûtait cher et que les données étaient éparpillées, l’échantillonnage tenait. Ces deux conditions sont tombées la même année.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Le risque à traiter n’est donc pas technologique. Il est méthodologique : continuer à mesurer une exposition croissante avec un instrument dont la portée, elle, ne bouge pas. Une fraude médiane coûte 104 000 dollars et met douze mois à apparaître. Ramener ces douze mois à six divise la perte par deux et demi. Ce calcul-là ne nécessite ni transformation digitale, ni comité de pilotage : il nécessite de regarder toute la population plutôt qu’un échantillon.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Pour les entreprises françaises, la fenêtre est ouverte maintenant. La structuration des flux arrive de toute façon, imposée par le calendrier fiscal. La seule question est de savoir si elle servira uniquement à déclarer — ou aussi à contrôler.
                        </p>
                    </section>

                    {/* Sources */}
                    <section className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Sources</h3>
                        <ul className="text-xs text-gray-500 space-y-2 list-disc pl-5">
                            <li>ACFE, « Occupational Fraud 2026: A Report to the Nations » — analyse de 2 402 cas de fraude professionnelle.</li>
                            <li>The IIA &amp; AuditBoard, enquête menée au T4 2025 auprès de 373 responsables d’audit interne (Amérique du Nord).</li>
                            <li>Gartner, enquête auprès de 119 directeurs de l’audit interne, août 2025 (résultats publiés en janvier 2026).</li>
                            <li>Wolters Kluwer, enquête auprès de 4 214 professionnels de l’audit interne sur l’adoption de l’IA.</li>
                            <li>R. Panko, « What We Know About Spreadsheet Errors », University of Hawaii — revue de littérature sur les taux d’erreur des tableurs.</li>
                            <li>Calendrier officiel de la réforme de la facturation électronique, economie.gouv.fr (échéances du 1<sup>er</sup> septembre 2026 et du 1<sup>er</sup> septembre 2027).</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="mt-20 bg-[#262626] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Combien d’anomalies dorment dans vos exercices déjà clôturés&nbsp;?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Nous rejouons vos vingt-quatre derniers mois d’écritures sur la population complète et vous restituons ce que l’échantillonnage n’a pas vu. Sans engagement sur la suite.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#027333] text-[#262626] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
                            Demander un diagnostic
                        </Link>
                    </div>
                </article>
            </div>
        );
    }

    // -------- CONTENU ARTICLE 4 (ORCHESTRATION) --------
    if (id === '4') {
        return (
            <div className="min-h-screen bg-white">
                {/* Barre de progression */}
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div
                        className="h-full bg-[#027333] transition-all duration-150"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>

                {/* Hero */}
                <div className="relative h-[60vh] overflow-hidden">
                    <img
                        src="/images/articles/ai-orchestration-hero.png"
                        alt="Orchestration d'agents IA"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#027333] text-[#262626] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
                                Point de vue
                            </span>
                            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                                Orchestration d'agents IA : un levier stratégique de performance et de valeur
                            </h1>
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#027333]" />
                                    <span>10 Déc 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#027333]" />
                                    <span>7 min de lecture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contenu de l'article */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link
                        to="/insights"
                        className="inline-flex items-center text-gray-500 hover:text-[#027333] transition-colors mb-12 group text-sm font-medium"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-[#262626] mb-8 border-l-4 border-[#027333] pl-6">
                            Les agents d’IA autonomes ont un potentiel réellement transformateur. Mais c'est leur orchestration, c'est à dire la manière de les coordonner, qui pourrait devenir le véritable moteur d’une automatisation intelligente.
                        </p>
                        <p>
                            La réussite dépend d’une coordination efficace, de la gouvernance et de l’interopérabilité. Dans ce domaine émergent, protocoles de communication open source et solutions propriétaires se disputent déjà le rôle de standard de référence.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-20">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            À mesure que les entreprises déploient des systèmes multi-agents, où différents moteurs de raisonnement IA interagissent de manière fluide entre plusieurs domaines, l’orchestration des agents, c’est-à-dire leur coordination efficace autour de rôles spécialisés, deviendra essentielle pour en libérer tout le potentiel. Une orchestration maîtrisée permet de créer des workflows intelligents : interpréter les demandes, structurer les processus, déléguer et synchroniser les tâches, puis valider et optimiser les résultats en continu. À l’inverse, une orchestration défaillante peut réduire de façon significative la valeur business générée.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-12">
                            Selon les estimations du marché, celui des agents IA autonomes pourrait atteindre 8,5 milliards de dollars d’ici à 2026, puis 35 milliards de dollars en 2030 (figure 1). Si les organisations renforcent l’orchestration de leurs agents et adressent de manière proactive les défis et risques associés, Deloitte anticipe que ces projections pourraient être revues à la hausse de 15 % à 30 %, soit jusqu’à 45 milliards de dollars à horizon 2030.
                        </p>

                        {/* FIGURE 1: Bar Chart */}
                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 my-12 shadow-sm border border-gray-100">
                            <h4 className="font-bold text-center mb-2">Marché mondial prévisionnel des agents d'IA autonomes</h4>
                            <p className="text-sm text-center text-gray-500 mb-12 italic">Milliards de dollars (USD)</p>

                            <div className="flex items-end justify-center gap-4 md:gap-12 h-64 md:h-80 w-full max-w-3xl mx-auto">
                                {/* 2026 */}
                                <div className="flex flex-col items-center justify-end gap-2 group w-16 md:w-24 h-full">
                                    <div className="text-sm font-bold text-[#1A5443] opacity-0 group-hover:opacity-100 transition-opacity mb-1">$9B</div>
                                    <div className="w-full bg-[#1A5443] rounded-t-sm h-[20%] relative group-hover:opacity-90 transition-opacity"></div>
                                    <div className="text-sm font-bold text-gray-700 mt-2">2026</div>
                                </div>

                                {/* 2027 */}
                                <div className="flex flex-col items-center justify-end gap-2 group w-16 md:w-24 h-full">
                                    <div className="text-sm font-bold text-[#1A5443] opacity-0 group-hover:opacity-100 transition-opacity mb-1">$12B</div>
                                    <div className="w-full bg-[#1A5443] rounded-t-sm h-[27%] relative group-hover:opacity-90 transition-opacity">
                                        <div className="absolute top-0 w-full bg-[#C8C982] h-[20%] rounded-t-sm opacity-80"></div>
                                    </div>
                                    <div className="text-sm font-bold text-gray-700 mt-2">2027</div>
                                </div>

                                {/* 2028 */}
                                <div className="flex flex-col items-center justify-end gap-2 group w-16 md:w-24 h-full">
                                    <div className="text-sm font-bold text-[#1A5443] opacity-0 group-hover:opacity-100 transition-opacity mb-1">$17B</div>
                                    <div className="w-full bg-[#1A5443] rounded-t-sm h-[38%] relative group-hover:opacity-90 transition-opacity">
                                        <div className="absolute top-0 w-full bg-[#C8C982] h-[25%] rounded-t-sm opacity-80"></div>
                                    </div>
                                    <div className="text-sm font-bold text-gray-700 mt-2">2028</div>
                                </div>

                                {/* 2029 */}
                                <div className="flex flex-col items-center justify-end gap-2 group w-16 md:w-24 h-full">
                                    <div className="text-sm font-bold text-[#1A5443] opacity-0 group-hover:opacity-100 transition-opacity mb-1">$25B</div>
                                    <div className="w-full bg-[#1A5443] rounded-t-sm h-[55%] relative group-hover:opacity-90 transition-opacity">
                                        <div className="absolute top-0 w-full bg-[#C8C982] h-[30%] rounded-t-sm opacity-80"></div>
                                    </div>
                                    <div className="text-sm font-bold text-gray-700 mt-2">2029</div>
                                </div>

                                {/* 2030 */}
                                <div className="flex flex-col items-center justify-end gap-2 group w-16 md:w-24 relative h-full">
                                    <div className="absolute top-0 bg-[#C8C982]/20 border border-[#C8C982] text-[#1A5443] text-xs p-2 rounded hidden md:block w-48 text-center -mt-8">
                                        Expansion liée à une meilleure orchestration (+15-30%)
                                    </div>
                                    <div className="text-sm font-bold text-[#1A5443] opacity-0 group-hover:opacity-100 transition-opacity mb-1">$45B</div>
                                    <div className="w-full bg-[#C8C982] rounded-t-sm h-[22%] relative border-b border-white/20 flex items-center justify-center text-[10px] text-white font-bold">+$10B</div>
                                    <div className="w-full bg-[#1A5443] h-[78%] relative group-hover:opacity-90 transition-opacity flex items-center justify-center text-white font-bold text-xs">$35B</div>
                                    <div className="text-sm font-bold text-gray-700 mt-2">2030</div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-8 font-light">
                                Figure 1. Le marché des agents d’IA pourrait croître grâce à une meilleure préparation des entreprises. Source: Deloitte
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Pour tirer pleinement parti des systèmes multi-agents, les entreprises devront renforcer leur capacité à orchestrer des agents dotés d’un certain niveau d’autonomie, tout en anticipant les écueils potentiels dès les premières phases.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-light mb-8 text-[#262626]">Faire fonctionner les entreprises au service des systèmes multi-agents</h2>
                        <div className="pl-6 border-l-2 border-gray-200 mb-8">
                            <h3 className="text-xl font-bold mb-4">Des agents à usage unique aux systèmes multi-agents : les entreprises sont-elles prêtes ?</h3>
                            <p className="text-gray-600 mb-4">
                                Aujourd’hui, les organisations peuvent exploiter des agents IA à usage unique pour réaliser de manière autonome plusieurs étapes d’un processus. Elles prennent de plus en plus conscience que les avantages de l’IA agentique s’étendent également aux systèmes multi-agents, déverrouillant une valeur entreprise plus large et exponentielle.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-12">
                            Comment y parvenir plus rapidement ? La première étape consiste à envisager les trois approches potentielles des systèmes multi-agents (Figure 2).
                        </p>

                        {/* FIGURE 2: Cards */}
                        <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100 my-12">
                            <h4 className="font-bold text-center mb-8">Exemple de stratégie agentique selon la complexité et les processus</h4>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Card 1 */}
                                <div className="bg-[#BACD32] p-6 rounded-xl text-[#262626] flex flex-col h-full shadow-lg transform hover:-translate-y-1 transition-transform">
                                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                        <Layers size={24} />
                                    </div>
                                    <h5 className="font-bold text-lg mb-3">Superposition intelligente</h5>
                                    <p className="text-sm font-medium opacity-80 mb-4 italic">(Smart overlay)</p>
                                    <p className="text-sm mb-4 leading-relaxed">
                                        Pour expérimenter, ajouter des agents d’IA par-dessus des processus existants et bien définis.
                                    </p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-[#004f44] p-6 rounded-xl text-white flex flex-col h-full shadow-lg transform hover:-translate-y-1 transition-transform">
                                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                                        <Cpu size={24} />
                                    </div>
                                    <h5 className="font-bold text-lg mb-3">Agentic by design</h5>
                                    <p className="text-sm font-medium opacity-70 mb-4 italic">(Architecture native)</p>
                                    <p className="text-sm mb-4 leading-relaxed opacity-90">
                                        Restructurer les processus pour intégrer des agents d’IA sur mesure dans une architecture modulaire.
                                    </p>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-[#86BC29] p-6 rounded-xl text-[#262626] flex flex-col h-full shadow-lg transform hover:-translate-y-1 transition-transform">
                                    <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h5 className="font-bold text-lg mb-3">Refonte des processus</h5>
                                    <p className="text-sm font-medium opacity-80 mb-4 italic">(Process redesign)</p>
                                    <p className="text-sm mb-4 leading-relaxed">
                                        Repenser en profondeur les processus d'automatisation complexes et risqués pour créer des parcours intelligents.
                                    </p>
                                </div>
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-8 font-light">
                                Figure 2. Trois approches stratégiques pour l'implémentation d'agents. Source: Deloitte
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-light mb-8 text-[#262626]">La dimension humaine dans l’orchestration des agents</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            En 2025, les entreprises mettent en œuvre des orchestrations d’agents relativement simples. À mesure que ces initiatives se développent, les entreprises devront de plus en plus équilibrer l’autonomie des agents et la supervision humaine.
                        </p>
                        {/* FIGURE 3: Timeline */}
                        <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 md:p-12 my-12">
                            <h4 className="font-bold text-center mb-12">L’évolution progressive du niveau d’autonomie des agents d’IA</h4>
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-gray-100 z-0"></div>
                                <div className="grid md:grid-cols-3 gap-8 relative z-10">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 rounded-full bg-[#BACD32] border-4 border-white shadow-md flex items-center justify-center mb-6">
                                            <span className="font-bold text-[#262626]">1</span>
                                        </div>
                                        <h5 className="font-bold text-lg mb-3">Humains <span className="text-[#86BC29]">dans</span> la boucle</h5>
                                        <p className="text-sm text-gray-500">Modèle dominant en 2025. Les agents fournissent des recommandations.</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 rounded-full bg-[#004f44] border-4 border-white shadow-md flex items-center justify-center mb-6 text-white">
                                            <span className="font-bold">2</span>
                                        </div>
                                        <h5 className="font-bold text-lg mb-3">Humains <span className="text-[#004f44]">sur</span> la boucle</h5>
                                        <p className="text-sm text-gray-500">Validation et monitoring par les humains, autonomie accrue.</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 rounded-full bg-gray-800 border-4 border-white shadow-md flex items-center justify-center mb-6 text-white">
                                            <span className="font-bold">3</span>
                                        </div>
                                        <h5 className="font-bold text-lg mb-3">Humains <span className="text-gray-600">hors</span> de la boucle</h5>
                                        <p className="text-sm text-gray-500">Systèmes autonomes, intervention pour cas exceptionnels.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-xs text-gray-400 mt-12 font-light">Figure 3. Vers une autonomie supervisée. Source: Deloitte</p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-light mb-8 text-[#262626]">Maîtriser la dispersion des agents IA</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Ces évolutions rendent l’interopérabilité des systèmes multi-agents à la fois essentielle et complexe. Les entreprises peuvent s’inspirer des technologies qui ont façonné l’informatique moderne.
                        </p>
                        {/* FIGURE 4: Architecture Stack */}
                        <div className="bg-[#2C3E50] text-white p-8 md:p-12 rounded-2xl shadow-xl my-12">
                            <h4 className="font-bold text-center mb-12 text-white/90">Architecture d’entreprise pour systèmes multi-agents</h4>
                            <div className="max-w-2xl mx-auto space-y-4">
                                <div className="bg-black/40 border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3">
                                    <User size={20} className="text-[#BACD32]" />
                                    <span className="font-bold tracking-wide text-sm uppercase">Utilisateurs de l'entreprise</span>
                                </div>
                                <div className="flex justify-center gap-8 text-white/30 py-1"><span>↑↓</span><span>↑↓</span><span>↑↓</span></div>
                                <div className="bg-[#86BC29] text-[#262626] rounded-lg p-6 relative overflow-hidden">
                                    <div className="relative z-10 flex gap-4 items-start">
                                        <div className="mt-1"><MessageSquare size={20} /></div>
                                        <div><h5 className="font-bold text-sm uppercase tracking-wider mb-1">Couche Expérience Utilisateur</h5></div>
                                    </div>
                                </div>
                                <div className="bg-[#004f44] rounded-lg p-6 relative overflow-hidden">
                                    <div className="relative z-10 flex gap-4 items-start">
                                        <div className="mt-1"><Cpu size={20} className="text-[#BACD32]" /></div>
                                        <div><h5 className="font-bold text-sm uppercase tracking-wider mb-1 text-[#BACD32]">Couche Architecture des Agents</h5></div>
                                    </div>
                                </div>
                                <div className="bg-[#003831] rounded-lg p-6 relative overflow-hidden">
                                    <div className="relative z-10 flex gap-4 items-start">
                                        <div className="mt-1"><Layers size={20} className="text-[#BACD32]" /></div>
                                        <div><h5 className="font-bold text-sm uppercase tracking-wider mb-1 text-[#BACD32]">Couche Contexte</h5></div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-8 text-white/30 py-1"><span>↑↓</span><span>↑↓</span><span>↑↓</span></div>
                                <div className="bg-black/40 border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3">
                                    <Database size={20} className="text-[#BACD32]" />
                                    <span className="font-bold tracking-wide text-sm uppercase">Données de l'entreprise</span>
                                </div>
                            </div>
                            <p className="text-center text-xs text-white/40 mt-8 font-light">Figure 4. Modèle en couches pour une architecture résiliente.</p>
                        </div>
                    </section>

                    {/* Section 5 & Conclusion */}
                    <section className="mb-20">
                        <h2 className="text-3xl font-light mb-8 text-[#262626]">Faire fonctionner les systèmes multi-agents au service des entreprises</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            À mesure que les entreprises maîtrisent les bases techniques, trois repères stratégiques peuvent les aider à mieux aligner leurs initiatives avec leurs priorités business : protocoles de communication flexibles, plateformes d'orchestration et évolution des équipes.
                        </p>
                    </section>

                    <section className="border-t border-gray-200 pt-8 mt-8">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Sources</h3>
                        <div className="text-xs text-gray-400 space-y-1 font-mono">
                            <p>1. Deloitte Analysis, 2025</p>
                            <p>2. Market Research Reports on AI Agents, 2025</p>
                            <p>3. Gartner® Research, 2025</p>
                        </div>
                    </section>

                    <div className="mt-20 bg-[#262626] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Prêt à orchestrer votre transformation ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Flowera vous accompagne dans la conception et le déploiement de vos systèmes multi-agents.</p>
                        <Link to="/contact" className="inline-block bg-[#027333] text-[#262626] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">Contactez nos experts</Link>
                    </div>
                </article>
            </div>
        );
    }

    // -------- CONTENU ARTICLE 5 (OSEZ L'IA) --------
    if (id === '5') {
        return (
            <div className="min-h-screen bg-white">
                <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
                    <div className="h-full bg-[#027333] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero Osez l'IA */}
                <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-purple-200 to-orange-100">
                    <img src="/images/articles/osez-ia-hero.png" alt="Osez l'IA" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#027333] text-[#262626] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">Stratégie Nationale</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                                Osez l'IA
                            </h1>
                            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl drop-shadow-md">
                                Un plan ambitieux pour transformer le tissu économique français et faire de l'IA le moteur de votre croissance.
                            </p>
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <div className="flex items-center gap-2"><Calendar size={16} className="text-[#027333]" /><span>21 Jan 2026</span></div>
                                <div className="flex items-center gap-2"><Clock size={16} className="text-[#027333]" /><span>5 min de lecture</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#027333] transition-colors mb-12 group text-sm font-medium">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Stats Grid Key Figures */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 -mt-24 relative z-10">
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-50 rounded-lg"><TrendingUp className="text-blue-600" size={24} /></div>
                                <span className="text-4xl font-bold text-blue-600">16%</span>
                            </div>
                            <h3 className="text-gray-900 font-bold mb-2">de croissance sur 10 ans</h3>
                            <p className="text-sm text-gray-500">Projection de l'impact direct de l'adoption de l'IA sur la croissance des entreprises françaises.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-transform">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-green-50 rounded-lg"><Clock className="text-green-600" size={24} /></div>
                                <span className="text-4xl font-bold text-green-600">20%</span>
                            </div>
                            <h3 className="text-gray-900 font-bold mb-2">de productivité en plus</h3>
                            <p className="text-sm text-gray-500">Gain moyen de productivité observé pour les tâches administratives et analytiques.</p>
                        </div>
                        <div className="bg-[#1A3A8A] p-8 rounded-xl shadow-lg text-white transform hover:-translate-y-1 transition-transform">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-4xl font-bold text-[#027333]">13%</span>
                            </div>
                            <h3 className="font-bold mb-2">seulement des PME utilisent l'IA</h3>
                            <p className="text-sm text-blue-100">Le taux d'équipement actuel reste faible, représentant une opportunité majeure pour les premiers adoptants.</p>
                        </div>
                        <div className="bg-[#1A3A8A] p-8 rounded-xl shadow-lg text-white transform hover:-translate-y-1 transition-transform">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-4xl font-bold text-white">43%</span>
                            </div>
                            <h3 className="font-bold mb-2">ne réalisent aucune analyse de données</h3>
                            <p className="text-sm text-blue-100">Des PME/ETI qui passent à côté de la valorisation de leur patrimoine de données.</p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <h2 className="text-3xl font-bold text-[#262626] mb-6">L’usage de l’IA : un impératif de compétitivité</h2>
                        <p>
                            Beaucoup d'entreprises hésitent encore à utiliser l'intelligence artificielle (IA) alors qu'elle constitue un levier de compétitivité majeur. En permettant d'automatiser certaines tâches chronophages, d'accélérer l'analyse de données ou encore de concevoir des produits innovants, l'IA n'est plus une option mais une nécessité stratégique.
                        </p>
                        <p>
                            Le programme <strong>"Osez l'IA"</strong> a été lancé pour répondre à ce défi critique : combler le retard des entreprises françaises, en particulier les PME et ETI, dans l'adoption de ces technologies.
                        </p>
                    </div>

                    {/* Objectives 2030 Chart */}
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 border border-gray-100">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold mb-2">Objectifs "Osez l'IA" d'ici 2030</h3>
                            <p className="text-gray-500">Taux d'adoption visé par taille d'entreprise</p>
                        </div>

                        <div className="space-y-8">
                            {/* TPE */}
                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span>TPE</span>
                                    <span className="text-[#1A3A8A]">Obj. 50% <span className="text-gray-400 font-normal">(vs 8% auj.)</span></span>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-gray-400 w-[8%]"></div> {/* Current */}
                                    <div className="absolute top-0 left-0 h-full bg-[#1A3A8A] w-[50%] opacity-20"></div> {/* Target shadow */}
                                    <div className="absolute top-0 left-0 h-full bg-[#1A3A8A] w-[50%]"></div>
                                </div>
                            </div>
                            {/* PME / ETI */}
                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span>PME / ETI</span>
                                    <span className="text-[#1A3A8A]">Obj. 80% <span className="text-gray-400 font-normal">(vs 13% auj.)</span></span>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-gray-400 w-[13%]"></div>
                                    <div className="absolute top-0 left-0 h-full bg-[#1A3A8A] w-[80%]"></div>
                                </div>
                            </div>
                            {/* Grands Groupes */}
                            <div>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span>Grands Groupes</span>
                                    <span className="text-[#1A3A8A]">Obj. 100% <span className="text-gray-400 font-normal">(vs 53% auj.)</span></span>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
                                    <div className="absolute top-0 left-0 h-full bg-gray-400 w-[53%]"></div>
                                    <div className="absolute top-0 left-0 h-full bg-[#1A3A8A] w-[100%]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-400 rounded-full"></div> Aujourd'hui</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1A3A8A] rounded-full"></div> Objectif 2030</div>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <h2 className="text-2xl font-bold text-[#262626] mb-4">Comment bénéficier du plan ?</h2>
                        <p>
                            Pour atteindre ces objectifs ambitieux, l'État, via Bpifrance, a mis en place un continuum d'aides pour accompagner les entreprises à chaque étape de leur maturité digitale :
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#027333] transition-colors">
                                <h4 className="font-bold text-[#262626] mb-2 flex items-center gap-2">
                                    <Target className="text-[#027333]" size={20} /> Diag IA
                                </h4>
                                <p className="text-sm text-gray-600">Pour évaluer votre potentiel et identifier les premiers cas d'usage à forte valeur ajoutée.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#027333] transition-colors">
                                <h4 className="font-bold text-[#262626] mb-2 flex items-center gap-2">
                                    <ShieldCheck className="text-[#027333]" size={20} /> Aide au choix de solution
                                </h4>
                                <p className="text-sm text-gray-600">Un accompagnement pour sélectionner les prestataires et technologies adaptés à vos besoins.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-[#F9FAFB] rounded-2xl p-8 border border-gray-100">
                        <h3 className="text-lg font-bold mb-4">Sources</h3>
                        <ul className="text-sm text-gray-500 space-y-2 list-disc pl-5">
                            <li>Commission de l’IA, "IA : notre ambition pour la France", mars 2024</li>
                            <li>The state of AI in early 2024: Gen AI adoption spikes and starts to generate value, mai 2024</li>
                            <li>Baromètre France Num 2024, septembre 2024</li>
                            <li>« L’IA dans les PME et ETI françaises, une révolution tranquille », juin 2025</li>
                        </ul>
                    </div>

                    {/* CTA Commun */}
                    <div className="mt-20 bg-[#262626] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Prêt à lancer votre projet IA ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Flowera est référencé pour vous accompagner dans le cadre du dispositif Osez l'IA.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#027333] text-[#262626] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
                            Vérifier mon éligibilité
                        </Link>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-light mb-6">Article non trouvé</h1>
                <Link to="/insights" className="text-[#027333] font-bold hover:underline">
                    ← Retour aux articles
                </Link>
            </div>
        </div>
    );
};

export default ArticleDetailPage;
