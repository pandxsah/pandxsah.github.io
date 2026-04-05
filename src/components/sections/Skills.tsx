import { Target, Layers, Zap, BarChart3, ArrowRight } from 'lucide-react';
import { CapabilityCard } from '../ui/CapabilityCard';

export function Skills() {
  return (
    <>
      {/* Traffic → Conversion → Scale Visual System */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            How growth actually happens
          </h2>
          <p className="text-brand-text-muted text-lg font-medium max-w-2xl mx-auto">
            Most brands try to scale traffic first. That's why they stall.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="grid md:grid-cols-3 gap-0 mb-8 relative max-w-5xl mx-auto">
          {/* Connector lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-brand-accent/40 to-brand-accent/40 -translate-y-1/2 z-10"></div>
          <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-px bg-gradient-to-r from-brand-accent/40 to-brand-accent/40 -translate-y-1/2 z-10"></div>

          {/* Step 1 */}
          <div className="relative bento-card border-brand-accent/30 bg-brand-accent/[0.03] text-center rounded-r-none border-r-0 z-20">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-brand-accent/20">
              <Target size={24} className="text-brand-accent" />
            </div>
            <div className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3">Step 01</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Traffic</h3>
            <p className="text-brand-text-muted text-sm leading-relaxed font-medium">
              Capture high-intent demand through search ownership and strategic placements.
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center z-30">
            <div className="w-full bento-card border-brand-accent/30 bg-brand-accent/[0.03] text-center rounded-none border-x-0 z-20 h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-brand-accent/20">
                <Zap size={24} className="text-brand-accent" />
              </div>
              <div className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3">Step 02</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Conversion</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed font-medium">
                Turn sessions into revenue through content, pricing, and trust signals.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bento-card border-brand-accent/30 bg-brand-accent/[0.03] text-center rounded-l-none border-l-0 z-20">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-brand-accent/20">
              <Layers size={24} className="text-brand-accent" />
            </div>
            <div className="text-brand-accent font-mono text-xs uppercase tracking-[0.3em] font-bold mb-3">Step 03</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Scale</h3>
            <p className="text-brand-text-muted text-sm leading-relaxed font-medium">
              Reinvest into what works and expand winning segments into new demand pools.
            </p>
          </div>
        </div>

        {/* Mobile flow (visible on small screens) */}
        <div className="flex md:hidden flex-col gap-4 max-w-sm mx-auto mb-8">
          {['Traffic', 'Conversion', 'Scale'].map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className="bento-card w-full text-center border-brand-accent/30">
                <div className="text-brand-accent font-mono text-xs uppercase tracking-widest mb-1">Step 0{i + 1}</div>
                <div className="text-white font-black text-xl uppercase">{step}</div>
              </div>
              {i < 2 && <ArrowRight size={20} className="text-brand-accent rotate-90" />}
            </div>
          ))}
        </div>

        {/* Close line */}
        <p className="text-center text-brand-text-muted text-base font-medium mt-8 max-w-xl mx-auto">
          Fix conversion first. Then traffic makes sense. Then scale compounds.
        </p>
      </section>

      {/* Core Capabilities */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Core Capabilities</h2>
          <p className="text-brand-text-muted text-lg font-medium uppercase tracking-widest">
            The systems I use to drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <CapabilityCard
            title="Growth & Strategy"
            items={[
              'Portfolio Ownership & Accountability',
              'Marketplace Growth Strategy',
              'Category Expansion & Whitespace Analysis',
              'Demand Mapping & Search Coverage',
              'Multi-Market Portfolio Management',
            ]}
            icon={<Target size={24} />}
          />
          <CapabilityCard
            title="Revenue & Performance"
            items={[
              'Capital Deployment & Budget Allocation',
              'Investment Prioritisation by Signal',
              'TACoS & ACoS Optimisation',
              'Profitability & Margin Management',
              'YoY Growth Analysis & Forecasting',
            ]}
            icon={<Layers size={24} />}
          />
          <CapabilityCard
            title="Conversion Infrastructure"
            items={[
              'High-Intent Keyword Research',
              'Search Term Expansion & Ownership',
              'Title, Bullet & PDP Optimisation',
              'A+ Content Strategy',
              'Conversion Rate Optimisation',
            ]}
            icon={<Zap size={24} />}
          />
          <CapabilityCard
            title="Analytics & Tech Stack"
            items={[
              'Amazon Marketing Cloud (AMC)',
              'SQL & Incrementality Analysis',
              'Pacvue & Skai',
              'CitrusAd & Criteo',
              'Dashboarding (Power BI)',
            ]}
            icon={<BarChart3 size={24} />}
          />
        </div>
      </section>
    </>
  );
}