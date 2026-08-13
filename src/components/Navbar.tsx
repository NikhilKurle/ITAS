import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home', number: '01', isAnchor: true },
  { name: 'About', href: '#about', number: '02', isAnchor: true },
  { name: 'Meet the Team', href: '/team', number: '03', isAnchor: false },
  { name: 'Mission', href: '#mission', number: '04', isAnchor: true },
  { name: 'Ecosystem', href: '#ecosystem', number: '05', isAnchor: true },
  { name: 'Contact', href: '#contact', number: '06', isAnchor: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  // Handle scroll detection for background/border change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', id);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isAnchor: boolean) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (!isAnchor) {
      // Page route
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If on /team page, navigate home first then scroll
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(href), 150);
    } else {
      scrollToSection(href);
    }
  };

  const isTeamPage = location.pathname === '/team';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-itas-bg/95 backdrop-blur-md border-b border-light-editorial py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="global-container flex justify-between items-center w-full">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-2xl font-extrabold tracking-tighter text-itas-dark font-nimbus flex items-center gap-1.5 focus:outline-none focus:text-itas-blue"
          >
            ITAS
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = !link.isAnchor && isTeamPage;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                  className={`relative group text-[13px] font-bold uppercase tracking-wider font-nimbus py-1 focus:outline-none transition-colors duration-300 ${
                    isActive
                      ? 'text-itas-blue'
                      : 'text-itas-dark/70 hover:text-itas-blue'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    style={{ background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)' }}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact', true)}
              className="group flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-widest text-white font-nimbus rounded-[6px] focus:outline-none transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)', boxShadow: '0 2px 12px rgba(1,89,137,0.3)' }}
            >
              JOIN ITAS
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-itas-dark hover:text-itas-blue transition-colors focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-itas-darksec flex flex-col justify-between p-8 md:hidden"
          >
            {/* Top Bar Spacer */}
            <div className="h-20" />

            {/* Menu Items */}
            <nav className="flex flex-col gap-5 my-auto text-left" aria-label="Mobile Navigation">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: reduceMotion ? 0 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.isAnchor)}
                    className="group flex items-baseline gap-4 py-2 border-b border-white/5 font-extrabold text-white hover:text-itas-blue-light transition-colors focus:outline-none focus:text-itas-blue-light"
                    style={{ fontSize: 'clamp(1.8rem, 7vw, 2.5rem)', lineHeight: '1', minHeight: '48px' }}
                  >
                    <span className="text-[10px] font-mono text-white/35">{link.number}</span>
                    <span className="font-nimbus uppercase tracking-tighter leading-none">{link.name}</span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ y: reduceMotion ? 0 : 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.3, duration: 0.4, ease: 'easeOut' }}
              className="pt-6 border-t border-white/5"
            >
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact', true)}
                className="group w-full flex items-center justify-between py-4 px-6 text-white text-xs font-bold tracking-widest focus:outline-none rounded-[6px] transition-all duration-300"
                style={{ minHeight: '52px', background: 'linear-gradient(135deg, #015989 0%, #72B6DD 100%)' }}
              >
                <span className="font-nimbus uppercase">Join the Ecosystem</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
