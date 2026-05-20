import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../constants/portfolioData';
import { FiArrowRight } from 'react-icons/fi';

const Industries = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
    <section id="industries" className="py-20 relative bg-brand-dark overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col gap-4">
          <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full w-fit">
            Industries
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
            Specialized expertise across <br className="hidden sm:inline" />
            regulated and high-growth sectors
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg">
            We've worked deep in six verticals – each with its own language, regulations, and pace.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-active p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-lg min-h-[250px]"
            >
              <div className="flex flex-col gap-4 text-left">
                {/* Stats badge */}
                <span className="text-[10px] tracking-wide text-brand-cyan font-semibold bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-0.5 rounded-full w-fit uppercase">
                  {ind.projects} • {ind.clients}
                </span>
                
                <h3 className="font-display font-bold text-xl text-brand-text-primary group-hover:text-brand-blue transition-colors duration-300">
                  {ind.name}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-text-primary hover:text-brand-blue mt-8 w-fit transition-colors duration-300 group/btn"
              >
                Explore
                <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Industries;
