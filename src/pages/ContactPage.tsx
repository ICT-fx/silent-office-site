import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

const ContactPage: React.FC = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3);

    // Formspree hook - Remplacez 'YOUR_FORM_ID' par votre vrai Form ID
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID');

    // Redirection automatique après succès
    useEffect(() => {
        if (state.succeeded) {
            const timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        navigate('/');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [state.succeeded, navigate]);

    const budgetOptions = [
        '€0-€10K',
        '€10K-€30K',
        '€30K-€100K',
        '€100K-€250K',
        '€250K-€500K',
        'Plus de €500K'
    ];

    // Page de confirmation
    if (state.succeeded) {
        return (
            <div className="min-h-screen bg-white pt-32 pb-24 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 bg-[#FFB600] rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={40} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-light mb-6">Merci pour votre demande !</h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Nous avons bien reçu votre message et vous contacterons dans les plus brefs délais pour détailler les besoins de votre projet.
                    </p>
                    <p className="text-gray-500 mb-8">
                        Redirection vers la page d'accueil dans {countdown} seconde{countdown > 1 ? 's' : ''}...
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#1A1A1A] text-white px-8 py-4 font-bold hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all"
                    >
                        Retour à l'accueil
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Formulaire */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-light mb-4">Contactez-nous</h1>
                        <p className="text-gray-600 mb-12">
                            Décrivez-nous votre projet et nous vous recontacterons pour en discuter.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nom */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nom*"
                                    required
                                    className="w-full border-b border-gray-300 py-3 px-0 focus:border-[#FFB600] focus:outline-none transition-colors"
                                />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>

                            {/* Entreprise */}
                            <div>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Entreprise*"
                                    required
                                    className="w-full border-b border-gray-300 py-3 px-0 focus:border-[#FFB600] focus:outline-none transition-colors"
                                />
                                <ValidationError prefix="Company" field="company" errors={state.errors} />
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail de l'entreprise*"
                                    required
                                    className="w-full border-b border-gray-300 py-3 px-0 focus:border-[#FFB600] focus:outline-none transition-colors"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            {/* Téléphone */}
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Téléphone*"
                                    required
                                    className="w-full border-b border-gray-300 py-3 px-0 focus:border-[#FFB600] focus:outline-none transition-colors"
                                />
                                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                            </div>

                            {/* Budget */}
                            <div>
                                <select
                                    name="budget"
                                    required
                                    defaultValue=""
                                    className="w-full border-b border-gray-300 py-3 px-0 focus:border-[#FFB600] focus:outline-none transition-colors bg-white text-gray-900"
                                >
                                    <option value="" disabled>Budget du projet*</option>
                                    {budgetOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <ValidationError prefix="Budget" field="budget" errors={state.errors} />
                            </div>

                            {/* Description */}
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Décrivez vos besoins en détail*"
                                    required
                                    rows={5}
                                    className="w-full border border-gray-300 py-3 px-4 focus:border-[#FFB600] focus:outline-none transition-colors resize-none"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            {/* Bouton d'envoi */}
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-[#FFB600] text-[#1A1A1A] py-5 font-bold text-lg hover:bg-[#1A1A1A] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
                            </button>
                        </form>

                        <p className="text-sm text-gray-500 mt-6">
                            En cliquant sur Envoyer, vous consentez à ce que Silent Office traite vos données personnelles conformément à notre{' '}
                            <a href="#" className="underline">politique de confidentialité</a>.
                            En communiquant votre numéro de téléphone, vous acceptez que nous puissions vous contacter par le biais
                            d'appels vocaux, de SMS et d'applications de messagerie.
                        </p>

                        <p className="text-sm text-gray-600 mt-6">
                            Vous pouvez également nous envoyer votre demande à{' '}
                            <a href="mailto:contact@silentoffice.org" className="text-[#FFB600] font-bold underline">
                                contact@silentoffice.org
                            </a>
                        </p>
                    </div>

                    {/* Que se passe-t-il ensuite */}
                    <div className="bg-[#F4F4F4] rounded-2xl p-12">
                        <h2 className="text-3xl font-light mb-12">Que se passe-t-il ensuite ?</h2>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center font-bold">
                                    1
                                </div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Une fois que nous aurons reçu et traité votre demande, nous vous contacterons pour détailler les
                                        besoins de votre projet et signer un accord de confidentialité.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center font-bold">
                                    2
                                </div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Après avoir examiné vos souhaits, vos besoins et vos attentes, notre équipe élaborera une proposition
                                        de projet avec l'étendue des travaux, la taille de l'équipe, les délais et les coûts estimés.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center font-bold">
                                    3
                                </div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Nous prendrons rendez-vous avec vous pour discuter de l'offre et régler les détails.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center font-bold">
                                    4
                                </div>
                                <div>
                                    <p className="text-gray-700 leading-relaxed">
                                        Enfin, nous signons un contrat et commençons immédiatement à travailler sur votre projet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
