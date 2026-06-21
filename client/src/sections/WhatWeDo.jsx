import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants/portfolioData';
import { 
  FiArrowRight, 
  FiUsers, 
  FiCode, 
  FiCloud, 
  FiGlobe, 
  FiBarChart2, 
  FiCpu, 
  FiSettings, 
  FiMessageSquare 
} from 'react-icons/fi';

const iconMap = {
  'IT Staffing & Talent': FiUsers,
  'Software Development': FiCode,
  'Cloud & Infrastructure': FiCloud,
  'Digital Transformation': FiGlobe,
  'Data & Analytics': FiBarChart2,
  'AI & Automation': FiCpu,
  'IT Consulting': FiSettings
};

const WhatWeDo = () => {
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
    <section id="services" className="py-20 relative bg-brand-bg-light overflow-hidden border-t border-brand-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col gap-4">
          <span className="text-xs tracking-widest text-brand-text-muted uppercase font-bold">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
            End-to-end IT and staffing solutions
          </h2>
          <p className="text-brand-text-secondary text-base sm:text-lg">
            Two practice areas, seven services, one team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.title] || FiSettings;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-active p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-sm min-h-[280px]"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-brand-text-secondary mb-2">
                    <IconComponent className="text-xl" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-text-primary hover:text-brand-primary mt-8 w-fit transition-colors duration-300 group/link"
                >
                  Learn more
                  <FiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            );
          })}

          {/* Not Sure What You Need Card (8th item in grid) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: services.length * 0.05 }}
            className="bg-brand-bg-dark border border-brand-border-dark p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-sm min-h-[280px]"
          >
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg border border-brand-text-muted/30 flex items-center justify-center text-brand-primary mb-2">
                <FiMessageSquare className="text-xl" />
              </div>
              <h4 className="font-display font-bold text-xl text-brand-text-light">
                Not sure what you need?
              </h4>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                Talk to a senior consultant. We'll help you scope the right engagement - staffing, project, or hybrid.
              </p>
            </div>
            
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover mt-8 w-fit transition-colors duration-300 group/link"
            >
              Book a discovery call
              <FiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
