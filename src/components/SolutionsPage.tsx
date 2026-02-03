
import React from 'react';
import InnovationShowcase from './InnovationShowcase';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-[#1A1A1A] text-white py-20 px-6 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFB600]/10 skew-x-12 transform origin-bottom"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/"
            className="flex items-center text-gray-400 hover:text-[#FFB600] transition-colors mb-8 group inline-flex"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <h1 className="text-5xl lg:text-6xl font-light mb-6">
            Nos Solutions <span className="font-bold text-[#FFB600]">Propriétaires</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Découvrez comment nos outils technologiques s'intègrent dans votre écosystème pour automatiser vos tâches critiques et sécuriser vos données.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Intro Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#F4F4F4]/50 p-6 rounded-xl border border-transparent hover:border-[#FFB600]/20 transition-all">
            <CheckCircle2 className="text-[#FFB600] w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg mb-2">Déploiement Rapide</h3>
            <p className="text-sm text-gray-600">Intégration plug-and-play avec vos outils existants (SAP, Salesforce, Microsoft 365).</p>
          </div>
          <div className="bg-[#F4F4F4]/50 p-6 rounded-xl border border-transparent hover:border-[#FFB600]/20 transition-all">
            <CheckCircle2 className="text-[#FFB600] w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg mb-2">Sécurité Maximale</h3>
            <p className="text-sm text-gray-600">Architecture chiffrée de bout en bout et hébergement souverain (SecNumCloud).</p>
          </div>
          <div className="bg-[#F4F4F4]/50 p-6 rounded-xl border border-transparent hover:border-[#FFB600]/20 transition-all">
            <CheckCircle2 className="text-[#FFB600] w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg mb-2">Formation Incluse</h3>
            <p className="text-sm text-gray-600">Onboarding complet de vos équipes pour une adoption immédiate des outils.</p>
          </div>
        </div>

        {/* The Bento Grid reused */}
        <div className="mb-16">
          <InnovationShowcase />
        </div>

        {/* CTA Bottom */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
          <h2 className="text-3xl font-light text-[#1A1A1A] mb-6">Une solution sur-mesure ?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Nos outils sont modulables. Discutons de vos besoins spécifiques pour adapter nos algorithmes à votre secteur.
          </p>
          <button className="bg-[#1A1A1A] text-white px-8 py-4 font-bold hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all">
            Contacter l'équipe technique
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
