---
layout: center
---

<Lang>
<template #uk>

# Практика: Commands (slash-команди)

<v-clicks>

- Command = короткий, повторюваний “prompt-шаблон”
- Мета: стандартизувати запити до агента в команді
- Папки: Cursor → <code>.cursor/commands/</code>, Claude Code → <code>.claude/commands/</code>.

</v-clicks>

</template>
<template #en>

# Practice: Commands (slash commands)

<v-clicks>

- Command = short, repeatable “prompt template”
- Goal: standardize agent requests across the team
- Folders: Cursor → <code>.cursor/commands/</code>, Claude Code → <code>.claude/commands/</code>.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Завдання C1: `/review-deck` (review diff для Slidev)

<v-clicks>

- Команда приймає diff / список змін і повертає структурований review
- Формат відповіді: Summary → Blockers → Major → Minor → Suggested edits
- Фокус: Slidev build/render, конвенції, контент (UA-first, лінки в notes).

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (рішення)</div>
    <ul>
      <li>Файл <code>.cursor/commands/review-deck.md</code></li>
      <li>Використайте на <code>git diff</code> + за потреби <code>npm run build</code></li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (рішення)</div>
    <ul>
      <li>Файл <code>.claude/commands/review-deck.md</code></li>
      <li>Дозвольте read + bash для build (без secrets)</li>
    </ul>
  </div>
</div>

</template>
<template #en>

# Task C1: `/review-deck` (review diff for Slidev)

<v-clicks>

- The command takes a diff / change list and returns a structured review
- Response format: Summary → Blockers → Major → Minor → Suggested edits
- Focus: Slidev build/render, conventions, content (UA-first, links in notes).

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (solution)</div>
    <ul>
      <li>File <code>.cursor/commands/review-deck.md</code></li>
      <li>Use with <code>git diff</code> + <code>npm run build</code> if needed</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (solution)</div>
    <ul>
      <li>File <code>.claude/commands/review-deck.md</code></li>
      <li>Allow read + bash for build (no secrets)</li>
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

# Завдання C2: `/new-slide` (швидке додавання слайду)

<v-clicks>

- Inputs: тема, 3–5 тез, де вставити (файл/секція)
- Output: готовий markdown слайд з коректним `v-clicks`
- Обовʼязково: без “стіни тексту”, лінки — в notes.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (рішення)</div>
    <ul>
      <li><code>.cursor/commands/new-slide.md</code> з чеклістом якості</li>
      <li>Попросіть агент одразу запускати <code>npm run build</code> після вставки</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (рішення)</div>
    <ul>
      <li><code>.claude/commands/new-slide.md</code> з вимогою “ask for missing inputs”</li>
      <li>Додайте підказку про <code>@file</code> references</li>
    </ul>
  </div>
</div>

</template>
<template #en>

# Task C2: `/new-slide` (quick slide addition)

<v-clicks>

- Inputs: topic, 3–5 bullet points, where to insert (file/section)
- Output: ready markdown slide with correct `v-clicks`
- Must: no “wall of text”, links go in notes.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (solution)</div>
    <ul>
      <li><code>.cursor/commands/new-slide.md</code> with a quality checklist</li>
      <li>Ask the agent to run <code>npm run build</code> after insertion</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (solution)</div>
    <ul>
      <li><code>.claude/commands/new-slide.md</code> with “ask for missing inputs”</li>
      <li>Add a hint about <code>@file</code> references</li>
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

# Завдання C3: `/gen-rules` (Requirement → Rules)

<v-clicks>

- Inputs: вимога/історія + обмеження (security/ops/arch)
- Output: 5–10 правил у форматі ALWAYS/NEVER/ASK FIRST + scope
- Додайте “як перевіряти” (build/test/checklist) для кожного блоку правил.

</v-clicks>

</template>
<template #en>

# Task C3: `/gen-rules` (Requirement → Rules)

<v-clicks>

- Inputs: requirement/story + constraints (security/ops/arch)
- Output: 5–10 rules in ALWAYS/NEVER/ASK FIRST format + scope
- Add “how to verify” (build/test/checklist) for each block of rules.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Завдання C4: `/image` (шаблон вставки зображення)

<v-clicks>

- Команда вставляє стандартний HTML-snippet для зображення зі <code>public/</code>
- Inputs: шлях (<code>/img.png</code>) + бажана ширина (наприклад, <code>w-3/5</code>)
- Output: акуратний блок, який однаково виглядає на різних екранах.

</v-clicks>

</template>
<template #en>

# Task C4: `/image` (image insertion template)

<v-clicks>

- The command inserts a standard HTML snippet for an image from <code>public/</code>
- Inputs: path (<code>/img.png</code>) + desired width (e.g., <code>w-3/5</code>)
- Output: a neat block that looks consistent across screens.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Як тестувати команди (DoD)

<v-clicks>

- Команда відпрацьовує на реальному кейсі (малий diff / один слайд)
- Вивід стабільний: одна й та сама структура і терміни
- Якщо не вистачає даних — команда явно просить inputs
- Після змін — <code>npm run build</code> зелений.

</v-clicks>

</template>
<template #en>

# How to test commands (DoD)

<v-clicks>

- The command works on a real case (small diff / one slide)
- Output is stable: same structure and terms
- If data is missing — the command explicitly asks for inputs
- After changes — <code>npm run build</code> is green.

</v-clicks>

</template>
</Lang>
