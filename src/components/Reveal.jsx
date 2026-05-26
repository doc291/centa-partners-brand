import { useEffect, useRef, useState } from 'react'

/**
 * Fades + lifts its children into view the first time they intersect the
 * viewport. Falls back to visible immediately when IntersectionObserver is
 * unavailable, and the underlying CSS disables motion under
 * prefers-reduced-motion.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = as
  const ref = useRef(null)
  // Start visible when IntersectionObserver is unavailable so content never hides.
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
