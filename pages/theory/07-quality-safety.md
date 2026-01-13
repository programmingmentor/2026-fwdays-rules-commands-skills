---
layout: center
---

# Якість, безпека, комплаєнс (Quality, Security, Compliance)

<v-clicks>

- Агент підсилює продуктивність **і** ризики
- Тому потрібні **guardrails + перевірки + процес**.

</v-clicks>

---

# Антипатерни правил (Rules anti-patterns)

<v-clicks>

- **Надто довгі** правила → модель ігнорує частину
- **Суперечливі** правила → нестабільна поведінка
- **Розпливчаті** (“зроби краще”) → scope creep
- **Неперевірні** (“без вразливостей”, “O(1) завжди”) → самообман.

</v-clicks>

<!--
Антипатерни детально: @docs/chatgpt-reasearch.md, @docs/gemini-research.md.
-->

---

# Definition of Done (DoD) для задачі агенту

<v-clicks>

- Що саме має бути зроблено (файли/функції/фічі)
- Які **обмеження** не порушити (API, міграції, ліцензії)
- Які **перевірки** мають пройти (build/test/lint)
- Який “неуспіх” (failure modes) і як реагуємо.

</v-clicks>

---

# Quality gates: “довіряй, але перевіряй”

<v-clicks>

- Мінімум: **build** після серії змін
- Добре: **tests** (особливо для бізнес-логіки)
- Ідеально: автоматизований цикл “поки зелене” (hooks/workflows).

</v-clicks>

```mermaid
flowchart LR
  Change[Change_code] --> Build[Build]
  Build --> Tests[Tests]
  Tests --> Review[Review_checklist]
```

---

# Security constraints (приклади “NEVER/ALWAYS”)

<v-clicks>

- ⛔ **NEVER**: хардкодити ключі/токени, додавати `.env` у git
- ✅ **ALWAYS**: валідувати інпути, параметризувати запити до БД
- ✅ **ALWAYS**: не логувати PII/секрети, не показувати stacktrace назовні
- ⚠️ **ASK FIRST**: мережеві запити, зміни IAM/ACL, відкриття портів.

</v-clicks>

---

# Dependency hygiene (залежності)

<v-clicks>

- Використовуйте **актуальні** версії бібліотек (уникаємо CVE/старих API)
- Prefer “мейнстрімні” пакети з активною підтримкою
- Політики: allow-list / deny-list залежностей.

</v-clicks>

---

# Ліцензії (License compliance)

<v-clicks>

- Ризик: AI може генерувати фрагменти, схожі на OSS-код
- Мітигації: сканери ліцензій у CI, політики “no copyleft”, атрибуція
- Практика: “agent suggests deps, human approves licenses”.

</v-clicks>

<!--
Про ризик “matching” коду і потребу сканінгу: @docs/gemini-research.md (license section).
-->

---

# Privacy & data governance

<v-clicks>

- Не вставляємо в промпти: **PII**, ключі, приватні URL, внутрішні інциденти
- Правило: “AI output = untrusted input” (перевіряємо як код від джуна)
- Розділяємо: публічні приклади vs внутрішні дані.

</v-clicks>

---

# Ревʼю: агент як перший ревʼюер, людина як фінальний

<v-clicks>

- Агент-ревʼюер: стиль, безпека, edge cases, consistency
- Чекліст ревʼю: архітектура, тести, безпека, ліцензії, ризики
- Людина: підтверджує намір, бізнес-логіку, trade-offs.

</v-clicks>
