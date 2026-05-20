import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants/portfolioData';
import { FiArrowUpRight } from 'react-icons/fi';

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
    <section id="services" className="py-20 relative bg-brand-dark overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col gap-4">
          <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full w-fit">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-border-active p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group shadow-lg min-h-[220px]"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-xl text-brand-text-primary group-hover:text-brand-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-text-primary mt-6 w-fit transition-colors duration-300 group/link"
              >
                Learn more
                <FiArrowUpRight className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Not Sure What You Need Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-card to-brand-card-hover border border-brand-border p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl"
        >
          <div className="text-left max-w-2xl">
            <h4 className="font-display font-bold text-lg text-brand-text-primary mb-2">
              Not sure what you need?
            </h4>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Talk to a senior consultant. We'll help you scope the right engagement – staffing, project, or hybrid.
            </p>
          </div>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full md:w-auto px-6 py-3 bg-brand-blue hover:bg-blue-600 text-white text-center font-semibold rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all duration-300 whitespace-nowrap"
          >
            Book a discovery call
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;
