import { BookOpen, Clapperboard, Drama, Film, GraduationCap, Monitor, type LucideIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { publicFile } from '../content'
import type { VitaEntry } from '../data/types'
import { vita } from '../data/vita'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { ExternalLink, Section } from './ui'

// The three dropdowns, in this order. placeIcon marks the school / production company / theatre
const groups = [
  { key: 'training', placeIcon: GraduationCap, placeLabel: 'school' },
  { key: 'film', placeIcon: Monitor, placeLabel: 'studio' },
  { key: 'theater', placeIcon: Drama, placeLabel: 'stage' },
] as const

type Group = (typeof groups)[number]

export function Vita({ t }: SectionProps) {
  return (
    <Section id='vita' title={t(texts.nav.vita)}>
      {groups.map(group => (
        <details key={group.key} className='vita-group'>
          <summary>{t(texts.vita[group.key])}</summary>
          <ul className='vita-list'>
            {vita[group.key].map((entry, i) => (
              <Entry key={i} t={t} entry={entry} group={group} />
            ))}
          </ul>
        </details>
      ))}
    </Section>
  )
}

// One row: year | poster | title, author | role | director, production, place, link
function Entry({ t, entry, group }: SectionProps & { entry: VitaEntry; group: Group }) {
  return (
    <li className='vita-entry'>
      <span className='vita-year'>{entry.year}</span>

      {entry.image ? (
        <Poster file={entry.image.file} copyright={entry.image.copyright} alt={t(entry.title)} />
      ) : (
        <span className='vita-no-image' />
      )}

      <div>
        <p className='strong'>
          {t(entry.title)}
          {entry.tag && <span className='muted vita-tag'> ({t(texts.vita[entry.tag])})</span>}
        </p>
        {entry.author && (
          <span className='vita-small'>
            <IconText icon={BookOpen} label={t(texts.vita.author)} text={t(entry.author)} />
          </span>
        )}
        {entry.image && (
          <span className='vita-small'>
            {t(texts.vita.photo)}: © {entry.image.copyright}
          </span>
        )}
      </div>

      <div>
        {entry.role && <p>{t(entry.role)}</p>}
        {entry.part && <span className='vita-small'>{t(texts.vita[entry.part])}</span>}
      </div>

      <div className='muted vita-people'>
        {entry.director && <IconText icon={Clapperboard} label={t(texts.vita.director)} text={entry.director} />}
        {entry.production && <IconText icon={Film} label={t(texts.vita.production)} text={entry.production} />}
        <IconText icon={group.placeIcon} label={t(texts.vita[group.placeLabel])} text={entry.place} />
        {entry.url && (
          <ExternalLink className='more-link' href={entry.url}>
            {t(texts.events.more)} ↗
          </ExternalLink>
        )}
      </div>
    </li>
  )
}

// Small poster; clicking it shows it bigger. Click again or press Esc to close
function Poster({ file, copyright, alt }: { file: string; copyright: string; alt: string }) {
  const [big, setBig] = useState(false)
  const src = publicFile(`photos/vita/${file}`)

  // While big: Esc closes, and the page behind does not scroll
  useEffect(() => {
    if (!big) return
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setBig(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [big])

  return (
    <>
      <button className='vita-image' onClick={() => setBig(true)}>
        <img src={src} alt={alt} loading='lazy' />
      </button>
      {big && (
        <div className='lightbox' role='dialog' aria-modal='true' onClick={() => setBig(false)}>
          <figure className='media'>
            <img src={src} alt={alt} />
            <small className='copyright'>© {copyright}</small>
          </figure>
        </div>
      )}
    </>
  )
}

// Small line icon + text. Hovering shows what it is (e.g. "Regie")
function IconText({ icon: Icon, label, text }: { icon: LucideIcon; label: string; text: string }) {
  return (
    <span className='vita-item' title={label}>
      <Icon aria-label={label} size={14} strokeWidth={1.75} />
      {text}
    </span>
  )
}
