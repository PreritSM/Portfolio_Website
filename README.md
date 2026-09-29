# Prerit Mittal — Portfolio

A single-page portfolio built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion, migrated from a Framer site to a static, GitHub Pages-ready codebase.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion for scroll/entrance animations
- lucide-react for icons

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages automatically on every push to `main`.

One-time setup:

1. Push this repo to GitHub (remote already set to `origin`).
2. In the GitHub repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

The site will be available at `https://<username>.github.io/<repo-name>/`.

`vite.config.ts` sets `base: '/Portfolio_Website/'` to match this repository's name so built asset paths resolve correctly under GitHub Pages' subpath. If you rename the repo, update `base` to match.

## Content

All copy (project descriptions, career history, skills, contact info) lives in `src/data/portfolio.ts` — edit that file to update site content without touching components.
