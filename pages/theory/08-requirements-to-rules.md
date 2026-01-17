---
layout: center
---

<Lang>
<template #uk>

# Як перетворювати вимоги на правила (Requirements → Rules)

<v-clicks>

- “Те, що в голові у сеньйора” → у файл правил
- Мета: агент не забуває і не вигадує.

</v-clicks>

</template>
<template #en>

# How to turn requirements into rules

<v-clicks>

- “What’s in a senior’s head” → goes into a rules file
- Goal: the agent doesn’t forget or invent things.

</v-clicks>

</template>
</Lang>

---

<Lang>
<template #uk>

# Рецепт: Requirement → Rule

<v-clicks>

1. Витягнути **обмеження** (security/perf/license/arch)
2. Сформулювати директивно: **ALWAYS / NEVER / ASK FIRST**
3. Визначити **scope** (project vs path-specific)
4. Додати **приклад** (canonical file / snippet)
5. Додати **перевірку** (lint/test/checklist)

</v-clicks>

</template>
<template #en>

# Recipe: Requirement → Rule

<v-clicks>

1. Extract **constraints** (security/perf/license/arch)
2. State as directives: **ALWAYS / NEVER / ASK FIRST**
3. Define **scope** (project vs path-specific)
4. Add **example** (canonical file / snippet)
5. Add **verification** (lint/test/checklist)

</v-clicks>

</template>
</Lang>

---

<Lang>
<template #uk>

# Приклад: “Підтвердження email при реєстрації”

User story: *“Як користувач, я хочу отримувати email-підтвердження при реєстрації.”*

<v-clicks>

- **ALWAYS**: валідовувати email + перевіряти унікальність
- **ALWAYS**: надсилати лист через затверджений сервіс/шаблон
- **ALWAYS**: токен одноразовий, TTL = 24h
- **NEVER**: логувати токени/секрети.

</v-clicks>

</template>
<template #en>

# Example: “Email confirmation on signup”

User story: *“As a user, I want to receive an email confirmation on signup.”*

<v-clicks>

- **ALWAYS**: validate email + check uniqueness
- **ALWAYS**: send email via approved service/template
- **ALWAYS**: one-time token, TTL = 24h
- **NEVER**: log tokens/secrets.

</v-clicks>

</template>
</Lang>

<!--
Цей приклад є в @docs/chatgpt-reasearch.md (витяг правил із вимог).
-->

---

<Lang>
<template #uk>

# Категорії правил, які найчастіше “рятують”

<v-clicks>

- **Безпека**: секрети, валідація, доступи
- **Ліцензії**: дозволені/заборонені пакети
- **Архітектура**: межі шарів, заборонені залежності
- **Якість**: тести/покриття, стиль, DoD
- **Операційність**: команди build/test, середовище.

</v-clicks>

</template>
<template #en>

# Rule categories that most often “save you”

<v-clicks>

- **Security**: secrets, validation, access
- **Licenses**: allowed/forbidden packages
- **Architecture**: layer boundaries, forbidden dependencies
- **Quality**: tests/coverage, style, DoD
- **Operations**: build/test commands, environment.

</v-clicks>

</template>
</Lang>

---

<Lang>
<template #uk>

# Рольові правила (Role-based rules)

<v-clicks>

- **Dev**: стиль коду, патерни, продуктивність
- **QA**: тест-план, edge cases, accessibility
- **Reviewer**: чекліст, ризики, контракти API
- **Architect**: модульні межі, заборонені залежності, ADR
- **DevOps**: секрети, IaC, ідемпотентність, CI/CD.

</v-clicks>

</template>
<template #en>

# Role-based rules

<v-clicks>

- **Dev**: code style, patterns, performance
- **QA**: test plan, edge cases, accessibility
- **Reviewer**: checklist, risks, API contracts
- **Architect**: module boundaries, forbidden dependencies, ADRs
- **DevOps**: secrets, IaC, idempotency, CI/CD.

</v-clicks>

</template>
</Lang>

---

<Lang>
<template #uk>

# Еволюція правил: як не перетворити їх на смітник

<v-clicks>

- Додаємо правило, коли агент **повторює ту саму помилку**
- Видаляємо/оновлюємо правила після зміни стеку/архітектури
- Зміни правил = **PR + ревʼю** (як `.github/workflows`)
- Тримайте правила короткими: “чим менше — тим краще”

</v-clicks>

</template>
<template #en>

# Rule evolution: how not to turn them into clutter

<v-clicks>

- Add a rule when the agent **repeats the same mistake**
- Remove/update rules after stack/architecture changes
- Rule changes = **PR + review** (like `.github/workflows`)
- Keep rules short: “less is better”.

</v-clicks>

</template>
</Lang>
