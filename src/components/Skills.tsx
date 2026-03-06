import { motion } from "motion/react";
import resumeData from "../data/resume.json";

export function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="relative py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Core <span className="text-gradient-primary">Competencies</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-blue-500/50" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-blue-400">
                {skillGroup.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, j) => (
                  <span
                    key={j}
                    className="rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item}
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
