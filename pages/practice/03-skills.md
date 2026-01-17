---
layout: center
---

<Lang>
<template #uk>

# Практика: Skills (процедури)

<v-clicks>

- Skill = multi-step workflow з перевірками (checks), а не “один промпт”
- Мета: зробити складні задачі відтворюваними для всієї команди
- Артефакти: `SKILLS.md` + (опційно) пакет у <code>.cursor/skills/&lt;name&gt;/</code>.

</v-clicks>

</template>
<template #en>

# Practice: Skills (procedures)

<v-clicks>

- Skill = multi-step workflow with checks, not “one prompt”
- Goal: make complex tasks reproducible for the whole team
- Artifacts: `SKILLS.md` + (optional) package in <code>.cursor/skills/&lt;name&gt;/</code>.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Завдання S1: `skill-build-verify`

<v-clicks>

- Описати skill у `SKILLS.md` (When/Inputs/Outputs/Safety/Steps)
- Реалізувати як команду/процедуру: “run build → локалізуй помилку → виправ → re-run”
- Зробити DoD однозначним: “build зелений”.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (рішення)</div>
    <ul>
      <li>Опис у <code>SKILLS.md</code> + (за бажання) <code>.cursor/skills/build-verify/SKILL.md</code></li>
      <li>Команда валідації: <code>npm run build</code></li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (рішення)</div>
    <ul>
      <li><code>.claude/commands/build-verify.md</code> як “skill-команда”</li>
      <li>Стандартний формат виходу: помилка → файл/слайд → фікс → повтор</li>
    </ul>
  </div>
</div>

</template>
<template #en>

# Task S1: `skill-build-verify`

<v-clicks>

- Describe the skill in `SKILLS.md` (When/Inputs/Outputs/Safety/Steps)
- Implement as a command/procedure: “run build → locate error → fix → re-run”
- Make DoD unambiguous: “build is green”.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (solution)</div>
    <ul>
      <li>Description in <code>SKILLS.md</code> + (optional) <code>.cursor/skills/build-verify/SKILL.md</code></li>
      <li>Validation command: <code>npm run build</code></li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (solution)</div>
    <ul>
      <li><code>.claude/commands/build-verify.md</code> as a “skill command”</li>
      <li>Standard output format: error → file/slide → fix → rerun</li>
    </ul>
  </div>
</div>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Завдання S2: `skill-new-slide` (batch slide writing)

<v-clicks>

- Inputs: секція, тезисний план, кількість слайдів, 1 діаграма (Mermaid) за потреби
- Steps: draft → apply UA/EN convention → add `v-clicks` → add notes → build verify
- Output: модуль `pages/.../*.md` + import у `slides.md`.

</v-clicks>

</template>
<template #en>

# Task S2: `skill-new-slide` (batch slide writing)

<v-clicks>

- Inputs: section, bullet outline, number of slides, 1 Mermaid diagram if needed
- Steps: draft → apply UA/EN convention → add `v-clicks` → add notes → build verify
- Output: module `pages/.../*.md` + import in `slides.md`.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Завдання S3: complex skill preview

<v-clicks>

- Наступний блок: `skill-add-slide-openai-image`
- Це skill з інструментами: Node script + зовнішній API + створення asset у <code>public/</code>
- Важливо: guardrails (не логувати/не комітити ключі, контроль витрат).

</v-clicks>

</template>
<template #en>

# Task S3: complex skill preview

<v-clicks>

- Next block: `skill-add-slide-openai-image`
- A skill with tools: Node script + external API + asset creation in <code>public/</code>
- Important: guardrails (no logging/committing keys, cost control).

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# DoD для skills

<v-clicks>

- Skill має чіткі Inputs/Outputs і не “вгадає” контекст
- Кожен крок перевірний (build/test/checklist)
- Інший учасник може виконати skill за інструкцією без пояснень автора
- Результат не ламає репозиторій: <code>npm run build</code> зелений.

</v-clicks>

</template>
<template #en>

# DoD for skills

<v-clicks>

- Skill has clear Inputs/Outputs and doesn’t “guess” context
- Every step is verifiable (build/test/checklist)
- Another participant can execute the skill from instructions without author help
- Result doesn’t break the repo: <code>npm run build</code> is green.

</v-clicks>

</template>
</Lang>
