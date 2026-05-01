import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ConstraintNetwork from '../components/ConstraintNetwork'

const HERO_CSS = `
@keyframes hero-reveal {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hr-base {
  opacity: 0;
  animation: hero-reveal 0.65s ease forwards;
}
.hr-1 { animation-delay: 0.08s; }
.hr-2 { animation-delay: 0.26s; }
.hr-3 { animation-delay: 0.48s; }
.hr-4 { animation-delay: 0.72s; }
`

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Centa Partners. Growth Advisory for Tech Founders.</title>
        <meta name="description" content="Centa Partners helps founder-led tech businesses identify the one constraint holding them back and execute against it. Diagnostic. Coaching. Advisory. Based in Australia." />
        <link rel="canonical" href="https://centapartners.com.au" />
        <meta property="og:title" content="Centa Partners. Growth Advisory for Tech Founders." />
        <meta property="og:description" content="Find the one constraint holding your business back. Diagnostic, coaching, and direct advisory for founder-led tech businesses." />
        <meta property="og:url" content="https://centapartners.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Centa Partners" />
        <meta property="og:locale" content="en_AU" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Centa Partners. Growth Advisory for Tech Founders." />
        <meta name="twitter:description" content="Find the one constraint holding your business back. Diagnostic, coaching, and direct advisory for founder-led tech businesses." />
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

      <div style={{ backgroundColor: '#0B0B0F' }} className="text-[#E5E5E5]">
        <style>{HERO_CSS}</style>

        {/* ─── 1. HERO ─────────────────────────────────────────── */}
        <section className="min-h-screen flex items-center px-6 pt-24 pb-16 md:pt-28">
          <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.1] tracking-tight">
                <span className="block text-[#E5E5E5] hr-base hr-1">
                  Most founders don't have a growth problem.
                </span>
                <span className="block text-[#5B21D9] mt-2 hr-base hr-2">
                  They have a clarity problem.
                </span>
              </h1>

              <div className="mt-8 space-y-3 text-[#999999] text-base md:text-lg leading-relaxed hr-base hr-3">
                <p>The business is moving. But it is harder than it should be.</p>
                <p>Revenue is inconsistent. The team is busy but not aligned.</p>
                <p>Every decision still comes back to you.</p>
                <p className="text-[#5B21D9] font-medium pt-1">It's not effort. It's direction.</p>
              </div>

              <div className="mt-10 hr-base hr-4">
                <a
                  href="https://grow.centapartners.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#5B21D9] hover:bg-[#6D2AE8] text-white font-medium text-sm px-7 py-3.5 rounded-lg transition-colors no-underline"
                >
                  Run the Diagnostic
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
                </a>
              </div>
            </div>

            {/* Network visual */}
            <div className="flex items-center justify-center md:justify-end">
              <ConstraintNetwork className="w-full max-w-[340px] md:max-w-[420px]" />
            </div>
          </div>
        </section>

        {/* ─── 2. WHY BUSINESSES STAY STUCK ───────────────────── */}
        <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#111119' }}>
          <div className="max-w-3xl mx-auto">
            <span className="text-[#5B21D9] text-xs uppercase tracking-widest font-medium">
              Why businesses stay stuck
            </span>
            <div className="mt-8 space-y-5 text-[#E5E5E5] text-base md:text-lg leading-relaxed">
              <p className="text-xl md:text-2xl font-semibold text-[#E5E5E5]">
                Every business has a constraint.
              </p>
              <p>One thing slowing everything else down.</p>
              <p className="text-[#999999]">Revenue. Hiring. Positioning. Delivery.</p>
              <p>
                You feel the pressure everywhere.<br />
                But the problem is usually in one place.
              </p>
              <p className="pt-2">Most founders don't fix it.</p>
              <div className="pt-1">
                <p>They add more:</p>
                <div className="mt-3 pl-5 space-y-1.5 text-[#666666]">
                  <p>More tools.</p>
                  <p>More frameworks.</p>
                  <p>More advice.</p>
                </div>
              </div>
              <p className="pt-2">Nothing changes.</p>
              <p className="pt-2 text-[#999999]">
                Because until the constraint is clear,<br />
                everything else is guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* ─── 3. OUR APPROACH ─────────────────────────────────── */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[#5B21D9] text-xs uppercase tracking-widest font-medium">
              Our approach
            </span>
            <div className="mt-8 space-y-5 text-[#E5E5E5] text-base md:text-lg leading-relaxed">
              <p className="text-xl md:text-2xl font-semibold">We think in constraints.</p>
              <p className="text-[#999999]">Not symptoms. Not surface fixes.</p>
              <p>
                Find the one thing holding the business back.<br />
                Fix it. Everything else moves with it.
              </p>
              <div className="pt-4 border-l-2 border-[#5B21D9] pl-6">
                <p className="text-[#E5E5E5]">We don't build strategy decks.</p>
                <p className="text-[#5B21D9] font-semibold mt-1">We move one number. Every week.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. PROOF ────────────────────────────────────────── */}
        <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#111119' }}>
          <div className="max-w-3xl mx-auto">
            <span className="text-[#5B21D9] text-xs uppercase tracking-widest font-medium">
              Proof
            </span>
            <p className="mt-8 text-[#999999] text-base md:text-lg">
              What this looks like in practice:
            </p>
            <ul className="mt-8 space-y-10">
              <li className="flex items-start gap-4">
                <span className="mt-1 text-[#5B21D9] flex-shrink-0">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3"/></svg>
                </span>
                <p className="text-[#E5E5E5] text-lg md:text-xl font-medium leading-snug">
                  Took a business from loss to profit in 4 months
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 text-[#5B21D9] flex-shrink-0">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3"/></svg>
                </span>
                <p className="text-[#E5E5E5] text-lg md:text-xl font-medium leading-snug">
                  Delivered $4.2M EBITDA against a $2M target
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 text-[#5B21D9] flex-shrink-0">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3"/></svg>
                </span>
                <p className="text-[#E5E5E5] text-lg md:text-xl font-medium leading-snug">
                  Led and scaled teams across $25M+ in recurring revenue
                </p>
              </li>
            </ul>
            <div className="mt-12 space-y-1">
              <p className="text-[#E5E5E5] font-semibold text-lg">This isn't theory.</p>
              <p className="text-[#999999]">It's how businesses actually move.</p>
            </div>
          </div>
        </section>

        {/* ─── 5. THE PLATFORM ─────────────────────────────────── */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[#5B21D9] text-xs uppercase tracking-widest font-medium">
              The platform
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-[#E5E5E5] leading-snug">
              The fastest way to find what's holding your business back
            </h2>

            {/* Centa Clarity block */}
            <div className="mt-8 space-y-4 text-base md:text-lg leading-relaxed">
              <p className="text-[#E5E5E5]">
                Centa Clarity is a scored diagnostic built for founder-led tech businesses.
              </p>
              <p className="text-[#999999]">10 minutes. Five domains. One constraint identified.</p>
              <p className="text-[#E5E5E5]">
                Most founders already know something is wrong.<br />
                This shows you exactly where.
              </p>
            </div>

            {/* Bridge line */}
            <p className="mt-10 mb-10 text-[#5B21D9] font-semibold text-lg md:text-xl">
              Then we fix it.
            </p>

            {/* Grow execution block */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="text-[#E5E5E5]">
                Grow takes that constraint and turns it into execution.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-4">
                {['One metric', 'Weekly commitments', 'Proof of work', 'Measurable progress'].map(label => (
                  <span
                    key={label}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-[#E5E5E5] border"
                    style={{ borderColor: '#2A2A45', backgroundColor: '#14141E' }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="pt-4 space-y-1">
                <p className="text-[#666666]">This is where most tools stop.</p>
                <p className="text-[#E5E5E5] font-medium">This is where you actually move.</p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://grow.centapartners.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5B21D9] hover:bg-[#6D2AE8] text-white font-medium text-sm px-7 py-3.5 rounded-lg transition-colors no-underline"
              >
                Run the Diagnostic
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── 6. HOW IT WORKS ─────────────────────────────────── */}
        <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#111119' }}>
          <div className="max-w-3xl mx-auto">
            <span className="text-[#5B21D9] text-xs uppercase tracking-widest font-medium">
              How it works
            </span>

            {/* Flow diagram */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-0">
              {[
                { word: 'Clarity',   desc: 'If clarity is missing, nothing moves.' },
                { word: 'Focus',     desc: 'If focus is broken, execution drops.' },
                { word: 'Execution', desc: 'If execution drops, growth stalls.' },
                { word: 'Growth',    desc: 'Fix the constraint. The rest follows.' },
              ].map((step, i) => (
                <div key={step.word} className="flex sm:flex-1 items-start sm:flex-col sm:items-start gap-4 sm:gap-0">
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 flex-1">
                    <div className="flex items-center gap-3 sm:gap-0">
                      <span className="text-[#E5E5E5] font-bold text-xl md:text-2xl whitespace-nowrap">
                        {step.word}
                      </span>
                      {/* Arrow — right on desktop, down on mobile */}
                      {i < 3 && (
                        <>
                          <svg className="flex-shrink-0 sm:hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2A2A45" strokeWidth="2" strokeLinecap="round"><path d="M8 2v12M4 10l4 4 4-4"/></svg>
                          <svg className="flex-shrink-0 hidden sm:block sm:mx-4 mt-1" width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="#2A2A45" strokeWidth="1.5" strokeLinecap="round"><path d="M0 7h24M20 3l4 4-4 4"/></svg>
                        </>
                      )}
                    </div>
                    <p className="text-[#666666] text-sm mt-1 sm:mt-2 leading-snug max-w-[120px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. DIRECT ADVISORY ──────────────────────────────── */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <span className="text-[#5B21D9] text-xs uppercase tracking-widest font-medium">
              Direct advisory
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-[#E5E5E5] leading-snug">
              For founders who don't have time to get this wrong
            </h2>
            <div className="mt-8 space-y-4 text-[#E5E5E5] text-base md:text-lg leading-relaxed">
              <p className="text-[#999999]">
                Some businesses don't need a diagnostic.<br />
                They need to move now.
              </p>
              <p>
                Centa Catalyst is direct advisory with an operator who has built, scaled, and turned businesses around.
              </p>
              <div className="pt-2 space-y-1.5 text-[#999999]">
                <p>No strategy decks.</p>
                <p>No discovery phases.</p>
                <p>We identify the constraint and execute.</p>
              </div>
            </div>
            <div className="mt-10">
              <Link
                to="/advisory"
                className="inline-flex items-center gap-2 border border-[#2A2A45] hover:border-[#5B21D9] text-[#999999] hover:text-[#E5E5E5] font-medium text-sm px-7 py-3.5 rounded-lg transition-colors no-underline"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 8. FINAL CTA ────────────────────────────────────── */}
        <section
          className="px-6 py-20 md:py-28 text-center"
          style={{ backgroundColor: '#0B0B0F', borderTop: '1px solid #14141E' }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-4xl md:text-[3.25rem] font-bold text-[#E5E5E5] leading-tight">
              Stop guessing.
            </p>
            <p className="mt-4 text-[#999999] text-lg md:text-xl">
              Find the constraint. Fix it.
            </p>
            <div className="mt-10">
              <a
                href="https://grow.centapartners.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#5B21D9] hover:bg-[#6D2AE8] text-white font-medium px-8 py-4 rounded-lg transition-colors no-underline text-base"
              >
                Run the Diagnostic
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
