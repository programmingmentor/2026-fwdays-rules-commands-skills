# SKILLS.md

This file is a **catalog of repeatable workflows** (“skills”) for working on this Slidev deck.

Use it as a team reference: _when to use a skill_, _what inputs it needs_, and _what “done” looks like_.

---

## skill-theory-outline

- **When**: you need to (re)structure the theoretical part into 70–90 slides.
- **Inputs**: the target learning outcomes + source docs in `docs/`.
- **Outputs**: section outline + per-file module plan (`pages/theory/*.md`).
- **Steps**:
  - Draft section titles and slide counts per section
  - Ensure story flow (problem → model → guardrails → practice)
  - Keep “references” in notes, not on slides

---

## skill-skills-section

- **When**: you need to explain “Skills” as an agentic concept.
- **Inputs**: `AGENTS.md`, existing commands/rules, and relevant external specs.
- **Outputs**: slides that define skills vs commands, plus a `SKILLS.md` template pattern.
- **Safety**: avoid vendor-specific claims unless sourced.

---

## skill-slide-writing

- **When**: you need to write a batch of slides quickly without losing consistency.
- **Inputs**: chosen section + key points + 1–2 diagrams.
- **Outputs**: concise UA slides with EN terms on first mention.
- **Steps**:
  - Use `v-clicks` for lists >4 bullets
  - Prefer Mermaid over new image assets
  - Add citations as HTML comments

---

## skill-visuals-mermaid

- **When**: you need a clear diagram (flow, hierarchy, lifecycle).
- **Inputs**: entities + edges + desired message.
- **Outputs**: Mermaid diagram with readable labels and minimal nodes.
- **Rules**:
  - No spaces in node IDs
  - Keep diagrams small enough for a slide

---

## skill-build-verify

- **When**: after non-trivial edits.
- **Inputs**: repository working tree.
- **Outputs**: `npm run build` passes (no missing imports, broken Markdown, or invalid Mermaid).
