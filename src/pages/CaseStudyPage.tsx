import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, TrendingUp, BarChart3, Target, Zap, CheckCircle2 } from 'lucide-react';

interface Section {
  title: string;
  content: string;
}

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  slug: string;
  result: string;
  context: string;
  tagline: string;
  overview: string;
  icon: React.ReactNode;
  metrics: Metric[];
  challenge: Section;
  strategy: Section;
  execution: Section[];
  results: Section;
  learnings: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  'gmv-growth': {
    slug: 'gmv-growth',
    result: '+28.3% YoY GMV Growth',
    context: 'Flat Category Trajectory',
    tagline: 'How I rebuilt account structure to deliver consistent GMV growth in a stalled category.',
    overview:
      'A multi-brand EU portfolio had plateaued. Despite adequate ad spend, growth had stalled across key SKUs in a saturated market. The problem wasn\'t budget - it was structure. I rebuilt the account from the ground up and delivered 28.3% YoY GMV growth within 90 days.',
    icon: <TrendingUp size={32} />,
    metrics: [
      { value: '+28.3%', label: 'YoY GMV Growth' },
      { value: '90 Days', label: 'Time to Result' },
      { value: '£4.5M+', label: 'Monthly GMV (UK)' },
      { value: 'EU9', label: 'Markets Managed' },
    ],
    challenge: {
      title: 'The Challenge',
      content:
        'The portfolio had been optimised tactically - bids adjusted, budgets tweaked - but no one had looked at the structural layer. Campaigns were fragmented across match types with no clear demand hierarchy. High-intent search terms were being captured inconsistently. Budget was flowing into broad campaigns with low purchase intent, while exact and phrase match coverage was thin. The result: strong impressions, weak conversion, flat revenue.',
    },
    strategy: {
      title: 'The Strategy',
      content:
        'The fix wasn\'t more spend. It was better structure. I started with a full account audit - mapping search term coverage against actual purchase-intent signals. The goal was to identify where high-intent demand existed but wasn\'t being captured systematically, and where budget was leaking into low-signal placements. From there, I designed a new campaign architecture that would create a clear funnel from discovery to conversion.',
    },
    execution: [
      {
        title: 'Account Architecture Rebuild',
        content:
          'Restructured campaigns by intent tier - separating brand, competitor, and generic demand into distinct campaign structures. This gave full visibility and control over budget allocation at each stage of the funnel.',
      },
      {
        title: 'Search Term Expansion',
        content:
          'Ran systematic search term harvesting across all campaigns. Identified high-converting long-tail terms that were generating revenue but not being actively targeted. Moved these into dedicated exact match campaigns with controlled budgets.',
      },
      {
        title: 'Budget Reallocation',
        content:
          'Shifted spend away from broad match campaigns with poor purchase-intent signals. Reallocated to high-intent exact and phrase match structures. This improved efficiency without reducing total spend - same budget, better signal.',
      },
      {
        title: 'Negative Keyword Governance',
        content:
          'Built a systematic negative keyword framework to prevent budget bleed across match types. This ensured each campaign served its intended demand tier without overlap or cannibalisation.',
      },
    ],
    results: {
      title: 'The Results',
      content:
        '+28.3% YoY GMV growth delivered consistently within 90 days across the EU portfolio. This wasn\'t a seasonal spike or a one-time promotion lift - it was structural, repeatable growth built into the account architecture. The portfolio continued to compound from this foundation across subsequent quarters.',
    },
    learnings: [
      'Tactical optimisation has a ceiling. Structural fixes unlock a new growth curve.',
      'Search term coverage is the most undervalued growth lever in most accounts.',
      'Budget reallocation within the same spend level can outperform budget increases.',
      'Negative keyword governance is as important as keyword targeting - most accounts ignore it.',
    ],
  },

  'bfcm-uplift': {
    slug: 'bfcm-uplift',
    result: '+38% BFCM Uplift',
    context: 'Peak Season Strategy',
    tagline: 'How I captured peak demand efficiently while competitors burned budget on noise.',
    overview:
      'Q4 is where most brands either win big or waste big. Rising CPCs, fragmented campaigns, and no clear demand strategy were pointing this portfolio toward a flat BFCM. I redesigned the approach - consolidating campaigns, aligning spend to real demand windows, and executing real-time reallocation - and delivered 38% revenue uplift vs forecast.',
    icon: <BarChart3 size={32} />,
    metrics: [
      { value: '+38%', label: 'Revenue vs Forecast' },
      { value: 'EU9', label: 'Markets' },
      { value: 'BFCM', label: 'Peak Window' },
      { value: 'Real-Time', label: 'Budget Reallocation' },
    ],
    challenge: {
      title: 'The Challenge',
      content:
        'BFCM is the highest CPC period of the year. Most brands go in with the same account structure they use year-round and simply increase budgets. The result is wasted spend on broad, low-intent placements during a window where every pound of ad spend needs to convert. This portfolio had rising CPCs, stagnant Q4 projections, and no clear framework for how to prioritise spend across a multi-brand, multi-market setup during peak.',
    },
    strategy: {
      title: 'The Strategy',
      content:
        'The core insight was simple: BFCM demand is real, but it\'s concentrated. Not all products, not all markets, and not all keywords perform equally during peak. The strategy was to identify the highest-signal demand windows and concentrate spend there - rather than spreading budget evenly across the portfolio and hoping for uplift.',
    },
    execution: [
      {
        title: 'Campaign Consolidation',
        content:
          'Reduced campaign fragmentation before BFCM. Merged low-performing ad groups into consolidated structures with stronger signal history. This improved algorithm learning speed and bid efficiency during the peak window.',
      },
      {
        title: 'Demand Window Mapping',
        content:
          'Mapped historical conversion data by day and hour across markets to identify true peak demand windows. Built a spend schedule that front-loaded budget into high-conversion periods rather than spreading it evenly across the week.',
      },
      {
        title: 'Real-Time Budget Reallocation',
        content:
          'During BFCM, monitored performance in real time across all markets. Shifted budget dynamically toward markets and campaigns showing the strongest conversion signals. Pulled budget from underperforming placements the same day.',
      },
      {
        title: 'Bid Strategy Alignment',
        content:
          'Switched high-priority campaigns to target ROAS bidding with aggressive targets ahead of BFCM to prime the algorithm. Reverted to manual control for specific high-value placements during peak to maintain precision.',
      },
    ],
    results: {
      title: 'The Results',
      content:
        '38% revenue uplift vs forecast across EU portfolios. More importantly, this was achieved without proportional budget increases - efficiency improved alongside revenue. The structured approach to demand windows and real-time reallocation meant budget was concentrated where it converted, not spread where it impressed.',
    },
    learnings: [
      'BFCM rewards preparation, not reaction. The work happens in October, not November.',
      'Campaign consolidation before peak is as important as bid strategy during peak.',
      'Real-time reallocation during BFCM can recover a weak start or amplify a strong one.',
      'Not all markets peak at the same time - treating EU9 as one demand curve costs money.',
    ],
  },

  'sub-category-scale': {
    slug: 'sub-category-scale',
    result: '900% Sub-Cat Scale',
    context: 'Category Expansion',
    tagline: 'How I identified whitespace in a growing sub-category and built category dominance from near-zero.',
    overview:
      'Most brands focus on defending their existing category position. I identified an underpenetrated sub-category with growing demand and near-zero brand presence. By aligning search expansion, listing optimisation, and media scaling into a single growth system, I scaled the brand from near-zero to 900% YoY growth within 12 months.',
    icon: <Target size={32} />,
    metrics: [
      { value: '900%', label: 'YoY Sub-Cat Growth' },
      { value: '12 Months', label: 'Time to Dominance' },
      { value: '46%', label: 'Overall Category Uplift' },
      { value: 'Near Zero', label: 'Starting Position' },
    ],
    challenge: {
      title: 'The Challenge',
      content:
        'The brand had strong presence in its primary category but had completely missed a high-growth adjacent sub-category. Demand was there - search volume data confirmed it - but the brand had no visibility, no optimised listings, and no active media targeting that segment. Competitors were beginning to move in. The window to establish early dominance was closing.',
    },
    strategy: {
      title: 'The Strategy',
      content:
        'Category expansion is not just a media play. You can\'t run ads into a sub-category if your listings aren\'t indexed for it and your content doesn\'t convert for that intent. The strategy was to build the foundation first - get the listings right, get indexing right, then scale media on top of a conversion-ready base.',
    },
    execution: [
      {
        title: 'Demand Gap Analysis',
        content:
          'Used search term data and category share analysis to map the sub-category demand landscape. Identified the specific keywords driving volume, the conversion rates associated with those terms, and the competitive density - finding the whitespace the brand could own quickly.',
      },
      {
        title: 'Listing Optimisation for Sub-Category',
        content:
          'Rewrote titles, bullets, and backend search terms to index the brand for sub-category keywords. Added A+ content that addressed the specific use case and purchase intent of the sub-category buyer - different from the primary category audience.',
      },
      {
        title: 'Aggressive Keyword Ownership',
        content:
          'Built dedicated campaigns for sub-category terms - starting with exact match on the highest-intent keywords and expanding systematically through phrase and broad as data accumulated. Set aggressive bids to establish impression share early while CPC was still low.',
      },
      {
        title: 'Media Scaling on Conversion Signal',
        content:
          'Scaled media spend only after conversion data confirmed the listings were performing. This prevented budget waste during the indexing and content phase. Once CVR was validated, increased budgets aggressively to capture demand before competitors could react.',
      },
    ],
    results: {
      title: 'The Results',
      content:
        '900% YoY growth in the sub-category within 12 months. The brand moved from near-zero visibility to category dominance - owning the top placements for the highest-intent search terms. This also contributed to 46% overall category uplift across the portfolio, as the sub-category revenue compounded with existing primary category performance.',
    },
    learnings: [
      'Category expansion requires listing readiness before media investment - not simultaneously.',
      'Early mover advantage in a growing sub-category compounds quickly. Timing matters.',
      'Demand gap analysis is the most underused tool for identifying growth opportunities.',
      'Sub-category dominance is easier to build than primary category dominance - and just as valuable.',
    ],
  },

  'amc-incrementality': {
    slug: 'amc-incrementality',
    result: 'AMC Incrementality Lift',
    context: 'Measurement & Analytics',
    tagline: 'How I used Amazon Marketing Cloud to prove what was actually driving revenue - and what wasn\'t.',
    overview:
      'Upper funnel spend is easy to justify and hard to prove. Without proper incrementality measurement, budget decisions default to last-click attribution - which systematically overstates the value of bottom-funnel campaigns and underfunds the activities that actually drive new customer acquisition. I built a custom AMC measurement framework to fix this.',
    icon: <Zap size={32} />,
    metrics: [
      { value: 'AMC', label: 'Platform Used' },
      { value: 'SQL', label: 'Custom Queries Built' },
      { value: 'NTB', label: 'New-to-Brand Tracked' },
      { value: 'EU9', label: 'Portfolio Scope' },
    ],
    challenge: {
      title: 'The Challenge',
      content:
        'The portfolio was running upper funnel activity - Sponsored Brands, Sponsored Display, DSP - but there was no reliable way to measure whether this spend was generating incremental revenue or simply taking credit for purchases that would have happened anyway. Last-click attribution was making bottom-funnel campaigns look like the primary growth driver, which was creating the wrong investment prioritisation at MBR and QBR level.',
    },
    strategy: {
      title: 'The Strategy',
      content:
        'Amazon Marketing Cloud provides access to event-level data that standard reporting can\'t surface. The strategy was to build custom SQL queries that isolated the true incremental contribution of each campaign type - measuring new-to-brand customer acquisition, path-to-purchase overlap, and revenue that could be attributed to upper funnel touchpoints rather than last-click.',
    },
    execution: [
      {
        title: 'AMC Environment Setup',
        content:
          'Configured the AMC workspace for the EU portfolio - linking DSP and Sponsored Ads data sets to enable cross-channel path analysis. Defined the measurement framework before writing any queries to ensure outputs would answer the right business questions.',
      },
      {
        title: 'NTB Acquisition Queries',
        content:
          'Built SQL queries to isolate new-to-brand purchase events and attribute them back to the first touchpoint in the path. This revealed which campaign types were genuinely acquiring new customers versus retargeting existing ones.',
      },
      {
        title: 'Incrementality Analysis',
        content:
          'Developed overlap analysis queries to identify the percentage of conversions that had been influenced by upper funnel touchpoints before converting through a bottom-funnel placement. This quantified the halo effect of Sponsored Brands and DSP - previously invisible in standard reporting.',
      },
      {
        title: 'Investment Reallocation',
        content:
          'Used the incrementality findings to restructure budget allocation at MBR and QBR level. Increased investment in campaign types with proven NTB contribution. Reduced overinvestment in retargeting that was claiming credit but not driving incremental revenue.',
      },
    ],
    results: {
      title: 'The Results',
      content:
        'The AMC analysis proved that upper funnel activity was contributing significantly more incremental revenue than last-click attribution had suggested. Budget was reallocated accordingly - increasing investment in NTB-driving campaigns while reducing retargeting overinvestment. This improved overall portfolio efficiency without cutting growth, and gave MBR and QBR reporting a credible, data-backed investment narrative.',
    },
    learnings: [
      'Last-click attribution systematically underfunds upper funnel and overfunds retargeting.',
      'AMC is the most powerful measurement tool on Amazon - and the most underused by agencies.',
      'Incrementality analysis changes the investment conversation at client level - from opinion to proof.',
      'NTB customer acquisition is the most valuable long-term signal in any Amazon portfolio.',
    ],
  },
};

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Case study not found</h1>
          <Link to="/" className="text-brand-accent hover:underline font-bold">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Banner */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#05080f] border-b border-brand-border">
        <div className="glow-mesh top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Back link */}
            <Link
              to="/#outcomes"
              className="inline-flex items-center gap-2 text-brand-text-muted hover:text-white transition-colors font-bold text-sm uppercase tracking-widest mb-12"
            >
              <ArrowLeft size={16} /> All Case Studies
            </Link>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-brand-accent text-xs font-mono mb-8 uppercase tracking-[0.2em] font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              {study.context}
            </div>

            {/* Result */}
            <h1 className="text-7xl md:text-[90px] font-extrabold tracking-tighter mb-6 leading-[0.9] text-gradient">
              {study.result}
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mb-16 leading-relaxed font-medium">
              {study.tagline}
            </p>

            {/* Metric Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.metrics.map((m) => (
                <div key={m.label} className="bento-card text-center py-6 border-brand-accent/20">
                  <div className="text-3xl font-black text-brand-accent tracking-tighter mb-2">{m.value}</div>
                  <div className="text-white font-bold text-xs uppercase tracking-widest">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 space-y-24">

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl text-white font-medium leading-relaxed border-l-4 border-brand-accent pl-8">
            {study.overview}
          </p>
        </motion.div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-[0.3em] font-bold mb-4">01</div>
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight uppercase">{study.challenge.title}</h2>
          <p className="text-brand-text-muted text-lg leading-relaxed font-medium">{study.challenge.content}</p>
        </motion.div>

        {/* Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-[0.3em] font-bold mb-4">02</div>
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight uppercase">{study.strategy.title}</h2>
          <p className="text-brand-text-muted text-lg leading-relaxed font-medium">{study.strategy.content}</p>
        </motion.div>

        {/* Execution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-[0.3em] font-bold mb-4">03</div>
          <h2 className="text-4xl font-extrabold text-white mb-12 tracking-tight uppercase">The Execution</h2>
          <div className="space-y-6">
            {study.execution.map((step, i) => (
              <div key={i} className="bento-card border-brand-accent/10 hover:border-brand-accent/30 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent font-mono font-black text-sm shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-brand-text-muted leading-relaxed font-medium">{step.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card border-[#10B981]/20 bg-[#10B981]/[0.02]"
        >
          <div className="text-[10px] font-mono text-[#10B981] uppercase tracking-[0.3em] font-bold mb-4">04</div>
          <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight uppercase">{study.results.title}</h2>
          <p className="text-white text-lg leading-relaxed font-medium">{study.results.content}</p>
        </motion.div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[10px] font-mono text-brand-text-muted uppercase tracking-[0.3em] font-bold mb-4">05</div>
          <h2 className="text-4xl font-extrabold text-white mb-12 tracking-tight uppercase">Key Learnings</h2>
          <div className="space-y-4">
            {study.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bento-card border-brand-border hover:border-brand-accent/20 transition-all">
                <CheckCircle2 size={20} className="text-brand-accent shrink-0 mt-0.5" />
                <p className="text-white font-medium leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16 border-t border-brand-border"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gradient">
            Want results like this?
          </h2>
          <p className="text-brand-text-muted text-xl mb-12 font-medium">
            Let's look at your account and identify what's holding it back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:pandxsah@gmail.com?subject=Amazon Account Audit"
              className="bg-brand-accent text-brand-bg px-12 py-5 rounded-full font-black text-xl inline-flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-accent/40"
            >
              Get a Free Audit <ArrowRight size={24} />
            </a>
            <Link
              to="/#outcomes"
              className="text-white font-bold text-lg inline-flex items-center gap-2 hover:text-brand-accent transition-colors"
            >
              <ArrowLeft size={18} /> View All Case Studies
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}