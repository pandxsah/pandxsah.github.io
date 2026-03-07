import { motion } from "motion/react";
import { ArrowRight, Download, Terminal } from "lucide-react";
import resumeData from "../data/resume.json";

export function Hero() {
  const { basics } = resumeData;

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // In a real app, this would link to a PDF
    window.print();
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center md:pt-0">
      <motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }}
  className="z-10 flex max-w-4xl flex-col items-center"
>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-md"
        >
          <Terminal className="h-4 w-4" />
          <span>{basics.location}</span>
        </motion.div>

        {basics.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl" />
            <img
              src={basics.image}
              alt={basics.name}
              referrerPolicy="no-referrer"
              className="relative h-32 w-32 rounded-full border-2 border-white/10 object-cover shadow-2xl md:h-40 md:w-40"
            />
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-4 font-display text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl"
        >
          {basics.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 text-xl font-medium text-gradient-primary sm:text-2xl md:text-3xl"
        >
          {basics.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={handleScrollToExperience}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-black transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Experience</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          <button
            onClick={handleDownloadResume}
            className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
