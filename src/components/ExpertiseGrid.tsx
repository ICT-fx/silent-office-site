import React, { useState } from 'react';
import { Layout, Cpu, Users, X, ArrowRight, ShieldCheck, Database, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExpertiseItem } from '../types';

const ExpertiseGrid: React.FC = () => {
  const [activeDrawer, setActiveDrawer] = useState<ExpertiseItem | null>(null);

  // Updated Pillars for Silent Office
  const expertises: ExpertiseItem[] = [
    {
      id: 'audit-processus',
      title: 'Audit de Processus & Performance',
      description: 'Détection des gisements de productivité cachés.',
      fullContent: 'Analyse immersive de vos flux opérationnels pour identifier les frictions et concevoir une roadmap IA rentable.',
      icon: <Layout className="w-8 h-8 text-[#FFB600]" />,
      tags: ['PROCESS MINING', 'DATA AUDIT']
    },
    {
      id: 'optimisation',
      title: 'Optimisation & Automatisation',
      description: "Déploiement d'agents autonomes pour piloter vos workflows.",
      fullContent: 'Orchestration de vos outils (ERP, CRM) via des agents autonomes pour libérer vos équipes.',
      icon: <Cpu className="w-8 h-8 text-[#FFB600]" />,
      tags: ['AI AGENTS', 'PRODUCTIVITY']
    },
    {
      id: 'finance',
      title: 'RPA (Robotic Process Automation)',
      description: 'Automatisation universelle de vos ERP et logiciels hérités (legacy) sans impact sur votre infrastructure existante.',
      fullContent: 'Robots logiciels qui automatisent vos tâches répétitives via reconnaissance visuelle et OCR. Compatible avec tous vos outils existants.',
      icon: <Bot className="w-8 h-8 text-[#FFB600]" />,
      tags: ['LEGACY COMPATIBLE', 'UNIVERSAL CONNECT']
    },
    {
      id: 'strategie',
      title: 'Stratégie Board & Acculturation',
      description: 'Alignement de la vision dirigeante et formation opérationnelle des équipes IT.',
      fullContent: 'Formation des dirigeants et montée en compétences des équipes. Comprenez les enjeux de l\'IA, explorez le champ des possibles et sécurisez votre transition technologique par une acculturation en profondeur.',
      icon: <Users className="w-8 h-8 text-[#FFB600]" />,
      tags: ['WORKSHOP BOARD', 'UPSKILLING']
    },
    {
      id: 'data-hub',
      title: 'Data Hub & Business Intelligence',
      description: 'Centralisez vos données pour une vision 360° et des prévisions prédictives.',
      fullContent: "Notre SaaS unifie l'ensemble des flux de données de votre entreprise (Finance, RH, Supply Chain, Opérations) au sein d'une interface unique. Grâce à nos algorithmes de Machine Learning, transformez vos données brutes en indicateurs de performance (KPI) actionnables et générez des prévisions fiables pour sécuriser vos prises de décision.",
      icon: <Database className="w-8 h-8 text-[#FFB600]" />,
      tags: ['KPI DASHBOARD', 'PREDICTIVE ANALYTICS'],
      drawerTitle: 'Pilotage Stratégique & Data Hub',
      securityNote: 'Souveraineté & RGPD : Hébergement 100% Européen garantissant une conformité RGPD stricte.'
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertises.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveDrawer(item)}
            className="group p-10 bg-white/90 backdrop-blur-sm border border-gray-200/50 hover:border-[#FFB600]/30 hover:bg-white hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#FFB600] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-gray-400 bg-white px-2 py-1 rounded-sm border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Background Decorative Number */}
            <span className="absolute bottom-[-20px] right-[-10px] text-[120px] font-bold text-[#1A1A1A]/[0.03] select-none">
              0{index + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ${activeDrawer ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/40 backdrop-blur-sm" onClick={() => setActiveDrawer(null)}></div>

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-xl bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${activeDrawer ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {activeDrawer && (
            <div className="h-full flex flex-col p-8 lg:p-12 overflow-y-auto">
              <button
                onClick={() => setActiveDrawer(null)}
                className="self-end p-2 text-gray-400 hover:text-[#1A1A1A] transition-colors mb-4"
              >
                <X size={32} />
              </button>

              <div className="flex-grow">
                <span className="text-[#FFB600] font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
                  {activeDrawer.drawerTitle || 'Solution Propriétaire'}
                </span>
                <h2 className="text-4xl font-light text-[#1A1A1A] mb-6 leading-tight">{activeDrawer.title}</h2>

                {/* ACTION PRIMAIRE REMONTÉE */}
                <div className="mb-8 flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="w-full bg-[#1A1A1A] text-white py-4 font-bold hover:bg-[#FFB600] hover:text-[#1A1A1A] transition-all flex items-center justify-center"
                  >
                    Consulter un expert
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to={`/solutions/${activeDrawer.id}`}
                    className="w-full border border-[#1A1A1A] text-[#1A1A1A] py-4 font-bold hover:bg-gray-50 transition-all flex items-center justify-center"
                  >
                    Présentation complète de la solution
                  </Link>
                </div>

                <div className="space-y-6 mb-12">
                  <p className="text-gray-600 text-lg leading-relaxed">{activeDrawer.fullContent}</p>

                  <div className="bg-[#F4F4F4] p-6 rounded-lg">
                    <h4 className="font-bold mb-3 flex items-center"><ShieldCheck className="w-5 h-5 mr-2 text-[#FFB600]" /> Sécurité & Conformité</h4>
                    <p className="text-sm text-gray-500">
                      {activeDrawer.securityNote || 'Architecture ISO 27001 et hébergement SecNumCloud pour une souveraineté totale de vos données critiques.'}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExpertiseGrid;
