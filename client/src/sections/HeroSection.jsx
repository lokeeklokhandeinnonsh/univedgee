import React from 'react';
import { motion } from 'framer-motion';
import { stats, clientLogos } from '../constants/portfolioData';

const HeroSection = () => {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brand-text-secondary text-xs font-bold uppercase tracking-widest"
            >
              About UnivEdge
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-brand-text-primary leading-[1.1] tracking-tight"
            >
              IT and staffing,<br />
              built around your<br />
              business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-brand-text-secondary text-lg leading-relaxed max-w-lg mt-2"
            >
              We help mid-market companies hire vetted technology talent and deliver complex IT projects - without the overhead of a big-four consultancy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <a
                href="#contact"
                className="px-7 py-3.5 bg-brand-primary hover:bg-brand-primary-hover text-brand-text-primary font-bold rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                Book a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 bg-brand-card hover:bg-brand-card-hover border border-brand-border text-brand-text-primary font-bold rounded-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                See how we work
              </a>
            </motion.div>

            {/* Horizontal Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center flex-wrap gap-8 mt-8 pt-6"
            >
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-brand-text-primary">80+</span>
                <span className="text-sm text-brand-text-secondary">clients served</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-brand-text-primary">150+</span>
                <span className="text-sm text-brand-text-secondary">projects delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-brand-text-primary">6</span>
                <span className="text-sm text-brand-text-secondary">industries</span>
              </div>
            </motion.div>
          </div>

          {/* Stats Column (Dark Card) */}
          <div className="lg:col-span-5 w-full mt-16 lg:mt-0 relative flex items-center justify-center min-h-[400px]">
            
            {/* The Main Dark Box with Grid Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-brand-text-light p-10 pt-28 pb-10 rounded-[24px] relative overflow-hidden shadow-xl w-full max-w-[420px] ml-auto aspect-square flex flex-col justify-end"
              style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom right, #1e3a8a, #0f172a)', 
                backgroundSize: '48px 48px, 48px 48px, 100% 100%',
                backgroundPosition: 'center center'
              }}
            >
              <div className="flex flex-col gap-10 text-left relative z-10 mt-12">
                {/* What we believe quote */}
                <div className="mt-8">
                  <span className="font-serif italic text-lg tracking-wide text-white block mb-2 shadow-sm">WHAT WE BELIEVE</span>
                  <p className="font-serif italic text-[20px] text-white/95 font-medium leading-[1.6]">
                    "Hiring shouldn't take months,<br />
                    and technology projects shouldn't<br />
                    take years."
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute top-12 -left-6 lg:-left-16 w-[260px] bg-white z-20 rounded-xl shadow-[0_12px_35px_rgb(0,0,0,0.12)] border border-slate-100/50 flex flex-col justify-center p-4 py-3.5">
              <div className="flex gap-4 items-center">
                 <div className="w-11 h-11 rounded-lg bg-[#FFF7ED] flex items-center justify-center text-[#d97706]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-6 4 12 3-6h4" />
                    </svg>
                 </div>
                 <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-wider text-slate-500 font-bold uppercase">TIME TO SHORTLIST</span>
                    <h3 className="font-display font-bold text-[16px] text-[#0f172a]">Under 72 hours</h3>
                 </div>
              </div>
            </div>

            <div className="absolute top-[50%] -translate-y-1/2 -right-4 lg:-right-12 w-[270px] bg-white z-20 rounded-xl shadow-[0_12px_35px_rgb(0,0,0,0.12)] border border-slate-100/50 flex flex-col justify-center p-4 py-3.5">
              <div className="flex gap-4 items-center">
                 <div className="w-11 h-11 rounded-lg bg-[#F3F4F6] flex items-center justify-center text-[#4B5563]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                 </div>
                 <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-wider text-slate-500 font-bold uppercase">CLIENT RETENTION</span>
                    <h3 className="font-display font-bold text-[16px] text-[#0f172a]">94% year over year</h3>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Logos / Ticker */}
        <div className="mt-24 border-t border-brand-border pt-10">
          <p className="text-center text-xs font-bold tracking-widest text-brand-text-muted uppercase mb-8">
            TRUSTED BY TEAMS ACROSS INDUSTRIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="font-display font-extrabold text-xl md:text-2xl text-brand-text-muted tracking-wider hover:text-brand-text-primary transition-colors duration-300 select-none cursor-default uppercase"
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
