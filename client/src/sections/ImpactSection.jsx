import React from 'react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../constants/portfolioData';

const ImpactSection = () => {
  return (
    <section className="py-20 relative bg-brand-bg-light overflow-hidden border-t border-brand-border">

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs tracking-widest text-brand-text-muted uppercase font-bold">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-border">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-6 md:py-0 px-4 flex flex-col text-left"
            >
              {/* Giant number */}
              <div className="font-display font-extrabold text-5xl sm:text-6xl text-brand-text-primary mb-4 flex items-baseline">
                {metric.value.replace(/[^0-9]/g, '')}
                <span className="text-2xl text-brand-primary ml-1">
                  {metric.value.replace(/[0-9]/g, '')}
                </span>
              </div>
              {/* Label */}
              <p className="text-brand-text-secondary leading-relaxed font-medium">
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
