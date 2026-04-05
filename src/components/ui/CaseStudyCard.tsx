export function CaseStudyCard({
  result,
  context,
  problem,
  action,
  outcome,
}: {
  result: string;
  context: string;
  problem: string;
  action: string;
  outcome: string;
}) {
  return (
    <div className="bento-card group hover:border-brand-accent/40 transition-all">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <div className="text-5xl font-black text-brand-accent tracking-tighter mb-2">{result}</div>
          <div className="text-white font-bold text-lg uppercase tracking-widest opacity-80">{context}</div>
        </div>
        <div className="bg-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-lg text-brand-accent font-mono text-xs font-bold uppercase tracking-widest">
          Case Study
        </div>
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