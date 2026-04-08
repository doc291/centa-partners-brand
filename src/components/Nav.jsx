import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/advisory', label: 'Advisory' },
  { to: '/insights', label: 'Insights' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline" onClick={() => setOpen(false)}>
          <span className="text-brand font-bold text-xl tracking-tight">CENTA PARTNERS</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm no-underline transition-colors ${
                pathname === l.to ? 'text-brand font-medium' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://grow.centapartners.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium bg-brand hover:bg-brand-light text-white px-4 py-2 rounded-lg no-underline transition-colors"
          >
            Run the Diagnostic
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-muted hover:text-text-primary bg-transparent border-none cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <path d="M6 6l12 12M6 18L18 6" />
              : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm no-underline border-b border-border ${
                pathname === l.to ? 'text-brand font-medium' : 'text-text-muted'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://grow.centapartners.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center text-sm font-medium bg-brand text-white px-4 py-3 rounded-lg no-underline"
          >
            Run the Diagnostic
          </a>
        </div>
      )}
    </nav>
  )
}
