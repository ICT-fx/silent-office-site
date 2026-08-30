// ARCHIVE — retirée de la home le 2026-08-30.
// Provenance : src/components/InnovationShowcase.tsx, « SECTION 1: CONTEXTE & ENJEUX ».
// Extraite ici telle quelle, emballée dans un composant autonome pour pouvoir
// être remise en place à l'identique (voir README.md du dossier).

import React from 'react';
import { TrendingUp } from 'lucide-react';

const ContexteEnjeuxSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Government illustration "Osez l'IA" */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-8 relative group">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#027333]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-[#027333]/20"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#262626] mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#027333]/10 flex items-center justify-center text-[#027333]">
                    <TrendingUp size={18} />
                  </span>
                  Objectifs d'adoption IA 2030
                </h3>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-gray-500 font-medium text-sm">Grands Groupes</span>
                      <span className="text-2xl font-bold text-[#262626]">100%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#262626] w-full rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105" />
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-gray-500 font-medium text-sm">PME / ETI</span>
                      <span className="text-2xl font-bold text-[#262626]">80%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#262626] w-[80%] rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105" />
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-gray-500 font-medium text-sm">TPE</span>
                      <span className="text-2xl font-bold text-[#262626]">50%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#262626] w-[50%] rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-400 italic">
                    Aligné avec la stratégie nationale pour l'IA
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              Source : Plan "Osez l'IA" - Gouvernement français
            </p>
          </div>

          {/* Right: Content */}
          <div>
            <span className="text-[#027333] font-bold uppercase tracking-widest text-xs mb-4 block">
              Contexte & Enjeux
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#262626] mb-8 leading-tight">
              Un levier devenu incontournable pour rester compétitif.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Aujourd'hui, toutes les entreprises font face à la même équation : pression sur les marges, complexité croissante des systèmes et accélération de la concurrence.
              </p>
              <p>
                L'automatisation intelligente et l'IA ne sont plus des options futuristes. Elles sont devenues des leviers structurants immédiats pour gagner en efficacité, assurer la stabilité opérationnelle et redonner de la capacité d'innovation à vos équipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContexteEnjeuxSection;
