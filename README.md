# Ashik Sharon M — Portfolio

Single-page animated portfolio. React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds the site and deploys it to GitHub
Pages automatically. **One-time setup**: in the repo's Settings → Pages, set "Source" to
"GitHub Actions" (it currently defaults to the legacy branch-build mode).

Live at: https://ashiksharonm.github.io/ashik-portfolio/

## Content

All copy and project data live in `src/data/*.ts` (typed, no copy hardcoded in JSX) —
edit those files to update projects, experience, certifications, etc.

## Theme

Light is the default theme (per the redesigned look), with a dark mode toggle in the
nav (persisted to `localStorage`, defaults to system preference on first visit). All
colors are CSS custom properties defined once in `src/index.css` — `@theme` sets the
light values, `.dark { ... }` overrides the same variable names for dark mode. No
component file needs a `dark:` utility variant; every `bg-surface`/`text-on-surface`/etc.
class automatically resolves to the active theme's value.

## Open items before this fully replaces the old site

- **Resume PDF**: the "Download CV" button in `src/sections/Hero.tsx` links to
  `/ashik-portfolio/resume.pdf`, which doesn't exist yet. Drop a PDF at
  `public/resume.pdf` to wire it up.
- **Contact form**: `src/sections/Contact.tsx` posts to a placeholder Formspree endpoint.
  Create a form at [formspree.io](https://formspree.io) using `sharonashik20@gmail.com`,
  then replace `FORMSPREE_ENDPOINT` in that file with the real endpoint URL.
- **Custom domain**: not configured — the site intentionally stays on the free
  `ashiksharonm.github.io/ashik-portfolio` URL. If a domain is added later, create a
  `public/CNAME` file with the domain and update the canonical/OG URLs in `index.html`,
  `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt`.
- **Social share image**: currently reuses `profile.jpg` for `og:image`/`twitter:image`.
  A dedicated 1200×630 crop would render more cleanly in link previews.
- **Project cover images**: generated title cards. Run `node scripts/gen-covers.mjs` after
  adding or renaming a project in `src/data/projects.ts` to write `public/covers/<slug>.svg`.
  Replace a card with a real screenshot by dropping a file in `public/covers/` and pointing
  `coverImageUrl()` at it.
