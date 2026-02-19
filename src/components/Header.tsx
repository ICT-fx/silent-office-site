import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
}

type MenuSection = 'none' | 'who' | 'solutions' | 'insights' | 'careers';

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const [activeMenu, setActiveMenu] = useState<MenuSection>('none'); // Desktop hover menu
  const [isHidden, setIsHidden] = useState(false); // Visibility state based on sections
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

  // Easter egg: 10 rapid clicks triggers shuriken burst
  const clickCountRef = React.useRef(0);
  const clickTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const spawnShurikens = () => {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;';
    document.body.appendChild(container);

    const count = 40;
    for (let i = 0; i < count; i++) {
      const shuriken = document.createElement('div');
      const size = 12 + Math.random() * 24; // 12–36px
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      // Random trajectory: scatter outward
      const angle = Math.random() * Math.PI * 2;
      const dist1 = 100 + Math.random() * 200;
      const dist2 = 200 + Math.random() * 400;
      const sx = Math.cos(angle) * dist1;
      const sy = Math.sin(angle) * dist1;
      const ex = Math.cos(angle) * dist2;
      const ey = Math.sin(angle) * dist2;

      shuriken.className = 'shuriken';
      shuriken.style.cssText = `
        left: ${startX}px;
        top: ${startY}px;
        width: ${size}px;
        height: ${size}px;
        background: #FFB600;
        border-radius: 3px;
        --sx: ${sx}px;
        --sy: ${sy}px;
        --ex: ${ex}px;
        --ey: ${ey}px;
        animation-delay: ${Math.random() * 0.3}s;
      `;
      // White dot inside
      const dot = document.createElement('div');
      dot.style.cssText = `width:${size * 0.35}px;height:${size * 0.35}px;background:white;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);`;
      shuriken.appendChild(dot);
      container.appendChild(shuriken);
    }

    setTimeout(() => {
      document.body.removeChild(container);
    }, 2500);
  };

  const handleLogoClick = () => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 3000); // Reset counter after 3s of no clicks

    if (clickCountRef.current >= 10) {
      clickCountRef.current = 0;
      spawnShurikens();
    }
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

  // Scroll Logic to Hide/Show Header
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (!isHome) {
        setIsHidden(false);
        return;
      }

      const servicesSection = document.getElementById('services');
      const methodologySection = document.getElementById('methodologie');

      if (servicesSection && methodologySection) {
        const servicesRect = servicesSection.getBoundingClientRect();
        const methodologyRect = methodologySection.getBoundingClientRect();

        const isPastHero = servicesRect.top <= 100;
        const isBeforeEndOfMethodology = methodologyRect.bottom > 0;

        if (isPastHero && isBeforeEndOfMethodology) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, [isHome]);

  const navLinkClass = `text-sm font-medium transition-colors px-3 py-2 cursor-pointer ${(isScrolled || !isHome || activeMenu !== 'none') ? 'text-[#1A1A1A] hover:text-[#FFB600]' : 'text-gray-200 hover:text-white'
    }`;

  return (
    <header
      onMouseLeave={handleMouseLeave}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl border transition-all duration-500 transform ${isHidden ? '-translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'
        } ${isScrolled || !isHome || activeMenu !== 'none'
          ? 'bg-white/90 backdrop-blur-md border-white/20 shadow-lg py-3'
          : 'bg-[#1A1A1A]/80 backdrop-blur-md border-white/10 shadow-2xl py-4'
        }`}
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
            handleLogoClick(); // Track rapid clicks for easter egg
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
            className={`w-8 h-8 bg-[#FFB600] rounded-sm flex items-center justify-center ${logoSpinning
              ? 'logo-spin-back'
              : 'transition-transform duration-300'
              }`}
            style={{
              transform: logoSpinning ? undefined : logoHovered ? 'rotate(90deg)' : 'rotate(45deg)',
            }}
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled || !isHome || activeMenu !== 'none' ? 'text-[#1A1A1A]' : 'text-white'
            }`}>
            SILENT<span className="font-light">OFFICE</span>
          </span>
        </button>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
          {/* Onglet 01: Qui sommes-nous ? */}
          <div
            onMouseEnter={() => handleMouseEnter('who')}
            className={navLinkClass}
          >
            Qui sommes-nous ?
          </div>

          {/* Onglet 02: Solutions */}
          <div
            onMouseEnter={() => handleMouseEnter('solutions')}
            className={navLinkClass}
          >
            Solutions
          </div>

          {/* Onglet 03: Nos points de vue */}
          <div
            onMouseEnter={() => handleMouseEnter('insights')}
            className={navLinkClass}
          >
            Insights
          </div>

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
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${isScrolled || !isHome || activeMenu !== 'none'
              ? 'bg-[#1A1A1A] text-white hover:bg-[#FFB600] hover:text-[#1A1A1A]'
              : 'bg-[#FFB600] text-[#1A1A1A] hover:bg-white'
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={isScrolled || !isHome || activeMenu !== 'none' ? 'text-[#1A1A1A] lg:hidden' : 'text-white lg:hidden'}
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

            {/* SECTION: QUI SOMMES-NOUS */}
            {activeMenu === 'who' && (
              <div className="grid grid-cols-3 gap-12 animate-fade-in">
                <div>
                  <h3 className="font-bold text-[#FFB600] uppercase tracking-widest text-sm mb-4">L'Agence</h3>
                  <p className="text-gray-500 mb-4">Silent Office transforme les opérations des entreprises grâce à l'IA hybride.</p>
                  <Link to="/about" className="text-[#1A1A1A] font-bold border-b border-[#1A1A1A] hover:text-[#FFB600] hover:border-[#FFB600] transition-colors">Notre Vision</Link>
                </div>
                <div>
                  <h3 className="font-bold text-[#FFB600] uppercase tracking-widest text-sm mb-4">Organisation</h3>
                  <ul className="space-y-3 text-[#1A1A1A]">
                    <li><Link to="/team" className="hover:text-[#FFB600] transition-colors">L'Équipe</Link></li>
                    <li><Link to="/values" className="hover:text-[#FFB600] transition-colors">Nos Valeurs</Link></li>
                  </ul>
                </div>
              </div>
            )}

            {/* SECTION: SOLUTIONS */}
            {activeMenu === 'solutions' && (
              <div className="grid grid-cols-4 gap-8 animate-fade-in">
                <div className="col-span-1 border-r border-gray-100 pr-8">
                  <h3 className="font-bold text-3xl mb-4 text-[#1A1A1A]">Notre savoir-faire</h3>
                  <p className="text-gray-500 text-sm">Des solutions technologiques propriétaires pour chaque strate de votre entreprise.</p>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-x-12 gap-y-6">
                  <Link to="/solutions/audit-processus" className="group">
                    <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#FFB600] transition-colors mb-1">Audit de Processus & Performance</h4>
                    <p className="text-sm text-gray-400">Détection des gisements de productivité.</p>
                  </Link>
                  <Link to="/solutions/optimisation" className="group">
                    <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#FFB600] transition-colors mb-1">Optimisation & Automatisation</h4>
                    <p className="text-sm text-gray-400">Suppression des tâches répétitives.</p>
                  </Link>
                  <Link to="/solutions/finance" className="group">
                    <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#FFB600] transition-colors mb-1">RPA</h4>
                    <p className="text-sm text-gray-400">Automatisation de processus métier.</p>
                  </Link>
                  <Link to="/solutions/strategie" className="group">
                    <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#FFB600] transition-colors mb-1">Stratégie Board & Acculturation</h4>
                    <p className="text-sm text-gray-400">Formation dirigeants & Vision.</p>
                  </Link>
                </div>
              </div>
            )}

            {/* SECTION: INSIGHTS */}
            {activeMenu === 'insights' && (
              <div className="grid grid-cols-12 gap-8 animate-fade-in">
                <div className="col-span-3 border-r border-gray-100">
                  <h3 className="font-bold text-3xl mb-4 text-[#1A1A1A]">Explore</h3>
                </div>
                <div className="col-span-9 grid grid-cols-3 gap-8">
                  <Link to="/insights?cat=climat" className="block p-4 bg-gray-50 rounded hover:bg-[#FFB600]/10 transition-colors">
                    <h4 className="font-bold mb-2">Climat & RSE</h4>
                    <p className="text-xs text-gray-500">L'IA au service de la durabilité.</p>
                  </Link>
                  <Link to="/insights?cat=analysis" className="block p-4 bg-gray-50 rounded hover:bg-[#FFB600]/10 transition-colors">
                    <h4 className="font-bold mb-2">Analyses Sectorielles</h4>
                    <p className="text-xs text-gray-500">Tendances par industrie.</p>
                  </Link>
                  <Link to="/insights" className="block p-4 bg-[#1A1A1A] rounded hover:bg-[#FFB600] group transition-colors">
                    <h4 className="font-bold mb-2 text-white group-hover:text-[#1A1A1A]">Tous nos points de vue</h4>
                    <p className="text-xs text-gray-400 group-hover:text-[#1A1A1A]/70">Accéder au journal.</p>
                  </Link>
                </div>
              </div>
            )}

            {/* SECTION: CAREERS */}
            {activeMenu === 'careers' && (
              <div className="grid grid-cols-3 gap-12 animate-fade-in">
                <div>
                  <h3 className="font-bold text-[#FFB600] uppercase tracking-widest text-sm mb-4">Rejoindre Silent Office</h3>
                  <Link to="/careers" className="text-2xl font-light hover:text-[#FFB600] transition-colors">Pourquoi nous choisir ?</Link>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li><Link to="/careers" className="font-bold text-[#1A1A1A] hover:text-[#FFB600]">Consultez nos offres</Link></li>
                    <li><Link to="/careers/culture" className="font-bold text-[#1A1A1A] hover:text-[#FFB600]">Notre culture</Link></li>
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
          <button onClick={() => handleMobileNav('/about')} className="text-xl font-medium text-[#1A1A1A] text-left">Qui sommes-nous ?</button>

          <div className="py-4 border-y border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Solutions</span>
            <button onClick={() => handleMobileNav('/solutions/audit-processus')} className="block py-2 text-lg text-[#1A1A1A]">Audit & Performance</button>
            <button onClick={() => handleMobileNav('/solutions/optimisation')} className="block py-2 text-lg text-[#1A1A1A]">Optimisation</button>
            <button onClick={() => handleMobileNav('/solutions/finance')} className="block py-2 text-lg text-[#1A1A1A]">RPA</button>
            <button onClick={() => handleMobileNav('/solutions/strategie')} className="block py-2 text-lg text-[#1A1A1A]">Stratégie Board</button>
          </div>

          <button onClick={() => handleMobileNav('/insights')} className="text-xl font-medium text-[#1A1A1A] text-left">Insights</button>
          <button onClick={() => handleMobileNav('/careers')} className="text-xl font-medium text-[#1A1A1A] text-left">Carrière</button>

          <button
            onClick={() => handleMobileNav('/contact')}
            className="bg-[#FFB600] text-[#1A1A1A] w-full py-4 font-bold text-center mt-4 rounded-sm"
          >
            Demander un Audit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
