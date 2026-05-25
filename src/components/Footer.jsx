import { Link } from 'react-router-dom'
import { GROW_URL, ArrowIcon } from './ui'

const company = [
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/advisory', label: 'Advisory' },
]

const platform = [
  { href: GROW_URL, label: 'Grow Platform' },
  { href: GROW_URL, label: 'Run the Diagnostic' },
]

const legal = [
  { href: 'https://grow.centapartners.com.au/privacy', label: 'Privacy' },
  { href: 'https://grow.centapartners.com.au/terms', label: 'Terms' },
  { href: 'https://grow.centapartners.com.au/disclaimer', label: 'Disclaimer' },
]

function ColumnHeading({ children }) {
  return (
    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">{children}</h4>
  )
}

const linkClass =
  'text-sm text-text-muted no-underline transition-colors hover:text-text-primary'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <img src="/logo-white.png" alt="Centa Partners" className="h-7" />
            <p className="mt-3 text-sm text-text-dim">Success, Simplified.</p>
            <a
              href={GROW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-border-bright px-4 py-2 text-sm font-medium text-text-secondary no-underline transition-colors hover:border-brand/50 hover:text-text-primary"
            >
              Run the Diagnostic
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            <div>
              <ColumnHeading>Company</ColumnHeading>
              <div className="mt-4 flex flex-col gap-3">
                {company.map((l) => (
                  <Link key={l.label} to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <ColumnHeading>Platform</ColumnHeading>
              <div className="mt-4 flex flex-col gap-3">
                {platform.map((l, i) => (
                  <a
                    key={`${l.label}-${i}`}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <ColumnHeading>Legal</ColumnHeading>
              <div className="mt-4 flex flex-col gap-3">
                {legal.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} Centa Partners. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wide text-text-dim">
            Growth intelligence for tech founders · AU
          </p>
        </div>
      </div>
    </footer>
  )
}
