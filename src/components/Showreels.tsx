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
          {'vimeoId' in reel ? (
            // dnt=1: Vimeo's "Do Not Track" mode, no tracking cookies
            <iframe
              src={`https://player.vimeo.com/video/${reel.vimeoId}?dnt=1&title=0&byline=0&portrait=0`}
              title={reel.title}
              loading='lazy'
              allow='fullscreen; picture-in-picture'
              allowFullScreen
            />
          ) : (
            <video src={reel.src} poster={reel.poster} controls preload='metadata' />
          )}
          <figcaption>{reel.title}</figcaption>
        </figure>
      ))}
    </div>
  </section>
)
