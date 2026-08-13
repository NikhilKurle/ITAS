import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const JoinSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 80;
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  const arrowVariants = {
    initial: { rotate: 0, x: 0, y: 0 },
    hover: {
      rotate: reduceMotion ? 0 : 45,
      x: reduceMotion ? 0 : 4,
      y: reduceMotion ? 0 : -4,
      transition: { duration: 0.3, ease: 'easeInOut' as const }
    }
  };

  const textVariants = {
    initial: { x: 0 },
    hover: {
      x: reduceMotion ? 0 : 6,
      transition: { duration: 0.3, ease: 'easeInOut' as const }
    }
  };

  return (
    <section
      id="join"
      className="relative section-padding text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)',
        backgroundImage: `
          linear-gradient(135deg, #015989 0%, #72B6DD 100%),
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Subtle gradient accent */}
      <div
        className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="global-container w-full relative z-10">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Side: Content (Columns 1 to 8) */}
          <div className="lg:col-span-8 flex flex-col text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-[10px] font-mono tracking-[0.25em] text-white/70 font-bold uppercase"
            >
              // Join the Network
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.4, 0, 0.2, 1] }}
              className="heading-editorial-section text-white tracking-tighter font-nimbus"
            >
              Let's Build <br />
              Solapur's <br />
              Tech Future.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="text-white/85 text-base md:text-lg max-w-xl font-normal leading-relaxed"
            >
              We invite Solapur-based technology leaders, companies, entrepreneurs, developers, and professionals to connect with the ITAS ecosystem. By joining us, you help build a stronger, collective voice to accelerate infrastructure development and technology growth.
            </motion.p>
          </div>

          {/* Right Side: Circular Arrow (Columns 9 to 12) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              whileHover="hover"
              onClick={handleScrollToContact}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-white/25 hover:border-white flex flex-col justify-center items-center cursor-pointer transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
              style={{ minHeight: '144px', minWidth: '144px' }}
              tabIndex={0}
              role="button"
              aria-label="Connect with ITAS, scroll to contact form"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleScrollToContact();
              }}
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

              <div className="flex flex-col items-center gap-1.5 z-10">
                <motion.span
                  variants={textVariants}
                  className="font-nimbus text-[10px] font-bold tracking-[0.2em] uppercase text-white"
                >
                  Connect
                </motion.span>
                <motion.span variants={arrowVariants}>
                  <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-white/90 transition-colors" />
                </motion.span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute left-[5%] bottom-[5%] text-[10vw] font-extrabold text-white/[0.04] tracking-tighter uppercase font-nimbus select-none pointer-events-none leading-none">
        ITAS.ORG.IN
      </div>
    </section>
  );
};
