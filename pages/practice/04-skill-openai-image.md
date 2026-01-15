---
layout: center
---

# Complex skill: add-slide-openai-image

<v-clicks>

- Ціль: додати слайд і згенерити ілюстрацію через зовнішній API (OpenAI Images)
- Артефакти: PNG у <code>public/generated/</code> + markdown у <code>pages/practice/generated/</code>
- Безпека: ключ тільки в env, без логування/комітів.

</v-clicks>

---
layout: center
---

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

---
layout: center
---

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

<!--
Альтернатива: якщо ключ зберігаєте у .env.local (ігнорується git) — скрипт може його підхопити.
-->

---
layout: center
---

# Cursor: як “упакувати” skill

<v-clicks>

- Створіть пакет: <code>.cursor/skills/add-slide-openai-image/</code>
- Додайте <code>SKILL.md</code> + templates + checklist (guardrails + DoD)
- Додайте команду <code>.cursor/commands/add-slide-openai-image.md</code>, яка викликає workflow.

</v-clicks>

---
layout: center
---

# Claude Code: як “упакувати” skill

<v-clicks>

- Додайте <code>CLAUDE.md</code> з constraints про secrets + network
- Створіть <code>.claude/commands/add-slide-openai-image.md</code> (multi-step)
- Додайте “build-verify” як окрему команду для фінальної перевірки.

</v-clicks>

---
layout: center
---

# Troubleshooting

<v-clicks>

- 401/403: перевірте <code>OPENAI_API_KEY</code> і права акаунта
- No file: перевірте, що шлях <code>public/generated/</code> існує і має права на запис
- Build fail: перевірте `src:` import та шлях картинки (<code>/generated/&lt;slug&gt;.png</code>).

</v-clicks>

