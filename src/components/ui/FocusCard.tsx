import { ReactNode } from 'react';

export function FocusCard({ title, desc, icon }: { title: string; desc: string; icon: ReactNode }) {
  return (
    <div className="bento-card group">
      <div className="mb-8 bg-brand-accent/5 w-14 h-14 rounded-2xl flex items-center justify-center border border-brand-border group-hover:border-brand-accent/50 transition-all group-hover:scale-110 group-hover:bg-brand-accent/10">
        <div className="text-brand-accent">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white tracking-tight uppercase">{title}</h3>
      <p className="text-brand-text-muted leading-relaxed text-base font-medium">{desc}</p>
    </div>
  );
}