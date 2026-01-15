
---
layout: center
routeAlias: practice
---

# Практична частина: робимо Slidev deck з Agentic IDE

<v-clicks>

- Ціль: зібрати систему **Rules / Commands / Skills** для цього репозиторію
- Інструменти: **Cursor** або **Claude Code** (паралельні треки)
- Наприкінці: `npm run build` зелений + “skills catalog” у `SKILLS.md`.

</v-clicks>

---
layout: center
---

# Старт практики: з чого починаємо

<v-clicks>

- Базовий репозиторій воркшопу: https://github.com/programmingmentor/2026-fwdays-rules-commands-skills-practice
- Робимо **fork**, працюємо у власному репозиторії
- Задача: зібрати свій **слайдогенератор** з Rules / Commands / Skills
- Деплой: GitHub Pages (або інша платформа) + публічний URL
- Фінал: створити pull request у базовий репозиторій з результатом.

</v-clicks>

---
layout: center
---

# Таймбокс (3–4 години)

| Блок     | Час    | Результат                                 |
| -------- | ------ | ----------------------------------------- |
| Kickoff  | 10–15m | dev server + build OK                     |
| Rules    | ~45m   | правила застосовуються і перевірені       |
| Commands | ~45m   | 3–5 повторюваних slash-команд             |
| Skills   | 60–75m | 2 прості + 1 складний skill               |
| Wrap-up  | 15m    | Definition of Done (DoD) + план підтримки |

<!--
Під час живого воркшопу можна зсунути таймінг за рівнем аудиторії.
-->

---
layout: center
---

# Артефакти, які створимо

<v-clicks>

- **Rules**: `.cursor/rules/*.mdc` (Cursor) / `CLAUDE.md` (Claude Code)
- **Commands**: `.cursor/commands/*.md` / `.claude/commands/*.md`
- **Skills**: `SKILLS.md` + packages у `.cursor/skills/**`
- **Automation**: `scripts/openai-generate-image.mjs` + assets у `public/generated/`.

</v-clicks>

---
layout: center
---

# Definition of Done (DoD)

<v-clicks>

- `npm run build` проходить без помилок
- Новий слайд(и) підключені через `src:` і рендеряться
- Команди/скіли відтворювані: інший учасник може повторити за інструкцією
- Немає секретів у git (API keys тільки в env).

</v-clicks>
