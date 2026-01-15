---
layout: center
---

# Практика: Commands (slash-команди)

<v-clicks>

- Command = короткий, повторюваний “prompt-шаблон”
- Мета: стандартизувати запити до агента в команді
- Папки: Cursor → <code>.cursor/commands/</code>, Claude Code → <code>.claude/commands/</code>.

</v-clicks>

---
layout: center
---

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

---
layout: center
---

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

---
layout: center
---

# Завдання C3: `/gen-rules` (Requirement → Rules)

<v-clicks>

- Inputs: вимога/історія + обмеження (security/ops/arch)
- Output: 5–10 правил у форматі ALWAYS/NEVER/ASK FIRST + scope
- Додайте “як перевіряти” (build/test/checklist) для кожного блоку правил.

</v-clicks>

---
layout: center
---

# Завдання C4: `/image` (шаблон вставки зображення)

<v-clicks>

- Команда вставляє стандартний HTML-snippet для зображення зі <code>public/</code>
- Inputs: шлях (<code>/img.png</code>) + бажана ширина (наприклад, <code>w-3/5</code>)
- Output: акуратний блок, який однаково виглядає на різних екранах.

</v-clicks>

---
layout: center
---

# Як тестувати команди (DoD)

<v-clicks>

- Команда відпрацьовує на реальному кейсі (малий diff / один слайд)
- Вивід стабільний: одна й та сама структура і терміни
- Якщо не вистачає даних — команда явно просить inputs
- Після змін — <code>npm run build</code> зелений.

</v-clicks>

