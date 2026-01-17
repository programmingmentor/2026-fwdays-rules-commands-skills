
---
layout: center
routeAlias: practice
---

<Lang>
<template #uk>

# Практична частина: робимо Slidev deck з Agentic IDE

<v-clicks>

- Ціль: зібрати систему **Rules / Commands / Skills** для цього репозиторію
- Інструменти: **Cursor** або **Claude Code** (паралельні треки)
- Наприкінці: `npm run build` зелений + “skills catalog” у `SKILLS.md`.

</v-clicks>

</template>
<template #en>

# Practice: build a Slidev deck with an Agentic IDE

<v-clicks>

- Goal: assemble **Rules / Commands / Skills** for this repo
- Tools: **Cursor** or **Claude Code** (parallel tracks)
- Outcome: green `npm run build` + a “skills catalog” in `SKILLS.md`.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Старт практики: з чого починаємо

<v-clicks>

- Базовий репозиторій воркшопу: https://github.com/programmingmentor/2026-fwdays-rules-commands-skills-practice
- Робимо **fork**, працюємо у власному репозиторії
- Задача: зібрати свій **слайдогенератор** з Rules / Commands / Skills
- Деплой: GitHub Pages (або інша платформа) + публічний URL
- Фінал: створити pull request у базовий репозиторій з результатом.

</v-clicks>

</template>
<template #en>

# Practice start: where we begin

<v-clicks>

- Workshop base repo: https://github.com/programmingmentor/2026-fwdays-rules-commands-skills-practice
- **Fork** it and work in your own repo
- Task: build your own **slide generator** with Rules / Commands / Skills
- Deploy: GitHub Pages (or another platform) + public URL
- Finish: open a pull request to the base repo with your result.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Таймбокс (3–4 години)

| Блок     | Час    | Результат                                 |
| -------- | ------ | ----------------------------------------- |
| Kickoff  | 10–15m | dev server + build OK                     |
| Rules    | ~45m   | правила застосовуються і перевірені       |
| Commands | ~45m   | 3–5 повторюваних slash-команд             |
| Skills   | 60–75m | 2 прості + 1 складний skill               |
| Wrap-up  | 15m    | Definition of Done (DoD) + план підтримки |

</template>
<template #en>

# Timebox (3–4 hours)

| Block    | Time   | Outcome                                  |
| -------- | ------ | ---------------------------------------- |
| Kickoff  | 10–15m | dev server + build OK                    |
| Rules    | ~45m   | rules applied and validated              |
| Commands | ~45m   | 3–5 repeatable slash commands            |
| Skills   | 60–75m | 2 simple + 1 complex skill               |
| Wrap-up  | 15m    | Definition of Done (DoD) + support plan  |

</template>
</Lang>

<!--
Під час живого воркшопу можна зсунути таймінг за рівнем аудиторії.
-->

---
layout: center
---

<Lang>
<template #uk>

# Артефакти, які створимо

<v-clicks>

- **Rules**: `.cursor/rules/*.mdc` (Cursor) / `CLAUDE.md` (Claude Code)
- **Commands**: `.cursor/commands/*.md` / `.claude/commands/*.md`
- **Skills**: `SKILLS.md` + packages у `.cursor/skills/**`
- **Automation**: `scripts/openai-generate-image.mjs` + assets у `public/generated/`.

</v-clicks>

</template>
<template #en>

# Artifacts we will create

<v-clicks>

- **Rules**: `.cursor/rules/*.mdc` (Cursor) / `CLAUDE.md` (Claude Code)
- **Commands**: `.cursor/commands/*.md` / `.claude/commands/*.md`
- **Skills**: `SKILLS.md` + packages in `.cursor/skills/**`
- **Automation**: `scripts/openai-generate-image.mjs` + assets in `public/generated/`.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Definition of Done (DoD)

<v-clicks>

- `npm run build` проходить без помилок
- Новий слайд(и) підключені через `src:` і рендеряться
- Команди/скіли відтворювані: інший учасник може повторити за інструкцією
- Немає секретів у git (API keys тільки в env).

</v-clicks>

</template>
<template #en>

# Definition of Done (DoD)

<v-clicks>

- `npm run build` passes without errors
- New slide(s) connected via `src:` and render correctly
- Commands/skills are reproducible: another participant can follow the instructions
- No secrets in git (API keys only in env).

</v-clicks>

</template>
</Lang>
