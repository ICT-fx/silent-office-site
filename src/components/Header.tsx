import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions';

interface HeaderProps {
  isScrolled: boolean;
}

type MenuSection = 'none' | 'solutions' | 'careers';

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const [activeMenu, setActiveMenu] = useState<MenuSection>('none'); // Desktop hover menu
  const [logoHovered, setLogoHovered] = useState(false); // Logo hover state
  const [logoSpinning, setLogoSpinning] = useState(false); // Logo spin-back animation
  const logoLocked = React.useRef(false); // Lock to prevent re-trigger during animation
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  // Trigger the spin-back animation (locked until complete, force=true restarts it)
  const logoTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerLogoSpin = (force = false) => {
    if (logoLocked.current && !force) return;
    // Clear any existing timer if force-restarting
    if (logoTimerRef.current) {
      clearTimeout(logoTimerRef.current);
    }
    logoLocked.current = true;
    setLogoHovered(false);
    // Force a re-render cycle to restart the CSS animation
    setLogoSpinning(false);
    requestAnimationFrame(() => {
      setLogoSpinning(true);
      logoTimerRef.current = setTimeout(() => {
        setLogoSpinning(false);
        logoLocked.current = false;
        logoTimerRef.current = null;
      }, 1300);
    });
  };

  // Desktop Hover Handlers
  const handleMouseEnter = (section: MenuSection) => {
    setActiveMenu(section);
  };

  const handleMouseLeave = () => {
    setActiveMenu('none');
  };

  // Helper for mobile navigation
  const handleMobileNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinkClass = `[font-family:'Space_Grotesk',sans-serif] text-lg font-bold tracking-[-0.02em] transition-colors px-3 py-2 cursor-pointer text-[#262626] hover:text-[#027333]`;

  return (
    <header
      onMouseLeave={handleMouseLeave}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl border transition-all duration-500 bg-white backdrop-blur-md border-white/20 shadow-lg py-3"
    >
      <div className="px-6 flex items-center justify-between relative z-50">
        {/* Logo */}
        <button
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              navigate('/');
            }
            triggerLogoSpin(true);
          }}
          className="flex items-center space-x-2 outline-none"
          onMouseEnter={() => {
            if (!logoLocked.current) setLogoHovered(true);
          }}
          onMouseLeave={() => {
            if (!logoLocked.current) triggerLogoSpin();
          }}
        >
          <div
            className={`w-14 h-14 ${logoSpinning
              ? 'logo-spin'
              : 'transition-transform duration-300'
              }`}
            style={{
              transform: logoSpinning ? undefined : logoHovered ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            <img
              id="brand-logo"
              src="/flowera-logo.png"
              alt="Flowera"
              draggable={false}
              className="w-full h-full object-contain select-none"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#262626]">
            FLOW<span className="font-light">ERA</span>
          </span>
        </button>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
          {/* Onglet 01: Expertises (méga-menu des solutions) */}
          <div
            onClick={() => {
              navigate('/solutions');
              setActiveMenu('none');
            }}
            onMouseEnter={() => handleMouseEnter('solutions')}
            className={navLinkClass}
          >
            Expertises
          </div>

          {/* Onglet 02: Insights — lien direct vers le journal, sans méga-menu */}
          <Link
            to="/insights"
            onMouseEnter={handleMouseLeave}
            className={navLinkClass}
          >
            Insights
          </Link>

          {/* Onglet 04: Carrière */}
          <div
            onMouseEnter={() => handleMouseEnter('careers')}
            className={navLinkClass}
          >
            Carrière
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="[font-family:'Space_Grotesk',sans-serif] px-6 py-2.5 rounded-xl font-bold text-lg tracking-[-0.02em] transition-all bg-[#262626] text-white hover:bg-[#027333] hover:text-[#262626]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-[#262626] lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega Menu Overlay (Desktop) */}
      <div
        className={`absolute top-full left-0 w-full transition-all duration-300 pt-4 ${activeMenu !== 'none' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        onMouseEnter={() => { }} // Keep menu open when hovering the gap or the menu itself
      >
        {/* Actual Content Container with Background */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-12">

            {/* SECTION: EXPERTISES (ex-Solutions) */}
            {activeMenu === 'solutions' && (
              <div className="grid grid-cols-4 gap-8 animate-fade-in">
                <div className="col-span-1 border-r border-gray-100 pr-8">
                  <h3 className="font-bold text-3xl mb-4 text-[#262626]">Des gains concrets</h3>
                  <p className="text-gray-500 text-sm">Du temps, de l'argent et de la clarté rendus à votre entreprise, à chaque strate de votre organisation.</p>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-x-12 gap-y-6">
                  {solutionsList.map((solution) => (
                    <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="group">
                      <h4 className="font-bold text-[#262626] group-hover:text-[#027333] transition-colors mb-1">{solution.title}</h4>
                      <p className="text-sm text-gray-400">{solution.shortDescription}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION: CAREERS */}
            {activeMenu === 'careers' && (
              <div className="grid grid-cols-3 gap-12 animate-fade-in">
                <div>
                  <h3 className="font-bold text-[#027333] uppercase tracking-widest text-sm mb-4">Rejoindre Flowera</h3>
                  <Link to="/careers" className="text-2xl font-light hover:text-[#027333] transition-colors">Pourquoi nous choisir ?</Link>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li><Link to="/careers" className="font-bold text-[#262626] hover:text-[#027333]">Consultez nos offres</Link></li>
                    <li><Link to="/careers/culture" className="font-bold text-[#262626] hover:text-[#027333]">Notre culture</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col space-y-4 h-screen mt-4 rounded-2xl mx-6">
          {/* Added MX and margin top to align better floating mobile menu */}
          <div className="py-4 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Expertises</span>
            {solutionsList.map((solution) => (
              <button
                key={solution.slug}
                onClick={() => handleMobileNav(`/solutions/${solution.slug}`)}
                className="block py-2 text-lg text-[#262626] text-left"
              >
                {solution.title}
              </button>
            ))}
          </div>

          <button onClick={() => handleMobileNav('/insights')} className="text-xl font-medium text-[#262626] text-left">Insights</button>
          <button onClick={() => handleMobileNav('/careers')} className="text-xl font-medium text-[#262626] text-left">Carrière</button>

          <button
            onClick={() => handleMobileNav('/contact')}
            className="bg-[#027333] text-[#262626] w-full py-4 font-bold text-center mt-4 rounded-sm"
          >
            Demander un Audit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
