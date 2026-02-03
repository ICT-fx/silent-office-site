
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SolutionsPage from './components/SolutionsPage';
import InsightsPage from './components/InsightsPage';
import SolutionDetail from './pages/SolutionDetail';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

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
    <div className="flex flex-col min-h-screen font-sans text-[#1A1A1A]">
      <Header isScrolled={scrolled} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:id" element={<ArticleDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
