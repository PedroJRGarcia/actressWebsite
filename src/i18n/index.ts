// Translated texts. To add a language: create its JSON file and register it here.
import de from './de.json'
import en from './en.json'
import es from './es.json'

export type Translation = typeof en

// Typed as Translation so TypeScript warns if es/de miss a key from en
export const translations = { en, es, de } satisfies Record<string, Translation>

export type Lang = keyof typeof translations
export const languages = Object.keys(translations) as Lang[]
export const defaultLang: Lang = 'de'
