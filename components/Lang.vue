<script setup lang="ts">
import { computed } from 'vue'

import { useLanguage } from '../snippets/use-language'

const { language } = useLanguage()
const isEnglish = computed(() => language.value === 'en')
</script>

<template>
  <div>
    <slot v-if="isEnglish" name="en" />
    <slot v-else name="uk" />
  </div>
</template>
