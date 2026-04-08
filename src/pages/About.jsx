import { Helmet } from 'react-helmet-async'
import Section, { SectionLabel } from '../components/Section'
import CTABar from '../components/CTABar'

const stats = [
  { number: '20+', label: 'years scaling tech businesses' },
  { number: '2,400%', label: 'revenue growth delivered' },
  { number: '400%', label: 'exit valuation increase' },
]

const principles = [
  {
    title: 'Find the constraint first.',
    body: 'Every business has one thing holding it back. Not five. Not ten. One. Everything else is noise until that one thing is addressed.',
  },
  {
    title: 'Execution beats intention.',
    body: "Plans don't grow businesses. Commitments do. We measure what gets done this week. Not what was discussed this quarter.",
  },
  {
    title: 'Track less. Act more.',
    body: 'Dashboards full of metrics create the illusion of control. Real control is knowing the one number that matters and moving it.',
  },
  {
    title: 'Focus, not activity.',
    body: 'The busiest founders are often the most stuck. Activity without direction is just motion. We strip away the noise and point the business at the constraint.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Centa Partners. 20+ Years Scaling Tech Businesses.</title>
        <meta name="description" content="Built by operators. Not consultants. 20+ years of scaling, turning around, and exiting founder-led tech businesses. 2,400% revenue growth delivered." />
        <link rel="canonical" href="https://centapartners.com.au/about" />
        <meta property="og:title" content="About Centa Partners. 20+ Years Scaling Tech Businesses." />
        <meta property="og:description" content="Built by operators. Not consultants. 20+ years of scaling, turning around, and exiting founder-led tech businesses." />
        <meta property="og:url" content="https://centapartners.com.au/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Centa Partners" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Centa Partners. 20+ Years Scaling Tech Businesses." />
        <meta name="twitter:description" content="Built by operators. Not consultants. 20+ years of scaling, turning around, and exiting founder-led tech businesses." />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-4">
            Built by operators. Not consultants.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <Section dark>
        <div className="space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Centa Partners exists because we got tired of watching good businesses get bad advice.</p>
          <p>Most advisory firms sell time. We sell outcomes.</p>
          <p>The difference is simple. We have done the work. Built the teams. Hit the numbers. Fixed what was broken. We are not theorists. We have operated at the level we advise on.</p>
        </div>
      </Section>

      {/* Track Record */}
      <Section>
        <SectionLabel>Track record</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {stats.map(s => (
            <div key={s.number} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-brand">{s.number}</div>
              <div className="text-text-muted text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4 text-text-primary text-base leading-relaxed">
          <p>Unified 4 tech businesses under a single group, led 130+ staff, and repositioned for investment.</p>
          <p>Turned around an enterprise tech company to profitability in 4 months. Exited at 400% of original valuation.</p>
          <p>Pioneered a cloud platform model that delivered 2,400% revenue growth and 40%+ EBITDA margins. Scaled from 12 to nearly 50 staff.</p>
          <p>Advisory practice focused exclusively on SaaS and tech founders navigating growth, transformation, and exit.</p>
        </div>
      </Section>

      {/* How We Think */}
      <Section dark>
        <SectionLabel>How we think</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {principles.map(p => (
            <div key={p.title} className="bg-bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-brand font-bold text-lg">{p.title}</h3>
              <p className="text-text-muted text-base mt-3 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTABar
          primary={{ label: 'Run the Diagnostic', href: 'https://grow.centapartners.com.au', external: true }}
          secondary={{ label: 'Talk to Us', href: '/advisory' }}
        />
      </Section>
    </>
  )
}
