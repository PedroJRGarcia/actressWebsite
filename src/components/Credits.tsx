import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

// Film and theater share the same columns; training has its own
const RolesTable: React.FC<SectionProps & { credits: typeof profile.credits.film }> = ({ t, credits }) => (
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
          <td className='strong'>{credit.title}</td>
          <td>{credit.role}</td>
          <td className='muted'>
            {credit.director} · {credit.company}
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
        <RolesTable t={t} credits={profile.credits.film} />
      </div>
    </details>

    <details className='vita-group'>
      <summary>{t.vita.theater}</summary>
      <div className='table-wrapper'>
        <RolesTable t={t} credits={profile.credits.theater} />
      </div>
    </details>
  </section>
)
