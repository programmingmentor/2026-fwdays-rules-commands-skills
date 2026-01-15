---
name: Ralph loop agent bonus section
overview: Add a concise “bonus” slide section about Vercel Labs’ `ralph-loop-agent` (continuous autonomy / outer verification loop) and wire it into the Slidev deck in a natural place before the final wrap-up.
todos:
  - id: bonus-docs
    content: Fetch up-to-date `ralph-loop-agent` API + example snippet (Context7; fallback to README).
    status: pending
  - id: bonus-slides
    content: Create `pages/bonus/00-ralph-loop-agent.md` with 4–6 concise slides (v-clicks + Mermaid + TypeScript example).
    status: pending
  - id: wire-into-deck
    content: Update `slides.md` to include the bonus module between 08 and 09; update wrap-up sources list.
    status: pending
  - id: build-check
    content: Run `npm run build` and fix any rendering errors.
    status: pending
---

### Goal

- Add a **bonus part** about [`vercel-labs/ralph-loop-agent`](https://github.com/vercel-labs/ralph-loop-agent) that fits the workshop narrative (rules/commands/skills + Plan→Act→Verify→Update) and renders cleanly in Slidev.

### Where it will live in the deck

- Insert the bonus section **between**:
- [`pages/theory/08-requirements-to-rules.md`](pages/theory/08-requirements-to-rules.md) and
- [`pages/theory/09-wrap-up.md`](pages/theory/09-wrap-up.md)

This keeps **Wrap-up/Q&A** as the true ending.

### Files to change

- [`slides.md`](slides.md)
- Add a new `src:` include for the bonus module right after the `08` include and before `09`.
- **New**: [`pages/bonus/00-ralph-loop-agent.md`](pages/bonus/00-ralph-loop-agent.md)
- 4–6 slides, concise, with `v-clicks` and one Mermaid diagram.
- [`pages/theory/09-wrap-up.md`](pages/theory/09-wrap-up.md)
- Add a “further reading” bullet for `ralph-loop-agent` in the Sources slide.

### Bonus section slide outline (content)

- **Slide 1**: “Бонус: Ralph Loop Agent (continuous autonomy)” + what it is in 1–2 bullets.
- **Slide 2**: Why standard tool-loops often fail: verification, retries, long-running refactors.
- **Slide 3**: Pattern: **outer loop** that runs until `verifyCompletion` passes + feedback injection (Mermaid diagram).
- **Slide 4**: Minimal API/usage example (TypeScript) highlighting `stopWhen` + `verifyCompletion`.
- **Slide 5**: Mapping to workshop: Plan→Act→Verify→Update as a productized loop; “verify” = build/test/lint gates.
- **Optional Slide 6**: Safety notes: budgets (iterations/tokens/cost), “experimental” caveat, avoiding infinite loops.

### Source accuracy

- Before writing the final code snippet, I’ll **pull the latest API shape** via the Context7 docs tool (fallback: repo README) so the example matches current usage.

### Verification

- Run `npm run build` and fix any Slidev rendering/Markdown/Mermaid issues introduced by the new module/include.
