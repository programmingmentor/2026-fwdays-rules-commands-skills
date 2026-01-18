<script setup lang="ts">
import { computed } from 'vue'

import { useLanguage } from '../snippets/use-language'

type SelectorVariant = 'compact' | 'full'

const props = withDefaults(defineProps<{ variant?: SelectorVariant }>(), {
  variant: 'compact',
})

const { language, setLanguage } = useLanguage()

const isEnglish = computed(() => language.value === 'en')
const toggleLabel = computed(() =>
  props.variant === 'full' ? (isEnglish.value ? 'English' : 'Українська') : isEnglish.value ? 'EN' : 'UK',
)

function toggleLanguage() {
  setLanguage(isEnglish.value ? 'uk' : 'en')
}
</script>

<template>
  <div class="lang-wrapper" :class="props.variant">
    <button
      class="lang-toggle"
      :class="props.variant"
      type="button"
      @click="toggleLanguage"
    >
      {{ toggleLabel }}
    </button>
  </div>
</template>

<style scoped>
.lang-wrapper {
  display: inline-block;
  align-items: center;
  padding: 0;
  margin: 0;
  line-height: 1;
  font-size: inherit;
  white-space: nowrap;
  height: auto;
  width: auto;
  min-width: 0;
  min-height: 0;
  max-height: 20px;
  overflow: hidden;
}

.lang-wrapper.full {
  max-height: none;
}

.lang-toggle {
  background: transparent !important;
  border: none;
  padding: 0;
  margin: 0;
  min-width: 0;
  min-height: 0;
  line-height: 1;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  box-shadow: none;
  border-radius: 0;
}

.lang-toggle.full {
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  letter-spacing: 0.02em;
}

.lang-toggle:hover {
  color: rgba(255, 255, 255, 0.9);
}
</style>
