import { Zap } from 'lucide-react';

export function AwardItem({ title, context }: { title: string; context: string }) {
  return (
    <div className="bento-card py-6 flex items-center justify-between group">
      <div>
        <h3 className="text-lg font-bold text-white uppercase tracking-tight">{title}</h3>
        <p className="text-brand-text-muted text-sm">{context}</p>
      </div>
      <div className="text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
        <Zap size={20} />
      </div>
    </div>
  );
}