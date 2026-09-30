import { profile } from '../data/profile'
import type { SectionProps } from '../i18n'
import { legal } from '../i18n/legal'
import { texts } from '../i18n/texts'
import { ExternalLink } from './ui'

// Turns the web addresses inside a text into links
const withLinks = (text: string) =>
  text.split(/(https:\/\/\S+)/).map((part, i) =>
    part.startsWith('https://') ? (
      <ExternalLink key={i} href={part}>
        {part.replace('https://', '')}
      </ExternalLink>
    ) : (
      part
    ),
  )

// © line, credit, and the legal texts (src/i18n/legal.ts) as two dropdowns
export function Footer({ t }: SectionProps) {
  return (
    <footer className='footer'>
      <p>
        © {new Date().getFullYear()} <span className='footer-name'>{profile.name}</span>. {t(texts.footer.rights)}
      </p>
      <p className='muted'>
        {t(texts.footer.createdBy)} {profile.creator}
      </p>

      <details>
        <summary>{t(texts.footer.impressum)}</summary>
        <p>{t(legal.impressumText)}</p>
      </details>

      <details>
        <summary>{t(texts.footer.privacy)}</summary>
        <div className='privacy'>
          {legal.privacySections.map((section, i) => (
            <div key={i}>
              {section.title && <h3>{t(section.title)}</h3>}
              <p>{withLinks(t(section.text))}</p>
            </div>
          ))}
        </div>
      </details>
    </footer>
  )
}
