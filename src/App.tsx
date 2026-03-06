import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SplashScreen } from "./components/SplashScreen";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Extra } from "./components/Extra";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

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
              <Achievements />
              <Skills />
              <Education />
              <Extra />
            </main>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
