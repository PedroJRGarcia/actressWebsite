import React from 'react'
import { profile } from '../data/profile'
import type { Translation } from '../i18n'

interface Props {
  t: Translation
}

export const Gallery: React.FC<Props> = ({ t }) => {
  const [selected, setSelected] = React.useState<string | null>(null)

  return (
    <section id='gallery'>
      <h2>{t.nav.gallery}</h2>
      <div className='gallery'>
        {profile.photos.map((photo, index) => (
          <button key={photo} onClick={() => setSelected(photo)}>
            <img src={photo} alt={`${profile.name} ${index + 1}`} loading='lazy' />
          </button>
        ))}
      </div>

      {selected && (
        <div className='lightbox' onClick={() => setSelected(null)}>
          <img src={selected} alt={profile.name} />
        </div>
      )}
    </section>
  )
}
