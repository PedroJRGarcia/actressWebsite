import { useState } from 'react'
import { filmmakersVideo, publicFile } from '../content'
import { profile } from '../data/profile'
import { showreels } from '../data/showreels'
import type { Showreel } from '../data/types'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { Copyright, ExternalLink, LangTag, Section } from './ui'

// Each reel: the video (own file or Filmmakers), then its title, language tag and ©
export function Showreels({ t }: SectionProps) {
  return (
    <Section id='showreels' title={t(texts.nav.showreels)}>
      <div className='reels'>
        {showreels.map((reel, i) =>
          'video' in reel ? (
            <figure key={i}>
              <OwnVideo file={reel.video} poster={reel.poster} copyright={reel.copyright} />
              <figcaption>
                <span className='reel-title'>
                  {reel.title}
                  <LangTag lang={reel.lang} />
                </span>
              </figcaption>
            </figure>
          ) : (
            <FilmmakersReel key={i} t={t} reel={reel} />
          ),
        )}
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

type FilmmakersReel = Extract<Showreel, { filmmakers: unknown }>

// Filmmakers player with our own buttons to switch group (2023, About me…), each with its language.
// Its own top bar is cropped off (see .filmmakers-crop) and a small "Filmmakers" link takes its place.
// Privacy: nothing is loaded from Filmmakers until the visitor clicks ▶.
function FilmmakersReel({ t, reel }: SectionProps & { reel: FilmmakersReel }) {
  const groups = reel.filmmakers
  const [active, setActive] = useState(groups[0])
  const [loaded, setLoaded] = useState(false)
  // Language(s) of a group: its own if given, otherwise the reel's
  const langsOf = (group: FilmmakersReel['filmmakers'][number]) => [group.lang ?? reel.lang].flat()

  return (
    <figure>
      {groups.length > 1 && (
        <div className='reel-tabs'>
          {groups.map(group => (
            <button key={group.id} className={group === active ? 'active' : ''} onClick={() => setActive(group)}>
              {group.label}
              {langsOf(group).map(lang => (
                <LangTag key={lang} lang={lang} />
              ))}
            </button>
          ))}
        </div>
      )}

      <div className='media'>
        <div className='filmmakers-crop'>
          {loaded ? (
            <iframe
              className='filmmakers'
              src={filmmakersVideo(active.id)}
              title={reel.title}
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
            />
          ) : (
            // Before loading: a still of the video (from our own site), a ▶ button and a small privacy note
            <button
              className='click-to-load'
              onClick={() => setLoaded(true)}
              aria-label={t(texts.filmmakersConsent.button)}>
              {active.poster && <img src={publicFile(`videos/${active.poster}`)} alt='' />}
              <span className='play-icon'>▶</span>
              <small>{t(texts.filmmakersConsent.text)}</small>
            </button>
          )}
        </div>
        <ExternalLink className='filmmakers-badge' href={filmmakersProfile}>
          Filmmakers ↗
        </ExternalLink>
      </div>

      <figcaption>
        <span className='reel-title'>
          {reel.title}
          {langsOf(active).map(lang => (
            <LangTag key={lang} lang={lang} />
          ))}
        </span>
        {/* Filmmakers draws its own logo on top of the video, so its © goes below instead */}
        <Copyright of={reel} below />
      </figcaption>
    </figure>
  )
}
