# BitFi Docs (VitePress)

This repo houses the BitFi documentation site built with VitePress. Author, preview, and publish the docs that power the BitFi handbook.

## Quick start

1) Install dependencies (Node 18+ recommended):
```bash
yarn install
```
2) Run the docs locally:
```bash
yarn dev
```
3) Build for production:
```bash
yarn build
```
4) Preview the built site:
```bash
yarn preview
```

## Useful paths

- `docs/` — all docs content. Entry point is `docs/index.md`.
- `docs/.vitepress/config.ts` — site config, nav, theme settings.
- `docs/.vitepress/theme/` — custom styles/components.
- `readme/overview.md` — product overview (previous root README copy).

## Writing content

- Author pages in Markdown under `docs/`, keeping existing folder structure (`background/`, `how-to/`, etc.).
- Use relative asset paths (place images in `docs/public/` or alongside the page).
- For math, `markdown-it-mathjax3` is available; wrap expressions with `$...$` or `$$...$$`.

## Scripts

- `yarn dev` — local dev server at `localhost:5173` (default VitePress port).
- `yarn build` — generate static site in `docs/.vitepress/dist`.
- `yarn preview` — serve the built output locally.

## Contributing

- Keep navigation and sidebar updates in `docs/.vitepress/config.ts` synchronized with new/renamed pages.
- Prefer concise pages with clear frontmatter; add brief context comments in Markdown only when it aids readers.
- Run `yarn build` before publishing to ensure the site renders without errors.
