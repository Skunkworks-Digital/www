import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import Services from './components/Services';
import About from './components/About';
import GoToMarket from './components/GoToMarket';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Faq from './components/Faq';
import Contact from './components/Contact';
import LoadingOverlay from './components/LoadingOverlay';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans transition-colors duration-300">
        {/* Skip Link for Accessibility */}
        <a 
          href="#main-content" 
          className="absolute top-[-40px] left-0 bg-blue-600 text-white p-2 z-[9999] focus:top-0 transition-all duration-300"
        >
          Skip to main content
        </a>

        <LoadingOverlay loading={loading} />
        <Navbar />
        
        <main id="main-content">
          <Hero />
          <StatsCounter />
          <Services />
          <GoToMarket />
          <Process />
          <CaseStudies />
          <Testimonials />
          <About />
          <Team />
          <Faq />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </div>
    </ThemeProvider>
  );
}

export default App;