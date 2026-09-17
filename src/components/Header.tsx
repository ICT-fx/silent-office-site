import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { solutionsList } from '../data/solutions';

interface HeaderProps {
  isScrolled: boolean;
}

type MenuSection = 'none' | 'solutions' | 'careers';

/**
 * Teinte de signature de chaque offre, dans l'ordre officiel 01→05.
 * Reprend `--card-b-3` des palettes `.sol-pal-1…5` (src/index.css), pour que
 * le méga-menu parle la même langue que la section « Nos solutions ».
 */
const SOLUTION_ACCENTS = ['#027333', '#35762f', '#67782b', '#9a7b27', '#cc7d23'];

const CAREER_LINKS = [
  { label: 'Pourquoi nous choisir ?', to: '/careers' },
  { label: 'Consultez nos offres', to: '/careers' },
  { label: 'Notre culture', to: '/careers/culture' },
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu
  const [activeMenu, setActiveMenu] = useState<MenuSection>('none'); // Desktop hover menu
  const [activeSolution, setActiveSolution] = useState(0); // Offre mise en aperçu (01 par défaut)
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

  // Échap referme le méga-menu (il peut aussi s'ouvrir au clavier, via le focus).
  React.useEffect(() => {
    if (activeMenu === 'none') return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveMenu('none');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeMenu]);

  // Helper for mobile navigation
  const handleMobileNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const navLinkClass = `[font-family:'Space_Grotesk',sans-serif] inline-block text-lg font-bold tracking-[-0.02em] transition-colors px-3 py-2 cursor-pointer text-[#262626] hover:text-[#027333]`;

  /** Onglet à méga-menu : reste vert tant que son panneau est déployé,
      même quand le curseur est descendu dans le panneau. */
  const menuLinkClass = (section: MenuSection) =>
    `${navLinkClass} ${activeMenu === section ? '!text-[#027333]' : ''}`;

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
          {/* Onglet 01: Solutions — panneau ancré sous l'onglet.
              Le conteneur porte le survol : le panneau lui appartient, donc
              parcourir le panneau ne déclenche jamais de sortie. */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')}>
            <Link
              to="/solutions"
              onFocus={() => handleMouseEnter('solutions')}
              onClick={() => setActiveMenu('none')}
              aria-expanded={activeMenu === 'solutions'}
              className={menuLinkClass('solutions')}
            >
              Solutions
            </Link>

            {/* Le padding haut sert de pont de survol entre l'onglet et la carte. */}
            <div
              className={`nav-panel nav-panel-align nav-panel-align-num absolute top-full pt-8 ${activeMenu === 'solutions' ? 'is-open' : ''}`}
            >
              <div className="nav-card p-4 w-[660px] xl:w-[740px] grid grid-cols-[minmax(0,1fr)_270px] xl:grid-cols-[minmax(0,1fr)_320px] gap-4">
                {/* Colonne gauche — les 5 offres, ordre officiel 01→05 */}
                <div className="flex flex-col">
                  <div className="flex flex-col gap-0.5">
                    {solutionsList.map((solution, i) => (
                      <Link
                        key={solution.slug}
                        to={`/solutions/${solution.slug}`}
                        onMouseEnter={() => setActiveSolution(i)}
                        onFocus={() => setActiveSolution(i)}
                        onClick={() => setActiveMenu('none')}
                        className={`nav-row ${activeSolution === i ? 'is-active' : ''}`}
                        style={{ '--nav-accent': SOLUTION_ACCENTS[i] } as React.CSSProperties}
                      >
                        <span className="nav-row-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="nav-row-title">{solution.title}</span>
                        <span className="nav-row-arrow">
                          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 border-t border-[#262626]/[0.08]">
                    <Link
                      to="/solutions"
                      onClick={() => setActiveMenu('none')}
                      className="nav-foot"
                    >
                      Voir les 5 solutions
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Colonne droite — aperçu de l'offre survolée : aplat dégradé
                    sombre à sa palette (mêmes `--color-1…5` que les pilules
                    de la home) et promesse verbatim en blanc. Pas d'image. */}
                <div className={`nav-preview sol-btn-${activeSolution + 1}`}>
                  <div className="nav-preview-stack">
                    {solutionsList.map((solution, i) => {
                      const isActive = i === activeSolution;
                      return (
                        <Link
                          key={solution.slug}
                          to={`/solutions/${solution.slug}`}
                          onClick={() => setActiveMenu('none')}
                          className={`nav-preview-item ${isActive ? 'is-active' : ''}`}
                          aria-hidden={!isActive}
                          inert={!isActive || undefined}
                          tabIndex={isActive ? undefined : -1}
                        >
                          <span className="nav-preview-promise">{solution.promise}</span>
                          <span className="nav-preview-lede">{solution.shortDescription}</span>
                          <span className="nav-preview-cta">
                            Découvrir
                            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Onglet 02: Portfolio — lien direct vers les réalisations */}
          <Link
            to="/portfolio"
            onMouseEnter={handleMouseLeave}
            onFocus={handleMouseLeave}
            className={navLinkClass}
          >
            Portfolio
          </Link>

          {/* Onglet 03: Insights — lien direct vers le journal, sans méga-menu */}
          <Link
            to="/insights"
            onMouseEnter={handleMouseLeave}
            onFocus={handleMouseLeave}
            className={navLinkClass}
          >
            Insights
          </Link>

          {/* Onglet 04: Carrière — même grammaire, panneau réduit */}
          <div className="relative" onMouseEnter={() => handleMouseEnter('careers')}>
            <Link
              to="/careers"
              onFocus={() => handleMouseEnter('careers')}
              onClick={() => setActiveMenu('none')}
              aria-expanded={activeMenu === 'careers'}
              className={menuLinkClass('careers')}
            >
              Carrière
            </Link>

            <div
              className={`nav-panel nav-panel-align nav-panel-align-plain absolute top-full pt-8 ${activeMenu === 'careers' ? 'is-open' : ''}`}
            >
              <div className="nav-card p-4 w-[300px]">
                <span className="block px-[0.7rem] pb-2 [font-family:'Space_Grotesk',sans-serif] text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#262626]/40">
                  Rejoindre Flowera
                </span>
                <div className="flex flex-col gap-0.5">
                  {CAREER_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      onClick={() => setActiveMenu('none')}
                      className="nav-row nav-row-plain"
                    >
                      <span className="nav-row-title">{link.label}</span>
                      <span className="nav-row-arrow">
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col space-y-4 h-screen mt-4 rounded-2xl mx-6">
          {/* Added MX and margin top to align better floating mobile menu */}
          <div className="py-4 border-b border-gray-100">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 block">Solutions</span>
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

          <button onClick={() => handleMobileNav('/portfolio')} className="text-xl font-medium text-[#262626] text-left">Portfolio</button>
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
