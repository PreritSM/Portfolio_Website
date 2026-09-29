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

## Design tokens (extracted from the real site, not guessed)

- Background `#111111`, surface `#1e1e1e`, border `#333333`
- Text `#999999`, heading text `#ffffff`, dim text `#737373`
- Accent `#0099ff` (bright blue — **not** indigo/violet)
- Font: Inter (loaded via Google Fonts in `index.html`)
- Section eyebrow: pill badge (`rounded-full border border-border bg-surface`)
- Section heading: two-tone — first words muted gray, last word(s) white
  (see `SectionHeading` component)

These were confirmed by inspecting the live site's rendered HTML/CSS
directly (colors, font-family, border-radius, button styles), not just the
text content — a plain WebFetch text extraction loses all of this, so if
the design ever needs re-verification against the live site, prefer
fetching real HTML/computed styles over a markdown-converted summary.

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
- **Skills Sphere**: the real site renders a physics-based floating 3D
  icon cloud pulling logos from `cdn.simpleicons.org`. This is recreated
  as a simpler animated grid (`src/components/Skills.tsx`) using the same
  icon set, not the literal physics simulation. The `amazonwebservices`
  slug on simpleicons currently 404s (upstream removed it — true on the
  live site too), so that tile has a text-fallback (`onError` swaps to a
  "AWS" text badge).
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
