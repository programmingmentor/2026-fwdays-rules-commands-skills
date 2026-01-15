---
layout: center
---

# Практика: Skills (процедури)

<v-clicks>

- Skill = multi-step workflow з перевірками (checks), а не “один промпт”
- Мета: зробити складні задачі відтворюваними для всієї команди
- Артефакти: `SKILLS.md` + (опційно) пакет у <code>.cursor/skills/&lt;name&gt;/</code>.

</v-clicks>

---
layout: center
---

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

---
layout: center
---

# Завдання S2: `skill-new-slide` (batch slide writing)

<v-clicks>

- Inputs: секція, тезисний план, кількість слайдів, 1 діаграма (Mermaid) за потреби
- Steps: draft → apply UA/EN convention → add `v-clicks` → add notes → build verify
- Output: модуль `pages/.../*.md` + import у `slides.md`.

</v-clicks>

---
layout: center
---

# Завдання S3: complex skill preview

<v-clicks>

- Наступний блок: `skill-add-slide-openai-image`
- Це skill з інструментами: Node script + зовнішній API + створення asset у <code>public/</code>
- Важливо: guardrails (не логувати/не комітити ключі, контроль витрат).

</v-clicks>

---
layout: center
---

# DoD для skills

<v-clicks>

- Skill має чіткі Inputs/Outputs і не “вгадає” контекст
- Кожен крок перевірний (build/test/checklist)
- Інший учасник може виконати skill за інструкцією без пояснень автора
- Результат не ламає репозиторій: <code>npm run build</code> зелений.

</v-clicks>

