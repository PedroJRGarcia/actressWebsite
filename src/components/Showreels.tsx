import React from 'react'
import { filmmakersVideo, profile } from '../data/profile'
import type { SectionProps } from '../i18n'

const filmmakersProfile = profile.links.find(link => link.label === 'Filmmakers')?.url

// Filmmakers player with our own buttons to switch group (2023, About me…).
// The player's own top bar (name + a menu listing every video and audio) is cropped off,
// and a small "Filmmakers" link takes its place.
// Privacy: nothing is loaded from Filmmakers until the visitor clicks "Load video" (click to load).
const FilmmakersPlayer: React.FC<SectionProps & { groups: { label: string; id: number }[]; title: string }> = ({
  t,
  groups,
  title,
}) => {
  const [active, setActive] = React.useState(groups[0].id)
  const [loaded, setLoaded] = React.useState(false)
  return (
    <>
      {groups.length > 1 && (
        <div className='reel-tabs'>
          {groups.map(group => (
            <button key={group.id} className={group.id === active ? 'active' : ''} onClick={() => setActive(group.id)}>
              {group.label}
            </button>
          ))}
        </div>
      )}
      <div className='media'>
        <div className='filmmakers-crop'>
          {loaded ? (
            <iframe
              className='filmmakers'
              src={filmmakersVideo(active)}
              title={title}
              allow='fullscreen; picture-in-picture'
              allowFullScreen
            />
          ) : (
            <div className='click-to-load'>
              <p>{t.filmmakersConsent.text}</p>
              <button className='button' onClick={() => setLoaded(true)}>
                {t.filmmakersConsent.button}
              </button>
            </div>
          )}
        </div>
        <a className='filmmakers-badge' href={filmmakersProfile} target='_blank' rel='noreferrer'>
          Filmmakers ↗
        </a>
      </div>
    </>
  )
}

export const Showreels: React.FC<SectionProps> = ({ t }) => (
  <section id='showreels'>
    <h2>{t.nav.showreels}</h2>
    <div className='reels'>
      {profile.showreels.map((reel, index) => (
        <figure key={`${index}-${reel.title}`}>
          {'src' in reel ? (
            <div className='media'>
              <video src={reel.src} poster={reel.poster} controls preload='metadata' />
              <small className='copyright'>© {reel.copyright}</small>
            </div>
          ) : (
            <FilmmakersPlayer t={t} groups={reel.filmmakers} title={reel.title} />
          )}
          <figcaption>
            {reel.title}
            {/* Filmmakers draws its own logo on top of the video, so its © goes below instead */}
            {!('src' in reel) && <small className='copyright-text'>© {reel.copyright}</small>}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
)
