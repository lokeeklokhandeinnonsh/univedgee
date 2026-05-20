import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../constants/portfolioData';

const ImpactSection = () => {
  return (
    <section className="py-20 relative bg-brand-dark overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full">
            Our Impact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
            The numbers behind the work
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg">
            What three years of disciplined delivery looks like.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-active p-8 rounded-2xl transition-all duration-300 group shadow-lg"
            >
              {/* Giant number */}
              <div className="font-display font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-brand-text-primary to-brand-text-secondary bg-clip-text text-transparent group-hover:from-brand-blue group-hover:to-brand-cyan transition-all duration-300 mb-3">
                {metric.value}
              </div>
              {/* Label */}
              <p className="text-brand-text-secondary group-hover:text-brand-text-primary transition-colors duration-300 leading-relaxed font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
