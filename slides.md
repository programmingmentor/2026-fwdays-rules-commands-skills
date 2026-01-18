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

<Lang>
<template #uk>

# Правила, команди та навички для Agentic IDE

В’ячеслав Колдовський

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="mt-6">
  <LanguageSelector variant="full" />
</div>

</template>
<template #en>

# Rules, Commands, and Skills for Agentic IDE

Vyacheslav Koldovskyy

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="mt-6">
  <LanguageSelector variant="full" />
</div>

</template>
</Lang>

<style>
  .social-link {
    text-decoration: none;
    border: 2.4px solid transparent;
    display: block;
  }
  .social-link:hover {
    border-color: var(--slidev-theme-primary);
  }
</style>

---
class: text-center
---

<Lang>
<template #uk>

<div class="absolute inset-0 w-full h-full" style="background-image: url('/fw-days-promo.jpg'); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>

</template>
<template #en>

<div class="absolute inset-0 w-full h-full" style="background-image: url('/fw-days-promo.jpg'); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>

</template>
</Lang>

<style>
  .slidev-page {
    background: transparent !important;
  }
</style>

---
layout: image-left
image: /vyacheslav-koldovskyy.png
---

<Lang>
<template #uk>

# В’ячеслав Колдовський

- Ph.D, доцент, 20+ років в IT
- Competence Manager, SoftServe
- Certified Google Cloud Professional Architect, Certified NVIDIA Generative AI with LLMs
- Керівник Центру Генеративного AI в IT STEP University
- Ютубер: [youtube.com/@programmingmentorua](https://www.youtube.com/@programmingmentorua)
- Блогер: [t.me/programmingmentor](https://t.me/programmingmentor)
- Лінкедін: [koldovsky](https://www.linkedin.com/in/koldovsky/)

</template>
<template #en>

# Vyacheslav Koldovskyy

- Ph.D., Associate Professor, 20+ years in IT
- Competence Manager, SoftServe
- Certified Google Cloud Professional Architect, Certified NVIDIA Generative AI with LLMs
- Head of the Generative AI Center at IT STEP University
- YouTuber: [youtube.com/@programmingmentorua](https://www.youtube.com/@programmingmentorua)
- Blogger: [t.me/programmingmentor](https://t.me/programmingmentor)
- LinkedIn: [koldovsky](https://www.linkedin.com/in/koldovsky/)

</template>
</Lang>

---
layout: center
---

<Lang>
<template #uk>

# Навігація

<div class="mt-8 flex justify-center gap-6">
  <Link
    to="theory"
    class="px-6 py-3 rounded text-lg bg-white/10 hover:bg-white/20"
  >
    Теоретична частина
  </Link>
  <Link
    to="practice"
    class="px-6 py-3 rounded text-lg bg-white/10 hover:bg-white/20"
  >
    Практична частина
  </Link>
</div>

</template>
<template #en>

# Navigation

<div class="mt-8 flex justify-center gap-6">
  <Link
    to="theory"
    class="px-6 py-3 rounded text-lg bg-white/10 hover:bg-white/20"
  >
    Theory
  </Link>
  <Link
    to="practice"
    class="px-6 py-3 rounded text-lg bg-white/10 hover:bg-white/20"
  >
    Practice
  </Link>
</div>

</template>
</Lang>

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
src: ./pages/theory/05-skills.md
---

---
src: ./pages/theory/06-memory-bank.md
---

---
src: ./pages/theory/07-quality-safety.md
---

---
src: ./pages/theory/08-requirements-to-rules.md
---

---
src: ./pages/theory/09-bonus-ralph-wiggum.md
---

---
src: ./pages/theory/10-wrap-up.md
---

---
src: ./pages/practice/00-workshop-agenda.md
---

---
src: ./pages/practice/01-rules.md
---

---
src: ./pages/practice/02-commands.md
---

---
src: ./pages/practice/03-skills.md
---

---
src: ./pages/practice/04-skill-openai-image.md
---

---
src: ./pages/practice/05-wrap-up.md
---

---
layout: end
---

<Lang>
<template #uk>

# Дякую!

<div class="w-full flex justify-center mt-20">
  <a href="https://programmingmentor.github.io/2026-fwdays-rules-commands-skills/">programmingmentor.github.io/2026-fwdays-rules-commands-skills</a>
</div>

</template>
<template #en>

# Thank you!

<div class="w-full flex justify-center mt-20">
  <a href="https://programmingmentor.github.io/2026-fwdays-rules-commands-skills/">programmingmentor.github.io/2026-fwdays-rules-commands-skills</a>
</div>

</template>
</Lang>
