import React from 'react'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'

const { photos } = profile

// Moves to the previous/next photo, looping at both ends
const step = (index: number | null, direction: number) =>
  index === null ? null : (index + direction + photos.length) % photos.length

export const Gallery: React.FC<SectionProps> = ({ t }) => {
  const [index, setIndex] = React.useState<number | null>(null)
  const touchStartX = React.useRef(0)
  const isOpen = index !== null

  // While open: keyboard navigation and no page scroll behind the lightbox
  React.useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIndex(null)
      if (event.key === 'ArrowRight') setIndex(i => step(i, 1))
      if (event.key === 'ArrowLeft') setIndex(i => step(i, -1))
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Mobile: swipe left = next photo, swipe right = previous photo
  const onTouchEnd = (event: React.TouchEvent) => {
    const distance = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(distance) > 50) setIndex(i => step(i, distance < 0 ? 1 : -1))
  }

  return (
    <section id='gallery'>
      <h2>{t.nav.gallery}</h2>
      <div className='gallery'>
        {photos.map((photo, i) => (
          <button key={photo.src} onClick={() => setIndex(i)}>
            <img src={photo.src} alt={`${profile.name} ${i + 1}`} loading='lazy' />
            <small className='copyright'>© {photo.copyright}</small>
          </button>
        ))}
      </div>

      {isOpen && (
        // Clicking the dark background or ✕ closes it
        <div
          className='lightbox'
          role='dialog'
          aria-modal='true'
          onClick={() => setIndex(null)}
          onTouchStart={event => (touchStartX.current = event.touches[0].clientX)}
          onTouchEnd={onTouchEnd}>
          <figure className='media' onClick={event => event.stopPropagation()}>
            <img src={photos[index].src} alt={`${profile.name} ${index + 1}`} />
            <small className='copyright'>© {photos[index].copyright}</small>
          </figure>
          <button className='lightbox-close' aria-label='Close'>
            ✕
          </button>
          {/* One dot per photo: click to jump to it */}
          <div className='lightbox-dots' onClick={event => event.stopPropagation()}>
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                className={i === index ? 'active' : ''}
                aria-label={`${i + 1} / ${photos.length}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
