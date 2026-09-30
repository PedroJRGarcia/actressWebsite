import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Audio } from './components/Audio'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Showreels } from './components/Showreels'
import { Vita } from './components/Vita'
import { defaultLang, makeT, type Lang } from './i18n'

// The page, top to bottom. Each section is one file in components/
export function App() {
  const [lang, setLang] = useState<Lang>(defaultLang)
  const t = makeT(lang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Showreels t={t} />
        <Gallery t={t} />
        <Audio t={t} />
        <Vita t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}
