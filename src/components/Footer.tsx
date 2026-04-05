import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 text-center text-brand-text-muted text-sm border-t border-brand-border bg-brand-surface/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="font-mono font-bold text-brand-accent tracking-widest uppercase">SAHIL PANDITA</div>
        <div className="font-medium uppercase tracking-wider">Marketplace Growth Operator. Built for Scale.</div>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="hover:text-white transition-colors uppercase font-bold tracking-widest text-xs"
          >
            Back to top
          </a>
          <a
            href="https://www.linkedin.com/in/isahilpandita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}