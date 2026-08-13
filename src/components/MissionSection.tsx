import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { ArrowUpRight } from 'lucide-react';

interface MissionItem {
  num: string;
  title: string;
  desc: string;
}

const missionItems: MissionItem[] = [
  {
    num: '01',
    title: 'Infrastructure',
    desc: 'Advocating for essential infrastructure—from dedicated IT hubs and IT Park spaces to subsidized solar power (₹3/Unit Solar proposal) and high-speed digital connectivity—to attract external investments.',
  },
  {
    num: '02',
    title: 'Collaboration',
    desc: "Fostering strategic connections and partnerships among local founders, IT firms, senior directors, and external industry bodies like HIA and MCCIA to market Solapur's talent pool.",
  },
  {
    num: '03',
    title: 'Ecosystem',
    desc: "Strengthening Solapur's local IT and ITeS network by building a self-sufficient ecosystem that supports new startups, consultants, and tech entrepreneurs through knowledge-sharing forums.",
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'Nurturing local youth and incubating tech talent. Creating high-value professional career pathways right here in Solapur to prevent talent migration to metros.',
  },
];

export const MissionSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="mission"
      className="relative section-padding bg-itas-darksec text-white overflow-hidden tech-grid-dark"
    >
      <div className="global-container w-full">
        {/* Header Section */}
        <div className="flex flex-col text-left space-y-6 mb-16 md:mb-24">
          <SectionLabel number="02" text="Our Focus" dark={true} />

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="heading-editorial-section text-white tracking-tighter max-w-3xl"
          >
            Our Mission Is <br />
            Bigger Than <br />
            Technology.
          </motion.h2>
        </div>

        {/* Full-width rows container */}
        <div className="border-t border-white/10">
          {missionItems.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.4, 0, 0.2, 1] }}
              className="border-b border-white/10 block w-full focus:outline-none"
            >
              {/* Row Grid */}
              <div className="group transition-all duration-500 px-4 -mx-4 hover:bg-white/[0.02] py-8 md:py-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start md:items-center">

                  {/* MOBILE COMPOSITION: Header with Number + Arrow */}
                  <div className="flex md:hidden justify-between items-center w-full">
                    <span className="text-xs font-mono text-white/40 group-hover:text-itas-blue-light transition-colors duration-300">
                      {item.num}
                    </span>
                    <span
                      className={`text-white/30 group-hover:text-itas-blue-light transition-all duration-300 ${
                        reduceMotion ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  {/* DESKTOP: Number (Hidden on mobile) */}
                  <div className="hidden md:block md:col-span-1 text-sm font-mono text-white/40 group-hover:text-itas-blue-light transition-colors duration-300 text-left">
                    {item.num}
                  </div>

                  {/* Title (Cols 2 to 5) */}
                  <div
                    className={`md:col-span-4 text-xl md:text-2xl font-extrabold tracking-tighter text-white group-hover:text-itas-blue-light transition-all duration-300 text-left ${
                      reduceMotion ? '' : 'group-hover:translate-x-2'
                    }`}
                  >
                    {item.title}
                  </div>

                  {/* Description (Cols 6 to 11) */}
                  <div className="md:col-span-6 text-sm md:text-[15px] text-itas-gray/60 leading-relaxed text-left font-normal max-w-[62ch]">
                    {item.desc}
                  </div>

                  {/* DESKTOP: Arrow (Hidden on mobile, Cols 12) */}
                  <div
                    className={`hidden md:flex md:col-span-1 justify-end text-white/30 group-hover:text-itas-blue-light transition-all duration-300 ${
                      reduceMotion ? '' : 'group-hover:translate-x-1.5 group-hover:-translate-y-1'
                    }`}
                  >
                    <ArrowUpRight className="w-6 h-6" />
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
