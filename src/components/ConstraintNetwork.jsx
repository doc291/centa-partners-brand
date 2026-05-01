import { useEffect, useState } from 'react'

const REVEAL_MS = 2800
const GLOW_MS = 1200
const START_DELAY = 180

const CSS = `
.cn-stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
}

/* Soft purple halo behind the maze — pulses once when drawing completes */
.cn-glow {
  position: absolute;
  inset: -10%;
  border-radius: 50%;
  background: radial-gradient(circle at center,
    rgba(91, 33, 217, 0.50) 0%,
    rgba(91, 33, 217, 0.15) 32%,
    rgba(91, 33, 217, 0)    60%);
  opacity: 0;
  pointer-events: none;
  filter: blur(4px);
  z-index: 0;
}

/* Maze sits underneath, fully formed in brand purple */
.cn-mark {
  position: absolute;
  inset: 6%;
  background-color: #5B21D9;
  -webkit-mask: url('/icon.png') center / contain no-repeat;
          mask: url('/icon.png') center / contain no-repeat;
  z-index: 1;
}

/* Dark disc covers the maze and shrinks to nothing — gates what's visible */
.cn-cover {
  position: absolute;
  inset: 4%;
  border-radius: 50%;
  background-color: #0B0B0F;
  transform-origin: center;
  transform: scale(1.08);
  z-index: 2;
  animation: cn-shrink ${REVEAL_MS}ms cubic-bezier(0.32, 0.72, 0.30, 1) ${START_DELAY}ms forwards;
}

@keyframes cn-shrink {
  to { transform: scale(0); }
}

/* Pen orbit — invisible wrapper that rotates and shrinks in sync with the cover.
   The pen tip rides on its top edge, so as the orbit rotates AND shrinks, the
   tip traces a spiral from outer ring inward to centre. */
.cn-pen-orbit {
  position: absolute;
  inset: 4%;
  pointer-events: none;
  transform-origin: center;
  transform: scale(1.08) rotate(0deg);
  z-index: 3;
  animation: cn-orbit ${REVEAL_MS}ms cubic-bezier(0.32, 0.72, 0.30, 1) ${START_DELAY}ms forwards;
}

@keyframes cn-orbit {
  to { transform: scale(0) rotate(-540deg); }
}

/* The pen tip — a small bright glow that visually "draws" the maze */
.cn-pentip {
  position: absolute;
  top: 0;
  left: 50%;
  width: 22px;
  height: 22px;
  margin-left: -11px;
  margin-top: -11px;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(213, 195, 255, 0.85) 22%,
    rgba(91,  33,  217, 0.75) 50%,
    rgba(91,  33,  217, 0)    80%);
  box-shadow:
    0 0 14px 3px rgba(91, 33, 217, 0.75),
    0 0 28px 6px rgba(91, 33, 217, 0.35);
}

/* Identified — glow pulses out once the maze is complete */
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
  .cn-cover, .cn-pen-orbit {
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
    const t1 = setTimeout(() => setPhase('identified'), REVEAL_MS + START_DELAY)
    const t2 = setTimeout(() => setPhase('stable'),     REVEAL_MS + START_DELAY + GLOW_MS)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className={`cn-stage phase-${phase} ${className}`} aria-hidden="true">
      <style>{CSS}</style>
      <div className="cn-glow" />
      <div className="cn-mark" />
      <div className="cn-cover" />
      <div className="cn-pen-orbit">
        <div className="cn-pentip" />
      </div>
    </div>
  )
}
