import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

export const Credits: React.FC<SectionProps> = ({ t }) => (
  <section id='credits'>
    <h2>{t.nav.credits}</h2>
    <div className='table-wrapper'>
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
          {profile.credits.map(credit => (
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
    </div>
  </section>
)
