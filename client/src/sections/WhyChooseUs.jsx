import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsReasons } from '../constants/portfolioData';

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative bg-brand-dark/50 overflow-hidden border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full">
            Why Choose Us
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
            Why teams choose UnivEdge
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg">
            Three things our clients say make the difference.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {whyChooseUsReasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-active p-8 rounded-2xl text-left relative transition-all duration-300 group shadow-lg"
            >
              {/* Massive numbered indicator */}
              <div className="font-display font-black text-6xl text-brand-blue/20 group-hover:text-brand-blue/40 transition-colors duration-300 mb-6">
                {reason.number}
              </div>
              <h3 className="font-display font-bold text-xl text-brand-text-primary mb-3 group-hover:text-brand-blue transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
