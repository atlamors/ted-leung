# Ted Leung

Personal website built with Next.js App Router, React, TypeScript, and Tailwind CSS.

The first full content pass includes the “Insurance as Hope” introduction,
My approach, About me, My work, Connections, and Let’s connect, followed by the
footer. The page uses Ted's supplied photography and draft first-person copy
for client review. See the [content pass](docs/content-pass.md) for the section
map and review boundaries.

## Design direction

The [design decisions](docs/design-decisions.md) record the agreed purpose,
narrative, reference roles, typography, geometry, and subtle line motif, along
with the photography choices and visual details still to resolve.

The current motif study interprets the curved bands in Ted's pocket square as
fine repeating linework in the hero. View the drawing and tonal repeat at
`/design/pocket-square-swatch.html` on the running preview.
An approved full-colour fan is being tested at the top-right corner of Ted's
outlook, with its gathered tip aligned to the horizontal divider and its coral
tip crossing above it. The right guide crops the outer ribbon. The desktop test
gives it clear space between the photographs, with the outlook text starting
ahead of the lower photo.

The mobile/tablet menu is available below 901 px: five large serif links,
an animated panel toggle, and Ted's email and phone. Section links close the
menu, restore scrolling, and transfer focus to the destination. The hero and
section eyebrows share the same uppercase type and gold marker. Desktop
navigation retains its existing treatment pending a separate design decision.

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

The Cloudflare preview forwards to port 3107. Start it with
`npm run dev -- --hostname 0.0.0.0 --port 3107` in WSL. The current tunnel hostname
is explicitly listed in `allowedDevOrigins` in `next.config.ts`, so development
assets and live updates can load through the tunnel. Update that entry if the
tunnel URL changes, then restart Next.js. Reload open preview tabs after
switching between development and production servers.

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
- `src/app/globals.css`: palette, shared styles, and Tailwind entry point
- `src/app/page.module.css`: responsive page composition
- `src/app/site-header.tsx`: responsive header and mobile menu interaction
- `src/app/site-header.module.css`: menu layout and motion
- `src/app/site-content.ts`: shared navigation destinations and contact details
- `public/images/`: selected photographs, vector motif, and approved 3D accents
- `public/design/`: the pocket-square pattern swatch for review
- `next.config.ts`: Next.js and Tailwind Turbopack configuration

Commit `package-lock.json` with dependency updates. Environment files, build output,
and dependencies are ignored by Git. Keep credentials and private source materials
out of this public repository. Original client assets in `photography/`, chat
attachments, and local review captures in `.local/` are ignored. Next.js serves
responsive, optimised versions of the selected public images.

Hosting and domain configuration are not part of the initial repository setup.
