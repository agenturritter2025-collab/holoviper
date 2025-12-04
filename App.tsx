import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import TestimonialsPage from './pages/Testimonials';
import JobsPage from './pages/Jobs';
import ContactPage from './pages/Contact';
import LegalContent from './pages/Legal';
import CookieConsent from './components/CookieConsent';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';
import { COMPANY_NAME } from './constants';

const App: React.FC = () => {
  
  // Basic SEO Title update
  useEffect(() => {
    document.title = `${COMPANY_NAME} | AI-Agenten & Schulungen`;
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
        <Navigation />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<ServicesPage />} />
            <Route path="/kundenstimmen" element={<TestimonialsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            
            {/* Legal Routes mapped to single component */}
            <Route path="/impressum" element={<Navigate to="/legal/impressum" replace />} />
            <Route path="/datenschutz" element={<Navigate to="/legal/datenschutz" replace />} />
            <Route path="/agb" element={<Navigate to="/legal/agb" replace />} />
            <Route path="/legal/:type" element={<LegalContent />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
        <StickyCTA />
      </div>
    </HashRouter>
  );
};

export default App;