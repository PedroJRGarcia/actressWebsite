// Small building blocks used by several sections
import type { ReactNode } from 'react'
import { copyrightOf } from '../content'
import type { SpokenLang } from '../data/types'

// A page section: anchor for the menu (#id) + small grey title
export function Section({
  id,
  title,
  className,
  children,
}: {
  id: string
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={className}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// Link to another website, opened in a new tab
export function ExternalLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  return (
    <a href={href} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}

// "© Author": on top of a photo or video, or as a small line below (below)
export function Copyright({ of, below }: { of: { copyright?: string }; below?: boolean }) {
  return <small className={below ? 'copyright-text' : 'copyright'}>© {copyrightOf(of)}</small>
}

// Small "DE" / "ES" / "EN" tag, each language in its own soft colour (.lang-tag in index.css)
export function LangTag({ lang }: { lang: SpokenLang }) {
  return <span className={`lang-tag lang-${lang}`}>{lang.toUpperCase()}</span>
}
