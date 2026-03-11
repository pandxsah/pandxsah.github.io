import { motion } from "motion/react";
import { AnimatedBackground } from "./AnimatedBackground";
import { Navbar } from "./Navbar";
import { ScrollToTop } from "./ScrollToTop";

export function CaseStudies() {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 min-h-screen px-6 pt-32 pb-32 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Case <span className="text-blue-500">Studies</span>
          </h1>
          <div className="h-1 w-12 bg-blue-500 mb-12" />

          {/* Case study entries go here */}
          <p className="text-muted-foreground">Full case studies coming soon.</p>
        </motion.div>
      </main>
      <ScrollToTop />
    </div>
  );
}
