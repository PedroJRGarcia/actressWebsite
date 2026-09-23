import React from 'react'
import { profile } from '../data/profile'
import type { Translation } from '../i18n'

interface Props {
  t: Translation
}

export const Showreels: React.FC<Props> = ({ t }) => (
  <section id='showreels'>
    <h2>{t.nav.showreels}</h2>
    <div className='reels'>
      {profile.showreels.map(reel => (
        <figure key={reel.title}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${reel.youtubeId}`}
            title={reel.title}
            loading='lazy'
            allow='encrypted-media; picture-in-picture; fullscreen'
            allowFullScreen
          />
          <figcaption>{reel.title}</figcaption>
        </figure>
      ))}
    </div>
  </section>
)
