import { ReactNode } from 'react';

export function CapabilityCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: ReactNode;
}) {
  return (
    <div className="bento-card group">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight uppercase">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-brand-text-muted font-medium">
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}