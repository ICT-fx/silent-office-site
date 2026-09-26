
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import SolutionsPage from './components/SolutionsPage';
import InsightsPage from './components/InsightsPage';





import NotFoundPage from './pages/NotFoundPage';

/**
 * Routes chargées à la demande. `ArticleDetailPage` pèse à lui seul 249 Ko de
 * source (les six articles en JSX) : le laisser dans le bundle principal
 * faisait payer à chaque visiteur un contenu que peu ouvrent. Le pré-rendu
 * n'en souffre pas, il attend que la page porte réellement du texte avant de
 * capturer (`scripts/prerender.mjs`).
 */
const SolutionPage = lazy(() => import('./pages/SolutionPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
import RouteSeo from './seo/RouteSeo';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-[#262626]">
      <RouteSeo />
      <Preloader />
      <Header isScrolled={scrolled} />

      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/audit-processus" element={<Navigate to="/solutions/audit" replace />} />
          <Route path="/solutions/optimisation" element={<Navigate to="/solutions/automatisation" replace />} />
          <Route path="/solutions/finance" element={<Navigate to="/solutions/automatisation" replace />} />
          <Route path="/solutions/strategie" element={<Navigate to="/solutions/formation" replace />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<ArticleDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
