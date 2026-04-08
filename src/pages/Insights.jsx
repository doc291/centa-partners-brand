import { Helmet } from 'react-helmet-async'
import Section, { SectionLabel } from '../components/Section'

const articles = [
  {
    title: 'Why Your Business Feels Busy But Not Growing',
    seo: 'business feels stuck, founder burnout, working hard not growing',
    bullets: [
      'Open with the pattern: revenue is creeping up but the founder is working harder every quarter.',
      'Explain why activity creates the illusion of progress.',
      'Introduce the binding constraint. Most effort is pointed at the wrong place.',
      'Show how identifying one constraint strips away the noise.',
      'CTA: Run the diagnostic. Find yours.',
    ],
  },
  {
    title: 'The Hidden Cost of Not Knowing Your Numbers',
    seo: 'SaaS metrics, founder metrics, revenue tracking, unit economics',
    bullets: [
      'Most founders track vanity metrics or nothing at all.',
      'The cost: decisions made on instinct, not evidence.',
      'The difference between tracking everything and knowing the one number that matters.',
      'Example: $5M SaaS business. 40 KPIs. Missed that churn was the constraint.',
      'CTA: The diagnostic scores five domains. It tells you where the gap is widest.',
    ],
  },
  {
    title: 'Why Hiring More People Is Making Your Business Worse',
    seo: 'scaling team too fast, hiring mistakes startups, team alignment',
    bullets: [
      'Growth stalls. Founders default to hiring. More people, more capacity.',
      'If the constraint is not headcount, more people just add cost and complexity.',
      'Hiring into a misaligned system makes the misalignment louder.',
      "The fix is not fewer people. It's knowing what to solve before adding capacity.",
      'CTA: Identify whether team alignment is actually your constraint.',
    ],
  },
  {
    title: 'The Difference Between a Growth Problem and an Execution Problem',
    seo: 'business growth vs execution, scaling execution, founder execution',
    bullets: [
      'Most founders think they have a growth problem. They think they need more leads.',
      'In many cases the revenue engine is fine. The execution cadence is broken.',
      "A business can have product-market fit and still stall because commitments don't land.",
      'Growth is the outcome of execution. Not the other way around.',
      'CTA: The diagnostic separates growth problems from execution problems.',
    ],
  },
  {
    title: 'How to Find the Constraint in Your Business in Under 30 Minutes',
    seo: 'find business constraint, business diagnostic, identify growth blocker',
    bullets: [
      'Open with the promise: you can identify the primary constraint faster than you think.',
      'Walk through the five domains with 2 to 3 self-assessment questions each.',
      'The constraint is usually in the domain the founder is least comfortable examining.',
      'CTA: Want the scored version? Run Centa Clarity. Ten minutes.',
    ],
  },
]

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights. Centa Partners.</title>
        <meta name="description" content="Thinking from the operating side. Short, direct perspectives on the patterns we see in founder-led tech businesses." />
        <link rel="canonical" href="https://centapartners.com.au/insights" />
        <meta property="og:title" content="Insights. Centa Partners." />
        <meta property="og:description" content="Thinking from the operating side." />
        <meta property="og:url" content="https://centapartners.com.au/insights" />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Insights</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-4">
            Thinking from the operating side.
          </h1>
          <p className="text-text-primary text-lg mt-6 max-w-2xl leading-relaxed">
            Short, direct perspectives on the patterns we see in founder-led tech businesses. No frameworks for the sake of frameworks. What we've learned from building, scaling, and fixing them.
          </p>
        </div>
      </section>

      {/* Articles */}
      {articles.map((article, i) => (
        <Section key={i} dark={i % 2 === 0}>
          <div className="bg-bg-card border border-border rounded-xl p-6 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand text-xs uppercase tracking-widest font-medium">Article {i + 1}</span>
              <span className="text-text-dim text-xs">Coming soon</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-text-primary">{article.title}</h2>
            <p className="text-text-dim text-xs mt-2">SEO: {article.seo}</p>
            <ul className="mt-6 space-y-3">
              {article.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-text-muted text-base">
                  <span className="text-brand/50 mt-1.5 flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="3" cy="6" r="2" /></svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}
    </>
  )
}
