import { AwardItem } from '../ui/AwardItem';
import { CertTag } from '../ui/CertTag';

export function Extra() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
      <div className="grid lg:grid-cols-2 gap-24">
        {/* Left column */}
        <div>
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight uppercase">Education</h2>
          <div className="bento-card">
            <h3 className="text-xl font-bold text-white mb-2">Mumbai University</h3>
            <p className="text-brand-accent font-mono text-sm mb-4 uppercase tracking-widest">
              B.E. in Electronics & Telecommunication
            </p>
            <p className="text-brand-text-muted text-sm">2016 – 2020 · Navi Mumbai, India</p>
          </div>

          <h2 className="text-4xl font-extrabold mb-12 mt-20 tracking-tight uppercase">Awards</h2>
          <div className="space-y-4">
            <AwardItem title="Above & Beyond Award" context="Apr 2022 · Nov 2022 · May 2023 · Jun 2023" />
            <AwardItem title="Rookie Star Award" context="Aug 2022" />
            <AwardItem title="Rise n Shine Award" context="Sep 2025" />
          </div>
        </div>

        {/* Right column */}
        <div>
          <h2 className="text-4xl font-extrabold mb-12 tracking-tight uppercase">Certifications</h2>
          <div className="grid gap-4">
            <CertTag name="Amazon Sponsored Ads Certification" />
            <CertTag name="Amazon DSP Certification" />
            <CertTag name="AI-Powered Performance Ads (Google)" />
            <CertTag name="Google Analytics 4 (GA4) – In Progress" />
            <CertTag name="Project Management (PMP) – In Progress" />
          </div>

          <h2 className="text-4xl font-extrabold mb-12 mt-20 tracking-tight uppercase">Leadership</h2>
          <div className="bento-card">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
              Sr. Operations Manager – TECHxSIESGST
            </h3>
            <p className="text-brand-text-muted text-sm leading-relaxed">
              Led 5-member team. Generated{' '}
              <span className="text-white font-bold">INR 2M+ revenue</span> via BYTECAMP Hackathon execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}