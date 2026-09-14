# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This is "Reland" (`package.json` name: `raland`), a Next.js (Pages Router) port of an HTML real estate/agency template. The original static HTML template — CSS, JS vendor libs, syntax-highlighted docs — lives under `doc/` for reference, and the original template zip (`Reland-nextjs-v2.0.0-unzip-first.zip`) still sits at the repo root as the pristine source; treat it as reference material, not something to edit or delete.

The repo is **not currently a git repository** — there is no version history to consult with `git log`/`git blame`.

## Commands

```bash
npm run dev      # next dev — local dev server
npm run build    # next build
npm run start    # next start — serve production build
npm run lint     # next lint
```

There is no test suite and no `sass` source to compile — `npm run sass` is a stale script pointing at `public/assets/scss/main.scss`, which does not exist in this repo (all CSS is pre-compiled under `public/assets/css/`). Don't try to run it or "fix" it unless asked; it's leftover from the original template build.

## Architecture

**Multi-variant demo structure.** This is a template with many interchangeable variants of the same building blocks, not a single opinionated design. Expect this pattern repeatedly:
- `pages/index.js` through `pages/index-8.js` — 8 homepage variants, each composing a different mix of section components.
- `components/layout/Header1.js` ... `Header8.js` — 8 header variants, all rendered (conditionally) by `components/layout/Layout.js` via a `headerStyle` prop (`1`–`8`).
- `components/sections/Banner1.js`...`Banner7.js`, `Project.js`...`Project5.js`, `Blog.js`...`Blog3.js`, `Testimonial.js`/`Testimonial2.js`, `Newsletter.js`/`Newsletter2.js`, `Services.js`/`Services2.js` — numbered variants of the same section, selected per-page by whichever page imports them.

When asked to change "the homepage" or "the header," check *which* numbered variant is actually in use on the target page before editing — editing the wrong numbered file is the most common way to make a no-op change here.

**Page composition pattern.** Every page follows the same shape:
```jsx
<Layout headerStyle={N} headTitle="..." breadcrumbTitle="...">
  <SectionA />
  <SectionB />
  ...
</Layout>
```
`Layout` (`components/layout/Layout.js`) owns cross-cutting concerns: which header variant renders, the mobile menu open/close state (`handleMobileMenu`, passed down to headers), scroll-based header state, the optional breadcrumb, footer, back-to-top button, and WOW.js scroll-animation init. Page-specific content is only what's passed as `children`.

**Data-driven detail pages.** `util/*.json` (`project.json`, `team.json`, `blog.json`) are static arrays acting as a mock DB. Dynamic routes (`pages/project/[id].js`, `pages/team/[id].js`, `pages/blog/[id].js`) read `router.query.id`, `.find()` the matching record client-side in a `useEffect`, and render `null`/nothing until found — there's no `getStaticProps`/`getServerSideProps` data fetching anywhere. List pages (e.g. `components/elements/ProjectFilter.js`) filter/paginate the same JSON client-side with `useState`/`useEffect`, deriving filter option lists via `[...new Set(...)]` over the dataset. When adding a new record, add it to the relevant `util/*.json` file — there's no CMS or API layer.

**Global CSS, not CSS Modules.** All styling is plain global CSS imported once in `pages/_app.js` from `public/assets/css/*.css` (bootstrap, fontawesome, slick, swiper, animate, odometer, magnific-popup, plus the template's own `style.css`/`responsive.css`/`spacing.css`). Swiper's own CSS is imported separately at the top of `_app.js`. New styling should extend `public/assets/css/style.css` or use inline/className-based Bootstrap utility classes already in use — there is no CSS-in-JS or module-scoped styling convention here.

**Third-party UI libs in play:** `swiper` (carousels, via `swiper/react`), `react-slick`/`slick-carousel` (other carousels), `react-modal-video` (video popups, see `components/elements/ViodePopup.js`), `wowjs` (scroll-triggered animations, initialized once in `Layout.js`), `react-countup` (animated counters, see `components/elements/CounterUp.js`). Prefer these existing libs over adding new ones for equivalent functionality.

**Path alias:** `@/*` maps to the repo root (`jsconfig.json`), so `@/components/...` and `@/util/...` both work; existing files inconsistently mix `@/...` imports and relative `../../` imports — either is fine, but prefer matching the style already used in the file you're editing.

**Preloader/mount gating:** `pages/_app.js` withholds rendering the actual page behind a `Preloader` for a hardcoded 1000ms `setTimeout` on every navigation. This is template-original behavior, not a bug — don't "fix" it as dead code without confirming with the user first.
