import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { officeInfo } from '../constants/portfolioData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
      setSubmitting(false);
    }, 800);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-slate-50 border-t border-brand-border py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Newsletter & Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-brand-border">
          
          {/* Left Column: Newsletter info */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center font-display font-bold text-white text-lg shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform duration-300">
                U
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-brand-text-primary group-hover:text-brand-blue transition-colors duration-300">
                UnivEdge
              </span>
            </a>
            
            <div className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-base text-brand-text-primary">
                STAY IN THE LOOP
              </h4>
              <p className="text-brand-text-secondary text-sm leading-relaxed max-w-sm">
                Join our monthly newsletter for insights on enterprise IT and tech hiring.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Work email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-brand-border focus:border-brand-blue px-4 py-2.5 rounded-lg text-brand-text-primary text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2.5 bg-brand-blue hover:bg-blue-600 disabled:bg-blue-800 text-white font-medium text-sm rounded-lg transition-colors cursor-pointer"
              >
                {submitting ? '...' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
            {/* Services Links */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-brand-text-primary uppercase tracking-widest">Services</h5>
              <div className="flex flex-col gap-2.5">
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">IT Staffing</a>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">Software Dev</a>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">Cloud & Infra</a>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">AI & Automation</a>
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-4">
              <h5 className="text-xs font-bold text-brand-text-primary uppercase tracking-widest">Company</h5>
              <div className="flex flex-col gap-2.5">
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">About Us</a>
                <a href="#industries" onClick={(e) => handleScrollTo(e, '#industries')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">Industries</a>
                <a href="#process" onClick={(e) => handleScrollTo(e, '#process')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">Process</a>
                <a href="#testimonials" onClick={(e) => handleScrollTo(e, '#testimonials')} className="text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors">Testimonials</a>
              </div>
            </div>

            {/* Office Contact Info */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h5 className="text-xs font-bold text-brand-text-primary uppercase tracking-widest">Contact</h5>
              <div className="flex flex-col gap-2.5 text-sm text-brand-text-secondary">
                <p className="leading-relaxed">{officeInfo.address}</p>
                <a href={`tel:${officeInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand-text-primary transition-colors">{officeInfo.phone}</a>
                <a href={`mailto:${officeInfo.email}`} className="hover:text-brand-text-primary transition-colors break-all">{officeInfo.email}</a>
              </div>
            </div>

          </div>

        </div>

        {/* Copyright info */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted">
          <p>
            &copy; 2026 UnivEdge Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-brand-text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-brand-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
