# ClickCollect Docs

Portal-focused documentation for ClickCollect.coffee.

## Requirements

- Node.js 20 or newer

## Local development

If your default shell is already on Node 20+:

```bash
npm install
npm run start -- --host 0.0.0.0
```

If your shell is still on Node 18, run the docs site through the Node 20 wrapper used during setup:

```bash
npx -y -p node@20 -p npm@10 npm install
npx -y -p node@20 -p npm@10 npm run start -- --host 0.0.0.0
```

Then open:

```text
http://localhost:3000/
```

## Build

```bash
npx -y -p node@20 -p npm@10 npm run build
```

## Preview the production build

If your default shell is already on Node 20+:

```bash
npm run serve -- --host 0.0.0.0
```

If your shell is still on Node 18:

```bash
npx -y -p node@20 -p npm@10 npm run serve -- --host 0.0.0.0
```

## GitHub Pages CI/CD

This repo now builds the docs site automatically on every pull request targeting `main` and uploads the generated HTML as a `docs-build` workflow artifact.

When a pull request is merged into `main`, GitHub Actions rebuilds the site and deploys the contents of `build/` to GitHub Pages.

You can also open the `Docs Pages` workflow in GitHub Actions and run it manually with `Run workflow` when `main` is selected. Manual dispatches from other branches are ignored so only `main` can publish to GitHub Pages.

### One-time repository setup

1. In GitHub, open `Settings` -> `Pages`.
2. Set the source to `GitHub Actions`.
3. If you want to keep using a custom domain such as `docs.clickcollect.coffee`, set these repository variables in `Settings` -> `Secrets and variables` -> `Actions` -> `Variables`:

```text
DOCS_SITE_URL=https://docs.clickcollect.coffee
DOCS_BASE_URL=/
```

If you do not set those variables, the workflow defaults to the standard project Pages URL:

```text
https://<owner>.github.io/<repo>/
```
