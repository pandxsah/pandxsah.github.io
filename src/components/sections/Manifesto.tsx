import { Layers, Target, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { FocusCard } from '../ui/FocusCard';
import { PrincipleCard } from '../ui/PrincipleCard';

export function Manifesto() {
  return (
    <>
      {/* What I Do Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">What I Do</h2>
            <p className="text-white text-2xl leading-relaxed font-bold italic">
              "I don't run ads. I build growth systems."
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-brand-accent uppercase tracking-[0.3em] font-bold">
            <span className="w-16 h-px bg-brand-accent/30"></span>
            Core Systems
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FocusCard
            title="Demand Capture"
            desc="Own high-intent search and category traffic. Make sure your brand shows up where buying decisions happen."
            icon={<Target size={24} />}
          />
          <FocusCard
            title="Conversion Infrastructure"
            desc="Fix PDPs, pricing, and content to convert traffic into revenue. Traffic without conversion is wasted spend."
            icon={<Zap size={24} />}
          />
          <FocusCard
            title="Capital Deployment"
            desc="Allocate budget based on real performance signals, not guesswork. Scale what works, cut what doesn't."
            icon={<Layers size={24} />}
          />
          <FocusCard
            title="Growth Loops"
            desc="Turn one-time wins into repeatable systems. Build momentum that compounds - not just seasonal spikes."
            icon={<TrendingUp size={24} />}
          />
        </div>
      </section>

      {/* Growth Manifesto Section */}
      <section id="principles" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 leading-[1.1] tracking-tight">
              My POV on <br /> Amazon Growth
            </h2>
            <p className="text-brand-text-muted text-xl leading-relaxed mb-14 font-medium">
              Most accounts are over-optimized and under-structured. Here's what I actually believe - and what separates an operator from an executor.
            </p>

            {/* POV Card */}
            <div className="p-10 bento-card border-brand-accent/20 bg-brand-accent/[0.02] space-y-5">
              {[
                'Ads don\'t scale brands. Structure does.',
                'Conversion is the most ignored growth lever.',
                'Scaling spend without fixing fundamentals kills efficiency.',
                'Growth comes from systems, not hacks.',
                'Most accounts don\'t have a growth problem. They have a structure problem.',
              ].map((pov, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-brand-accent mt-1 shrink-0" />
                  <p className="text-white font-medium leading-relaxed">{pov}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <PrincipleCard
              num="01"
              title="Budget controls growth"
              desc="If TACoS is not controlled, growth is not real. Scaling at the expense of margin is a race to the bottom."
            />
            <PrincipleCard
              num="02"
              title="Ads follow supply"
              desc="If retail is weak, ads will burn money. Ads don't create demand - they capture it. Fix the engine first."
            />
            <PrincipleCard
              num="03"
              title="Scale comes from query expansion"
              desc="Growth doesn't come from bidding harder. It comes from capturing new demand through aggressive search footprint expansion."
            />
          </div>
        </div>
      </section>
    </>
  );
}