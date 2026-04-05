import { Briefcase } from 'lucide-react';
import { ExperienceItem } from '../ui/ExperienceItem';

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 flex items-center gap-4 tracking-tight">
          <Briefcase className="text-brand-accent" size={32} />
          Experience
        </h2>
        <div className="space-y-16">

          <ExperienceItem
            role="Marketplace Growth & Performance Specialist"
            company="Flywheel Digital (Omnicom)"
            period="2024 – Present"
            bullets={[
              "Owned marketplace growth across multi-brand EU9 and MENA portfolios — managing <span class='text-white font-bold'>€1.5M+ in annual media investments.</span>",
              "Drove <span class='text-white font-bold'>28.34% YoY GMV growth</span> by rebuilding account structure and scaling high-intent demand across key categories.",
              "Influenced multi-market revenue outcomes supporting <span class='text-white font-bold'>£4.5M+ monthly GMV (UK)</span> and <span class='text-white font-bold'>€2.5M+ (Italy).</span>",
              "Delivered <span class='text-white font-bold'>38% BFCM revenue uplift</span> through demand-based budget reallocation across EU portfolios.",
              "Enabled <span class='text-white font-bold'>46% YoY category expansion</span>, including <span class='text-white font-bold'>900% growth in a key sub-category</span>, by aligning search expansion, listing optimisation, and media scaling strategies.",
              "Balanced growth and profitability by stabilising TACoS while scaling investments across high-performing segments.",
              "Built and standardised optimisation frameworks and reporting structures to improve execution consistency and scalability across accounts.",
              "Led a <span class='text-white font-bold'>4-member performance pod</span> — accountable for delivery quality, optimisation consistency, and reporting cadence across multi-brand portfolios.",
              "Acted as client-facing owner across MBRs and QBRs, translating business objectives into marketplace growth strategies and influencing investment decisions.",
              "Leveraged <span class='text-white font-bold'>AMC and SQL-based analysis</span> to validate incremental revenue contribution, identify growth levers, and track competitor and category trends.",
              "Contributed to new business strategy by designing marketplace growth frameworks and onboarding approaches for prospective client pitches.",
            ]}
          />

          <ExperienceItem
            role="Catalog Specialist I – Process Owner"
            company="Amazon Ads"
            period="2023 – 2024"
            bullets={[
              "Managed Sponsored Ads accounts (SP, SB, SD) and conducted account audits to improve ROAS and reduce ACoS across advertiser portfolios.",
              "Governed catalog quality standards across a <span class='text-white font-bold'>35-member global cross-functional team</span> including PMs, BIAs, and Program Managers.",
              "Reduced operational turnaround time by <span class='text-white font-bold'>35%</span> through workflow automation and process redesign, improving campaign readiness and execution scalability.",
              "Designed SOP frameworks ensuring listing readiness and marketplace compliance across international markets.",
              "Partnered with Ads and Brand teams to align catalog governance with campaign performance and conversion outcomes.",
            ]}
          />

          <ExperienceItem
            role="Catalog Associate"
            company="Amazon Ads"
            period="2021 – 2023"
            bullets={[
              "Managed Sponsored Ads campaigns (SP, SB, SD), account audits, and optimisation support for advertiser and seller accounts on the IN marketplace.",
              "Maintained <span class='text-white font-bold'>99.8% catalog accuracy</span> while improving processing efficiency by <span class='text-white font-bold'>27%.</span>",
              "Strengthened product discoverability and conversion through keyword indexing and listing optimisation aligned with paid search strategy.",
              "Supported Prime Day and Great Indian Festival campaigns through cross-team coordination and listing readiness execution.",
            ]}
          />

          <ExperienceItem
            role="Business Development Associate"
            company="BYJU'S"
            period="2020 – 2021"
            bullets={[
              "Increased closures by <span class='text-white font-bold'>27%</span> through structured lead funnel optimisation.",
              "Reduced customer complaints by <span class='text-white font-bold'>62%</span> via proactive escalation handling and CRM workflows.",
            ]}
          />

          <ExperienceItem
            role="Content & Growth Experimentation"
            company="Independent Projects"
            period="2017 – Present"
            bullets={[
              "Create and test short-form content formats across Instagram Reels, YouTube Shorts, and LinkedIn — studying algorithm behaviour and organic growth mechanics.",
              "Experiment with hooks, storytelling structures, and trend adaptation to improve reach and engagement across platforms.",
              "Apply data-driven experimentation frameworks — similar to paid media optimisation — to iterate on content performance and refine virality levers.",
              "Conduct ongoing analysis of platform algorithms, content formats, and audience behaviour to build a personal framework for organic growth strategy.",
            ]}
          />

        </div>
      </div>
    </section>
  );
}