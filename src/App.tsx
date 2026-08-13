import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MissionSection } from './components/MissionSection';
import { EcosystemSection } from './components/EcosystemSection';
import { JoinSection } from './components/JoinSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TeamPage } from './components/TeamPage';

const HomePage: React.FC = () => (
  <main id="main-content" className="focus:outline-none">
    <Hero />
    <AboutSection />
    <MissionSection />
    <EcosystemSection />
    <JoinSection />
    <ContactSection />
  </main>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-itas-bg min-h-screen text-itas-dark selection:bg-itas-blue selection:text-white">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-itas-blue text-white px-4 py-2 text-xs font-mono uppercase"
        >
          Skip to main content
        </a>

        {/* Sticky Navigation Header */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>

        {/* Dark Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
