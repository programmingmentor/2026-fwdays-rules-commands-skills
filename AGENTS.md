# AGENTS.md

This repository is a **Slidev** presentation project for the workshop:
**“Правила, команди та навички для Agentic IDE”**.

## Environment & commands

- **Node**: 20+
- **Package manager**: npm

Common commands:

- `npm run dev` — run Slidev dev server
- `npm run build` — build production deck
- `npm run export` — export slides (PDF/PNG)

## Repo structure (high-signal)

- `slides.md` — entry point; imports modules via `src:`
- `pages/theory/` — theoretical part modules (split by section)
- `public/` — images/assets (refer as `/file.ext`)
- `layouts/` — custom layouts
- `docs/` — research docs and the recommended **Memory Bank** (`docs/memory/`)

## Content conventions (for this workshop)

- **Language**: Ukrainian + key English terms in parentheses on first mention.
- Keep slides concise; put longer citations/links into slide notes (HTML comments).
- Prefer `v-click`/`v-clicks` for progressive reveal on dense slides.
- Prefer Mermaid for diagrams when possible.

## Guardrails

- **NEVER** add secrets, tokens, or private links.
- **ASK FIRST** before deleting files or doing large cross-deck refactors.
- After non-trivial changes, run `npm run build` and fix any rendering errors.

## Memory Bank (recommended)

- Keep current work state in `docs/memory/activeContext.md` and `docs/memory/progress.md`.

