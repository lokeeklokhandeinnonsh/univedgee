import React from 'react';
import { motion } from 'framer-motion';
import { clientVoices } from '../constants/portfolioData';

const ClientVoices = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-brand-dark overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full">
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
              className="bg-brand-card border border-brand-border p-8 md:p-12 rounded-3xl text-left relative shadow-2xl overflow-hidden"
            >
              {/* Highlight gradient line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-blue to-brand-cyan"></div>
              <span className="text-brand-blue/10 text-8xl font-serif absolute -top-4 right-8 select-none">”</span>

              <div className="flex flex-col gap-8 relative z-10">
                {/* Quote Text */}
                <blockquote className="font-display text-lg md:text-2xl text-brand-text-primary font-medium leading-relaxed italic">
                  "{voice.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-brand-border pt-6">
                  <div className="flex items-center gap-4">
                    {/* Initials Badge */}
                    <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center font-display font-bold text-white text-base shadow-[0_0_15px_rgba(37,99,235,0.3)]">
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
                  <div className="font-display font-black text-xl text-brand-text-muted tracking-widest uppercase bg-brand-dark/40 px-4 py-2 border border-brand-border rounded-lg select-none">
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
