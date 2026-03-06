import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const { education, certifications, awards } = resumeData;

  return (
    <section
      id="education"
      className="relative py-24 px-6 md:py-32 bg-black/30"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Education & Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="flex items-center gap-3 font-display text-3xl font-bold">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                Education
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-white/10"
                >
                  <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-blue-500" />
                  <h3 className="font-display text-xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-blue-400">{edu.institution}</p>
                  <div className="mt-2 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                    <span>{edu.dates}</span>
                    <span>{edu.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 mb-8"
            >
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold">
                <BookOpen className="h-6 w-6 text-blue-400" />
                Certifications
              </h2>
            </motion.div>

            <ul className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-4"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span className="text-sm text-gray-300">{cert}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Awards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="flex items-center gap-3 font-display text-3xl font-bold">
                <Award className="h-8 w-8 text-blue-400" />
                Awards
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />
                  <p className="relative z-10 text-sm leading-relaxed text-gray-300">
                    {award}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
