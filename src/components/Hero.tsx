import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'

// Arrival: one big photo with the name and the showreel button
export function Hero({ t }: SectionProps) {
  return (
    <section id='home' className='hero'>
      <img src={profile.heroPhoto} alt={profile.name} />
      <small className='copyright'>© {profile.heroPhotoBy}</small>
      <div className='hero-content'>
        <h1>{profile.name}</h1>
        <p className='hero-role'>{t(texts.role)}</p>
        <a className='button' href='#showreels'>
          {t(texts.watchReel)}
        </a>
      </div>
    </section>
  )
}
