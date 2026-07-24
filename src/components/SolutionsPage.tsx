
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions';

const PAPER = '#FCFBF8';
const CREAM = '#F4F1E9';
const INK = '#262626';
const GREEN = '#027333';

const SolutionsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen" style={{ background: PAPER }}>
      {/* Page Header */}
      <div className="py-20 px-6 relative overflow-hidden text-white" style={{ background: INK }}>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 skew-x-12 transform origin-bottom" style={{ background: GREEN }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/"
            className="flex items-center text-gray-400 hover:text-[#027333] transition-colors mb-8 group inline-flex"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>

          <h1 className="text-5xl lg:text-6xl font-light mb-6">
            Nos <span className="font-bold text-[#027333]">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Cinq façons concrètes de faire gagner du temps, de l'argent et de la clarté à vos équipes.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {solutionsList.map((solution) => (
            <Link
              key={solution.slug}
              to={`/solutions/${solution.slug}`}
              className="group flex flex-col justify-between p-8 rounded-2xl border transition-all hover:shadow-xl"
              style={{ background: CREAM, borderColor: 'transparent' }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-3 transition-colors" style={{ color: INK }}>
                  <span className="group-hover:text-[#027333] transition-colors">{solution.title}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{solution.shortDescription}</p>
              </div>
              <div className="mt-8 flex items-center font-bold text-sm" style={{ color: GREEN }}>
                Découvrir
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 rounded-3xl p-12 text-center border border-gray-100" style={{ background: '#FAFAF7' }}>
          <h2 className="text-3xl font-light mb-6" style={{ color: INK }}>Un besoin qui ne rentre pas dans une case ?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Parlons de votre situation. Nous vous proposons l'accompagnement le plus adapté, sans détour.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 font-bold text-white transition-all hover:opacity-90"
            style={{ background: INK }}
          >
            Contacter l'équipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
