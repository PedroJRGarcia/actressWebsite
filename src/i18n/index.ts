// Languages of the site. The texts themselves are in texts.ts and legal.ts.

// Order of the buttons in the language switcher, and the language the site opens in
export const languages = ['en', 'es', 'de'] as const
export type Lang = (typeof languages)[number]
export const defaultLang: Lang = 'de'

// A text is either the same in every language ('Showreels')
// or has one version per language ({ de: 'Kontakt', en: 'Contact', es: 'Contacto' })
export type Text = string | Record<Lang, string>

// t(text) gives the text in the chosen language: t({ de: 'Kontakt', en: 'Contact', … }) → 'Kontakt'
export type T = (text: Text) => string
export function makeT(lang: Lang): T {
  return text => {
    if (typeof text === 'string') return text // same in every language
    return text[lang] // the version for the chosen language
  }
}

// Every section receives t
export interface SectionProps {
  t: T
}
