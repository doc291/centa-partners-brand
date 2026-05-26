import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { GROW_URL, ArrowIcon, Eyebrow } from '../components/ui'

const domains = [
  { label: 'Revenue Engine', score: 38, primary: true },
  { label: 'Operating Rhythm', score: 52 },
  { label: 'Positioning', score: 64 },
  { label: 'Team & Delivery', score: 71 },
  { label: 'Cash & Margin', score: 80 },
]

const proof = [
  { value: '20+', label: 'Years scaling tech businesses' },
  { value: '2,400%', label: 'Revenue growth delivered' },
  { value: '400%', label: 'Exit valuation increase' },
]

const symptoms = [
  'Revenue is inconsistent quarter to quarter',
  'The team is busy but not aligned',
  'Every decision routes back to the founder',
  'More effort, same result',
]

const constraintSteps = [
  {
    num: '01',
    title: 'Find the constraint',
    body: 'One structural issue limits everything else. We name it with data, not opinion.',
  },
  {
    num: '02',
    title: 'Focus everything on it',
    body: 'The right hire, the right metric, the next commitment — they all become obvious.',
  },
  {
    num: '03',
    title: 'Execute weekly',
    body: 'We move one number every week. Strategy becomes a cadence, not a deck.',
  },
]

const capabilities = [
  {
    tag: 'Clarity',
    title: 'The scored diagnostic',
    body: 'Ten minutes, five domains, one primary constraint identified. The data names what you already sensed.',
  },
  {
    tag: 'Coach',
    title: 'Guided execution',
    body: 'A 90-day programme built around the constraint. Weekly commitments, one tracked metric, AI accountability.',
  },
  {
    tag: 'Club',
    title: 'The founder cohort',
    body: 'A peer group matched by constraint domain. Weekly accountability with founders solving the same problem.',
  },
  {
    tag: 'Catalyst',
    title: 'Direct advisory',
    body: 'When you need an operator in the room now — weekly strategy sessions and a custom growth playbook.',
  },
]

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function DiagnosticPanel() {
  // When motion is reduced, show full bars immediately; otherwise animate them in.
  const [mounted, setMounted] = useState(() => prefersReducedMotion())

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 250)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <div className="relative">
      <div className="absolute -inset-6 glow glow-pulse" aria-hidden="true" />
      <div className="relative rounded-2xl border border-border-bright bg-gradient-to-b from-bg-card to-bg-elev p-6 md:p-7 shadow-[0_30px_80px_-30px_rgba(91,33,217,0.55)]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
            Centa Clarity
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-bright animate-pulse" />
            Live
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-b border-border pb-5">
          <div>
            <div className="font-mono text-5xl font-semibold leading-none text-text-primary">
              61<span className="text-2xl text-text-dim">/100</span>
            </div>
            <div className="mt-2 text-sm text-text-muted">Clarity Index</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs text-text-dim">5 domains scored</div>
            <div className="mt-1 font-mono text-xs text-brand-bright">1 primary constraint</div>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {domains.map((d, i) => (
            <div key={d.label}>
              <div className="flex items-center justify-between text-sm">
                <span className={d.primary ? 'font-medium text-text-primary' : 'text-text-secondary'}>
                  {d.label}
                </span>
                <span
                  className={`font-mono text-xs ${d.primary ? 'text-brand-bright' : 'text-text-muted'}`}
                >
                  {d.score}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full transition-[width] duration-1000 ease-out ${
                    d.primary
                      ? 'bg-gradient-to-r from-brand to-brand-bright'
                      : 'bg-brand-light/45'
                  }`}
                  style={{
                    width: mounted ? `${d.score}%` : '0%',
                    transitionDelay: `${i * 90}ms`,
                  }}
                />
              </div>
              {d.primary && (
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-bright">
                  Primary constraint
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Centa Partners. Growth Advisory for Tech Founders.</title>
        <meta name="description" content="Centa Partners helps founder-led tech businesses identify the one constraint holding them back and execute against it. Run the diagnostic on the Grow platform. Based in Australia." />
        <link rel="canonical" href="https://centapartners.com.au" />
        <meta property="og:title" content="Centa Partners. Growth Advisory for Tech Founders." />
        <meta property="og:description" content="Find the one constraint holding your business back. Diagnostic, coaching, and direct advisory — all on the Grow platform." />
        <meta property="og:url" content="https://centapartners.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Centa Partners" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Centa Partners. Growth Advisory for Tech Founders." />
        <meta name="twitter:description" content="Find the one constraint holding your business back. Diagnostic, coaching, and direct advisory on the Grow platform." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "Centa Partners",
                "url": "https://centapartners.com.au",
                "description": "Growth advisory for founder-led tech businesses. Diagnostic, coaching, and direct advisory.",
                "foundingDate": "2024",
                "areaServed": "AU",
                "sameAs": []
              },
              {
                "@type": "WebSite",
                "name": "Centa Partners",
                "url": "https://centapartners.com.au"
              },
              {
                "@type": "ProfessionalService",
                "name": "Centa Partners",
                "url": "https://centapartners.com.au",
                "description": "Growth advisory and diagnostic platform for founder-led technology businesses",
                "priceRange": "$$",
                "areaServed": {
                  "@type": "Country",
                  "name": "Australia"
                },
                "serviceType": ["Business Advisory", "Growth Consulting", "Business Diagnostic"]
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-top opacity-70" aria-hidden="true" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 glow glow-pulse" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal as="div">
                <Eyebrow>Growth intelligence for tech founders</Eyebrow>
              </Reveal>
              <Reveal as="h1" delay={60} className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl">
                Most founders don't have a growth problem.
                <span className="mt-2 block text-gradient">They have a clarity problem.</span>
              </Reveal>
              <Reveal as="p" delay={120} className="mt-7 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl">
                The business is growing — but it's harder than it should be. Revenue is inconsistent. The team is busy but not aligned. Every decision circles back to you.
              </Reveal>
              <Reveal as="p" delay={180} className="mt-4 text-lg font-medium text-brand-bright md:text-xl">
                It's not effort. It's direction.
              </Reveal>

              <Reveal as="div" delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={GROW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white no-underline shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_14px_40px_-12px_rgba(124,58,237,0.7)] transition-all hover:bg-brand-light hover:shadow-[0_0_0_1px_rgba(124,58,237,0.6),0_18px_50px_-12px_rgba(124,58,237,0.85)]"
                >
                  Run the Diagnostic
                  <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/how-we-work"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-bright px-6 py-3.5 text-sm font-semibold text-text-secondary no-underline transition-colors hover:border-brand/50 hover:text-text-primary"
                >
                  See how we work
                </Link>
              </Reveal>

              <Reveal as="p" delay={300} className="mt-5 font-mono text-xs tracking-wide text-text-dim">
                10 minutes · No account required · Built from 20+ years scaling tech
              </Reveal>
            </div>

            <Reveal as="div" delay={200} className="lg:pl-4">
              <DiagnosticPanel />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Proof strip ──────────────────────────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {proof.map((p, i) => (
              <Reveal
                key={p.value}
                delay={i * 90}
                className="flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-1"
              >
                <span className="font-mono text-3xl font-semibold text-brand-bright md:text-4xl">
                  {p.value}
                </span>
                <span className="text-sm text-text-muted">{p.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The real issue ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>The real issue</Eyebrow>
        </Reveal>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal as="h2" className="text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
              Why good businesses stay stuck
            </Reveal>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
              <Reveal as="p" delay={60}>
                Every business has a primary constraint — one structural issue that limits everything else. Revenue, hiring, product, positioning: they all feel like problems. Most are symptoms.
              </Reveal>
              <Reveal as="p" delay={120}>
                So founders spend years fixing the wrong thing. They hire more people, launch more features, run more campaigns. The needle barely moves.
              </Reveal>
              <Reveal as="p" delay={180}>
                Traditional advice makes it worse — more frameworks, more dashboards, more to track. What's needed is the opposite.
              </Reveal>
            </div>
          </div>

          <Reveal delay={120} className="rounded-2xl border border-border bg-bg-card p-7 md:p-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              What it feels like
            </div>
            <ul className="mt-5 space-y-4">
              {symptoms.map((s) => (
                <li key={s} className="flex items-start gap-3 text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rule-gradient" />
            <p className="mt-6 text-lg font-medium text-text-primary">
              Less activity. <span className="text-gradient">More precision.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Our approach ─────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <Eyebrow>Our approach</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={60} className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
            We think in constraints. Not categories.
          </Reveal>
          <Reveal as="p" delay={120} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Find the one binding issue and everything simplifies. The right hire becomes obvious. The right metric becomes clear. The commitment for this week writes itself. We don't ship strategy decks — we move one number, every week.
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {constraintSteps.map((step, i) => (
              <Reveal
                key={step.num}
                delay={i * 100}
                className="bg-bg-card p-7 transition-colors hover:bg-bg-card-hover md:p-8"
              >
                <div className="font-mono text-sm text-brand-bright">{step.num}</div>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 border-l-2 border-brand pl-6 md:pl-8">
            <p className="max-w-2xl text-xl italic text-text-primary md:text-2xl">
              The constraint is knowable. Once you know it, growth is execution.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── The Grow platform ────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute right-0 top-0 h-[420px] w-[620px] glow-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The platform</Eyebrow>
            </Reveal>
            <Reveal as="h2" delay={60} className="mt-6 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
              One platform. The entire Centa method.
            </Reveal>
            <Reveal as="p" delay={120} className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              Everything we do lives inside <span className="font-medium text-text-primary">Grow</span> — the platform built for founder-led tech businesses. It identifies your constraint, builds the execution programme around it, and keeps you accountable to the one number that matters.
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal
                key={c.tag}
                delay={(i % 2) * 90}
                className="group rounded-2xl border border-border bg-bg-card p-7 transition-all hover:border-brand/40 hover:bg-bg-card-hover md:p-8"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-bright">
                    {c.tag}
                  </span>
                  <span className="h-px flex-1 bg-border-bright" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{c.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={GROW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white no-underline shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_14px_40px_-12px_rgba(124,58,237,0.7)] transition-all hover:bg-brand-light"
            >
              Run the Diagnostic
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <span className="font-mono text-xs tracking-wide text-text-dim">
              10 minutes · No account required
            </span>
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border-bright bg-gradient-to-br from-bg-card to-bg-elev p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-[360px] w-[360px] glow glow-pulse" aria-hidden="true" />
            <div className="absolute inset-0 bg-grid mask-radial-center opacity-40" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
                Find the one constraint holding you back.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Start with the diagnostic. Ten minutes, scored across five domains, with a clear primary constraint at the end. For founders who need to move now, our advisory takes it from there.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={GROW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-semibold text-white no-underline shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_14px_40px_-12px_rgba(124,58,237,0.7)] transition-all hover:bg-brand-light"
                >
                  Run the Diagnostic
                  <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  to="/advisory"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-bright px-6 py-3.5 text-sm font-semibold text-text-secondary no-underline transition-colors hover:border-brand/50 hover:text-text-primary"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
