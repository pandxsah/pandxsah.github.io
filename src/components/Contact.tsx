import { motion } from "motion/react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 md:py-32 bg-black/50">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500/50" />
          <p className="mt-6 text-base text-muted-foreground max-w-xl mx-auto">
            Open to new opportunities in marketplace growth, retail media, and ecommerce performance. Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* EMAIL CTA */}
          <a
            href="mailto:pandxsah@gmail.com"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <Mail className="h-5 w-5 text-blue-400" />
            <span>pandxsah@gmail.com</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/isahilpandita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-white hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/pandxsah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-white hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-white/5 pt-8 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sahil Pandita. Built with React + Vite + Tailwind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
