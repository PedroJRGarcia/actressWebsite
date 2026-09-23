import React from 'react'
import { profile } from '../data/profile'
import type { Translation } from '../i18n'

interface Props {
  t: Translation
}

export const Home: React.FC<Props> = ({ t }) => (
  <section id='home' className='home'>
    <img className='home-headshot' src={profile.headshot} alt={profile.name} />
    <div>
      <h1>{profile.name}</h1>
      <p className='home-role'>{t.role}</p>
      <p className='muted'>{t.basedIn}</p>
      <dl className='stats'>
        {t.stats.map(stat => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <a className='button' href='#showreels'>
        {t.watchReel}
      </a>
    </div>
  </section>
)
