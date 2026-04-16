# Alpha & Omega DJs Static Site

This repo uses Vite + React + Tailwind and builds to a static `dist/` folder for GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build output is generated in `dist/`.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Build and deployment** source to **GitHub Actions**.
4. Push to `main` to trigger deployment.

The included workflow file (`.github/workflows/deploy-pages.yml`) publishes the static `dist/` output automatically.

## Troubleshooting MIME type errors

If you see `Failed to load module script` with `text/jsx`, GitHub Pages is serving source files instead of compiled output.

- Verify **Settings > Pages > Source** is set to **GitHub Actions**
- Check the latest deploy workflow passed
- Confirm deployed page source references `assets/index-*.js` (not `/src/main.jsx`)
- Purge CDN cache or hard refresh if you use a proxy/CDN in front of Pages
