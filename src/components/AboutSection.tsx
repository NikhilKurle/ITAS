import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative section-padding bg-itas-bg border-t border-light-editorial overflow-hidden"
    >
      <div className="global-container w-full">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column - Heading (Columns 1 to 7) */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            <SectionLabel number="01" text="About ITAS" />

            <motion.h2
              custom={0}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="heading-editorial-section text-itas-dark tracking-tighter"
            >
              One Association. <br />
              One Ecosystem. <br />
              One Technology <br />
              Vision.
            </motion.h2>
          </div>

          {/* Right Column - Factual text description (Columns 8 to 12) */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-6 pt-4 lg:pt-16">
            <motion.p
              custom={0.08}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="body-editorial font-medium text-itas-dark/90 text-base md:text-[17px] leading-relaxed"
            >
              The IT Association of Solapur (ITAS) is a dedicated non-profit organization representing the IT and ITeS community of Solapur. Built by founders, directors, and technology leaders, our association is focused on driving local technology integration and positioning Solapur as a preferred IT destination.
            </motion.p>

            <motion.p
              custom={0.16}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="body-editorial text-sm md:text-base leading-relaxed"
            >
              We act as a unified voice to advocate for critical industry infrastructure, such as dedicated IT Hubs, subsidized economic incentives, and high-speed network connectivity. By aligning local capability with administrative action and high-level political support, we seek to prevent talent migration and attract corporate technology investments.
            </motion.p>

            <motion.p
              custom={0.24}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="body-editorial text-sm md:text-base leading-relaxed"
              style={{ borderLeft: '2px solid #015989', paddingLeft: '1rem', color: 'rgba(16,16,16,0.85)', fontWeight: 500 }}
            >
              Through advocacy forums, talent incubation initiatives, and flagship community events, ITAS provides a collaborative platform to network, innovate, and accelerate economic growth.
            </motion.p>
          </div>

        </div>

        {/* Dividing Line and Large Statement */}
        <div className="mt-20 pt-16 border-t border-light-editorial flex flex-col md:flex-row md:justify-between items-start md:items-end gap-8">
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-nimbus font-extrabold text-[10vw] md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter text-itas-dark text-left"
          >
            Solapur. <br />
            <span style={{ background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Technology.
            </span>{' '}
            <br />
            Together.
          </motion.div>

          <motion.div
            custom={0.15}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[10px] font-mono uppercase tracking-[0.2em] text-itas-muted max-w-[300px] text-left leading-relaxed border-l border-itas-gray/50 pl-4"
          >
            // Strategically advocating for the growth of the local tech industry and talent infrastructure.
          </motion.div>
        </div>
      </div>
    </section>
  );
};
