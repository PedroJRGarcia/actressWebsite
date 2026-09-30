import { useState } from 'react'
import { filmmakersVideo, publicFile } from '../content'
import { profile } from '../data/profile'
import { showreels } from '../data/showreels'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { Copyright, ExternalLink, LangTag, Section } from './ui'

// Each reel: the video (own file or Filmmakers), then its title, language tag and ©
export function Showreels({ t }: SectionProps) {
  return (
    <Section id='showreels' title={t(texts.nav.showreels)}>
      <div className='reels'>
        {showreels.map((reel, i) => (
          <figure key={i}>
            {'video' in reel ? (
              <OwnVideo file={reel.video} poster={reel.poster} copyright={reel.copyright} />
            ) : (
              <FilmmakersPlayer t={t} groups={reel.filmmakers} title={reel.title} />
            )}
            <figcaption>
              <span className='reel-title'>
                {reel.title}
                <LangTag lang={reel.lang} />
              </span>
              {/* Filmmakers draws its own logo on top of the video, so its © goes below instead */}
              {'filmmakers' in reel && <Copyright of={reel} below />}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

// Video file from public/videos/, with © on top
function OwnVideo({ file, poster, copyright }: { file: string; poster?: string; copyright?: string }) {
  return (
    <div className='media'>
      <video
        src={publicFile(`videos/${file}`)}
        poster={poster && publicFile(`videos/${poster}`)}
        controls
        preload='metadata'
      />
      <Copyright of={{ copyright }} />
    </div>
  )
}

const filmmakersProfile = profile.links.find(link => link.label === 'Filmmakers')?.url ?? ''

type FilmmakersProps = SectionProps & { groups: { label: string; id: number; poster?: string }[]; title: string }

// Filmmakers player with our own buttons to switch group (2023, About me…).
// Its own top bar is cropped off (see .filmmakers-crop) and a small "Filmmakers" link takes its place.
// Privacy: nothing is loaded from Filmmakers until the visitor clicks ▶.
function FilmmakersPlayer({ t, groups, title }: FilmmakersProps) {
  const [active, setActive] = useState(groups[0].id)
  const [loaded, setLoaded] = useState(false)
  const poster = groups.find(group => group.id === active)?.poster

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
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
            />
          ) : (
            // Before loading: a still of the video (from our own site), a ▶ button and a small privacy note
            <button
              className='click-to-load'
              onClick={() => setLoaded(true)}
              aria-label={t(texts.filmmakersConsent.button)}>
              {poster && <img src={publicFile(`videos/${poster}`)} alt='' />}
              <span className='play-icon'>▶</span>
              <small>{t(texts.filmmakersConsent.text)}</small>
            </button>
          )}
        </div>
        <ExternalLink className='filmmakers-badge' href={filmmakersProfile}>
          Filmmakers ↗
        </ExternalLink>
      </div>
    </>
  )
}
