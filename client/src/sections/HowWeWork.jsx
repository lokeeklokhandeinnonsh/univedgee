import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../constants/portfolioData';

const HowWeWork = () => {
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
    <section id="process" className="py-20 relative bg-brand-dark/50 overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full">
            Our Process
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
            From first call to long-term partnership
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg">
            A clear six-step process – built for speed and confidence.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-active p-8 rounded-2xl text-left relative transition-all duration-300 group shadow-lg"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"></div>

              {/* Number indicator */}
              <div className="font-display font-bold text-lg text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 w-8 h-8 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300">
                {step.number}
              </div>

              <h3 className="font-display font-bold text-lg text-brand-text-primary mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block px-8 py-3.5 bg-brand-blue hover:bg-blue-600 text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Talk to our team
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default HowWeWork;
