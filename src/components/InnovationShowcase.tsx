
import React from 'react';
import { TrendingUp, Layers, ShieldCheck } from 'lucide-react';
import { ViewState } from '../types';

interface InnovationShowcaseProps {
  onNavigate?: (view: ViewState, sectionId?: string) => void;
}

const InnovationShowcase: React.FC<InnovationShowcaseProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 lg:-mt-[58vh] relative z-10">
      {/* SECTION 1: CONTEXTE & ENJEUX (Style "Split Blanc" avec gros numéro) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Government illustration "Osez l'IA" */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-8 relative group">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB600]/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-[#FFB600]/20"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#FFB600]/10 flex items-center justify-center text-[#FFB600]">
                      <TrendingUp size={18} />
                    </span>
                    Objectifs d'adoption IA 2030
                  </h3>

                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-gray-500 font-medium text-sm">Grands Groupes</span>
                        <span className="text-2xl font-bold text-[#1A1A1A]">100%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1A1A1A] w-full rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105" />
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-gray-500 font-medium text-sm">PME / ETI</span>
                        <span className="text-2xl font-bold text-[#1A1A1A]">80%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1A1A1A] w-[80%] rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105" />
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-gray-500 font-medium text-sm">TPE</span>
                        <span className="text-2xl font-bold text-[#1A1A1A]">50%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1A1A1A] w-[50%] rounded-full transform origin-left transition-transform duration-1000 ease-out hover:scale-x-105" />
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
              <span className="text-[#FFB600] font-bold uppercase tracking-widest text-xs mb-4 block">
                Contexte & Enjeux
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
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

      {/* SECTION 2: ROI & SÉCURITÉ (Style "Dark Mode") */}
      <section className="py-24 px-6 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Des résultats mesurables, dans un cadre sécurisé.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              La performance n'a de sens que si elle s'inscrit dans un cadre gouverné et conforme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Point 1: ROI */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#FFB600]/50 transition-colors">
              <div className="w-14 h-14 bg-[#FFB600]/10 rounded-xl flex items-center justify-center mb-6 border border-[#FFB600]/20">
                <TrendingUp className="text-[#FFB600] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">ROI & Création de Valeur</h3>
              <p className="text-gray-400 leading-relaxed">
                Réduction des coûts opérationnels et gains de temps significatifs dès les premiers mois.
              </p>
            </div>

            {/* Point 2: KPIs */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#FFB600]/50 transition-colors">
              <div className="w-14 h-14 bg-[#FFB600]/10 rounded-xl flex items-center justify-center mb-6 border border-[#FFB600]/20">
                <Layers className="text-[#FFB600] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">KPIs & Pilotage</h3>
              <p className="text-gray-400 leading-relaxed">
                Nous transformons des processus flous en données monitorées pour un pilotage par la preuve.
              </p>
            </div>

            {/* Point 3: Conformité */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#FFB600]/50 transition-colors">
              <div className="w-14 h-14 bg-[#FFB600]/10 rounded-xl flex items-center justify-center mb-6 border border-[#FFB600]/20">
                <ShieldCheck className="text-[#FFB600] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Conformité & Maîtrise</h3>
              <p className="text-gray-400 leading-relaxed">
                Maîtrise totale des risques liés aux données. Vos automatisations respectent vos exigences de gouvernance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PARTENARIAT (Style "Image + Citation") */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image with Quote Overlay */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Collaboration d'équipe"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-white italic text-sm lg:text-base leading-relaxed">
                  "Silent Office n'est pas un fournisseur d'outils, c'est un partenaire de transformation qui s'engage sur votre réussite à long terme."
                </p>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Partenaire, pas simple prestataire.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nous travaillons aux côtés des directions générales, IT et métiers pour construire des solutions qui s'inscrivent dans la durée. Notre approche repose sur la proximité, la compréhension fine de vos enjeux politiques et techniques, et une amélioration continue des dispositifs.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  Confiance
                </span>
                <span className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  Long-terme
                </span>
                <span className="px-4 py-2 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                  Partenariat
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationShowcase;
