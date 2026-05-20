import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiMail, FiPhone, FiMapPin, FiLoader } from 'react-icons/fi';
import { officeInfo } from '../constants/portfolioData';

// API base URL configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      lookingFor: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const toastId = toast.loading('Sending message...');
    
    try {
      const response = await axios.post(API_URL, data);
      
      if (response.data.success) {
        toast.success(response.data.message || 'Message sent successfully!', { id: toastId });
        reset(); // Clear form fields
      } else {
        toast.error(response.data.message || 'Failed to send message.', { id: toastId });
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      const errorMsg = error.response?.data?.message || 'Error occurred. Please try again later.';
      toast.error(errorMsg, { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-brand-dark overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 text-left flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-widest text-brand-blue uppercase font-bold px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-full w-fit">
                Get In Touch
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-text-primary">
                Let's discuss what you're building.
              </h2>
              <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
                Tell us what you need – staffing, a project, or just an exploratory conversation – and we'll get back to you within 4 business hours.
              </p>
            </div>

            {/* Office Info Items */}
            <div className="flex flex-col gap-6 mt-4">
              {/* Office address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <FiMapPin className="text-lg" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-text-primary text-sm uppercase tracking-wider mb-1">Office</h4>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">{officeInfo.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <FiPhone className="text-lg" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-text-primary text-sm uppercase tracking-wider mb-1">Call</h4>
                  <p className="text-brand-text-secondary text-sm leading-relaxed hover:text-brand-blue transition-colors">
                    <a href={`tel:${officeInfo.phone.replace(/[^0-9+]/g, '')}`}>{officeInfo.phone}</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <FiMail className="text-lg" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-brand-text-primary text-sm uppercase tracking-wider mb-1">Email</h4>
                  <p className="text-brand-text-secondary text-sm leading-relaxed hover:text-brand-blue transition-colors">
                    <a href={`mailto:${officeInfo.email}`}>{officeInfo.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-brand-card border border-brand-border p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 text-left">
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-brand-text-primary">
                      First name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Jane"
                      className={`w-full bg-slate-50 border ${
                        errors.firstName ? 'border-red-500' : 'border-brand-border focus:border-brand-blue'
                      } px-4 py-3 rounded-lg text-brand-text-primary text-sm outline-none transition-colors`}
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-xs mt-0.5">{errors.firstName.message}</span>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-brand-text-primary">
                      Last name <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Cooper"
                      className={`w-full bg-slate-50 border ${
                        errors.lastName ? 'border-red-500' : 'border-brand-border focus:border-brand-blue'
                      } px-4 py-3 rounded-lg text-brand-text-primary text-sm outline-none transition-colors`}
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-xs mt-0.5">{errors.lastName.message}</span>
                    )}
                  </div>
                </div>

                {/* Email Address & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Work Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-brand-text-primary">
                      Work email <span className="text-brand-blue">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="jane@company.com"
                      className={`w-full bg-slate-50 border ${
                        errors.email ? 'border-red-500' : 'border-brand-border focus:border-brand-blue'
                      } px-4 py-3 rounded-lg text-brand-text-primary text-sm outline-none transition-colors`}
                      {...register('email', {
                        required: 'Work email is required',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: 'Please enter a valid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-0.5">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-semibold text-brand-text-primary">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="Your company"
                      className="w-full bg-slate-50 border border-brand-border focus:border-brand-blue px-4 py-3 rounded-lg text-brand-text-primary text-sm outline-none transition-colors"
                      {...register('company')}
                    />
                  </div>
                </div>

                {/* What are you looking for? */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="lookingFor" className="text-sm font-semibold text-brand-text-primary">
                    What are you looking for?
                  </label>
                  <select
                    id="lookingFor"
                    className="w-full bg-slate-50 border border-brand-border focus:border-brand-blue px-4 py-3 rounded-lg text-brand-text-primary text-sm outline-none transition-colors appearance-none cursor-pointer"
                    {...register('lookingFor')}
                  >
                    <option value="" className="bg-brand-card">Choose one...</option>
                    <option value="IT Staffing & Talent" className="bg-brand-card">IT Staffing & Talent</option>
                    <option value="Software Development" className="bg-brand-card">Software Development</option>
                    <option value="Cloud & Infrastructure" className="bg-brand-card">Cloud & Infrastructure</option>
                    <option value="Digital Transformation" className="bg-brand-card">Digital Transformation</option>
                    <option value="Data & Analytics" className="bg-brand-card">Data & Analytics</option>
                    <option value="AI & Automation" className="bg-brand-card">AI & Automation</option>
                    <option value="IT Consulting" className="bg-brand-card">IT Consulting</option>
                    <option value="General inquiry" className="bg-brand-card">General inquiry</option>
                  </select>
                </div>

                {/* Message / Tell us more */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-brand-text-primary">
                    Tell us a bit more <span className="text-brand-blue">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Briefly describe what you're trying to build or hire for..."
                    className={`w-full bg-slate-50 border ${
                      errors.message ? 'border-red-500' : 'border-brand-border focus:border-brand-blue'
                    } px-4 py-3 rounded-lg text-brand-text-primary text-sm outline-none transition-colors resize-y`}
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-0.5">{errors.message.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 mt-4 px-6 py-3.5 bg-brand-blue hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="animate-spin text-lg" />
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Footer Note */}
                <p className="text-xs text-brand-text-muted mt-2 text-center">
                  Your information is confidential. A senior consultant – not an SDR – will respond within 4 business hours.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
