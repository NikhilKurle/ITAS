import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', id);
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 150);
    } else {
      scrollToSection(id);
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname === '/') {
      window.history.pushState(null, '', '#');
    }
  };

  return (
    <footer className="relative bg-itas-darksec text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      {/* Huge Backing Brand Typography */}
      <div className="absolute right-0 left-0 bottom-10 text-[11vw] md:text-[13vw] font-black uppercase tracking-tighter text-white/[0.015] leading-none select-none pointer-events-none text-center font-nimbus whitespace-nowrap overflow-hidden">
        ITAS SOLAPUR
      </div>

      <div className="global-container w-full relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Tagline (Cols 1 to 5) */}
          <div className="md:col-span-5 flex flex-col items-start text-left space-y-4">
            <span className="text-2xl font-extrabold tracking-tighter font-nimbus text-white">ITAS</span>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
              IT Association of Solapur
            </span>
            <p className="text-xs text-itas-gray/50 max-w-xs leading-relaxed font-normal">
              Fostering collaboration, nurturing digital talent, and advocating for world-class IT infrastructure in Solapur.
            </p>
          </div>

          {/* Links Grid (Cols 6 to 10) */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4 text-left">
            <div className="flex flex-col space-y-3">
              <span className="text-[9px] font-mono tracking-[0.25em] text-white/30 uppercase font-bold">// Navigation</span>
              <a
                href="#home"
                onClick={(e) => handleScrollTo(e, '#home')}
                className="text-xs font-bold uppercase tracking-wider text-itas-gray/60 hover:text-itas-blue transition-colors font-nimbus focus:outline-none"
              >
                HOME
              </a>
              <a
                href="#about"
                onClick={(e) => handleScrollTo(e, '#about')}
                className="text-xs font-bold uppercase tracking-wider text-itas-gray/60 hover:text-itas-blue transition-colors font-nimbus focus:outline-none"
              >
                ABOUT
              </a>
              <a
                href="/team"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/team');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-wider text-itas-gray/60 hover:text-itas-blue transition-colors font-nimbus focus:outline-none"
              >
                MEET THE TEAM
              </a>
            </div>

            <div className="flex flex-col space-y-3 pt-6">
              <a
                href="#mission"
                onClick={(e) => handleScrollTo(e, '#mission')}
                className="text-xs font-bold uppercase tracking-wider text-itas-gray/60 hover:text-itas-blue transition-colors font-nimbus focus:outline-none"
              >
                MISSION
              </a>
              <a
                href="#ecosystem"
                onClick={(e) => handleScrollTo(e, '#ecosystem')}
                className="text-xs font-bold uppercase tracking-wider text-itas-gray/60 hover:text-itas-blue transition-colors font-nimbus focus:outline-none"
              >
                ECOSYSTEM
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="text-xs font-bold uppercase tracking-wider text-itas-gray/60 hover:text-itas-blue transition-colors font-nimbus focus:outline-none"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Back to Top button (Cols 11 to 12) */}
          <div className="md:col-span-2 flex justify-start md:justify-end items-center">
            <button
              onClick={handleScrollToTop}
              className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-itas-blue transition-colors duration-300 focus:outline-none"
              style={{ minHeight: '44px' }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-mono text-white/30 text-left">
          <div>
            &copy; {currentYear} ITAS. All rights reserved.
          </div>
          <div className="tracking-widest">
            // IT Association of Solapur
          </div>
        </div>
      </div>
    </footer>
  );
};
