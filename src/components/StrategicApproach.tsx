
import React from 'react';

const StrategicApproach: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-6xl font-light text-[#1A1A1A] leading-tight mb-8">
            Une approche <span className="font-bold">hybride</span>, entre vision Board et précision technique.
          </h2>
          <div className="w-20 h-1 bg-[#FFB600] mb-12"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Chez Silent Office, nous croyons que l'Intelligence Artificielle n'est pas une fin en soi, mais un catalyseur d'efficacité. Nous intervenons aux intersections critiques de votre organisation pour briser les silos et automatiser la valeur ajoutée.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-bold text-[#1A1A1A] mb-2">+20%</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wide">De Marge Opérationnelle</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#1A1A1A] mb-2">6 Mois</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wide">ROI Garanti</p>
            </div>
            <div className="col-span-2 mt-4">
              <h4 className="text-3xl font-bold text-[#1A1A1A] mb-2">100%</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Conformité & Sécurité</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl relative group">
            <img
              src="https://picsum.photos/800/800?abstract=1"
              alt="Abstrait Data"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A]/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">
              <p className="italic text-[#1A1A1A] mb-4">"Silent Office a transformé notre vision de l'automatisation financière en moins de trois mois. Un partenaire indispensable pour notre DSI."</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-bold">Jean-Marc L.</p>
                  <p className="text-xs text-gray-500">CFO, Groupe Hélios</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#FFB600] -z-10 opacity-30"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#F4F4F4] -z-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default StrategicApproach;
