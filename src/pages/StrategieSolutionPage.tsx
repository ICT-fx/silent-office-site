import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Target,
    ShieldCheck,
    Brain,
    Lightbulb,
    Cpu,
    Users,
    ChevronDown,
    ChevronUp,
    BarChart3,
    Lock,
    Zap
} from 'lucide-react';

const StrategieSolutionPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openChapter, setOpenChapter] = useState<string | null>('chap1');

    const toggleChapter = (id: string) => {
        setOpenChapter(openChapter === id ? null : id);
    };

    const chapters = [
        {
            id: 'chap1',
            title: 'Chapitre 1 — Acculturation aux enjeux IA & Automatisation',
            subtitle: '(Dirigeants & équipes)',
            content: [
                {
                    title: '1.1 Introduction à l’intelligence artificielle',
                    items: [
                        'IA, ML, LLM : ce qui existe vraiment aujourd’hui',
                        'Ce que l’IA fait vs ce qu’elle ne fait pas',
                        'Différence entre IA, automatisation et digitalisation'
                    ]
                },
                {
                    title: '1.2 Pourquoi l’IA change la concurrence',
                    items: [
                        'Accélération continue (24/7)',
                        'Avantage compétitif vs décrochage',
                        'IA comme levier de coûts, temps, stabilité, qualité'
                    ]
                }
            ]
        },
        {
            id: 'chap2',
            title: 'Chapitre 2 — Panorama des technologies actuelles',
            subtitle: '(Ce qui est possible aujourd’hui, concrètement)',
            content: [
                {
                    title: '2.1 Automatisation intelligente',
                    items: [
                        'RPA classique vs RPA augmentée par l’IA',
                        'Automatisations déterministes vs adaptatives'
                    ]
                },
                {
                    title: '2.2 Agents IA',
                    items: [
                        'Qu’est-ce qu’un agent IA',
                        'Agents décisionnels vs agents exécutants',
                        'Cas d’usage : lecture d’emails, déclenchement d’actions, orchestration'
                    ]
                },
                {
                    title: '2.3 OCR nouvelle génération',
                    items: [
                        'OCR classique vs OCR IA',
                        'Extraction de données fiables à grande échelle',
                        'Cas d’usage documents, factures, contrats, emails'
                    ]
                }
            ]
        },
        {
            id: 'chap3',
            title: 'Chapitre 3 — De la vision stratégique à l’exécution',
            subtitle: '(Strategy Board)',
            content: [
                {
                    title: '3.1 Alignement vision dirigeant / IT',
                    items: [
                        'Traduire la vision business en capacités techniques',
                        'Priorisation des automatisations à fort impact'
                    ]
                },
                {
                    title: '3.2 Identifier ce qui doit (ou non) être automatisé',
                    items: [
                        'Tâches répétitives',
                        'Process critiques',
                        'Zones à risque ou à forte valeur humaine'
                    ]
                },
                {
                    title: '3.3 Roadmap d’automatisation',
                    items: [
                        'Quick wins vs transformation structurelle',
                        'ROI, coûts, gains de temps, stabilité'
                    ]
                }
            ]
        },
        {
            id: 'chap4',
            title: 'Chapitre 4 — Mise en œuvre opérationnelle',
            subtitle: '(Formation équipes IT)',
            content: [
                {
                    title: '4.1 Comment fonctionne une automatisation concrètement',
                    items: [
                        'Architecture type',
                        'Déclencheurs, règles, exceptions'
                    ]
                },
                {
                    title: '4.2 Déploiement des solutions',
                    items: [
                        'Installation technique',
                        'Connexion aux systèmes existants',
                        'Tests, monitoring, maintenance'
                    ]
                },
                {
                    title: '4.3 Industrialisation',
                    items: [
                        'Passage du POC à la production',
                        'Scalabilité',
                        'Documentation et transmission'
                    ]
                }
            ]
        },
        {
            id: 'chap5',
            title: 'Chapitre 5 — Gouvernance, risques et sécurité',
            subtitle: '(Point clé pour les dirigeants)',
            content: [
                {
                    title: '5.1 Risques liés aux données',
                    items: [
                        'Données envoyées sur des serveurs externes',
                        'Confidentialité et conformité',
                        'Choix cloud vs on-premise'
                    ]
                },
                {
                    title: '5.2 Risques liés aux IA autonomes',
                    items: [
                        'IA qui agit sans validation humaine',
                        'Contrôles, garde-fous, permissions',
                        'Niveaux d’autonomie acceptables'
                    ]
                },
                {
                    title: '5.3 Gouvernance IA & automatisation',
                    items: [
                        'Qui décide quoi',
                        'Règles, audits, traçabilité',
                        'Responsabilité humaine'
                    ]
                }
            ]
        },
        {
            id: 'chap6',
            title: 'Chapitre 6 — Transformation continue',
            subtitle: '(Pourquoi ça ne s’arrête jamais)',
            content: [
                {
                    title: '6.1 Amélioration continue',
                    items: [
                        'Optimisation des automatisations existantes',
                        'Adaptation aux nouvelles technologies'
                    ]
                },
                {
                    title: '6.2 Veille technologique & concurrentielle',
                    items: [
                        'Nouveaux usages IA',
                        'Évolution des outils',
                        'Anticipation plutôt que réaction'
                    ]
                },
                {
                    title: '6.3 Acculturation long terme',
                    items: [
                        'Formation continue des équipes',
                        'Mise à niveau des dirigeants',
                        'Culture IA dans l’entreprise'
                    ]
                }
            ]
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-white font-sans text-[#1A1A1A]">

            {/* HERO SECTION */}
            <section className="relative py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src="https://picsum.photos/1920/1080?meeting&blur=2" className="w-full h-full object-cover" alt="Strategy Board" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
                    <Link to="/" className="text-gray-400 hover:text-[#FFB600] text-sm font-bold uppercase tracking-widest mb-8 inline-block">
                        &larr; Retour Accueil
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                        La concurrence automatise. <br />
                        <span className="font-bold text-[#FFB600]">Et vous ?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light mb-12 leading-relaxed">
                        Les technologies évoluent en continu. L'absence de vision claire entraîne des risques, des pertes financières et une inefficacité opérationnelle. <span className="text-white font-medium">Prenez les devants.</span>
                    </p>
                    <button
                        onClick={() => document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#FFB600] text-[#1A1A1A] px-10 py-5 font-bold text-lg hover:bg-white transition-all inline-flex items-center shadow-lg"
                    >
                        Découvrir le programme d'acculturation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* NOTRE APPROCHE (4 Piliers) */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Notre Approche</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Un accompagnement stratégique global</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Pilier 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#F4F4F4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFB600] transition-colors">
                                <Brain className="w-7 h-7 text-[#1A1A1A]" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Comprendre les enjeux</h3>
                            <p className="text-gray-500 leading-relaxed">Démystifier l'IA et la Data pour sortir des fantasmes et saisir les opportunités réelles.</p>
                        </div>

                        {/* Pilier 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#F4F4F4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFB600] transition-colors">
                                <Lightbulb className="w-7 h-7 text-[#1A1A1A]" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Décider intelligemment</h3>
                            <p className="text-gray-500 leading-relaxed">Prioriser les investissements rentables et éviter les projets "gadgets" sans ROI.</p>
                        </div>

                        {/* Pilier 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#F4F4F4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFB600] transition-colors">
                                <Cpu className="w-7 h-7 text-[#1A1A1A]" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Automatiser efficacement</h3>
                            <p className="text-gray-500 leading-relaxed">Déployer les bonnes technologies (RPA, IA, Agents) au bon endroit dans votre chaîne de valeur.</p>
                        </div>

                        {/* Pilier 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-[#F4F4F4] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFB600] transition-colors">
                                <ShieldCheck className="w-7 h-7 text-[#1A1A1A]" />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Sécuriser durablement</h3>
                            <p className="text-gray-500 leading-relaxed">Maîtriser la gouvernance des données, la conformité et les risques liés à l'IA.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CIBLES */}
            <section className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Pour Qui ?</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Un programme adapté à chaque niveau</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Cible 1 */}
                        <div className="p-8 bg-[#1A1A1A] text-white rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB600] opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                            <div className="relative z-10">
                                <Users className="w-12 h-12 text-[#FFB600] mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Dirigeants & Comex</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Pour aligner la vision stratégique, comprendre les impacts sur le business model et définir les KPIs de succès.
                                </p>
                            </div>
                        </div>

                        {/* Cible 2 */}
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                            <BarChart3 className="w-12 h-12 text-[#1A1A1A] mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Équipes IT & Tech</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Pour maîtriser l'architecture, le déploiement technique et l'intégration des nouvelles solutions IA dans l'écosystème existant.
                            </p>
                        </div>

                        {/* Cible 3 */}
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                            <Zap className="w-12 h-12 text-[#1A1A1A] mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Transformation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Pour les organisations en pleine mutation, afin de réussir l'adoption, gérer le changement culturel et vaincre les résistances.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROGRAMME DÉTAILLÉ (Syllabus) */}
            <section id="programme" className="py-24 px-6 bg-[#F9F9F9]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#FFB600] font-bold uppercase tracking-widest text-sm mb-4 block">Syllabus Complet</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Programme de Formation Détaillé</h2>
                        <p className="mt-4 text-gray-500">Un cursus intensif alliant théorie stratégique et mise en pratique technique.</p>
                    </div>

                    <div className="space-y-4">
                        {chapters.map((chapter) => (
                            <div key={chapter.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleChapter(chapter.id)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] flex items-center gap-3">
                                            {chapter.title}
                                            {openChapter === chapter.id && <span className="text-xs font-normal text-[#FFB600] border border-[#FFB600] px-2 py-0.5 rounded-full uppercase tracking-wider">En cours</span>}
                                        </h3>
                                        <p className="text-gray-400 mt-1 font-medium">{chapter.subtitle}</p>
                                    </div>
                                    <div className={`p-2 rounded-full bg-gray-100 text-gray-600 transition-transform duration-300 ${openChapter === chapter.id ? 'rotate-180 bg-[#FFB600] text-[#1A1A1A]' : ''}`}>
                                        <ChevronDown className="w-6 h-6" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openChapter === chapter.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 md:p-8 pt-0 border-t border-gray-100 bg-gray-50/50">
                                        <div className="grid md:grid-cols-1 gap-8 pt-6">
                                            {chapter.content.map((section, idx) => (
                                                <div key={idx} className="relative pl-6 border-l-2 border-gray-200 hover:border-[#FFB600] transition-colors">
                                                    <h4 className="font-bold text-lg text-[#1A1A1A] mb-3">{section.title}</h4>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item, itemIdx) => (
                                                            <li key={itemIdx} className="flex items-start text-gray-600">
                                                                <span className="mr-2 text-[#FFB600]">•</span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 px-6 bg-[#1A1A1A] text-white">
                <div className="max-w-5xl mx-auto text-center bg-[#1A1A1A] border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB600] opacity-5 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB600] opacity-5 blur-[100px] rounded-full"></div>

                    <h2 className="text-3xl md:text-5xl font-light mb-8 relative z-10">Prêt à sécuriser votre avenir ?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                        Ne laissez pas l'automatisation devenir une menace. Faites-en votre plus grand levier de croissance.
                    </p>
                    <div className="relative z-10">
                        <Link
                            to="/contact"
                            className="bg-[#FFB600] text-[#1A1A1A] px-10 py-5 font-bold text-lg hover:bg-white transition-all inline-flex items-center rounded-lg"
                        >
                            Réserver une session stratégique
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    <p className="mt-8 text-sm text-gray-500 flex items-center justify-center relative z-10">
                        <Lock className="w-4 h-4 mr-2" />
                        Formation éligible aux budgets OPCO sous conditions.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default StrategieSolutionPage;
