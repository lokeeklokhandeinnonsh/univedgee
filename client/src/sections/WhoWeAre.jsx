import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiActivity, FiCheckSquare, FiHeart } from 'react-icons/fi';
import { whoWeAreFeatures } from '../constants/portfolioData';

// Map icon names to components
const icons = [FiUsers, FiActivity, FiCheckSquare, FiHeart];

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
    <section className="py-24 bg-[#F8FAFC] relative border-t border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-xs tracking-widest text-brand-text-muted uppercase font-bold">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-brand-text-primary leading-[1.2]">
              A global IT & staffing firm,<br className="hidden lg:block" />
              focused on what matters.
            </h2>
            <div className="flex flex-col gap-5 text-brand-text-secondary text-[15px] sm:text-base leading-relaxed max-w-lg">
              <p>
                UnivEdge is a global IT and staffing firm working with mid-market companies that need senior technology talent and reliable delivery - fast.
              </p>
              <p>
                We combine industry-specific expertise with a vetted global talent network, so our clients can scale teams, ship products, and modernize systems without compromising quality.
              </p>
            </div>
            <a
              href="#services"
              onClick={scrollToServices}
              className="mt-4 flex items-center gap-2 text-brand-text-primary font-bold hover:text-brand-primary transition-colors duration-300 group w-fit"
            >
              See how we work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {whoWeAreFeatures.map((feature, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-slate-200 p-6 rounded-[12px] text-left hover:border-slate-300 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded bg-[#0f172a] flex items-center justify-center text-[#f59e0b] mb-4">
                    <IconComponent className="text-[18px]" />
                  </div>
                  <h4 className="font-display font-bold text-[15px] text-[#0f172a] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-[13px] leading-relaxed">
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
