import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";
import resumeData from "../data/resume.json";
import { cn } from "../lib/utils";

export function Experience() {
  const { experience } = resumeData;
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  // Auto-pull measurable bullets for highlights panel
  const measurableBullets = experience
    .flatMap((exp) =>
      exp.bullets.filter((b) =>
        b.match(/\d+%|\d+x|£\d+\.?\d*M|€\d+\.?\d*M|€\d+K/),
      ),
    )
    .slice(0, 3);

  return (
    <section id="experience" className="relative py-24 px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Professional{" "}
            <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-blue-500/50" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Timeline / Stacked Cards */}
          <div className="flex flex-col gap-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                  expandedIndex === index
                    ? "border-blue-500/30 bg-blue-950/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]",
                )}
              >
                {/* Header (Clickable) */}
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? -1 : index)
                  }
                  className="flex w-full cursor-pointer flex-col gap-4 p-6 text-left sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                      {job.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground sm:text-sm">
                      <span className="flex items-center gap-1 text-blue-400">
                        <Briefcase className="h-3 w-3" />
                        {job.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {job.dates}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform">
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        expandedIndex === index ? "rotate-180" : "",
                      )}
                    />
                  </div>
                </button>

                {/* Content (Expandable) */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? "auto" : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2">
                    <ul className="flex flex-col gap-3">
                      {job.bullets.map((bullet, i) => {
                        // Highlight numbers and metrics
                        const highlightedBullet = bullet.replace(
                          /(\d+(?:\.\d+)?%|\d+x|£\d+(?:\.\d+)?M|€\d+(?:\.\d+)?M|€\d+K)/g,
                          '<span class="font-mono text-blue-400 font-medium">$1</span>',
                        );

                        return (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-300 md:text-base"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: highlightedBullet,
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Impact Highlights Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
              <h3 className="mb-6 font-display text-lg font-semibold text-white">
                Impact Highlights
              </h3>
              <div className="flex flex-col gap-6">
                {measurableBullets.map((bullet, i) => {
                  // Extract the first metric for the badge
                  const match = bullet.match(
                    /(\d+(?:\.\d+)?%|\d+x|£\d+(?:\.\d+)?M|€\d+(?:\.\d+)?M|€\d+K)/,
                  );
                  const metric = match ? match[0] : "";
                  const rest = bullet.replace(metric, "").trim();

                  return (
                    <div key={i} className="flex flex-col gap-2">
                      {metric && (
                        <span className="inline-block w-fit rounded-md bg-blue-500/20 px-2 py-1 font-mono text-sm font-bold text-blue-400">
                          {metric}
                        </span>
                      )}
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {rest.replace(/^[^\w]+/, "")}{" "}
                        {/* Remove leading punctuation */}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
