import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Copy } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pandxsah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-48 px-6 md:px-12 text-center max-w-5xl mx-auto relative">
      <div className="glow-mesh top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <h2 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tight text-gradient">
          Let's fix your Amazon growth
        </h2>
        <p className="text-2xl text-brand-text-muted mb-6 max-w-3xl mx-auto font-medium">
          If your account feels stuck, inefficient, or unpredictable -
        </p>
        <p className="text-2xl text-white font-bold mb-16 max-w-3xl mx-auto">
          I'll show you what's broken and how to fix it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="flex flex-col gap-3">
            <a
              href="mailto:pandxsah@gmail.com?subject=Let's fix my Amazon growth"
              className="bg-brand-accent text-brand-bg px-16 py-6 rounded-full font-black text-2xl inline-flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-brand-accent/40"
            >
              Get a Free Audit <ArrowRight size={28} />
            </a>
            <button
              onClick={copyEmail}
              className="text-brand-text-muted text-sm flex items-center justify-center gap-2 hover:text-white transition-colors cursor-pointer"
            >
              {copied ? (
                <span className="text-brand-accent font-bold">Email Copied!</span>
              ) : (
                <>
                  <Copy size={14} /> Copy Email
                </>
              )}
            </button>
          </div>
          <a
            href="https://www.linkedin.com/in/isahilpandita"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-xl inline-flex items-center gap-3 hover:text-brand-accent transition-colors"
          >
            Connect on LinkedIn <ExternalLink size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}