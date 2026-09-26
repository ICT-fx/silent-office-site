import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Cal, { getCalApi } from '@calcom/embed-react';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    CalendarCheck,
    Check,
    Clock,
    Loader2,
    Mail,
    MapPin,
    MessageSquare,
    Users,
} from 'lucide-react';
import {
    BOOKING_OPTIONS,
    BUDGET_OPTIONS,
    CONTACT_EMAIL,
    COMPANY_ADDRESS_LINES,
    COMPANY_SERVICE_AREA,
    calLink,
    type BookingOption,
} from '../config/booking';
import { useContactForm } from '../hooks/useContactForm';

/* ------------------------------------------------------------------ *
 *  Page contact.
 *
 *  Le site n'a qu'une conversion : l'appel réservé. La page se lit donc
 *  dans cet ordre — on réserve d'abord, on écrit seulement si on n'est
 *  pas prêt à poser une date.
 *
 *  Même système visuel que les pages solutions compactes : fond papier,
 *  titres Inter très serrés, boutons DM Sans, aucun bloc sombre.
 *
 *  Les créneaux et les coordonnées vivent dans `src/config/booking.ts`,
 *  l'envoi dans `api/contact.ts`. Cette page ne fait que les mettre en scène.
 * ------------------------------------------------------------------ */

const TITLE = 'Inter, sans-serif';
const BODY = '"DM Sans", sans-serif';

const GREEN = '#027333';
const GREEN_DARK = '#025928';
const INK = '#262626';
const MUTED = 'rgba(38,38,38,0.7)';
const LINE = '#E5E1D6';
const PAPER = '#FCFBF8';

const SHADOW = '0 26px 60px -30px rgba(38,38,38,0.32), 0 3px 8px rgba(38,38,38,0.04)';

const FOCUS =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#027333]';

const PRIMARY_BUTTON = `group inline-flex items-center justify-center gap-2 rounded-[11px] px-7 py-4 text-[1.05rem] font-semibold text-white bg-[#027333] hover:bg-[#025928] shadow-[0_10px_24px_-12px_rgba(2,115,51,0.55)] transition-colors ${FOCUS}`;

const h1Style: React.CSSProperties = {
    fontFamily: TITLE,
    fontWeight: 800,
    fontSize: 'clamp(2.35rem, 5vw, 3.9rem)',
    lineHeight: 1.02,
    letterSpacing: '-0.05em',
    color: INK,
    textWrap: 'balance',
};

const h2Style: React.CSSProperties = {
    fontFamily: TITLE,
    fontWeight: 800,
    fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
    lineHeight: 1.06,
    letterSpacing: '-0.045em',
    color: INK,
    textWrap: 'balance',
};

const eyebrowStyle: React.CSSProperties = {
    fontFamily: BODY,
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: GREEN,
};

/**
 * Palette de l'agenda Cal.com, alignée sur celle du site.
 * Le type impose les deux thèmes ; on sert le même dans les deux cas,
 * puisque `theme: 'light'` est forcé juste après.
 */
const CAL_VARS: Record<string, string> = {
    'cal-brand': GREEN,
    'cal-brand-emphasis': GREEN_DARK,
    'cal-brand-text': '#FFFFFF',
    'cal-text': INK,
    'cal-text-emphasis': INK,
    'cal-bg': '#FFFFFF',
    'cal-bg-subtle': PAPER,
    'cal-border': LINE,
    'cal-border-subtle': LINE,
    radius: '10px',
};

/** Ce qui rassure avant de cliquer : des faits, pas des promesses de résultat. */
const REASSURANCES = [
    { icon: Check, label: 'Gratuit, sans engagement' },
    { icon: MapPin, label: 'Visio ou sur place en Suisse romande' },
    { icon: Users, label: 'Vous parlez à l’équipe qui réalise' },
];

const NEXT_STEPS = [
    {
        title: 'Vous réservez',
        body: 'Confirmation et invitation d’agenda dans la foulée, avec le lien de visio. Rien à préparer de votre côté.',
    },
    {
        title: 'On écoute',
        body: 'Vous racontez où le temps et l’argent s’échappent. Nous posons des questions — nous ne déroulons pas de présentation.',
    },
    {
        title: 'Vous repartez avec un avis',
        body: 'Ce qui nous paraît faisable, dans quel ordre, et ce qui ne vaut pas le coup. Un devis suit seulement si vous le demandez.',
    },
];

const ContactPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const requested = searchParams.get('duree');
    const initial = BOOKING_OPTIONS.find((option) => option.id === requested) ?? BOOKING_OPTIONS[0];

    const [activeId, setActiveId] = useState<BookingOption['id']>(initial.id);
    const active = useMemo(
        () => BOOKING_OPTIONS.find((option) => option.id === activeId) ?? BOOKING_OPTIONS[0],
        [activeId],
    );

    const { status, error, formRef, handleSubmit, reset } = useContactForm('Page contact');

    /* Thème de l'embed : rejoué à chaque changement de créneau, chaque
       namespace ayant sa propre instance côté Cal.com. */
    useEffect(() => {
        let cancelled = false;

        (async () => {
            const cal = await getCalApi({ namespace: active.namespace });
            if (cancelled) return;

            cal('ui', {
                // Le site n'a pas de mode sombre : on force le clair, sinon
                // l'agenda part en sombre chez les visiteurs dont l'OS l'est,
                // au milieu d'une carte blanche.
                theme: 'light',
                hideEventTypeDetails: false,
                layout: 'month_view',
                cssVarsPerTheme: { light: CAL_VARS, dark: CAL_VARS },
            });
        })();

        return () => {
            cancelled = true;
        };
    }, [active.namespace]);

    /**
     * Descend jusqu'au formulaire et y place le curseur.
     * `scroll-behavior: smooth` est global (index.html) mais n'est pas gardé
     * par `prefers-reduced-motion` : on tranche ici, explicitement.
     * `preventScroll` évite que la prise de focus téléporte la page pendant
     * que le défilement doux est encore en cours.
     */
    const scrollToForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const target = document.getElementById('ecrire');
        if (!target) return; // sans cible, le lien fait son travail tout seul

        event.preventDefault();
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
        document.getElementById('name')?.focus({ preventScroll: true });
    };

    const selectOption = (option: BookingOption) => {
        setActiveId(option.id);
        // L'URL suit le choix : un lien /contact?duree=60 reste partageable.
        const next = new URLSearchParams(searchParams);
        next.set('duree', option.id);
        setSearchParams(next, { replace: true });
    };

    return (
        <main style={{ background: PAPER }}>
            {/* ---------------------------------------------------------- *
             *  En-tête
             * ---------------------------------------------------------- */}
            <section className="px-6 pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14">
                <div className="max-w-6xl mx-auto">
                    <p style={eyebrowStyle} className="mb-5 flex items-center gap-3">
                        <span aria-hidden className="inline-block w-8 h-px" style={{ background: GREEN }} />
                        Réserver un appel
                    </p>

                    <h1 style={h1Style} className="max-w-3xl">
                        Parlons de votre situation.
                    </h1>

                    <p
                        className="mt-6 max-w-2xl"
                        style={{
                            fontFamily: BODY,
                            fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                            lineHeight: 1.6,
                            letterSpacing: '-0.02em',
                            color: MUTED,
                        }}
                    >
                        Choisissez un créneau dans notre agenda&nbsp;: trente minutes pour défricher,
                        une heure pour cadrer. Vous parlez directement aux personnes qui réaliseront
                        le travail.
                    </p>

                    <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
                        {REASSURANCES.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="flex items-center gap-2.5"
                                style={{ fontFamily: BODY, fontSize: '0.95rem', color: MUTED }}
                            >
                                <Icon size={17} strokeWidth={2.2} style={{ color: GREEN }} aria-hidden />
                                {label}
                            </li>
                        ))}
                    </ul>

                    {/* Raccourci vers le formulaire. Le calendrier reste l'action
                        principale, mais le formulaire est en bas de page : sans ce
                        lien, qui veut seulement écrire doit deviner qu'il existe et
                        faire défiler jusqu'en bas. Volontairement discret — contour
                        et non vert plein — pour ne pas concurrencer la réservation. */}
                    <a
                        href="#ecrire"
                        onClick={scrollToForm}
                        className={`group mt-8 inline-flex items-center gap-3 rounded-full border bg-white py-2.5 pl-5 pr-2.5 transition-colors hover:border-[#027333] hover:text-[#027333] ${FOCUS}`}
                        style={{
                            borderColor: LINE,
                            fontFamily: BODY,
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            letterSpacing: '-0.02em',
                            color: INK,
                        }}
                    >
                        Je préfère envoyer un message
                        <span
                            aria-hidden
                            className="grid place-items-center w-7 h-7 rounded-full transition-colors group-hover:bg-[#027333]"
                            style={{ background: '#F2F1DF' }}
                        >
                            <ArrowDown
                                size={15}
                                strokeWidth={2.6}
                                className="contact-nudge transition-colors group-hover:text-white"
                                style={{ color: GREEN }}
                            />
                        </span>
                    </a>
                </div>
            </section>

            {/* ---------------------------------------------------------- *
             *  Le calendrier — action principale
             * ---------------------------------------------------------- */}
            <section id="reserver" className="px-6 pb-20 sm:pb-24 scroll-mt-28">
                <div className="max-w-6xl mx-auto">
                    <h2 className="sr-only">Choisir un créneau</h2>

                    {/* Choix de la durée */}
                    <div role="radiogroup" aria-label="Durée de l'appel" className="grid sm:grid-cols-2 gap-4">
                        {BOOKING_OPTIONS.map((option) => {
                            const isActive = option.id === active.id;

                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    role="radio"
                                    aria-checked={isActive}
                                    onClick={() => selectOption(option)}
                                    className={`text-left rounded-2xl p-6 sm:p-7 bg-white border-2 transition-all duration-300 ${FOCUS} ${
                                        isActive
                                            ? 'border-[#027333]'
                                            : 'border-[#E5E1D6] hover:border-[#93BF9E]'
                                    }`}
                                    style={isActive ? { boxShadow: SHADOW } : undefined}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <Clock
                                                size={18}
                                                strokeWidth={2.2}
                                                aria-hidden
                                                style={{ color: isActive ? GREEN : 'rgba(38,38,38,0.45)' }}
                                            />
                                            <span
                                                style={{
                                                    fontFamily: BODY,
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem',
                                                    letterSpacing: '-0.02em',
                                                    color: isActive ? GREEN : MUTED,
                                                }}
                                            >
                                                {option.duration}
                                            </span>
                                        </div>

                                        <span
                                            aria-hidden
                                            className={`flex-shrink-0 w-5 h-5 rounded-full border-2 grid place-items-center transition-colors ${
                                                isActive ? 'border-[#027333] bg-[#027333]' : 'border-[#E5E1D6]'
                                            }`}
                                        >
                                            {isActive && <Check size={12} strokeWidth={3.5} className="text-white" />}
                                        </span>
                                    </div>

                                    <h3
                                        className="mt-4"
                                        style={{
                                            fontFamily: TITLE,
                                            fontWeight: 800,
                                            fontSize: '1.3rem',
                                            letterSpacing: '-0.035em',
                                            color: INK,
                                        }}
                                    >
                                        {option.title}
                                    </h3>

                                    {/* La question passe avant la description : c'est elle
                                        qui fait choisir entre les deux formats. */}
                                    <p
                                        className="mt-2"
                                        style={{
                                            fontFamily: BODY,
                                            fontWeight: 600,
                                            fontSize: '1.02rem',
                                            lineHeight: 1.45,
                                            letterSpacing: '-0.02em',
                                            color: isActive ? GREEN : INK,
                                            textWrap: 'balance',
                                        }}
                                    >
                                        {option.hook}
                                    </p>

                                    <p
                                        className="mt-2"
                                        style={{
                                            fontFamily: BODY,
                                            fontSize: '0.95rem',
                                            lineHeight: 1.6,
                                            letterSpacing: '-0.015em',
                                            color: MUTED,
                                        }}
                                    >
                                        {option.description}
                                    </p>

                                    <ul className="mt-5 space-y-2">
                                        {option.points.map((point) => (
                                            <li
                                                key={point}
                                                className="flex items-start gap-2.5"
                                                style={{
                                                    fontFamily: BODY,
                                                    fontSize: '0.9rem',
                                                    color: 'rgba(38,38,38,0.6)',
                                                }}
                                            >
                                                <Check
                                                    size={15}
                                                    strokeWidth={2.6}
                                                    aria-hidden
                                                    className="flex-shrink-0 mt-[3px]"
                                                    style={{ color: GREEN }}
                                                />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </button>
                            );
                        })}
                    </div>

                    {/* L'agenda */}
                    <div
                        className="mt-6 rounded-2xl bg-white border overflow-hidden"
                        style={{ borderColor: LINE, boxShadow: SHADOW }}
                    >
                        <Cal
                            key={active.id}
                            namespace={active.namespace}
                            calLink={calLink(active)}
                            style={{ width: '100%', height: '100%', minHeight: 620, overflow: 'scroll' }}
                            config={{ layout: 'month_view' }}
                        />
                    </div>

                    {/* Repli si l'iframe est bloquée (extensions, politiques d'entreprise). */}
                    <p
                        className="mt-4 text-center"
                        style={{ fontFamily: BODY, fontSize: '0.88rem', color: 'rgba(38,38,38,0.55)' }}
                    >
                        L&rsquo;agenda ne s&rsquo;affiche pas&nbsp;?{' '}
                        <a
                            href={`https://cal.com/${calLink(active)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 underline underline-offset-2 rounded-sm ${FOCUS}`}
                            style={{ color: GREEN, fontWeight: 600 }}
                        >
                            Ouvrez-le dans un nouvel onglet
                            <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden />
                        </a>
                    </p>
                </div>
            </section>

            {/* ---------------------------------------------------------- *
             *  Ce qui se passe ensuite
             * ---------------------------------------------------------- */}
            <section className="px-6 py-16 sm:py-20 border-y" style={{ borderColor: LINE, background: '#FFFFFF' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 style={h2Style}>Ce qui se passe ensuite</h2>

                    <ol className="mt-10 grid md:grid-cols-3 gap-8 md:gap-10">
                        {NEXT_STEPS.map((step, index) => (
                            <li key={step.title}>
                                <div className="flex items-center gap-3">
                                    <span
                                        aria-hidden
                                        className="grid place-items-center w-8 h-8 rounded-full flex-shrink-0"
                                        style={{ background: GREEN, color: '#FFFFFF', fontFamily: BODY, fontWeight: 700, fontSize: '0.85rem' }}
                                    >
                                        {index + 1}
                                    </span>
                                    <h3
                                        style={{
                                            fontFamily: TITLE,
                                            fontWeight: 800,
                                            fontSize: '1.2rem',
                                            letterSpacing: '-0.035em',
                                            color: INK,
                                        }}
                                    >
                                        {step.title}
                                    </h3>
                                </div>
                                <p
                                    className="mt-3.5"
                                    style={{
                                        fontFamily: BODY,
                                        fontSize: '0.98rem',
                                        lineHeight: 1.65,
                                        letterSpacing: '-0.015em',
                                        color: MUTED,
                                    }}
                                >
                                    {step.body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------------------------------------------------- *
             *  Le formulaire — pour qui n'est pas prêt à poser une date
             * ---------------------------------------------------------- */}
            <section id="ecrire" className="px-6 py-20 sm:py-24 scroll-mt-28">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16">
                    <div className="lg:col-span-3">
                        <p style={eyebrowStyle} className="mb-4">
                            Pas encore prêt à poser une date&nbsp;?
                        </p>
                        <h2 style={h2Style}>Écrivez-nous.</h2>
                        <p
                            className="mt-5 max-w-xl"
                            style={{
                                fontFamily: BODY,
                                fontSize: '1.02rem',
                                lineHeight: 1.65,
                                letterSpacing: '-0.02em',
                                color: MUTED,
                            }}
                        >
                            Décrivez ce qui vous occupe. Nous lisons chaque message et répondons
                            nous-mêmes&nbsp;— pas de robot, pas de séquence commerciale.
                        </p>

                        {status === 'success' ? (
                            <ConfirmationPanel onReset={reset} />
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-6">
                                {/* Piège à robots : hors flux et hors tabulation. */}
                                <div className="absolute w-px h-px -left-[9999px] overflow-hidden" aria-hidden>
                                    <label htmlFor="website">Ne pas remplir</label>
                                    <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Field label="Nom" name="name" required autoComplete="name" />
                                    <Field label="Entreprise" name="company" required autoComplete="organization" />
                                    <Field label="E-mail" name="email" type="email" required autoComplete="email" />
                                    <Field
                                        label="Téléphone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        hint="facultatif"
                                    />
                                </div>

                                <div>
                                    <FieldLabel htmlFor="budget" label="Budget envisagé" hint="facultatif" />
                                    <select
                                        id="budget"
                                        name="budget"
                                        defaultValue=""
                                        className={`w-full rounded-xl border bg-white px-4 py-3.5 transition-colors focus:border-[#027333] focus:outline-none ${FOCUS}`}
                                        style={{
                                            borderColor: LINE,
                                            fontFamily: BODY,
                                            fontSize: '1rem',
                                            color: INK,
                                        }}
                                    >
                                        <option value="">Je ne sais pas encore</option>
                                        {BUDGET_OPTIONS.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                    <p
                                        className="mt-2"
                                        style={{ fontFamily: BODY, fontSize: '0.83rem', color: 'rgba(38,38,38,0.5)' }}
                                    >
                                        Une fourchette suffit, et « je ne sais pas » est une réponse
                                        parfaitement valable&nbsp;: c&rsquo;est souvent le premier sujet de l&rsquo;appel.
                                    </p>
                                </div>

                                <div>
                                    <FieldLabel htmlFor="message" label="Votre besoin" required />
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        placeholder="Le processus qui coince, l’outil qui manque, l’équipe concernée…"
                                        className={`w-full rounded-xl border bg-white px-4 py-3.5 resize-y transition-colors focus:border-[#027333] focus:outline-none ${FOCUS}`}
                                        style={{
                                            borderColor: LINE,
                                            fontFamily: BODY,
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                            color: INK,
                                        }}
                                    />
                                </div>

                                {status === 'error' && error && (
                                    <p
                                        role="alert"
                                        className="rounded-xl px-4 py-3.5 border"
                                        style={{
                                            borderColor: '#E4B8B8',
                                            background: '#FCF4F4',
                                            fontFamily: BODY,
                                            fontSize: '0.95rem',
                                            color: '#8A2A2A',
                                        }}
                                    >
                                        {error} Vous pouvez aussi nous joindre à{' '}
                                        <a href={`mailto:${CONTACT_EMAIL}`} className="underline font-semibold">
                                            {CONTACT_EMAIL}
                                        </a>
                                        .
                                    </p>
                                )}

                                <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-1">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className={`${PRIMARY_BUTTON} shrink-0 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed`}
                                        style={{ fontFamily: BODY, letterSpacing: '-0.03em' }}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" aria-hidden />
                                                Envoi en cours…
                                            </>
                                        ) : (
                                            <>
                                                Envoyer le message
                                                <ArrowRight
                                                    size={18}
                                                    strokeWidth={2.4}
                                                    aria-hidden
                                                    className="transition-transform group-hover:translate-x-1"
                                                />
                                            </>
                                        )}
                                    </button>

                                    <p
                                        style={{
                                            fontFamily: BODY,
                                            fontSize: '0.83rem',
                                            lineHeight: 1.55,
                                            color: 'rgba(38,38,38,0.5)',
                                        }}
                                    >
                                        Vos informations servent à répondre à cette demande, rien d&rsquo;autre.
                                        Aucune revente, aucune newsletter automatique.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Coordonnées directes */}
                    <aside className="lg:col-span-2">
                        <div
                            className="rounded-2xl p-7 sm:p-8 h-full"
                            style={{ background: '#F2F1DF' }}
                        >
                            <h3
                                style={{
                                    fontFamily: TITLE,
                                    fontWeight: 800,
                                    fontSize: '1.25rem',
                                    letterSpacing: '-0.035em',
                                    color: INK,
                                }}
                            >
                                Ou directement
                            </h3>

                            <ul className="mt-6 space-y-5">
                                <li>
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className={`group flex items-start gap-3 rounded-sm ${FOCUS}`}
                                    >
                                        <Mail size={18} strokeWidth={2.2} aria-hidden className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                                        <span>
                                            <span className="block" style={{ fontFamily: BODY, fontSize: '0.8rem', color: 'rgba(38,38,38,0.55)' }}>
                                                E-mail
                                            </span>
                                            <span
                                                className="block break-all group-hover:underline underline-offset-2"
                                                style={{ fontFamily: BODY, fontWeight: 600, fontSize: '0.98rem', color: INK }}
                                            >
                                                {CONTACT_EMAIL}
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <div className="flex items-start gap-3">
                                        <MapPin size={18} strokeWidth={2.2} aria-hidden className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                                        <span>
                                            <span className="block" style={{ fontFamily: BODY, fontSize: '0.8rem', color: 'rgba(38,38,38,0.55)' }}>
                                                Adresse
                                            </span>
                                            <span
                                                className="block"
                                                style={{ fontFamily: BODY, fontWeight: 600, fontSize: '0.98rem', color: INK }}
                                            >
                                                {COMPANY_ADDRESS_LINES.join(', ')}
                                            </span>
                                            <span
                                                className="block mt-1"
                                                style={{ fontFamily: BODY, fontSize: '0.88rem', color: 'rgba(38,38,38,0.6)' }}
                                            >
                                                {COMPANY_SERVICE_AREA}
                                            </span>
                                        </span>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-8 pt-7 border-t" style={{ borderColor: 'rgba(38,38,38,0.12)' }}>
                                <p
                                    className="flex items-start gap-3"
                                    style={{ fontFamily: BODY, fontSize: '0.92rem', lineHeight: 1.6, color: MUTED }}
                                >
                                    <CalendarCheck size={18} strokeWidth={2.2} aria-hidden className="mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                                    Un créneau vous convient déjà&nbsp;? Réserver prend moins d&rsquo;une
                                    minute et vous évite l&rsquo;aller-retour par mail.
                                </p>
                                <a
                                    href="#reserver"
                                    className={`mt-4 inline-flex items-center gap-2 rounded-sm ${FOCUS}`}
                                    style={{ fontFamily: BODY, fontWeight: 600, fontSize: '0.95rem', color: GREEN }}
                                >
                                    Remonter à l&rsquo;agenda
                                    <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

/* ------------------------------------------------------------------ *
 *  Fragments de formulaire
 * ------------------------------------------------------------------ */

const FieldLabel: React.FC<{ htmlFor: string; label: string; required?: boolean; hint?: string }> = ({
    htmlFor,
    label,
    required,
    hint,
}) => (
    <label
        htmlFor={htmlFor}
        className="flex items-baseline gap-2 mb-2"
        style={{ fontFamily: BODY, fontWeight: 600, fontSize: '0.9rem', color: INK }}
    >
        {label}
        {required && (
            <span style={{ color: GREEN }} aria-hidden>
                *
            </span>
        )}
        {hint && (
            <span style={{ fontWeight: 400, fontSize: '0.8rem', color: 'rgba(38,38,38,0.5)' }}>{hint}</span>
        )}
    </label>
);

const Field: React.FC<{
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
    hint?: string;
}> = ({ label, name, type = 'text', required, autoComplete, hint }) => (
    <div>
        <FieldLabel htmlFor={name} label={label} required={required} hint={hint} />
        <input
            id={name}
            name={name}
            type={type}
            required={required}
            autoComplete={autoComplete}
            className={`w-full rounded-xl border bg-white px-4 py-3.5 transition-colors focus:border-[#027333] focus:outline-none ${FOCUS}`}
            style={{ borderColor: LINE, fontFamily: BODY, fontSize: '1rem', color: INK }}
        />
    </div>
);

/**
 * Confirmation après envoi. On garde la personne sur la page : la
 * version précédente la renvoyait d'office à l'accueil au bout de trois
 * secondes, ce qui coupait la lecture et faisait perdre l'agenda de vue.
 */
const ConfirmationPanel: React.FC<{ onReset: () => void }> = ({ onReset }) => (
    <div
        className="mt-10 rounded-2xl bg-white border p-8 sm:p-10"
        style={{ borderColor: LINE, boxShadow: SHADOW }}
        role="status"
    >
        <span
            aria-hidden
            className="grid place-items-center w-12 h-12 rounded-full"
            style={{ background: GREEN }}
        >
            <Check size={24} strokeWidth={3} className="text-white" />
        </span>

        <h3
            className="mt-6"
            style={{ fontFamily: TITLE, fontWeight: 800, fontSize: '1.55rem', letterSpacing: '-0.04em', color: INK }}
        >
            Message reçu.
        </h3>

        <p
            className="mt-3"
            style={{ fontFamily: BODY, fontSize: '1rem', lineHeight: 1.65, color: MUTED }}
        >
            Un accusé de réception vient de partir vers votre boîte. Nous revenons
            vers vous rapidement, par une vraie réponse écrite par une personne.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <a
                href="#reserver"
                className={PRIMARY_BUTTON}
                style={{ fontFamily: BODY, letterSpacing: '-0.03em' }}
            >
                <CalendarCheck size={18} strokeWidth={2.3} aria-hidden />
                Réserver un créneau maintenant
            </a>
            <Link
                to="/insights"
                className={`inline-flex items-center justify-center gap-2 rounded-[11px] px-7 py-4 text-[1.05rem] font-semibold bg-white border transition-colors hover:border-[#027333] hover:text-[#027333] ${FOCUS}`}
                style={{ borderColor: LINE, color: INK, fontFamily: BODY, letterSpacing: '-0.03em' }}
            >
                Lire nos analyses
            </Link>
        </div>

        <button
            type="button"
            onClick={onReset}
            className={`mt-6 inline-flex items-center gap-2 rounded-sm ${FOCUS}`}
            style={{ fontFamily: BODY, fontSize: '0.9rem', color: 'rgba(38,38,38,0.55)' }}
        >
            <MessageSquare size={15} strokeWidth={2.2} aria-hidden />
            Envoyer un autre message
        </button>
    </div>
);

export default ContactPage;
