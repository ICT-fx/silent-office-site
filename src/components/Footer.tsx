
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">

          {/* Column 1: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-5 h-5 bg-[#FFB600] rounded-sm transform rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                SILENT<span className="font-light">OFFICE</span>
              </span>
            </div>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FFB600] mt-0.5 flex-shrink-0" />
                <span>42 Avenue Montaigne,<br />75008 Paris</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FFB600]" />
                <span>+33 7 67 28 82 07</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FFB600]" />
                <a href="mailto:contact@silentoffice.org" className="hover:text-white transition-colors">
                  contact@silentoffice.org
                </a>
              </li>
            </ul>

            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-[#FFB600] transition-colors" title="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-[#FFB600] transition-colors" title="X (Twitter)"><Twitter size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-[#FFB600] transition-colors" title="Instagram"><Instagram size={18} /></a>
              <a href="#" className="text-gray-500 hover:text-[#FFB600] transition-colors" title="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Expertises links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm mb-4 text-[#FFB600] uppercase tracking-wider">Expertises</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/solutions/audit-processus" className="hover:text-[#FFB600] transition-colors">Audit de Processus</Link></li>
              <li><Link to="/solutions/optimisation" className="hover:text-[#FFB600] transition-colors">Optimisation & Automatisation</Link></li>
              <li><Link to="/solutions/finance" className="hover:text-[#FFB600] transition-colors">RPA & Legacy</Link></li>
              <li><Link to="/solutions/data-hub" className="hover:text-[#FFB600] transition-colors">Data Hub & BI</Link></li>
              <li><Link to="/solutions/strategie" className="hover:text-[#FFB600] transition-colors">Stratégie & Acculturation</Link></li>
            </ul>
          </div>

          {/* Column 3: Compact Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#2A2A2A] rounded-2xl p-6 shadow-xl border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-light text-white">Un message à faire passer ?</h2>
              <span className="text-xs text-gray-500">Réponse sous 24h</span>
            </div>

            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-[#FFB600] outline-none transition-colors text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#1A1A1A] border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-[#FFB600] outline-none transition-colors text-white"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Votre message..."
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-md px-3 py-2 text-sm focus:border-[#FFB600] outline-none transition-colors text-white resize-none"
              ></textarea>
              <button className="w-full bg-white text-[#1A1A1A] px-4 py-2.5 text-sm font-bold hover:bg-[#FFB600] transition-all flex items-center justify-center rounded-md">
                Envoyer
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800 text-[10px] uppercase tracking-widest text-gray-600">
          <p>© 2026 Silent Office Consulting. Tous droits réservés.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link to="#" className="hover:text-white">Mentions Légales</Link>
            <Link to="#" className="hover:text-white">Confidentialité</Link>
            <Link to="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
