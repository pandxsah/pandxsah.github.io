import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { Layers } from "lucide-react";

export function Projects() {
  const { projects } = resumeData;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="relative py-24 px-6 md:py-32 bg-black/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Case <span className="text-gradient-primary">Studies</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-blue-500/50" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />

              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 text-blue-400 ring-1 ring-white/10">
                <Layers className="h-5 w-5" />
              </div>

              <h3 className="mb-3 font-display text-lg font-semibold text-white leading-snug">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
