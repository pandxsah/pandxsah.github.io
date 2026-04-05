import { CaseStudyCard } from '../ui/CaseStudyCard';

export function Outcomes() {
  return (
    <section
      id="outcomes"
      className="py-32 px-6 md:px-12 bg-[#05080f] border-y border-brand-border relative overflow-hidden"
    >
      <div className="glow-mesh top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Real outcomes, not vanity metrics
          </h2>
          <p className="text-brand-text-muted text-lg font-medium uppercase tracking-widest">
            Every number below is a structural fix, not a lucky month.
          </p>
        </div>

        <div className="grid gap-8">
          <CaseStudyCard
            result="+28.3% YoY GMV Growth"
            context="Flat Category Trajectory"
            problem="Weak account structure across campaigns and categories. Growth had stalled with no clear demand strategy."
            action="Rebuilt account architecture and budget flow. Scaled high-intent demand through aggressive keyword expansion."
            outcome="+28.3% YoY GMV delivered consistently within 90 days - not a spike, a system."
          />
          <CaseStudyCard
            result="+38% BFCM Uplift"
            context="Peak Season Strategy"
            problem="Seasonal spikes with no clear scaling plan. Rising CPCs and stagnant Q4 projections during high competition."
            action="Consolidated campaigns and aligned spend to real demand windows. Executed real-time budget reallocation."
            outcome="38% revenue uplift vs forecast across EU portfolios. Captured peak traffic efficiently."
          />
          <CaseStudyCard
            result="900% Sub-Cat Scale"
            context="Category Expansion"
            problem="Low visibility in a high-growth segment. Whitespace identified but not captured."
            action="Built aggressive keyword ownership and aligned listing optimisation with media scaling."
            outcome="Scaled from near-zero to 900% YoY growth within 12 months. Category dominance built from scratch."
          />
          <CaseStudyCard
            result="AMC Incrementality Lift"
            context="Measurement & Analytics"
            problem="Unclear impact of upper funnel spend. Budget decisions were based on directional data, not proof."
            action="Built custom AMC SQL queries to measure true incrementality and NTB acquisition across EU portfolios."
            outcome="Validated real revenue contribution. Reallocated budget with confidence. Improved efficiency without cutting growth."
          />
        </div>
      </div>
    </section>
  );
}