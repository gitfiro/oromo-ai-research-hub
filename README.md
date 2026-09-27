# Oromo AI Research Hub

An independent GitHub Pages companion to [Oromo AI](https://github.com/gitfiro/oromo-ai). Explore the corpus, research, roadmap and readable public documentation.

## Develop

Requires Node.js 22 or newer.

```sh
npm ci
npm run build
```

Serve `dist/` under `/oromo-ai-research-hub/` to preview the GitHub Pages base path.

## Publishing

In this repository's Settings → Pages, select **GitHub Actions** as the source. Pushes to `main` build and deploy the static website.

## Content policy

`content/` contains a reviewed snapshot of the main project's public Markdown. `content/snapshot.json` records the source revision. The main project is read-only: this repository has no workflow or credential that writes to it. Source documentation keeps its original attribution and Apache-2.0 license.

Update the snapshot only after reviewing public documentation for local paths, credentials and private information. Check the dashboard numbers against the new README and update the dated checkpoint together. Do not automatically publish arbitrary upstream files. No raw corpus data is included.

The build sanitizes rendered Markdown. The website uses no analytics or account system. The theme preference is browser-local. Fonts are requested from Google Fonts with system-font fallbacks.
