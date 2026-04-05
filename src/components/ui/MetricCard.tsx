export function MetricCard({ value, label, subLabel }: { value: string; label: string; subLabel?: string }) {
  return (
    <div className="bento-card text-center group">
      <div className="text-6xl font-black text-brand-accent mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
        {value}
      </div>
      <div className="text-white font-bold text-sm uppercase tracking-widest leading-tight">
        {label}
      </div>
      {subLabel && (
        <div className="text-brand-text-muted text-[10px] uppercase tracking-widest mt-1">{subLabel}</div>
      )}
    </div>
  );
}