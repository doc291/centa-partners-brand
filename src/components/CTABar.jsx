export default function CTABar({ primary, secondary }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      {primary && (
        <a
          href={primary.href}
          target={primary.external ? '_blank' : undefined}
          rel={primary.external ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center justify-center bg-brand hover:bg-brand-light text-white font-medium text-sm px-6 py-3 rounded-lg no-underline transition-colors"
        >
          {primary.label}
        </a>
      )}
      {secondary && (
        <a
          href={secondary.href}
          target={secondary.external ? '_blank' : undefined}
          rel={secondary.external ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center justify-center border border-border hover:border-brand text-text-muted hover:text-text-primary font-medium text-sm px-6 py-3 rounded-lg no-underline transition-colors"
        >
          {secondary.label}
        </a>
      )}
    </div>
  )
}
