import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { ExternalLink, Section } from './ui'

// Agency is optional: only shown when it is filled in in profile.ts
const { agency } = profile as { agency?: { name: string; url: string } }

// Email, agency, and one button per profile link (IMDb, Filmmakers…)
export function Contact({ t }: SectionProps) {
  return (
    <Section id='contact' className='contact' title={t(texts.nav.contact)}>
      <p>
        {t(texts.contact.email)}: <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      {agency && (
        <p>
          {t(texts.contact.agency)}: <ExternalLink href={agency.url}>{agency.name}</ExternalLink>
        </p>
      )}
      <div className='links'>
        {profile.links.map(link => (
          <ExternalLink key={link.label} className='button' href={link.url}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </Section>
  )
}
