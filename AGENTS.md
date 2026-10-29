# Project instructions

- Keep changes scoped to the user's current request.
- Run all project Node.js and package tooling in WSL, even for a Windows-mounted
  checkout. Before the first Node-related command, verify that
  `node -p process.platform` prints `linux`. Never fall back to Windows Node.
- Use the existing Next.js App Router, TypeScript, and Tailwind setup.
- Visually review UI changes in the browser at desktop, tablet, and mobile sizes
  before reporting completion. Check applicable interaction states as well.
- Run the lightest meaningful validation. For the app foundation, use
  `npm run lint`, `npm run typecheck`, and `npm run build` in WSL.
- Keep credentials and private client source documents out of this public repo.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
