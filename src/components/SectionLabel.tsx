import React from 'react';

interface SectionLabelProps {
  number: string;
  text: string;
  dark?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, text, dark = false }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      <span className="text-[10px] font-mono tracking-widest text-itas-blue/50 dark:text-white/30">
        {number}
      </span>
      <span className={`w-8 h-[1px] ${dark ? 'bg-white/10' : 'bg-itas-dark/10'}`} />
      <span className={`micro-label ${dark ? 'text-itas-cyan' : 'text-itas-blue'}`}>
        {text}
      </span>
    </div>
  );
};
