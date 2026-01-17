---
layout: center
---

<Lang>
<template #uk>

# Практика: система правил (Rules System)

<v-clicks>

- Мета: зробити поведінку агента **передбачуваною** і повторюваною
- Формат: короткі директиви **ALWAYS / NEVER / ASK FIRST**
- Валідація: test scenario → A/B → `npm run build`.

</v-clicks>

</template>
<template #en>

# Practice: rules system

<v-clicks>

- Goal: make agent behavior **predictable** and repeatable
- Format: short directives **ALWAYS / NEVER / ASK FIRST**
- Validation: test scenario → A/B → `npm run build`.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

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

</template>
<template #en>

# Task R1: content rules for Slidev

<v-clicks>

- Describe slide style rules: UA-first + EN term on first mention, `v-clicks`, links in notes
- Limit scope to `slides.md` + `pages/**/*.md`
- Add “how to verify” (DoD) directly in the rule.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (solution)</div>
    <ul>
      <li>Create <code>.cursor/rules/slidev-content.mdc</code> with <code>globs</code></li>
      <li>Add rules for <code>v-clicks</code> + notes + assets</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (solution)</div>
    <ul>
      <li>Add a “Slide content rules” section in <code>CLAUDE.md</code></li>
      <li>Keep the file short (&lt;300 lines)</li>
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

</template>
<template #en>

# Task R2: Windows Git Bash — safe redirects

<v-clicks>

- Forbid Windows-style redirects <code>&gt;nul</code> / <code>2&gt;nul</code> (Git Bash creates a <code>nul</code> file)
- Allow only Unix-style: <code>&gt;/dev/null</code>, <code>2&gt;/dev/null</code>
- Add <code>nul</code> to <code>.gitignore</code> as an “airbag”.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (solution)</div>
    <ul>
      <li>Rule <code>.cursor/rules/windows-gitbash.mdc</code></li>
      <li>Separate point “NEVER use &gt;nul”</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (solution)</div>
    <ul>
      <li>Section “Platform: Git Bash” in <code>CLAUDE.md</code></li>
      <li>Fix: <code>rm -f nul</code> if the file appears</li>
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

</template>
<template #en>

# Task R3: Guardrails + quality gates

<v-clicks>

- **NEVER**: commit secrets (API keys, tokens), paste private links
- **ASK FIRST**: before deleting files or large slide refactors
- **ALWAYS**: after non-trivial edits — run <code>npm run build</code>.

</v-clicks>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <div class="font-bold mb-2">Cursor (solution)</div>
    <ul>
      <li><code>.cursor/rules/quality-safety.mdc</code> + clear “do/don’t”</li>
      <li>List validation commands: <code>npm run build</code></li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Claude Code (solution)</div>
    <ul>
      <li>Section “Constraints (NEVER)” in <code>CLAUDE.md</code></li>
      <li>Section “Critical Commands” with <code>npm run build</code></li>
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

</template>
<template #en>

# Rule validation: 3 quick methods

<v-clicks>

- **Test scenario**: one prompt that should trigger the rule
- **Ask the agent**: “show rules applied in this session”
- **A/B**: temporarily disable the rule and repeat the same prompt.

</v-clicks>

```bash
# A/B: disable the rule
mv .cursor/rules/slidev-content.mdc .cursor/rules/slidev-content.mdc.off

# Restore it
mv .cursor/rules/slidev-content.mdc.off .cursor/rules/slidev-content.mdc
```

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Pitfall: folder-based rules у Cursor

<v-clicks>

- Формат <code>.cursor/rules/&lt;name&gt;/RULE.md</code> задокументований, але в деяких версіях Cursor може не підхоплюватись
- Для воркшопу — орієнтуємось на <code>.cursor/rules/\*.mdc</code> як стабільний шлях
- Вправа: створити folder-rule → перевірити → за потреби конвертувати в <code>.mdc</code>.

</v-clicks>

</template>
<template #en>

# Pitfall: folder-based rules in Cursor

<v-clicks>

- The format <code>.cursor/rules/&lt;name&gt;/RULE.md</code> is documented, but some Cursor versions may ignore it
- For the workshop — rely on <code>.cursor/rules/\*.mdc</code> as the stable path
- Exercise: create a folder-rule → test → convert to <code>.mdc</code> if needed.

</v-clicks>

</template>
</Lang>
