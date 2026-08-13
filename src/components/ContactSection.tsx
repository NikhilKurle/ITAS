import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { ArrowRight, Loader2, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
        isValid = false;
      }
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  return (
    <section
      id="contact"
      className="relative section-padding bg-itas-bg border-t border-light-editorial overflow-hidden"
    >
      <div className="global-container w-full">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Context (Columns 1 to 5) */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6">
            <SectionLabel number="04" text="Contact" />

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="heading-editorial-section text-itas-dark tracking-tighter font-nimbus"
            >
              Let's <br />
              Connect.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-sm md:text-base text-itas-muted space-y-4 max-w-sm"
            >
              <p className="leading-relaxed">
                Official contact details (such as direct email addresses or phone numbers) are kept private to protect the association's leadership and directors from unsolicited communications.
              </p>
              <p className="leading-relaxed font-semibold text-itas-dark/95">
                To inquire about joining ITAS, partnering on technology infrastructure initiatives, or reaching representatives, please use this form.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Form (Columns 6 to 12) */}
          <div className="lg:col-span-7 w-full text-left pt-4 lg:pt-16">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-itas-muted font-bold">
                    Name <span style={{ color: '#015989' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`border-b bg-transparent py-3.5 text-base font-nimbus text-itas-dark transition-colors duration-300 placeholder:text-itas-gray/60 focus:outline-none w-full ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-itas-gray/80 focus:border-itas-blue'
                    }`}
                  />
                  <div className="min-h-[18px]">
                    {errors.name && (
                      <span className="text-[11px] font-mono text-red-500" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-itas-muted font-bold">
                    Email Address <span style={{ color: '#015989' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@domain.com"
                    className={`border-b bg-transparent py-3.5 text-base font-nimbus text-itas-dark transition-colors duration-300 placeholder:text-itas-gray/60 focus:outline-none w-full ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-itas-gray/80 focus:border-itas-blue'
                    }`}
                  />
                  <div className="min-h-[18px]">
                    {errors.email && (
                      <span className="text-[11px] font-mono text-red-500" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="phone" className="text-[10px] font-mono uppercase tracking-[0.2em] text-itas-muted font-bold">
                    Phone Number <span className="text-itas-muted/50">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="border-b border-itas-gray/80 bg-transparent py-3.5 text-base font-nimbus text-itas-dark transition-colors duration-300 placeholder:text-itas-gray/60 focus:outline-none w-full focus:border-itas-blue"
                  />
                  <div className="min-h-[18px]" />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-itas-muted font-bold">
                    Message <span style={{ color: '#015989' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you or collaborate?"
                    className={`border-b bg-transparent py-3.5 text-base font-nimbus text-itas-dark transition-colors duration-300 placeholder:text-itas-gray/60 focus:outline-none w-full resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-itas-gray/80 focus:border-itas-blue'
                    }`}
                  />
                  <div className="min-h-[18px]">
                    {errors.message && (
                      <span className="text-[11px] font-mono text-red-500" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary group gap-8 w-full sm:w-auto"
                    style={{ minHeight: '52px' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="border p-8 md:p-12 flex flex-col items-start text-left space-y-6 relative"
                style={{ borderColor: 'rgba(1,89,137,0.35)', background: 'rgba(1,89,137,0.05)' }}
              >
                <div className="w-10 h-10 rounded-full flex justify-center items-center" style={{ background: 'rgba(1,89,137,0.1)', color: '#015989' }}>
                  <Check className="w-5 h-5" />
                </div>

                <h3 className="text-2xl font-extrabold text-itas-dark uppercase tracking-tighter font-nimbus leading-none">
                  Thank You.
                </h3>

                <p className="text-sm md:text-base text-itas-muted leading-relaxed max-w-xl">
                  Your message has been received. The ITAS team will be in touch shortly.
                </p>

                <div className="font-mono text-xs border-t border-light-editorial pt-4 w-full" style={{ color: 'rgba(1,89,137,0.8)' }}>
                  <code>// TODO: Connect to ITAS contact API.</code>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
