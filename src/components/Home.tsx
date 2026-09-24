import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

export const Home: React.FC<SectionProps> = ({ t }) => (
  <>
    {/* Arrival: one big photo with the name and the showreel button */}
    <section id='home' className='hero'>
      <img src={profile.heroPhoto} alt={profile.name} />
      <div className='hero-content'>
        <h1>{profile.name}</h1>
        <p className='hero-role'>{t.role}</p>
        <a className='button' href='#showreels'>
          {t.watchReel}
        </a>
      </div>
    </section>

    {/* A little about Elina, then her details */}
    <section className='about'>
      <div>
        <h2>{t.about.title}</h2>
        <p className='about-text'>{t.about.text}</p>
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
  </>
)
