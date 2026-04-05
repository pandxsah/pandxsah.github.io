import { Link } from 'react-router-dom';

interface CaseStudyCardProps {
  result: string;
  context: string;
  problem: string;
  action: string;
  outcome: string;
  slug: string;
}

function CaseStudyCard({ result, context, problem, action, outcome, slug }: CaseStudyCardProps) {
  return (
    <div className="bento-card group hover:border-brand-accent/40 transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <div className="text-5xl font-black text-brand-accent tracking-tighter mb-2">{result}</div>
          <div className="text-white font-bold text-lg uppercase tracking-widest opacity-80">{context}</div>
        </div>
        <Link
          to={`/case-study/${slug}`}
          className="bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-lg text-brand-accent font-mono text-xs font-bold uppercase tracking-widest hover:bg-brand-accent/20 hover:border-brand-accent/50 transition-all shrink-0"
        >
          Case Study →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8 border-t border-brand-border pt-8">
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-[0.3em] font-bold">Problem</span>
          <p className="text-white/90 text-sm font-medium leading-relaxed">{problem}</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-brand-accent uppercase tracking-[0.3em] font-bold">Action</span>
          <p className="text-white font-bold text-sm leading-relaxed">{action}</p>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-[0.3em] font-bold">Result</span>
          <p className="text-[#10B981] font-bold text-sm leading-relaxed">{outcome}</p>
        </div>
      </div>
    </div>
  );
}

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
            slug="gmv-growth"
            result="+28.3% YoY GMV Growth"
            context="Flat Category Trajectory"
            problem="Weak account structure across campaigns and categories. Growth had stalled with no clear demand strategy."
            action="Rebuilt account architecture and budget flow. Scaled high-intent demand through aggressive keyword expansion."
            outcome="+28.3% YoY GMV delivered consistently within 90 days - not a spike, a system."
          />
          <CaseStudyCard
            slug="bfcm-uplift"
            result="+38% BFCM Uplift"
            context="Peak Season Strategy"
            problem="Seasonal spikes with no clear scaling plan. Rising CPCs and stagnant Q4 projections during high competition."
            action="Consolidated campaigns and aligned spend to real demand windows. Executed real-time budget reallocation."
            outcome="38% revenue uplift vs forecast across EU portfolios. Captured peak traffic efficiently."
          />
          <CaseStudyCard
            slug="sub-category-scale"
            result="900% Sub-Cat Scale"
            context="Category Expansion"
            problem="Low visibility in a high-growth segment. Whitespace identified but not captured."
            action="Built aggressive keyword ownership and aligned listing optimisation with media scaling."
            outcome="Scaled from near-zero to 900% YoY growth within 12 months. Category dominance built from scratch."
          />
          <CaseStudyCard
            slug="amc-incrementality"
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