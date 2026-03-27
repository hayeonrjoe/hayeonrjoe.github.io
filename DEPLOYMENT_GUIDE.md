# Deployment Guide

This project is a Vite + React JavaScript site deployed to GitHub Pages.

## Current Routes

- `/` → Home
- `/projects` → Projects
- `/photos` → Photos

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm
- Git configured with push access to the repository

## Install

```bash
cd d:\GitHub\hayeonrjoe.github.io\my-personal-website
npm install
```

## Run Locally

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Preview Production Build

```bash
npm run preview
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Runs the production build
2. Publishes `dist/` to the `gh-pages` branch

Your site is then served from: `https://hayeonrjoe.github.io/`

## Content Update Locations

- Home page text: `src/pages/HomePage.jsx`
- Projects content: `src/pages/ProjectsPage.jsx`
- Photos content: `src/pages/PhotosPage.jsx`
- News entries: `src/data/news.js`
- Navigation/Footer: `src/components/`

## Troubleshooting

### Port already in use

```bash
npm run dev -- --port 5174
```

### Clean install (PowerShell)

```powershell
Remove-Item -Recurse -Force node_modules, dist
npm install
```

### Deployment not updating

- Confirm your changes are saved
- Re-run `npm run build` and `npm run deploy`
- Check repository settings → Pages to ensure `gh-pages` is the published branch
