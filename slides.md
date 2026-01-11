---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Правила, команди та навички для Agentic IDE
info: |
  ## Правила, команди та навички для Agentic IDE

# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# take snapshot for each slide in the overview
overviewSnapshots: true
---

# Правила, команди та навички для Agentic IDE

В'ячеслав Колдовський

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="m-6 flex gap-2 fixed bottom-0 left-0">
  <a href="https://www.youtube.com/c/programmingmentorua">
    <div class="h-8 w-8">
      <img src="/pm-logo.jpg" class="h-full w-full rounded-full"/>
    </div>
  </a>
</div>

<style>
  a {
    text-decoration: none;
    border: 2.4px solid transparent;
  }
  a:hover {
    border-color: var(--slidev-theme-primary);
  }
</style>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-left
image: /vyacheslav-koldovskyy.png
---

# В'ячеслав Колдовський

- Ph.D, доцент, 20+ років в IT
- Competence Manager, SoftServe
- Certified Google Cloud Professional Architect, Certified nVidia Generative AI with LLMs
- Керівник Центру Генеративного AI в IT STEP University
- Ютубер: [youtube.com/@programmingmentorua](https://www.youtube.com/@programmingmentorua)
- Блогер: [t.me/programmingmentor](https://t.me/programmingmentor)
- Лінкедін: [koldovsky](https://www.linkedin.com/in/koldovsky/)

---
src: ./pages/theory/00-agenda.md
---

---
src: ./pages/theory/01-paradigm-shift.md
---

---
src: ./pages/theory/02-agentic-architecture.md
---

---
src: ./pages/theory/03-rules-systems.md
---

---
src: ./pages/theory/04-commands-skills-workflows.md
---

---
src: ./pages/theory/04b-skills.md
---

---
src: ./pages/theory/05-memory-bank.md
---

---
src: ./pages/theory/06-quality-safety.md
---

---
src: ./pages/theory/07-requirements-to-rules.md
---

---
src: ./pages/theory/08-wrap-up.md
---

---
layout: end
---

# Дякую!

<div class="w-full flex justify-center mt-20">
  <a href="https://programmingmentor.github.io/2026-fwdays-rules-commands-skills/">https://programmingmentor.github.io/2026-fwdays-rules-commands-skills/</a>
</div>
