import { useEffect, useState } from 'react'

const REVEAL_MS = 2600
const GLOW_MS = 1200

const CSS = `
.cn-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
}

/* Behind the maze — soft purple halo that pulses once and settles */
.cn-glow {
  position: absolute;
  inset: -10%;
  border-radius: 50%;
  background: radial-gradient(circle at center,
    rgba(91, 33, 217, 0.50) 0%,
    rgba(91, 33, 217, 0.15) 34%,
    rgba(91, 33, 217, 0) 62%);
  opacity: 0;
  pointer-events: none;
  filter: blur(4px);
  z-index: 0;
}

/* The maze itself — a div masked with the logo PNG, painted brand purple */
.cn-mark {
  position: absolute;
  inset: 6%;
  background-color: #5B21D9;
  -webkit-mask: url('/icon.png') center / contain no-repeat;
          mask: url('/icon.png') center / contain no-repeat;
  z-index: 1;
}

/* Disc that covers the maze and shrinks to nothing — outside-in reveal */
.cn-cover {
  position: absolute;
  inset: 4%;
  border-radius: 50%;
  background-color: #0B0B0F;
  transform-origin: center;
  transform: scale(1.08);
  z-index: 2;
  animation: cn-reveal ${REVEAL_MS}ms cubic-bezier(0.32, 0.72, 0.30, 1) 0.18s forwards;
}

/* Faint trailing edge along the shrinking boundary — feels like a path being walked */
.cn-cover::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1px solid rgba(91, 33, 217, 0.45);
  box-shadow: 0 0 14px 2px rgba(91, 33, 217, 0.35);
  opacity: 0.9;
}

@keyframes cn-reveal {
  0%   { transform: scale(1.08); }
  100% { transform: scale(0);    }
}

/* Identified — glow pulses out as the maze completes */
.cn-stage.phase-identified .cn-glow {
  animation: cn-glow-pulse ${GLOW_MS}ms ease-out 1 forwards;
}

/* Stable — glow holds quietly */
.cn-stage.phase-stable .cn-glow {
  animation: none;
  opacity: 0.2;
}

@keyframes cn-glow-pulse {
  0%   { opacity: 0;   transform: scale(0.86); }
  50%  { opacity: 1;   transform: scale(1.06); }
  100% { opacity: 0.2; transform: scale(1);    }
}

@media (prefers-reduced-motion: reduce) {
  .cn-cover {
    animation: none;
    transform: scale(0);
  }
  .cn-glow {
    animation: none;
    opacity: 0.2;
  }
}
`

export default function ConstraintNetwork({ className = '' }) {
  const [phase, setPhase] = useState('drawing')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('identified'), REVEAL_MS + 180)
    const t2 = setTimeout(() => setPhase('stable'),     REVEAL_MS + 180 + GLOW_MS)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className={`cn-stage phase-${phase} ${className}`} aria-hidden="true">
      <style>{CSS}</style>
      <div className="cn-glow" />
      <div className="cn-mark" />
      <div className="cn-cover" />
    </div>
  )
}
