import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download, Terminal, Mail, Linkedin } from "lucide-react";
import resumeData from "../data/resume.json";

export function Hero() {
  const { basics } = resumeData;

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center md:pt-0">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex max-w-4xl flex-col items-center"
      >

        {/* OPEN TO WORK BADGE */}
        <motion.div
          variants={item}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span>Open to New Opportunities</span>
        </motion.div>

        {/* LOCATION BADGE */}
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-md"
        >
          <Terminal className="h-4 w-4" />
          <span>{basics.location}</span>
        </motion.div>

        {/* PROFILE IMAGE */}
        {basics.image && (
          <motion.div variants={item} className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl" />

            <img
              src={basics.image}
              alt={basics.name}
              className="relative h-32 w-32 rounded-full border-2 border-white/10 object-cover shadow-2xl md:h-40 md:w-40"
            />
          </motion.div>
        )}

        {/* NAME */}
        <motion.h1
          variants={item}
          className="mb-4 font-display text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          {basics.name}
        </motion.h1>

        {/* TITLE */}
        <motion.h2
          variants={item}
          className="mb-8 text-xl font-medium text-gradient-primary sm:text-2xl md:text-3xl"
        >
          {basics.title}
        </motion.h2>

        {/* SUMMARY */}
        <motion.p
          variants={item}
          className="mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {basics.summary}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={item}
          className="flex flex-col gap-4 sm:flex-row"
        >
          {/* EXPERIENCE BUTTON */}
          <button
            onClick={handleScrollToExperience}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-black transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View Experience</span>

            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />

            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>

          {/* DOWNLOAD RESUME */}
          <a
            href="/resume.pdf"
            download="Sahil_Pandita_Resume.pdf"
            className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* CONTACT LINKS */}
        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-6"
        >
          <a
            href="mailto:pandxsah@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" />
            <span>pandxsah@gmail.com</span>
          </a>

          <span className="h-4 w-[1px] bg-white/20" />

          <a
            href="https://www.linkedin.com/in/isahilpandita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>

        <div className="h-12 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>

    </section>
  );
}
