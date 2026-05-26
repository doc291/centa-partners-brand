import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GROW_URL, ArrowIcon } from './ui'

const links = [
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/advisory', label: 'Advisory' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 no-underline"
          onClick={() => setOpen(false)}
        >
          <img src="/logo-white.png" alt="Centa Partners" className="h-8" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm no-underline transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gradient-to-r after:from-brand after:to-brand-bright after:transition-all after:content-[''] ${
                  active
                    ? 'font-medium text-text-primary after:w-full'
                    : 'text-text-muted after:w-0 hover:text-text-primary hover:after:w-full'
                }`}
              >
                {l.label}
              </Link>
            )
          })}
          <a
            href={GROW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white no-underline shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_8px_24px_-10px_rgba(124,58,237,0.85)] transition-all hover:bg-brand-light"
          >
            Run the Diagnostic
            <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer border-none bg-transparent p-1 text-text-muted transition-colors hover:text-text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-bg px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block border-b border-border py-3 text-sm no-underline ${
                pathname === l.to ? 'font-medium text-brand-bright' : 'text-text-muted'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={GROW_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white no-underline"
          >
            Run the Diagnostic
            <ArrowIcon />
          </a>
        </div>
      )}
    </nav>
  )
}
