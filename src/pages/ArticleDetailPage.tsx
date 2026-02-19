import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, CheckCircle2, User, Layers, Database, Cpu, MessageSquare, TrendingUp, Target, ShieldCheck } from 'lucide-react';

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
                    <div className="h-full bg-[#FFB600] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero Section */}
                <div className="relative h-[60vh] overflow-hidden bg-[#0F172A]">
                    <img src="/images/articles/roi-ia-hero.png" alt="Intelligence artificielle : quel retour sur investissement ?" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#FFB600] text-[#1A1A1A] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
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
                                    <Calendar size={16} className="text-[#FFB600]" />
                                    <span>24 Nov 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#FFB600]" />
                                    <span>5 min de lecture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[#FFB600]" />
                                    <span>Co-rédigé avec Henri Lajarrige et Ouissam Taleb Bendiab</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#FFB600] transition-colors mb-12 group text-sm font-medium">
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Intro */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="lead text-xl md:text-2xl leading-relaxed font-light text-[#1A1A1A] mb-8 border-l-4 border-[#FFB600] pl-6">
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
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Des investissements en hausse, un ROI à concrétiser</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Tous secteurs confondus, les investissements dans l’IA connaissent une croissance rapide. Selon notre enquête, 85 % des entreprises françaises (vs 98 % en Europe) ont augmenté leurs investissements au cours des 12 derniers mois, et 92 % prévoient de les accroître à nouveau cette année.
                        </p>

                        {/* Figure 1: Evolution des investissements */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#1A1A1A] mb-2 text-lg">Figure 1. Evolution des investissements en IA en France (12 derniers mois)</h4>
                            <p className="text-sm text-gray-500 mb-8 italic">Comment les investissements de votre organisation dans l’IA ont-ils évolué au cours des 12 derniers mois ?</p>

                            <div className="space-y-4">
                                {/* Bar 1 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Augmentation très forte (+40%+)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-200/50 rounded-full" style={{ width: '5%' }}></div>
                                        <span className="relative z-10 font-bold text-[#1A1A1A]">5%</span>
                                    </div>
                                </div>
                                {/* Bar 2 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Augmentation significative (+20% à +39%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-300/50 rounded-full" style={{ width: '15%' }}></div>
                                        <span className="relative z-10 font-bold text-[#1A1A1A]">15%</span>
                                    </div>
                                </div>
                                {/* Bar 3 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Augmentation modérée (+11% à +19%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-400/50 rounded-full" style={{ width: '37%' }}></div>
                                        <span className="relative z-10 font-bold text-[#1A1A1A]">37%</span>
                                    </div>
                                </div>
                                {/* Bar 4 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Légère augmentation (+6% à +10%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-500/50 rounded-full" style={{ width: '28%' }}></div>
                                        <span className="relative z-10 font-bold text-[#1A1A1A]">28%</span>
                                    </div>
                                </div>
                                {/* Bar 5 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Stabilité (entre -5% et +5%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-600/50 rounded-full" style={{ width: '12%' }}></div>
                                        <span className="relative z-10 font-bold text-[#1A1A1A]">12%</span>
                                    </div>
                                </div>
                                {/* Bar 6 */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="w-1/3 md:w-1/4 text-right text-gray-600 font-medium">Légère diminution (-6% à -10%)</div>
                                    <div className="flex-1 bg-white rounded-full h-8 flex items-center px-2 relative border border-gray-100">
                                        <div className="absolute left-0 top-0 bottom-0 bg-teal-800/50 rounded-full" style={{ width: '2%' }}></div>
                                        <span className="relative z-10 font-bold text-[#1A1A1A]">2%</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-right text-xs text-gray-400 mt-4">Source: Étude Deloitte 2025</p>
                        </div>

                        {/* Figure 2: Prévisions */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#1A1A1A] mb-2 text-lg">Figure 2. Prévisions des investissements (12 prochains mois)</h4>
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
                        <blockquote className="border-l-4 border-[#FFB600] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            "Le délai pour concrétiser les gains liés à l’IA varie selon les secteurs d’activités mais, en moyenne, les bénéfices significatifs mettent plusieurs années à se matérialiser."
                            <span className="block mt-2 text-xs font-bold uppercase not-italic text-gray-400">— Dirigeant d’une entreprise de biens de consommation</span>
                        </blockquote>

                        {/* Figure 3: Délai ROI Comparison */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#1A1A1A] mb-2 text-lg">Figure 3. Délai de retour sur investissement</h4>
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
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">La GenAI, catalyseur d’un retour sur investissement rapide</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            L’IA générative s’impose comme un levier de retour sur investissement (ROI) rapide, bien plus que les précédentes vagues d’IA. Les dirigeants y voient la promesse d’une efficacité immédiate : automatisation des tâches répétitives, génération de contenus, assistance à la décision.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            En France, cette approche à court terme traduit une volonté claire : démontrer rapidement les bénéfices, dans un contexte de forte pression budgétaire et de nécessité de preuves concrètes pour maintenir l’adhésion des directions générales. En effet, 18 % des entreprises françaises constatent déjà un ROI, et 45 % en attendent un en moins d’un an.
                        </p>

                        {/* Figure 4: ROI Attendu GenAI */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#1A1A1A] mb-2 text-lg">Figure 4. ROI attendu de la GenAI</h4>

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
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Obstacles au ROI et le rôle de la GenAI pour les dépasser</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Les freins à l’adoption de l’IA et à la réalisation du ROI sont avant tout organisationnels et humains. En Europe, ils se traduisent par : un manque de compétences en IA (29 %), des infrastructures et des données insuffisantes (26 %), une gouvernance peu structurée (21 %) et des préoccupations en matière de sécurité et de souveraineté (25 %-28 %).
                        </p>
                        <blockquote className="border-l-4 border-[#FFB600] pl-6 italic text-gray-600 my-8 bg-gray-50 py-4 pr-4 rounded-r-lg">
                            "Tout le monde demande à son organisation d’adopter l’IA, même sans savoir exactement quels résultats en attendre. Il y a un tel engouement que je pense que les entreprises s’attendent à ce qu’elle résolve tout, comme par magie."
                            <span className="block mt-2 text-xs font-bold uppercase not-italic text-gray-400">— Dirigeant d’une entreprise de télécommunications</span>
                        </blockquote>

                        {/* Figure 5: Obstacles */}
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-12">
                            <h4 className="font-bold text-[#1A1A1A] mb-2 text-lg">Figure 5. Les obstacles au ROI de l’IA</h4>
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
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">GenAI vs Agentic AI : deux logiques de ROI</h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Les entreprises distinguent désormais deux modèles économiques autour de l’IA :
                        </p>
                        <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-8">
                            <li><strong className="text-[#1A1A1A]">La GenAI</strong> se positionne comme un moteur de ROI express, immédiat et quantifiable, avec des impacts mesurables en termes de productivité, rapidité et économies.</li>
                            <li><strong className="text-[#1A1A1A]">L’Agentic AI</strong> se projette sur un horizon plus long, orienté vers la transformation organisationnelle et la délégation partielle de la prise de décision aux systèmes autonomes.</li>
                        </ul>

                        {/* Figure 6: Table */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 mb-12 shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-[#1A1A1A] text-white">
                                    <tr>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider">Aspect</th>
                                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-[#FFB600]">GenAI</th>
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
                    <div className="mt-20 bg-[#1A1A1A] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Besoin d'aide pour mesurer votre ROI ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Nos experts Strategy & AI vous accompagnent dans la définition de vos KPIs et le pilotage de vos investissements.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#FFB600] text-[#1A1A1A] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
                            Contacter l'équipe Strategy
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
                        className="h-full bg-[#FFB600] transition-all duration-150"
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
                            <span className="bg-[#FFB600] text-[#1A1A1A] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">
                                Point de vue
                            </span>
                            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                                Orchestration d'agents IA : un levier stratégique de performance et de valeur
                            </h1>
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[#FFB600]" />
                                    <span>10 Déc 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#FFB600]" />
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
                        className="inline-flex items-center text-gray-500 hover:text-[#FFB600] transition-colors mb-12 group text-sm font-medium"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour aux articles
                    </Link>

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none text-gray-800 mb-16">
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-[#1A1A1A] mb-8 border-l-4 border-[#FFB600] pl-6">
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
                        <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Faire fonctionner les entreprises au service des systèmes multi-agents</h2>
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
                                <div className="bg-[#BACD32] p-6 rounded-xl text-[#1A1A1A] flex flex-col h-full shadow-lg transform hover:-translate-y-1 transition-transform">
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
                                <div className="bg-[#86BC29] p-6 rounded-xl text-[#1A1A1A] flex flex-col h-full shadow-lg transform hover:-translate-y-1 transition-transform">
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
                        <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">La dimension humaine dans l’orchestration des agents</h2>
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
                                            <span className="font-bold text-[#1A1A1A]">1</span>
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
                        <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Maîtriser la dispersion des agents IA</h2>
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
                                <div className="bg-[#86BC29] text-[#1A1A1A] rounded-lg p-6 relative overflow-hidden">
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
                        <h2 className="text-3xl font-light mb-8 text-[#1A1A1A]">Faire fonctionner les systèmes multi-agents au service des entreprises</h2>
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

                    <div className="mt-20 bg-[#1A1A1A] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Prêt à orchestrer votre transformation ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Silent Office vous accompagne dans la conception et le déploiement de vos systèmes multi-agents.</p>
                        <Link to="/contact" className="inline-block bg-[#FFB600] text-[#1A1A1A] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">Contactez nos experts</Link>
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
                    <div className="h-full bg-[#FFB600] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
                </div>

                {/* Hero Osez l'IA */}
                <div className="relative h-[60vh] overflow-hidden bg-gradient-to-r from-purple-200 to-orange-100">
                    <img src="/images/articles/osez-ia-hero.png" alt="Osez l'IA" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-4xl mx-auto text-white">
                            <span className="bg-[#FFB600] text-[#1A1A1A] px-4 py-2 text-xs font-bold uppercase tracking-widest inline-block mb-6 rounded-sm">Stratégie Nationale</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                                Osez l'IA
                            </h1>
                            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl drop-shadow-md">
                                Un plan ambitieux pour transformer le tissu économique français et faire de l'IA le moteur de votre croissance.
                            </p>
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <div className="flex items-center gap-2"><Calendar size={16} className="text-[#FFB600]" /><span>21 Jan 2026</span></div>
                                <div className="flex items-center gap-2"><Clock size={16} className="text-[#FFB600]" /><span>5 min de lecture</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <article className="max-w-4xl mx-auto px-6 py-16">
                    <Link to="/insights" className="inline-flex items-center text-gray-500 hover:text-[#FFB600] transition-colors mb-12 group text-sm font-medium">
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
                                <span className="text-4xl font-bold text-[#FFB600]">13%</span>
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
                        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">L’usage de l’IA : un impératif de compétitivité</h2>
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
                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Comment bénéficier du plan ?</h2>
                        <p>
                            Pour atteindre ces objectifs ambitieux, l'État, via Bpifrance, a mis en place un continuum d'aides pour accompagner les entreprises à chaque étape de leur maturité digitale :
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
                            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#FFB600] transition-colors">
                                <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                                    <Target className="text-[#FFB600]" size={20} /> Diag IA
                                </h4>
                                <p className="text-sm text-gray-600">Pour évaluer votre potentiel et identifier les premiers cas d'usage à forte valeur ajoutée.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#FFB600] transition-colors">
                                <h4 className="font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                                    <ShieldCheck className="text-[#FFB600]" size={20} /> Aide au choix de solution
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
                    <div className="mt-20 bg-[#1A1A1A] rounded-2xl p-12 text-center text-white">
                        <h3 className="text-2xl font-bold mb-4">Prêt à lancer votre projet IA ?</h3>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Silent Office est référencé pour vous accompagner dans le cadre du dispositif Osez l'IA.
                        </p>
                        <Link to="/contact" className="inline-block bg-[#FFB600] text-[#1A1A1A] px-8 py-4 font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105">
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
                <Link to="/insights" className="text-[#FFB600] font-bold hover:underline">
                    ← Retour aux articles
                </Link>
            </div>
        </div>
    );
};

export default ArticleDetailPage;
