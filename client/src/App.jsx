import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ImpactSection from './sections/ImpactSection';
import WhoWeAre from './sections/WhoWeAre';
import WhatWeDo from './sections/WhatWeDo';
import WhyChooseUs from './sections/WhyChooseUs';
import Industries from './sections/Industries';
import HowWeWork from './sections/HowWeWork';
import ClientVoices from './sections/ClientVoices';
import ContactSection from './sections/ContactSection';
import ReadyToTalk from './sections/ReadyToTalk';
import Footer from './sections/Footer';
import './App.css';

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans antialiased selection:bg-brand-blue selection:text-white">
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0d1222',
            color: '#f8fafc',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
          },
          success: {
            iconTheme: {
              primary: '#2563eb',
              secondary: '#f8fafc',
            },
          },
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <ImpactSection />
        <WhoWeAre />
        <WhatWeDo />
        <WhyChooseUs />
        <Industries />
        <HowWeWork />
        <ClientVoices />
        <ContactSection />
        <ReadyToTalk />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
