import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
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

// Google Analytics — replace G-MQM00QWN3G with your real Measurement ID
function useAnalytics() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-MQM00QWN3G";
    script.async = true;
    document.head.appendChild(script);

    const inline = document.createElement("script");
    inline.text = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MQM00QWN3G');
    `;
    document.head.appendChild(inline);
  }, []);
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useAnalytics();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <div className={`relative min-h-screen selection:bg-blue-500/30 ${isDark ? "bg-[#050505] text-white" : "bg-[#f8f9fa] text-gray-900"}`}>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="main-content">
            <ScrollProgress />
            {isDark && <AnimatedBackground />}
            <Navbar />

            {/* DARK / LIGHT TOGGLE */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              onClick={() => setIsDark(!isDark)}
              className="fixed top-5 right-20 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-white/10 md:right-24"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-gray-800" />}
            </motion.button>

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
