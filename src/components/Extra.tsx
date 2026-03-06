import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { Users } from "lucide-react";

export function Extra() {
  const { extra } = resumeData;

  if (!extra || extra.length === 0) return null;

  return (
    <section id="extra" className="relative py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        {extra.map((section, idx) => (
          <div key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12"
            >
              <h2 className="flex items-center gap-3 font-display text-3xl font-bold md:text-4xl">
                <Users className="h-8 w-8 text-blue-400" />
                {section.title}
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-blue-500/50" />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-blue-400">
                    {item.organization}
                  </p>
                  <div className="mt-2 mb-4 flex items-center gap-3 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                    <span>{item.dates}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-gray-400 leading-relaxed"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
