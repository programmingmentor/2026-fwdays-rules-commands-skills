# review-deck

Review changes in this **Slidev workshop deck** (`slides.md` + `pages/**` + Vue/TS helpers) for:
- **syntax/build correctness**
- **project conventions**
- **content quality** (not just code style)

## What to review (input)
- Prefer a **git diff** (staged/unstaged) or a **list of changed files**.
- If you only pasted a snippet, review that snippet but call out any missing context you’d need.

## Review checklist (project-specific)

### 1) Build/render blockers (Slidev)
- Frontmatter is valid (`---`), no broken slide separators.
- `slides.md` imports (`src:`) resolve; referenced module files exist.
- Mermaid diagrams are valid and readable on a slide (small graph, clear labels).
- Asset paths use `/...` (from `public/`) and the files actually exist.
- No raw long links dumped on slides; move links/citations to **slide notes** as HTML comments when possible.

### 2) Vue/TS quality (components/layouts/snippets)
- Vue SFCs use **Composition API** with `<script setup lang="ts">` (no Options API).
- Props/state are typed; avoid `any`; use `import type` for type-only imports.
- Prefer **UnoCSS utilities**; use `<style scoped>` only when utilities are insufficient.
- Keep components/layouts small and single-purpose; extract reusable logic to helpers (e.g. `layouts/layoutHelper.ts`).

### 3) Content quality (this workshop’s conventions)
- Slide text is **Ukrainian-first**; on first mention add key English term in parentheses (e.g., “постійний контекст (persistent context)”).
- Slides are concise; if a list is dense (>4 bullets), use `v-click`/`v-clicks` or split the slide.
- Claims that sound factual/vendor-specific are either phrased carefully or supported via a source in notes (HTML comment).
- Terminology is consistent across the deck (Rules / Commands / Skills / Workflows / Memory Bank).

### 4) Platform notes (Windows + Git Bash)
- Any shell snippets avoid Windows `nul` redirects (`>nul`, `2>nul`). Use `>/dev/null` / `2>/dev/null` for Git Bash.
- Repo commands use npm (`npm run dev`, `npm run build`, `npm run export`) and Node 20+ assumptions.

## Output format (how to write the review)
Write feedback in **Ukrainian** (technical identifiers stay in English).

Return sections:
1) **Summary** (1–2 sentences)
2) **Blockers** (must-fix)
3) **Major** (should-fix)
4) **Minor / Nits**
5) **Suggested edits** (concrete rewrite proposals or patch-like snippets)

## Optional verification (if tools are available)
- Run `npm run build` and report any errors (quote the exact error lines + which file/slide they map to).
