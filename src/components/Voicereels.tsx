import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

export const Voicereels: React.FC<SectionProps> = ({ t }) => (
  <section id='voicereels'>
    <h2>{t.nav.voicereels}</h2>
    <div className='voicereels'>
      {profile.voicereels.map(reel => (
        <div key={reel.title} className='card'>
          <p>{reel.title}</p>
          <audio controls preload='none' src={reel.src} />
        </div>
      ))}
    </div>
  </section>
)
