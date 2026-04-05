export function PrincipleCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bento-card flex gap-10 items-start group">
      <span className="text-brand-accent font-mono font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">
        {num}
      </span>
      <div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight uppercase">{title}</h3>
        <p className="text-brand-text-muted leading-relaxed text-base font-medium">{desc}</p>
      </div>
    </div>
  );
}