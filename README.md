# zongyaomao.com

Personal website built with Next.js 16, React 19, and TypeScript.

## Setup

```bash
git clone https://github.com/evozong/evozong.github.io.git
cd evozong.github.io
npm install
```

Requires Node.js (LTS recommended).

## Development

```bash
npm run dev
```

Starts the Next.js dev server at `http://localhost:3000`.

## Building & Deploying

```bash
npm run build
```

Builds and exports static HTML to `docs/` (via `output: 'export'` and `distDir: 'docs'` in `next.config.ts`).

The site is hosted on GitHub Pages from the `docs/` folder on `master`. After building, commit and push:

```bash
git add docs
git commit -m "Deploy"
git push
```

## Adding Blog Posts

1. Add a `.md` file to `src/posts/`
2. Register it in `src/posts/index.ts` with a slug, title, date, and description
3. Run `npm run build` to regenerate

## Linting

```bash
npm run lint
```
