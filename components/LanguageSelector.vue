<script setup lang="ts">
import { computed } from 'vue'

import { useLanguage } from '../snippets/use-language'

const { language, setLanguage } = useLanguage()

const isEnglish = computed(() => language.value === 'en')
const isUkrainian = computed(() => language.value === 'uk')
</script>

<template>
  <div class="inline-flex items-center gap-2">
    <button
      border="~ white/30 rounded"
      p="x-3 y-1"
      text="sm"
      :class="isEnglish ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'"
      type="button"
      @click="setLanguage('en')"
    >
      English
    </button>
    <button
      border="~ white/30 rounded"
      p="x-3 y-1"
      text="sm"
      :class="isUkrainian ? 'bg-white/20' : 'bg-white/5 hover:bg-white/10'"
      type="button"
      @click="setLanguage('uk')"
    >
      Українська
    </button>
  </div>
</template>
