import React from 'react'
import { profile } from '../data/profile'
import type { Translation } from '../i18n'

interface Props {
  t: Translation
}

export const Voicereels: React.FC<Props> = ({ t }) => (
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
