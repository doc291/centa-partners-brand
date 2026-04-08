export default function Section({ children, className = '', dark = false, id }) {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-28 ${dark ? 'bg-surface' : ''} ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <span className="text-brand text-xs uppercase tracking-widest font-medium">
      {children}
    </span>
  )
}
