---
layout: center
---

<Lang>
<template #uk>

# Системи правил (Rules Systems): ієрархія інструкцій

<v-clicks>

- Правила — це **постійний контекст** (persistent context), а не “ще один промпт”
- Головна мета: **передбачуваність** і **командна стандартизація**.

</v-clicks>

</template>
<template #en>

# Rules systems: hierarchy of instructions

<v-clicks>

- Rules are **persistent context**, not “just another prompt”
- The main goal: **predictability** and **team standardization**.

</v-clicks>

</template>
</Lang>

<!--
Вступ до ідеї багаторівневих інструкцій: @docs/chatgpt-reasearch.md.
-->

---

<Lang>
<template #uk>

# Рівні інструкцій (Scopes)

<v-clicks>

- **System/User**: особисті уподобання (мова, стиль відповіді)
- **Project**: стек, архітектура, правила безпеки, стиль коду
- **Path-specific**: правила для `frontend/` vs `backend/`, тести, інфра тощо
- **Session**: конкретне завдання (тимчасовий контекст).

</v-clicks>

</template>
<template #en>

# Instruction scopes

<v-clicks>

- **System/User**: personal preferences (language, response style)
- **Project**: stack, architecture, security rules, code style
- **Path-specific**: rules for `frontend/` vs `backend/`, tests, infra, etc.
- **Session**: specific task (temporary context).

</v-clicks>

</template>
</Lang>

<!--
Cursor: user rules + project rules + team rules; Copilot: personal+repo+org.
-->

---

<Lang>
<template #uk>

# Пріоритети та конфлікти: що “виграє”

<div style="transform: scale(1); transform-origin: top center;">

```mermaid
flowchart LR
  SystemRules[System_or_User_rules] --> ProjectRules[Project_rules]
  ProjectRules --> PathRules[Path_specific_rules]
  PathRules --> Session[Session_instructions]
  Session --> Output[Model_output]
```

</div>

<v-clicks>

- Чим **ближче до файлу/задачі**, тим правило зазвичай **специфічніше**
- Конфлікти вбивають якість → уникаємо дублювань і протиріч.

</v-clicks>

</template>
<template #en>

# Priorities and conflicts: what “wins”

<div style="transform: scale(1); transform-origin: top center;">

```mermaid
flowchart LR
  SystemRules[System_or_User_rules] --> ProjectRules[Project_rules]
  ProjectRules --> PathRules[Path_specific_rules]
  PathRules --> Session[Session_instructions]
  Session --> Output[Model_output]
```

</div>

<v-clicks>

- The **closer to the file/task**, the more **specific** a rule usually is
- Conflicts kill quality → avoid duplication and contradictions.

</v-clicks>

</template>
</Lang>

<!--
Думка: конфліктні правила → деградація; описано в @docs/chatgpt-reasearch.md.
-->

---

<Lang>
<template #uk>

# Cursor: еволюція форматів правил

<v-clicks>

- **Legacy**: `.cursorrules` (один файл) — deprecated, але ще підтримується
- **v0.45+**: `.cursor/rules/*.mdc` (файли) — функціональні, але не рекомендовані для нових правил
- **v2.2+**: `.cursor/rules/*/` (папки) — **новий рекомендований формат** для кращої читабельності та підтримки.

</v-clicks>

</template>
<template #en>

# Cursor: evolution of rule formats

<v-clicks>

- **Legacy**: `.cursorrules` (single file) — deprecated, still supported
- **v0.45+**: `.cursor/rules/*.mdc` (files) — functional, but not recommended for new rules
- **v2.2+**: `.cursor/rules/*/` (folders) — **new recommended format** for readability and maintenance.

</v-clicks>

</template>
</Lang>

<!--
Еволюція форматів: .cursorrules → .mdc файли → папки в .cursor/rules (v2.2+).
Документація: https://cursor.com/docs/context/rules#mdc-cursor-rules
-->

---

<Lang>
<template #uk>

# Cursor `.mdc`: мінімальний приклад правила

```yaml
---
description: Apply when working with authentication modules
globs: ["src/auth/**/*.ts", "src/middleware/auth*.ts"]
alwaysApply: false
---
```

<v-clicks>

- `globs`: коли правило підтягується автоматично
- `alwaysApply`: правило в контексті завжди (обережно)
- `description`: допомагає агенту зрозуміти, коли просити це правило.

</v-clicks>

</template>
<template #en>

# Cursor `.mdc`: minimal rule example

```yaml
---
description: Apply when working with authentication modules
globs: ["src/auth/**/*.ts", "src/middleware/auth*.ts"]
alwaysApply: false
---
```

<v-clicks>

- `globs`: when the rule auto-attaches
- `alwaysApply`: keep rule in context always (careful)
- `description`: helps the agent know when to request the rule.

</v-clicks>

</template>
</Lang>

<!--
Приклад структури .mdc: @docs/gemini-research.md.
-->

---

<Lang>
<template #uk>

# Cursor: режими застосування правил (практично)

<v-clicks>

- **Always**: додається в кожну сесію (тільки критичне)
- **Auto-attached**: підтягується, коли торкаємось файлів/шляхів (globs)
- **Agent-requested**: агент “просить” правило за описом
- **Manual**: застосовується лише коли ви явно додаєте/згадуєте.

</v-clicks>

</template>
<template #en>

# Cursor: rule application modes (practical)

<v-clicks>

- **Always**: added to every session (only critical)
- **Auto-attached**: pulled when touching files/paths (globs)
- **Agent-requested**: the agent “asks” for the rule by description
- **Manual**: applied only when you explicitly add/mention it.

</v-clicks>

</template>
</Lang>

---

<Lang>
<template #uk>

# Cursor: як організувати правила у проєкті

```text
.cursor/rules/
  workspace.mdc
  architecture.mdc
  frontend.mdc
  backend.mdc
  testing.mdc
  security.mdc
```

<v-clicks>

- Розділяйте за **доменом**, а не “все в одному файлі”
- Тримайте файли **короткими** і **актуальними**.

</v-clicks>

</template>
<template #en>

# Cursor: how to organize rules in a project

```text
.cursor/rules/
  workspace.mdc
  architecture.mdc
  frontend.mdc
  backend.mdc
  testing.mdc
  security.mdc
```

<v-clicks>

- Split by **domain**, not “everything in one file”
- Keep files **short** and **up to date**.

</v-clicks>

</template>
</Lang>

---

<Lang>
<template #uk>

# Як перевірити, що правила працюють?

<v-clicks>

- Правила — це "чорний ящик": важко побачити, чи вони дійсно застосовуються
- Потрібні **практичні методи валідації** для перевірки ефективності
- Різні підходи для різних систем (Cursor / Claude Code / Copilot).

</v-clicks>

</template>
<template #en>

# How to verify rules actually work?

<v-clicks>

- Rules are a “black box”: it’s hard to see if they’re applied
- You need **practical validation methods** to verify effectiveness
- Different approaches for different systems (Cursor / Claude Code / Copilot).

</v-clicks>

</template>
</Lang>

<!--
Практичні методи перевірки правил: тестові сценарії, Developer Tools, A/B тестування.
-->

---

<Lang>
<template #uk>

# Метод 1: Тестовий сценарій (Test Scenario)

<v-clicks>

- Створіть **специфічний запит**, який має тригерити правило
- Приклад: правило "Never use `SELECT *` in SQL"
- Запит: "Write a query to get all columns from Users table"
- **Очікуваний результат**: агент перераховує колонки явно, не використовує `SELECT *`.

</v-clicks>

```sql
-- ❌ Без правила: SELECT * FROM users;
-- ✅ З правилом: SELECT id, name, email FROM users;
```

</template>
<template #en>

# Method 1: Test Scenario

<v-clicks>

- Create a **specific prompt** that should trigger the rule
- Example: rule “Never use `SELECT *` in SQL”
- Prompt: “Write a query to get all columns from Users table”
- **Expected result**: the agent lists columns explicitly, no `SELECT *`.

</v-clicks>

```sql
-- ❌ Without rule: SELECT * FROM users;
-- ✅ With rule: SELECT id, name, email FROM users;
```

</template>
</Lang>

<!--
Тестовий сценарій: ізольований запит, який демонструє роботу правила.
-->

---

<Lang>
<template #uk>

# Метод 2: Запит до агента про активні правила

<v-clicks>

- Прямий запит: **"show rules applied in this session"**
- Агент має перерахувати активні правила з `.cursor/rules/` або `.cursorrules`
- Перевірка, чи агент **згадує правила в контексті** відповідей
- Якщо агент не знає про правила → вони не застосовуються.

</v-clicks>

```markdown
Користувач: "show rules applied in this session"
Агент: "Active rules: workspace.mdc, frontend.mdc (auto-attached)"
```

</template>
<template #en>

# Method 2: Ask the agent about active rules

<v-clicks>

- Direct prompt: **"show rules applied in this session"**
- The agent should list active rules from `.cursor/rules/` or `.cursorrules`
- Check whether the agent **mentions rules in responses**
- If the agent doesn’t know about rules → they aren’t applied.

</v-clicks>

```markdown
User: "show rules applied in this session"
Agent: "Active rules: workspace.mdc, frontend.mdc (auto-attached)"
```

</template>
</Lang>

<!--
Перевірка через прямий запит до агента про активні правила.
-->

---

<Lang>
<template #uk>

# Метод 3: A/B тестування

<v-clicks>

- **Тимчасово вимкнути** правило: перейменувати `.mdc` → `.mdc.off`
- Або перемістити файл з `.cursor/rules/`
- Повторити **той самий запит** до агента
- Порівняти результати: з правилом vs без правила.

</v-clicks>

```bash
# Вимкнути правило для тестування
mv .cursor/rules/frontend.mdc .cursor/rules/frontend.mdc.off

# Після тесту повернути
mv .cursor/rules/frontend.mdc.off .cursor/rules/frontend.mdc
```

</template>
<template #en>

# Method 3: A/B testing

<v-clicks>

- **Temporarily disable** a rule: rename `.mdc` → `.mdc.off`
- Or move the file out of `.cursor/rules/`
- Repeat **the same prompt** to the agent
- Compare results: with rule vs without rule.

</v-clicks>

```bash
# Disable rule for testing
mv .cursor/rules/frontend.mdc .cursor/rules/frontend.mdc.off

# Restore after the test
mv .cursor/rules/frontend.mdc.off .cursor/rules/frontend.mdc
```

</template>
</Lang>

<!--
A/B тестування: порівняння поведінки з правилом і без нього.
-->

---

<Lang>
<template #uk>

# Метод 5: Перевірка globs та умов

<v-clicks>

- Переконайтеся, що **globs відповідають** файлам, з якими працюєте
- Перевірте `alwaysApply: true/false` — чи правило має застосовуватися завжди?
- Тестуйте **path-specific правила**: відкрийте файл, що має відповідати glob
- Перевірте `description` — чи достатньо опису для agent-requested режиму.

</v-clicks>

```yaml
---
globs: ["src/auth/**/*.ts"] # Перевірте: чи є такі файли?
alwaysApply: false # Чи має бути true?
description: "..." # Чи достатньо опису?
---
```

</template>
<template #en>

# Method 5: Check globs and conditions

<v-clicks>

- Ensure **globs match** the files you work with
- Verify `alwaysApply: true/false` — should it always apply?
- Test **path-specific rules**: open a file that should match the glob
- Check `description` — is it sufficient for agent-requested mode?

</v-clicks>

```yaml
---
globs: ["src/auth/**/*.ts"] # Do such files exist?
alwaysApply: false # Should it be true?
description: "..." # Is the description enough?
---
```

</template>
</Lang>

<!--
Перевірка метаданих правил: globs, alwaysApply, description.
-->

---

<Lang>
<template #uk>

# Практичні індикатори успіху

<v-clicks>

- Агент **використовує команди** з правил (наприклад, `npm run build` замість `npm build`)
- Агент **дотримується стилю коду** з правил (Composition API, TypeScript strict)
- Агент **уникає заборонених патернів** (наприклад, не використовує `any` типи)
- Агент **згадує правила** в контексті відповідей ("According to project rules...").

</v-clicks>

</template>
<template #en>

# Practical indicators of success

<v-clicks>

- The agent **uses commands** from rules (e.g., `npm run build` instead of `npm build`)
- The agent **follows code style** from rules (Composition API, TypeScript strict)
- The agent **avoids forbidden patterns** (e.g., no `any` types)
- The agent **mentions rules** in response context ("According to project rules...").

</v-clicks>

</template>
</Lang>

<!--
Індикатори успішного застосування правил: поведінка агента відповідає правилам.
-->

---

<Lang>
<template #uk>

# Claude Code: `CLAUDE.md` як “памʼять проєкту”

| Рівень     | Де лежить                             | Навіщо                            |
| ---------- | ------------------------------------- | --------------------------------- |
| Enterprise | `/etc/.../CLAUDE.md`                  | політики компанії                 |
| Project    | `./CLAUDE.md` / `./.claude/CLAUDE.md` | правила команди                   |
| User       | `~/.claude/CLAUDE.md`                 | особисті уподобання               |
| Local      | `./CLAUDE.local.md`                   | персональні локальні налаштування |

</template>
<template #en>

# Claude Code: `CLAUDE.md` as “project memory”

| Level      | Location                              | Purpose                           |
| ---------- | ------------------------------------- | --------------------------------- |
| Enterprise | `/etc/.../CLAUDE.md`                  | company policies                  |
| Project    | `./CLAUDE.md` / `./.claude/CLAUDE.md` | team rules                        |
| User       | `~/.claude/CLAUDE.md`                 | personal preferences              |
| Local      | `./CLAUDE.local.md`                   | personal local settings           |

</template>
</Lang>

<!--
Ієрархія CLAUDE.md: @docs/gemini-research.md (Claude section).
-->

---

<Lang>
<template #uk>

# Claude Code: рекомендована структура `CLAUDE.md`

```markdown
# Tech Stack

- Node 20, npm

# Critical Commands

- npm run build
- npm test

# Code Style

- No any, use strict typing

# Constraints (NEVER)

- Never commit secrets
```

<v-clicks>

- Мета: щоб агент **не галюцинував команди** і **не ламав конвенції**
- Файл має бути **коротким** (орієнтир: < 300 рядків).

</v-clicks>

</template>
<template #en>

# Claude Code: recommended `CLAUDE.md` structure

```markdown
# Tech Stack

- Node 20, npm

# Critical Commands

- npm run build
- npm test

# Code Style

- No any, use strict typing

# Constraints (NEVER)

- Never commit secrets
```

<v-clicks>

- Goal: the agent **doesn’t hallucinate commands** and **doesn’t break conventions**
- Keep the file **short** (guideline: < 300 lines).

</v-clicks>

</template>
</Lang>

<!--
Практики “коротко і директивно”: @docs/gemini-research.md / @docs/claude-research.md.
-->

---

<Lang>
<template #uk>

# Claude: hooks & checkpoints (для workflow)

<v-clicks>

- **Hooks**: автоматичні тригери (наприклад, запуск тестів після “stop”)
- **Checkpoints**: знімки стану для легкого відкату
- Практичний ефект: менше “ручної рутини”, більше **автовалідації**

</v-clicks>

</template>
<template #en>

# Claude: hooks & checkpoints (for workflow)

<v-clicks>

- **Hooks**: automatic triggers (e.g., run tests after “stop”)
- **Checkpoints**: state snapshots for easy rollback
- Practical effect: less “manual routine”, more **auto-validation**

</v-clicks>

</template>
</Lang>

<!--
Hooks/checkpoints згадані в @docs/gemini-research.md (Claude Code section).
-->

---

<Lang>
<template #uk>

# GitHub Copilot: repo instructions + path-specific

<v-clicks>

- Репозиторій: `.github/copilot-instructions.md`
- Path-specific: `.github/instructions/*.instructions.md` з `applyTo`
- Copilot зазвичай **комбінує** інструкції (personal + repo + org).

</v-clicks>

```markdown
# .github/copilot-instructions.md

- Use TypeScript strict
- Prefer async/await
- Run tests before suggesting changes
```

</template>
<template #en>

# GitHub Copilot: repo instructions + path-specific

<v-clicks>

- Repo: `.github/copilot-instructions.md`
- Path-specific: `.github/instructions/*.instructions.md` with `applyTo`
- Copilot usually **combines** instructions (personal + repo + org).

</v-clicks>

```markdown
# .github/copilot-instructions.md

- Use TypeScript strict
- Prefer async/await
- Run tests before suggesting changes
```

</template>
</Lang>

<!--
Система інструкцій Copilot описана в @docs/gemini-research.md.
-->

---

<Lang>
<template #uk>

# `AGENTS.md`: універсальний стандарт для агентів

<v-clicks>

- “README для агента”: точні команди, обмеження, середовище
- Працює як **крос-інструментний** baseline (Cursor / Roo / Cline / інші)
- Підтримує вкладеність у монорепо (локальні `AGENTS.md`).

</v-clicks>

```markdown
## Environment & Commands

- Install: npm ci
- Build: npm run build
- Tests: npm test

## Boundaries

- NEVER commit secrets
- ASK BEFORE deleting files
```

</template>
<template #en>

# `AGENTS.md`: a universal standard for agents

<v-clicks>

- “README for the agent”: exact commands, constraints, environment
- Works as a **cross-tool** baseline (Cursor / Roo / Cline / others)
- Supports nested rules in monorepos (local `AGENTS.md`).

</v-clicks>

```markdown
## Environment & Commands

- Install: npm ci
- Build: npm run build
- Tests: npm test

## Boundaries

- NEVER commit secrets
- ASK BEFORE deleting files
```

</template>
</Lang>

<!--
AGENTS.md як стандарт і ризики: @docs/gemini-research-agents.md.
-->

---

<Lang>
<template #uk>

# Ризик: prompt injection через репозиторій

<v-clicks>

- Інструкції (`AGENTS.md`, rules-файли, CI-конфіги) — це **високоризикові конфіги**
- Зловмисник може запропонувати PR зі “шкідливими правилами”
- Агент може виконати небезпечні дії, якщо довіряє інструкціям безконтрольно.

</v-clicks>

</template>
<template #en>

# Risk: prompt injection via the repo

<v-clicks>

- Instructions (`AGENTS.md`, rules files, CI configs) are **high-risk configs**
- An attacker can propose a PR with “malicious rules”
- The agent may do dangerous actions if it trusts instructions blindly.

</v-clicks>

</template>
</Lang>

<!--
Threat model “repo starts talking”: @docs/gemini-research-agents.md (security section).
-->

---

<Lang>
<template #uk>

# Практичні принципи “хороших правил”

<v-clicks>

- **Конкретність**: не “пиши чисто”, а “max 30 lines, single responsibility”
- **Перевірність**: правило має мати перевірку (lint/test/build/checklist)
- **Лаконічність**: менше — краще (інакше правило тонe)
- **Безпека**: дозволи/deny-list, “ASK FIRST” для руйнівних дій
- **Процес**: зміни правил = PR + ревʼю (як CI/CD конфіги).

</v-clicks>

</template>
<template #en>

# Practical principles of “good rules”

<v-clicks>

- **Specificity**: not “write cleanly”, but “max 30 lines, single responsibility”
- **Verifiability**: a rule should have a check (lint/test/build/checklist)
- **Brevity**: less is more (otherwise the rule sinks)
- **Security**: allow/deny lists, “ASK FIRST” for destructive actions
- **Process**: changing rules = PR + review (like CI/CD configs).

</v-clicks>

</template>
</Lang>
