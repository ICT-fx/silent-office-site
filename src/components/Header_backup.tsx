
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent, target: string, id: string = '') => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (target === 'home') {
      if (id) {
        if (isHome) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to home and hash will be lost unless we handle it.
          // But we can navigate to /#{id} ?
          // React router doesn't scroll to hash automatically on hash change in v6 without helper.
          // For now, simple navigation to root. User scrolling manually is fallback.
          // Or better: pass state.
          navigate('/');
          setTimeout(() => {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        if (isHome) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          navigate('/');
        }
      }
    } else if (target === 'solutions') {
      navigate('/solutions');
    } else if (target === 'insights') {
      navigate('/insights');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled || !isHome
        ? 'bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm'
        : 'bg-transparent border-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center space-x-2 outline-none group"
        >
          <div className="w-8 h-8 bg-[#027333] rounded-sm transform rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled || !isHome ? 'text-[#262626]' : 'text-white mix-blend-difference'}`}>
            FLOW<span className="font-light">ERA</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          <a
            href="/#services"
            onClick={(e) => handleNavClick(e, 'home', 'services')}
            className={`text-sm font-medium hover:text-[#027333] transition-colors ${(isScrolled || !isHome) ? 'text-[#025928]' : 'text-gray-200'
              }`}
          >
            Services
          </a>
          <a
            href="/#approach"
            onClick={(e) => handleNavClick(e, 'home', 'approach')}
            className={`text-sm font-medium hover:text-[#027333] transition-colors ${(isScrolled || !isHome) ? 'text-[#025928]' : 'text-gray-200'
              }`}
          >
            Expertises
          </a>
          <a
            href="/#insights"
            onClick={(e) => handleNavClick(e, 'home', 'insights')}
            className={`text-sm font-medium hover:text-[#027333] transition-colors ${(isScrolled || !isHome) ? 'text-[#025928]' : 'text-gray-200'
              }`}
          >
            Insights
          </a>
          <Link
            to="/solutions"
            className={`text-sm font-medium transition-colors ${location.pathname === '/solutions'
              ? 'text-[#027333]'
              : (isScrolled || !isHome ? 'text-[#025928] hover:text-[#027333]' : 'text-gray-200 hover:text-[#027333]')
              }`}
          >
            Solutions
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button className={`px-6 py-2.5 rounded-none text-sm font-semibold transition-all duration-300 flex items-center group ${isScrolled || !isHome
            ? 'bg-[#262626] text-white hover:bg-[#027333] hover:text-[#262626]'
            : 'bg-white text-[#262626] hover:bg-[#027333] hover:text-[#262626]'
            }`}>
            Audit Stratégique
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={isScrolled || !isHome ? 'text-[#262626] lg:hidden' : 'text-white lg:hidden'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col space-y-4 h-screen">
          <a href="/#services" onClick={(e) => handleNavClick(e, 'home', 'services')} className="text-xl font-medium text-[#262626]">Services</a>
          <a href="/#approach" onClick={(e) => handleNavClick(e, 'home', 'approach')} className="text-xl font-medium text-[#262626]">Expertises</a>
          <a href="/#insights" onClick={(e) => handleNavClick(e, 'home', 'insights')} className="text-xl font-medium text-[#262626]">Insights</a>
          <Link to="/solutions" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-[#027333]">Solutions</Link>
          <button className="bg-[#027333] text-[#262626] w-full py-4 font-bold text-center mt-4">
            Demander un Audit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
