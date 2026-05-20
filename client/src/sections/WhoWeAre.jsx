import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCpu, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';
import { whoWeAreFeatures } from '../constants/portfolioData';

// Map icon names to components
const icons = [FiUsers, FiCpu, FiCheckCircle, FiTrendingUp];

const WhoWeAre = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const element = document.querySelector('#services');
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
    <section className="py-20 bg-brand-dark/50 relative border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full w-fit">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary leading-tight">
              A global IT & staffing firm, focused on what matters.
            </h2>
            <div className="flex flex-col gap-4 text-brand-text-secondary text-base sm:text-lg leading-relaxed">
              <p>
                UnivEdge is a global IT and staffing firm working with mid-market companies that need senior technology talent and reliable delivery – fast.
              </p>
              <p>
                We combine industry-specific expertise with a vetted global talent network, so our clients can scale teams, ship products, and modernize systems without compromising quality.
              </p>
            </div>
            <a
              href="#services"
              onClick={scrollToServices}
              className="mt-2 w-fit px-6 py-3 bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-text-muted text-brand-text-primary font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              See how we work
            </a>
          </div>

          {/* Right Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {whoWeAreFeatures.map((feature, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-brand-card border border-brand-border p-6 rounded-2xl text-left hover:border-brand-border-active transition-all duration-300 group shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                    <IconComponent className="text-xl" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-brand-text-primary mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
