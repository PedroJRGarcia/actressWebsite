import { useEffect, useRef, useState, type Dispatch, type SetStateAction, type TouchEvent } from 'react'
import { publicFile } from '../content'
import { photos } from '../data/photos'
import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { Copyright, Section } from './ui'

const photoUrl = (index: number) => publicFile(`photos/${photos[index].file}`)
const photoAlt = (index: number) => `${profile.name} ${index + 1}`

// Grid of photos. Clicking one opens it full screen
export function Gallery({ t }: SectionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Section id='gallery' title={t(texts.nav.gallery)}>
      <div className='gallery'>
        {photos.map((photo, i) => (
          <button key={photo.file} onClick={() => setOpen(i)}>
            <img src={photoUrl(i)} alt={photoAlt(i)} loading='lazy' />
            <Copyright of={photo} />
          </button>
        ))}
      </div>
      {open !== null && <Lightbox index={open} setIndex={setOpen} />}
    </Section>
  )
}

// Full-screen viewer: arrows / swipe to move, dots to jump, Esc / ✕ / dark background to close
type LightboxProps = { index: number; setIndex: Dispatch<SetStateAction<number | null>> }

function Lightbox({ index, setIndex }: LightboxProps) {
  const touchStartX = useRef(0)
  const close = () => setIndex(null)
  // Previous/next photo, looping at both ends (works from the latest photo, even with fast key presses)
  const move = (step: number) => setIndex(i => ((i ?? 0) + step + photos.length) % photos.length)

  // Keyboard, and no page scrolling behind the viewer
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') move(1)
      if (event.key === 'ArrowLeft') move(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  })

  // Phone: swipe left = next, swipe right = previous
  const onTouchEnd = (event: TouchEvent) => {
    const distance = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1)
  }

  return (
    <div
      className='lightbox'
      role='dialog'
      aria-modal='true'
      onClick={close}
      onTouchStart={event => (touchStartX.current = event.touches[0].clientX)}
      onTouchEnd={onTouchEnd}>
      {/* stopPropagation: clicking the photo or the dots must not close the viewer */}
      <figure className='media' onClick={event => event.stopPropagation()}>
        <img src={photoUrl(index)} alt={photoAlt(index)} />
        <Copyright of={photos[index]} />
      </figure>

      <button className='lightbox-close' aria-label='Close'>
        ✕
      </button>

      <div className='lightbox-dots' onClick={event => event.stopPropagation()}>
        {photos.map((photo, i) => (
          <button
            key={photo.file}
            className={i === index ? 'active' : ''}
            aria-label={`${i + 1} / ${photos.length}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
