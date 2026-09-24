import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

export const Home: React.FC<SectionProps> = ({ t }) => (
  <section id='home' className='home'>
    <div className='prints'>
      {profile.homePhotos.map((photo, index) => (
        <figure key={`${index}-${photo}`} className='print'>
          <img src={photo} alt={`${profile.name} ${index + 1}`} />
        </figure>
      ))}
    </div>

    <div className='home-info'>
      <h1>{profile.name}</h1>
      <p className='home-role'>{t.role}</p>
      <p className='muted'>{t.basedIn}</p>
      <a className='button' href='#showreels'>
        {t.watchReel}
      </a>
    </div>

    <dl className='stats'>
      {t.stats.map(stat => (
        <div key={stat.label}>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  </section>
)
