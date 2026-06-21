import React from 'react';
import { motion } from 'framer-motion';
import { clientVoices } from '../constants/portfolioData';

const ClientVoices = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-brand-bg-light overflow-hidden border-t border-brand-border">
      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-xs tracking-widest text-brand-text-muted uppercase font-bold">
            Client Voices
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
            What clients say after we deliver
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="flex flex-col gap-8">
          {clientVoices.map((voice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-bg-light border border-brand-border p-8 md:p-12 rounded-3xl text-left relative shadow-sm overflow-hidden"
            >
              <div className="flex flex-col gap-8 relative z-10">
                {/* Quote Text */}
                <div className="flex flex-col gap-4">
                  <span className="text-brand-primary text-4xl font-serif leading-none">“</span>
                  <blockquote className="font-display text-lg md:text-2xl text-brand-text-primary font-medium leading-relaxed italic">
                    "{voice.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brand-border pt-6">
                  <div className="flex items-center gap-4">
                    {/* Initials Badge */}
                    <div className="w-12 h-12 rounded-full bg-brand-bg-dark flex items-center justify-center font-display font-bold text-white text-base shadow-sm">
                      SM
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-text-primary text-base">
                        {voice.author}
                      </h4>
                      <p className="text-brand-text-secondary text-sm">
                        {voice.role}
                      </p>
                    </div>
                  </div>

                  {/* Company Logo in Testimonial */}
                  <div className="font-display font-black text-xl text-brand-text-muted tracking-widest uppercase px-4 py-2 select-none">
                    {voice.companyLogo}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ClientVoices;
