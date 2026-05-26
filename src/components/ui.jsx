import { Link } from 'react-router-dom'

/** The Grow platform — the primary conversion target across the site. */
export const GROW_URL = 'https://grow.centapartners.com.au'

export function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-brand-bright ${className}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-light shadow-[0_0_8px_rgba(124,58,237,0.9)]" />
      {children}
    </span>
  )
}

const BUTTON_BASE =
  'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold no-underline transition-all'

const BUTTON_VARIANTS = {
  primary:
    'bg-brand text-white shadow-[0_0_0_1px_rgba(124,58,237,0.4),0_14px_40px_-12px_rgba(124,58,237,0.7)] hover:bg-brand-light hover:shadow-[0_0_0_1px_rgba(124,58,237,0.6),0_18px_50px_-12px_rgba(124,58,237,0.85)]',
  ghost:
    'border border-border-bright text-text-secondary hover:border-brand/50 hover:text-text-primary',
}

/**
 * A single CTA primitive used everywhere. Pass `to` for an in-app route or
 * `href` (+ `external`) for an outbound link. `withArrow` appends the animated
 * arrow used on primary actions.
 */
export function ButtonLink({
  to,
  href,
  external = false,
  variant = 'primary',
  withArrow = false,
  className = '',
  children,
}) {
  const classes = `${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`
  const arrow = withArrow ? (
    <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
  ) : null

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {arrow}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={classes}
    >
      {children}
      {arrow}
    </a>
  )
}
