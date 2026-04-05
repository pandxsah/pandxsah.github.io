export function ExperienceItem({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-12 border-l-2 border-brand-border group pb-4">
      <div className="absolute w-4 h-4 bg-brand-accent rounded-full -left-[9px] top-2 shadow-[0_0_15px_var(--color-brand-accent)] group-hover:scale-125 transition-transform"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <h3 className="text-3xl font-black text-white tracking-tight uppercase">{company}</h3>
        <span className="text-xs font-mono text-brand-accent font-bold uppercase tracking-widest bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
          {period}
        </span>
      </div>
      <div className="text-brand-accent font-mono text-lg mb-8 font-black tracking-tight uppercase">{role}</div>
      <ul className="space-y-4">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-brand-text-muted text-lg font-medium leading-relaxed">
            <div className="w-2 h-2 bg-brand-accent/30 rounded-full mt-2.5 shrink-0"></div>
            <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}