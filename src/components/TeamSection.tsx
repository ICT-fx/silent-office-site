import React from 'react';

import { AnimatedTooltip, type AnimatedTooltipItem } from './ui/animated-tooltip';

/**
 * Portraits recadrés en carré 640×640 (cadrage visage) dans `public/images/team/`.
 * L'ordre du tableau est l'ordre d'affichage de la rangée.
 */
const team: AnimatedTooltipItem[] = [
  {
    id: 1,
    name: 'Fantin Schellekens',
    designation: 'Président',
    image: '/images/team/fantin-schellekens.jpg',
  },
  {
    id: 2,
    name: 'Yanis Wamou',
    designation: 'Head of Development',
    image: '/images/team/yanis-wamou.jpg',
  },
  {
    id: 3,
    name: 'Lola Bembekoff',
    // TODO — confirmer l'intitulé de poste
    designation: 'Automatisation & Intégration',
    image: '/images/team/lola-bembekoff.jpg',
  },
  {
    id: 4,
    name: 'Valentin Lefèvre',
    // TODO — confirmer l'intitulé de poste
    designation: 'Design & Expérience',
    image: '/images/team/valentin-lefevre.jpg',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#027333] mb-6">
          L'équipe
        </h2>
        <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-24">
          Une équipe à taille humaine, accessible directement, qui suit vos projets du cadrage à la
          mise en production.
        </p>

        <div className="flex flex-row items-center justify-center">
          {/* pr-6 compense le `-mr-6` du dernier portrait, sinon la rangée est décentrée */}
          <AnimatedTooltip items={team} className="pr-6" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
