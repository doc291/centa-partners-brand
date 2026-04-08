import { Helmet } from 'react-helmet-async'
import Section, { SectionLabel } from '../components/Section'
import CTABar from '../components/CTABar'

const steps = [
  {
    num: '01',
    tier: 'Centa Clarity',
    title: 'Identify the constraint',
    paras: [
      'Run the Centa Clarity diagnostic. Ten minutes. Five domains scored. One primary constraint identified.',
      'This is not a personality test. It is a structured, scored assessment built from two decades of operating tech businesses. It identifies where your business is losing the most leverage.',
      "Most founders say they already know what's wrong. The diagnostic usually proves them half right.",
    ],
  },
  {
    num: '02',
    tier: 'Centa Coach',
    title: 'Execute against one metric',
    paras: [
      'The platform builds a 90 day programme around the constraint. Three commitments per week. One metric that moves if the commitments land.',
      "An AI coach tracks progress, detects when you're stuck, and adjusts. Not motivation. Accountability.",
      'Founders who want direct support work with us through Centa Catalyst. Weekly sessions. A custom playbook. A direct line.',
    ],
  },
  {
    num: '03',
    tier: 'Club + Catalyst',
    title: 'Scale once the system works',
    paras: [
      'At the end of the programme, retake the diagnostic. See exactly what moved. Before and after, scored.',
      'Founders ready to go further join Centa Club. A peer cohort of 12 to 15 founders matched by constraint domain. Weekly accountability. Group sessions.',
      'Founders preparing for acquisition, major scale, or structural transformation work with us directly through Centa Catalyst.',
    ],
  },
]

export default function HowWeWork() {
  return (
    <>
      <Helmet>
        <title>How We Work. Centa Partners.</title>
        <meta name="description" content="Three steps. No complexity. Identify the constraint. Execute against one metric. Scale once the system works." />
        <link rel="canonical" href="https://centapartners.com.au/how-we-work" />
        <meta property="og:title" content="How We Work. Centa Partners." />
        <meta property="og:description" content="Three steps. No complexity." />
        <meta property="og:url" content="https://centapartners.com.au/how-we-work" />
      </Helmet>

      {/* Hero */}
      <section className="px-6 pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>How we work</SectionLabel>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mt-4">
            Three steps. No complexity.
          </h1>
          <p className="text-text-primary text-lg mt-6 max-w-2xl leading-relaxed">
            Every founder who works with us follows the same model. It is simple because simplicity is the point.
          </p>
        </div>
      </section>

      {/* Steps */}
      {steps.map((step, i) => (
        <Section key={step.num} dark={i % 2 === 0}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="text-6xl md:text-8xl font-bold text-brand/20">{step.num}</div>
              <div className="text-brand text-xs uppercase tracking-widest font-medium mt-2">{step.tier}</div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">{step.title}</h2>
              <div className="mt-6 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
                {step.paras.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Where to start */}
      <Section>
        <SectionLabel>Where to start</SectionLabel>
        <div className="mt-6 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Most founders should start with the diagnostic. Ten minutes. No commitment. The results tell you exactly where you stand.</p>
          <p>Founders who already know they need advisory support can skip straight to a conversation.</p>
        </div>
        <CTABar
          primary={{ label: 'Run Centa Clarity', href: 'https://grow.centapartners.com.au', external: true }}
          secondary={{ label: 'Book a Discovery Call', href: '/advisory' }}
        />
      </Section>
    </>
  )
}
