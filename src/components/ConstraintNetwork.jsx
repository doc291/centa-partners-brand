import { useEffect, useState } from 'react'

// Desktop: pentagon + center (6 nodes total)
// viewBox 0 0 400 300
const D_CENTER = { cx: 200, cy: 150 }
const D_OUTER = [
  { id: 1, cx: 200, cy:  48 },   // top
  { id: 2, cx: 300, cy: 120 },   // top-right
  { id: 3, cx: 262, cy: 240 },   // bottom-right
  { id: 4, cx: 138, cy: 240 },   // bottom-left
  { id: 5, cx: 100, cy: 120 },   // top-left
]
const D_SPOKES = D_OUTER.map(n => [0, n.id])
const D_RING   = [[1,2],[2,3],[3,4],[4,5],[5,1]]

// Mobile: triangle + center (4 nodes total)
// viewBox 0 0 300 240
const M_CENTER = { cx: 150, cy: 115 }
const M_OUTER = [
  { id: 1, cx: 150, cy:  38 },   // top
  { id: 2, cx: 228, cy: 168 },   // bottom-right
  { id: 3, cx:  72, cy: 168 },   // bottom-left
]
const M_SPOKES = M_OUTER.map(n => [0, n.id])
const M_RING   = [[1,2],[2,3],[3,1]]

const CSS = `
/* ─── base ─────────────────────────────────────────── */
.cn-edge {
  fill: none;
  stroke: #5B21D9;
  stroke-width: 1;
  transition: opacity 1s ease;
}
.cn-node {
  fill: #5B21D9;
  transition: opacity 1s ease, transform 0.7s ease;
  transform-box: fill-box;
  transform-origin: center;
}
.cn-outer  { opacity: 0.35; }
.cn-ring-el {
  fill: none;
  stroke: #5B21D9;
  stroke-width: 1.5;
  opacity: 0;
  transform-box: fill-box;
  transform-origin: center;
  pointer-events: none;
}

/* ─── unsettled ─────────────────────────────────────── */
.phase-unsettled .cn-spoke { opacity: 0.14; }
.phase-unsettled .cn-ring  { opacity: 0.08; }
.phase-unsettled .cn-outer { opacity: 0.32; }
.phase-unsettled .cn-constraint { opacity: 0.5; }

.phase-unsettled .cn-dn-1 { animation: cn-d1 3.4s ease-in-out infinite alternate; }
.phase-unsettled .cn-dn-2 { animation: cn-d2 2.9s ease-in-out infinite alternate; animation-delay: -0.8s; }
.phase-unsettled .cn-dn-3 { animation: cn-d3 3.8s ease-in-out infinite alternate; animation-delay: -1.6s; }
.phase-unsettled .cn-dn-4 { animation: cn-d4 3.1s ease-in-out infinite alternate; animation-delay: -2.3s; }
.phase-unsettled .cn-dn-5 { animation: cn-d5 2.7s ease-in-out infinite alternate; animation-delay: -0.5s; }

.phase-unsettled .cn-mn-1 { animation: cn-m1 3.4s ease-in-out infinite alternate; }
.phase-unsettled .cn-mn-2 { animation: cn-m2 2.9s ease-in-out infinite alternate; animation-delay: -1.2s; }
.phase-unsettled .cn-mn-3 { animation: cn-m3 3.7s ease-in-out infinite alternate; animation-delay: -2.1s; }

.phase-unsettled .cn-spoke { animation: cn-flicker 2.3s ease-in-out infinite alternate; }
.phase-unsettled .cn-ring  { animation: cn-flicker 1.9s ease-in-out infinite alternate; animation-delay: -0.6s; }

/* ─── identified ────────────────────────────────────── */
.phase-identified .cn-outer      { opacity: 0.18; }
.phase-identified .cn-constraint { animation: cn-appear 0.9s ease-out 1 forwards; }
.phase-identified .cn-ring-el    { animation: cn-ring 1.1s ease-out 1 forwards; }
.phase-identified .cn-spoke      { opacity: 0.25; transition: opacity 0.8s ease; }
.phase-identified .cn-ring       { opacity: 0.06; transition: opacity 0.8s ease; }

/* ─── stable ────────────────────────────────────────── */
.phase-stable .cn-outer      { opacity: 0.22; }
.phase-stable .cn-constraint { transform: scale(1.18); fill: #5B21D9; opacity: 1; }
.phase-stable .cn-ring-el    { opacity: 0; transition: opacity 0.5s ease; }
.phase-stable .cn-spoke      { opacity: 0.22; }
.phase-stable .cn-ring       { opacity: 0.06; }

/* ─── keyframes ─────────────────────────────────────── */
@keyframes cn-d1 { to { transform: translate( 4px, -5px); } }
@keyframes cn-d2 { to { transform: translate( 5px,  3px); } }
@keyframes cn-d3 { to { transform: translate(-3px,  5px); } }
@keyframes cn-d4 { to { transform: translate(-5px, -2px); } }
@keyframes cn-d5 { to { transform: translate( 3px, -4px); } }

@keyframes cn-m1 { to { transform: translate( 2px, -2.5px); } }
@keyframes cn-m2 { to { transform: translate( 2.5px,  1.5px); } }
@keyframes cn-m3 { to { transform: translate(-2px,  2px); } }

@keyframes cn-flicker {
  from { opacity: 0.06; }
  to   { opacity: 0.22; }
}

@keyframes cn-appear {
  0%   { transform: scale(1);    opacity: 0.5;  fill: rgba(91,33,217,0.6); }
  45%  { transform: scale(1.38); opacity: 1;    fill: #5B21D9; }
  100% { transform: scale(1.18); opacity: 1;    fill: #5B21D9; }
}

@keyframes cn-ring {
  0%   { transform: scale(1);   opacity: 0.65; }
  100% { transform: scale(3.2); opacity: 0; }
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
    <div className={className} aria-hidden="true">
      <style>{CSS}</style>

      {/* Desktop SVG — hidden on small screens */}
      <svg
        viewBox="0 0 400 300"
        className={`phase-${phase} w-full h-auto hidden sm:block`}
        style={{ maxWidth: 460 }}
      >
        {D_SPOKES.map(([a, b]) => {
          const na = a === 0 ? D_CENTER : D_OUTER.find(n => n.id === a)
          const nb = b === 0 ? D_CENTER : D_OUTER.find(n => n.id === b)
          return (
            <line
              key={`ds-${a}-${b}`}
              x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              className="cn-edge cn-spoke"
            />
          )
        })}
        {D_RING.map(([a, b]) => {
          const na = D_OUTER.find(n => n.id === a)
          const nb = D_OUTER.find(n => n.id === b)
          return (
            <line
              key={`dr-${a}-${b}`}
              x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              className="cn-edge cn-ring"
            />
          )
        })}

        {D_OUTER.map(n => (
          <circle
            key={`dn-${n.id}`}
            cx={n.cx} cy={n.cy} r={4.5}
            className={`cn-node cn-outer cn-dn-${n.id}`}
          />
        ))}

        {/* Pulsing ring behind constraint node */}
        <circle cx={D_CENTER.cx} cy={D_CENTER.cy} r={10} className="cn-ring-el" />

        <circle
          cx={D_CENTER.cx} cy={D_CENTER.cy} r={8}
          className="cn-node cn-constraint"
        />
      </svg>

      {/* Mobile SVG — visible only on small screens */}
      <svg
        viewBox="0 0 300 240"
        className={`phase-${phase} w-full h-auto block sm:hidden`}
        style={{ maxWidth: 300 }}
      >
        {M_SPOKES.map(([a, b]) => {
          const na = a === 0 ? M_CENTER : M_OUTER.find(n => n.id === a)
          const nb = b === 0 ? M_CENTER : M_OUTER.find(n => n.id === b)
          return (
            <line
              key={`ms-${a}-${b}`}
              x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              className="cn-edge cn-spoke"
            />
          )
        })}
        {M_RING.map(([a, b]) => {
          const na = M_OUTER.find(n => n.id === a)
          const nb = M_OUTER.find(n => n.id === b)
          return (
            <line
              key={`mr-${a}-${b}`}
              x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
              className="cn-edge cn-ring"
            />
          )
        })}

        {M_OUTER.map(n => (
          <circle
            key={`mn-${n.id}`}
            cx={n.cx} cy={n.cy} r={4}
            className={`cn-node cn-outer cn-mn-${n.id}`}
          />
        ))}

        <circle cx={M_CENTER.cx} cy={M_CENTER.cy} r={9} className="cn-ring-el" />

        <circle
          cx={M_CENTER.cx} cy={M_CENTER.cy} r={7}
          className="cn-node cn-constraint"
        />
      </svg>
    </div>
  )
}
