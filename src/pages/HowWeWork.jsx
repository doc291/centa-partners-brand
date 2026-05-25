import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import { GROW_URL, Eyebrow, ButtonLink } from '../components/ui'

const steps = [
  {
    num: '01',
    tag: 'Clarity',
    title: 'Identify the constraint',
    paras: [
      'Run the Clarity diagnostic inside Grow. Ten minutes, five domains scored, one primary constraint identified.',
      'This is not a personality test. It is a structured, scored assessment built from two decades of operating tech businesses — it pinpoints where your business is losing the most leverage.',
      'Most founders say they already know what is wrong. The diagnostic usually proves them half right.',
    ],
    outcomes: ['5 domains scored', '1 primary constraint', '10 minutes'],
  },
  {
    num: '02',
    tag: 'Coach',
    title: 'Execute against one metric',
    paras: [
      'Grow builds a 90-day programme around the constraint. Three commitments per week. One metric that moves if the commitments land.',
      'An AI coach tracks progress, detects when you are stuck, and adjusts. Not motivation — accountability.',
      'Founders who want direct support add Catalyst: weekly sessions, a custom playbook, and a direct line.',
    ],
    outcomes: ['3 weekly commitments', '1 tracked metric', 'AI accountability'],
  },
  {
    num: '03',
    tag: 'Club + Catalyst',
    title: 'Scale once the system works',
    paras: [
      'At the end of the programme, retake the diagnostic. See exactly what moved — before and after, scored.',
      'Founders ready to go further join Club: a peer cohort of 12 to 15 matched by constraint domain, with weekly accountability and group sessions.',
      'Those preparing for acquisition, major scale, or structural change work with us directly through Catalyst.',
    ],
    outcomes: ['Re-scored progress', 'Peer cohort', 'Direct advisory'],
  },
]

export default function HowWeWork() {
  return (
    <>
      <Helmet>
        <title>How We Work. Diagnostic, Coaching, Advisory. Centa Partners.</title>
        <meta name="description" content="Three steps on one platform. Identify the constraint with Clarity. Execute against one metric with Coach. Scale with Club and Catalyst advisory. All on Grow." />
        <link rel="canonical" href="https://centapartners.com.au/how-we-work" />
        <meta property="og:title" content="How We Work. Diagnostic, Coaching, Advisory. Centa Partners." />
        <meta property="og:description" content="Three steps on one platform. Identify the constraint. Execute against one metric. Scale once the system works." />
        <meta property="og:url" content="https://centapartners.com.au/how-we-work" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Centa Partners" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="How We Work. Diagnostic, Coaching, Advisory. Centa Partners." />
        <meta name="twitter:description" content="Three steps on one platform. Identify the constraint. Execute against one metric. Scale once the system works." />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial-top opacity-70" aria-hidden="true" />
        <div className="absolute -top-40 left-1/2 h-[460px] w-[760px] -translate-x-1/2 glow glow-pulse" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={60} className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-text-primary md:text-6xl">
            Three steps. <span className="text-gradient">No complexity.</span>
          </Reveal>
          <Reveal as="p" delay={120} className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
            Every founder who works with us follows the same model — and it all runs on one platform. It is simple because simplicity is the point.
          </Reveal>
        </div>
      </section>

      {/* ── The method timeline ──────────────────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal>
            <Eyebrow>The method · on Grow</Eyebrow>
          </Reveal>
          <Reveal as="h2" delay={60} className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-4xl">
            From constraint to scale — in one system.
          </Reveal>

          <div className="mt-14">
            {steps.map((step, i) => {
              const last = i === steps.length - 1
              return (
                <Reveal key={step.num} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-border-bright bg-bg-card font-mono text-sm font-semibold text-brand-bright shadow-[0_0_0_4px_rgba(124,58,237,0.08)]">
                      {step.num}
                    </div>
                    {!last && (
                      <div className="mt-3 w-px flex-1 bg-gradient-to-b from-border-bright to-transparent" />
                    )}
                  </div>
                  <div className={last ? 'pb-2' : 'pb-14'}>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-bright">
                      {step.tag}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
                      {step.title}
                    </h3>
                    <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-text-secondary md:text-lg">
                      {step.paras.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.outcomes.map((o) => (
                        <span
                          key={o}
                          className="rounded-full border border-border bg-bg-card px-3 py-1 font-mono text-xs text-text-muted"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Where to start / CTA ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border-bright bg-gradient-to-br from-bg-card to-bg-elev p-10 md:p-16">
          <div className="absolute -right-20 -top-20 h-[360px] w-[360px] glow glow-pulse" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid mask-radial-center opacity-40" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <Eyebrow>Where to start</Eyebrow>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl">
              Start with the diagnostic.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              Most founders should begin here: ten minutes, no commitment, and a result that tells you exactly where you stand. Founders who already know they need advisory support can skip straight to a conversation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={GROW_URL} external variant="primary" withArrow>
                Run the Diagnostic
              </ButtonLink>
              <ButtonLink to="/advisory" variant="ghost">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
