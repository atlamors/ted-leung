# Ted Leung

Personal website built with Next.js App Router, React, TypeScript, and Tailwind CSS.

The repository currently contains the project foundation and a minimal development
placeholder. The website design and content are still to be implemented.

## Local development

Use Node.js 22 and npm. On Windows, run **all Node.js and npm commands in WSL**,
including when the repository is on a Windows-mounted drive.

From a WSL terminal:

```bash
git clone https://github.com/atlamors/ted-leung.git
cd ted-leung
node -p process.platform # Must print linux.
npm ci
npm run dev
```

Open <http://localhost:3000>. For an existing checkout, start in its WSL path and
skip the clone step. `.nvmrc` records the Node.js major version.

## Validation

Run these commands from WSL:

```bash
npm run lint
npm run typecheck
npm run build
```

To preview the production build, run `npm start` after `npm run build`.

## Structure

- `src/app/page.tsx`: homepage
- `src/app/layout.tsx`: root layout and page metadata
- `src/app/globals.css`: shared styles and Tailwind entry point
- `next.config.ts`: Next.js and Tailwind Turbopack configuration

Commit `package-lock.json` with dependency updates. Environment files, build output,
and dependencies are ignored by Git. Keep credentials and private source materials
out of this public repository.

Hosting and domain configuration are not part of the initial repository setup.
