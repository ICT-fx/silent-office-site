import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowRight,
    BarChart3,
    Brain,
    ChevronDown,
    ClipboardList,
    Compass,
    Cpu,
    Database,
    Eye,
    GraduationCap,
    KeyRound,
    Layers,
    Lightbulb,
    Lock,
    Puzzle,
    RefreshCw,
    Rocket,
    Search,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
    Workflow,
    Zap,
    type LucideIcon,
} from 'lucide-react';
import { solutionsBySlug } from '../data/solutions/index';

/**
 * Registre d'icônes : les fichiers de données référencent une icône lucide-react
 * par son nom (string) — on la résout ici, avec un fallback sûr.
 */
const ICONS: Record<string, LucideIcon> = {
    BarChart3,
    Brain,
    ClipboardList,
    Compass,
    Cpu,
    Database,
    Eye,
    GraduationCap,
    KeyRound,
    Layers,
    Lightbulb,
    Puzzle,
    RefreshCw,
    Rocket,
    Search,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
    Workflow,
    Zap,
};

const resolveIcon = (name: string): LucideIcon => ICONS[name] ?? Target;

/** Icônes fixes pour les 3 gains (les données n'en portent pas). */
const GAIN_ICONS: LucideIcon[] = [Zap, ShieldCheck, TrendingUp];

const SectionHeading: React.FC<{ eyebrow: string; title: string; intro?: string }> = ({
    eyebrow,
    title,
    intro,
}) => (
    <div className="text-center mb-16">
        <span className="text-[#027333] font-bold uppercase tracking-widest text-sm mb-4 block">
            {eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#262626]">{title}</h2>
        {intro && <p className="mt-4 text-gray-500 max-w-2xl mx-auto">{intro}</p>}
    </div>
);

const DEEP_DIVE_ID = 'deep-dive';

const SolutionPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? solutionsBySlug[slug] : undefined;

    const [openChapter, setOpenChapter] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Premier chapitre ouvert par défaut
        setOpenChapter(data?.deepDive.chapters[0]?.id ?? null);
    }, [slug, data]);

    if (!data) {
        return (
            <div className="pt-20 min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
                <span className="text-[#027333] font-bold uppercase tracking-widest text-sm">
                    404
                </span>
                <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#262626]">
                    Cette solution n'existe pas.
                </h1>
                <p className="mt-4 max-w-md text-gray-500">
                    La page que vous cherchez a peut-être changé d'adresse.
                </p>
                <Link
                    to="/solutions"
                    className="mt-8 inline-flex items-center bg-[#027333] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#262626] transition-all"
                >
                    Voir toutes nos solutions
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        );
    }

    const toggleChapter = (id: string) => {
        setOpenChapter(openChapter === id ? null : id);
    };

    // Promesse : dernier mot/segment en vert gras, le reste en font-light
    const promiseWords = data.promise.trim().split(' ');
    const promiseEnd = promiseWords.pop();
    const promiseLead = promiseWords.join(' ');

    const pillarGridCols =
        data.pillars.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';

    return (
        <div className="pt-20 min-h-screen bg-white font-sans text-[#262626]">
            {/* ============ HERO SOMBRE ============ */}
            <section className="relative py-24 md:py-32 px-6 bg-[#262626] text-white overflow-hidden">
                {/* Fond graphique : dégradé sobre + halos verts flous */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#262626] via-[#262626] to-[#1c2b21]" />
                <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-[#027333] opacity-20 blur-[130px] rounded-full" />
                <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-[#025928] opacity-20 blur-[110px] rounded-full" />
                <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#93BF9E] opacity-10 blur-[100px] rounded-full" />

                <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] gap-12 xl:gap-16 items-center">
                    <div>
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-[#027333] text-sm font-bold uppercase tracking-widest mb-8 inline-block transition-colors"
                    >
                        &larr; Retour Accueil
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
                        {promiseLead}{' '}
                        <span className="font-bold text-[#027333]">{promiseEnd}</span>
                    </h1>
                    {data.subPromise && (
                        <p className="text-2xl md:text-3xl font-light text-gray-200 mb-6">
                            {data.subPromise}
                        </p>
                    )}
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light mb-12 leading-relaxed mx-auto md:mx-0">
                        {data.heroTagline}
                        {data.heroTaglineStrong && (
                            <>
                                {' '}
                                <span className="text-white font-medium">
                                    {data.heroTaglineStrong}
                                </span>
                            </>
                        )}
                    </p>
                    <button
                        onClick={() =>
                            document
                                .getElementById(DEEP_DIVE_ID)
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        className="bg-[#027333] text-white px-10 py-5 font-bold text-lg rounded-lg hover:bg-white hover:text-[#262626] transition-all inline-flex items-center shadow-lg"
                    >
                        Découvrir
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    </div>

                    {/* Illustration de l'expertise — cadrage 3:2, identique sur les 5 pages */}
                    <div className="relative">
                        <div
                            className="absolute -inset-3 rounded-[26px] opacity-40 blur-2xl"
                            style={{
                                background:
                                    'linear-gradient(140deg, #93BF9E 0%, #027333 55%, #013a1e 100%)',
                            }}
                            aria-hidden="true"
                        />
                        <img
                            src={data.heroImage}
                            alt={data.heroImageAlt}
                            width={1536}
                            height={1024}
                            decoding="async"
                            className="relative w-full aspect-[3/2] object-cover object-center rounded-[20px] ring-1 ring-white/15 shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ============ INTRODUCTION + CE QUE ÇA CHANGE POUR VOUS ============
                Reprend, sous l'image, le contenu que portait la carte de la home. */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <span className="text-[#027333] font-bold uppercase tracking-widest text-sm mb-4 block">
                            En deux mots
                        </span>
                        <p className="text-2xl md:text-3xl font-light leading-snug text-[#262626]">
                            {data.shortDescription}
                        </p>
                    </div>

                    <SectionHeading
                        eyebrow="Les bénéfices"
                        title="Ce que ça change pour vous"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {data.gains.map((gain, i) => {
                            const GainIcon = GAIN_ICONS[i % GAIN_ICONS.length];
                            return (
                                <div
                                    key={i}
                                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                                >
                                    <div className="w-14 h-14 bg-[#F2F1DF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#027333] transition-colors">
                                        <GainIcon className="w-7 h-7 text-[#262626] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{gain.label}</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {gain.scenario}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============ NOTRE APPROCHE ============ */}
            <section className="py-24 px-6 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading eyebrow="Notre Approche" title="Comment nous travaillons" />
                    <div className={`grid ${pillarGridCols} gap-8`}>
                        {data.pillars.map((pillar, i) => {
                            const PillarIcon = resolveIcon(pillar.icon);
                            return (
                                <div
                                    key={i}
                                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                                >
                                    <div className="w-14 h-14 bg-[#F2F1DF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#027333] transition-colors">
                                        <PillarIcon className="w-7 h-7 text-[#262626] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3">{pillar.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============ POUR QUI ? ============ */}
            {data.audiences && data.audiences.length > 0 && (
                <section className="py-24 px-6 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading
                            eyebrow="Pour Qui ?"
                            title="Un accompagnement adapté à chaque profil"
                        />
                        <div className="grid md:grid-cols-3 gap-10">
                            {data.audiences.map((audience, i) => {
                                const AudienceIcon = resolveIcon(audience.icon);
                                if (audience.highlighted) {
                                    return (
                                        <div
                                            key={i}
                                            className="p-8 bg-[#262626] text-white rounded-2xl relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#027333] opacity-10 rounded-full blur-2xl -mr-10 -mt-10" />
                                            <div className="relative z-10">
                                                <AudienceIcon className="w-12 h-12 text-[#027333] mb-6" />
                                                <h3 className="text-2xl font-bold mb-4">
                                                    {audience.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {audience.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                                return (
                                    <div
                                        key={i}
                                        className="p-8 bg-gray-50 rounded-2xl border border-gray-200"
                                    >
                                        <AudienceIcon className="w-12 h-12 text-[#262626] mb-6" />
                                        <h3 className="text-2xl font-bold mb-4 text-[#262626]">
                                            {audience.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {audience.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* ============ CAS CONCRETS ============ */}
            <section className="py-24 px-6 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        eyebrow="Cas Concrets"
                        title="Des situations réelles, avant / après"
                    />
                    <div className="space-y-8">
                        {data.useCases.map((useCase, i) => (
                            <article
                                key={i}
                                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all border border-gray-200"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-[#262626] mb-8">
                                    {useCase.title}
                                </h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                        { label: 'Avant', text: useCase.before },
                                        {
                                            label: 'Ce que nous mettons en place',
                                            text: useCase.setup,
                                        },
                                        { label: 'Résultat', text: useCase.result },
                                    ].map((step, j) => (
                                        <div
                                            key={j}
                                            className={`pt-5 border-t-2 ${
                                                j === 2
                                                    ? 'border-[#027333]'
                                                    : 'border-gray-200'
                                            }`}
                                        >
                                            <span
                                                className={`text-xs font-bold uppercase tracking-widest ${
                                                    j === 2
                                                        ? 'text-[#027333]'
                                                        : 'text-gray-400'
                                                }`}
                                            >
                                                {step.label}
                                            </span>
                                            <p
                                                className={`mt-3 leading-relaxed ${
                                                    j === 2
                                                        ? 'text-[#262626]'
                                                        : 'text-gray-500'
                                                }`}
                                            >
                                                {step.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ DEEP DIVE (ACCORDÉON) ============ */}
            <section id={DEEP_DIVE_ID} className="py-24 px-6 bg-[#F9F9F9] scroll-mt-24">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        eyebrow={data.deepDive.eyebrow}
                        title={data.deepDive.title}
                        intro={data.deepDive.intro}
                    />
                    <div className="space-y-4">
                        {data.deepDive.chapters.map((chapter) => (
                            <div
                                key={chapter.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleChapter(chapter.id)}
                                    className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left bg-white hover:bg-gray-50 transition-colors"
                                >
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-[#262626] flex items-center flex-wrap gap-3">
                                            {chapter.title}
                                            {openChapter === chapter.id && (
                                                <span className="text-xs font-normal text-[#027333] border border-[#027333] px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                    En cours
                                                </span>
                                            )}
                                        </h3>
                                        {chapter.subtitle && (
                                            <p className="text-gray-400 mt-1 font-medium">
                                                {chapter.subtitle}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className={`p-2 rounded-full shrink-0 transition-transform duration-300 ${
                                            openChapter === chapter.id
                                                ? 'rotate-180 bg-[#027333] text-white'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        <ChevronDown className="w-6 h-6" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openChapter === chapter.id
                                            ? 'max-h-[1200px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="p-6 md:p-8 pt-0 border-t border-gray-100 bg-gray-50/50">
                                        <div className="grid md:grid-cols-1 gap-8 pt-6">
                                            {chapter.content.map((section, idx) => (
                                                <div
                                                    key={idx}
                                                    className="relative pl-6 border-l-2 border-gray-200 hover:border-[#027333] transition-colors"
                                                >
                                                    <h4 className="font-bold text-lg text-[#262626] mb-3">
                                                        {section.title}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {section.items.map((item, itemIdx) => (
                                                            <li
                                                                key={itemIdx}
                                                                className="flex items-start text-gray-600"
                                                            >
                                                                <span className="mr-2 text-[#027333]">
                                                                    •
                                                                </span>
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

            {/* ============ MISE EN PLACE (TIMELINE) ============ */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        eyebrow="La Mise en Place"
                        title="Un déroulé clair, étape par étape"
                    />
                    <div>
                        {data.steps.map((step, i) => (
                            <div key={i} className="relative flex gap-6 pb-12 last:pb-0">
                                {i < data.steps.length - 1 && (
                                    <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-200" />
                                )}
                                <div className="w-12 h-12 shrink-0 rounded-full bg-[#027333] text-white flex items-center justify-center font-bold shadow-md">
                                    {String(i + 1).padStart(2, '0')}
                                </div>
                                <div className="pt-2">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <h3 className="text-xl font-bold text-[#262626]">
                                            {step.title}
                                        </h3>
                                        <span className="text-sm font-medium bg-[#F2F1DF] text-[#262626] px-3 py-1 rounded-full whitespace-nowrap">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-gray-500 leading-relaxed max-w-2xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CTA FINAL ============ */}
            <section className="py-24 px-6 bg-[#262626] text-white">
                <div className="max-w-5xl mx-auto text-center bg-[#262626] border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#027333] opacity-5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#027333] opacity-5 blur-[100px] rounded-full" />

                    <h2 className="text-3xl md:text-5xl font-light mb-8 relative z-10">
                        {data.ctaTitle}
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                        {data.ctaText}
                    </p>
                    <div className="relative z-10">
                        <Link
                            to="/contact"
                            className="bg-[#027333] text-white px-10 py-5 font-bold text-lg hover:bg-white hover:text-[#262626] transition-all inline-flex items-center rounded-lg"
                        >
                            {data.ctaLabel}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    {data.ctaFootnote && (
                        <p className="mt-8 text-sm text-gray-500 flex items-center justify-center relative z-10">
                            <Lock className="w-4 h-4 mr-2" />
                            {data.ctaFootnote}
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default SolutionPage;
