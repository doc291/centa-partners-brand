# Homepage Redesign Spec
**Date:** 2026-05-01
**Status:** Approved — ready for implementation

---

## Objective

Redesign the Centa Partners homepage (`/`) to establish authority within 5 seconds, communicate the constraint-based growth model, and drive users to run the diagnostic on the Grow platform.

---

## Scope

**Files changed:**
- `src/pages/Home.jsx` — complete rewrite
- `src/components/ConstraintNetwork.jsx` — new component

**Files not touched:**
- `src/index.css` — no global variable changes
- `src/App.jsx` — routing unchanged
- `src/components/Nav.jsx` — unchanged
- `src/components/Footer.jsx` — unchanged
- `src/components/Layout.jsx` — unchanged
- `src/pages/About.jsx`, `HowWeWork.jsx`, `Advisory.jsx` — unchanged
- `vercel.json` — unchanged
- `package.json` — no new dependencies

---

## Copy (LOCKED — DO NOT ALTER)

All copy below is used verbatim. No rewrites, no paraphrasing, no additions.

### Hero
```
Most founders don't have a growth problem.
They have a clarity problem.

The business is moving. But it is harder than it should be.
Revenue is inconsistent. The team is busy but not aligned.
Every decision still comes back to you.

It's not effort. It's direction.
```
CTA: **Run the Diagnostic** → `https://grow.centapartners.com.au` (external, `_blank`)

### Why Businesses Stay Stuck
```
Every business has a constraint.

One thing slowing everything else down.

Revenue. Hiring. Positioning. Delivery.

You feel the pressure everywhere.
But the problem is usually in one place.

Most founders don't fix it.

They add more:
More tools. More frameworks. More advice.

Nothing changes.

Because until the constraint is clear,
everything else is guesswork.
```

### Our Approach
```
We think in constraints.

Not symptoms. Not surface fixes.

Find the one thing holding the business back.
Fix it. Everything else moves with it.

We don't build strategy decks.
We move one number. Every week.
```

### Proof
```
What this looks like in practice:

• Took a business from loss to profit in 4 months
• Delivered $4.2M EBITDA against a $2M target
• Led and scaled teams across $25M+ in recurring revenue

This isn't theory.

It's how businesses actually move.
```

### The Platform
```
The fastest way to find what's holding your business back

Centa Clarity is a scored diagnostic built for founder-led tech businesses.

10 minutes. Five domains. One constraint identified.

Most founders already know something is wrong.
This shows you exactly where.

Then we fix it.

Grow takes that constraint and turns it into execution.

• One metric
• Weekly commitments
• Proof of work
• Measurable progress

This is where most tools stop.

This is where you actually move.
```
CTA: **Run the Diagnostic** → `https://grow.centapartners.com.au` (external, `_blank`)

### How It Works
```
Clarity → Focus → Execution → Growth

If clarity is missing, nothing moves.
If focus is broken, execution drops.
If execution drops, growth stalls.

Fix the constraint. The rest follows.
```

### Direct Advisory
```
For founders who don't have time to get this wrong

Some businesses don't need a diagnostic.
They need to move now.

Centa Catalyst is direct advisory with an operator who has built, scaled, and turned businesses around.

No strategy decks.
No discovery phases.
We identify the constraint and execute.
```
CTA: **Talk to Us** → `/advisory` (internal route, verified in App.jsx line 18)

### Final CTA
```
Stop guessing.

Find the constraint. Fix it.
```
CTA: **Run the Diagnostic** → `https://grow.centapartners.com.au` (external, `_blank`)

---

## ConstraintNetwork Component

**File:** `src/components/ConstraintNetwork.jsx`

**Purpose:** SVG node-network visual that plays a three-state animation representing "finding the constraint". Self-contained — holds its own state, no props required (optional `className` prop for positioning).

### SVG Layout
- 6 nodes in a loose radial arrangement around one central node
- Nodes connected by lines (edges)
- ViewBox-based sizing; fully responsive
- Node 0 (centre) is the constraint node

### Animation States

| State | CSS class | Timing | Description |
|---|---|---|---|
| `unsettled` | `.state-unsettled` | mount | All 6 nodes drift gently via `@keyframes`. Lines pulse at mismatched rhythms. Nodes equal weight. |
| `identified` | `.state-identified` | +1800ms | Constraint node (node 0) expands, glows purple, emits pulsing ring. Other 5 nodes drop to 25% opacity. Off-node lines dim. |
| `stable` | `.state-stable` | +4200ms | Animation settles. Constraint node stays dominant, stops pulsing. Lines go steady. Network resolved. |

**State transitions:** `useEffect` + `setTimeout` in the component. No scroll handlers. No external deps.

**Why setTimeout over scroll:** The network lives in the hero. Once the user scrolls past it, the SVG is off-screen — scroll-triggered state changes would be invisible. Auto-animation plays the narrative for every user including mobile.

### CSS Animation Strategy
- `@keyframes drift` — subtle translate oscillation for unsettled nodes
- `@keyframes pulse-ring` — expanding ring opacity fade for identified state
- `@keyframes node-glow` — colour intensity cycle on constraint node
- State classes control which `animation` declarations are active
- All transitions use `transition: opacity 0.8s ease, transform 0.6s ease`
- Animations defined in a `<style>` tag inside the component (scoped, no global CSS pollution)

---

## Homepage Sections (Home.jsx)

The page wrapper gets `style={{ backgroundColor: '#0B0B0F' }}` inline — keeping `--color-bg` global variable unchanged so other pages are unaffected.

Sections in order:

### 1. Hero
- Full viewport (`min-h-screen`), flex layout
- Desktop: two-column — text left, ConstraintNetwork right
- Mobile: single column — text first, network below
- Headline: ~56px desktop / ~36px mobile, font-bold, white
- Two-line headline split: line 1 white, line 2 brand purple (`#5B21D9`)
- Body text: ~18px, muted colour
- "It's not effort. It's direction." — brand purple, medium weight
- CTA: primary button (existing `bg-brand` style)
- Section padding clears fixed Nav (pt-28 md:pt-36)

### 2. Why Businesses Stay Stuck
- Dark surface section (`bg-[#0B0B0F]` with `border-t border-border`)
- Section label: "Why businesses stay stuck"
- "They add more:" list rendered as indented lines with dimmer text (not bullet points — copy reads as prose-list)
- "Because until the constraint is clear, / everything else is guesswork." — treated as a closing statement with increased visual weight

### 3. Our Approach
- Slightly lighter surface (`bg-surface` from existing variable)
- Section label: "Our approach"
- "We move one number. Every week." — left-bordered pull quote, brand purple left border

### 4. Proof
- Dark section
- Section label: "Proof"
- "What this looks like in practice:" as intro line
- Three outcomes as `<ul>` with brand purple dot markers, each item on its own line, bold white for the stat
- "This isn't theory. / It's how businesses actually move." as closing block

### 5. The Platform
- Section label: "The platform"
- Centa Clarity block: prose paragraph
- "Then we fix it." — brand accent line, separates Clarity from Grow
- Grow block: four bullets styled as compact feature chips (pill-shaped, `border border-border` background)
- "This is where most tools stop. / This is where you actually move." — closing statement
- CTABar: primary "Run the Diagnostic" → external Grow platform

### 6. How It Works
- Section label: "How it works"
- Four-step flow: `Clarity → Focus → Execution → Growth`
  - Desktop: horizontal row with arrow separators
  - Mobile: vertical stack
- Each word bold white, descriptor text below in muted colour
- Closing copy below the flow diagram

### 7. Direct Advisory
- Section label: "Direct advisory"
- "For founders who don't have time to get this wrong" as `<h2>`
- Prose paragraphs
- CTABar: primary "Talk to Us" → `/advisory`

### 8. Final CTA
- Full-width section, darkest background (`#0B0B0F`)
- "Stop guessing." at ~48px desktop, centred
- "Find the constraint. Fix it." subline, muted
- Single primary CTA button: "Run the Diagnostic"

---

## Styling Rules

- Background: `#0B0B0F` applied inline on page wrapper only
- Accent: `#5B21D9` via existing `text-brand` / `bg-brand` Tailwind utilities
- Typography: DM Sans (already loaded), no new fonts
- All section alternation via existing `Section` component with `dark` prop
- Existing `CTABar` component reused for CTA rows
- Existing `SectionLabel` component reused for section labels
- No new CSS in `index.css`
- ConstraintNetwork animations scoped inside the component

---

## SEO

`<Helmet>` block preserved. Existing meta title/description/OG/Twitter/JSON-LD stays in place from the current `Home.jsx`. No SEO changes required.

---

## Performance Constraints

- No new npm dependencies
- No canvas, WebGL, or 3D libraries
- SVG node network: static markup, CSS-only animation
- All images already in `/public` — no new assets
- Mobile-first responsive layout throughout

---

## Out of Scope

- Nav, Footer, Layout changes
- Other page changes (About, HowWeWork, Advisory)
- Global CSS variable changes
- Backend, API, routing changes
- Copy changes of any kind
