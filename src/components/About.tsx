import { details, skills } from '../data/about'
import type { SectionProps } from '../i18n'
import { texts } from '../i18n/texts'
import { Events } from './Events'

// "About me": short text, a box of details, a box of skills with stars, then the upcoming events.
// The "Upcoming" menu link (#events) lands here, so both show together.
export function About({ t }: SectionProps) {
  return (
    <div id='events'>
      <section className='about'>
        <div>
          <h2>{t(texts.about.title)}</h2>
          <p className='about-text'>{t(texts.about.text)}</p>
        </div>

        <dl className='stats'>
          {details.map((detail, i) => (
            <div key={i}>
              <dt>{t(detail.label)}</dt>
              <dd>{t(detail.value)}</dd>
            </div>
          ))}
        </dl>

        <dl className='skills'>
          {skills.map((group, i) => (
            <div key={i}>
              <dt>{t(group.label)}</dt>
              <dd>
                {group.items.map((skill, j) => (
                  <span key={j} className='skill'>
                    {t(skill.name)}
                    {skill.level && (
                      <span className='skill-stars' aria-label={`${skill.level}/3`}>
                        {'★'.repeat(skill.level)}
                      </span>
                    )}
                    {skill.note && <small className='muted'>({t(skill.note)})</small>}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Events t={t} />
    </div>
  )
}
