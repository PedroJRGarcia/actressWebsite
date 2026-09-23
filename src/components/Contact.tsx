import React from 'react'
import { profile } from '../data/profile'
import type { Translation } from '../i18n'

interface Props {
  t: Translation
}

export const Contact: React.FC<Props> = ({ t }) => (
  <section id='contact' className='contact'>
    <h2>{t.nav.contact}</h2>
    <p>
      {t.contact.email}: <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </p>
    <p>
      {t.contact.agency}:{' '}
      <a href={profile.agency.url} target='_blank' rel='noreferrer'>
        {profile.agency.name}
      </a>
    </p>
    <div className='links'>
      {profile.links.map(link => (
        <a key={link.label} className='chip' href={link.url} target='_blank' rel='noreferrer'>
          {link.label}
        </a>
      ))}
    </div>
  </section>
)
