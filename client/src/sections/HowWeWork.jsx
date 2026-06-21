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
    <section id="process" className="py-20 relative bg-brand-bg-dark overflow-hidden border-t border-brand-border-dark">

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs tracking-widest text-brand-text-muted uppercase font-bold">
            How We Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-light">
            From first call to long-term partnership
          </h2>
          <p className="text-brand-text-muted text-base sm:text-lg">
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
              className="text-left relative transition-all duration-300 group"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute top-4 left-10 w-[calc(100%+2rem)] h-px bg-brand-border-dark -z-10 group-last:hidden"></div>

              {/* Number indicator */}
              <div className="font-display font-bold text-sm text-brand-primary bg-brand-bg-dark border border-brand-border-dark w-8 h-8 flex items-center justify-center mb-6 z-10 transition-colors duration-300">
                {step.number}
              </div>

              <h3 className="font-display font-bold text-lg text-brand-text-light mb-3">
                {step.title}
              </h3>
              
              <p className="text-brand-text-muted text-sm leading-relaxed">
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-brand-border-dark hover:border-brand-text-muted text-brand-text-light font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Talk to our team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default HowWeWork;
