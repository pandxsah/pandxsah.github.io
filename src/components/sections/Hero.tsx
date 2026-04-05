import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, BarChart3, Target, Zap } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

const metrics = [
  { label: 'Monthly GMV (UK)', value: '£4.5M+', icon: <TrendingUp size={16} /> },
  { label: 'Annual Ad Spend', value: '€1.5M+', icon: <BarChart3 size={16} /> },
  { label: 'YoY GMV Growth', value: '28.3%', icon: <Target size={16} /> },
  { label: 'Category Uplift', value: '46%', icon: <Zap size={16} /> },
];

export function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-brand-accent text-xs font-mono mb-8 uppercase tracking-[0.2em] font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_var(--color-brand-accent)]"></span>
              Open to Opportunities · Available for Freelance
            </div>

            {/* Headline */}
            <h1 className="text-7xl md:text-[90px] font-extrabold tracking-tighter mb-8 leading-[0.9] text-gradient">
              I turn Amazon accounts into predictable growth systems
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-brand-text-muted max-w-xl mb-12 leading-relaxed font-medium">
              Most brands don't have a growth problem. They have a{' '}
              <span className="text-white font-bold">structure problem.</span> I fix how traffic,
              conversion, and spend work together - so revenue scales consistently.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#outcomes"
                className="bg-brand-accent text-brand-bg px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-brand-accent/30 text-lg"
              >
                View My Work <ArrowRight size={20} />
              </a>
              <a
                href="mailto:pandxsah@gmail.com?subject=Amazon Account Audit"
                className="bg-brand-surface border border-brand-border text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all text-lg"
              >
                Audit Your Account
              </a>
            </div>
          </motion.div>

          {/* Right: Animated Dashboard Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="bento-card border-brand-accent/20 p-6 space-y-3">

              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-mono text-brand-accent uppercase tracking-[0.2em] font-bold mb-1">
                    Portfolio Dashboard
                  </div>
                  <div className="text-white font-black text-lg uppercase tracking-tight">
                    Live Performance
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
                  <span className="text-brand-accent font-mono text-xs font-bold uppercase">Active</span>
                </div>
              </div>

              {/* Metric Rows */}
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between p-4 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-accent/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent/20 transition-all">
                      {m.icon}
                    </div>
                    <span className="text-brand-text-muted text-sm font-medium">{m.label}</span>
                  </div>
                  <span className="text-white font-black text-lg tracking-tight">{m.value}</span>
                </motion.div>
              ))}

              {/* Bottom bar */}
              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <span className="text-brand-text-muted text-xs font-mono uppercase tracking-widest">
                  EU9 + MENA Markets
                </span>
                <span className="text-brand-accent text-xs font-mono font-bold uppercase tracking-widest">
                  Flywheel Digital
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Proof Strip (Metrics) */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <MetricCard value="£4.5M+" label="Monthly GMV (UK)" />
          <MetricCard value="€1.5M+" label="Annual Media Spend" />
          <MetricCard value="28.3%" label="YoY GMV Growth" />
          <MetricCard value="46%" label="Category Expansion" subLabel="(900% in sub-cat)" />
        </motion.div>
      </section>
    </>
  );
}