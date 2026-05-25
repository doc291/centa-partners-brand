import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import { GROW_URL, Eyebrow, ButtonLink } from '../components/ui'

const CALENDLY_URL = 'https://calendly.com/centapartners/discovery'

const whoFor = [
  'Founder-led tech businesses doing $2M to $20M in revenue.',
  "Something is not working and you're too close to see it.",
  "You've tried more activity and it hasn't moved the needle.",
  'You need someone in the room who has done this before.',
]

const whatWeDo = [
  "We identify what's actually holding your business back. Fast.",
  'We fix the revenue engine, the execution layer, or both.',
  'We align team and leadership around one direction.',
  'We build the operating rhythm your business is missing.',
]

const howItWorks = [
  'Weekly 1:1 strategy sessions. 45 minutes, every week.',
  'A custom growth playbook built for your stage and constraint.',
  'Direct Slack and email access, with async answers within 24 hours.',
  'Full Grow platform access: Clarity, Coach, and Club included.',
]

const notList = [
  {
    title: 'Not consulting',
    body: 'Consultants tell you what to do and leave. We do the work alongside you.',
  },
  {
    title: 'Not strategy without execution',
    body: 'Every session ends with commitments. Every week starts with accountability.',
  },
  {
    title: 'Not a long discovery phase',
    body: 'We already know what to look for. The diagnostic confirms it. Then we move.',
  },
]

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-brand/30 bg-brand/10 text-brand-bright">
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.5 6.5l2.5 2.5 4.5-5" />
      </svg>
    </span>
  )
}

function CheckList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-text-secondary md:text-lg">
          <CheckIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Advisory() {
  return (
    <>
      <Helmet>
        <title>Advisory. Direct Advisory for Tech Founders. Centa Partners.</title>
        <meta name="description" content="Catalyst is the direct-advisory tier of the Grow platform. Weekly 1:1 strategy sessions, a custom growth playbook, full platform access. $5,000 AUD/month. Based in Australia." />
        <link rel="canonical" href="https://centapartners.com.au/advisory" />
        <meta property="og:title" content="Advisory. Direct Advisory for Tech Founders. Centa Partners." />
        <meta property="og:description" content="Catalyst, the advisory tier of Grow. Weekly strategy sessions, a custom growth playbook, a direct line. For founders doing $2M to $20M who need an operator in the room." />
        <meta property="og:url" content="https://centapartners.com.au/advisory" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Centa Partners" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Advisory. Direct Advisory for Tech Founders. Centa Partners." />
        <meta name="twitter:description" content="Catalyst, the advisory tier of Grow. Weekly strategy sessions, a custom growth playbook, a direct line. For founders who need an operator in the room." />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-top opacity-70" aria-hidden="true" />
        <div className="absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 glow glow-pulse" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-24">
          <Reveal>
            <Eyebrow>Catalyst · the advisory tier of Grow</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={60} className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl">
            Direct advisory for founders
            <span className="block text-gradient">who can't get this wrong.</span>
          </Reveal>
          <Reveal as="p" delay={120} className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            When you need an operator in the room — not another deck — Catalyst pairs you directly with us, on the same platform that runs the rest of the Centa method.
          </Reveal>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>What it is</Eyebrow>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
                Not a programme. <span className="text-gradient">A working relationship.</span>
              </h2>
            </Reveal>
            <div className="space-y-5 text-base leading-relaxed text-text-secondary md:text-lg">
              <Reveal as="p">
                Catalyst is a working relationship with operators who have built, scaled, and turned around tech businesses.
              </Reveal>
              <Reveal as="p" delay={60}>
                No strategy decks. No discovery phases. No monthly reports that tell you what you already know.
              </Reveal>
              <Reveal as="p" delay={120}>
                We identify the constraint. We build the plan. We execute — together.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who this is for ──────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>Who this is for</Eyebrow>
        </Reveal>
        <Reveal as="h2" delay={60} className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
          Built for a specific kind of founder.
        </Reveal>
        <Reveal delay={120} className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          <CheckList items={whoFor} />
        </Reveal>
        <Reveal as="p" delay={180} className="mt-8 text-base text-text-muted md:text-lg">
          Most founders come to us after trying to solve this themselves.
        </Reveal>
      </section>

      {/* ── Inside the engagement ────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal>
            <Eyebrow>Inside the engagement</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <h3 className="text-xl font-semibold text-text-primary">What we do</h3>
              <div className="mt-6">
                <CheckList items={whatWeDo} />
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h3 className="text-xl font-semibold text-text-primary">How it works, week to week</h3>
              <div className="mt-6">
                <CheckList items={howItWorks} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What this is not ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <Eyebrow>What this is not</Eyebrow>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {notList.map((n, i) => (
            <Reveal
              key={n.title}
              delay={i * 90}
              className="rounded-2xl border border-border bg-bg-card p-7 md:p-8"
            >
              <h3 className="text-lg font-semibold text-text-primary">{n.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">{n.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-12 border-l-2 border-brand pl-6 md:pl-8">
          <p className="max-w-2xl text-xl italic text-text-primary md:text-2xl">
            Founders who come through Catalyst arrive with data. The metric is set, the commitments are clear — the only variable is speed.
          </p>
        </Reveal>
      </section>

      {/* ── Investment & CTA ─────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Reveal className="relative overflow-hidden rounded-3xl border border-border-bright bg-gradient-to-br from-bg-card to-bg-elev p-10 md:p-16">
            <div className="absolute -right-20 -top-20 h-[360px] w-[360px] glow glow-pulse" aria-hidden="true" />
            <div className="absolute inset-0 bg-grid mask-radial-center opacity-40" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <Eyebrow>Investment</Eyebrow>
                <div className="mt-6 font-mono text-4xl font-semibold text-text-primary md:text-5xl">
                  $5,000 <span className="text-2xl text-text-dim">AUD/mo</span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                  Minimum three months. Built to move the business, not extend the engagement.
                </p>
                <p className="mt-2 text-base text-text-muted">
                  Full Grow platform access included. No hidden costs. No hourly billing.
                </p>
              </div>
              <div className="lg:border-l lg:border-border-bright lg:pl-16">
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-primary md:text-3xl">
                  Ready to move?
                </h2>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  Start with the diagnostic, or book a call — we'll tell you honestly if Catalyst is right for your stage.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={GROW_URL} external variant="primary" withArrow>
                    Run the Diagnostic
                  </ButtonLink>
                  <ButtonLink href={CALENDLY_URL} external variant="ghost">
                    Book a Discovery Call
                  </ButtonLink>
                </div>
                <p className="mt-4 font-mono text-xs tracking-wide text-text-dim">
                  30 minutes · No obligation
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
