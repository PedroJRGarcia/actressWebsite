import React from 'react'
import { Contact } from './components/Contact'
import { Credits } from './components/Credits'
import { Gallery } from './components/Gallery'
import { Home } from './components/Home'
import { Showreels } from './components/Showreels'
import { VisitorDot } from './components/VisitorDot'
import { Voicereels } from './components/Voicereels'
import { profile } from './data/profile'
import { defaultLang, languages, translations, type Lang } from './i18n'

const sections = ['home', 'showreels', 'gallery', 'voicereels', 'credits', 'contact'] as const

export const App: React.FC = () => {
  const [lang, setLang] = React.useState<Lang>(defaultLang)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const t = translations[lang]

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  // Header is transparent over the start photo and turns solid once the page scrolls
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={scrolled || menuOpen ? 'header solid' : 'header'}>
        <a className='logo' href='#home'>
          {profile.name}
        </a>
        {/* Clicking any link closes the mobile menu */}
        <nav className={menuOpen ? 'nav open' : 'nav'} onClick={() => setMenuOpen(false)}>
          {sections.map(id => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
            </a>
          ))}
          <a className='button' href={profile.resume} download>
            {t.resume} ↓
          </a>
        </nav>
        <div className='lang'>
          {languages.map(code => (
            <button key={code} className={code === lang ? 'active' : ''} onClick={() => setLang(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className='menu-toggle'
          aria-label='Menu'
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      <main>
        <Home t={t} />
        <Showreels t={t} />
        <Gallery t={t} />
        <Voicereels t={t} />
        <Credits t={t} />
        <Contact t={t} />
      </main>

      <footer className='footer'>
        <p>
          © {new Date().getFullYear()} <span className='footer-name'>{profile.name}</span>. {t.footer.rights}
        </p>
        <p className='muted'>
          {t.footer.createdBy} {profile.creator}
        </p>
        <details>
          <summary>{t.footer.impressum}</summary>
          <p>{t.footer.impressumText}</p>
        </details>
        <details>
          <summary>{t.footer.privacy}</summary>
          <p>{t.footer.privacyText}</p>
        </details>
        <VisitorDot />
      </footer>
    </>
  )
}
