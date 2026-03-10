import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SplashScreen } from "./components/SplashScreen";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Extra } from "./components/Extra";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";

// Google Analytics — replace G-F5FJJB0KZP with your real Measurement ID
function useAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-F5FJJB0KZP";
    script.async = true;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-F5FJJB0KZP');
    `;
    document.head.appendChild(inline);
  }, []);
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useAnalytics();

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="main-content">
            <ScrollProgress />
            <AnimatedBackground />
            <Navbar />
            <main className="relative z-10 flex flex-col gap-16 md:gap-32 pb-32">
              <Hero />
              <Experience />
              <Projects />
              <Achievements />
              <Skills />
              <Education />
              <Extra />
              <Contact />
            </main>
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
