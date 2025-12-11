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
- Embed guides (Scribe/Tango) with a responsive wrapper so iframes scale on mobile:
  ```md
  <div style="position: relative; width: 100%; max-width: 100%; aspect-ratio: 4 / 5; min-height: 480px;">
    <iframe
      src="https://scribehow.com/embed/...your_id..."
      style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 12px;"
      allow="fullscreen"
    ></iframe>
  </div>

  [Open in a new tab](https://scribehow.com/viewer/...){target="_blank" rel="noreferrer"}
  ```
  Tango embeds use the same wrapper; add their sandbox/referrerpolicy when required:
  ```md
  <iframe
    src="https://app.tango.us/app/embed/...your_id..."
    sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen="allowfullscreen"
  ></iframe>
  ```

## Scripts

- `yarn dev` — local dev server at `localhost:5173` (default VitePress port).
- `yarn build` — generate static site in `docs/.vitepress/dist`.
- `yarn preview` — serve the built output locally.

## Contributing

- Keep navigation and sidebar updates in `docs/.vitepress/config.ts` synchronized with new/renamed pages.
- Prefer concise pages with clear frontmatter; add brief context comments in Markdown only when it aids readers.
- Run `yarn build` before publishing to ensure the site renders without errors.
