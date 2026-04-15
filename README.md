# Alpha & Omega DJs Static Site

This repo now uses Vite + React + Tailwind and builds to a static `dist/` folder that can be deployed to GitHub Pages.

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

