import { Helmet } from 'react-helmet-async'
import Section, { SectionLabel } from '../components/Section'
import CTABar from '../components/CTABar'

const whoFor = [
  'Founder-led tech businesses doing $2M to $20M in revenue.',
  "Something is not working and you're too close to see it.",
  "You've tried more activity and it hasn't moved the needle.",
  'You need someone in the room who has done this before.',
]

const whatIDo = [
  "I identify what's actually holding your business back. Fast.",
  'Fix the revenue engine, the execution layer, or both.',
  'Align team and leadership around one direction.',
  'Build the operating rhythm your business is missing.',
]

const howItWorks = [
  'Weekly 1:1 strategy sessions. 45 minutes. Every week.',
  'Custom growth playbook built for your stage and constraint.',
  'Direct Slack and email access. Async answers within 24 hours.',
  'Full platform access: Centa Clarity, Coach, and Club included.',
]

export default function Advisory() {
  return (
    <>
      <Helmet>
        <title>Advisory. Centa Partners.</title>
        <meta name="description" content="Direct advisory for founders who don't have time to get this wrong. Weekly strategy sessions. Custom playbook. Direct line." />
        <link rel="canonical" href="https://centapartners.com.au/advisory" />
        <meta property="og:title" content="Advisory. Centa Partners." />
        <meta property="og:description" content="Direct advisory for founders who don't have time to get this wrong." />
        <meta property="og:url" content="https://centapartners.com.au/advisory" />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Centa Catalyst</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-4 max-w-3xl">
            Direct advisory for founders who don't have time to get this wrong.
          </h1>
          <p className="text-text-muted text-xs uppercase tracking-wider mt-4">Voice shifts to first person on this page to increase trust.</p>
        </div>
      </section>

      {/* Intro */}
      <Section dark>
        <div className="space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Centa Catalyst is not a programme. It is a working relationship with an operator who has built, scaled, and turned around tech businesses.</p>
          <p>No strategy decks. No discovery phases. No monthly reports that tell you what you already know.</p>
          <p>I identify the constraint. I build the plan. We execute. Together.</p>
        </div>
      </Section>

      {/* Who this is for */}
      <Section>
        <SectionLabel>Who this is for</SectionLabel>
        <ul className="mt-6 space-y-4">
          {whoFor.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-primary text-base md:text-lg">
              <span className="text-brand mt-1.5 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="4" cy="8" r="3" /></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-text-muted text-base md:text-lg mt-6">Most of my clients come to me after trying to solve this themselves.</p>
      </Section>

      {/* What I do */}
      <Section dark>
        <SectionLabel>What I do</SectionLabel>
        <ul className="mt-6 space-y-4">
          {whatIDo.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-primary text-base md:text-lg">
              <span className="text-brand mt-1.5 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="4" cy="8" r="3" /></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h3 className="text-text-primary font-bold text-base mt-10">How it works week to week:</h3>
        <ul className="mt-4 space-y-4">
          {howItWorks.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-primary text-base md:text-lg">
              <span className="text-brand mt-1.5 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="4" cy="8" r="3" /></svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* What this is not */}
      <Section>
        <SectionLabel>What this is not</SectionLabel>
        <div className="mt-6 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>This is not consulting. Consultants tell you what to do and leave. I do the work alongside you.</p>
          <p>This is not strategy without execution. Every session ends with commitments. Every week starts with accountability.</p>
          <p>This is not a long discovery phase. I already know what to look for. The diagnostic confirms it. Then we move.</p>
        </div>
      </Section>

      {/* Why it works */}
      <Section dark>
        <SectionLabel>Why it works</SectionLabel>
        <div className="mt-6 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Founders who come through Catalyst arrive with data. The diagnostic has identified the constraint. We execute from day one.</p>
          <p>The metric is set. The commitments are clear. The only variable is speed.</p>
        </div>
      </Section>

      {/* Investment */}
      <Section>
        <SectionLabel>Investment</SectionLabel>
        <div className="mt-6">
          <div className="text-3xl md:text-4xl font-bold text-brand">$5,000 AUD/month</div>
          <p className="text-text-primary text-base md:text-lg mt-4">Minimum 3 months. Built to move the business, not extend the engagement.</p>
          <p className="text-text-muted text-base mt-3">Full platform access included. No hidden costs. No hourly billing.</p>
        </div>
        <CTABar
          primary={{ label: 'Book a Discovery Call', href: 'https://calendly.com/centapartners/discovery', external: true }}
        />
        <p className="text-text-dim text-sm mt-3">30 minutes. No obligation. I'll tell you honestly if Catalyst is right for your stage.</p>
      </Section>
    </>
  )
}
