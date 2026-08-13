import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const marqueeWords = [
  'FOUNDERS',
  'TECHNOLOGY LEADERS',
  'ENTREPRENEURS',
  'DEVELOPERS',
  'IT COMPANIES',
  'INNOVATORS',
];

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', id);
    }
  };

  // Node configuration for network visual
  const nodes = [
    { id: 1, x: 80, y: 150, label: 'FOUNDERS', delay: 0, mobileHidden: false },
    { id: 2, x: 240, y: 80, label: 'IT COMPANIES', delay: 1.5, mobileHidden: false },
    { id: 3, x: 400, y: 120, label: 'DEVELOPERS', delay: 0.8, mobileHidden: false },
    { id: 4, x: 160, y: 280, label: 'TECH LEADERS', delay: 2, mobileHidden: true },
    { id: 5, x: 360, y: 260, label: 'INNOVATORS', delay: 1.2, mobileHidden: true },
    { id: 6, x: 280, y: 380, label: 'ENTREPRENEURS', delay: 0.5, mobileHidden: true },
  ];

  // Connections between node indices (0-based)
  const connections = [
    { from: 0, to: 1, mobileHidden: false },
    { from: 1, to: 2, mobileHidden: false },
    { from: 0, to: 3, mobileHidden: true },
    { from: 1, to: 3, mobileHidden: true },
    { from: 2, to: 4, mobileHidden: true },
    { from: 3, to: 5, mobileHidden: true },
    { from: 4, to: 5, mobileHidden: true },
    { from: 4, to: 3, mobileHidden: true },
  ];

  // Floating animation for nodes
  const floatTransition = (delay: number) => ({
    y: reduceMotion ? 0 : [0, -10, 10, 0],
    x: reduceMotion ? 0 : [0, 6, -6, 0],
    transition: {
      duration: 10 + delay * 2,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay,
    },
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-0 bg-itas-bg overflow-hidden tech-grid"
    >
      {/* Gradient Radial Glow — new palette */}
      <div
        className="absolute right-[-5%] top-[8%] w-[550px] h-[550px] rounded-full blur-[120px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(114,182,221,0.12) 0%, rgba(1,89,137,0.06) 70%, transparent 100%)' }}
      />
      <div
        className="absolute left-[8%] bottom-[12%] w-[280px] h-[280px] rounded-full blur-[80px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(1,89,137,0.08) 0%, transparent 70%)' }}
      />

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="global-container w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 flex-grow pb-16"
      >
        {/* Left: Text & CTAs (Columns 1 to 8) */}
        <div className="lg:col-span-8 flex flex-col text-left">
          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="text-[11px] font-mono tracking-[0.25em] font-bold uppercase mb-4"
            style={{ color: '#015989' }}
          >
            IT Association of Solapur
          </motion.div>

          {/* Heading — Title Case, no uppercase transform */}
          <motion.h1
            variants={itemVariants}
            className="heading-editorial-huge text-itas-dark tracking-tighter mb-6"
          >
            Driving The <br />
            <span style={{ background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              IT Revolution
            </span>{' '}
            <br />
            In Solapur.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="body-editorial max-w-[500px] mb-8"
          >
            ITAS connects founders, directors, and leaders from Solapur's IT and ITeS sector to strengthen the local technology ecosystem, nurture talent, and advocate for infrastructure and industry growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <button
              onClick={() => handleScrollTo('#about')}
              className="btn-primary group gap-2.5 z-10 w-full sm:w-auto"
            >
              Discover ITAS
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="btn-secondary z-10 w-full sm:w-auto"
            >
              Join the Ecosystem
            </button>
          </motion.div>
        </div>

        {/* Right: SVG Tech Network (Columns 9 to 12) */}
        <div className="lg:col-span-4 relative w-full aspect-square pointer-events-none flex justify-center items-center">
          <motion.svg
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="w-full h-full max-w-[380px] text-itas-dark opacity-30 lg:opacity-85"
            viewBox="0 0 460 460"
          >
            {/* Technical grid accents inside SVG */}
            <line x1="40" y1="40" x2="420" y2="40" stroke="#E6E6E1" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="40" y1="420" x2="420" y2="420" stroke="#E6E6E1" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="40" y1="40" x2="40" y2="420" stroke="#E6E6E1" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="420" y1="40" x2="420" y2="420" stroke="#E6E6E1" strokeWidth="0.75" strokeDasharray="3 3" />

            {/* Connection Paths */}
            {connections.map((conn, idx) => {
              const nodeFrom = nodes[conn.from];
              const nodeTo = nodes[conn.to];
              return (
                <motion.line
                  key={idx}
                  x1={nodeFrom.x}
                  y1={nodeFrom.y}
                  x2={nodeTo.x}
                  y2={nodeTo.y}
                  stroke="#015989"
                  strokeWidth="1"
                  strokeOpacity="0.28"
                  className={conn.mobileHidden ? 'hidden sm:block' : ''}
                  animate={{ strokeDashoffset: reduceMotion ? 0 : [80, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  style={{ strokeDasharray: '5 3' }}
                />
              );
            })}

            {/* Nodes Group */}
            {nodes.map((node) => (
              <motion.g
                key={node.id}
                animate={floatTransition(node.delay)}
                className={`cursor-pointer ${node.mobileHidden ? 'hidden sm:block' : ''}`}
              >
                {/* Node Outer Pulsing Ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="transparent"
                  stroke="#72B6DD"
                  strokeWidth="0.75"
                  strokeOpacity="0.35"
                  className="animate-pulse"
                />
                {/* Node Core */}
                <circle cx={node.x} cy={node.y} r="4" fill="#015989" />
                {/* Node Label */}
                <text
                  x={node.x + 10}
                  y={node.y + 3}
                  fill="#101010"
                  fontSize="8"
                  fontWeight="bold"
                  fontFamily="monospace"
                  letterSpacing="1"
                  className="opacity-60 fill-current"
                >
                  {node.label}
                </text>
              </motion.g>
            ))}
          </motion.svg>
        </div>
      </motion.div>

      {/* Bottom Ticker Marquee */}
      <div className="w-full bg-itas-dark py-4.5 overflow-hidden z-10 border-t border-white/5">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex items-center gap-16 text-[10px] md:text-xs font-bold font-mono tracking-[0.25em] text-white/60"
            animate={{ x: reduceMotion ? 0 : [0, '-50%'] }}
            transition={{ ease: 'linear', duration: reduceMotion ? 0 : 25, repeat: Infinity }}
            style={{ width: 'max-content' }}
          >
            {Array.from({ length: 4 }).flatMap(() => marqueeWords).map((word, idx) => (
              <React.Fragment key={idx}>
                <span>{word}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#015989' }} />
              </React.Fragment>
            ))}
            {Array.from({ length: 4 }).flatMap(() => marqueeWords).map((word, idx) => (
              <React.Fragment key={`dup-${idx}`}>
                <span>{word}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#015989' }} />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
