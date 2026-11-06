# Devesh Shetty — Portfolio

A cinematic, single-page portfolio built with Next.js 15, React, TypeScript, Tailwind CSS and Framer Motion. The visual direction is a Gotham-noir title sequence: near-black surfaces, large condensed typography, a pointer-responsive searchlight, skyline artwork and one amber primary action.

## Sections

1. Hero and primary contact actions
3. About and UCD education
4. Professional experience
5. Technical skills
6. Selected projects
7. Contact

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run typecheck
npm run build
```

The supplied archive was type-checked after the source repair. A production build should be run on the target machine after `npm install`; the original archive included Windows-only native Next.js compiler binaries, so a Linux build environment cannot reuse those binaries.

## Before publishing

- Add the final PDF CV as `public/Devesh-Shetty-CV.pdf` and change the hero's “Request CV” action to a direct download if desired. It currently opens an email request rather than linking to a placeholder URL.
- Replace the general GitHub profile link in any project details only when the exact repository URL is known. No project-specific repository URLs have been invented.
- The contact form intentionally opens the visitor's email application (`mailto:`); it does not claim to submit to a server.
- Confirm the factual metrics and role descriptions against the latest CV before deployment.

## Deployment

The project includes `netlify.toml` for Netlify's Next.js runtime plugin. Connect the repository to Netlify and use the configured build command.
