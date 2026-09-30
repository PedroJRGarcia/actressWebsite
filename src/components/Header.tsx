import { useEffect, useState } from 'react'
import { publicFile, upcoming } from '../content'
import { profile } from '../data/profile'
import { languages, type Lang, type SectionProps } from '../i18n'
import { texts } from '../i18n/texts'

// Menu links, in page order. "Upcoming" only shows while there are upcoming dates
const menu = [
  'home',
  ...(upcoming.length > 0 ? ['events' as const] : []),
  'showreels',
  'gallery',
  'audio',
  'vita',
  'contact',
] as const

type HeaderProps = SectionProps & { lang: Lang; setLang: (lang: Lang) => void }

// Name (links to the top), menu, CV button, language switcher.
// On narrow screens the menu folds behind the ☰ button.
export function Header({ t, lang, setLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Transparent over the start photo, solid once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled || menuOpen ? 'header solid' : 'header'}>
      <a className='logo' href='#home'>
        {profile.name}
      </a>

      {/* Clicking any link closes the phone menu */}
      <nav className={menuOpen ? 'nav open' : 'nav'} onClick={() => setMenuOpen(false)}>
        {menu.map(id => (
          <a key={id} href={`#${id}`}>
            {t(texts.nav[id])}
          </a>
        ))}
        <a className='button' href={publicFile(profile.resume)} download>
          {t(texts.resume)} ↓
        </a>
      </nav>

      <div className='lang'>
        {languages.map(code => (
          <button key={code} className={code === lang ? 'active' : ''} onClick={() => setLang(code)}>
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <button className='menu-toggle' aria-label='Menu' aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
