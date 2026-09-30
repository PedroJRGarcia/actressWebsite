import { BookOpen, Clapperboard, Drama, Film, GraduationCap, Monitor, type LucideIcon } from 'lucide-react'
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
        <img
          className='vita-image'
          src={publicFile(`photos/vita/${entry.image.file}`)}
          alt={t(entry.title)}
          loading='lazy'
        />
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

// Small line icon + text. Hovering shows what it is (e.g. "Regie")
function IconText({ icon: Icon, label, text }: { icon: LucideIcon; label: string; text: string }) {
  return (
    <span className='vita-item' title={label}>
      <Icon aria-label={label} size={14} strokeWidth={1.75} />
      {text}
    </span>
  )
}
