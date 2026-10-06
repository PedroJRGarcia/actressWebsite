import { filmmakersAudio, sortedAudios } from '../content'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { Copyright, LangTag, Section } from './ui'

// One card per audio: title + language tag, player, © line. Below them, a small Filmmakers privacy note
export function Audio({ t }: SectionProps) {
  return (
    <Section id='audio' title={t(texts.nav.audio)}>
      <div className='audios'>
        {sortedAudios.map(audio => (
          <div key={audio.title} className='card'>
            <p className='audio-title'>
              {audio.title}
              <LangTag lang={audio.lang} />
            </p>
            <audio controls preload='none' src={filmmakersAudio(audio.filmmakers)} />
            <Copyright of={audio} below />
          </div>
        ))}
      </div>
      <small className='audio-note'>{t(texts.filmmakersAudioNote)}</small>
    </Section>
  )
}
