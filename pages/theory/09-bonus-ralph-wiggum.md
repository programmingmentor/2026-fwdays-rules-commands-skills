---
layout: center
---

<Lang>
<template #uk>

# Bonus: Ralph Wiggum loop (agent orchestration)

<v-clicks>

- Мрія: прокинутися і побачити **working code** з backlog
- Замість swarm/mesh/orchestrator — простий цикл: **1 задача → зміна → перевірка → commit**
- Трюк працює, коли є сильна модель + суворі **feedback loops**.

</v-clicks>

</template>
<template #en>

# Bonus: Ralph Wiggum loop (agent orchestration)

<v-clicks>

- Dream: wake up and see **working code** from the backlog
- Instead of swarm/mesh/orchestrator — a simple loop: **1 task → change → verify → commit**
- It works when you have a strong model + strict **feedback loops**.

</v-clicks>

</template>
</Lang>

<!--
Термін “Ralph Wiggum” приписують Jeffrey Huntley (публікація: 14 липня).
Схожі ідеї: Anthropic “Effective harnesses for long-running agents” (PRD JSON + robust feedback loops).
-->

---
layout: center
---

<Lang>
<template #uk>

# Чому не “swarm” і не “mega-plan”

<v-clicks>

- Swarm/mesh: merge conflicts + приховані залежності
- Один великий план: context saturation → дрейф і гірша якість
- Інженерний цикл: взяв top-priority item → закрив → повернувся на board.

</v-clicks>

</template>
<template #en>

# Why not “swarm” and not “mega-plan”

<v-clicks>

- Swarm/mesh: merge conflicts + hidden dependencies
- One big plan: context saturation → drift and worse quality
- Engineering loop: take top-priority item → finish → return to board.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Артефакти: PRD + progress + git history

<v-clicks>

- `prd.json` = PRD (Product Requirements Document) як backlog з `passes: true/false`
- `progress.txt` = append-only “оперативна памʼять” спринту (що дізналися/зробили)
- Кожна ітерація = **1 фіча + 1 commit** → легко знайти “що зламало” і відкотитись.

</v-clicks>

</template>
<template #en>

# Artifacts: PRD + progress + git history

<v-clicks>

- `prd.json` = PRD (Product Requirements Document) backlog with `passes: true/false`
- `progress.txt` = append-only “working memory” of the sprint (what we learned/did)
- Each iteration = **1 feature + 1 commit** → easy to find “what broke” and roll back.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Loop як “канбан” для агента

```mermaid
flowchart LR
  PRD[PRD_JSON_backlog] --> Agent[Run_agent_CLI]
  Progress[progress_txt_append_only] --> Agent
  Agent --> Change[Implement_one_feature]
  Change --> Gates[Quality_gates_build_tests]
  Gates --> Update[Update_PRD_and_progress]
  Update --> Commit[Git_commit]
  Commit --> PRD
  Commit --> Progress
```

<v-clicks>

- Backstop: max iterations (щоб цикл не був нескінченним)
- Stop condition: агент друкує `PROMPT_COMPLETE` коли все `passes: true`.

</v-clicks>

</template>
<template #en>

# Loop as “kanban” for the agent

```mermaid
flowchart LR
  PRD[PRD_JSON_backlog] --> Agent[Run_agent_CLI]
  Progress[progress_txt_append_only] --> Agent
  Agent --> Change[Implement_one_feature]
  Change --> Gates[Quality_gates_build_tests]
  Gates --> Update[Update_PRD_and_progress]
  Update --> Commit[Git_commit]
  Commit --> PRD
  Commit --> Progress
```

<v-clicks>

- Backstop: max iterations (to avoid infinite loops)
- Stop condition: the agent prints `PROMPT_COMPLETE` when all `passes: true`.

</v-clicks>

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Мінімальний harness (bash)

```bash
set -euo pipefail

max="${1:?usage: ralph.sh <max-iterations>}"
agent="${AGENT_CMD:-codex}" # або claude/openai/cursor-cli/etc

for i in $(seq 1 "$max"); do
  echo "=== Iteration $i/$max ==="

  out="$("$agent" \
    --context plans/prd.json \
    --context plans/progress.txt \
    --prompt "Pick the highest-priority failing PRD item. Implement ONLY that. Run build/tests. 
    Update prd.json (passes=true) + append progress.txt. Commit. If all items pass, print PROMPT_COMPLETE.")"

  [[ "$out" == *"PROMPT_COMPLETE"* ]] && break
done
```

</template>
<template #en>

# Minimal harness (bash)

```bash
set -euo pipefail

max="${1:?usage: ralph.sh <max-iterations>}"
agent="${AGENT_CMD:-codex}" # or claude/openai/cursor-cli/etc

for i in $(seq 1 "$max"); do
  echo "=== Iteration $i/$max ==="

  out="$("$agent" \
    --context plans/prd.json \
    --context plans/progress.txt \
    --prompt "Pick the highest-priority failing PRD item. Implement ONLY that. Run build/tests. 
    Update prd.json (passes=true) + append progress.txt. Commit. If all items pass, print PROMPT_COMPLETE.")"

  [[ "$out" == *"PROMPT_COMPLETE"* ]] && break
done
```

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Щоб це реально “шипилось” (ship)

<v-clicks>

- Ріжемо PRD на дрібні items: **одна ітерація = одна невелика зміна**
- Quality gates: `build/test/typecheck` мають лишатися зеленими (ідеально — CI)
- Варіанти: AFK (overnight) vs human-in-the-loop (run once → steer → rerun)
- Роль людини: сформулювати “що правильно”, потім зробити review і поправити PRD.

</v-clicks>

</template>
<template #en>

# To make it actually ship

<v-clicks>

- Split PRD into small items: **one iteration = one small change**
- Quality gates: `build/test/typecheck` must stay green (ideally CI)
- Modes: AFK (overnight) vs human-in-the-loop (run once → steer → rerun)
- Human role: define “what’s correct”, then review and adjust PRD.

</v-clicks>

</template>
</Lang>
