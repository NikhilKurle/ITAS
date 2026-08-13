import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const EcosystemSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  // Abstract nodes for Solapur ecosystem
  const ecosystemNodes = [
    { label: 'IT COMPANIES', x: 120, y: 140, sub: '30+ ENTITIES', delay: 0.2, mobileHidden: false },
    { label: 'FOUNDERS', x: 340, y: 80, sub: 'LEADERSHIP', delay: 1.5, mobileHidden: false },
    { label: 'DEVELOPERS', x: 560, y: 130, sub: 'TALENT POOL', delay: 0.7, mobileHidden: false },
    { label: 'TECH LEADERS', x: 200, y: 290, sub: 'ADVOCACY', delay: 2.1, mobileHidden: true },
    { label: 'ENTREPRENEURS', x: 480, y: 270, sub: 'INNOVATION', delay: 1.3, mobileHidden: true },
    { label: 'INNOVATORS', x: 680, y: 200, sub: 'COMMUNITY', delay: 0.9, mobileHidden: true },
    { label: 'SOLAPUR HUB', x: 380, y: 200, sub: 'STPI / PARK', delay: 1.8, mobileHidden: false }
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 5 },
    { from: 0, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 6, to: 0 },
    { from: 6, to: 1 },
    { from: 6, to: 2 },
    { from: 6, to: 3 },
    { from: 6, to: 4 },
    { from: 6, to: 5 },
  ];

  const floatTransition = (delay: number) => ({
    y: reduceMotion ? 0 : [0, -10, 10, 0],
    x: reduceMotion ? 0 : [0, 6, -6, 0],
    transition: {
      duration: 12 + delay * 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay,
    },
  });

  return (
    <section
      id="ecosystem"
      className="relative section-padding bg-itas-bg border-t border-light-editorial overflow-hidden"
    >
      <div className="global-container w-full">
        {/* Header split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 items-start">
          {/* Left Column (Columns 1 to 8) */}
          <div className="lg:col-span-8 flex flex-col text-left space-y-6">
            <SectionLabel number="03" text="The Ecosystem" />

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="heading-editorial-section text-itas-dark tracking-tighter"
            >
              Technology <br />
              Has a New <br />
              Address.
            </motion.h2>
          </div>

          {/* Right Column (Columns 9 to 12) */}
          <div className="lg:col-span-4 text-left pt-2 lg:pt-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="body-editorial text-sm md:text-base leading-relaxed"
            >
              A connected technology ecosystem built around collaboration, local industry capability, and the digital future of Solapur.
            </motion.p>
          </div>
        </div>

        {/* Visually Dominant SOLAPUR title */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="w-full text-left select-none mb-8"
        >
          <div
            className="text-[12vw] font-black uppercase tracking-tighter leading-[0.8] font-nimbus -ml-1.5"
            style={{ background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            SOLAPUR
          </div>
        </motion.div>

        {/* Abstract Network Composition Card */}
        <div className="relative w-full border border-light-editorial bg-white/20 backdrop-blur-sm overflow-hidden min-h-[460px] flex justify-center items-center p-6">
          {/* Technical Data Overlay */}
          <div className="absolute top-4 left-6 flex flex-col items-start gap-1 font-mono text-[9px] text-itas-muted tracking-widest z-10 text-left">
            <div>// STATUS: SYSTEM ACTIVE</div>
            <div>// COORD: 17.6599° N, 75.9064° E</div>
            <div>// REGION: SOLAPUR DISTRICT, IN</div>
          </div>

          <div className="absolute bottom-4 right-6 flex flex-col items-end gap-1 font-mono text-[9px] text-itas-muted tracking-widest z-10 text-right">
            <div>NETWORK STRENGTH: STABLE</div>
            <div>INTEGRATIONS: STPI | MIDC | MULTI-UNIT</div>
          </div>

          {/* SVG Tech Composition */}
          <div className="w-full max-w-[800px] aspect-[800/400]">
            <svg
              className="w-full h-full text-itas-dark"
              viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="smallGridEco" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E6E6E1" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#015989" />
                  <stop offset="100%" stopColor="#72B6DD" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGridEco)" className="opacity-45" />

              {/* Connecting Lines */}
              {connections.map((conn, index) => {
                const nodeFrom = ecosystemNodes[conn.from];
                const nodeTo = ecosystemNodes[conn.to];
                const isLineMobileHidden = nodeFrom.mobileHidden || nodeTo.mobileHidden;

                return (
                  <motion.line
                    key={`line-${index}`}
                    x1={nodeFrom.x}
                    y1={nodeFrom.y}
                    x2={nodeTo.x}
                    y2={nodeTo.y}
                    stroke="#015989"
                    strokeWidth="0.75"
                    strokeOpacity="0.22"
                    className={isLineMobileHidden ? 'hidden sm:block' : ''}
                    animate={{ strokeDashoffset: reduceMotion ? 0 : [80, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    style={{ strokeDasharray: '4 3' }}
                  />
                );
              })}

              {/* Nodes */}
              {ecosystemNodes.map((node, index) => (
                <motion.g
                  key={`node-${index}`}
                  animate={floatTransition(node.delay)}
                  className={node.mobileHidden ? 'hidden sm:block' : ''}
                >
                  {/* Outer glow circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.label === 'SOLAPUR HUB' ? '15' : '10'}
                    fill="transparent"
                    stroke={node.label === 'SOLAPUR HUB' ? '#72B6DD' : '#015989'}
                    strokeWidth="0.75"
                    strokeOpacity="0.3"
                    className="animate-pulse"
                  />

                  {/* Node Dot */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.label === 'SOLAPUR HUB' ? '5' : '3.5'}
                    fill={node.label === 'SOLAPUR HUB' ? 'url(#nodeGrad)' : '#015989'}
                  />

                  {/* Pulsing Core for Hub */}
                  {node.label === 'SOLAPUR HUB' && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="1.5"
                      fill="#72B6DD"
                    />
                  )}

                  {/* Node Label Text */}
                  <text
                    x={node.x}
                    y={node.y - 15}
                    textAnchor="middle"
                    fill="#101010"
                    fontSize="8"
                    fontWeight="800"
                    fontFamily="Nimbus Sans, sans-serif"
                    letterSpacing="0.8"
                    className="fill-current uppercase"
                  >
                    {node.label}
                  </text>

                  {/* Node Subtitle Text */}
                  <text
                    x={node.x}
                    y={node.y - 7}
                    textAnchor="middle"
                    fill="#707070"
                    fontSize="6"
                    fontFamily="monospace"
                    letterSpacing="0.5"
                    className="opacity-60 fill-current"
                  >
                    {node.sub}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
