import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { solutionsList } from '../data/solutions';

/**
 * Page 404.
 *
 * Le statut HTTP 404 lui-même vient de Vercel, qui sert `dist/404.html`
 * lorsqu'aucun fichier pré-rendu ne correspond — voir `vercel.json` et
 * `scripts/prerender.mjs`. Ce composant n'est que l'habillage.
 *
 * Elle propose des portes de sortie plutôt qu'un cul-de-sac : une URL fautive
 * est souvent une offre mal orthographiée.
 */
const NotFoundPage: React.FC = () => (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#027333]">
                Erreur 404
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#262626]">
                Cette page n&rsquo;existe pas.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-[#262626]/70">
                Le lien est peut-être erroné, ou la page a été renommée. Voici les
                chemins les plus courts vers ce que vous cherchiez.
            </p>

            <div className="mt-10">
                <h2 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#262626]/50">
                    Nos offres
                </h2>
                <ul className="mt-4 divide-y divide-[#262626]/10 border-y border-[#262626]/10">
                    {solutionsList.map((solution) => (
                        <li key={solution.slug}>
                            <Link
                                to={`/solutions/${solution.slug}`}
                                className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-[#027333]"
                            >
                                <span className="font-medium">{solution.title}</span>
                                <ArrowRight
                                    size={18}
                                    className="flex-shrink-0 text-[#262626]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#027333]"
                                    aria-hidden
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#027333] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#025928]"
                >
                    Retour à l&rsquo;accueil
                </Link>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#262626]/20 px-6 py-3 text-sm font-semibold text-[#262626] transition-colors hover:border-[#027333] hover:text-[#027333]"
                >
                    Nous écrire
                </Link>
            </div>
        </div>
    </div>
);

export default NotFoundPage;
