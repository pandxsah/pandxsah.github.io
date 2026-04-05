export function CertTag({ name }: { name: string }) {
  return (
    <div className="bg-brand-surface border border-brand-border px-6 py-4 rounded-xl text-sm font-mono text-brand-text-muted hover:border-brand-accent/50 hover:text-white transition-all cursor-default flex items-center gap-3">
      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
      {name}
    </div>
  );
}