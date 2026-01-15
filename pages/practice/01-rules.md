---
layout: center
---

# Практика: система правил (Rules System)

<v-clicks>

- Мета: зробити поведінку агента **передбачуваною** і повторюваною
- Формат: короткі директиви **ALWAYS / NEVER / ASK FIRST**
- Валідація: test scenario → A/B → `npm run build`.

</v-clicks>

---
layout: center
---

# Завдання R1: контентні правила для Slidev

<v-clicks>

- Опишіть правила стилю слайдів: UA-first + EN термін на першій згадці, `v-clicks`, лінки в нотатки
- Обмежте scope на `slides.md` + `pages/**/*.md`
- Додайте “як перевіряти” (DoD) прямо в правило.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (рішення)</div>
    <ul>
      <li>Створіть <code>.cursor/rules/slidev-content.mdc</code> з <code>globs</code></li>
      <li>Додайте правила для <code>v-clicks</code> + нотаток + assets</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (рішення)</div>
    <ul>
      <li>Додайте секцію “Slide content rules” у <code>CLAUDE.md</code></li>
      <li>Тримайте файл коротким (&lt;300 рядків)</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Завдання R2: Windows Git Bash — безпечні редіректи

<v-clicks>

- Забороніть Windows-style редіректи <code>&gt;nul</code> / <code>2&gt;nul</code> (у Git Bash це створює файл <code>nul</code>)
- Дозвольте тільки Unix-style: <code>&gt;/dev/null</code>, <code>2&gt;/dev/null</code>
- Додайте <code>nul</code> у <code>.gitignore</code> як “airbag”.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (рішення)</div>
    <ul>
      <li>Правило <code>.cursor/rules/windows-gitbash.mdc</code></li>
      <li>Окремий пункт “NEVER use &gt;nul”</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (рішення)</div>
    <ul>
      <li>Секція “Platform: Git Bash” у <code>CLAUDE.md</code></li>
      <li>Фікс: <code>rm -f nul</code> якщо файл зʼявився</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Завдання R3: Guardrails + quality gates

<v-clicks>

- **NEVER**: комітити секрети (API keys, токени), вставляти приватні лінки
- **ASK FIRST**: перед видаленням файлів або великими refactor в слайдах
- **ALWAYS**: після нетривіальних правок — запускати <code>npm run build</code>.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (рішення)</div>
    <ul>
      <li><code>.cursor/rules/quality-safety.mdc</code> + чіткі “do/don’t”</li>
      <li>Вкажіть команди валідації: <code>npm run build</code></li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (рішення)</div>
    <ul>
      <li>Секція “Constraints (NEVER)” у <code>CLAUDE.md</code></li>
      <li>Секція “Critical Commands” з <code>npm run build</code></li>
    </ul>
  </div>
</div>

---
layout: center
---

# Валідація правил: 3 швидкі методи

<v-clicks>

- **Test scenario**: один запит, який має тригерити правило
- **Ask the agent**: “show rules applied in this session”
- **A/B**: тимчасово вимкнути правило і повторити той самий запит.

</v-clicks>

```bash
# A/B: вимкнути правило
mv .cursor/rules/slidev-content.mdc .cursor/rules/slidev-content.mdc.off

# Повернути назад
mv .cursor/rules/slidev-content.mdc.off .cursor/rules/slidev-content.mdc
```

---
layout: center
---

# Pitfall: folder-based rules у Cursor

<v-clicks>

- Формат <code>.cursor/rules/&lt;name&gt;/RULE.md</code> задокументований, але в деяких версіях Cursor може не підхоплюватись
- Для воркшопу — орієнтуємось на <code>.cursor/rules/\*.mdc</code> як стабільний шлях
- Вправа: створити folder-rule → перевірити → за потреби конвертувати в <code>.mdc</code>.

</v-clicks>
