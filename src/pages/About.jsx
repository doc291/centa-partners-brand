import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import { GROW_URL, Eyebrow, ButtonLink } from '../components/ui'

const stats = [
  { number: '20+', label: 'Years scaling tech businesses' },
  { number: '2,400%', label: 'Revenue growth delivered' },
  { number: '400%', label: 'Exit valuation increase' },
]

const milestones = [
  'Unified four tech businesses under a single group, led 130+ staff, and repositioned the group for investment.',
  'Turned around an enterprise tech company to profitability in four months, then exited at 400% of its original valuation.',
  'Pioneered a cloud platform model that delivered 2,400% revenue growth and 40%+ EBITDA margins — scaling the team from 12 to nearly 50.',
  'Built an advisory practice focused exclusively on SaaS and tech founders navigating growth, transformation, and exit.',
]

const principles = [
  {
    title: 'Find the constraint first.',
    body: 'Every business has one thing holding it back. Not five. Not ten. One. Everything else is noise until that one thing is addressed.',
  },
  {
    title: 'Execution beats intention.',
    body: "Plans don't grow businesses. Commitments do. We measure what gets done this week — not what was discussed this quarter.",
  },
  {
    title: 'Track less. Act more.',
    body: 'Dashboards full of metrics create the illusion of control. Real control is knowing the one number that matters and moving it.',
  },
  {
    title: 'Focus, not activity.',
    body: 'The busiest founders are often the most stuck. Activity without direction is just motion. We point the business at the constraint.',
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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-top opacity-70" aria-hidden="true" />
        <div className="absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 glow glow-pulse" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <Reveal>
            <Eyebrow>About Centa Partners</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={60} className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl">
            Built by operators.
            <span className="block text-gradient">Not consultants.</span>
          </Reveal>
          <Reveal as="p" delay={120} className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            We've built, scaled, turned around, and exited founder-led tech businesses. We advise at the level we've operated — and we bring the data to prove it.
          </Reveal>
        </div>
      </section>

      {/* ── Who we are ───────────────────────────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Who we are</Eyebrow>
              </Reveal>
              <Reveal as="h2" delay={60} className="mt-6 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
                Most firms sell time. <span className="text-gradient">We sell outcomes.</span>
              </Reveal>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
              <Reveal as="p">
                Centa Partners exists because we got tired of watching good businesses get bad advice.
              </Reveal>
              <Reveal as="p" delay={60}>
                The difference is simple: we've done the work. Built the teams. Hit the numbers. Fixed what was broken. We're not theorists — we've operated at the level we advise on.
              </Reveal>
              <Reveal as="p" delay={120}>
                That's why we don't lead with frameworks. We lead with the one constraint holding your business back, and we execute against it alongside you.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Track record ─────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Track record</Eyebrow>
        </Reveal>
        <Reveal as="h2" delay={60} className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
          Numbers we've actually moved.
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal
              key={s.number}
              delay={i * 90}
              className="rounded-2xl border border-border bg-bg-card p-7 md:p-8"
            >
              <div className="font-mono text-4xl font-semibold text-brand-bright md:text-5xl">
                {s.number}
              </div>
              <div className="mt-3 text-sm text-text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {milestones.map((m, i) => (
            <Reveal
              key={i}
              delay={i * 70}
              className="flex gap-5 bg-bg-card p-6 transition-colors hover:bg-bg-card-hover md:p-7"
            >
              <div className="pt-0.5 font-mono text-sm text-brand-bright">
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-base leading-relaxed text-text-secondary md:text-lg">{m}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How we think ─────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={60} className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
            Four principles. One operating philosophy.
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 2) * 90}
                className="group rounded-2xl border border-border bg-bg-card p-7 transition-all hover:border-brand/40 hover:bg-bg-card-hover md:p-8"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-bright">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-border-bright" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border-bright bg-gradient-to-br from-bg-card to-bg-elev p-10 text-center md:p-16">
          <div className="absolute -right-20 -top-20 h-[360px] w-[360px] glow glow-pulse" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid mask-radial-center opacity-40" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
              See where your business stands.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              Ten minutes. Five domains scored. One primary constraint. Then we help you execute against it on the Grow platform.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <ButtonLink href={GROW_URL} external variant="primary" withArrow>
                Run the Diagnostic
              </ButtonLink>
              <ButtonLink to="/advisory" variant="ghost">
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
