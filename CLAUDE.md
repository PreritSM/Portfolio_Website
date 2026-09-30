# Personal Portfolio — Prerit Mittal

Static single-page portfolio, migrated from a Framer site
(`prerit-mittal-portfolio.framer.website`) to a Vite + React + TypeScript
codebase for GitHub Pages hosting.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite` (no separate `tailwind.config.js` —
  theme tokens live in `src/index.css` under `@theme`)
- Framer Motion for scroll/entrance animations
- lucide-react for icons (note: brand icons like `Linkedin`/`Github` were
  removed upstream in this major version — see "Icons" below)
- `oxlint` for linting (not eslint — the scaffold used oxlint by default)

## Structure

```
src/
  data/portfolio.ts       All site copy (bio, projects, career, skills, links).
                           Edit this file to change content — components are
                           purely presentational and read from here.
  types/portfolio.ts      Types for the data above.
  components/
    Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer
    SectionHeader.tsx     Shared `SectionBadge` (pill eyebrow) and
                           `SectionHeading` (two-tone muted+white heading) —
                           reused across sections to match the real site's
                           consistent motif.
  utils/scrollToId.ts     Smooth-scroll nav helper.
  index.css               Tailwind v4 `@theme` tokens (colors, fonts) +
                           global resets + marquee keyframes.
```

Section anchors on the page: `#hero #about #projects #skills #career #contact`.
Nav only links to Projects/About/Contact/Resume — Skills and Career are
reachable by scrolling only, matching the real site.

## Design tokens

The original tokens below were extracted from the live Framer site. The
project has since intentionally diverged from a 1:1 Framer replica toward
its own visual system (see "Visual system" below) — content/copy is still
transcribed verbatim from the Framer site, but colors, card treatment, and
the Hero background are now original design decisions, not scraped values.

- Background `#0b0e14`, surface `#131826`, border `#232a39` (navy-tinted
  dark palette — moved off the original flat grayscale `#111111`/`#1e1e1e`
  to read as less of a direct Framer clone)
- Text `#aeb8c7`, heading text `#eef1f7`, dim text `#7c8698`
- Accent `#0099ff` (bright blue — **not** indigo/violet — kept from the
  original Framer site by deliberate choice even as the rest of the
  palette moved away from it)
- Font: Inter (body/headings) + JetBrains Mono (tags, metrics, labels),
  both loaded via Google Fonts in `index.html`
- Section eyebrow: pill badge (`rounded-full border border-border bg-surface`)
- Section heading: two-tone — first words muted gray, last word(s) white
  (see `SectionHeading` component)

If the design ever needs re-verification against the *original Framer
content* (copy, structure), prefer fetching real HTML/computed styles over
a markdown-converted summary — a plain WebFetch text extraction loses
colors, font-family, border-radius, and button styles. This does not apply
to the visual system itself (palette/glass/wave), which is now maintained
independently of the Framer site.

## Visual system (post-Framer-replica redesign)

Partly inspired by the skills/card layout on
`shahzeb-jadoon.github.io`, adapted to this site's own blue accent rather
than copied wholesale:

- **`.glass` utility** (`src/index.css`): the shared frosted-card look —
  translucent background, `backdrop-filter: blur(14px) saturate(120%)`,
  soft `rgba(255,255,255,.1)` border, layered shadow. Applied via
  `className="glass ..."` alongside Tailwind layout/radius utilities
  (don't also set `border`/`bg-surface` on the same element — `.glass`
  already provides both). Currently used on: Skills cards, Projects
  focus-area buttons + project cards, About's marquee panel.
- **Hero wave** (`.hero-wave` in `src/index.css`, markup in `Hero.tsx`):
  three absolutely-positioned, differently-timed rotating circles
  (`accent`-blue base with dark blobs), replacing the old static radial
  gradient. Respects `prefers-reduced-motion` (animation disabled). A
  radial fade-to-`--color-bg` overlay sits above it so the wave dissolves
  into the rest of the page instead of cutting off hard.
- Skills section: previously an animated "Skills Sphere" pulling icons
  from `cdn.simpleicons.org` — **removed**. Replaced with a categorized
  `skillGroups` grid (`SkillGroup[]` in `types/portfolio.ts`, data in
  `data/portfolio.ts`) rendered as `.glass` cards with monospace pill
  tags, one card per category (Languages & Tools, Frameworks &
  Libraries, Cloud & MLOps, DL & ML Techniques, Data Engineering &
  Visualization, Agentic AI & RAG). The old `SkillIcon`/`skillIcons`
  export no longer exists.

When extending the visual system to more sections (Navbar, Contact,
Footer haven't been touched yet), reuse `.glass` rather than inventing a
new card style, and keep the accent at `#0099ff` unless explicitly asked
to change it.

## Content accuracy

All copy in `src/data/portfolio.ts` (bio paragraphs, project "Project
details" / "What I did" breakdowns, career bullets, contact copy) was
transcribed verbatim from the live site's rendered HTML, not paraphrased.
If the live site changes, re-extract exact text rather than summarizing —
this project intentionally mirrors the source content 1:1.

## Known quirks

- **lucide-react brand icons removed**: this project's installed
  `lucide-react` version dropped `Linkedin`/`Github`/etc. Where a brand
  icon was needed we either used a generic icon (e.g. `ArrowUpRight` for
  the "Connect with me" CTA, matching the real site) or would need a
  hand-rolled inline SVG. Check `node_modules/lucide-react/dist/lucide-react.d.ts`
  before assuming an icon export exists.
- **Skills section no longer matches the Framer site**: the real site
  renders a physics-based floating 3D icon cloud pulling logos from
  `cdn.simpleicons.org`. This project replaced that entirely with a
  categorized `skillGroups` card grid (see "Visual system" above) — this
  is a deliberate content/UX departure, not just a simplification, so
  don't try to re-sync it with the live Framer site's sphere.
- **Portrait photo**: `src/data/portfolio.ts` `portraitUrl` hotlinks the
  original photo from `framerusercontent.com`. This works but depends on
  Framer's CDN staying up. For a fully independent deploy, download the
  image and serve it from `public/` instead.
- **Resume**: no resume PDF is bundled locally — `resumeUrl` in
  `portfolio.ts` links out to the user's Google Drive file, matching the
  real site's "Resume/CV" behavior. There is no `public/resume.pdf`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages
on every push to `main` (requires **Settings → Pages → Source: GitHub
Actions** to be set once in the repo). `vite.config.ts` sets
`base: '/Portfolio_Website/'` to match the GitHub repo name
(`PreritSM/Portfolio_Website`) — update this if the repo is ever renamed.

## Verifying changes

No test suite exists (none needed for a static content site). To verify:

```bash
npm run build   # tsc -b && vite build — catches type errors
npm run lint    # oxlint
npm run dev     # visually check in a browser
```

When changing layout/visuals, prefer actually driving a headless browser
(Playwright) to screenshot the result rather than trusting the build alone —
`npm run build` only proves it compiles, not that it renders correctly.
