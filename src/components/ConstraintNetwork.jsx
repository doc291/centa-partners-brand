import { useEffect, useState } from 'react'

const CSS = `
.cn-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
}

.cn-glow {
  position: absolute;
  inset: -8%;
  border-radius: 50%;
  background: radial-gradient(circle at center,
    rgba(91, 33, 217, 0.55) 0%,
    rgba(91, 33, 217, 0.18) 32%,
    rgba(91, 33, 217, 0) 60%);
  opacity: 0;
  pointer-events: none;
  filter: blur(6px);
  transition: opacity 1s ease, transform 1s ease;
}

.cn-mark {
  position: absolute;
  inset: 8%;
  background-color: #3A3A48;
  -webkit-mask: url('/icon.png') center / contain no-repeat;
          mask: url('/icon.png') center / contain no-repeat;
  transform-origin: center;
  transform: scale(0.74) rotate(-14deg);
  filter: blur(5px);
  opacity: 0.42;
  transition:
    background-color 1.2s ease,
    transform 1.4s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.9s ease,
    opacity 0.9s ease;
}

/* Subtle ambient pulse during the unsettled phase */
.cn-stage.phase-unsettled .cn-mark {
  animation: cn-breathe 2.4s ease-in-out infinite alternate;
}

@keyframes cn-breathe {
  from { transform: scale(0.74) rotate(-14deg); }
  to   { transform: scale(0.78) rotate(-10deg); }
}

/* Identified — constraint becomes clear */
.cn-stage.phase-identified .cn-mark {
  animation: cn-snap 1.4s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards;
  background-color: #5B21D9;
  filter: blur(0);
  opacity: 1;
}
.cn-stage.phase-identified .cn-glow {
  animation: cn-glow-pulse 1.5s ease-out 1 forwards;
}

@keyframes cn-snap {
  0%   { transform: scale(0.78) rotate(-10deg); }
  55%  { transform: scale(1.06) rotate(2deg); }
  100% { transform: scale(1)    rotate(0deg); }
}

@keyframes cn-glow-pulse {
  0%   { opacity: 0;    transform: scale(0.82); }
  40%  { opacity: 1;    transform: scale(1.08); }
  100% { opacity: 0.22; transform: scale(1); }
}

/* Stable — locked, calm */
.cn-stage.phase-stable .cn-mark {
  animation: none;
  background-color: #5B21D9;
  transform: scale(1) rotate(0);
  filter: blur(0);
  opacity: 1;
}
.cn-stage.phase-stable .cn-glow {
  animation: none;
  opacity: 0.22;
  transform: scale(1);
}

/* Respect reduced-motion preference */
@media (prefers-reduced-motion: reduce) {
  .cn-mark, .cn-glow {
    animation: none !important;
    transition: none !important;
  }
  .cn-stage .cn-mark {
    background-color: #5B21D9;
    transform: scale(1) rotate(0);
    filter: blur(0);
    opacity: 1;
  }
  .cn-stage .cn-glow {
    opacity: 0.22;
  }
}
`

export default function ConstraintNetwork({ className = '' }) {
  const [phase, setPhase] = useState('unsettled')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('identified'), 1200)
    const t2 = setTimeout(() => setPhase('stable'),     2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className={`cn-stage phase-${phase} ${className}`} aria-hidden="true">
      <style>{CSS}</style>
      <div className="cn-glow" />
      <div className="cn-mark" />
    </div>
  )
}
