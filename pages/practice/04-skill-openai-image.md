---
layout: center
---

<Lang>
<template #uk>

# Complex skill: add-slide-openai-image

<v-clicks>

- Ціль: додати слайд і згенерити ілюстрацію через зовнішній API (OpenAI Images)
- Артефакти: PNG у <code>public/generated/</code> + markdown у <code>pages/practice/generated/</code>
- Безпека: ключ тільки в env, без логування/комітів.

</v-clicks>

</template>
<template #en>

# Complex skill: add-slide-openai-image

<v-clicks>

- Goal: add a slide and generate an illustration via an external API (OpenAI Images)
- Artifacts: PNG in <code>public/generated/</code> + markdown in <code>pages/practice/generated/</code>
- Security: key only in env, no logging/commits.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Inputs / Outputs / Safety

<div class="grid grid-cols-2 gap-6">
  <div>
    <div class="font-bold mb-2">Inputs</div>
    <ul>
      <li>Тема слайду + prompt для зображення</li>
      <li><code>slug</code> (для імені файлів)</li>
      <li><code>OPENAI_API_KEY</code> у середовищі</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Outputs</div>
    <ul>
      <li><code>public/generated/&lt;slug&gt;.png</code></li>
      <li><code>pages/practice/generated/&lt;slug&gt;.md</code></li>
      <li>Слайд підключений через <code>src:</code> (або вставлений у модуль)</li>
    </ul>
  </div>
</div>

<v-clicks>

- Нагадування: image generation коштує грошей → тримайте `n=1`, перевикористовуйте assets, не запускайте “в циклі”.

</v-clicks>

</template>
<template #en>

# Inputs / Outputs / Safety

<div class="grid grid-cols-2 gap-6">
  <div>
    <div class="font-bold mb-2">Inputs</div>
    <ul>
      <li>Slide topic + image prompt</li>
      <li><code>slug</code> (for file names)</li>
      <li><code>OPENAI_API_KEY</code> in environment</li>
    </ul>
  </div>
  <div>
    <div class="font-bold mb-2">Outputs</div>
    <ul>
      <li><code>public/generated/&lt;slug&gt;.png</code></li>
      <li><code>pages/practice/generated/&lt;slug&gt;.md</code></li>
      <li>Slide connected via <code>src:</code> (or inserted into the module)</li>
    </ul>
  </div>
</div>

<v-clicks>

- Reminder: image generation costs money → keep `n=1`, reuse assets, don’t run “in a loop”.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Workflow (реальне виконання)

<v-clicks>

- 1) Експортуйте ключ (лише в локальному терміналі)
- 2) Запустіть скрипт генерації з prompt + slug
- 3) Перевірте, що PNG зʼявився у <code>public/generated/</code>
- 4) Підключіть створений markdown-слайд у deck
- 5) Запустіть <code>npm run build</code>.

</v-clicks>

```bash
# 1) В одному терміналі (Git Bash)
export OPENAI_API_KEY="...your_key..."

# 2) Генерація картинки + markdown
node scripts/openai-generate-image.mjs --slug agentic-rules --prompt "Minimalistic illustration: rules, commands, skills as layers, blue theme" --title "Rules / Commands / Skills"

# 5) Валідація
npm run build
```

</template>
<template #en>

# Workflow (actual execution)

<v-clicks>

- 1) Export the key (only in a local terminal)
- 2) Run the generation script with prompt + slug
- 3) Verify the PNG appears in <code>public/generated/</code>
- 4) Connect the generated markdown slide to the deck
- 5) Run <code>npm run build</code>.

</v-clicks>

```bash
# 1) In one terminal (Git Bash)
export OPENAI_API_KEY="...your_key..."

# 2) Generate image + markdown
node scripts/openai-generate-image.mjs --slug agentic-rules --prompt "Minimalistic illustration: rules, commands, skills as layers, blue theme" --title "Rules / Commands / Skills"

# 5) Validation
npm run build
```

</template>
</Lang>

<!--
Альтернатива: якщо ключ зберігаєте у .env.local (ігнорується git) — скрипт може його підхопити.
-->

---
layout: center
---

<Lang>
<template #uk>

# Cursor: як “упакувати” skill

<v-clicks>

- Створіть пакет: <code>.cursor/skills/add-slide-openai-image/</code>
- Додайте <code>SKILL.md</code> + templates + checklist (guardrails + DoD)
- Додайте команду <code>.cursor/commands/add-slide-openai-image.md</code>, яка викликає workflow.

</v-clicks>

</template>
<template #en>

# Cursor: how to “package” a skill

<v-clicks>

- Create a package: <code>.cursor/skills/add-slide-openai-image/</code>
- Add <code>SKILL.md</code> + templates + checklist (guardrails + DoD)
- Add command <code>.cursor/commands/add-slide-openai-image.md</code> that triggers the workflow.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Claude Code: як “упакувати” skill

<v-clicks>

- Додайте <code>CLAUDE.md</code> з constraints про secrets + network
- Створіть <code>.claude/commands/add-slide-openai-image.md</code> (multi-step)
- Додайте “build-verify” як окрему команду для фінальної перевірки.

</v-clicks>

</template>
<template #en>

# Claude Code: how to “package” a skill

<v-clicks>

- Add <code>CLAUDE.md</code> with constraints about secrets + network
- Create <code>.claude/commands/add-slide-openai-image.md</code> (multi-step)
- Add “build-verify” as a separate command for final verification.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Troubleshooting

<v-clicks>

- 401/403: перевірте <code>OPENAI_API_KEY</code> і права акаунта
- No file: перевірте, що шлях <code>public/generated/</code> існує і має права на запис
- Build fail: перевірте `src:` import та шлях картинки (<code>/generated/&lt;slug&gt;.png</code>).

</v-clicks>

</template>
<template #en>

# Troubleshooting

<v-clicks>

- 401/403: check <code>OPENAI_API_KEY</code> and account permissions
- No file: ensure <code>public/generated/</code> exists and is writable
- Build fail: verify `src:` import and image path (<code>/generated/&lt;slug&gt;.png</code>).

</v-clicks>

</template>
</Lang>
