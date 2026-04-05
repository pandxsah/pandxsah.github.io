import { Linkedin, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCaseStudy = location.pathname.startsWith('/case-study/');

  return (
    <nav className="fixed top-0 w-full border-b border-brand-border bg-brand-bg/60 backdrop-blur-xl z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-6">
          {/* Back button on case study pages */}
          {isCaseStudy && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}

          <Link to="/" className="font-mono font-bold text-brand-accent tracking-tighter text-xl flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-bg shadow-lg shadow-brand-accent/20">
              SP
            </div>
            <span className="hidden sm:inline text-white tracking-tight uppercase">Sahil Pandita</span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/#outcomes"
              className="text-sm font-bold text-brand-text-muted hover:text-white transition-colors uppercase tracking-widest"
            >
              Outcomes
            </Link>
            <Link
              to="/#principles"
              className="text-sm font-bold text-brand-text-muted hover:text-white transition-colors uppercase tracking-widest"
            >
              Manifesto
            </Link>
            <Link
              to="/#experience"
              className="text-sm font-bold text-brand-text-muted hover:text-white transition-colors uppercase tracking-widest"
            >
              Experience
            </Link>
          </div>
          <div className="h-4 w-px bg-brand-border hidden md:block"></div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/isahilpandita"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-text-muted hover:text-brand-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Link
              to="/#contact"
              className="bg-brand-accent text-brand-bg px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}