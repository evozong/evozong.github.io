# zongyaomao.com

Personal website built with React 19, TypeScript, and Vite.

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

Starts the Vite dev server at `http://localhost:5173`.

## Building

```bash
npm run build
```

Compiles TypeScript and builds with Vite into `dist/`.

To preview the production build locally:

```bash
npm run preview
```

## Deploying

Copy the build output to `docs/`:

```bash
npm run publish
```

The site is hosted on GitHub Pages from the `docs/` folder on `master`. After publishing, commit and push the updated `docs/` folder:

```bash
git add docs
git commit -m "Deploy"
git push
```

## Linting

```bash
npm run lint
```
