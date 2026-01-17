---
layout: center
routeAlias: theory
---

<Lang>
<template #uk>

# Теоретична частина: правила, команди та навички

<v-clicks>

- Чому **ad-hoc промптинг** ламається на масштабі
- Як зробити поведінку агента **стабільною та повторюваною**
- Які **артефакти** залишаються в репозиторії (rules / commands / memory).

</v-clicks>

</template>
<template #en>

# Theory: rules, commands, and skills

<v-clicks>

- Why **ad-hoc prompting** breaks at scale
- How to make agent behavior **stable and repeatable**
- Which **artifacts** remain in the repo (rules / commands / memory).

</v-clicks>

</template>
</Lang>

<!--
Джерела/ідеї: @docs/chatgpt-reasearch.md (вступ, ad-hoc vs системний підхід),
@docs/claude-research.md (Agentic Engineering, intent-driven development).
-->

---

<Lang>
<template #uk>

# Структура (Outline)

<v-clicks>

- **0. Setup**: цілі, очікування, Plan→Act
- **1. Shift**: Copilot → Agentic IDE (Assisted vs Augmented)
- **2. Architecture**: Context + Tools + Memory
- **3. Rules**: Cursor / Claude Code / Copilot / `AGENTS.md`
- **4. Workflows**: Commands vs Skills
- **5. Skills**: deep dive (`SKILLS.md`)
- **6. Memory Bank**: протокол, файли, рівні складності
- **7. Quality/Security**: guardrails, anti-patterns, ліцензії
- **8. Requirements→Rules**: як витягувати правила з вимог
- **9. Bonus**: Ralph Wiggum loop (агент у циклі)
- **10. Wrap-up**: чекліст, Q&A, джерела.

</v-clicks>

</template>
<template #en>

# Outline

<v-clicks>

- **0. Setup**: goals, expectations, Plan→Act
- **1. Shift**: Copilot → Agentic IDE (Assisted vs Augmented)
- **2. Architecture**: Context + Tools + Memory
- **3. Rules**: Cursor / Claude Code / Copilot / `AGENTS.md`
- **4. Workflows**: Commands vs Skills
- **5. Skills**: deep dive (`SKILLS.md`)
- **6. Memory Bank**: protocol, files, complexity levels
- **7. Quality/Security**: guardrails, anti-patterns, licenses
- **8. Requirements→Rules**: how to extract rules from requirements
- **9. Bonus**: Ralph Wiggum loop (agent in the loop)
- **10. Wrap-up**: checklist, Q&A, sources.

</v-clicks>

</template>
</Lang>

<!--
Мапа джерел:
- chatgpt-reasearch.md: ad-hoc vs системний підхід, правила/антипатерни
- claude-research.md: Agentic IDE архітектура, OODA, MCP, memory bank і процес
- gemini-research.md: порівняння Cursor/Claude/Copilot rules systems
- gemini-research-agents.md: AGENTS.md стандарт + ризики (prompt injection).
-->

---

<Lang>
<template #uk>

# Після цієї частини ви зможете…

<v-clicks>

- Пояснити, що таке **Agentic IDE** і чим вона відрізняється від Copilot-стилю
- Розкласти “контекст” на **правила (rules)**, **команди (commands)**, **памʼять (memory)**
- Налаштувати мінімальний набір **guardrails**: що агенту можна/не можна робити
- Вибудувати базовий **workflow**: Spec → Plan → Act → Verify → Update.

</v-clicks>

</template>
<template #en>

# After this section you will be able to...

<v-clicks>

- Explain what **Agentic IDE** is and how it differs from a Copilot-style flow
- Break down “context” into **rules**, **commands**, **memory**
- Set a minimum set of **guardrails**: what an agent can/can’t do
- Build a basic **workflow**: Spec → Plan → Act → Verify → Update.

</v-clicks>

</template>
</Lang>

<!--
Фокус: майстерність керування контекстом (context governance), а не “хитрі промпти”.
-->

---
layout: center
---

<Lang>
<template #uk>

# Практика взаємодії: Plan → Act (замість “пиши код одразу”)

```mermaid
flowchart LR
  Spec[Spec/Intent] --> Plan[Plan]
  Plan --> Act[Act]
  Act --> Verify[Verify]
  Verify --> Update[Update_rules_or_memory]
  Update --> Plan
```

<v-clicks>

- **Plan**: що змінюємо, де, як перевіряємо
- **Act**: робимо лише те, що в плані
- **Verify**: тести/збірка/перевірки
- **Update**: правила/памʼять, щоб агент “навчився один раз”.

</v-clicks>

</template>
<template #en>

# Interaction practice: Plan → Act (instead of “write code now”)

```mermaid
flowchart LR
  Spec[Spec/Intent] --> Plan[Plan]
  Plan --> Act[Act]
  Act --> Verify[Verify]
  Verify --> Update[Update_rules_or_memory]
  Update --> Plan
```

<v-clicks>

- **Plan**: what changes, where, how to verify
- **Act**: do only what is in the plan
- **Verify**: tests/build/checks
- **Update**: rules/memory so the agent “learns once”.

</v-clicks>

</template>
</Lang>

<!--
Ідея Plan/Act як захист від передчасних великих змін: @docs/gemini-research.md (Plan/Act pattern).
-->
