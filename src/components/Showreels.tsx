import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

export const Showreels: React.FC<SectionProps> = ({ t }) => (
  <section id='showreels'>
    <h2>{t.nav.showreels}</h2>
    <div className='reels'>
      {profile.showreels.map((reel, index) => (
        <figure key={`${index}-${reel.title}`}>
          <div className='media'>
            {'src' in reel ? (
              <video src={reel.src} poster={reel.poster} controls preload='metadata' />
            ) : (
              <iframe
                src={
                  'vimeoId' in reel
                    ? // dnt=1: Vimeo's "Do Not Track" mode, no tracking cookies
                      `https://player.vimeo.com/video/${reel.vimeoId}?dnt=1&title=0&byline=0&portrait=0`
                    : reel.filmmakersUrl
                }
                title={reel.title}
                loading='lazy'
                allow='fullscreen; picture-in-picture'
                allowFullScreen
              />
            )}
            <small className='copyright'>© {reel.copyright}</small>
          </div>
          <figcaption>{reel.title}</figcaption>
        </figure>
      ))}
    </div>
  </section>
)
