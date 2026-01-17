import { computed, ref } from 'vue'

export type Language = 'en' | 'uk'

const language = ref<Language>('en')
const titleByLanguage: Record<Language, string> = {
  en: 'Rules, Commands, and Skills for Agentic IDE',
  uk: 'Правила, команди та навички для Agentic IDE',
}
let isInitialized = false
let hasListeners = false

function parseLanguageFromUrl(): Language {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const url = new URL(window.location.href)
  const langParam = url.searchParams.get('lang')

  if (langParam?.toLowerCase() === 'uk') {
    return 'uk'
  }

  return 'en'
}

function updateDocumentTitle(nextLanguage: Language): void {
  if (typeof document === 'undefined') {
    return
  }

  document.title = titleByLanguage[nextLanguage]
}

function syncLanguageFromUrl(): void {
  const nextLanguage = parseLanguageFromUrl()
  language.value = nextLanguage
  updateDocumentTitle(nextLanguage)
}

function ensureInitialized(): void {
  if (isInitialized) {
    return
  }

  isInitialized = true
  syncLanguageFromUrl()

  if (typeof window === 'undefined' || hasListeners) {
    return
  }

  hasListeners = true
  window.addEventListener('popstate', syncLanguageFromUrl)
}

function setLanguage(nextLanguage: Language): void {
  language.value = nextLanguage
  updateDocumentTitle(nextLanguage)

  if (typeof window === 'undefined') {
    return
  }

  const url = new URL(window.location.href)

  if (nextLanguage === 'uk') {
    url.searchParams.set('lang', 'uk')
  } else {
    url.searchParams.delete('lang')
  }

  window.history.replaceState({}, '', url.toString())
}

export function useLanguage() {
  ensureInitialized()

  return {
    language,
    isEnglish: computed(() => language.value === 'en'),
    isUkrainian: computed(() => language.value === 'uk'),
    setLanguage,
    syncLanguageFromUrl,
  }
}
