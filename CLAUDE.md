# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **Centa Partners** — a growth-advisory brand for founder-led tech businesses. It is a client-rendered single-page app whose job is to funnel visitors to the external **Grow platform** (`grow.centapartners.com.au`) and to a Calendly booking link. There is no backend, no data layer, and no test suite in this repo.

## Commands

```bash
npm run dev      # Vite dev server (default http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Serve the built dist/ locally
npm run lint     # ESLint over **/*.{js,jsx}
```

No test runner is configured. "Verifying" a change means `npm run build` (must pass) and/or `npm run dev` + visual check.

## Stack (do not swap)

Vite 8 · React 19 · React Router 7 · Tailwind CSS v4 (`@tailwindcss/vite`) · `react-helmet-async`. Plain `.jsx` — **not** TypeScript, despite `@types/*` being installed. Deployed on Vercel.

## Architecture

**Routing & shell.** `src/main.jsx` mounts `App` inside `HelmetProvider` → `BrowserRouter`. `src/App.jsx` declares all routes inside a single `<Layout>` route (`src/components/Layout.jsx` = `Nav` / `<Outlet/>` / `Footer`). `ScrollToTop` resets scroll on every navigation. This is a true SPA: `vercel.json` rewrites `/(.*)` → `/index.html` so deep links resolve to the client router. `vercel.json` also holds a `/book` → Calendly redirect.

**Adding or renaming a route touches five places — keep them in sync:**
1. `src/pages/<Page>.jsx` (the page)
2. `src/App.jsx` (`<Route>`)
3. `src/components/Nav.jsx` (`links` array)
4. `src/components/Footer.jsx` (Company column)
5. `public/sitemap.xml`

**SEO is per-page, not centralized.** Every page renders its own `<Helmet>` with title, description, canonical, and OG/Twitter tags; the Home page additionally embeds JSON-LD (`Organization` / `WebSite` / `ProfessionalService`). When editing copy, keep the `<Helmet>` canonical URL matching the route and update meta to match on-page content.

**Design system lives in CSS, not JS.** Tailwind v4 is configured CSS-first in `src/index.css` via the `@theme` block — there is no `tailwind.config.*`. Brand tokens (`--color-brand`, `--color-bg`, `--color-text-*`, `--font-sans`, `--font-mono`, etc.) defined there generate the utility classes used everywhere (`bg-brand`, `text-text-primary`, `border-border`, `font-mono`…). Change a brand color or add a design token **here**, then use the generated utility — don't hardcode hex values in components.

**Shared building blocks.** `Section` (+ named `SectionLabel`) wraps content in a max-width container with optional `dark` background; `CTABar` renders a `primary`/`secondary` button pair where each takes `{ label, href, external }` (`external` adds `target="_blank"` + `rel`). Page content (stats, steps, lists) is defined as `const` arrays at the top of each page file and mapped in JSX — follow that pattern rather than inlining repeated markup.

## Conventions

- **Voice:** the brand speaks as "we" (a firm). Do not introduce first-person singular ("I") or name individuals.
- **CTAs:** the primary conversion path is "Run the Diagnostic" → `https://grow.centapartners.com.au`. Treat Grow as the product the site sells.
- **ESLint:** `no-unused-vars` is an error except for identifiers matching `^[A-Z_]` (capitalized/constant imports may be unused).
- **Assets:** static files (logos, `favicon.svg`, `sitemap.xml`, `robots.txt`) live in `public/` and are referenced by absolute path (e.g. `/logo-white.png`).
