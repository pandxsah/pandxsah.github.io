import { motion } from "motion/react";
import resumeData from "../data/resume.json";
import { TrendingUp, Target, Zap, Trophy } from "lucide-react";

export function Achievements() {
  const { achievements } = resumeData;

  const icons = [TrendingUp, Target, Zap, Trophy, TrendingUp, Target];

  return (
    <section
      id="achievements"
      className="relative py-24 px-6 md:py-32 bg-black/50"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Key <span className="text-gradient-primary">Achievements</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500/50" />
        </motion.div>

        {/* Top 3 Impact Strip */}
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {achievements.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel flex flex-col items-center justify-center rounded-2xl p-6 text-center"
            >
              <span className="font-display text-4xl font-bold text-blue-400 md:text-5xl">
                {item.metric}
              </span>
              <span className="mt-2 text-xs text-muted-foreground uppercase tracking-wider font-mono">
                {item.context.split(" ")[0]} {item.context.split(" ")[1]}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trophy Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-colors hover:border-blue-500/30 hover:bg-white/[0.04]"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />

                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-3 text-blue-400 ring-1 ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 font-display text-3xl font-bold text-white">
                  {item.metric}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.context}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
