import { AnimatePresence } from 'motion/react';
import { useState } from 'react';

import { SplashScreen } from './components/SplashScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Outcomes } from './components/sections/Outcomes';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Extra } from './components/sections/Extra';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg font-sans relative">
          <ScrollProgress />
          <ScrollToTop />

          {/* Background Glows */}
          <div className="glow-mesh top-[-100px] left-[-100px] opacity-40"></div>
          <div className="glow-mesh bottom-[-200px] right-[-100px] opacity-30"></div>

          <Navigation />

          <main>
            <Hero />
            <Manifesto />
            <Outcomes />
            <Skills />
            <Experience />
            <Extra />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}