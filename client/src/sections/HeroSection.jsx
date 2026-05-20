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
              className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full text-brand-cyan text-xs font-semibold uppercase tracking-wider w-fit"
            >
              <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse"></span>
              About UnivEdge
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-text-primary leading-[1.1] tracking-tight"
            >
              IT and staffing, <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                built around your business.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-brand-text-secondary text-lg md:text-xl leading-relaxed max-w-xl"
            >
              We help mid-market companies hire vetted technology talent and deliver complex IT projects – without the overhead of a big-four consultancy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <a
                href="#contact"
                className="px-7 py-3.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.45)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="px-7 py-3.5 bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-text-muted text-brand-text-primary font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                See how we work
              </a>
            </motion.div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-brand-card border border-brand-border p-8 rounded-2xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-bl-full blur-2xl pointer-events-none"></div>
              
              <div className="flex flex-col gap-6 text-left">
                {/* Vetted Talent / Project Counter Stats */}
                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-brand-border">
                  <div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-text-primary">80+</h3>
                    <p className="text-sm text-brand-text-secondary mt-1">clients served</p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-brand-text-primary">150+</h3>
                    <p className="text-sm text-brand-text-secondary mt-1">projects delivered</p>
                  </div>
                </div>

                {/* Industries count */}
                <div className="pb-6 border-b border-brand-border">
                  <h3 className="font-display font-bold text-3xl text-brand-text-primary">6</h3>
                  <p className="text-sm text-brand-text-secondary mt-1">industries</p>
                </div>

                {/* SLA / Time to shortlist */}
                <div className="pb-6 border-b border-brand-border">
                  <span className="text-[10px] tracking-widest text-brand-cyan uppercase font-bold block mb-1">TIME TO SHORTLIST</span>
                  <h3 className="font-display font-bold text-xl text-brand-text-primary">Under 72 hours</h3>
                </div>

                {/* Client Retention */}
                <div>
                  <span className="text-[10px] tracking-widest text-brand-cyan uppercase font-bold block mb-1">CLIENT RETENTION</span>
                  <h3 className="font-display font-bold text-xl text-brand-text-primary">94%</h3>
                  <p className="text-xs text-brand-text-muted mt-0.5">year over year</p>
                </div>
              </div>
            </motion.div>
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
                className="font-display font-extrabold text-xl md:text-2xl text-brand-text-muted tracking-wider hover:text-brand-text-primary transition-colors duration-300 select-none cursor-default"
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Belief Quote Card */}
        <div className="mt-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-card/50 border border-brand-border px-8 py-10 rounded-2xl relative"
          >
            <span className="text-brand-blue text-6xl font-serif absolute top-4 left-6 opacity-30 select-none">“</span>
            <p className="font-display italic text-lg sm:text-2xl text-brand-text-primary font-medium text-center relative z-10 leading-relaxed">
              Hiring shouldn't take months, and technology projects shouldn't take years.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
