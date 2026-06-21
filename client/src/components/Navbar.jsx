import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { navigationLinks } from '../constants/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg-light/95 backdrop-blur-md border-b border-brand-border py-4 shadow-sm'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-brand-bg-dark flex items-center justify-center font-display font-bold text-white text-lg shadow-sm group-hover:scale-105 transition-transform duration-300">
            U
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-brand-text-primary group-hover:text-brand-primary transition-colors duration-300">
            UnivEdge
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-brand-text-secondary text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +1 (310) 555 0142
          </div>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-5 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-brand-text-primary font-bold text-sm rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-brand-text-primary hover:text-brand-primary transition-colors duration-300 focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-bg-light border-b border-brand-border absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 bg-brand-bg-light">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-3 bg-brand-primary hover:bg-brand-primary-hover text-brand-text-primary font-bold rounded-lg transition-colors duration-300 mt-2"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
