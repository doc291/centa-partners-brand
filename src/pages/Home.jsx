import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Section, { SectionLabel } from '../components/Section'
import CTABar from '../components/CTABar'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Centa Partners. Growth Advisory for Tech Founders.</title>
        <meta name="description" content="Centa Partners helps founder-led tech businesses identify the one constraint holding them back and execute against it. Diagnostic. Coaching. Advisory." />
        <link rel="canonical" href="https://centapartners.com.au" />
        <meta property="og:title" content="Centa Partners. Growth Advisory for Tech Founders." />
        <meta property="og:description" content="Find the constraint. Fix the growth." />
        <meta property="og:url" content="https://centapartners.com.au" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Section 1: Opening Hook */}
      <section className="px-6 pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
            Most founders don't have a growth problem.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-brand mt-3">
            They have a clarity problem.
          </h2>
          <p className="text-text-primary text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
            The business is growing. But it's harder than it should be. Revenue is inconsistent. The team is busy but not aligned. Every decision circles back to you.
          </p>
          <p className="text-brand text-lg md:text-xl font-medium mt-4">
            It's not effort. It's direction.
          </p>
          <p className="text-text-dim text-base mt-6">
            Built from 20+ years of operating and scaling technology businesses.
          </p>
        </div>
      </section>

      {/* Section 2: Reframe the Problem */}
      <Section dark>
        <SectionLabel>The real issue</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-4">
          Why businesses stay stuck
        </h2>
        <div className="mt-8 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Every business has a primary constraint. One structural issue that limits everything else.</p>
          <p>Revenue, hiring, product, positioning. They all feel like problems. Most are symptoms.</p>
          <p>Most founders spend years fixing the wrong problem. They hire more people. Launch more features. Run more campaigns. The needle barely moves.</p>
          <p>Traditional advice makes it worse. It adds complexity without focus. More frameworks. More dashboards. More things to track.</p>
          <p>What's needed is the opposite. Less activity. More precision.</p>
          <p className="text-text-muted">This pattern shows up in almost every founder-led business we work with.</p>
        </div>
      </Section>

      {/* Section 3: How We See Your Business */}
      <Section>
        <SectionLabel>Our approach</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-4">
          We think in constraints. Not categories.
        </h2>
        <div className="mt-8 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Every business has one binding issue that holds everything else in place.</p>
          <p>Find it and everything simplifies. The right hire becomes obvious. The right metric becomes clear. The commitment for this week writes itself.</p>
          <p>We don't do strategy decks. We move one number. Every week.</p>
        </div>
        <div className="mt-10 border-l-2 border-brand pl-6">
          <p className="text-text-primary text-lg md:text-xl italic">
            The constraint is knowable. Once you know it, growth is execution.
          </p>
        </div>
      </Section>

      {/* Section 4: Introduce Grow */}
      <Section dark>
        <SectionLabel>The platform</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-4">
          The fastest way to find what's holding your business back
        </h2>
        <div className="mt-8 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Centa Clarity is a scored diagnostic built for founder-led tech businesses. Ten minutes. Five domains. One primary constraint identified.</p>
          <p>Most founders who run it say the same thing. They knew something was off. They couldn't name it until they saw the data.</p>
          <p>The platform builds an execution programme around the constraint. Weekly commitments. A tracked metric. AI accountability tied to your specific situation.</p>
        </div>
        <CTABar
          primary={{ label: 'Run the Diagnostic', href: 'https://grow.centapartners.com.au', external: true }}
        />
        <p className="text-text-dim text-sm mt-3">10 minutes. No account required.</p>
      </Section>

      {/* Section 5: Introduce Advisory */}
      <Section>
        <SectionLabel>Direct advisory</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-4">
          For founders who need to move now
        </h2>
        <div className="mt-8 space-y-5 text-text-primary text-base md:text-lg leading-relaxed max-w-2xl">
          <p>Some founders don't need a diagnostic. They know something is broken. They need an operator in the room.</p>
          <p>Centa Catalyst is direct advisory. Weekly strategy sessions. A custom growth playbook. A direct line for the decisions that can't wait.</p>
          <p>No strategy decks. No discovery phases. We identify the constraint, build the plan, and execute.</p>
        </div>
        <CTABar
          primary={{ label: 'Talk to Us', href: '/advisory' }}
        />
        <p className="text-text-dim text-sm mt-3">30 minute call. No obligation.</p>
      </Section>

      {/* Section 6: Closing CTAs */}
      <section className="px-6 py-20 md:py-28 bg-surface">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-bg-card border border-border rounded-xl p-8 md:p-10 hover:border-brand/30 transition-colors">
            <h3 className="text-xl font-bold text-text-primary">Run the Diagnostic</h3>
            <p className="text-text-muted text-base mt-3">Find your constraint in 10 minutes. The platform handles the rest.</p>
            <a
              href="https://grow.centapartners.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 bg-brand hover:bg-brand-light text-white font-medium text-sm px-5 py-2.5 rounded-lg no-underline transition-colors"
            >
              Run Centa Clarity
            </a>
          </div>
          <div className="bg-bg-card border border-border rounded-xl p-8 md:p-10 hover:border-brand/30 transition-colors">
            <h3 className="text-xl font-bold text-text-primary">Work With Us</h3>
            <p className="text-text-muted text-base mt-3">Direct advisory for founders who want speed and accountability.</p>
            <Link
              to="/advisory"
              className="inline-flex items-center mt-6 border border-brand text-brand hover:bg-brand hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg no-underline transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
