import { BookOpen, Clapperboard, Drama, Film, Monitor, type LucideIcon } from 'lucide-react'
import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

// Small line icon + text. Hovering shows what it is (e.g. "Regie")
const Labeled: React.FC<{ icon: LucideIcon; label: string; text: string }> = ({ icon: Icon, label, text }) => (
  <span className='credit-item' title={label}>
    <Icon aria-label={label} size={14} strokeWidth={1.75} />
    {text}
  </span>
)

// Film and theater share the same columns; training has its own.
// Place icon: a screen for film companies, theatre masks for theatres
const RolesTable: React.FC<SectionProps & { credits: typeof profile.credits.film; kind: 'film' | 'theater' }> = ({
  t,
  credits,
  kind,
}) => (
  <table>
    <thead>
      <tr>
        <th>{t.creditsTable.year}</th>
        <th>{t.creditsTable.project}</th>
        <th>{t.creditsTable.role}</th>
        <th>{t.creditsTable.director}</th>
      </tr>
    </thead>
    <tbody>
      {credits.map(credit => (
        <tr key={`${credit.year}-${credit.title}`}>
          <td>{credit.year}</td>
          <td>
            <span className='strong'>{credit.title}</span>
            {credit.author && (
              <span className='credit-author'>
                <Labeled icon={BookOpen} label={t.creditIcons.author} text={credit.author} />
              </span>
            )}
          </td>
          <td>{credit.role}</td>
          <td className='muted credit-people'>
            {credit.director && <Labeled icon={Clapperboard} label={t.creditIcons.director} text={credit.director} />}
            {credit.production && <Labeled icon={Film} label={t.creditIcons.production} text={credit.production} />}
            {kind === 'film' ? (
              <Labeled icon={Monitor} label={t.creditIcons.studio} text={credit.company} />
            ) : (
              <Labeled icon={Drama} label={t.creditIcons.theater} text={credit.company} />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)

export const Credits: React.FC<SectionProps> = ({ t }) => (
  <section id='credits'>
    <h2>{t.nav.credits}</h2>

    {/* Dropdowns in this order: training, film, theater */}
    <details className='vita-group'>
      <summary>{t.vita.training}</summary>
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th>{t.creditsTable.year}</th>
              <th>{t.creditsTable.project}</th>
              <th>{t.creditsTable.school}</th>
            </tr>
          </thead>
          <tbody>
            {profile.credits.training.map(item => (
              <tr key={`${item.year}-${item.title}`}>
                <td>{item.year}</td>
                <td className='strong'>{item.title}</td>
                <td className='muted'>{item.school}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>

    <details className='vita-group'>
      <summary>{t.vita.film}</summary>
      <div className='table-wrapper'>
        <RolesTable t={t} credits={profile.credits.film} kind='film' />
      </div>
    </details>

    <details className='vita-group'>
      <summary>{t.vita.theater}</summary>
      <div className='table-wrapper'>
        <RolesTable t={t} credits={profile.credits.theater} kind='theater' />
      </div>
    </details>
  </section>
)
