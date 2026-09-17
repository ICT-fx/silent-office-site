import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { NAMED_CLIENTS } from '../data/portfolio';

/**
 * Bandeau de collaborations, juste sous le bandeau photo du Hero.
 *
 * Volontairement nu : les logos des clients, et un bouton vers le portfolio.
 * Aucun titre, aucune accroche — les marques se présentent seules. Les visuels
 * de projet vivent sur /portfolio, pas ici. Les clients anonymes n'y figurent
 * pas du tout : leurs projets ne sont visibles que sur /portfolio.
 *
 * Rythme vertical : le bloc occupe tout le bandeau papier, ouvert au-dessus des
 * logos par une vague et refermé sous le bouton par une seconde (64/80px chacune,
 * portées par `Home`). Ces vagues apportent déjà l'air en haut et en bas : les
 * paddings du bloc ne font que compléter l'écart jusqu'aux logos et au bouton.
 */
const ClientsBand: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="clients" className="pt-10 pb-8 md:pt-12 md:pb-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col items-center">
                <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-24">
                    {NAMED_CLIENTS.map((client) => (
                        <li key={client.id}>
                            <img
                                src={client.logo}
                                alt={client.name}
                                className={`${client.logoClass} w-auto`}
                                loading="lazy"
                                decoding="async"
                            />
                        </li>
                    ))}
                </ul>

                {/* Bouton « disque qui avale le pill » : le seul de ce type sur le
                    site — les autres CTA sont des pills pleins en dégradé vert. */}
                <button
                    type="button"
                    onClick={() => navigate('/portfolio')}
                    className="group relative mt-12 md:mt-14 inline-flex items-center gap-5 overflow-hidden rounded-full border border-[#262626]/15 bg-white py-2 pl-8 pr-2 shadow-[0_1px_2px_rgba(38,38,38,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-18px_rgba(2,115,51,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#027333]/40 focus-visible:ring-offset-2"
                >
                    {/* Le disque vert se dilate jusqu'à recouvrir tout le bouton. */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#027333] transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform group-hover:scale-[14]"
                    />

                    <span
                        className="relative z-10 text-base font-medium text-[#262626] transition-colors duration-300 group-hover:text-white"
                        style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: '-0.03em' }}
                    >
                        Ouvrir le portfolio
                    </span>

                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#027333] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#027333]">
                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default ClientsBand;
