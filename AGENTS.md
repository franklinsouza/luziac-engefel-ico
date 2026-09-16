# AGENTS.md

Guidance for working in this repository.

## What this is

Next.js **Pages Router** port of the "Reland" HTML real estate/agency template (`package.json` name: `raland`). The original static template — CSS, JS vendor libs, syntax-highlighted docs — lives under `doc/`, and the pristine template zip (`Reland-nextjs-v2.0.0-unzip-first.zip`) sits at the repo root. Treat both as reference material, never edit or delete.

**Active customization (most important context):** the homepage is being rebuilt as a landing page for "Edifício ICÓ Real Parque", a São Paulo apartment building sold by Engefel. The full briefing is `content.md` (Portuguese) — follow it for all homepage copy/sections. `pages/index.js` is the live page; `components/sections/Hero.js` is a hand-written custom hero (it replaced the deleted template `Slider.js`). All other `index-2.js`…`index-8.js` pages and numbered section components are untouched template demos, not the live site — don't treat edits to them as affecting the landing page.

## Commands

```bash
npm run dev      # next dev
npm run build    # next build
npm run start    # next start
npm run lint     # next lint
```

- No test suite. `npm run lint` is currently broken (`next lint` errors with "Invalid project directory … /lint" — there is no eslint config file); verify with `npm run build` instead.
- `npm run sass` is a stale template script pointing at `public/assets/scss/main.scss`, which does **not** exist (all CSS is pre-compiled under `public/assets/css/`). Don't run or "fix" it unless asked.
- `.npmrc` sets `legacy-peer-deps=true` — keep it; some template deps are old.
- Next 16.1.1, React 19, node 26. `reactStrictMode: true` in `next.config.js`.

## Git

This repo **is** a git repo (branch `main`, remote `origin/main`) — `CLAUDE.md`'s old "not a git repo" note is stale. Currently there is one commit (`Initial`) plus uncommitted landing-page work (new `Hero.js`, deleted `Slider.js`, modified `index.js`). Do not commit unless asked.

## Architecture

**Multi-variant demo structure.** The template ships numbered variants of the same building block. Check *which* variant a page actually imports before editing — editing the wrong numbered file is the most common no-op mistake:
- `pages/index.js`…`index-8.js` — homepage variants; `components/layout/Header1.js`…`Header8.js` chosen by `Layout`'s `headerStyle` prop (1–8).
- Section variants: `Banner1–7`, `Project–Project5`, `Blog–Blog3`, `Testimonial/Testimonial2`, `Newsletter/Newsletter2`, `Services/Services2`.

**Page composition.** Every page is `<Layout headerStyle={N} headTitle="…" breadcrumbTitle="…">…children…</Layout>`. `components/layout/Layout.js` owns cross-cutting concerns: header selection, mobile-menu open/close (`handleMobileMenu`), scroll header state, optional breadcrumb, footer, `BackToTop`, and WOW.js init. Page content is only the `children`.

**Data-driven detail pages.** `util/*.json` (`project.json`, `team.json`, `blog.json`) are static arrays acting as a mock DB. Dynamic routes (`pages/project/[id].js`, `team/[id].js`, `blog/[id].js`) resolve records client-side in a `useEffect` (render `null` until found) — there is **no** `getStaticProps`/`getServerSideProps` anywhere. List components (e.g. `components/elements/ProjectFilter.js`) filter/paginate the same JSON in `useState`/`useEffect`. Add new records to the JSON files; there is no CMS/API layer.

**Global CSS only.** All styling is global CSS imported once in `pages/_app.js` from `public/assets/css/*.css` (bootstrap, fontawesome, slick, swiper, animate, odometer, magnific-popup, plus template `style.css`/`responsive.css`/`spacing.css`; swiper CSS imported separately at the top of `_app.js`). Extend `public/assets/css/style.css` or use Bootstrap utility classes. No CSS-in-JS, no CSS Modules.

**Third-party UI libs already in use** — prefer these over new deps: `swiper` (`swiper/react`), `react-slick`/`slick-carousel`, `react-modal-video` (see `components/elements/ViodePopup.js`, note the typo in the filename), `wowjs` (init once in `Layout.js`), `react-countup` (`components/elements/CounterUp.js`).

**Path alias.** `@/*` → repo root (`jsconfig.json`), so `@/components/...` and `@/util/...` work; existing files mix `@/` and relative imports — match the file you're editing.

**Preloader/mount gating.** `pages/_app.js` holds rendering behind a `Preloader` via a hardcoded 1000ms `setTimeout` on every navigation. Template-original behavior, not a bug — don't remove it without confirming with the user.

## Style

- Do not add comments to code unless asked.
- No emojis unless requested.