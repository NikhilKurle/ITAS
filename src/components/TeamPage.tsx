import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

interface Member {
  name: string;
  role: string;
  company: string;
  image: string;
}

const coreTeam: Member[] = [
  {
    name: 'Apurv Jadhav',
    role: 'Founder-President, IT Association of Solapur',
    company: 'Building software products by the trifecta of Business, Engineering and Technology.',
    image: 'https://itas.org.in/home/_assets/media/926c2a873adb1adaa931bd5a51993d95.png',
  },
  {
    name: 'Jayant Holeypatil',
    role: 'Secretary, IT Association of Solapur',
    company: 'MD/CEO, Space 5121 Technologies Pvt. Ltd.',
    image: 'https://itas.org.in/home/_assets/media/ec9e8fa874e0a18bdba379aeb5da2cf0.png',
  },
  {
    name: 'Abhishek Joshi',
    role: 'Joint Secretary, IT Association of Solapur',
    company: 'Founder, Sweet Build Creative Tech LLP',
    image: 'https://itas.org.in/home/_assets/media/248065d77a9706c8c69854a0c5381868.jpg',
  },
  {
    name: 'Viraj Kulkarni',
    role: 'Director, IT Association of Solapur',
    company: 'Founder, Mediahaus | ThriveWorks',
    image: 'https://itas.org.in/home/_assets/media/d9eb93d9606230c0f067c989956041dd.png',
  },
  {
    name: 'Darshan Jadhav',
    role: 'Director, IT Association of Solapur',
    company: 'Director, Space 5121 Technologies Pvt. Ltd.',
    image: 'https://itas.org.in/home/_assets/media/da837aaec3d643a7172ad4407b4888d9.png',
  },
  {
    name: 'Mauli Zambare',
    role: 'Vice President, IT Association of Solapur',
    company: 'Director, Grey Knight Services',
    image: 'https://itas.org.in/home/_assets/media/1c8ed605024211b925441e3f97fe9ce2.png',
  },
  {
    name: 'Navnath Torane',
    role: 'Treasurer, IT Association of Solapur',
    company: 'Director, 10G Telecom Pvt. Ltd.',
    image: 'https://itas.org.in/home/_assets/media/60497b8acd74a5dc3585450e0a7ad7d8.png',
  },
  {
    name: 'Rohan Furde',
    role: 'Joint Treasurer, IT Association of Solapur',
    company: 'Founder, Furde Infotech',
    image: 'https://itas.org.in/home/_assets/media/304a2d80a818fa72ae33fb672eceadb6.png',
  },
  {
    name: 'Abhijit Rathod',
    role: 'Director, IT Association of Solapur',
    company: 'Founder, Apex Finodeal LLP',
    image: 'https://itas.org.in/home/_assets/media/cb17b7b0a28ca30a276c38486f320d76.png',
  },
  {
    name: 'Dhiraj Karale',
    role: 'Director, IT Association of Solapur',
    company: 'Director, Dev Kind Technologies LLP',
    image: 'https://itas.org.in/home/_assets/media/20c6e061110eb0aea58b598c45d6ee53.png',
  },
];

const advisoryTeam: Member[] = [
  {
    name: 'Sunil Furde',
    role: 'Advisory Committee',
    company: 'Chairman and Managing Director, Furde Constructions Pvt. Ltd.',
    image: 'https://itas.org.in/home/_assets/media/9fea8c8b20ac9e862bfbc6bbe70bf7b6.png',
  },
  {
    name: 'Ram Reddy',
    role: 'Advisory Committee',
    company: 'Managing Director, Balaji Amines Ltd.',
    image: 'https://itas.org.in/home/_assets/media/86450439843d260dbf5db2bca18155bc.png',
            
  },
  {
    name: 'Karan Shah',
    role: 'Advisory Committee',
    company: 'Executive Director, Precision Group',
    image: 'https://itas.org.in/home/_assets/media/85fdd5e683cec2c9740c997da71c0c7a.png',
            
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const TeamPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-itas-bg min-h-screen tech-grid">
      <div className="global-container w-full text-left">
        {/* Section Header */}
        <div className="max-w-4xl mb-20 space-y-6">
          <SectionLabel number="03" text="Meet The Team" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="heading-editorial-huge text-itas-dark tracking-tighter"
          >
            Meet the Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="body-editorial text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-itas-muted"
          >
            The people driving ITAS and strengthening Solapur's technology ecosystem.
          </motion.p>
        </div>

        {/* Core leadership Grid */}
        <div className="mb-24">
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-itas-blue font-bold mb-10 pb-4 border-b border-light-editorial">
            // Core Leadership & Directors
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
          >
            {coreTeam.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="group flex flex-col space-y-4">
                {/* Image Container with Editorial Layout */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-itas-gray rounded-sm border border-light-editorial flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-[0.4,0,0.2,1] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-itas-darksec/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-nimbus text-lg font-bold tracking-tight text-itas-dark group-hover:text-itas-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-mono font-semibold tracking-wider text-itas-blue uppercase">
                    {member.role.split(',')[0]}
                  </p>
                  <p className="text-xs text-itas-muted leading-relaxed font-normal pt-1 max-w-[90%]">
                    {member.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Advisory Committee Grid */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-itas-blue font-bold mb-10 pb-4 border-b border-light-editorial">
            // Advisory Committee
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {advisoryTeam.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="group flex flex-col space-y-4">
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-itas-gray rounded-sm border border-light-editorial flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-[0.4,0,0.2,1] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-itas-darksec/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-nimbus text-lg font-bold tracking-tight text-itas-dark group-hover:text-itas-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-mono font-semibold tracking-wider text-itas-blue uppercase">
                    {member.role}
                  </p>
                  <p className="text-xs text-itas-muted leading-relaxed font-normal pt-1 max-w-[90%]">
                    {member.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
