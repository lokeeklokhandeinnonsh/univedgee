import React from 'react';
import { motion } from 'framer-motion';

const ReadyToTalk = () => {
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
    <section className="py-20 relative bg-brand-bg-dark overflow-hidden border-t border-brand-border-dark">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-text-light leading-tight">
            Ready when you are.
          </h2>
          <p className="text-brand-text-muted text-base sm:text-lg md:text-xl max-w-2xl">
            Let's build a team, ship a product, or modernize your system.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="mt-4 px-8 py-4 bg-brand-primary hover:bg-brand-primary-hover text-brand-text-primary font-bold rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyToTalk;
